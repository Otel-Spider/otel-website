import React, { useEffect, useRef } from 'react';
import { blogData } from '../../../data/blogData';
import styles from './BlogGrid.module.css';

const BlogGrid = ({ 
  title = "Latest Stories",
  subtitle = "Discover insights, ideas, and creativity."
}) => {
  const sectionRef = useRef(null);

  // Scroll-triggered animation
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            console.log('Item entering view:', entry.target);
            entry.target.classList.add('in-view');
            // Unobserve after first reveal to run once
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: '100px' }
    );

    // Observe all masonry items
    const masonryItems = sectionRef.current?.querySelectorAll('.masonryItem');
    if (masonryItems) {
      masonryItems.forEach((element) => {
        observer.observe(element);
      });
    }

    // Cleanup
    return () => {
      if (masonryItems) {
        masonryItems.forEach((element) => {
          observer.unobserve(element);
        });
      }
    };
  }, []);

  // Remove height classes - let images display naturally

  const renderBlogCard = (post, index) => {
    return (
      <div 
        key={post.id} 
        className={`${styles.masonryItem} delay-${index + 1}`}
      >
        <article className={styles.blogCard}>
          <div className={styles.imageContainer}>
            <img 
              src={post.image} 
              alt={post.title}
              className={styles.blogImage}
              loading="lazy"
            />
            <div className={styles.overlay}>
              <div className={styles.overlayContent}>
               
                <div className={styles.metaInfo}>
                  <span className={styles.date}>{post.date}</span>
                  <span className={styles.separator}>•</span>
                  <span className={styles.author}>{post.author}</span>
                  <span className={styles.separator}>•</span>
                  <span className={post.category}>{post.category}</span>
                  
                </div>
                <h3 className={styles.blogTitle}>
                  <a href="#" className={styles.titleLink}>
                    {post.title}
                  </a>
                </h3>
                <p className={styles.blogDescription}>
                  {post.description}
                </p>
              </div>
            </div>
          </div>
        </article>
      </div>
    );
  };

  return (
    <section ref={sectionRef} className={`${styles.blogSection} py-4`}>
      <div className="container">
        
        <div className={styles.masonryGrid}>
          {blogData.map((post, index) => renderBlogCard(post, index))}
        </div>
        
        {/* Pagination */}
        <div className={`${styles.pagination} text-center mt-5`}>
          <nav aria-label="Blog pagination">
            <ul className={styles.paginationList}>
              <li className={styles.paginationItem}>
                <a href="#" className={`${styles.paginationLink} ${styles.disabled}`} aria-label="Previous">
                  <span aria-hidden="true">&laquo;</span>
                </a>
              </li>
              <li className={styles.paginationItem}>
                <a href="#" className={`${styles.paginationLink} ${styles.active}`}>1</a>
              </li>
              <li className={styles.paginationItem}>
                <a href="#" className={styles.paginationLink}>2</a>
              </li>
              <li className={styles.paginationItem}>
                <a href="#" className={styles.paginationLink}>3</a>
              </li>
              <li className={styles.paginationItem}>
                <span className={styles.paginationDots}>...</span>
              </li>
              <li className={styles.paginationItem}>
                <a href="#" className={styles.paginationLink}>8</a>
              </li>
              <li className={styles.paginationItem}>
                <a href="#" className={styles.paginationLink} aria-label="Next">
                  <span aria-hidden="true">&raquo;</span>
                </a>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </section>
  );
};

export default BlogGrid;

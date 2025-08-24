import React, { useEffect, useRef } from 'react';

const SimpleParticles = ({ 
  particleCount = 50, 
  particleColor = '#0f6c63', 
  backgroundColor = 'transparent',
  width = '100%',
  height = '100%',
  style = {}
}) => {
  // Responsive particle count - less on mobile
  const getResponsiveParticleCount = () => {
    if (window.innerWidth < 768) {
      return Math.floor(particleCount * 0.4); // 40% on mobile
    } else if (window.innerWidth < 1024) {
      return Math.floor(particleCount * 0.7); // 70% on tablet
    }
    return particleCount; // Full count on desktop
  };

  const responsiveParticleCount = getResponsiveParticleCount();
  const canvasRef = useRef(null);
  const animationRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    const particles = [];
    
    // Set canvas size
    const resizeCanvas = () => {
      const rect = canvas.getBoundingClientRect();
      canvas.width = rect.width;
      canvas.height = rect.height;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    // Particle class
    class Particle {
             constructor() {
         this.x = Math.random() * canvas.width;
         this.y = Math.random() * canvas.height;
         this.vx = (Math.random() - 0.5) * 1.5;
         this.vy = (Math.random() - 0.5) * 1.5;
         this.size = Math.random() * 4 + 2;
         this.opacity = Math.random() * 0.3 + 0.7;
       }

      update() {
        this.x += this.vx;
        this.y += this.vy;

        // Bounce off edges
        if (this.x <= 0 || this.x >= canvas.width) this.vx *= -1;
        if (this.y <= 0 || this.y >= canvas.height) this.vy *= -1;

        // Keep particles in bounds
        this.x = Math.max(0, Math.min(canvas.width, this.x));
        this.y = Math.max(0, Math.min(canvas.height, this.y));
      }

      draw() {
        ctx.save();
        ctx.globalAlpha = this.opacity;
        ctx.fillStyle = particleColor;
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.size, 0, Math.PI * 2);
        ctx.fill();
        ctx.restore();
      }
    }

    // Create particles
    for (let i = 0; i < responsiveParticleCount; i++) {
      particles.push(new Particle());
    }

    // Animation loop
    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      
      // Update and draw particles
      particles.forEach(particle => {
        particle.update();
        particle.draw();
      });

             // Draw connections between nearby particles
       particles.forEach((particle, i) => {
         particles.slice(i + 1).forEach(otherParticle => {
           const dx = particle.x - otherParticle.x;
           const dy = particle.y - otherParticle.y;
           const distance = Math.sqrt(dx * dx + dy * dy);
           
           if (distance < 120) {
             ctx.save();
             ctx.globalAlpha = (120 - distance) / 120 * 0.6;
             ctx.strokeStyle = particleColor;
             ctx.lineWidth = 2;
             ctx.beginPath();
             ctx.moveTo(particle.x, particle.y);
             ctx.lineTo(otherParticle.x, otherParticle.y);
             ctx.stroke();
             ctx.restore();
           }
         });
       });

      animationRef.current = requestAnimationFrame(animate);
    };

    animate();

    // Cleanup
    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (animationRef.current) {
        cancelAnimationFrame(animationRef.current);
      }
    };
  }, [particleCount, particleColor, responsiveParticleCount]);

  return (
    <canvas
      ref={canvasRef}
      style={{
        position: 'absolute',
        top: 0,
        left: 0,
        width,
        height,
        backgroundColor,
        ...style
      }}
    />
  );
};

export default SimpleParticles;

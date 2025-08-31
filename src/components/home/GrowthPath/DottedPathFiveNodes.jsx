import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * DottedPathFiveNodes
 * - Responsive SVG with a dotted path and 6 circular nodes.
 * - Interactive hover functionality with colored rings.
 *
 * Props (all optional):
 *   height        : number | string  -> height of the SVG (default 480)
 *   pathColor     : string           -> color of dotted path (default "#3a3f44")
 *   dotGap        : number           -> distance between dots (default 16)
 *   dotSize       : number           -> dot size (controls stroke width, default 6)
 *   nodeFill      : string           -> inner circle fill (default "#fff")
 *   nodeStroke    : string           -> inner circle stroke (default "#3a3f44")
 *   ringColor     : string           -> thick ring color (default "#3a3f44")
 *   ringRadius    : number           -> ring radius (default 48)
 *   nodeRadius    : number           -> inner node radius (default 32)
 *   onNodeHover   : function         -> callback when node is hovered
 *   onNodeLeave   : function         -> callback when node leaves hover
 *   onNodeClick   : function         -> callback when node is clicked
 *   activeNode    : number           -> currently active node index
 *   hoveredNode   : number           -> currently hovered node index
 */
export default function DottedPathFiveNodes({
  height = 480,
  pathColor = "#3a3f44",
  dotGap = 16,
  dotSize = 6,
  nodeFill = "#fff",
  nodeStroke = "#3a3f44",
  ringColor = "#3a3f44",
  ringRadius = 48,
  nodeRadius = 32,
  onNodeHover,
  onNodeLeave,
  onNodeClick,
  activeNode = null,
  hoveredNode = null,
  activeIndex = null,
}) {
  const pathRef = useRef(null);
  const [points, setPoints] = useState(
    Array(6).fill({ x: 0, y: 0 })
  );
  const [pathReady, setPathReady] = useState(false);

  // A gently loopy path (similar to the screenshot).
  // Feel free to tweak the control points to change the flow.
  const pathD = useMemo(
    () =>
      [
        "M 60 440",
        "Q 240 360, 200 220",
        "Q 135 60, 340 30",
        "Q 520 10, 640 120",
        "Q 760 230, 660 330",
        "Q 560 430, 760 470",
        "Q 980 510, 1120 360",
      ].join(" "),
    []
  );

  // place 5 nodes along the path and calculate arrow positions
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const total = path.getTotalLength();
    const fractions = [0.06, 0.23, 0.45, 0.66, 0.87, 0.98]; // positions along the curve (added 6th position)
    const pts = fractions.map((f) => {
      const pt = path.getPointAtLength(total * f);
      return { x: pt.x, y: pt.y };
    });
    setPoints(pts);
    setPathReady(true);
  }, [pathD]);

  // Generate arrow positions along the path
  const arrowPositions = useMemo(() => {
    const path = pathRef.current;
    if (!path || !pathReady) return [];

    const total = path.getTotalLength();
    const arrows = [];
    const arrowSpacing = dotGap + dotSize; // Space between arrows
    
    // Start from a small offset and add arrows along the path
    let currentLength = 20; // Start offset
    while (currentLength < total - 20) { // End offset
      const point = path.getPointAtLength(currentLength);
      const nextPoint = path.getPointAtLength(Math.min(currentLength + 5, total));
      
      // Calculate angle for arrow direction
      const angle = Math.atan2(nextPoint.y - point.y, nextPoint.x - point.x) * 180 / Math.PI;
      
      arrows.push({
        x: point.x,
        y: point.y,
        angle: angle
      });
      
      currentLength += arrowSpacing;
    }
    
    return arrows;
  }, [pathD, dotGap, dotSize, pathReady]); // Added pathReady as dependency

  const Ring = ({ rotate = 0, isActive = false, isHovered = false, index = 0 }) => {
    const C = 2 * Math.PI * ringRadius;
    
    // Determine ring color based on state and alternating pattern
    let currentRingColor;
    
    if (isHovered) {
      currentRingColor = "#2fa98c"; // Teal for hover
    } else if (isActive) {
      currentRingColor = "#2fa98c"; // Teal for active
    } else {
      // Alternating pattern: even indices get #2fa98c, odd indices get #3a3f44
      currentRingColor = index % 2 === 0 ? "#2fa98c" : "#3a3f44";
    }

    // Different strokeDasharray for each circle
    let strokeDasharray;
    let strokeDashoffset = 0;
    
    switch (index) {
      case 0: // First circle - open from right center
        strokeDasharray = `${C * 0.75} ${C * 0.2}`;
        strokeDashoffset = C * 0.82; 
        break;
      case 1: // Second circle - open from left center
        strokeDasharray = `${C * 0.8} ${C * 0.2}`;
        strokeDashoffset = C * 0.5; // Rotate by half the circumference
        break;
      case 2: // Third circle - open from top
        strokeDasharray = `${C * 0.8} ${C * 0.2}`;
        strokeDashoffset = C * 0.29; // Rotate by quarter
        break;
      case 3: // Fourth circle - open from bottom
        strokeDasharray = `${C * 0.8} ${C * 0.2}`;
        strokeDashoffset = C * 0.84; // Rotate by three quarters
        break;
      case 4: // Fifth circle - open from top right
        strokeDasharray = `${C * 0.8} ${C * 0.28}`;
        strokeDashoffset = C * 0.125; // Rotate by eighth
        break;
      case 5: // Sixth circle - open from bottom left
        strokeDasharray = `${C * 0.8} ${C * 0.2}`;
        strokeDashoffset = C * 0.75; // Rotate by three quarters
        break;
      default:
        strokeDasharray = `${C * 0.72} ${C * 0.28}`;
        strokeDashoffset = 0;
    }

    return (
      <circle
        r={ringRadius}
        cx="0"
        cy="0"
        fill="none"
        stroke={currentRingColor}
        strokeWidth={isHovered ? "18" : "14"}
        strokeDasharray={strokeDasharray}
        strokeDashoffset={strokeDashoffset}
        strokeLinecap="round"
        transform={`rotate(${rotate})`}
        style={{
          transition: "all 0.3s ease",
          filter: isHovered ? "drop-shadow(0 0 8px rgba(47, 169, 140, 0.6))" : "none"
        }}
      />
    );
  };

  const Node = ({ x, y, rotate = 0, index, isActive = false, isHovered = false }) => (
    <g 
      transform={`translate(${x}, ${y})`}
      onMouseEnter={() => onNodeHover && onNodeHover(index)}
      onMouseLeave={() => onNodeLeave && onNodeLeave()}
      onClick={() => onNodeClick && onNodeClick(index)}
      style={{ cursor: "pointer" }}
    >
      {/* Invisible hover area - covers the entire circle area */}
      <circle
        r={ringRadius + 15}
        cx="0"
        cy="0"
        fill="transparent"
        style={{ 
          pointerEvents: "auto",
          zIndex: 1000
        }}
      />

      {/* Thick broken ring */}
      <Ring rotate={rotate} isActive={isActive} isHovered={isHovered} index={index} />

      {/* Inner node */}
      <circle
        r={nodeRadius}
        cx="0"
        cy="0"
        fill={nodeFill}
        stroke={nodeStroke}
        strokeWidth="2"
        style={{
          transition: "all 0.3s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          pointerEvents: "none"
        }}
      />

      {/* SVG Icon instead of small circles */}
      <image
        href={`/images/pp-icon-${index + 1}.svg`}
        x="-46"
        y="-45"
        width="90"
        height="90"
        style={{
          transition: "all 0.3s ease",
          transform: isHovered ? "scale(1.1)" : "scale(1)",
          pointerEvents: "none"
        }}
      />

      {/* Hover ring effect */}
      {isHovered && (
        <circle
          r={nodeRadius + 15}
          cx="0"
          cy="0"
          fill="none"
          stroke="#2fa98c"
          strokeWidth="3"
          opacity="0.6"
          style={{
            animation: "pulse 1.5s ease-in-out infinite",
            pointerEvents: "none"
          }}
        />
      )}
    </g>
  );

  return (
    <div
      style={{
        width: "100%",
        background: "#fff",
        display: "block",
        overflow: "hidden",
      }}
    >
      <svg
        viewBox="0 0 1200 520"
        width="100%"
        height="100%"
        preserveAspectRatio="xMidYMid slice"
      >
        {/* Define mask to hide arrows under circles */}
        <defs>
          <mask id="circleMask">
            <rect width="1200" height="520" fill="white"/>
            {points.map((p, i) => (
              <circle
                key={i}
                r={ringRadius + 4}
                cx={p.x}
                cy={p.y}
                fill="black"
              />
            ))}
          </mask>
        </defs>

        {/* Invisible path for calculations */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke="transparent"
          strokeWidth="1"
        />

        {/* Arrow elements along the path */}
        {arrowPositions.map((arrow, index) => {
          // Calculate which arrows should be colored based on activeIndex
          let shouldColor = false;
          
          if (activeIndex === null) {
            // No active node, no colored arrows
            shouldColor = false;
          } else {
            // Color all arrows from the beginning up to the selected circle
            // Calculate the approximate position of the selected circle on the path
            const circlePositions = [0.06, 0.23, 0.45, 0.66, 0.87, 0.98]; // positions along the curve
            const selectedCirclePosition = circlePositions[activeIndex];
            
            // Color arrows that are before or at the selected circle position
            const arrowPosition = index / arrowPositions.length;
            shouldColor = arrowPosition <= selectedCirclePosition;
          }
          
          const arrowColor = shouldColor ? "#2fa98c" : pathColor;
          
          return (
            <g
              key={index}
              transform={`translate(${arrow.x}, ${arrow.y}) rotate(${arrow.angle})`}
              mask="url(#circleMask)"
              style={{ pointerEvents: "none" }}
            >
              <path
                d={`M -${dotSize * .5} -${dotSize} L ${dotSize * 2.5} 0 L -${dotSize * 1.5} ${dotSize} Z`}
                fill={arrowColor}
                opacity="0.95"
              />
            </g>
          );
        })}

        {/* six nodes */}
        {points.map((p, i) => (
          <Node
            key={i}
            x={p.x}
            y={p.y}
            index={i}
            rotate={i * 36}     // small per-node rotation for variety
            isActive={i === activeNode}
            isHovered={i === hoveredNode}
          />
        ))}
      </svg>

      <style jsx>{`
        @keyframes pulse {
          0% {
            transform: scale(1);
            opacity: 0.6;
          }
          50% {
            transform: scale(1.1);
            opacity: 0.3;
          }
          100% {
            transform: scale(1);
            opacity: 0.6;
          }
        }
      `}</style>
    </div>
  );
}

import React, { useEffect, useMemo, useRef, useState } from "react";

/**
 * DottedPathFiveNodes
 * - Responsive SVG with a dotted path and 5 circular nodes.
 * - Interactive hover functionality with colored rings.
 *
 * Props (all optional):
 *   height        : number | string  -> height of the SVG (default 480)
 *   pathColor     : string           -> color of dotted path (default "#111")
 *   dotGap        : number           -> distance between dots (default 16)
 *   dotSize       : number           -> dot size (controls stroke width, default 6)
 *   nodeFill      : string           -> inner circle fill (default "#fff")
 *   nodeStroke    : string           -> inner circle stroke (default "#111")
 *   ringColor     : string           -> thick ring color (default "#000")
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
  pathColor = "#111",
  dotGap = 16,
  dotSize = 6,
  nodeFill = "#fff",
  nodeStroke = "#111",
  ringColor = "#000",
  ringRadius = 48,
  nodeRadius = 32,
  onNodeHover,
  onNodeLeave,
  onNodeClick,
  activeNode = 0,
  hoveredNode = null,
}) {
  const pathRef = useRef(null);
  const [points, setPoints] = useState(
    Array(5).fill({ x: 0, y: 0 })
  );

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

  // place 5 nodes along the path
  useEffect(() => {
    const path = pathRef.current;
    if (!path) return;

    const total = path.getTotalLength();
    const fractions = [0.06, 0.23, 0.45, 0.66, 0.87]; // positions along the curve
    const pts = fractions.map((f) => {
      const pt = path.getPointAtLength(total * f);
      return { x: pt.x, y: pt.y };
    });
    setPoints(pts);
  }, [pathD]);

  const Ring = ({ rotate = 0, isActive = false, isHovered = false }) => {
    const C = 2 * Math.PI * ringRadius;
    
    // Determine ring color based on state
    let currentRingColor = ringColor;
    if (isHovered) {
      currentRingColor = "#2fa98c"; // Teal for hover
    } else if (isActive) {
      currentRingColor = "#26dfc4"; // Light teal for active
    }

    return (
      <circle
        r={ringRadius}
        cx="0"
        cy="0"
        fill="none"
        stroke={currentRingColor}
        strokeWidth={isHovered ? "18" : "14"}
        strokeDasharray={`${C * 0.72} ${C * 0.28}`} // a "broken" thick ring
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
      {/* Thick broken ring */}
      <Ring rotate={rotate} isActive={isActive} isHovered={isHovered} />

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
          transform: isHovered ? "scale(1.1)" : "scale(1)"
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
          transform: isHovered ? "scale(1.1)" : "scale(1)"
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
            animation: "pulse 1.5s ease-in-out infinite"
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
        {/* Define mask to hide dots under circles */}
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

        {/* Dotted path with mask */}
        <path
          ref={pathRef}
          d={pathD}
          fill="none"
          stroke={pathColor}
          strokeWidth={dotSize}
          strokeLinecap="round"
          strokeDasharray={`0 ${dotGap}`}
          opacity="0.95"
          mask="url(#circleMask)"
        />

        {/* five nodes */}
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

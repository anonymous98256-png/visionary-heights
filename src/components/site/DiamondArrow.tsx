import type { SVGProps } from "react";

type Direction = "right" | "left" | "up" | "down" | "up-right";

interface Props extends Omit<SVGProps<SVGSVGElement>, "direction"> {
  direction?: Direction;
  size?: number;
  strokeWidth?: number;
}

const ROTATION: Record<Direction, number> = {
  right: 0,
  down: 90,
  left: 180,
  up: 270,
  "up-right": -45,
};

/**
 * Diamond-shaped directional arrow.
 * Outer rhombus outline + inner chevron pointing in the given direction.
 * Sized to match a typical lucide arrow icon (14–20px).
 */
export function DiamondArrow({
  direction = "right",
  size = 16,
  strokeWidth = 1.4,
  className,
  ...rest
}: Props) {
  const rot = ROTATION[direction];
  return (
    <svg
      width={size}
      height={size}
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth={strokeWidth}
      strokeLinecap="round"
      strokeLinejoin="round"
      className={className}
      aria-hidden="true"
      {...rest}
    >
      <g transform={`rotate(${rot} 12 12)`}>
        {/* Diamond outline */}
        <path d="M12 2.4 L21.6 12 L12 21.6 L2.4 12 Z" />
        {/* Inner chevron pointing right */}
        <path d="M9.5 8.5 L13 12 L9.5 15.5" />
        {/* Small tail line */}
        <path d="M6.5 12 L12.5 12" opacity="0.55" />
      </g>
    </svg>
  );
}

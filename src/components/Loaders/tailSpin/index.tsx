import * as React from "react";
interface IconSize {
  size?: number;
  color?: string;
  name?: string;
  height?: number;
  width?: number;
}

const TailSpin = ({ height = 45, width = 45, color = "white" }: IconSize) => (
  <svg
    width={width}
    height={height}
    viewBox="0 0 38 38"
    xmlns="http://www.w3.org/2000/svg"
  >
    <defs>
      <linearGradient x1="8.042%" y1="0%" x2="65.682%" y2="23.865%" id="a">
        <stop stopColor={color} stopOpacity={0} offset="0%" />
        <stop stopColor={color} stopOpacity={0.631} offset="63.146%" />
        <stop stopColor={color} offset="100%" />
      </linearGradient>
    </defs>
    <g transform="translate(1 1)" fill="none" fillRule="evenodd">
      <path d="M36 18c0-9.94-8.06-18-18-18" stroke="url(#a)" strokeWidth={2}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </path>
      <circle fill={color} cx={36} cy={18} r={1}>
        <animateTransform
          attributeName="transform"
          type="rotate"
          from="0 18 18"
          to="360 18 18"
          dur="0.9s"
          repeatCount="indefinite"
        />
      </circle>
    </g>
  </svg>
);

export default TailSpin;

import { ComponentPropsWithoutRef } from "react";

export const ComputerIcon = (
  props: ComponentPropsWithoutRef<"svg"> & { size?: number }
) => {
  const multiplyBlendMode: React.CSSProperties = {
    mixBlendMode: "multiply",
  };

  const opacity50: React.CSSProperties = {
    ...multiplyBlendMode,
    opacity: 0.5,
  };

  const opacity60: React.CSSProperties = {
    ...multiplyBlendMode,
    opacity: 0.6,
  };

  return (
    <svg
      width={props.size}
      height={props.size}
      viewBox="0 0 430 430"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path d="M55 70H365V270H55V70Z" fill="#4BB3FD" />
      <g style={opacity50}>
        <path d="M60 75H80V265H60V75Z" fill="#4BB3FD" />
      </g>
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 265V295C40 306.046 48.9543 315 60 315H360C371.046 315 380 306.046 380 295V265H40Z"
        fill="#EBE6EF"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M40 75V265H380V75C380 63.9543 371.046 55 360 55H60C48.9543 55 40 63.9543 40 75ZM360 265V75L60 75V265H210H360Z"
        fill="#3A3347"
      />
      <g style={opacity50}>
        <path
          d="M40 295V265H60V295C60 306.046 68.9543 315 80 315H60C48.9543 315 40 306.046 40 295Z"
          fill="#EBE6EF"
        />
      </g>
      <g style={opacity50}>
        <path
          d="M40 265V75C40 63.9543 48.9543 55 60 55H80C68.9543 55 60 63.9543 60 75V265H40Z"
          fill="#3A3347"
        />
      </g>
      <path
        d="M240 315L243.75 360H277C278.657 360 280 361.343 280 363V372C280 373.657 278.657 375 277 375H143C141.343 375 140 373.657 140 372V363C140 361.343 141.343 360 143 360H176.25L180 315H240Z"
        fill="#EBE6EF"
      />
      <g style={opacity60}>
        <path
          d="M193.75 330L190 375H143C141.343 375 140 373.657 140 372V363C140 361.343 141.343 360 143 360H176.25L180 315H240L241.25 330H193.75Z"
          fill="#EBE6EF"
        />
      </g>
      <g style={multiplyBlendMode}>
        <circle cx="210" cy="290" r="10" fill="#EBE6EF" />
      </g>
    </svg>
  );
};

import { ComponentPropsWithoutRef } from "react";

export const ProjectIcon = (
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
      viewBox="0 0 512 512"
      version="1.1"
      fill="none"
      id="Layer_1"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <polygon style={{ fill: "#FF9D49" }} points="393.29,213.665 142.441,464.524 87.044,424.954 345.817,150.364 " />
      <polygon style={{ fill: "#FFCC75" }} points="353.73,158.277 87.044,424.954 47.473,369.557 298.333,118.708 " />
      <polygon style={{ fill: "#BD1515" }} points="512,94.965 440.78,166.185 377.475,118.708 464.522,47.486 " />
      <polygon style={{ fill: "#F2484B" }} points="464.516,47.482 385.382,126.615 345.817,71.224 417.038,0.002 " />
      <g>
        <rect
          x="335.974"
          y="75.292"
          transform="matrix(-0.7071 0.7071 -0.7071 -0.7071 731.5841 -18.1559)"
          style={{ fill: "#082947" }}
          
        />
        <polygon style={{ fill: "#082947" }} points="71.22,488.261 0,511.998 23.736,440.776 63.305,448.692 " />
      </g>
      <polygon style={{ fill: "#F2EBD9" }} points="47.473,369.557 23.736,440.776 71.22,488.261 142.441,464.524 " />
    </svg>
  );
};

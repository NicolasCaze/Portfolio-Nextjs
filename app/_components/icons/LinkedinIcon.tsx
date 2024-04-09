import { ComponentPropsWithoutRef } from "react";

export const LinkedinIcon = (
    props: ComponentPropsWithoutRef<"svg"> & { size?: number } 
 ) => {
    return (
        <svg 
        width={props.size}
        height={props.size} 
        viewBox="0 0 448 512" 
        version="1.1" 
        color="rgb(34, 197, 94)"
        aria-hidden="true"
        focusable="false"
        preserveAspectRatio="xMidYMid"
        {...props}
        >
    <g>
        <path d="M416 32H31.9C14.3 32 0 46.5 0 64.3v383.4C0 465.5 14.3 480 31.9 480H416c17.6 0 32-14.5 32-32.3V64.3c0-17.8-14.4-32.3-32-32.3zM135.4 416H69V202.2h66.5V416zm-33.2-243c-21.3 0-38.5-17.3-38.5-38.5S80.9 96 102.2 96c21.2 0 38.5 17.3 38.5 38.5 0 21.3-17.2 38.5-38.5 38.5zm282.1 243h-66.4V312c0-24.8-.5-56.7-34.5-56.7-34.6 0-39.9 27-39.9 54.9V416h-66.4V202.2h63.7v29.2h.9c8.9-16.8 30.6-34.5 62.9-34.5 67.2 0 79.7 44.3 79.7 101.9V416z" stroke="currentColor" fill="CurrentColor" stroke-width="0"></path>
    </g>
</svg>
    )
}

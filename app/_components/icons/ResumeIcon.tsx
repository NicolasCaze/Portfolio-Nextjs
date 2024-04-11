import { ComponentPropsWithoutRef } from "react";

export const ResumeIcon = (
    props: ComponentPropsWithoutRef<"svg"> & { size?: number } 
 ) => {
    return (
        <svg width={props.size}
        height={props.size} viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round" className="lucide lucide-sticky-note" {...props} ><g><path d="M16 3H5a2 2 0 0 0-2 2v14a2 2 0 0 0 2 2h14a2 2 0 0 0 2-2V8Z"/><path d="M15 3v4a2 2 0 0 0 2 2h4"/></g></svg>
    )
}






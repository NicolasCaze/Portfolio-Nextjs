
import { cn } from "@/lib/utils"
import { PropsWithChildren } from "react"

export const Section = ({ children, className }: PropsWithChildren<{ className?: string }>) => {
  return (
    <div className={cn(" max-w px-4 m-auto ", className)}>
      {children}
    </div>
  )
}

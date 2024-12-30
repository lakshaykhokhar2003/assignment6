import * as React from "react"
import * as CheckboxPrimitive from "@radix-ui/react-checkbox"
import { Check } from "lucide-react"

import { cn } from "@/lib/utils"

const Checkbox = React.forwardRef<
  React.ElementRef<typeof CheckboxPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof CheckboxPrimitive.Root>
>(({ className, ...props }, ref) => (
    <CheckboxPrimitive.Root
        ref={ref}
        className={cn(
            "group relative h-5 w-5 shrink-0 rounded-md border border-gray-300 hover:shadow hover:shadow-gray-400 outline-none focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-gray-400 disabled:cursor-not-allowed disabled:opacity-50 transition-all duration-100 data-[state=checked]:bg-[#2469f6] data-[state=checked]:border-0 data-[state=checked]:ring-2 data-[state=checked]:ring-[#2469f6]  data-[state=checked]:ring-opacity-20",
            className
        )}
        {...props}
    >
      {/* Hover Checkmark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-0 group-hover:opacity-100 text-gray-400 transition-opacity">
        <Check className="h-4 w-4" />
      </div>

      {/* Selected Checkmark */}
      <CheckboxPrimitive.Indicator
          className={cn(
              "absolute inset-0 flex items-center justify-center text-white"
          )}
      >
        <Check className="h-4 w-4"/>
      </CheckboxPrimitive.Indicator>
    </CheckboxPrimitive.Root>
))
Checkbox.displayName = CheckboxPrimitive.Root.displayName

export { Checkbox }

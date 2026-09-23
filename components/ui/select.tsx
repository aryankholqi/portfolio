"use client"

import * as React from "react"
import { CheckIcon, ChevronDownIcon, ChevronUpIcon } from "lucide-react"
import { Select as SelectPrimitive } from "radix-ui"

import { cn } from "@/lib/utils"

// shadcn/ui Select, restyled with the site's Nocturne tokens (see app/globals.css)
// instead of shadcn's theme variables — this project's `--color-accent` is the
// brand purple, not shadcn's neutral hover grey. Classes use logical sides
// (ps/pe, start/end) so the component mirrors in RTL.

function Select({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Root>) {
  return <SelectPrimitive.Root data-slot="select" {...props} />
}

function SelectGroup({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Group>) {
  return <SelectPrimitive.Group data-slot="select-group" {...props} />
}

function SelectValue({
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Value>) {
  return <SelectPrimitive.Value data-slot="select-value" {...props} />
}

function SelectTrigger({
  className,
  size = "default",
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Trigger> & {
  size?: "sm" | "default"
}) {
  return (
    <SelectPrimitive.Trigger
      data-slot="select-trigger"
      data-size={size}
      className={cn(
        "group/trigger flex w-fit cursor-pointer items-center justify-between gap-1.5 rounded-full border border-[var(--color-divider)] bg-[rgba(22,24,38,0.28)] ps-3 pe-2.5 whitespace-nowrap text-[rgba(233,233,237,0.72)] shadow-[inset_0_1px_0_rgba(233,233,237,0.14)] transition-colors outline-none hover:text-[var(--color-text)] focus-visible:border-[var(--color-accent)] focus-visible:text-[var(--color-text)] disabled:cursor-not-allowed disabled:opacity-50 data-[state=open]:border-[color-mix(in_oklch,var(--color-accent)_55%,transparent)] data-[state=open]:text-[var(--color-text)] data-[placeholder]:text-[rgba(233,233,237,0.45)] data-[size=default]:h-8 data-[size=default]:text-[13px] data-[size=sm]:h-7 data-[size=sm]:text-xs *:data-[slot=select-value]:line-clamp-1 *:data-[slot=select-value]:flex *:data-[slot=select-value]:items-center *:data-[slot=select-value]:gap-2 [&_svg]:pointer-events-none [&_svg]:shrink-0",
        className
      )}
      {...props}
    >
      {children}
      <SelectPrimitive.Icon asChild>
        <ChevronDownIcon className="size-3.5 opacity-60 transition-transform duration-200 group-data-[state=open]/trigger:rotate-180" />
      </SelectPrimitive.Icon>
    </SelectPrimitive.Trigger>
  )
}

function SelectContent({
  className,
  children,
  position = "popper",
  align = "center",
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Content>) {
  return (
    <SelectPrimitive.Portal>
      <SelectPrimitive.Content
        data-slot="select-content"
        // Let the wheel scroll the list instead of Lenis scrolling the page.
        data-lenis-prevent
        className={cn(
          "relative z-[60] max-h-(--radix-select-content-available-height) min-w-[8rem] origin-(--radix-select-content-transform-origin) overflow-x-hidden overflow-y-auto rounded-[var(--radius-lg)] border border-[var(--color-divider)] text-[var(--color-text)] shadow-[inset_0_1px_0_rgba(233,233,237,0.16),0_18px_40px_-12px_rgba(10,11,20,0.75)] backdrop-blur-[22px] backdrop-saturate-[180%] motion-safe:data-[state=open]:animate-[select-in_160ms_cubic-bezier(0.22,1,0.36,1)]",
          "bg-[linear-gradient(160deg,rgba(40,42,66,0.92),rgba(28,30,44,0.94)_55%,rgba(38,34,70,0.94))]",
          position === "popper" &&
            "data-[side=bottom]:translate-y-1.5 data-[side=left]:-translate-x-1 data-[side=right]:translate-x-1 data-[side=top]:-translate-y-1.5",
          className
        )}
        position={position}
        align={align}
        {...props}
      >
        <SelectScrollUpButton />
        <SelectPrimitive.Viewport
          className={cn(
            "p-1",
            position === "popper" &&
              "h-[var(--radix-select-trigger-height)] w-full min-w-[var(--radix-select-trigger-width)] scroll-my-1"
          )}
        >
          {children}
        </SelectPrimitive.Viewport>
        <SelectScrollDownButton />
      </SelectPrimitive.Content>
    </SelectPrimitive.Portal>
  )
}

function SelectLabel({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Label>) {
  return (
    <SelectPrimitive.Label
      data-slot="select-label"
      className={cn("px-2 py-1.5 text-xs text-[rgba(233,233,237,0.45)]", className)}
      {...props}
    />
  )
}

function SelectItem({
  className,
  children,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Item>) {
  return (
    <SelectPrimitive.Item
      data-slot="select-item"
      className={cn(
        "relative flex w-full cursor-pointer items-center gap-2 rounded-[var(--radius-md)] py-2 ps-2.5 pe-8 text-[13px] text-[rgba(233,233,237,0.78)] outline-hidden transition-colors select-none focus:bg-[color-mix(in_oklch,var(--color-accent)_18%,transparent)] focus:text-[var(--color-text)] data-[disabled]:pointer-events-none data-[disabled]:opacity-50 data-[state=checked]:text-[var(--color-accent-200)] [&_svg]:pointer-events-none [&_svg]:shrink-0 *:[span]:last:flex *:[span]:last:items-center *:[span]:last:gap-2",
        className
      )}
      {...props}
    >
      <span
        data-slot="select-item-indicator"
        className="absolute end-2 flex size-3.5 items-center justify-center"
      >
        <SelectPrimitive.ItemIndicator>
          <CheckIcon className="size-3.5 text-[var(--color-accent-200)]" />
        </SelectPrimitive.ItemIndicator>
      </span>
      <SelectPrimitive.ItemText>{children}</SelectPrimitive.ItemText>
    </SelectPrimitive.Item>
  )
}

function SelectSeparator({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.Separator>) {
  return (
    <SelectPrimitive.Separator
      data-slot="select-separator"
      className={cn("pointer-events-none -mx-1 my-1 h-px bg-[var(--color-divider)]", className)}
      {...props}
    />
  )
}

function SelectScrollUpButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollUpButton>) {
  return (
    <SelectPrimitive.ScrollUpButton
      data-slot="select-scroll-up-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-[rgba(233,233,237,0.55)]",
        className
      )}
      {...props}
    >
      <ChevronUpIcon className="size-4" />
    </SelectPrimitive.ScrollUpButton>
  )
}

function SelectScrollDownButton({
  className,
  ...props
}: React.ComponentProps<typeof SelectPrimitive.ScrollDownButton>) {
  return (
    <SelectPrimitive.ScrollDownButton
      data-slot="select-scroll-down-button"
      className={cn(
        "flex cursor-default items-center justify-center py-1 text-[rgba(233,233,237,0.55)]",
        className
      )}
      {...props}
    >
      <ChevronDownIcon className="size-4" />
    </SelectPrimitive.ScrollDownButton>
  )
}

export {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectLabel,
  SelectScrollDownButton,
  SelectScrollUpButton,
  SelectSeparator,
  SelectTrigger,
  SelectValue,
}

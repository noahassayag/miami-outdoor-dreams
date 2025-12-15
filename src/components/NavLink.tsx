import { NavLink as RouterNavLink, NavLinkProps } from "react-router-dom";
import { forwardRef } from "react";
import { cn } from "@/lib/utils";

interface NavLinkCompatProps extends Omit<NavLinkProps, "className"> {
  className?: string;
}

const NavLink = forwardRef<HTMLAnchorElement, NavLinkCompatProps>(({ className, to, ...props }, ref) => {
  return (
    <RouterNavLink
      ref={ref}
      to={to}
      className={({ isActive }) =>
        cn(
          "relative inline-flex items-center px-1 py-1 text-sm font-medium transition-all duration-300",

          "text-white/60 hover:text-white",

          "after:absolute after:bottom-0 after:left-0 after:h-px after:w-0 after:bg-[#64b5ff] after:transition-all after:duration-300 hover:after:w-full",

          isActive && "text-white after:w-full after:bg-[#64b5ff] font-semibold",

          className,
        )
      }
      {...props}
    />
  );
});

NavLink.displayName = "NavLink";

export { NavLink };

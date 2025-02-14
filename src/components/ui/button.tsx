import type { VariantProps } from "class-variance-authority";

import { cva } from "class-variance-authority";
import { forwardRef, type ReactNode } from "react";
import { Pressable, Text } from "react-native";
import { cn } from "@/lib/utils";

const buttonVariants = cva("flex justify-center items-center rounded-full", {
	variants: {
		variant: {
			primary: "bg-blue",
			secondary: "bg-charcoal"
		},
		size: {
			sm: "py-[12px]",
			md: "py-[14px]",
			lg: "py-[16px]"
		}
	},
	defaultVariants: {
		variant: "primary",
		size: "lg"
	}
});

type ButtonProps = React.ComponentPropsWithoutRef<typeof Pressable> &
	VariantProps<typeof buttonVariants> & {
		children: ReactNode;
	};

const Button = forwardRef<React.ElementRef<typeof Pressable>, ButtonProps>(
	({ className, variant, size, children, ...props }, ref) => {
		return (
			<Pressable
				className={cn(buttonVariants({ variant, size, className }), {
					"opacity-30": props.disabled
				})}
				ref={ref}
				role="button"
				{...props}
			>
				<Text className="text-white text-[16px] font-bold leading-[21px]">
					{children}
				</Text>
			</Pressable>
		);
	}
);
Button.displayName = "Button";

export { Button, buttonVariants };

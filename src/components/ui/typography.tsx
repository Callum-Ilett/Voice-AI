import type { SlottableTextProps, TextRef } from "@rn-primitives/types";

import * as Slot from "@rn-primitives/slot";
import * as React from "react";
import { Text as RNText } from "react-native";
import { cn } from "@/lib/utils";

const H1 = React.forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot.Text : RNText;
		return (
			<Component
				role="heading"
				aria-level="1"
				className={cn(
					"text-white text-[28px] font-bold leading-[34px]",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

H1.displayName = "H1";

const H2 = React.forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot.Text : RNText;
		return (
			<Component
				role="heading"
				aria-level="2"
				className={cn("text-white", className)}
				ref={ref}
				{...props}
			/>
		);
	}
);

H2.displayName = "H2";

const H3 = React.forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot.Text : RNText;
		return (
			<Component
				role="heading"
				aria-level="3"
				className={cn("text-white", className)}
				ref={ref}
				{...props}
			/>
		);
	}
);

H3.displayName = "H3";

const H4 = React.forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot.Text : RNText;
		return (
			<Component
				role="heading"
				aria-level="4"
				className={cn("text-white", className)}
				ref={ref}
				{...props}
			/>
		);
	}
);

H4.displayName = "H4";

const Subheading = React.forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, ...props }, ref) => {
		const Component = asChild ? Slot.Text : RNText;
		return (
			<Component
				className={cn(
					"text-white text-[15px] font-normal leading-[20px]",
					className
				)}
				ref={ref}
				{...props}
			/>
		);
	}
);

Subheading.displayName = "Subheading";

export { H1, H2, H3, H4, Subheading };

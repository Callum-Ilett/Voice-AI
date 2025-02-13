import type { SlottableTextProps, TextRef } from "@rn-primitives/types";
import { Text as SlotText } from "@rn-primitives/slot";
import { Text as RNText } from "react-native";
import { cn } from "@/lib/utils";
import { createContext, forwardRef, useContext } from "react";

const TextClassContext = createContext<string | undefined>(undefined);

const Text = forwardRef<TextRef, SlottableTextProps>(
	({ className, asChild = false, ...props }, ref) => {
		const textClass = useContext(TextClassContext);

		const Component = asChild ? SlotText : RNText;

		return (
			<Component
				className={cn("text-white", textClass, className)}
				ref={ref}
				{...props}
			/>
		);
	}
);
Text.displayName = "Text";

export { Text, TextClassContext };

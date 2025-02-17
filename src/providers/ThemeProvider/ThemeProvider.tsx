import type { ReactNode } from "react";
import { ThemeProvider as NavigationThemeProvider } from "@react-navigation/native";
import { colors } from "@/theme/colors";

type ThemeProviderProps = {
	children: ReactNode;
};

const ThemeProvider = ({ children }: ThemeProviderProps) => {
	return (
		<NavigationThemeProvider
			value={{
				colors: {
					primary: "rgb(0, 122, 255)",
					background: colors.primary,
					card: colors.primary,
					text: "rgb(28, 28, 30)",
					border: "rgb(216, 216, 216)",
					notification: "rgb(255, 59, 48)"
				},
				fonts: {
					regular: {
						fontFamily: "sans-serif",
						fontWeight: "normal"
					},
					medium: {
						fontFamily: "sans-serif-medium",
						fontWeight: "normal"
					},
					bold: {
						fontFamily: "sans-serif",
						fontWeight: "600"
					},
					heavy: {
						fontFamily: "sans-serif",
						fontWeight: "700"
					}
				},
				dark: true
			}}
		>
			{children}
		</NavigationThemeProvider>
	);
};

export type { ThemeProviderProps };
export { ThemeProvider };

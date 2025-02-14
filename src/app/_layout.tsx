import "../../global.css";

import { Stack } from "expo-router";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { ThemeProvider } from "@/providers/ThemeProvider";

export default function RootLayout() {
	return (
		<GestureHandlerRootView>
			<ThemeProvider>
				<Stack>
					<Stack.Screen name="(app)" />

					<Stack.Screen
						name="onboarding"
						options={{
							title: "",
							headerShadowVisible: false
						}}
					/>
				</Stack>
			</ThemeProvider>
		</GestureHandlerRootView>
	);
}

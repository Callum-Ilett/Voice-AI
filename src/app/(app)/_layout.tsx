import { Tabs } from "expo-router";
// import { Redirect } from "expo-router";

function AppLayout() {
	// // TODO: Implement actual logic to check if onboarding is complete
	// const isOnboardingComplete = Math.random() > 0.5;

	// if (!isOnboardingComplete) {
	// 	return <Redirect href="/onboarding" />;
	// }

	return (
		<Tabs>
			<Tabs.Screen name="index" />
		</Tabs>
	);
}

export default AppLayout;

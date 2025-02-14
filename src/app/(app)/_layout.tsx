import { Tabs, Redirect } from "expo-router";
import { keys, storage } from "@/storage";

function AppLayout() {
	const isOnboarded = storage.getBoolean(keys.IS_ONBOARDED);

	if (!isOnboarded) {
		return <Redirect href="/onboarding" />;
	}

	return (
		<Tabs>
			<Tabs.Screen name="index" />
		</Tabs>
	);
}

export default AppLayout;

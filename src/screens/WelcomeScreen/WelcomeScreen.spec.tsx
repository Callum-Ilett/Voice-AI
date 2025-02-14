import { WelcomeScreen } from "@/screens/WelcomeScreen";
import { render, screen } from "@testing-library/react-native";

describe("WelcomeScreen", () => {
	it("Should render without any issues", () => {
		// Arange
		render(<WelcomeScreen />);

		// Act
		const welcomeText = screen.getByText(
			/Edit app\/index.tsx to edit this screen./i
		);

		// Assert
		expect(welcomeText).toBeOnTheScreen();
	});
});

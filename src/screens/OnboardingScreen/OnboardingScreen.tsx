import type { ICarouselInstance } from "react-native-reanimated-carousel";

import Carousel, { Pagination } from "react-native-reanimated-carousel";
import { useRef, useState } from "react";
import { Dimensions, Image, View } from "react-native";
import { H1, Subheading } from "@/components/ui/typography";
import { LinearGradient } from "expo-linear-gradient";
import { images } from "@/assets";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { Button } from "@/components/ui/button";
import { useRouter } from "expo-router";
import { keys, storage } from "@/storage";
import {
	useSharedValue,
	useDerivedValue,
	runOnJS
} from "react-native-reanimated";

const data = [
	{
		image: images.onboarding_1,
		title: "Supercharge your Voice",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
	},
	{
		image: images.onboarding_2,
		title: "AI Voice Changer",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
	},
	{
		image: images.onboarding_3,
		title: "Text-to-Speech",
		description:
			"Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatu"
	}
];

const OnboardingScreen = () => {
	const [activeIndex, setActiveIndex] = useState<number>(0);

	const carouselRef = useRef<ICarouselInstance | null>(null);
	const progress = useSharedValue<number>(0);
	const insets = useSafeAreaInsets();
	const router = useRouter();

	useDerivedValue(() => {
		runOnJS(setActiveIndex)(Math.round(progress.value));
	}, [progress]);

	const markOnboardingCompleted = (value: boolean) => {
		try {
			storage.set(keys.IS_ONBOARDED, value);
		} catch (error) {
			console.error("Error setting onboarded status", error);
		}
	};

	const handlePaginationPress = (index: number) => {
		carouselRef.current?.scrollTo({
			count: index - activeIndex,
			animated: true
		});
	};

	const handleNextSlidePress = () => {
		carouselRef.current?.next();
	};

	const handleSkipPress = () => {
		markOnboardingCompleted(true);
		router.push("/(app)");
	};

	const handleGetStartedPress = () => {
		markOnboardingCompleted(true);
		router.push("/(app)");
	};

	// Width of the carousel, width of the screen minus 24px (left and right padding)
	const width = Dimensions.get("window").width - 48;

	const paddingBottom = insets.bottom;
	const isLastSlide = activeIndex === data.length - 1;

	return (
		<View className="flex-1 px-6">
			<View className="flex-1">
				<Carousel
					ref={carouselRef}
					width={width}
					data={data}
					onProgressChange={progress}
					renderItem={({ item }) => (
						<View className="relative flex justify-center items-center">
							<Image source={item.image} />

							<LinearGradient
								colors={["rgba(13, 15, 19, 0.00)", "#0D0F13", "#0D0F13"]}
								locations={[0, 0.2021, 1]}
								style={{
									position: "absolute",
									bottom: 0,
									left: 0,
									height: 320,
									width: "100%",
									display: "flex",
									justifyContent: "center",
									alignItems: "center"
								}}
							>
								<H1 className="mb-3 text-center">{item.title}</H1>
								<Subheading className="text-center">
									{item.description}
								</Subheading>
							</LinearGradient>
						</View>
					)}
				/>
			</View>

			<View style={{ paddingBottom }}>
				<Pagination.Basic
					progress={progress}
					data={data}
					dotStyle={{ backgroundColor: "#323641", borderRadius: 50 }}
					activeDotStyle={{ backgroundColor: "#4979FF" }}
					containerStyle={{
						position: "relative",
						top: -28,
						gap: 12,
						backgroundColor: "#21252D",
						paddingVertical: 6,
						paddingHorizontal: 13,
						borderRadius: 999
					}}
					onPress={handlePaginationPress}
				/>

				{isLastSlide ? (
					<Button variant="primary" onPress={handleGetStartedPress}>
						Get Started
					</Button>
				) : (
					<View className="flex flex-row gap-[10px]">
						<Button
							className="flex-1"
							variant="secondary"
							onPress={handleSkipPress}
						>
							Skip
						</Button>

						<Button
							className="flex-1"
							variant="primary"
							onPress={handleNextSlidePress}
						>
							Next
						</Button>
					</View>
				)}
			</View>
		</View>
	);
};

export { OnboardingScreen };

import { MMKV } from "react-native-mmkv";

const storage = new MMKV();

const keys = {
	IS_ONBOARDED: "isOnboarded"
};

export { storage, keys };

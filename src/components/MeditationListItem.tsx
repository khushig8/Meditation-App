import { View, Text } from "react-native";
import { Meditation } from "@/types";

export function MeditationListItem({ meditation }: { meditation: Meditation }) {
    return (
        <View className="p-5 border border-gray-300 rounded-2xl">
            <Text className="font-bold text-2xl">{meditation.title}</Text>
        </View>
    )
}
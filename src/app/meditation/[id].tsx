import { meditations } from "@/data";
import { router, useLocalSearchParams } from "expo-router";
import { Text, View } from "react-native";
import AntDesign from '@expo/vector-icons/AntDesign';
import FontAwesome6 from '@expo/vector-icons/FontAwesome6';
import MaterialCommunityIcons from '@expo/vector-icons/MaterialCommunityIcons';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { SafeAreaView, useSafeAreaInsets } from "react-native-safe-area-context";


export default function MeditationDetails() {
    const { id } = useLocalSearchParams();
    const meditation = meditations.find((m) => m.id === Number(id));

    if (!meditation) {
        return (
            <View>
                <Text>Meditation not found!</Text>
            </View>
        );
    }
    return (
        <SafeAreaView className="bg-orange-300 flex-1">
            <View className="flex-1">
                {/* Header */}
                <View className="flex-row items-center justify-between p-10">
                    <AntDesign name="infocirlceo" size={24} color="black" />

                    <View className="bg-zinc-800 p-2 rounded-md">
                        <Text className="text-zinc-100 font-semibold">
                            Today's meditation
                        </Text>
                    </View>

                    <AntDesign
                        onPress={() => router.back()}
                        name="close"
                        size={26}
                        color="black"
                    />
                </View>
                <Text className="text-3xl mt-20 text-center text-zinc-800 font-semibold">
                    {meditation?.title}
                </Text>
            </View>


        </SafeAreaView>
    )
}
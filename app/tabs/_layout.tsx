import React from "react";
import { Tabs } from "expo-router";
import { Ionicons } from "@expo/vector-icons";

export default function Layout(props: any) {
    return (
        <Tabs>
            <Tabs.Screen name="index" options={{
                title: "Home",
                tabBarIcon: () => <Ionicons name="home-outline" size={18} />
            }} />
        </Tabs>
    )
}
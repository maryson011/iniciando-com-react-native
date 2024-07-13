import { Stack } from "expo-router";
import React from "react";
import { GestureHandlerRootView } from "react-native-gesture-handler";
import { Drawer } from 'expo-router/drawer';
import { Ionicons } from "@expo/vector-icons";

export default function RootLayout() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Drawer screenOptions={{ headerShow: false }}>
        <Drawer.Screen
          name="index" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Inicio',
            title: 'Bem Vindo!',
            draweIcon: () => (
              <Ionicons name="home-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="primeiro" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Primeiro Componente',
            title: 'Primeiro Componente',
            draweIcon: () => (
              <Ionicons name="heart-circle-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="contador" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Contador',
            title: 'Contador',
            draweIcon: () => (
              <Ionicons name="add" size={18} color="#3A98FF" />
            ),
          }}
        />
        <Drawer.Screen
          name="tabs" // This is the name of the page and must match the url from root
          options={{
            drawerLabel: 'Tabs',
            title: 'Tabs',
            draweIcon: () => (
              <Ionicons name="albums-outline" size={18} color="#3A98FF" />
            ),
          }}
        />
        
      </Drawer>
    </GestureHandlerRootView>
  );
}

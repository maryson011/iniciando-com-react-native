import { Text, View } from "react-native";
import styles from '@/constants/styles';
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import Botao from "@/components/Botao";
import { useNavigation } from 'expo-router';
import { DrawerActions } from "@react-navigation/native";

export default function Index() {
  const nav = useNavigation()
  return (
    <View style={[styles.centralizado, { gap: 10 }]} >
      <Ionicons name="logo-react" size={100} />
      <View style={{ alignItems: 'center' }}>
        <Text style={{ fontSize: 20, fontWeight: 700 }}>Masterclass</Text>
        <Text style={{ fontSize: 16 }}>Esquenta Formação.DEV</Text>
      </View>
      <Botao onPress={() => nav.dispatch(DrawerActions.openDrawer())}>
        <Text style={{ color: '#fff' }}>Exercicios</Text>
      </Botao>
    </View>
  );
}

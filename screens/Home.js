import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function HomeScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botão de Voltar no canto superior esquerdo */}
      <Pressable
        style={({ pressed }) => [
          styles.backButton,
          pressed && styles.buttonPressed, // efeito ao clicar
        ]}
        onPress={() => navigation.replace("Login")}
      >
        <Ionicons name="arrow-back" size={24} color="#fff" />
      </Pressable>

      {/* Texto do topo */}
      <Text style={styles.title}>Vem, {"\n"}Codar com Koda!</Text>
      <Text style={styles.subtitle}>
        Aprenda programação {"\n"}de um jeito divertido.
      </Text>

      {/* Imagem central */}
      <Image
        source={require("../assets/pelucia.png")}
        style={styles.image}
        resizeMode="contain"
      />

      {/* Texto inferior */}
      <Text style={styles.bottomText}>
        Seu <Text style={styles.bold}>melhor amigo{"\n"}</Text>pode ser
        <Text style={styles.bold}> seu professor!</Text>
      </Text>

      {/* Botão Iniciar */}
      <Pressable
        style={({ pressed }) => [
          styles.button,
          pressed && styles.buttonPressed, // efeito ao clicar
        ]}
        onPress={() => navigation.navigate("TelaInteracao")}
      >
        <Text style={styles.buttonText}>Iniciar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4DE",
    alignItems: "center",
    justifyContent: "center",
    paddingHorizontal: 20,
    paddingVertical: 40,
  },
  title: {
    fontSize: 28,
    fontWeight: "bold",
    color: "#5B2E26",
    textAlign: "center",
    marginBottom: 10,
  },
  subtitle: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    marginBottom: 15,
  },
  backButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#ED4700",
    padding: 8,
    borderRadius: 50, 
  },
  image: {
    width: 300,
    height: 300,
    marginVertical: 10,
  },
  bottomText: {
    fontSize: 20,
    color: "#333",
    textAlign: "center",
    marginVertical: 15,
  },
  bold: {
    fontWeight: "bold",
    color: "#5B2E26",
  },
  button: {
    marginTop: 18,
    backgroundColor: "#ED4700",
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 2,
    width: 150,
    alignSelf: "center",
  },
  buttonText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "bold",
  },
  // estilo aplicado durante o clique
  buttonPressed: {
    opacity: 0.7,
    transform: [{ scale: 0.97 }], // botão encolhe levemente
  },
});

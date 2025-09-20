import React from "react";
import { View, Text, StyleSheet, Image, Pressable } from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function InstructionsScreen({ navigation }) {
  return (
    <View style={styles.container}>
      {/* Botão de voltar */}
      <Pressable style={styles.exitButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </Pressable>

      {/* Título no topo */}
      <Text style={styles.title}>Siga as instruções:</Text>

      {/* Card com mascote atrás */}
      <View style={styles.cardWrapper}>
        <Image
          source={require("../assets/koda-quiz.png")}
          style={styles.image}
        />
        <View style={styles.card}>
          <Text style={styles.cardText}>
            • Cada quiz terá <Text style={styles.highlight}>4 opções</Text> e
            apenas <Text style={styles.highlight}>1 correta</Text>.
          </Text>
          <Text style={styles.cardText}>
            • O progresso será mostrado no{" "}
            <Text style={styles.highlight}>topo</Text>.
          </Text>
          <Text style={styles.cardText}>
            • Sua <Text style={styles.highlight}>pontuação máxima</Text> será exibida.
          </Text>
            <Text style={styles.cardText}>
            • O KODA <Text style={styles.highlight}>explicará o conteúdo</Text> para você.
          </Text>
        </View>
      </View>
      

      {/* Texto fora do card */}
      <Text style={styles.footerText}>
        Leia as instruções com atenção{"\n"} antes de iniciar o quiz!
      </Text>

      {/* Botão começar */}
      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate("Questions")}
      >
        <Text style={styles.buttonText}>Continuar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
container: {
  flex: 1,
  backgroundColor: "#FFF4DE",
  alignItems: "center",
  padding: 20,
  },
exitButton: {
  position: "absolute",
  top: 40,
  left: 20,
  backgroundColor: "#ED4700",
  padding: 8,
  borderRadius: 50,
  elevation: 3,
  },
title: {
  position: "absolute",
  top: 130,
  fontSize: 24,
  fontWeight: "bold",
  color: "#5B2E26",
  textAlign: "center",
  },
cardWrapper: {
  alignItems: "center",
  marginTop: 340,
},
image: {
  width: 160,
  height: 160,
  resizeMode: "contain",
  position: "absolute",
  top: -150, 
  zIndex: 0,
  marginTop:-25,
},
card: {
  backgroundColor: "#7BCAF9",
  padding: 40,
  borderRadius: 20,
  width: 280,
  height: 250,
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 8,
  elevation: 4,
  alignItems: "center",
  justifyContent: "center",
  zIndex: 1,
  marginTop:-21,
},
cardText: {
  color: "#fff",
  fontSize: 16,
  lineHeight: 22,
  marginBottom: 8,
  textAlign: "center",
  },
highlight: {
  fontWeight: "bold",
  },
footerText: {
  fontSize: 16,
  color: "#333",
  marginTop: 20, 
  marginBottom: 20, 
  textAlign: "center",
},
button: {
  backgroundColor: "#ED4700",
  paddingVertical: 14,
  paddingHorizontal: 40,
  borderRadius: 16,
  elevation: 3,
  shadowColor: "#000", 
  shadowOpacity: 0.1, 
  shadowRadius: 8, 
},
buttonText: {
  color: "#FFF",
  fontSize: 16,
  fontWeight: "bold",
  },
buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.97 }],
  },
});

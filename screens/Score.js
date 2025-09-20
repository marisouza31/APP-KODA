import { StyleSheet, Text, View, Pressable, Image } from 'react-native';
import React from 'react';
import { useRoute } from "@react-navigation/native";

const Score = ({ navigation }) => {
  const route = useRoute();
  const { score } = route.params;

  const isPositive = score > 0;

  return (
    <View style={styles.container}>
      {/* Conteúdo central */}
      <View style={styles.content}>
        <Text style={styles.title}>
          {isPositive ? "🎉 Parabéns!" : "Poxa, que pena!"}
        </Text>

        <Text style={styles.subtitle}>
          {isPositive
            ? `Sua pontuação foi de ${score} pontos`
            : `Sua pontuação foi de ${score} pontos`}
        </Text>

        <Text style={styles.tip}>
          {isPositive
            ? "Continue estudando, você está indo bem!"
            : "Mas você pode melhorar!"}
        </Text>

        <Pressable
          style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
          onPress={() => navigation.navigate("TelaProgresso")}
        >
          <Text style={styles.buttonText}>Ver Progresso</Text>
        </Pressable>
      </View>

      {/* Imagem embaixo */}
      <Image
        source={
          isPositive
            ? require("../assets/quiz-img/kodafeliz.png")
            : require("../assets/quiz-img/kodatriste.png")
        }
        style={isPositive ? styles.logo1 : styles.logo2}
      />
    </View>
  );
};

export default Score;

// tabela de cores
const ORANGE = "#ED4700";
const BEIGE = "#F6E8D3";
const DARK = "#1F1F1F";

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BEIGE,
    justifyContent: "space-between",
    alignItems: "center",
    padding: 20,
  },
  content: {
    flex: 1,
    justifyContent: "center", 
    alignItems: "center",
  },
  logo1: {
    height: 200,
    width: 250,
    resizeMode: "contain",
    marginBottom: 10,
  },
  logo2: {
    height: 250,
    width: 250,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 22,
    fontWeight: "bold",
    color: ORANGE,
    marginBottom: 8,
  },
  subtitle: {
    fontSize: 18,
    fontWeight: "600",
    color: DARK,
    textAlign: "center",
    marginBottom: 6,
  },
  tip: {
    fontSize: 16,
    color: "#555",
    textAlign: "center",
    marginBottom: 20,
  },
  button: {
    backgroundColor: ORANGE,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    width: 160,
    marginTop: 10,
  },
  buttonText: {
    color: "#FFF",
    fontSize: 16,
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.8,
    transform: [{ scale: 0.96 }],
  },
});

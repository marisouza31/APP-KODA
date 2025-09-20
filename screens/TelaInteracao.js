import React, { useState, useEffect, useRef } from "react";
import { View, Text, StyleSheet, Image, Pressable, Animated, Easing, Dimensions } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech"; 
import { Audio } from "expo-av"; 

export default function WelcomeScreen({ navigation }) {
  const screenWidth = Dimensions.get("window").width;

  const [music, setMusic] = useState();
  const scaleAnim = useRef(new Animated.Value(1)).current; // animação de respiração

  // função que inicia o efeito de respiração
  const startBreathingAnimation = () => {
    Animated.loop(
      Animated.sequence([
        Animated.timing(scaleAnim, { toValue: 1.05, duration: 400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
        Animated.timing(scaleAnim, { toValue: 0.95, duration: 400, easing: Easing.inOut(Easing.ease), useNativeDriver: true }),
      ])
    ).start();
  };

  // função que para a animação e volta para o tamanho normal
  const stopBreathingAnimation = () => {
    scaleAnim.stopAnimation();
    Animated.timing(scaleAnim, { toValue: 1, duration: 200, useNativeDriver: true }).start();
  };

  // função que faz o Koda falar
  const falarKoda = async () => {
    const { sound: bgMusic } = await Audio.Sound.createAsync(
      require("../assets/musiquinha.mp3"),
      { shouldPlay: false, isLooping: true, volume: 0.2 }
    );
    setMusic(bgMusic);

    const falar = (texto, pitch = 1.4, rate = 0.85) => {
      return new Promise((resolve) => {
        Speech.speak(texto, { language: "pt-BR", pitch, rate, onDone: resolve });
      });
    };

    // Música curta antes da fala
    await bgMusic.playAsync();
    await new Promise((resolve) => setTimeout(resolve, 5000));
    await bgMusic.stopAsync();

    // Começa animação de respiração
    startBreathingAnimation();

    // fala do Koda
    await falar("Olá! Eu sou o Koda!");
    await falar("Estou tão feliz de te ver");
    await falar("Vamos brincar e aprender juntos!");
    await falar("Bora nessa?");

    // para a animação de respiração
    stopBreathingAnimation();

    await bgMusic.unloadAsync();
  };

  useEffect(() => {
    falarKoda();
  }, []);


  return (
    <View style={styles.container}>
      <Pressable
        style={({ pressed }) => [styles.exitButton, pressed && styles.buttonPressed]}
        onPress={() => navigation.goBack()}
      >
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </Pressable>

      <Animated.View style={[styles.card, { transform: [{ scale: scaleAnim }] }]}>
        <Image source={require("../assets/IconInteracao.png")} style={styles.image} /> 
      </Animated.View>

      <Text style={styles.title}>
        Olá eu sou o <Text style={styles.highlight}>Koda!</Text>
      </Text>

      <Text style={styles.description}>
        Estou tão feliz de te ver!{"\n"}Vamos brincar e aprender juntos!{"\n"}Bora nessa?
      </Text>

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={() => navigation.navigate("TelaExplicacao")} // vai para outra tela
      >
        <Text style={styles.buttonText}>Começar</Text>
      </Pressable>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4DE", 
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },
  exitButton: {
    position: "absolute",
    top: 40,
    left: 20,
    backgroundColor: "#ED4700",
    padding: 8,
    borderRadius: 50, 
  },
  card: {
    backgroundColor: "#ED4700", 
    width: 220,
    height: 220,
    borderRadius: 24,
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 24,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 6,
    elevation: 5,
  },
  image: {
    width: 120,
    height: 120,
    resizeMode: "contain",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    textAlign: "center",
    marginBottom: 8,
  },
  highlight: {
    color: "#ED4700",
  },
  description: {
    fontSize: 17,
    color: "#333",
    textAlign: "center",
    marginBottom: 24,
    marginTop: 20,
    lineHeight: 20,
  },
  button: {
    backgroundColor: "#ED4700", 
    paddingVertical: 14,
    borderRadius: 16, 
    alignItems: "center", 
    shadowColor: "#000", 
    shadowOpacity: 0.1, 
    shadowRadius: 8, 
    elevation: 2,
    width: 150, 
    marginTop: 20,
    alignSelf: "center",
  },
  buttonText: { 
    color: "#FFF",
    fontSize: 16, 
    fontWeight: "bold",
  },
  buttonPressed: {
    opacity: 0.7, 
    transform: [{ scale: 0.97 }],
  },
});

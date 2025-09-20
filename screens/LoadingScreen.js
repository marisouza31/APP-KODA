import React, { useState, useEffect } from "react";
import { View, Text, StyleSheet, Dimensions } from "react-native";
import { Image } from "expo-image";

export default function LoadingScreen() {
  const screenWidth = Dimensions.get("window").width;

  // estado que controla se os textos iniciais devem sumir
  const [showLoadingText, setShowLoadingText] = useState(true);
  const [text, setText] = useState("");

  useEffect(() => {
    const timer = setTimeout(() => {
      setShowLoadingText(false); // esconde os textos iniciais
      setText("Aguarde");        // mostra o novo texto
    }, 3000); // 3 segundos

    return () => clearTimeout(timer);
  }, []);

  return (
    <View style={styles.container}>
      <Image
        source={require("../assets/koda-loading.gif")}
        style={[styles.image, { width: screenWidth * 0.5, height: screenWidth * 0.5 }]}
        contentFit="contain"
      />
      {showLoadingText ? (
        <>
          <Text style={styles.text}>Estamos preparando</Text>
          <Text style={styles.text}>tudo para você!</Text>
        </>
      ) : (
        <Text style={styles.text}>{text}</Text>
      )}
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#FFF4DE",
    justifyContent: "center",
    alignItems: "center",
  },
  image: {
    marginBottom: 20,
  },
  text: {
    fontSize: 13,
    fontWeight: "600",
    color: "#ED4700",
    textAlign: "center",
  },
});

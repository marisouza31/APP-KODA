import { Pressable, StyleSheet, Text, View } from "react-native";
import React, { useState, useEffect } from "react";
import { data } from "./data/questions__complete";
import { Ionicons } from "@expo/vector-icons";
import * as Speech from "expo-speech";
import ConfettiCannon from "react-native-confetti-cannon";
import { Audio } from "expo-av"; 

export default function Questions({ navigation }) {
  const [currentCategoryIndex, setCurrentCategoryIndex] = useState(0);
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [score, setScore] = useState(0);
  const [selectedOption, setSelectedOption] = useState(null);
  const [isCorrect, setIsCorrect] = useState(null);
  const [showConfetti, setShowConfetti] = useState(false);

  const [errorSound, setErrorSound] = useState();

  const currentCategory = data[currentCategoryIndex];
  const questionsInCurrentCategory = currentCategory.questions;
  const currentQuestion = questionsInCurrentCategory[currentQuestionIndex];

// 🔊 Fala a explicação ao iniciar a pergunta
useEffect(() => {
  if (currentQuestion && currentQuestion.explanation) {
    Speech.stop();
    Speech.speak(currentQuestion.explanation, {
      language: "pt-BR",
      rate: 0.85,
      pitch: 1.4,
    });
  }
}, [currentQuestionIndex, currentCategoryIndex]);


  // Carrega som de erro
  useEffect(() => {
    const loadSound = async () => {
      const { sound } = await Audio.Sound.createAsync(
        require("../assets/errou.mp3")
      );
      setErrorSound(sound);
    };
    loadSound();

    return () => {
      if (errorSound) errorSound.unloadAsync();
    };
  }, []);

const handleNext = () => {
  const isLastQuestionInCategory = currentQuestionIndex === currentCategory.questions.length - 1;
  const isLastCategory = currentCategoryIndex === data.length - 1;

  if (!isLastQuestionInCategory) {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  } else if (!isLastCategory) {
    setCurrentCategoryIndex(currentCategoryIndex + 1);
    setCurrentQuestionIndex(0); // reinicia na primeira pergunta da nova categoria
  } else {
    navigation.navigate("Score", { score: score });
  }

  // resetar estados a cada troca
  setSelectedOption(null);
  setIsCorrect(null);
  setShowConfetti(false);
};


  const handleOptionPress = async (pressedOption) => {
    setSelectedOption(pressedOption);
    const isAnswerCorrect = currentQuestion.answer === pressedOption;
    setIsCorrect(isAnswerCorrect);

    if (isAnswerCorrect) {
      setScore((prevScore) => prevScore + 10);

      Speech.stop();
      const frases = ["Isso aí Marizinha! Você é demais!"];
      const randomFrase = frases[Math.floor(Math.random() * frases.length)];
      Speech.speak(randomFrase, { language: "pt-BR", rate: 1.0 });

      setShowConfetti(true);
    } else {
      // Toca som de erro
      if (errorSound) await errorSound.replayAsync();

      Speech.stop();
      Speech.speak("Aah, Não foi dessa vez, mas você está aprendendo!", { language: "pt-BR" });
    }
  };

  return (
    <View style={styles.container}>
      <Pressable style={styles.exitButton} onPress={() => navigation.goBack()}>
        <Ionicons name="arrow-back-outline" size={28} color="#fff" />
      </Pressable>

      <View style={styles.card}>
        <View style={styles.cardHeader}>
          <Text style={styles.cardHeaderText}>KODA explica:</Text>
        </View>
        <View style={styles.cardBody}>
          <Text style={styles.cardQuestion}>{currentQuestion.question}</Text>
        </View>
      </View>

      <View style={styles.quesOptions}>
        {currentQuestion.options.map((option, index) => {
          const isSelected = selectedOption === option;
          let optionStyle = [styles.optionButton];

          if (index === 0) optionStyle.push(styles.optionBlue);
          if (index === 1) optionStyle.push(styles.optionYellow);
          if (index === 2) optionStyle.push(styles.optionRed);
          if (index === 3) optionStyle.push(styles.optionOrange);

          if (isSelected) {
            optionStyle.push(isCorrect ? styles.correctOption : styles.wrongOption);
          }

          return (
            <Pressable
              key={index}
              style={optionStyle}
              onPress={() => handleOptionPress(option)}
              disabled={!!selectedOption}
            >
              <Text style={styles.optionText}>{option}</Text>
            </Pressable>
          );
        })}

      <Pressable
        style={({ pressed }) => [styles.button, pressed && styles.buttonPressed]}
        onPress={handleNext}
      >
        <Text style={styles.buttonText}>
          {currentCategoryIndex === data.length - 1 &&
          currentQuestionIndex === currentCategory.questions.length - 1
            ? "Finalizar"
            : "Próximo"}
        </Text>
      </Pressable>
      </View>

      {showConfetti && (
        <ConfettiCannon count={100} origin={{ x: 0, y: 0 }} fadeOut autoStart />
      )}
    </View>
  );
}


const ORANGE = "#ED4700";
const BEIGE = "#F6E8D3";
const DARK = "#1F1F1F";
const BROWN = "#5A2E0E";
const GREY = "#9B9A9A";

const styles = StyleSheet.create({
  container: {
    flex:1,
    padding: 16,
    backgroundColor:BEIGE,
    justifyContent: "center",
    alignItems: "center",
  },
   questionTitle: {
    fontSize: 18,
    fontWeight: "bold",
    marginBottom: 20,
    backgroundColor: "#ED4700",
    color: "#fff",
    textAlign: "center",
    padding: 16,
    borderRadius: 12,
    overflow: "hidden",
    width: "100%", 
  },
  quesOptions: {
    width: "100%",
    alignItems: "center",
  },
  optionButton: {
    borderRadius: 12,
    paddingVertical: 16,
    paddingHorizontal: 20,
    marginBottom: 14,
    alignItems: "center",
    justifyContent: "center",
    width: "85%",
  },
  optionText: {
    fontSize: 18,
    fontWeight: "bold",
    color: "#fff",
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
    alignSelf: "center",
    marginTop: 30,
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
  card: {
  width: "85%",
  borderRadius: 16,
  backgroundColor: "#FFF4DE",
  marginBottom: 20,
  overflow: "hidden",
  shadowColor: "#000",
  shadowOpacity: 0.1,
  shadowRadius: 6,
  elevation: 3,
},
cardHeader: {
  backgroundColor:"#F35F2F",
  padding: 12,
  alignItems: "center",
},
cardHeaderText: {
  color: "#732C1D",
  fontSize: 18,
  fontWeight: "bold",
},
cardBody: {
  padding: 16,
  backgroundColor: BEIGE,
  alignItems: "center",
},
cardQuestion: {
  fontSize: 16,
  fontWeight: "bold",
  textAlign: "center",
  color: DARK,
},
  optionBlue: { backgroundColor: "#5CA2B7" },
  optionYellow: { backgroundColor: "#F4AC47" },
  optionRed: { backgroundColor: "#F85655" },
  optionOrange: { backgroundColor: "#FF6C3F" },
  correctOption: { backgroundColor: "#2ECC71" },
  wrongOption: { backgroundColor: "#E74C3C" },
});
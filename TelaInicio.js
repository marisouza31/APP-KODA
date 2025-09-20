import React, { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "./firebase";
import {
  SafeAreaView,
  View,
  Text,
  TextInput,
  Image,
  Pressable,
  KeyboardAvoidingView,
  Platform,
  StyleSheet,
  ScrollView,
  Alert,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";

export default function LoginScreen({ navigation }) {  // adiciona a navegção para outra tela
  const [email, setEmail] = useState("");
  const [senha, setSenha] = useState("");
  const [showSenha, setShowSenha] = useState(false);

  const onLogin = () => {
    if (!email || !senha) {
      Alert.alert("Erro", "Preencha email e senha!");
      return;
    }

    signInWithEmailAndPassword(auth, email, senha)
      .then((userCredential) => {
        const user = userCredential.user;
        console.log("Usuário logado:", user.email);

        Alert.alert("Sucesso", `Bem-vindo ${user.email}`, [
          {
            text: "OK",
            onPress: () => navigation.replace("Home"), // troca a tela para Home
          },
        ]);
      })
      .catch((error) => {
        console.log("Erro ao logar:", error.code, error.message);
        Alert.alert("Erro", "Email ou senha incorretos!");
      });
  };


  return (
    <SafeAreaView style={styles.container}>
      <KeyboardAvoidingView
        behavior={Platform.OS === "ios" ? "padding" : undefined}
        style={{ flex: 1 }}
      >
        <ScrollView
          keyboardShouldPersistTaps="handled"
        >
          {/* Logo */}
          <View style={styles.top}>
            <Image source={require("./assets/KODA.png")} style={styles.logo} />
            <Text style={styles.title}>Login</Text>
          </View>

          {/* Formulário */}
          <View style={styles.form}>
            {/* E-mail */}
            <Text style={styles.label}>E-mail</Text>
            <View style={styles.inputBox}>
              <Ionicons name="mail-outline" size={20} style={styles.leftIcon} />
              <TextInput
                style={styles.input}
                placeholder="Email ou nome de usuário"
                placeholderTextColor="#9A9A9A"
                keyboardType="email-address"
                autoCapitalize="none"
                value={email}
                onChangeText={setEmail}
                returnKeyType="next"
              />
            </View>

            {/* Senha */}
            <Text style={[styles.label, { marginTop: 16 }]}>Senha</Text>
            <View style={styles.inputBox}>
              <Ionicons name="lock-closed-outline" size={20} style={styles.leftIcon} />
              <TextInput
                style={styles.input}
                placeholder="Coloque sua senha"
                placeholderTextColor="#9A9A9A"
                secureTextEntry={!showSenha}
                value={senha}
                onChangeText={setSenha}
              />
              <Pressable onPress={() => setShowSenha((s) => !s)} hitSlop={10}>
                <Ionicons
                  name={showSenha ? "eye-off-outline" : "eye-outline"}
                  size={22}
                  style={styles.rightIcon}
                />
              </Pressable>
            </View>

            {/* Links */}
            <Pressable onPress={() => console.log("Esqueceu a senha")}>
              <Text style={styles.forgot}>Esqueceu sua senha?</Text>
            </Pressable>

            {/* Botão */}
            <Pressable
              style={({ pressed }) => [
                styles.loginBtn,
                pressed && { backgroundColor: "#FF7A50" }, 
              ]}
              onPress={onLogin}
            >
              <Text style={styles.loginText}>Entrar</Text>
            </Pressable>


            {/* Rodapé */}
            <View style={styles.footer}>
              <Text style={styles.footerText}>Não possui conta?</Text>
                <Pressable onPress={() => navigation.navigate("TelaCadastro")}>
                <Text style={styles.footerLink}> Crie aqui!</Text>
              </Pressable>
            </View>
          </View>
        </ScrollView>
      </KeyboardAvoidingView>
    </SafeAreaView>
  );
}

//tabela de cores
const ORANGE = "#ED4700";
const BEIGE = "#FFF4DE";
const DARK = "#1F1F1F";

//estilização da pagina
const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: BEIGE,
  },
  top: {
    alignItems: "center",
    paddingTop: 80,
    marginBottom: 20,
  },
  logo: {
    width: 220,
    height: 220,
    resizeMode: "contain",
    marginBottom: 10,
  },
  title: {
    fontSize: 32,
    fontWeight: "800",
    color: ORANGE,
    marginTop: 10,
  },
  form: {
    paddingHorizontal: 22,
    alignItems: "center",
  },
  label: {
    width: 270,
    marginTop: 20,
    alignItems: "flex-start", 
    fontSize: 16,
    fontWeight: "800",
    color: ORANGE,
    marginBottom: 8,
  },
  inputBox: {
    flexDirection: "row",
    alignItems: "center",
    borderColor: DARK,
    borderWidth: 2,
    backgroundColor: "#fff",
    borderRadius: 14,
    paddingHorizontal: 12,
    height: 48,
    width: 270, 
  },
  leftIcon: {
    marginRight: 8,
    color: DARK,
  },
  rightIcon: {
    marginLeft: 8,
    color: "#5C5C5C",
  },
  input: {
    flex: 1,
    fontSize: 15,
    color: DARK,
  },
  forgot: {
    marginTop: 20,
    textDecorationLine: "underline",
    color: "#8E8E8E",
    alignSelf: "center",
  },
  loginBtn: {
    marginTop: 18,
    backgroundColor: ORANGE,
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
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
  footer: {
    flexDirection: "row",
    justifyContent: "center",
    marginTop: 18,
  },
  footerText: {
    color: "#9A9A9A",
  },
  footerLink: {
    color: DARK,
    fontWeight: "800",
    textDecorationLine: "underline",
  },
});

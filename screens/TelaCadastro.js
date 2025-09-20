import React from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Pressable, Image } from "react-native";

export default function TelaCadastro({ navigation }) {
  return (
    <View style={styles.container}>

        {/* Cabeçalho com logo */}
      <View style={styles.header}>
        <Image source={require("../assets/KODA.png")} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>Cadastro</Text>
      {/*Começo do Wizard form*/}
      <View style={styles.wizard}>
        <View style={styles.circle}>
          <Image source={require("../assets/User.png")} style={styles.icone}/>
        </View>
        <Image source={require("../assets/flechaMarrom.png")} style={styles.arrow} />
        <View style={styles.circleDes}>
          <Image source={require("../assets/Security Shield.png")} style={styles.icone}/>
        </View>
        <Image source={require("../assets/flechaMarrom.png")} style={styles.arrow} />
        <View style={styles.circleDes}>
          <Image source={require("../assets/Terms and Conditions.png")} style={styles.icone}/>
        </View>
      </View>
    
        {/* Linha decorativa */}
      <View style={styles.linha}></View>
        <Text style={styles.subTitulo}>Informações da conta</Text>
      <View style={styles.linha}></View>

      <View style={styles.form}>
          {/* Campos de entrada */}
        <Text style={styles.label}>Usuário</Text>
        <TextInput 
          style={styles.inputBox} 
          placeholder="Nome de usuário" 
        />
        <Text style={styles.label}>Email</Text>
        <TextInput 
          style={styles.inputBox} 
          placeholder="Digite seu email" 
          keyboardType="email-address"
        />
        <Text style={styles.label}>Senha</Text>
        <TextInput 
          style={styles.inputBox} 
          placeholder="Crie sua senha" 
          secureTextEntry 
        />
        <Text style={styles.label}>Confirmar senha</Text>
        <TextInput 
          style={styles.inputBox} 
          placeholder="Confirme sua senha" 
          secureTextEntry 
        />
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable title="Login" style={styles.cadastroBtn} onPress={() => navigation.goBack()} > 
            <Text style={styles.loginText}>Voltar</Text>
        </Pressable>
        <Pressable title="Proximo" style={styles.cadastroBtn} onPress={() => navigation.navigate("Etapa2")} >
            <Text style={styles.loginText}>Próximo</Text>
        </Pressable>
      </View>
    </View>
  );
}

//tabela de cores
const ORANGE = "#ED4700";
const BEIGE = "#F6E8D3";
const DARK = "#1F1F1F";
const BROWN = "#5A2E0E";
const GREY = "#9B9A9A";

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    // justifyContent: "center",
    backgroundColor: BEIGE,
  },
  header: {
    height: 70,
    marginTop:50,
    width: "100%",
    //backgroundColor: DARK,
    justifyContent: "center",
  },
  logo: {
    width: 80,
    height: 80,
    resizeMode: "contain",
  },
  linha: {
    height: 2,
    backgroundColor: BROWN,
    marginVertical: 12,
    borderRadius: 1,
  },
  titulo: {
    fontSize: 24,
    fontWeight: "800",
    color: ORANGE,
    marginTop: -2,
    marginBottom: 4,
    textAlign: "center",
  },
  form: {
    marginBottom: 15,
    width: "100%",
    //backgroundColor: DARK,
  },
  wizard: {
    flexDirection: "row",
    justifyContent: "center",
    //backgroundColor:DARK,
    alignItems: "center",
    justifyContent: "space-between",
    marginVertical: 10,
  },
  icone: {
    width: 30,
    height: 30,
    margin:"auto",
    color: DARK,
  },
  circle: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: ORANGE,
    borderRadius: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
  circleDes: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: GREY,
    borderRadius: "100%",
    marginLeft: 0,
    marginRight: 0,
  },
    subTitulo: {
    fontSize: 14,
    color: ORANGE,
    textAlign: "center",
    },
  label: {
    fontSize: 16,
    fontWeight: "800",
    color: ORANGE,
    marginBottom: -10,
    marginLeft: 10,
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
    marginTop: 12,
    marginBottom: 12,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    //backgroundColor: DARK,  
  },
  cadastroBtn: {
    marginTop: 0,
    backgroundColor: ORANGE,
    paddingVertical: 14,
    borderRadius: 16,
    alignItems: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 8,
    elevation: 4,
    width: 130,
    alignSelf: "center",
  },
  loginText: {
    color: "#fff",
    fontSize: 16,
    fontWeight: "700",
    letterSpacing: 0.4,
  },
});
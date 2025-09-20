import React, { useState } from "react";
import { View, Text, TextInput, Button, StyleSheet, TouchableOpacity, Pressable, Image } from "react-native";
import { Picker } from "@react-native-picker/picker";


export default function Etapa3({ navigation }) {
  const [tecnologia, setTecnologia] = useState('');
  const [opcaoTranstorno, setOpcaoTranstorno] = useState(null);
  const [transtorno, setTranstorno] = useState('');

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
        <Image source={require("../assets/flechaLaranja.png")} style={styles.arrow} />
        <View style={styles.circle}>
          <Image source={require("../assets/Security Shield.png")} style={styles.icone}/>
        </View>
        <Image source={require("../assets/flechaLaranja.png")} style={styles.arrow} />
        <View style={styles.circle}>
          <Image source={require("../assets/Terms and Conditions.png")} style={styles.icone}/>
        </View>
      </View>
    
        {/* Linha decorativa */}
      <View style={styles.linha}></View>
        <Text style={styles.subTitulo}>Informações complementares</Text>
      <View style={styles.linha}></View>

        {/* Campos de entrada */}
      <View style={styles.form}>
        <Text style={styles.label}>Escolha uma opção de linguagem</Text>
        <View style={styles.dropdown}>
          <Picker
            style={styles.picker}
            selectedValue={tecnologia}
            onValueChange={(itemValue) => setTecnologia(itemValue)}
          >
            <Picker.Item label="Selecione" value='' />
            <Picker.Item label="JavaScript" value="js" />
            <Picker.Item label="HTML5" value="html" />
            <Picker.Item label="CSS3" value="css" />
        </Picker>
        </View>

      <Text style={styles.label}>Telefone</Text>
      <TextInput 
        style={styles.inputBox} 
        placeholder="Ex: 55+ (XX) XXXXX-XXXX" 
        keyboardType="default"
      />

        <Text style={styles.label}>Possui algum transtorno de aprendizagem?</Text>
        <View style={styles.optionContainer}>
          {/* Radio Não */}
          <TouchableOpacity
            style={styles.option}
            onPress={() => {
              setOpcaoTranstorno("nao");
              setTranstorno('') // para limpar o estado do trenatorno
            }}
          >
            <View style={styles.radioOuter}>
              {opcaoTranstorno === "nao" && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.labelOption}>Não</Text>
          </TouchableOpacity>

          {/* Radio Sim */}
          <TouchableOpacity
            style={styles.option}
            onPress={() => setOpcaoTranstorno("sim")}
          >
            <View style={styles.radioOuter}>
              {opcaoTranstorno === "sim" && <View style={styles.radioInner} />}
            </View>
            <Text style={styles.labelOption}>Sim, qual?</Text>
          </TouchableOpacity>

          {/* Dropdown só aparece se "Sim" for escolhido */}
          {opcaoTranstorno === "sim" && (
            <View style={styles.dropdown2}>
              <Picker
                style={styles.picker}
                selectedValue={transtorno}
                onValueChange={(itemValue) => setTranstorno(itemValue)}
              >
                <Picker.Item label="Selecione" value=''/>
                <Picker.Item label="TDAH" value="tdah" />
                <Picker.Item label="Dislexia" value="dislexia" />
              </Picker>
            </View>
          )}
        </View>
      </View>
      
      <View style={styles.buttonContainer}>
        <Pressable title="Login" style={styles.cadastroBtn} onPress={() => navigation.goBack()} > 
            <Text style={styles.loginText}>Voltar</Text>
        </Pressable>
        <Pressable title="Cadastrar" style={styles.cadastroBtn} onPress={() => alert("Cadastrado com sucesso")} >
            <Text style={styles.loginText}>Cadastrar</Text>
        </Pressable>
      </View>
    </View>
  );
}

//Estilos

//tabela de cores
const ORANGE = "#ED4700";
const BEIGE = "#F6E8D3";
const DARK = "#1F1F1F";
const BROWN = "#5A2E0E";
const GREY = "#9B9A9A";
const AQUA = "#7BCAF9";

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
  dropdown: {
    borderColor: DARK,
    borderWidth: 2,
    borderRadius: 14,
    height:56,
    marginBottom:15,
  },
  dropdown2: {
    borderColor: DARK,
    borderWidth: 2,
    borderRadius: 14,
    height:56,
    marginBottom:15,
    marginLeft:10,
    width:130,
  },
  picker: {
    flex: 1,
    color: DARK,
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
    borderRadius: 100,
    marginLeft: 0,
    marginRight: 0,
  },
  circleDes: {
    width: 45,
    height: 45,
    borderRadius: 10,
    backgroundColor: GREY,
    borderRadius: 100,
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
    marginBottom: 5,
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
    marginTop: 0,
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
  optionContainer: {
    flexDirection: "row",      
    justifyContent: "flex-start",
    alignItems: "center",
    marginVertical: 10,
    width: "100%",
    //backgroundColor:DARK,
  },
  option: {
    flexDirection: "row",
    alignItems: "center",
    marginLeft:7,
  },
  
  radioOuter: {
  height: 24,
  width: 24,
  borderRadius: 12,
  borderWidth: 2,
  borderColor: "#000",
  alignItems: "center",
  justifyContent: "center",
  marginRight: 8,
  },
  radioInner: {
    height: 16,
    width: 16,
    borderRadius: 100,
    backgroundColor: AQUA,
  },
  
})
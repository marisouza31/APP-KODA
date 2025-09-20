import React from "react";
import { useState } from "react";
import {
  View,
  Text,
  TextInput,
  StyleSheet,
  TouchableOpacity,
  Pressable,
  Image,
  Platform,
} from "react-native";
import DateTimePicker from "@react-native-community/datetimepicker";

{/* exportação para a função do campo data */}
export default function Etapa2({ navigation }) {
  const [date, setDate] = useState(new Date());
  const [show, setShow] = useState(false);
  const [value, setValue] = useState("opcao1");

  const onChangeDate = (event, selectedDate) => {
    // em Android, event.type pode ser "dismissed"
    const currentDate = selectedDate || date;
    setShow(Platform.OS === "ios"); // mantém o picker aberto no iOS
    setDate(currentDate);
  };
  
  const formattedDate = date.toLocaleDateString("pt-BR");

    return (
    <View style={styles.container}>
          
      <View style={styles.header}>
        <Image source={require("../assets/KODA.png")} style={styles.logo} />
      </View>

      <Text style={styles.titulo}>Cadastro</Text>

      <View style={styles.wizard}>
        <View style={styles.circle}>
          <Image source={require("../assets/User.png")} style={styles.icone} />
        </View>
        <Image
          source={require("../assets/flechaLaranja.png")}
          style={styles.arrow}
        />
        <View style={styles.circle}>
          <Image
            source={require("../assets/Security Shield.png")}
            style={styles.icone}
          />
        </View>
        <Image
          source={require("../assets/flechaMarrom.png")}
          style={styles.arrow}
        />
        <View style={styles.circleDes}>
          <Image
            source={require("../assets/Terms and Conditions.png")}
            style={styles.icone}
          />
        </View>
      </View>

      <View style={styles.linha} />
      <Text style={styles.subTitulo}>Informações pessoais</Text>
      <View style={styles.linha} />

      <View style={styles.form}>
        <Text style={styles.label}>Nome completo</Text>
        <TextInput style={styles.inputBox} placeholder="Nome de usuário" />

        <Text style={styles.label}>Data de nascimento</Text>
        {/* Pressable para abrir o DatePicker */}
        <Pressable style={styles.inputBox} onPress={() => setShow(true)}>
          <Text>{formattedDate}</Text>
        </Pressable>

        {show && (
          <DateTimePicker
            value={date}
            mode="date"
            display="default"
            onChange={onChangeDate}
            maximumDate={new Date()} // opcional: não permitir data futura
          />
        )}
      </View>

      <Text style={{ marginTop: 8, color:GREY, fontSize: 16, fontWeight: "800", color: ORANGE, marginLeft: 10}}>Gênero</Text>

      {/* Radio custom (sem libs) */}

      <View style={styles.optionContainer}>

        {["Menino", "Menina"].map((label, idx) => {
          const val = `opcao${idx + 1}`;
          return (
                <TouchableOpacity
                  key={val}
                  style={styles.option}
                  onPress={() => setValue(val)}
                  accessibilityRole="radio"
                  accessibilityState={{ selected: value === val }}
                >
                  <View style={styles.radioOuter}>
                    {value === val && <View style={styles.radioInner} />}
                  </View>
                  <Text style={styles.labelOption}>{label}</Text>
                </TouchableOpacity>
          );
        })}

      </View>

      <View style={styles.buttonContainer}>
        <Pressable style={styles.cadastroBtn} onPress={() => navigation.goBack()}>
          <Text style={styles.loginText}>Voltar</Text>
        </Pressable>

        {/* Ajuste o nome da tela destino se necessário */}
        <Pressable style={styles.cadastroBtn} onPress={() => navigation.navigate("Etapa3")}>
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
const AQUA = "#7BCAF9";

//estilos
const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    //justifyContent: "center",
    color: GREY,
    backgroundColor: BEIGE,
  },
  header: {
    height: 70,
    marginTop: 50,
    width: "100%",
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
  },
  wizard: {
    flexDirection: "row",
    justifyContent: "center",
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
    marginBottom: 30,
  },
  buttonContainer: {
    flexDirection: "row",
    justifyContent: "space-between",
    width: "100%",
    marginTop:59,  
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
    flexDirection: "row",            // coloca lado a lado
    justifyContent: "flex-start",  // espaço uniforme
    alignItems: "center",            // centraliza verticalmente
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
    borderRadius: "100%",
    backgroundColor: AQUA,
  },
});

{/* <View style={{ flex: 1, justifyContent: "center", alignItems: "center" }}>
      <Text>Data de nascimento: {date.toLocaleDateString()}</Text>

      <Button title="Selecionar Data" onPress={() => setShow(true)} />

      {show && (
        <DateTimePicker
          value={date}
          mode="date"
          display="default"
          onChange={onChange}
          maximumDate={new Date()} // evita datas futuras
        />
      )}
    </View> */}
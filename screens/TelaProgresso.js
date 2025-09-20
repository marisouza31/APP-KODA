import React from 'react'
import * as Progress from 'react-native-progress';
import { View, Text, StyleSheet, Image, Pressable, ScrollView, StatusBar,} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { Svg, Polyline, Line, Circle, Text as SvgText } from 'react-native-svg';

const TelaProgresso = ({vavigation}) => {
  return (
    <View style={styles.container} edges={['top']}>
        <ScrollView style={styles.scrollview}>

            <Text style={styles.titulo}>Progresso com o Koda:</Text>
            <Text style={styles.subtitulo}>Nível:</Text>

        <View style={styles.progresso}>
        <View style={styles.progressoWrapper}>
            {/* Estrela com número dentro */}
            <View style={styles.starContainer}>
            <Ionicons name="star" size={50} color="#FFD700" />
            <Text style={styles.starText}>1</Text>
            </View>

            {/* Barra de progresso */}
            <Progress.Bar progress={0.5} width={220} height={20} color={"#F85655"} />
        </View>
        </View>

            <Text style={styles.subtitulo}>Jornada:</Text>
            
            <View style={styles.jornada}>
                <View style={styles.linguagem}>
                    <Image
                        source={require("../assets/Html 5.png")}
                        style={styles.image}
                    />
                    <Text>HTML</Text>
                    <Progress.Pie progress={0.4} size={58} marginLeft={130} color={ORANGE}/>
                </View>
                <View style={styles.linguagem}>
                    <Image
                        source={require("../assets/CSS3.png")}
                        style={styles.image}
                    />
                    <Text>CSS</Text>
                    <Progress.Pie progress={0.56} size={58} marginLeft={140} color={AQUA}/>
                </View>
                <View style={styles.linguagem}>
                    <Image
                        source={require("../assets/JavaScript.png")}
                        style={styles.image}
                    />
                    <Text>JavaScript</Text>
                    <Progress.Pie progress={0.1} size={58} marginLeft={98} color={YELLOW}/>
                </View>
            </View>

            <Text style={styles.subtitulo}>Dias da semana:</Text>

            <View style={styles.jornada}>
                <View style={styles.ofensiva}>
                    <View style={styles.ofensivaTex}>
                        <Text style={styles.text}>Dom</Text><Text style={styles.text}>Seg</Text>
                        <Text style={styles.text}>Ter</Text><Text style={styles.text}>Qua</Text>
                        <Text style={styles.text}>Qui</Text><Text style={styles.text}>Sex</Text>
                        <Text style={styles.text}>Sáb</Text>
                    </View>
                    <View style={styles.ofensivaCheck}>
                        <View style={styles.ofensivaCirc}><Ionicons name="checkmark-outline" size={20} color="white"/></View>
                        <View style={styles.ofensivaCirc}><Ionicons name="checkmark-outline" size={20} color="white"/></View>
                        <View style={styles.ofensivaCirc}><Ionicons name="checkmark-outline" size={20} color="white"/></View><View style={styles.ofensivaCirc}><Ionicons name="checkmark-outline" size={20} color="white"/></View>
                        <View style={styles.ofensivaUnCirc}></View><View style={styles.ofensivaUnCirc}></View>
                        <View style={styles.ofensivaUnCirc}></View>
                    </View>
                </View>
            </View>

            <Text style={styles.subtitulo}>Meta semanal:</Text>

            <View style={styles.jornada}>
                <View style={styles.grafico}>
  <View style={styles.grafico}>
<Svg height="100%" width="100%" viewBox="0 0 330 300">
  {/* Linhas de referência horizontais */}
  {[0.25, 0.5, 0.75, 1].map((y, i) => (
    <Line
      key={i}
      x1="0"
      y1={270 - 270 * y}
      x2="330"
      y2={270 - 270 * y}
      stroke={GREY}
      strokeWidth="1"
    />
  ))}

  {/* Gráfico de linha */}
  <Polyline
    points={(() => {
      const valores = [0.8, 0.6, 0.4, 0.9, 0.7, 0.5, 0.3];
      const espacamento = 330 / (valores.length - 1);
      return valores
        .map((v, i) => `${i * espacamento},${270 - v * 270}`)
        .join(" ");
    })()}
    fill="none"
    stroke={ORANGE}
    strokeWidth="4"
  />

  {/* Pontos no gráfico */}
  {(() => {
    const valores = [0.8, 0.6, 0.4, 0.9, 0.7, 0.5, 0.3];
    const espacamento = 330 / (valores.length - 1);
    return valores.map((v, i) => (
      <Circle
        key={i}
        cx={i * espacamento}
        cy={270 - v * 270}
        r="6"
        fill={ORANGE}
      />
    ));
  })()}

  {/* Labels dos dias da semana centralizados */}
  {["Dom", "Seg", "Ter", "Qua", "Qui", "Sex", "Sáb"].map((dia, i, arr) => {
    const espacamento = 330 / (arr.length - 1); // divide igualmente
    return (
      <SvgText
        key={i}
        x={i * espacamento}
        y={260} // abaixo da linha
        fontSize="14"
        fill={ORANGE}
        fontWeight="bold" 
        textAnchor="middle" // centraliza horizontalmente
        alignmentBaseline="hanging" // ajusta verticalmente
      >
        {dia}
      </SvgText>
    );
  })}
</Svg>
</View>

                </View>
            </View>

            <View style={styles.ajuste}>
                
            </View>
        </ScrollView>
    </View>
  )
}

const ORANGE = "#ED4700";
const AQUA = "#7BCAF9";
const YELLOW = "#FFCA00";
const BEIGE = "#F6E8D3";
const DARK = "#1F1F1F";
const BROWN = "#5A2E0E";
const GREY = "#9B9A9A";

//estilos
const styles = StyleSheet.create({
    container: {
        flex:1,
        backgroundColor:BEIGE,
        paddingTop: StatusBar.currentHeight,
    },
    titulo: {
        textAlign:"center",
        fontSize:25,
        fontWeight:"bold",
        color:ORANGE,
        marginTop:35,
    },
    subtitulo: {
        marginTop:20,
        marginBottom:20,
        textAlign:"center",
        color:"#5B2E26",
        fontSize:20,
        fontWeight:"bold",
    },
    progresso: {
        justifyContent:"center",
        alignItems:"center",
    },
    jornada: {
        display:"flex",
        flexDirection:"column",
        alignItems:"center",
        gap:20,
    },
    linguagem: {
        display:"flex",
        flexDirection:"row",
        //justifyContent:"",
        alignItems:"center",
        width: 330,
        height: 140,
        borderWidth: 2,
        borderColor: '#333',
        borderStyle: 'solid',
        borderRadius: 20,
    },
    ofensiva: {
        width: 330,
        height: 90,
        borderWidth: 2,
        borderColor: '#333',
        borderStyle: 'solid',
        borderRadius: 20, 
    },
    ofensivaTex: {
        display:"flex",
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        marginTop:10,
    },
    text: {
        width:33,
        color:ORANGE,
        fontWeight:"bold",
        fontSize:15,
    },
    ofensivaCheck: {
        display:"flex",
        flexDirection:"row",
        gap:10,
        justifyContent:"center",
        alignItems:"center",
    },
    ofensivaCirc: {
        width:33,
        height:33,
        borderRadius:"100%",
        backgroundColor: "#F85655",
        borderStyle:"solid",
        borderWidth:1,
        borderColor:"#F85655",
        marginTop:15,
        justifyContent:"center",
        alignItems:"center",
    },
    ofensivaUnCirc: {
        width:33,
        height:33,
        borderRadius:"100%",
        borderStyle:"solid",
        borderWidth:2,
        borderColor:ORANGE,
        marginTop:15,
        justifyContent:"center",
        alignItems:"center",
    },
    grafico: {
        width: 330,
        height: 270,
        borderWidth: 2,
        borderColor: '#333',
        borderStyle: 'solid',
        borderRadius: 20, 
    },
    ajuste: {
        height:60,
    },
progressoRow: {
  flexDirection: "row",
  alignItems: "center",
  gap: 8,
},
nivelTexto: {
  marginLeft: 6,
  fontWeight: "bold",
  color: "#333",
  fontSize: 16,
},
progressoWrapper: {
  alignItems: "center",
  justifyContent: "center",
},

starContainer: {
  position: "absolute",
  top: -30, // sobe a estrela acima da barra
  zIndex: 1,
  alignItems: "center",
  justifyContent: "center",
},

starText: {
  position: "absolute",
  fontSize: 16,
  fontWeight: "bold",
  color: "#333", // cor do número dentro da estrela
},
barrasContainer: {
  width: "90%",
  padding: 10,
  justifyContent: "center",
  alignItems: "center",
  gap: 12,
},

barWrapper: {
  width: "100%",
  flexDirection: "row",
  alignItems: "center",
  gap: 10,
},

barLabel: {
  width: 30,
  textAlign: "center",
  fontWeight: "bold",
  color: ORANGE,
},

barBackground: {
  flex: 1,
  height: 20,
  backgroundColor: GREY,
  borderRadius: 10,
  overflow: "hidden",
},

barFill: {
  height: "100%",
  backgroundColor: ORANGE,
  borderRadius: 10,
},

})

export default TelaProgresso

import React, { useState, useEffect } from "react";
import { NavigationContainer } from "@react-navigation/native";
import { createNativeStackNavigator } from "@react-navigation/native-stack";

import TelaInicio from "./TelaInicio";
import Home from "./screens/Home";
import LoadingScreen from "./screens/LoadingScreen";
import TelaInteracao from "./screens/TelaInteracao";
import TelaCadastro from "./screens/TelaCadastro";
import Etapa2 from "./screens/Etapa2";
import Etapa3 from "./screens/Etapa3";
import TelaExplicacao from "./screens/TelaExplicacao";
import Questions from "./screens/Questions"
import Score from "./screens/Score"
import TelaProgresso from "./screens/TelaProgresso"

const Stack = createNativeStackNavigator();

export default function App() {
  const [loading, setLoading] = useState(true);

  // Simula carregamento por 5 segundos
  useEffect(() => {
    const timer = setTimeout(() => setLoading(false), 7000);
    return () => clearTimeout(timer);
  }, []);

  return (
    <NavigationContainer>
      <Stack.Navigator screenOptions={{ headerShown: false }}>
        {loading ? (
          <Stack.Screen name="Loading" component={LoadingScreen} />
        ) : (
          <>
            <Stack.Screen name="Login" component={TelaInicio} />
            <Stack.Screen name="Home" component={Home} />
            <Stack.Screen name="TelaInteracao" component={TelaInteracao} /> 
            <Stack.Screen name="TelaCadastro" component={TelaCadastro} />
            <Stack.Screen name= "Etapa2" component={Etapa2}/>
            <Stack.Screen name= "Etapa3" component={Etapa3}/>
            <Stack.Screen name= "TelaExplicacao" component={TelaExplicacao}/>
            <Stack.Screen name= "Questions" component={Questions}/>
            <Stack.Screen name= "Score" component={Score}/>
            <Stack.Screen name= "TelaProgresso" component={TelaProgresso}/>
          </>
        )}
      </Stack.Navigator>
    </NavigationContainer>
  );
}

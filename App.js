import { StyleSheet, ImageBackground } from "react-native";
import StartGameScreen from "./screens/StartGameScreen";
import { LinearGradient } from "expo-linear-gradient";
import { useState } from "react";
import GameScreen from "./screens/GameScreen";
export default function App() {
  const [userNumber, setUserNumber] = useState();
  const pickedNumberHandler = (pickedNumber) => {
    setUserNumber(pickedNumber);
  };
  let screen = <StartGameScreen onPickNumber={pickedNumberHandler} />;
  if (userNumber) screen = <GameScreen />;
  return (
    <LinearGradient colors={["#4e0329", "#927d38"]} style={styles.rootScreen}>
      <ImageBackground
        resizeMode="cover"
        source={require("./assets/images/background.png")}
        style={{ flex: 1 }}
        imageStyle={{ opacity: 0.15 }}
      >
        {screen}
      </ImageBackground>
    </LinearGradient>
  );
}

const styles = StyleSheet.create({
  rootScreen: {
    flex: 1,
  },
});

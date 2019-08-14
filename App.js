import React from "react";
import { Text, View, Platform, Image, ImageBackground } from "react-native";
import { Button } from "native-base";

let myBackground = require("./assets/icons/landing.jpg");

export default function App() {
  return (
    <View style={styles.container}>
      <View>
        <ImageBackground source={myBackground} style={styles.imageBackground}>
          <View style={styles.viewStyle}>
            <Text style={styles.titleStyle}>Welcome to PokeSearch</Text>
            <Button block={true} style={styles.buttonStyle} onPress={() => {}}>
              <Text style={styles.buttonText}>Start Searching</Text>
            </Button>
          </View>
        </ImageBackground>
      </View>
    </View>
  );
}

const styles = {
  container: {
    flex: 1,
    marginTop: Platform.OS === "android" ? 24 : 0
  },
  viewStyle: {
    flex: 1,
    flexDirection: "column",
    justifyContent: "center",
    alignItems: "center"
  },
  imageBackground: {
    width: "100%",
    height: "100%"
  },
  titleStyle: {
    fontSize: 30,
    color: "blue",
    alignItems: "center"
  },
  buttonStyle: {
    margin: 10
  },
  buttonText: {
    color: "white"
  }
};

import React from "react";
import { View, Image } from "react-native";

let loadingImage = require('../assets/icons/tenor.gif')

class PokeLoader extends React.Component {
  render() {
    return (
      <View style={{ flex: 1 }}>
        <Image
          source={loadingImage}
          style={styles.img}
        />
      </View>
    );
  }
}

const styles = {
  img: {
    height: 400,
    width: 400,
    justifyContent: "center",
    alignItems: "center"
  }
};

export default PokeLoader;

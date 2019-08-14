import React from "react";
import {
  ScrollView,
  Text,
  Image,
  View,
  ImageBackground,
  Dimensions
} from "react-native";
import { ListItem, List } from "native-base";

let height = Dimensions.get("window").height;
let width = Dimensions.get("window").width;

class SearchBody extends React.Component {
  render() {
    let pokemon = this.props.data;
    if (!pokemon) {
      return <View />;
    }
    return (
      <ImageBackground
        style={styles.backgroundImage}
        source={{ uri: "http://pokemongolive.com/img/posts/raids_loading.png" }}
      >
        <ScrollView style={{ flex: 1 }}>
          <Text style={styles.header}>
            #{pokemon.id} - {pokemon.name.toUpperCase()}
          </Text>
          <View style={styles.viewStyle}>
            <Image
              source={{ uri: pokemon.sprites.front_default }}
              style={styles.img}
            />
          </View>
          <View style={styles.info}>
            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Size</Text>
            </ListItem>

            <ListItem>
              <Text>Weight - {pokemon.weight}kg</Text>
            </ListItem>

            <ListItem>
              <Text>Height - {pokemon.height / 10}m</Text>
            </ListItem>

            <ListItem itemDivider>
              <Text style={{ fontWeight: "bold" }}>Abilities</Text>
            </ListItem>

            <List
              dataArray={pokemon.abilities}
              renderRow={item => (
                <ListItem key={item.ability.name}>
                  <Text>{item.ability.name}</Text>
                </ListItem>
              )}
              keyExtractor={(item, index) => index.toString()}
            />
          </View>
        </ScrollView>
      </ImageBackground>
    );
  }
}

const styles = {
  img: {
    height: 200,
    width: 200,
    justifyContent: "center",
    alignItems: "center"
  },
  viewStyle: {
    justifyContent: "center",
    alignItems: "center",
    flex: 1
  },
  header: {
    fontSize: 30,
    color: "red",
    textAlign: "center"
  },
  info: {
    flex: 1,
    backgroundColor: "white",
    opacity: 0.8
  },
  backgroundImage: {
    flex: 1,
    resizeMode: "cover",
    height: height,
    width: width
  }
};

export default SearchBody;

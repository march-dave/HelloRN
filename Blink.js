import React, { Component } from "react";
import { View, Text, StyleSheet } from "react-native";

class Blink extends Component {
  //let
  render() {
    return (
      <View>
        <View style={styles.container}>
          <Text>{this.props.text}</Text>
        </View>
        <View style={styles.one} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#999"
  },
  one: {
    flex: 1,
    width: 50,
    height: 50,
    backgroundColor: "#999"
  },
});

export default Blink;

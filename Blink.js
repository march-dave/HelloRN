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
        <View style={styles.two} />
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
  two: {
    // flex: 1,
    width: 50,
    height: 50,
    // backgroundColor: "#999"
  },
  three: {
    // flex: 1,
    width: 50,
    height: 50,
    // backgroundColor: "#999"
  },
  four: {
    // flex: 1,
    width: 50,
    height: 50,
    // backgroundColor: "#999"
  },
  five: {
    // flex: 1,
    width: 50,
    height: 50,
    // backgroundColor: "#999"
  },
  six: {
    // flex: 1,
    width: 50,
    height: 50,
    // backgroundColor: "#999"
  },
  seven: {
    // flex: 1,
    width: 50,
    height: 50,
    // backgroundColor: "#999"
  },
});

export default Blink;

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
        <View style={{ width: 50, height: 50, backgroundColor: "green" }} />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: "#999"
  }
});

export default Blink;

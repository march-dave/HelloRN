import React, { Component } from "react";
import { View, Text } from "react-native";

class Blink extends Component {
  //let
  render() {
    return (
      <View>
        <Text>{this.props.text}</Text>
      </View>
    );
  }
}

export default Blink;

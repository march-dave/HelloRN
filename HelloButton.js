import React, { Component } from "react";
import { View, Text } from "react-native";

export default class HelloButton extends Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <View>
        Hello Button
        {this.props.name}
      </View>
    );
  }
}
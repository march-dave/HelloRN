/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from "react";
import {
  Platform,
  StyleSheet,
  Text,
  View,
  TextInput,
  Button,
  TouchableHighlight,
  Alert,
} from "react-native";
import Blink from "./Blink.js";
import HelloButton from "./HelloButton";

// const instructions = Platform.select({
//   ios: 'Press Cmd+R to reload,\n' +
//     'Cmd+D or shake for dev menu',
//   android: 'Double tap R on your keyboard to reload,\n' +
//     'Shake or press menu button for dev menu',
// });

type Props = {};
export default class App extends Component<Props> {
  state = {
    name: ""
  };

  render() {
    return (
      <View style={styles.container}>
        {/* <HelloButton name="Hello"/>
        <HelloButton name="World" />
        <HelloButton name="Button" />
        <Blink text="I love to my Blink" /> */}

        <TextInput
          style={{ height: 40 }}
          placeholder="Please input"
          onChangeText={text => this.setState({ name: text })}
        />

        <Button
          onPress={() => {
            Alert.alert("You tapped the button");
          }}
          title="press"
        />

        <TouchableHighlight onPress={() => {}}>
          <View>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center",
    // backgroundColor: "#989"
  },
  welcome: {
    fontSize: 20,
    textAlign: "center",
    margin: 10
  },
  instructions: {
    textAlign: "center",
    color: "#333333",
    marginBottom: 5
  }
});

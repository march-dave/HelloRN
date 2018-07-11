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
  TouchableOpacity,
  ScrollView,
  FlatList
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

  componentDidMount() {
    const getMoviesFromApiAsync = () => {
      return fetch("https://facebook.github.io/react-native/movies.json")
        .then(response => response.json())
        .then(responseJson => {
          return responseJson.movies;
        })
        .catch(error => {
          console.error(error);
        });
    };
  }

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
          title="press 2"
        />

        <TouchableHighlight
          onPress={() => {
            Alert.alert("TouchableHighlight");
          }}
        >
          <View>
            <Text>TouchableHighlight</Text>
          </View>
        </TouchableHighlight>

        <TouchableOpacity
          onPress={() => {
            Alert.alert("Touchable Opacity");
          }}
        >
          <View>
            <Text>Touchable Opacity</Text>
          </View>
        </TouchableOpacity>

        {/* <TouchableNativeFeedback
            onPress={this._onPressButton}
            background={Platform.OS === 'android' ? TouchableNativeFeedback.SelectableBackground() : ''}>
          <View style={styles.button}>
            <Text style={styles.buttonText}>TouchableNativeFeedback</Text>
          </View>
        </TouchableNativeFeedback> */}

        <ScrollView>
          <Text style={{ height: 100 }}>I am Scroll View</Text>
        </ScrollView>

        <FlatList
          data={[
            { key: "Devin" },
            { key: "Jackson" },
            { key: "James" },
            { key: "Joel" },
            { key: "John" },
            { key: "Jillian" },
            { key: "Jimmy" },
            { key: "Julie" }
          ]}
          renderItem={({ item }) => <Text style={styles.item}>{item.key}</Text>}
        />
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    flexDirection: "column",
    // justifyContent: "space-between",
    alignItems: "center"
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

import React, { Component } from 'react';

import { StyleSheet, View, Button, Text } from 'react-native';

const colors = [
  'White', 'Black', 'Blue', 'Red', 'jksdsd', 'dbsjbj', 'ssdsad'
]


export default class MyProject extends Component {

  constructor() {

    super();

    this.state = {

      // This is our Default number value
      NumberHolder: 'red'

    }
  }


  GenerateRandomColor = () => {

    var RandomNumber = colors[Math.floor(Math.random() * colors.length)];

    this.setState({

      NumberHolder: RandomNumber

    })
  }

  render() {
    return (

      <View style={styles.MainContainer} >

        <Text style={{ marginBottom: 10, fontSize: 20 }}>{this.state.NumberHolder}</Text>

        {/* <Button title="Generate Random Number" onPress={this.GenerateRandomNumber} /> */}
        <View>

          <Button title="Generate Random Color" onPress={this.GenerateRandomColor} />
        </View>
      </View>

    );
  }
}

const styles = StyleSheet.create(
  {
    MainContainer: {
      flex: 1,
      justifyContent: 'center',
      alignItems: 'center',
    }

  });

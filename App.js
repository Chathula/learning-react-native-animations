import React from 'react';
import { StyleSheet, Text, View, Animated, Easing, TouchableWithoutFeedback } from 'react-native';

export default class App extends React.Component {

  constructor(props) {
    super(props);

    this.handlePressIn = this.handlePressIn.bind(this);
    this.handlePressOut = this.handlePressOut.bind(this);
  }

  componentWillMount() {
    this.animatedValue = new Animated.Value(1);
  }

  handlePressIn() {
    Animated.spring(this.animatedValue, {
      toValue: 0.5,
    }).start();
  }

  handlePressOut() {
    Animated.spring(this.animatedValue, {
      toValue: 1,
      friction: 3,
      tension: 40 
    }).start();
  }

  render() {
    const animatedStyle = { 
      transform: [{ scale: this.animatedValue }]
    };

    return (
      <View style={styles.container}>
        <TouchableWithoutFeedback
          onPressIn={this.handlePressIn}
          onPressOut={this.handlePressOut}
        >
          <Animated.View style={[styles.box, animatedStyle]}>
              <Text style={styles.text}>Press me</Text>
          </Animated.View>
        </TouchableWithoutFeedback>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'center',
  },
  box: {
    width: 100,
    height: 50,
    backgroundColor: '#333',
    alignItems: 'center',
    justifyContent: 'center',
  },
  text: {
    color: '#FFF',
  }
});

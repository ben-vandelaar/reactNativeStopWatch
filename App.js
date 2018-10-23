import React from 'react';
import { StyleSheet, Text, View } from 'react-native';

const DATA = {
  timer: 1234567,
  laps: [2134, 12345, 664527, 344667],
}

function Timer({ interval }){
  return <Text style={styles.timer}>{ interval }</Text>
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Timer interval={DATA.timer}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
  },
  timer:{
    color: '#FFFFFF',
  }
});

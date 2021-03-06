import React from 'react';
import { StyleSheet, Text, View, ScrollView } from 'react-native';
import moment from 'moment'



const DATA = {
  timer: 1234567,
  laps: [2134, 12345, 664527, 344667],
}

function Timer({ interval }){
  const duration = moment.duration(interval)
  const centiseconds = Math.floor(duration.milliseconds() / 10);
  return( 
    <Text style={styles.timer}>
      {duration.minutes()}:{duration.seconds()},{ centiseconds }
    </Text>
  )
}

function RoundButton({ title, color, background }){
  return(
    <View style={[ styles.button, { backgroundColor: background }]}>
      <View style={ styles.buttonBorder }>
        <Text style={[ styles.buttonTitle, { color } ]}>
          {title} 
        </Text>
      </View>
    </View>
  )
}

function Lap({ number, interval }){
  return(
    <View>
      <Text>Lap {number}</Text>
      <Text>{interval}</Text>
    </View>
  )
}

function LapsTable({ laps }){
  return (
    <ScrollView>
      {laps.map((lap, i) => (
        <Lap number={i} interval={lap} />
      ))}
    </ScrollView>
  )
}

function ButtonsRow({ children }) {
  return (
    <View style={styles.buttonsRow}>{children}</View>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
          <Timer interval={DATA.timer}/>
        <ButtonsRow>
          <RoundButton title='Reset' color='#FFFFFF' background='#3D3D3D'/>
          <RoundButton title='Start' color='#50D167' background='#1B361F'/>
        </ButtonsRow>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#0D0D0D',
    alignItems: 'center',
    paddingTop: 130,
    paddingHorizontal: 20,
  },
  timer:{
    color: '#FFFFFF',
    fontSize: 76,
    fontWeight: '200',
  },
  button:{
    width: 80,
    height: 80,
    borderRadius: 40,
    justifyContent: 'center',
    alignItems: 'center',
  },
  buttonTitle:{
    fontSize: 18,
  },
  buttonBorder:{
    width: 76,
    height: 76,
    borderRadius: 38,
    borderWidth: 2,
    justifyContent: "center",
    alignItems: "center",
  },
  buttonsRow:{
    flexDirection: "row",
    alignSelf: "stretch",
    justifyContent: "space-between",
    marginTop: 80,
  }
});

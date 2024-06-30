import {ScrollView, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ElivatedCard() {
  return (
    <View>
      <Text style={styles.headingText}>ElivatedCard</Text>
      <ScrollView horizontal={true} style={styles.flatContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.CardText}>Grey</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.CardText}>Orange</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.CardText}>Pink</Text>
        </View>
        <View style={[styles.card, styles.cardFour]}>
          <Text style={styles.CardText}>Yellow</Text>
        </View>
        <View style={[styles.card, styles.cardFive]}>
          <Text style={styles.CardText}>Lightblue</Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  flatContainer: {
    flex: 1,
    flexDirection: 'row',
  },
  card: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    width: 100,
    height: 100,
    borderRadius: 6,
    margin: 5,
    elevation:4,
    shadowOffset:{
        height:1,
        width:1
    },
    shadowColor:'black',
    shadowRadius:10
  },
  cardOne: {
    backgroundColor: 'grey',

  },
  cardTwo: {
    backgroundColor: 'orange',
  },
  cardThree: {
    backgroundColor: 'pink',
  },
  cardFour: {
    backgroundColor: 'yellow',
  },
  cardFive: {
    backgroundColor: 'lightblue',
  },
  CardText: {
    color: '#FFFFFF',
  },
});

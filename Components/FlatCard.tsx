import {StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FlatCard() {
  return (
    <View>
      <Text style={styles.headingText}>FlatCard</Text>
      <View style={styles.flatContainer}>
        <View style={[styles.card, styles.cardOne]}>
          <Text style={styles.CardText}> Red</Text>
        </View>
        <View style={[styles.card, styles.cardTwo]}>
          <Text style={styles.CardText}>Blue</Text>
        </View>
        <View style={[styles.card, styles.cardThree]}>
          <Text style={styles.CardText}>Green</Text>
        </View>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  headingText: {
     color:'#000000',
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
  },
  cardOne: {
    backgroundColor: 'red',
  },
  cardTwo: {
    backgroundColor: 'blue',
  },
  cardThree: {
    backgroundColor: 'green',
  },
  CardText: {
    color: '#FFFFFF',
  },
});

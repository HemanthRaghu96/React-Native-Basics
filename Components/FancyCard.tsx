import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function FancyCard() {
  return (
    <View>
      <Text style={styles.headingText}>FancyCard</Text>
      <View style={styles.cardContainer}>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?b=1&s=612x612&w=0&k=20&c=kpQCCaxIActGQP9ToVrFN3qP55MMXA4Sdnomymdr_64=',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.titleText}>JavaScript</Text>
        <Text style={styles.descText}>
          JavaScript, often abbreviated as JS, is a programming language and
          core technology of the Web, alongside HTML and CSS.Web browsers
          have a dedicated JavaScript engine that executes the client code.
        </Text>
        <Text style={styles.footerText}>Posted 12 min ago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  footerText: {fontSize: 12, color: '#FFFFFF', margin: 4},
  descText: {fontSize: 15, color: '#FFFFFF', marginHorizontal: 4},
  cardContainer: {
    padding: 4,
    margin: 4,
    backgroundColor: 'gray',
    borderRadius: 6,
  },
  titleText: {fontSize: 20, fontWeight: 'bold', color: '#FFFFFF', margin: 4},
  headingText: {
    color: '#000000',
    fontSize: 30,
    fontWeight: 'bold',
    paddingHorizontal: 10,
    marginTop: 10,
  },
  cardImage: {
    borderRadius: 6,
    height: 200,
    margin: 4,
  },
});

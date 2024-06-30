import {
  StyleSheet,
  Text,
  View,
  TouchableOpacity,
  Linking,
  Image,
} from 'react-native';
import React from 'react';

export default function ActionCard() {
  const openUrl = (url: string) => {
    Linking.openURL(url);
  };
  return (
    <View>
      <Text style={styles.headingText}>ActionCard</Text>
      <View style={styles.cardContainer}>
        <Text style={styles.titleText}>Whats new in ECMAScript 2023?</Text>
        <Image
          source={{
            uri: 'https://media.istockphoto.com/id/1284271878/photo/javascript-inscription-against-laptop-and-code-background-learn-javascript-programming.jpg?b=1&s=612x612&w=0&k=20&c=kpQCCaxIActGQP9ToVrFN3qP55MMXA4Sdnomymdr_64=',
          }}
          style={styles.cardImage}
        />
        <Text style={styles.descText}>
          The newest version of JavaScript is called ECMAScript 2023 or ES2023
          for short. It came out in June 2023. This update adds some cool things
          like new ways to work with lists, a feature for running scripts in
          different environments, and better organization for certain types of
          data.
        </Text>
        <View>
          <TouchableOpacity
            onPress={() =>
              openUrl(
                'https://daily.dev/blog/javascript-latest-version-an-overview#:~:text=The%20newest%20version%20of%20JavaScript,for%20certain%20types%20of%20data.',
              )
            }
            style={styles.buttonStyle}>
            <Text style={styles.descText}>Read More</Text>
          </TouchableOpacity>
        </View>
        <Text style={styles.footerText}>Posted 6 min ago</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  buttonStyle: {
    padding: 2,
    margin: 6,
    backgroundColor: '#FFFFFF',
    width: 100,
    borderRadius: 3,
  },
  footerText: {fontSize: 12, color: '#000000', margin: 4},
  descText: {
    fontSize: 15,
    color: '#000000',
    marginHorizontal: 4,
    alignContent: 'center',
  },
  cardContainer: {
    padding: 4,
    margin: 4,
    backgroundColor: 'orange',
    borderRadius: 6,
  },
  titleText: {fontSize: 20, fontWeight: 'bold', color: '#000000', margin: 4},
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

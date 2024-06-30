import {Image, StyleSheet, Text, View} from 'react-native';
import React from 'react';

export default function ContactCard() {
  const contactList = [
    {
      id: 1,
      name: 'Hemanth',
      phone: 9629006243,
      poster:
        'https://images.pexels.com/photos/91227/pexels-photo-91227.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 2,
      name: 'Kiran',
      phone: 9876543210,
      poster:
        'https://images.pexels.com/photos/614810/pexels-photo-614810.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
    {
      id: 3,
      name: 'Tharun',
      phone: 9898767654,
      poster:
        'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=600',
    },
  ];
  return (
    <View>
      <Text style={styles.headingText}>ContactCard</Text>
      <View style={styles.cardContainer}>
        {contactList.map(item => (
          <View key={item.id} style={styles.contactItem}>
            <View>
            <Image
          source={{
            uri: item.poster
          }}
          style={styles.cardImage}
        />
              </View>
              <View>
              <Text style={styles.titleText}>{item.name}</Text>
              <Text style={styles.descText}>{item.phone}</Text>
              </View>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  contactItem:{backgroundColor:'lightblue',margin:4,padding:4,flex:1,flexDirection:'row',alignItems:'center',borderRadius:5},
  footerText: {fontSize: 12, color: '#FFFFFF', margin: 4},
  descText: {fontSize: 15, color: '#000000', marginHorizontal: 4},
  cardContainer: {
    padding: 4,
    margin: 4,

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
    borderRadius: 50,
    height: 80,
    width: 80,
    margin: 2,
  },
});

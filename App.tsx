import React from 'react';
import {
  ScrollView,
  View,
} from 'react-native';
import FlatCard from './Components/FlatCard';
const App = (): JSX.Element => {
  return (
   
    <View >
      <ScrollView>
     <FlatCard />
     </ScrollView>
    </View>
   
  );
};


export default App;

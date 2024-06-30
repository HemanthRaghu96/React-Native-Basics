import React from 'react';
import {ScrollView, View} from 'react-native';
import FlatCard from './Components/FlatCard';
import ElivatedCard from './Components/ElivatedCard';
const App = (): JSX.Element => {
  return (
    <View>
      <ScrollView>
        <FlatCard />
        <ElivatedCard />
      </ScrollView>
    </View>
  );
};

export default App;

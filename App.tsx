import React from 'react';
import {ScrollView, View} from 'react-native';
import FlatCard from './Components/FlatCard';
import ElivatedCard from './Components/ElivatedCard';
import FancyCard from './Components/FancyCard';
import ActionCard from './Components/ActionCard';
import ContactCard from './Components/ContactCard';

const App = (): JSX.Element => {
  return (
    <View>
      <ScrollView>
        <FlatCard />
        <ElivatedCard />
        <FancyCard />
        <ActionCard />
        <ContactCard />
      </ScrollView>
    </View>
  );
};

export default App;

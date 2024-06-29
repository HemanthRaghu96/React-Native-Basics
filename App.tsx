import React from 'react';
import {
  View,
  Text,
  StyleSheet,
  useColorScheme,
} from 'react-native';
const App = (): JSX.Element => {
  const isDark = useColorScheme() === 'dark';
  return (
    <View style={styles.container}>
      <Text style={isDark ? styles.whiteText : styles.darkText}>
        Hello World!
      </Text>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'center',
  },
  darkText: {
    color: '#000000',
  },
  whiteText: {
    color: '#FFFFFF',
  },
});
export default App;

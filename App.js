import { View, Text, SafeAreaView, Platform } from 'react-native';
import Home from './src/screens/home/Home';
import { LogBox } from 'react-native';
LogBox.ignoreLogs(['Setting a timer for a long period of time']);
export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 20 : 0,
        backgroundColor: '#eee',
      }}
    >
      <Home />
    </SafeAreaView>
  );
}

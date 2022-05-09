import { View, Text, SafeAreaView, Platform } from 'react-native';
import Home from './src/screens/home/Home';

export default function App() {
  return (
    <SafeAreaView
      style={{
        flex: 1,
        paddingTop: Platform.OS === 'android' ? 25 : 0,
        backgroundColor:'#eee'
      }}
    >
      <Home />
    </SafeAreaView>
  );
}

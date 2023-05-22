import 'react-native-gesture-handler';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Pressable, StyleSheet } from 'react-native';
import colors from './src/constants/colors';

const Stack = createStackNavigator();

const BackButton = (props) => {
  return (
    <Pressable onPress={props.onPress}>
      <Image style={styles.back} source={require('./assets/back.png')} />
    </Pressable>
  );
};

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    background: colors.white,
  },
};

export default function App() {
  return (
    <NavigationContainer theme={theme}>
      <Stack.Navigator
        screenOptions={{
          headerTitleAlign: 'center',
          headerShadowVisible: false,
        }}
      >
        <Stack.Screen
          name="Splash"
          component={Splash}
          options={{ headerShown: false }}
        />
        <Stack.Screen
          name="Home"
          component={Home}
          options={{ headerLeft: null, gestureEnabled: false }}
        />
        <Stack.Screen
          name="Search"
          component={Search}
          options={{ headerLeft: (props) => <BackButton {...props} /> }}
        />
      </Stack.Navigator>
    </NavigationContainer>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});

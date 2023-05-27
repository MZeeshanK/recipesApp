import React, { createContext, useEffect, useState } from 'react';
import 'react-native-gesture-handler';
import Splash from './src/screens/Splash';
import Home from './src/screens/Home';
import Search from './src/screens/Search';
import RecipeDetails from './src/screens/RecipeDetails';
import { NavigationContainer, DefaultTheme } from '@react-navigation/native';
import { createStackNavigator } from '@react-navigation/stack';
import { Image, Pressable, StyleSheet } from 'react-native';
import colors from './src/constants/colors';
import { getRecipesList } from './src/api';

const Stack = createStackNavigator();

export const RecipeContext = createContext();
export const HealthyRecipeContext = createContext();

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
  const [recipes, setRecipes] = useState([]);
  const [healthyRecipes, setHealthyRecipes] = useState([]);

  useEffect(() => {
    (async () => {
      const res = await handleRecipesFetch(null, '15');
      setRecipes(res);

      const healtyRes = await handleRecipesFetch('healthy', 5);
      setHealthyRecipes(healtyRes);
    })();
  }, []);

  const handleRecipesFetch = async (tags, size) => {
    try {
      const recipes = await getRecipesList(tags, size);
      return recipes?.data?.results;
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <HealthyRecipeContext.Provider
      value={{ healthyRecipes, setHealthyRecipes }}
    >
      <RecipeContext.Provider value={{ recipes, setRecipes }}>
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
            <Stack.Screen
              name="RecipeDetails"
              component={RecipeDetails}
              options={{
                headerLeft: (props) => <BackButton {...props} />,
                headerTitle: '',
              }}
            />
          </Stack.Navigator>
        </NavigationContainer>
      </RecipeContext.Provider>
    </HealthyRecipeContext.Provider>
  );
}

const styles = StyleSheet.create({
  back: {
    width: 24,
    height: 24,
    margin: 16,
  },
});

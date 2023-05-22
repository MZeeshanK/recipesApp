import React from 'react';
import { View, Text, ImageBackground, Image } from 'react-native';
import styles from './styles';
import Button from '../../components/Button';
import { useNavigation } from '@react-navigation/native';

const Splash = () => {
  const navigation = useNavigation();

  return (
    <ImageBackground
      style={styles.background}
      source={require('../../../assets/splash.png')}
    >
      <View style={styles.container}>
        <Image
          style={styles.logo}
          source={require('../../../assets/logo.png')}
        />
        <Text style={styles.title}>100K+ Premium Recipe</Text>
      </View>
      <View style={styles.container}>
        <Text style={styles.bigTitle}>Start</Text>
        <Text style={styles.bigTitle}>Cooking</Text>

        <Text style={styles.subtitle}>Simple Way to find Tasty Recipes</Text>
        <Button onPress={() => navigation.navigate('Home')}>
          Start Cooking
        </Button>
      </View>
    </ImageBackground>
  );
};

export default React.memo(Splash);

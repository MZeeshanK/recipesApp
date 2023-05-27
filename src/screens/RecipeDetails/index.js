import React from 'react';
import { SafeAreaView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

const RecipeDetails = () => {
  return (
    <SafeAreaView style={styles.container}>
      <Title />
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);

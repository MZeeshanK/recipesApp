import React from 'react';
import { Image, SafeAreaView, View, Text, ScrollView } from 'react-native';
import styles from './styles';
import Title from '../../components/Title';

const RecipeDetails = ({ route }) => {
  const { item } = route.params || {};

  const nutrition = item?.nutrition;
  delete nutrition?.updated_at;
  const nutritionKeys = Object.keys(nutrition || {});
  const instructions = item?.instructions || [];

  return (
    <SafeAreaView style={styles.container}>
      <ScrollView showsVerticalScrollIndicator={false}>
        <Image source={{ uri: item?.thumbnail_url }} style={styles.image} />
        <Title text={item?.name} style={{ marginBottom: 32 }} />

        {nutritionKeys.map((key) => (
          <View key={key} style={styles.row}>
            <Text style={styles.key}>{key}</Text>
            <Text style={styles.value}>{nutrition[key]}</Text>
          </View>
        ))}

        <Title text="Instructions " style={{ marginTop: 32 }} />

        {instructions.map((instruction, index) => (
          <View key={instruction?.id} style={styles.instructionRow}>
            <Text style={styles.index}>{index + 1}</Text>
            <Text style={styles.instructionText}>
              {instruction?.display_text}
            </Text>
          </View>
        ))}
        {!instructions.length ? (
          <Text style={{ marginVertical: 16 }}> No instructions found</Text>
        ) : (
          <></>
        )}
      </ScrollView>
    </SafeAreaView>
  );
};

export default React.memo(RecipeDetails);

import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Card = ({ title, image, servings, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      {servings ? (
        <View>
          <Text style={styles.label}>Servings</Text>
          <Text style={styles.value}>{servings}</Text>
        </View>
      ) : null}
    </View>
  );
};

export default React.memo(Card);

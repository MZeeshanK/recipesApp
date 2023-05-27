import React from 'react';
import { Image, Text, TouchableOpacity, View } from 'react-native';
import styles from './styles';

const Card = ({ title, image, servings, style, onPress }) => {
  return (
    <TouchableOpacity style={[styles.container, style]} onPress={onPress}>
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
    </TouchableOpacity>
  );
};

export default React.memo(Card);

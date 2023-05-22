import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Card = ({ title, image, time, style }) => {
  return (
    <View style={[styles.container, style]}>
      <Image style={styles.image} source={{ uri: image }} />
      <Text style={styles.title} numberOfLines={3}>
        {title}
      </Text>
      <Text style={styles.label}>Time</Text>
      <Text style={styles.value}>{time}</Text>
    </View>
  );
};

export default React.memo(Card);

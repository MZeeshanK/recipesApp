import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';
import Rating from '../Rating';

const RecipeCard = ({ title, image, author, rating, time, style }) => {
  return (
    <View style={[styles.container, style]}>
      <View style={styles.row}>
        <View style={{ flex: 1 }}>
          <Text style={styles.title} numberOfLines={1}>
            {title}
          </Text>
          <Rating rating={rating} />
        </View>
        <Image style={styles.image} source={{ uri: image }} />
      </View>

      <View style={styles.footer}>
        {author ? (
          <View style={styles.row}>
            <Image style={styles.authorImage} source={{ uri: author?.image }} />
            <Text style={styles.footerText}>By {author?.name}</Text>
          </View>
        ) : (
          <View />
        )}

        {time ? (
          <View style={styles.row}>
            <Image
              style={styles.timerIcon}
              source={require('../../../assets/timer.png')}
            />
            <Text style={styles.footerText}>{time} mins</Text>
          </View>
        ) : (
          <View />
        )}
      </View>
    </View>
  );
};

export default React.memo(RecipeCard);

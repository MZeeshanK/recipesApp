import React from 'react';
import { Image, Text, View } from 'react-native';
import styles from './styles';

const Rating = ({ rating }) => {
  const arr = [1, 2, 3, 4, 5];

  const renderStars = () => {
    return arr?.map((star, index) => {
      if (Math.round(rating) >= star) {
        return (
          <Image
            key={index}
            style={styles.star}
            source={require('../../../assets/star.png')}
          />
        );
      }
      return (
        <Image
          key={index}
          style={styles.star}
          source={require('../../../assets/starEmpty.png')}
        />
      );
    });
  };

  return <View style={styles.row}>{renderStars()}</View>;
};

export default React.memo(Rating);

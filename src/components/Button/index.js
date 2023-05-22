import React from 'react';
import { TouchableOpacity, Text, Image } from 'react-native';
import styles from './styles';

const Button = ({ onPress, children }) => {
  return (
    <TouchableOpacity onPress={onPress} style={styles.container}>
      <Text style={styles.text}>{children}</Text>
      <Image
        style={{ width: 24, height: 24 }}
        source={require('../../../assets/arrowRight.png')}
      />
    </TouchableOpacity>
  );
};

export default React.memo(Button);

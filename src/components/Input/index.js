import React from 'react';
import { Image, Pressable, TextInput, View } from 'react-native';
import styles from './styles';
import colors from '../../constants/colors';

const Input = ({ onPress, placeholder, showSearchIcon, pressable, style }) => {
  const renderInput = () => {
    return (
      <View style={[styles.container, style]}>
        {showSearchIcon && (
          <Image
            style={styles.icon}
            source={require('../../../assets/search.png')}
          />
        )}
        <TextInput
          editable={!pressable}
          style={styles.input}
          placeholderTextColor={colors.lightGrey}
          placeholder={placeholder}
        />
      </View>
    );
  };

  if (pressable) {
    return <Pressable onPress={onPress}>{renderInput()}</Pressable>;
  }
  return renderInput();
};

Input.defaultProps = {
  placeholder: 'Search',
  showSearchIcon: true,
};

export default React.memo(Input);

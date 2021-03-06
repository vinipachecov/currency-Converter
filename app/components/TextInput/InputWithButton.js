import React from 'react';
import PropTypes from 'prop-types';
import { View, Text, TextInput, TouchableHighlight } from 'react-native';
import color from 'color';
import styles from './styles';

const InputWithButton = (props) => {
  const { onPress, buttonText, editable = true } = props;

  const containerStyles = [styles.container];

  const underlayColor = color(styles.$ButtonBackGroundColorBase).darken(
    styles.$ButtonBackGroundColorModifier);

  if (editable === false) {
    containerStyles.push(styles.containerDisabled);
  }


  return (
    <View style={containerStyles} >
      <TouchableHighlight 
        underlayColor={underlayColor} 
        style={styles.buttonContainer} 
        onPress={onPress}
      >
        <Text style={styles.buttonText}>{buttonText}</Text>
      </TouchableHighlight>
      <View style={styles.border} />
      <TextInput
        style={styles.input} 
        {...props} 
        underlineColorAndroid="transparent" 
      />   
    </View>
  );
};

InputWithButton.propTypes = {
  onPress: PropTypes.func,
  buttonText: PropTypes.string,
  editable: PropTypes.bool
};

export default InputWithButton;

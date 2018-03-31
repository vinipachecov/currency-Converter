import React, { Component } from 'react';
import { ScrollView, StatusBar } from 'react-native';
import EStyleSheet from 'react-native-extended-stylesheet';
import PropTypes from 'prop-types';

import { ListItem, Separator } from '../components/List';

const styles = EStyleSheet.create({
  $blue: '$primaryBlue',
  $green: '$primaryGreen',
  $orange: '$primaryOrange',
  $purple: '$primaryPurple',
});

class Themes extends Component {
  static propTypes = {
    navigation: PropTypes.object
  };

  handleThemePress = (color) => {
    this.props.navigation.goBack();
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle="default" />
        <ListItem 
          text="Blue"  
          onPress={() => this.handleThemePress(styles.$blue) } 
          checkmark={false}
          iconBackground={styles.$blue}
        />
        <Separator />

          <ListItem 
          text="Orange"  
          onPress={() => this.handleThemePress(styles.$orange)} 
          checkmark={false}
          iconBackground={styles.$orange}
        />
        <Separator />

          <ListItem 
          text="Green"  
          onPress={() => this.handleThemePress(styles.$green)} 
          checkmark={false}
          iconBackground={styles.$green}
        />
        <Separator />   

          <ListItem 
          text="Purple"  
          onPress={() => this.handleThemePress(styles.$purple)} 
          checkmark={false}
          iconBackground={styles.$purple}
        />
        <Separator />          

      </ScrollView>
    );
  }
}

export default Themes;

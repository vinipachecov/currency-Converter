import React from 'react';
import { ScrollView, StatusBar, Platform, Linking } from 'react-native';
import PropTypes from 'prop-types';
import { Ionicons } from '@expo/vector-icons';

import { connectAlert } from '../components/Alert';
import { ListItem, Separator } from '../components/List';

const ICON_PREFIX = Platform.OS === 'ios' ? 'ios': 'md';
const ICON_COLOR = '#868686';
const ICON_SIZE = 23;

class Options extends React.Component {
  static PropTypes = {
    navigation: PropTypes.object,
    alertWithType: PropTypes.func,
  };

  handleThemesPress = () => {
    this.props.navigation.navigate('Themes');    
  }

  handleSitePress = () => {
    Linking.openURL('https://fixer.io')
      .catch((error) => 
      this.props.alertWithType('error', 'Sorry', 'Fixer.io coudl not be opened..'));
  }

  render() {
    return (
      <ScrollView>
        <StatusBar translucent={false} barStyle='default' />
        <ListItem 
          text='Themes'
          onPress={this.handleThemesPress}       
          customIcon={
              <Ionicons name={`${ICON_PREFIX}-arrow-forward`} color={ICON_COLOR} size={ICON_SIZE}/>
          }   
        />
        <Separator />
        <ListItem 
          text='Fixer.io'
          onPress={this.handleSitePress}
          customIcon={
            <Ionicons name={`${ICON_PREFIX}-link`} color={ICON_COLOR} size={ICON_SIZE}/>
          }          
        />
        <Separator />
      </ScrollView>
    );

  }
}

export default connectAlert(Options);

import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';
import PropTypes from 'prop-types';

import { ListItem } from '../components/List'
import currencies from '../data/currencies';
import Separator from '../components/List/Separator';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CurrencyList extends React.Component { 
  static propTypes = {
    navigation: PropTypes.object
  };
  
  handlePress = () => {    
    this.props.navigation.goBack(null);
  }

  render() {  
    return (
      <View style={{ flex: 1 }}>
        <StatusBar translucent={false} barStyle="light-content" />
         <FlatList
           data={currencies}
           renderItem={({ item }) => (
             <ListItem
               text={item}
               selected={item === TEMP_CURRENT_CURRENCY}
               onPress={this.handlePress}
             />
           )}
           keyExtractor={item => item}
           ItemSeparatorComponent={Separator}
         />
       </View>
    );
  }
}


export default CurrencyList;
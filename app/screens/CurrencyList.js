import React from 'react';
import { Text, FlatList, View, StatusBar } from 'react-native';

import { ListItem } from '../components/List'
import currencies from '../data/currencies';
import Separator from '../components/List/Separator';

const TEMP_CURRENT_CURRENCY = 'CAD';

class CUrrencyList extends React.Component { 
  
  handlePress = () => {
    console.log('row press');
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


export default CUrrencyList;
import React from 'react';
import { Text,View, FlatList } from 'react-native';

export default  StatesApp = () => {

  return (

    <View style = {{flex: 1, paddingTop: 22}}>
      <FlatList 
      data = {[
        {key: 'Alabama'},
        {key: 'Alaska'},
        {key: 'Arizona'},
        {key: 'Arkansa'},
        {key: 'California'},
        {key: 'Colorado'},
        {key: 'Delaware'},
        {Key: 'Florida'},
        {key: 'Georgia'},
        {key: 'Hawii'},
        {Key: 'Idaho'},
        {key: 'Illionis'},
        {Key: 'Iowa'},
        {key: 'Kansas'},
        {key: 'Kentucky'},
        {key: 'Maine'},
        {key: 'Maryland'},
        {key: 'Massachusetts'},
        {key: 'Michigan'},
        {key: 'Minnesota'},
        {key: 'Missippissi'}

      ]}
      returnItem ={({item}) => <Text style = {{padding:10, fontSize: 20, height:44}}> {item.key}</Text>}
      
      />

    </View>
  
  );

}

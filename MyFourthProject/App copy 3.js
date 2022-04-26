import React from 'react';
import { Text,Image, ScrollView } from 'react-native';

export default  myScrolllViewApp = () => {


  const dog ={
    uri : 'https://freepngimg.com/thumb/dog/63-dog-png-image-picture-download-dogs.png',
    width: 80,
    height: 80
  }
  return (
    <ScrollView style = {{padding: 40}}>
<Text style={{fontSize: 80}}> Try to scroll down </Text>
<Image source={require('./assets/icon.png')}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style = {{fontSize: 80}}>Try to scroll down if you like </Text>
<Text style={{fontSize: 80}}> Try to scroll down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style = {{fontSize: 80}}>Try to scroll down if you like </Text>
<Text style={{fontSize: 80}}> Try to scroll down </Text>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Image source={dog}/>
<Text style = {{fontSize: 80}}>Try to scroll down if you like </Text>

    </ScrollView>
  );

}

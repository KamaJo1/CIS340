import { React } from 'react';
import { Text, View,Image } from 'react-native';
// how to get an image on the App
export default function MyDog() {
  let pic = {
    uri: 'https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/golden-retriever-royalty-free-image-506756303-1560962726.jpg?crop=1.00xw:0.756xh;0,0.0756xh&resize=768:*'
  }
  return (
    <View style= {{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }}
   >
     <Image source= {pic}
     style = {{width: 200, height:200}}
     />
    <Text>Hello, i am your dog</Text>
      
    </View>
  );
}


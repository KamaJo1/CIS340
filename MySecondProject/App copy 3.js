import React from 'expo-status-bar';
import { Text,TextInput,View } from 'react-native';

//
export default function MyApp() {
  //intializing variables 
  
  return (
<View>

    <Text>{"\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
     
    </Text>
    
    <TextInput 
    style={{
      height: 40,
      borderColor: 'gray',
      borderWidth: 1

    }}
    defaultValue= "Enter your Input!"/>

    </View>
  );

}



import React from 'expo-status-bar';
import { Text } from 'react-native';

//
export default function MyApp() {
  //intializing variables 
  function getFullName(fName,mName,lName){
    return fName + " "+ mName + lName;
  }
  const  pet = "Cat";

  return (

    <Text>{"\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
      My Full name is {getFullName("Joseph","","Kamara")} {"\n"}
      I have a {pet}!
    </Text>
    
  );

}



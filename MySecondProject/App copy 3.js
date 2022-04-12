import React from 'expo-status-bar';
import { Text,TextInput,View } from 'react-native';

//
 function MyApp() {
  //intializing variables 
  
  return (
<View>

    <Text>{"\n\n\n\n\n"}
      Hello, I am a student in CIS340! {"\n"}
     
    </Text>
    
    
    </View>
  );

}

export default function MultiComp(){
  return(
    <View style= {{
      flex: 1, 
      justifyContent: 'center',
      alignItems: 'center'
    }}>
      <Text>{"\n\n\n\n\n"} Welcome to CIS340</Text>
      <MyApp/>
      <MyApp/>
      <MyApp/>
      <MyApp/>
    </View>
  )
}



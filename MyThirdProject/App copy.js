import { React } from 'react';
import { Text,TextInput, View } from 'react-native';
import { clickProps } from 'react-native-web/dist/cjs/modules/forwardedProps';

 function Student() {
  return (
    <View >
      <Text>Hey, my name is {clickProps.name}, I am a student in CIS340!</Text>
      <StatusBar style="auto" />
    </View>
  );
}

export default function multiComp(){
return(
  <View style= {{
    flex: 1, 
    justifyContent: 'center',
    alignItems: 'center'
  }}>

<Text> Welcome to CIS340 </Text>
<Student name = "Joseph Kamara"/>
<Student name = "Jim Jones"/>
<Student name = "Jonny Boy"/>
<Student name = "Jeff Jeffersion"/>
</View>
  );
}
import  React, {useState} from 'react';
import { Text, View,Button } from 'react-native';
// how Change the state of a TV 
 function TV(props) {
  
const [isOff, setIsOff] = useState(true);

return(
<View>
  <Text>
  {'\n\n\n\n'}
    This is {props.name} TV, it is {isOff ? "Off": "Turned Me On"}!
  </Text>
  <Button
    onPress={ () =>{
      setIsOff(false);
    } }
    disabled = {!isOff}
    title = {isOff ? "Turn me on, please!" : "Thank you"}
  />
</View>
);

}

export default function multiTVs(){
  return(
    <View>
  <TV name = "LG"/>
  <TV name = "Sony"/>
  
  </View>
    );
  }

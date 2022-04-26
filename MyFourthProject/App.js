import React from 'react';
import {Text, View, SectionList} from 'react-native';

export default StatesApp = () => {

    return (
        <View style={
            {
                flex: 1,
                paddingTop: 22
            }
        }>
            <SectionList  sections={
                    [
                        {
                            title: 'A',
                            data: ['Alabama, Alaska', 'Arazona', 'Arkansas']
                        },
                        {
                            title: 'C',
                            data: ['Californa', 'Colorado', 'Connecticut']
                        },
                        {
                            title: 'D',
                            data: ['Delware']
                        },
                        {
                            title: 'F',
                            data: ['Florida']
                        }, {
                            title: 'G',
                            data: ['Georga']
                        }, {
                            title: 'H',
                            data: ['Hawaii']
                        },


                    ]
                }
                //i can continue with more sections
                renderItem={({item}) => <Text style = {{padding:10, fontSize: 20, height:44}}> {item}</Text>}
                renderSectionHeader=
                {({section}) => <Text style = {{paddingTop: 6, paddingLeft: 12, paddingRight: 12, paddingBottom: 6,
                 fontSize: 12, fontWeight: 'bold', backgroundColor:'#9FA8DA',}} >
        
         </Text>}
                keyExtractor=
                {(item,index) => index}
            />

        </View>

    );

}

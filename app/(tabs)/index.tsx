import { useState } from 'react';
import { View,Text,Button } from 'react-native';
// import HelloGisa from '@/components/HelloGisa';
// import Hello from '@/components/hello';


export default function app(){
    const [count, setCount]=useState(1);
    return(
        <>
        
        {/* <View>
            <Text>Hello Wold</Text>
        </View>
        <HelloGisa/>
        <Hello name="Liam"/> */}
        <View>
            <Text> You clicked {count} times</Text>
            <Button title='Press me' onPress={()=>setCount(count + 1)}/>
        </View>

        
    
        </>
    );
}
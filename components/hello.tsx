import React from "react";
import { Text } from 'react-native';

type HelloProps = {name : string};

export default function Hello(props:HelloProps){
    return(
        <Text> Hello {props.name}</Text>
    );
}
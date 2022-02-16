import React from "react";
import { Text } from "react-native";
import style from '../styles/style';


export default () => {
    return <Text style={style.tamText}> componente base</Text>
}

export function Comp02() {
    return <Text> componente test 01</Text>
}

export function Comp03() {
    return <Text> componente test 02</Text>
}
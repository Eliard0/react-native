import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View } from 'react-native';

import Component01 from './components/Component01';
import BaseComp, { Comp02, Comp03 } from './components/MultComp'
import Aleatorio from './components/Aleatorio';

export default () => {
    return (
        <View style={styles.container}>
            {/* <BaseComp></BaseComp>
            <Comp02></Comp02>
            <Comp03></Comp03> */}
            <Aleatorio min={20} max={90}></Aleatorio>

            {/* <Component01></Component01> */}
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#fff',
        justifyContent: 'center',
        alignItems: 'center',
    },
});

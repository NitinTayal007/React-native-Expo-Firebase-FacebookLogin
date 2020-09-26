import React from 'react'
import { StyleSheet, Text, View } from 'react-native'

const JobsScreen = () => {
    return (
        <View style={styles.container}>
            <Text>App JOBS SCREEN</Text>
        </View>
    );
};



const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        alignItems: 'center'
    },
});


JobsScreen.navigationOptions = (navData) =>{
    return {
        headerTitle:"Latest Available Services "
    }
}



export default JobsScreen
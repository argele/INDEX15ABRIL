import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ListHeader extends React.Component {


    componentDidMount(){


    }

    render() {
        return (
        <View style={styles.header}>
            <View style={styles.logo_container}>
                <Image 
                source={require('../images/logo.png')} 
                style={styles.logo}></Image>
            </View>
            <Text style={styles.header_text}>Expos</Text>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  header: {
    backgroundColor: 'white',
 
    flexDirection: 'row',
    justifyContent:'flex-start'
  },
  logo_container:{
    flex:1
  },
  logo:{
    resizeMode:'contain'
  },
  header_text:{
    flex:3
  }
});

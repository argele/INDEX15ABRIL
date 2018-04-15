import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';

export default class ListSeparator extends React.Component {


    componentDidMount(){


    }

    render() {
        return (
        <View style={styles.separator}>
        </View>
        );
    }
}

const styles = StyleSheet.create({
  separator: {
    backgroundColor: 'green',
    height:5
  }
});

import React from 'react';
import { StyleSheet, Text, View, Image } from 'react-native';
import { storage } from '../firebase.js';

export default class Evento extends React.Component {

    constructor(props){
        super(props);
        this.state = {
            imageUri:'./images/logo.png'
        };
        let imageRef = props.evento.Imagen;
        storage.ref('imageneseventos/'+imageRef).getDownloadURL().then(function(url) {
            console.log('Imagen URL',url);
            this.setState({
                imageUri:url
            });
        }.bind(this)).catch(function(error) {
            console.debug('Error',error);
        });
    }
    render() {
        
        if(!this.props.evento){
            return <View></View>;
        }else{
            let even = this.props.evento;
            return (
            <View style={styles.container}>
                <Image
                style={styles.image}
                source={{uri: this.state.imageUri}}
                />
                <Text style={styles.name_container}>{even.Nombre}</Text>
                <Text style={styles.name_container}>{even.Direccion}</Text>
                <Text style={styles.name_container}>{even.Apertura}</Text>
                <Text style={styles.name_container}>{even.Cierre}</Text>

                
            </View>
            );
        }
    }
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    paddingLeft:'5%',
    height:300
  },
  image:{
    width:500,
    height:200
  },
  name_container:{
    
  }
});

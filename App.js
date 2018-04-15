import React from 'react';
import Login from './components/Login';
import Expos from './components/Expos';
import Eventos from './components/Eventos';
import { YellowBox, Image } from 'react-native';
import _ from 'lodash';
import { TabNavigator } from 'react-navigation';

YellowBox.ignoreWarnings(['Setting a timer']);
const _console = _.clone(console);
console.warn = message => {
  if (message.indexOf('Setting a timer') <= -1) {
    _console.warn(message);
  }
};

const App = TabNavigator({
    Login: { screen: Login, 
      header: null
    },
    Expos: { 
      screen: Expos, 
      navigationOptions:({navigation}) =>({
        tabBarIcon: ({ tintColor }) => {
          return (
          <Image
      style={{ width: 40, height: 40 }}
      source={ require('./images/EXPOS.png')}/>);
}
})

      },

    Eventos:{ 
      screen: Eventos, 
      navigationOptions:({navigation}) => ({
        tabBarIcon:({ tintColor }) => {
          return (
            <Image
            style= {{ width: 40, height: 40 }}
            source={require('./images/EVENTOS.png')}/>);
          
        }
      })
    }
  },
  {
    initialRouteName: 'Login'
  });
/*
export default class App extends React.Component {
  render() {
    return (
      <Login></Login>
    );
  }
}*/
export default App;

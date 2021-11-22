import React, {Component} from 'react';
import { StyleSheet, View, Text } from 'react-native';
import {Actions} from 'react-native-router-flux'
import Btn from './components/atoms/button';
import TextField from './components/atoms/input';

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario :"",
      contrasena:"",
      emptyUsr: false,
      emptyContrasena: false,
    }
  }
  onChangeUser = (usuario) => this.setState({ usuario: usuario });
  
  onChangeContrasena = (contrasena) => this.setState({ contrasena: contrasena});
  
  isEmptyUsr = (bool) => this.setState({emptyUsr: bool});
  isEmptyContrasena = (bool) => this.setState({emptyContrasena: bool});
  getLogin = () => {
    (this.state.usuario.trim() == "") ? this.isEmptyUsr(true):this.isEmptyUsr(false);
    (this.state.contrasena.trim() == "") ? this.isEmptyContrasena(true):this.isEmptyContrasena(false);
    if(this.state.usuario != "" && this.state.contrasena != ""){
      Actions.home({user: this.state.usuario})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextField placeholder={'Usuario'} secureTextEntry={false} isvalid={this.state.emptyUsr} textOnChange={this.onChangeUser}/>
        <TextField placeholder={'Contraseña'} secureTextEntry={true} isvalid={this.state.emptyContrasena} textOnChange={this.onChangeContrasena}/>
        <Btn title={'Login'} color={'#841584'} accessibilityLabelBtn={'Login button'} exeFunction={this.getLogin}/>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
    alignItems: 'center',
    justifyContent: 'center',
  },
});

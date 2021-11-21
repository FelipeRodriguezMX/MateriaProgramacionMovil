import React, {Component} from 'react';
import { StyleSheet, Button, View, TextInput } from 'react-native';
import {Actions} from 'react-native-router-flux'

export default class LoginView extends Component {
  constructor(props) {
    super(props)
    this.state = {
      usuario :"",
      contrasena:""
    }
  }
  onChangeUser = usuario => this.setState({ usuario });

  onChangeContrasena = contrasena => this.setState({ contrasena });

  getLogin = () => {
    if (this.state.usuario == ""  && this.state.contrasena == ""){

    }
    else{
      Actions.home({user: this.state.user})
    }
  }

  render() {
    return (
      <View style={styles.container}>
        <TextInput 
        style={styles.input}
        placeholder= "usuario"
        onChangeText = {this.onChangeUser}
        />
        <TextInput
        style={styles.input}
        placeholder= "contraseña"
        onChangeText = {this.onChangeContrasena}
        secureTextEntry={true}
        />
        <Button
          onPress={this.getLogin}
          title="Login"
          color="#841584"
          accessibilityLabel="Login button"
        />
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
  input:{
    height: 40,
    width:260,
    margin: 12,
    borderWidth: 1,
    padding: 10,
  },
});

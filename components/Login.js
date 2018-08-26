import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, TextInput } from 'react-native';

export default class App extends React.Component {

  render() {

    const { navigate } = this.props.navigation;

    const login = () => {
      navigate('Portifolio');
    }

    return (
      <View style={styles.container}>
        <TextInput
          style={{height: 120}}
          placeholder='Login'
        />

        <TouchableOpacity style={styles.button} onPress={login}>
          <Text style={styles.textButton}>Login</Text>
        </TouchableOpacity>

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
  button: {
    backgroundColor: '#1da6cf',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#1da6cf',
    borderWidth: 1,
    borderRadius: 8,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});

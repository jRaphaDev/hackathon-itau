import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity } from 'react-native';
import { Container, Header, Content, Item, Input } from 'native-base';


export default class App extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const login = () => {
      navigate('Portifolio');
    }

    return (
        <Container style={styles.container}>
            <Header />
            <Content>
                <Item rounded>
                    <Input placeholder='Login'/>
                </Item>
                <TouchableOpacity style={styles.button} onPress={login}>
                    <Text style={styles.textButton}>Login</Text>
                </TouchableOpacity>
            </Content>
        </Container>
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

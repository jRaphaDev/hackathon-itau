import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label } from 'native-base';


export default class App extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const login = () => {
      navigate('Portifolio');
    }

    return (
        <Container style={styles.container}>
            <Content>

                

                <Form style={styles.form}>
                    <View>
                        <Image 
                            style={{width: 120, height: 120, alignContent: "center", alignSelf: "center"}}
                            source={require('../imgs/logo.png')} />
                    </View>

                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>logo-precorando
                    
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>
                    
                    <View style={styles.row}>

                        <TouchableOpacity style={styles.button} onPress={login}>
                            <Text style={styles.textButton}>Login</Text>
                        </TouchableOpacity>

                        <TouchableOpacity style={styles.button} onPress={login}>
                            <Text style={styles.textButton}>Cadastre-se</Text>
                        </TouchableOpacity>
                    </View>

                </Form>
                
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
  },
  form: {
      marginTop: 100,
      justifyContent: 'center',
  },
  row: {
    flexDirection: "row"
  },
  input: {
    flex: 1,
    width: 100
  },
  button: {
    backgroundColor: '#1da6cf',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#1da6cf',
    borderWidth: 1,
    borderRadius: 8,
    marginLeft: 10,
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

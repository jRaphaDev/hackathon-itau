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
        <Container>
            <Content>
                <Form style={styles.form}>
                    <View>
                        <Image 
                            style={{width: 180, height: 180, alignContent: "center", alignSelf: "center"}}
                            source={require('../imgs/logo.png')} />
                    </View>

                    <Item floatingLabel>
                        <Label>Username</Label>
                        <Input />
                    </Item>
                    
                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>

                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text style={styles.textButton}>FAZER LOGIN</Text>
                    </TouchableOpacity>

                    <Text style={styles.noLogin}>Não tenho conta.</Text>

                </Form>
                
            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  form: {
      marginTop: 50,
      justifyContent: 'center',
  },
  noLogin: {
    marginTop: 30,
    textAlign: 'center',
    color: '#9b9b9b'
  },
  input: {
    flex: 1,
    width: 100
  },
  button: {
    flex: 1,
    backgroundColor: '#FFB100',
    marginTop: 20,
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#FFB100',
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 22,
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

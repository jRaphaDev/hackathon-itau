import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Footer, Button, Icon, Title } from 'native-base';

const {width, height} = Dimensions.get('window');

export default class Produto extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const login = () => {
      navigate('Portifolio');
    }

    return (
        <Container>
            <Content>
                <Form style={styles.form}>

                    <Text style={styles.productText}>Não tenho conta.</Text>

                    <Item floatingLabel>
                        <Label>Xícaras(s) de Farinha de Trigo</Label>
                        <Input keyboardType="number-pad"/>  
                    </Item>

                    <Item floatingLabel>
                        <Label>Password</Label>
                        <Input secureTextEntry={true} />
                    </Item>

                    <TouchableOpacity style={styles.button} onPress={login}>
                        <Text style={styles.textButton}>FAZER LOGIN</Text>
                    </TouchableOpacity>

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
  productText: {
    marginTop: 50,
    textAlign: 'center',
    color: '#FFB100'
  },
  input: {
    flex: 1,
    width: 100
  },
  button: {
    flex: 1,
    bottom: 0,
    backgroundColor: '#FFB100',
    paddingVertical: 10,
    paddingHorizontal: 40,
    borderColor: '#FFB100',
    borderWidth: 1,
    borderRadius: 30,
    marginHorizontal: 22,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    marginBottom: height,
  },
  textButton: {
    color: '#fff',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});

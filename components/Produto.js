import React from 'react';
import { StyleSheet, Text, View, TouchableOpacity, Image, Dimensions } from 'react-native';
import { Container, Header, Content, Form, Item, Input, Label, Footer, Button, Icon, Title } from 'native-base';

const {width, height} = Dimensions.get('window');

export default class Produto extends React.Component {

  render() {
    const { navigate } = this.props.navigation;

    const nextPage = () => {
      navigate('Calculadora');
    }

    return (
        <Container style={styles.container}>
            <Content>
                <Form style={styles.form}>

                    <Text style={styles.productText}>Não tenho conta.</Text>

                    <Item floatingLabel>
                        <Label>Xícaras(s) de Farinha de Trigo</Label>
                        <Input keyboardType="number-pad"/>
                    </Item>

                    <Item floatingLabel>
                        <Label>Valor do Kg</Label>
                        <Input />
                    </Item>

                    <TouchableOpacity style={styles.button} onPress={nextPage}>
                        <Text style={styles.textButton} >Adicionar</Text>
                    </TouchableOpacity>
                </Form>

            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  form: {
      marginTop: 50,
      justifyContent: 'center',
  },
  productText: {
    fontWeight: 'bold',
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
    width: 180,
    bottom: 0,
    backgroundColor: '#FFF',
    paddingVertical: 10,
    marginRight: 18,
    borderColor: '#FFB100',
    borderWidth: 1,
    borderRadius: 30,
    marginTop: 360,
    shadowColor: '#000',
    shadowOffset: {width: 0, height: 2},
    shadowOpacity: 0.4,
    position: 'relative',
    bottom: 0,
    alignSelf: 'flex-end',
  },
  textButton: {
    color: '#FFB100',
    fontSize: 16,
    fontWeight: 'bold',
    alignSelf: 'center',
  }
});

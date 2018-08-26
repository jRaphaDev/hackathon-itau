import React from 'react';
import { StyleSheet, Text, Image, Dimensions, View  } from 'react-native';
import { Container, Content, Item, Input, Button, Left, Header, Body, Right, Icon, Title } from 'native-base';

const {width, height} = Dimensions.get('window');

export default class Produto extends React.Component {

  render() {
    const produto = 'Bolo';

    const {navigate} = this.props.navigation;

    const retorna = () => {
        console.log()
        navigate('Produto');
    }

    return (
        <Container >
            <Header>
                <Left>
                    <Button transparent onPress={() => retorna()}>
                        <Icon name='arrow-back' />
                    </Button>
                </Left>
                <Body>
                    <Title>Portifolio</Title>
                </Body>
                <Right />
            </Header>
            <Content style={styles.container}>
                <View style={styles.form}>
                    <Text style={styles.productText}>Sugerimos que o preço de venda do seu {produto} deve ser: </Text>
                </View>
                <View style={styles.row}>
                    <Text style={[styles.dollar, styles.bar]}>R$ </Text>
                    <Text style={[styles.valueProduct, styles.bar]}>18,50 </Text>
                    <Image 
                        style={{marginLeft: 8}}
                        source={require('../imgs/progress.jpg')}
                    />
                </View>

                <Text>Custos </Text>

                <View style={styles.costIngred}>
                    <Text> Ingredientes da receita </Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ 15% custo de produção</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ 10% custo de produção</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ 15% contas de água, gás e energia</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <View style={{flex: 1, flexDirection: 'row', marginVertical: 3}}>
                    <Text>+ R$0,40 para embalagem</Text>
                    <Text style={styles.costValue}>R$ 6,90 </Text>
                </View>

                <Item regular style={styles.costProd}>
                    <Input editable={false} placeholder='Custos' />
                </Item>

                <Item regular style={styles.costProd}>
                    <Input style={styles.colorPrice} editable={false} value='Preço sugerido para venda' />
                </Item>

                <View style={styles.viewFooter}>
                    <Image source={require('../imgs/check.png')} />
                    <Text style={styles.textFooter}>Comparado com a média de mercado, seu produto está com preço competitivo.</Text>
                </View>

                <Button style={styles.addResume}>
                    <Text style={styles.addResumeText}>+ Adicionar ao cardápio</Text>
                </Button>

            </Content>
        </Container>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 10
  },
  bar: {
    borderRightWidth: 1,
  },
  dollar: {
    color:'#666',
    fontSize: 40
  },
  addResumeText: {
    fontSize: 12,
    paddingLeft: 9,
    color: '#3AA5CF'
  },
  addResume: {
    width: 160,
    marginTop: 35,
    borderColor: '#3AA5CF',
    borderWidth: 2,
    borderRadius: 10,
    backgroundColor: '#E8F5F9',
    bottom: 0,
    borderRadius: 30,
  },
  colorPrice: {
    color:'#FFB100',
    borderColor: '#FFB100',
    // borderWidth: 2
  },
  textFooter: {
    paddingLeft: 10,
  },
  viewFooter: {
      flex: 1,
      flexDirection: 'row',
      paddingTop: 2,
  },
  costProd: {
    marginVertical: 5,
    borderWidth: 1,
    borderRadius: 10,
  },
  priceText: {
    backgroundColor: '#FFB100',
    borderColor: '#FFB100',
  },
  costIngred: {
    flexDirection: 'row',
    borderBottomWidth: 1,
    paddingBottom: 20,
    paddingTop: 10
  },
  costValue: {
    textAlign: 'right'
  },
  row: {
    flexDirection: 'row',
    paddingTop: 35,
  },
  form: {
      justifyContent: 'center',
  },
  productText: {
    fontWeight: 'bold',
    fontSize: 25,
    marginTop: 50,
    textAlign: 'left'
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
  },
  produto: {
    fontSize: 16,
    fontWeight: 'bold'
  },
  valueProduct: {
      fontSize: 40,
      color:'#FFB100'
  }
});

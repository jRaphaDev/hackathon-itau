import React from 'react';

import { StyleSheet, Text, Alert, Image } from 'react-native';

import { Container, Content, Header, Card, CardItem, Body, View, Title , Left, Icon, Button, Right} from 'native-base';

export default class Portifolio extends React.Component {

    render() {

        const {goBack, navigate} = this.props.navigation;

        return (
            <Container>
                <Header>
                    <Left>
                        <Button transparent onPress={() => goBack()}>
                            <Icon name='arrow-back' />
                        </Button>
                    </Left>
                    <Body>
                        <Title>Portifolio</Title>
                    </Body>
                    <Right />
                </Header>
                <Content>
                    <View style={styles.row}>

                        <Card style={styles.card}>
                            <CardItem button onPress={() => navigate('Produto')} >
                                <Body>
                                    <Image 
                                        style={{width: 180, height: 180, alignContent: "center", alignSelf: "center"}}
                                        source={require('../imgs/logo.png')} />
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <CardItem button onPress={() => Alert.alert('here')} >
                                <Body>
                                    <Image
                                        style={{width: 180, height: 180, alignContent: "center", alignSelf: "center"}}
                                        source={require('../imgs/logo.png')} />
                                </Body>
                            </CardItem>
                        </Card>
                    </View>
                    <View style={styles.row}>
                        <Card style={styles.card}>
                            <CardItem button onPress={() => Alert.alert('here')} >
                                <Body>
                                    <Image
                                        style={{width: 180, height: 180, alignContent: "center", alignSelf: "center"}}
                                        source={require('../imgs/logo.png')} />
                                </Body>
                            </CardItem>
                        </Card>

                        <Card style={styles.card}>
                            <CardItem button onPress={() => Alert.alert('here')} >
                                <Body>
                                    <Image 
                                        style={{width: 180, height: 180, alignContent: "center", alignSelf: "center"}}
                                        source={require('../imgs/logo.png')} />
                                </Body>
                            </CardItem>
                        </Card>
                    </View>

                </Content>
            </Container>
        );
    }
}


const styles = StyleSheet.create({
    row: {
        flex: 1,
        flexDirection: 'row'
    },
    card: {
        width:155,
        height:155,
        marginTop: 25,
        marginLeft: 20,
        borderWidth: 1,
        borderRadius: 4,
    }
});
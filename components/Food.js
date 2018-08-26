import React, { Component } from 'react';

import { Container, Header, Item, Input, Icon, Button, Content, List, ListItem, Text, Tab, Tabs } from 'native-base';
import { StyleSheet } from 'react-native';
export default class Food extends React.Component {
   render() {
        
       const { navigate } = this.props.navigation;
       var items = [
           'Simon Mignolet',
           'Nathaniel Clyne',
           'Dejan Lovren',
           'Mama Sakho',
           'Emre Can'
       ];
       const nextPag =
       () => {
         navigate('Produto');
       }

       return (
           <Container>
               <Header searchBar rounded styles={styles.noGeral}>
                   <Item>
                       <Icon name="ios-search" />
                       <Input placeholder="Procurar" />
                   </Item>
                   <Button transparent>
                       <Text>Search</Text>
                   </Button>


               </Header>

               <Content hasTabs styles={styles.noGeral}>
                   <Tabs>
                       <Tab heading="Todos">
                           <List dataArray={items}
                               renderRow={(item) =>
                                   <ListItem button onPress={() => {nextPag()}}> 
                                       
                                       <Text>{item}</Text>
                                       
                                   </ListItem>
                               }>
                           </List>
                       </Tab>
                       <Tab heading="Meus">

                       </Tab>
                       <Tab heading="Recentes">

                       </Tab>
                   </Tabs>
               </Content>
           </Container>

       );
   }
}

const styles = StyleSheet.create({
   noGeral: {
     backgroundColor: '#FFC400'
   }

   });
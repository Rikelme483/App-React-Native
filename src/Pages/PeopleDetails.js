import React  from 'react';
import {Text, Image, StyleSheet, View, ScrollView} from 'react-native';
import DataLines from '../Components/DataLines';

  function PeopleDetails({route}) {

    const {person} = route.params;   
    console.log('-------------------------------------------------------------------')
    console.log(person) 

    const styles = StyleSheet.create({
      photo: {
        aspectRatio: 1,
      },
      container: {
        padding: 10
      }
    })

    return (
          <ScrollView style = {styles.container} >
            <Image source = { {uri: person.picture.large} } style = {styles.photo} />
            <DataLines label = 'Email:' data = {person.email} />
            <DataLines label = 'Cidade:' data = {person.location.city} />
            <DataLines label = 'Estado:' data = {person.location.state} />
            <DataLines label = 'Telefone:' data = {person.phone} />
            <DataLines label = 'Celular:' data = {person.cell} />
            <DataLines label = 'Nacionalidade:' data = {person.nat} />


          </ScrollView>
    );
}

export default PeopleDetails;
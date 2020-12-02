import React, {useEffect, useState} from 'react';
import {StyleSheet, ScrollView, View} from 'react-native';
import Header                       from '../Components/Header';
import PeopleList                   from '../Components/PeopleList';
import axios                        from 'axios';

  function PeoplePage(props) {

    const {navigation} = props;

    const [pessoa, setPessoa] = useState([]);

    useEffect(() => {  //função para buscar dados da api da internet
      axios
        .get('https://randomuser.me/api/?results=20&nat=br') //get para pegar os dados da web
        .then(response => {
          setPessoa(response.data.results) //then para setar os dados na const setPessoa
        }).catch(error => {
           console.log('Ocorreu um erro! - ' + error);
        })

    }, []);

    return (
      //valor title renderizando na prop de Header.js
      <ScrollView>
        <View>
          <PeopleList people = {pessoa}  navigation = {navigation} />
        </View>
      </ScrollView>
    );
}

export default PeoplePage;
import React from 'react';
import { View, Text, ImageBackground, Button, TouchableOpacity} from 'react-native';

import Fundo from '../../../assets/feira.jpeg';

import styles from './styles';

function Home({navigation}) {
    function produtos() {
        navigation.navigate("Produtos")
    }
    return(
    <View style={styles.caixa}>

        <ImageBackground source={Fundo} style={styles.fundo}>
           
            <View>

                 <Text style={styles.titulo}>Seja bem vindx ao Hortifruti On!</Text>

                 <TouchableOpacity style={styles.btn}
                    onPress={produtos} >

                    <Text style={styles.texto}>Lista de Produtos</Text>
                </TouchableOpacity>
                    
            </View>

        </ImageBackground>

    </View>


    )
}

export default Home;
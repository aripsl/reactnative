import React from 'react';
import{
     View, 
    Text, 
    StatusBar, 
    ImageBackground,
    TextInput,
    TouchableOpacity,
    Alert,
   } from 'react-native';
import Fundo from '../../../assets/loja.jpg';

import styles from './styles';

const produtos = [
    {
        nome: "Alface",
    },
    {
        nome: "Brócolis"
    },
    {
        nome: "Acelga"
    },
    {
        nome: "Rúcula"
    },
    {
        nome: "Couve"
    }
]

function Produtos({navigation}) {
    function Login() {
        navigation.navigate("Login")
    }
    return(  
        <View style={styles.caixa}>

        <ImageBackground source={Fundo} style={styles.fundo}>

        <View style={styles.caixa}>

        <Text style={styles.titulo}>NOSSOS PRODUTOS</Text>

        {
            produtos.map((produto) => <Text style={styles.produto}>{produto.nome}</Text>)
        }

<            TouchableOpacity style={styles.btn}
                    onPress={Login} >

                    <Text style={styles.texto}>SAIR</Text>
            </TouchableOpacity>

        </View>

        

        </ImageBackground>

</View>
            

    )
}


export default Produtos;
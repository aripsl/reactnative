import React from 'react';
import { View, Text, ImageBackground, TextInput, TouchableOpacity, Alert
     } from 'react-native';

import Fundo from '../../../assets/alface.jpeg';

import styles from './styles';

const user = {
    id: 1,
    email: "ariana@teste.com",
    senha: "123"
}

function Login({navigation}) {

    function autenticacao() {

        if (user.email === usuario && user.senha === senha) {
            navigation.navigate("Home");
        }else {
        Alert.alert("Falha de login", "Usuário ou senha incorretos!")
    }

}

    const [usuario, setUsuario] = React.useState("");
    const [senha, setSenha] = React.useState("");

    return(
    <View style={styles.caixa}>

        <ImageBackground source={Fundo} style={styles.fundo}>
           
            <View>

                <Text style={styles.titulo1}>Seja bem vindx ao Hortifruti!</Text>

                 <Text style={styles.titulo}>Faça seu login:</Text>

            </View>

            <View style={styles.inputs}>

                <TextInput placeholder="Digite seu e-mail..." style={styles.input} 
                value={usuario}
                onChangeText={(text) => setUsuario(text)}
                />  
            
                <TextInput placeholder="Digite sua senha..." style={styles.input} 
                secureTextEntry={true} 
                value={senha}
                onChangeText={(text) => setSenha(text)}/> 

                <TouchableOpacity style={styles.btn}
                onPress={autenticacao}
                >
                    <Text style={styles.texto}>Entrar</Text>
                </TouchableOpacity>
            
            </View>
            
        </ImageBackground>

    </View>


    )
}

export default Login;
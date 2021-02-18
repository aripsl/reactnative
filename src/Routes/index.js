import React from 'react';
import  { createAppContainer, createSwitchNavigator } from 'react-navigation';

import Login from '../screens/Login';
import Home from '../screens/Home';
import Produtos from '../screens/Produtos';

const Rotas = {

    Login: {
        name: "Login",
        screen: Login
    },
    
    Home: {
        name: "Home",
        screen: Home
    },
    
    Produtos: {
        name: "Produtos",
        screen: Produtos
    },

}

const Navegacao = createSwitchNavigator(Rotas);

export default createAppContainer(Navegacao);
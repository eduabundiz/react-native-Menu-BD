import React ,{Component} from 'react';
import {createAppContainer} from 'react-navigation';
import {createStackNavigator} from 'react-navigation-stack';

import Menu from './menu.js';
import Alta from './Alta';
import Baja from './Baja';
import Modificar from './modificar';
import ModificaTodo from './modificarTodo';
import Cambio from './cambios';
const NavigatorStack = createStackNavigator({
  Menu:{
    screen:Menu,
    navigationOptions:{
      // header:null,
    }
  },
  Alta:{
    screen:Alta,
  },
  Baja:{
    screen:Baja
  },
  Modificar:{
    screen:Modificar,
  },
  ModificaTodo:{
    screen:ModificaTodo
  },
  Cambio:{
    screen:Cambio
  }
});

const Container = createAppContainer(NavigatorStack);
export default Container;
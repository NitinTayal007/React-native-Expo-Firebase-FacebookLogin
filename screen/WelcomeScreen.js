import React from 'react'
import {createAppContainer} from 'react-navigation'
import {createDrawerNavigator} from 'react-navigation-drawer'
import {Dimensions} from 'react-native'

import {Feature} from '@expo/vector-icon'


import {ProfileScreen, MessageScreen, ActivityScreen, ListScreen, ReportScreen, StatisticScreen, SignOutScreen} from './screenjs'


const DrawerNavigator = createDrawerNavigator({
  ProfileScreen,

  MessageScreen,
  ActivityScreen,
  ListScreen,
  ReportScreen,
  StatisticScreen,
  SignOutScreen
})


export default DrawerNavigator;

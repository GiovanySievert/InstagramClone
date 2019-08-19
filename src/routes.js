import React from 'react';
import {createAppContainer, createStackNavigator} from 'react-navigation';
import {Image} from 'react-native';

import Logo from './assets/instagram.png';

import Feed from './pages/Feed/';

const Routes = createAppContainer(
  createStackNavigator(
    {
      Feed,
    },
    {
      headerLayoutPreset: 'center',
      defaultNavigationOptions: {
        headerTitle: <Image source={Logo} />,
        headerStyle: {
          backgroundColor: '#f5f5f5',
        },
      },
    },
  ),
);

export default Routes;

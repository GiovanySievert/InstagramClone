import React, {Fragment} from 'react';
import {StatusBar} from 'react-native';

import Routes from './routes';

export default function src() {
  return (
    <Fragment>
      <StatusBar barStyle="dark-content" backgroundColor="#f5f5f5" />
      <Routes />
    </Fragment>
  );
}

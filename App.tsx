import { NavigationContainer } from '@react-navigation/native';
import React, { Fragment, FunctionComponent } from 'react';
import { StatusBar } from 'react-native';
import BottomAppNavigator from './src/routes/router';

export interface AppProps { }

const App: FunctionComponent<AppProps> = () => {
  return (
    <Fragment>
      <StatusBar />
      <NavigationContainer>
        <BottomAppNavigator />
      </NavigationContainer>
    </Fragment>
  );
}
 
export default App;

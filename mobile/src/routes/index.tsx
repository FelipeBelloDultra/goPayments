import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Wellcome from '../pages/Wellcome';
import SignIn from '../pages/SignIn';
import SignUp from '../pages/SignUp';

const WellcomeNav = createStackNavigator();

const WellcomeRoutes: React.FC = () => (
  <WellcomeNav.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#2B2D42' },
    }}
  >
    <WellcomeNav.Screen name="Wellcome" component={Wellcome} />
    <WellcomeNav.Screen name="SignIn" component={SignIn} />
    <WellcomeNav.Screen name="SignUp" component={SignUp} />
  </WellcomeNav.Navigator>
);

export default WellcomeRoutes;

import React from 'react';
import { createStackNavigator } from '@react-navigation/stack';

import Wellcome from '../pages/Wellcome';

const WellcomeNav = createStackNavigator();

const WellcomeRoutes: React.FC = () => (
  <WellcomeNav.Navigator
    screenOptions={{
      headerShown: false,
      cardStyle: { backgroundColor: '#2B2D42' },
    }}
  >
    <WellcomeNav.Screen name="Wellcome" component={Wellcome} />
  </WellcomeNav.Navigator>
);

export default WellcomeRoutes;

import React from 'react';
import { View, Text, Image } from 'react-native';

import wellcomeBackground from '../../assets/wellcome-background.png';

const Wellcome: React.FC = () => {
  return (
    <View>
      <Image source={wellcomeBackground} />
      <Text>Hello World</Text>
    </View>
  );
};

export default Wellcome;

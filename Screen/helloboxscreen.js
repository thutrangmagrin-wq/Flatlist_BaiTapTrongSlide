import React from 'react';
import { View, Text } from 'react-native';

const HelloBoxScreen = () => {
  return (
    <View
      style={{
        width: 160,
        height: 160,
        backgroundColor: 'purple',
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      <Text style={{ color: 'white', fontSize: 18 }}>
        Hello, world
      </Text>
    </View>
  );
};

export default HelloBoxScreen;

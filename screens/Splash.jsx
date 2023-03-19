import {View, Image, Text} from 'react-native';
import React, {useEffect} from 'react';

const Splash = ({navigation}) => {
  useEffect(() => {
    setTimeout(() => {
      navigation.navigate('Login');
    }, 3500);
  }, []);

  return (
    <View style={{height: '100%', alignItems: 'center'}}>
      <View style={{flex: 0.95, justifyContent: 'center'}}>
        <Image
          style={{height: 200, width: 350}}
          source={require('../assets/logo-aq-01.png')}
        />
      </View>
      <View style={{flex: 0.1}}>
        <Text
          style={{
            fontSize: 20,
            color: 'black',
            fontWeight: 500,
            textTransform: 'uppercase',
          }}>
          Aquatune.co
        </Text>
        <Text
          style={{
            fontSize: 12,
            color: 'rgb(0,174,239)',
            fontWeight: 500,
            textTransform: 'uppercase',
            textAlign: 'center',
          }}>
          version 0.0.1
        </Text>
      </View>
    </View>
  );
};

export default Splash;

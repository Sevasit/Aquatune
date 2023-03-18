import {View, Text, Image, TextInput, SafeAreaView, Button} from 'react-native';
import React from 'react';

const Login = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{height: '100%', alignItems: 'center'}}>
        <View style={{marginTop: 35, flex: 0.5}}>
          <Text
            style={{
              color: 'rgb(0,174,239)',
              fontSize: 20,
              textAlign: 'right',
              width: 350,
              fontWeight: 500,
            }}>
            Sign up
          </Text>
        </View>
        <View>
          <Image
            style={{height: 100, width: 300, marginTop: 20}}
            source={require('../pictures/logo-aq-01.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <TextInput
              style={{
                marginTop: 50,
                borderRadius: 10,
                backgroundColor: 'rgb(219,220,221)',
                paddingLeft: 15,
                paddingRight: 15,
              }}
              placeholder={'Email Address'}
            />
            <TextInput
              style={{
                marginTop: 10,
                borderRadius: 10,
                marginBottom: 20,
                backgroundColor: 'rgb(219,220,221)',
                paddingLeft: 15,
                paddingRight: 15,
              }}
              secureTextEntry={true}
              placeholder={'Password'}
            />
            <Button
              style={{
                backgroundColor: 'rgb(0,174,239)',
                borderRadius: 10,
              }}
              onPress={() => navigation.navigate('Persona')}
              title="login"></Button>
          </View>
        </View>
        <View style={{paddingTop: 50}}>
          <Text
            style={{
              color: 'rgb(0,174,239)',
              fontSize: 20,
              textAlign: 'center',
              width: 350,
              fontWeight: 500,
            }}
            onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

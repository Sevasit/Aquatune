import {View, Text, Image, TextInput, SafeAreaView, Button} from 'react-native';
import React from 'react';

const Register = ({navigation}) => {
  return (
    <SafeAreaView>
      <View style={{height: '100%', alignItems: 'center'}}>
        <View style={{marginTop: 35, flex: 0.5}}>
          <Text className="text-xl font-bold text-sky-500 text-right w-[350]">
            Register
          </Text>
        </View>
        <View>
          <Image
            style={{height: 100, width: 300, marginTop: 20}}
            source={require('../assets/logo-aq-01.png')}
          />
          <View style={{flexDirection: 'column'}}>
            <TextInput
              className="bg-slate-200 mt-24 rounded-md p-3"
              placeholder={'Email Address'}
            />
            <TextInput
              className="bg-slate-200 mt-5 rounded-md p-3"
              placeholder={'Username'}
            />
            <TextInput
              className="bg-slate-200 mt-5 rounded-md p-3"
              placeholder={'Moblie'}
              secureTextEntry={true}
            />
            <TextInput
              className="bg-slate-200 mt-5 rounded-md p-3"
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <View className="mt-5">
              <Button
                onPress={() => navigation.navigate('Login')}
                title="Register"></Button>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 50}}>
          <Text
            className="text-xl font-bold text-sky-500"
            onPress={() => navigation.navigate('Login')}>
            Login
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Register;

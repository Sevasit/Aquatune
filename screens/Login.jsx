import {View, Text, Image, TextInput, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';

const Login = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const login = () => {
    auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        console.log('signed in!');
        navigation.navigate('Persona');
      })
      .catch(err => alert(err.message));
  };

  return (
    <SafeAreaView>
      <View style={{height: '100%', alignItems: 'center'}}>
        <View style={{marginTop: 35, flex: 0.5}}>
          <Text className="text-xl font-bold text-sky-500 text-right w-[350]">
            Sign up
          </Text>
        </View>
        <View>
          <Image
            style={{height: 100, width: 300, marginTop: 20}}
            source={require('../assets/logo-aq-01.png')}
          />
          <View>
            <TextInput
              value={email}
              onChangeText={email => {
                setEmail(email);
              }}
              className="bg-slate-200 mt-24 rounded-md p-3"
              placeholder={'Email Address'}
            />
            <TextInput
              value={password}
              onChangeText={password => {
                setPassword(password);
              }}
              className="bg-slate-200 mt-5 rounded-md p-3"
              secureTextEntry={true}
              placeholder={'Password'}
            />
            <View className="mt-5">
              <Button onPress={() => login()} title="login"></Button>
            </View>
          </View>
        </View>
        <View style={{paddingTop: 50}}>
          <Text
            className="text-xl font-bold text-sky-500"
            onPress={() => navigation.navigate('Register')}>
            Register
          </Text>
        </View>
      </View>
    </SafeAreaView>
  );
};

export default Login;

import {View, Text, Image, TextInput, SafeAreaView, Button} from 'react-native';
import React, {useState} from 'react';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Register = ({navigation}) => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [moblie, setMoblie] = useState('');
  const [password, setPassword] = useState('');

  const saveData = () => {
    auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        console.log('User account created & signed in!');
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          console.log('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          console.log('That email address is invalid!');
        }

        console.error(error);
      });

    firestore()
      .collection('Users')
      .doc(email)
      .set({
        email: email,
        username: username,
        moblie: moblie,
        titel: '',
        score: '',
      })
      .then(() => {
        console.log('User added!');
        navigation.navigate('Login');
      });
  };

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
              value={email}
              onChangeText={email => {
                setEmail(email);
              }}
              className="bg-slate-200 mt-24 rounded-md p-3"
              placeholder={'Email Address'}
            />
            <TextInput
              value={username}
              onChangeText={username => {
                setUsername(username);
              }}
              className="bg-slate-200 mt-5 rounded-md p-3"
              placeholder={'Username'}
            />
            <TextInput
              value={moblie}
              onChangeText={moblie => {
                setMoblie(moblie);
              }}
              className="bg-slate-200 mt-5 rounded-md p-3"
              placeholder={'Moblie'}
              secureTextEntry={true}
            />
            <TextInput
              value={password}
              onChangeText={password => {
                setPassword(password);
              }}
              className="bg-slate-200 mt-5 rounded-md p-3"
              placeholder={'Password'}
              secureTextEntry={true}
            />
            <View className="mt-5">
              <Button onPress={() => saveData()} title="Register"></Button>
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

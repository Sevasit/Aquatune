import {
  View,
  Text,
  SafeAreaView,
  Image,
  FlatList,
  TouchableOpacity,
  Button,
} from 'react-native';
import React, {useState, useEffect} from 'react';
import {Imgs} from '../components/data';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Persona = ({navigation}) => {
  const [user, setUser] = useState();

  const [imgD, setImgD] = useState({
    src: require('../assets/สาหร่าย-01.png'),
    title: 'keen',
  });

  function onAuthStateChanged(user) {
    setUser(user);
  }

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);
    return subscriber; // unsubscribe on unmount
  }, []);

  const submithandler = () => {
    firestore()
      .collection('Users')
      .doc(user.email)
      .update({
        title: imgD.title,
      })
      .then(() => {
        console.log('User updated!');
        navigation.navigate('Quiz');
      });
  };

  return (
    <SafeAreaView>
      <View className="flex flex-row justify-around items-center mt-5">
        <Image
          style={{height: 25, width: 25}}
          source={require('../assets/menu.png')}
        />
        <Image
          style={{height: 55, width: 100}}
          source={require('../assets/logo-aq-01.png')}
        />
        <Image
          style={{height: 30, width: 30}}
          source={require('../assets/google-contacts.png')}
        />
      </View>
      <View className="items-center mt-2">
        <Image
          style={{height: 300, width: 350, resizeMode: 'contain'}}
          source={imgD.src}
        />
      </View>
      <View className="items-center">
        <Text className="font-bold text-2xl capitalize text-sky-500 bg-slate-200 p-3 rounded-xl shadow-xl shadow-gray-800 px-10">
          {imgD.title}
        </Text>
      </View>
      <FlatList
        className="mt-20"
        horizontal={true}
        showsHorizontalScrollIndicator={false}
        data={Imgs}
        renderItem={({item, index}) => (
          <View className="flex flex-col items-center gap-4">
            <TouchableOpacity
              onPress={() => {
                setImgD({
                  src: item.src,
                  title: item.title,
                });
              }}>
              <Image
                className="w-[150] h-[150] bg-slate-200 ml-3 rounded-full"
                source={item.src}
                key={index}
                style={{resizeMode: 'contain'}}
              />
            </TouchableOpacity>
            <Text className="font-bold text-2xl capitalize text-black bg-sky-300 rounded-xl shadow-xl shadow-gray-800 px-10 py-1">
              {item.title}
            </Text>
          </View>
        )}
      />
      <View className="pt-10 px-32">
        <TouchableOpacity onPress={submithandler}>
          <Text className="font-bold text-xl text-center capitalize text-sky-500 bg-slate-200 p-3 rounded-xl">
            Submit
          </Text>
        </TouchableOpacity>
      </View>
    </SafeAreaView>
  );
};

export default Persona;

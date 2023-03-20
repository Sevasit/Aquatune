import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React from 'react';

const Final = () => {
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
      <View className="items-center pt-10 relative">
        <Image
          style={{resizeMode: 'contain'}}
          className="h-[350] w-[350]"
          source={require('../assets/message.png')}
        />
        <Text className="absolute text-black font-medium text-2xl top-[90] uppercase">
          Recommend Song
        </Text>
        <Text className="absolute text-white font-medium  text-2xl top-[130] bg-sky-400 px-5 rounded-xl uppercase">
          Lowkey - NIKI
        </Text>
        <Image
          style={{resizeMode: 'contain'}}
          className="absolute h-[200] w-[200] top-[130]"
          source={require('../assets/sound.png')}
        />
      </View>
      <View className="items-center">
        <Image
          style={{resizeMode: 'contain'}}
          className="h-[300] w-[300]"
          source={require('../assets/สาหร่าย-03.png')}
        />
      </View>
    </SafeAreaView>
  );
};

export default Final;

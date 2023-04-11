import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {questions} from '../components/questions';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Quiz = () => {
  const ImgsMap = {
    joy: require('../assets/สาหร่าย-01.png'),
    mellow: require('../assets/สาหร่าย-02.png'),
    fear: require('../assets/สาหร่าย-03.png'),
    keen: require('../assets/สาหร่าย-04.png'),
    bo: require('../assets/OAIDB01-05.png'),
    nice: require('../assets/OAIDB01-06.png'),
    nicha: require('../assets/OAIDB01-07.png'),
  };

  const [dataImg, setDataImg] = useState('joy');
  const [user, setUser] = useState('');

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  function onAuthStateChanged(user) {
    setUser(user);
  }

  async function fetchData(emailUser) {
    const {_data, ...other} = await firestore()
      .collection('Users')
      .doc(emailUser)
      .get();

    setDataImg(_data.title);
  }

  setTimeout(() => {
    fetchData(user.email);
  }, 2000);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(onAuthStateChanged);

    return subscriber; // unsubscribe on unmount
  }, []);

  const handleAnswerOptionClick = isCorrect => {
    if (isCorrect) {
      setScore(score + 1);
    }

    const nextQuestion = currentQuestion + 1;

    if (nextQuestion < questions.length) {
      setCurrentQuestion(nextQuestion);
    } else {
      setShowScore(true);
    }
  };

  return (
    <>
      {showScore ? (
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
      ) : (
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
          <View>
            <View className="items-center pt-10 relative">
              <Image
                style={{resizeMode: 'contain'}}
                className="h-[350] w-[350]"
                source={require('../assets/message.png')}
              />
              <Text className="absolute w-[250px] text-black font-bold text-2xl top-[40%]">
                {questions[currentQuestion].questionText}
              </Text>
            </View>
            <View className="flex flex-row justify-around">
              {questions[currentQuestion].answerOptions.map((item, index) => (
                <TouchableOpacity
                  key={index}
                  onPress={() => handleAnswerOptionClick(item.isCorrect)}>
                  <Image
                    source={item.answerText}
                    key={index}
                    style={{resizeMode: 'contain'}}
                    className="h-[75] w-[75]"
                  />
                </TouchableOpacity>
              ))}
            </View>
          </View>
          <View className="items-center">
            <Image
              style={{resizeMode: 'contain'}}
              className="h-[300] w-[300]"
              source={ImgsMap[dataImg]}
            />
          </View>
        </SafeAreaView>
      )}
    </>
  );
};

export default Quiz;

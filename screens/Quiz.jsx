import {View, Image, Text, SafeAreaView, TouchableOpacity} from 'react-native';
import React, {useState, useEffect} from 'react';
import {questions} from '../components/questions';
import auth from '@react-native-firebase/auth';
import firestore from '@react-native-firebase/firestore';

const Quiz = ({navigation}) => {
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
  const [colorValue, setColorValue] = useState('');
  const [musicValue, setMusicValue] = useState('');
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [showScore, setShowScore] = useState(false);
  const [score, setScore] = useState(0);

  async function fetchData(emailUser) {
    try {
      const {_data, ...other} = await firestore()
        .collection('Users')
        .doc(emailUser)
        .get();

      setDataImg(_data.title);
    } catch (err) {
      console.log(err);
    }
  }

  setTimeout(() => {
    fetchData(user.email);
  }, 2000);

  useEffect(() => {
    const subscriber = auth().onAuthStateChanged(user => {
      if (!user) {
        navigation.navigate('Login');
      }

      setUser(user);
    });

    return () => {
      subscriber();
    }; // unsubscribe on unmount
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
      generateRandomMusicArray(score);
      generateColor(score);
      // update db
      firestore()
        .collection('Users')
        .doc(user.email)
        .update({
          score: score,
        })
        .then(() => {
          console.log('User updated!');
          navigation.navigate('Quiz');
        });
    }
  };

  const generateRandomMusicArray = score => {
    //Test function
    const musicTileArray = {
      0: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'], // -> depressed
      1: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      2: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      3: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      4: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      5: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      6: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      7: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      8: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'],
      9: ['lowkey', 'plastic love', 'sunsets', 'sos', 'heyho'], // -> happy
    };

    const musicArray = musicTileArray[score];
    const music = musicArray[Math.floor(Math.random() * musicArray.length)];
    setMusicValue(music);
  };

  function generateColor(score) {
    const colors = {
      0: 'red', // -> depressed
      1: 'black',
      2: 'green',
      3: 'yellow',
      4: 'blue',
      5: 'red',
      6: 'red',
      7: 'red',
      8: 'red',
      9: 'red', // -> happy
    };

    const color = colors[score];

    setColorValue(color);
  }

  return (
    <View>
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
              className="h-[300] w-[300]"
              source={require('../assets/message.png')}
            />
            <Text className="absolute text-black font-medium text-2xl top-[90] uppercase">
              Recommend Song
            </Text>
            <View className="absolute top-[130px] flex flex-row gap-2 justify-center">
              <Text className="text-white font-medium text-lg text-center bg-sky-400 px-4 py-1 rounded-xl uppercase">
                {musicValue}
              </Text>
              <Text className="text-white font-medium text-lg text-center bg-sky-400 px-4 py-1 rounded-xl uppercase">
                {colorValue}
              </Text>
            </View>
            <Image
              style={{resizeMode: 'contain'}}
              className="absolute h-[150] w-[150] top-[135]"
              source={require('../assets/sound.png')}
            />
          </View>
          <View className="items-center">
            <Image
              style={{resizeMode: 'contain'}}
              className="h-[200] w-[200]"
              source={ImgsMap[dataImg]}
            />
          </View>
          <View className="px-32">
            <TouchableOpacity
              onPress={() => {
                setShowScore(false);
                setScore(0);
                setCurrentQuestion(0);
              }}>
              <Text className="font-bold text-xl text-center capitalize text-sky-500 bg-slate-200 p-3 rounded-xl">
                Try again
              </Text>
            </TouchableOpacity>
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
                className="h-[280] w-[280]"
                source={require('../assets/message.png')}
              />
              <Text className="absolute w-[200px] text-black font-bold text-xl top-[40%]">
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
              className="h-[200] w-[200]"
              source={ImgsMap[dataImg]}
            />
          </View>
        </SafeAreaView>
      )}
    </View>
  );
};

export default Quiz;

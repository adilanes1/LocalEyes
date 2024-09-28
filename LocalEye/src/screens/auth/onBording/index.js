import React, { useState, useEffect } from 'react';
import { View, ImageBackground, StyleSheet, TouchableOpacity, Dimensions, StatusBar } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { appIcons, routes } from '../../../services';
import Wrapper from '../../../components/wrapper';
import { Buttons, Spacer, Text } from '../../../components';

const { width, height } = Dimensions.get('window');

// Onboarding data (images and text)
const onboardingData = [
  {
    image: (appIcons.image1), // replace with your image path
    title: 'Find a familiar face in an unknown place',
    description: 'LocalEyes connects Travelers to Locals throughout Czechia',
  },
  {
    image: (appIcons.image2), // replace with your image path
    title: 'Discover Through The Eyes Of A Local',
    description: 'Make every outing memorable with a completely personalized view of the area',
  },
  {
    image: (appIcons.image3), // replace with your image path
    title: 'Connect With Real People In Real Places',
    description: 'We strive to provide unforgettable experiences with strangers who become friends',
  },
];

export default function Onboarding() {
  const [currentIndex, setCurrentIndex] = useState(0);
  const navigation = useNavigation();

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex === onboardingData.length - 1 ? 0 : prevIndex + 1));
    }, 1500); // Change image every 1.5 seconds
    return () => clearInterval(interval); // Cleanup on component unmount
  }, []);

  return (
    <Wrapper style={styles.container}>
      {/* Make the status bar transparent */}
      <StatusBar translucent backgroundColor="transparent" barStyle="light-content" />

      <ImageBackground source={onboardingData[currentIndex].image} style={styles.imageBackground} >
      <Wrapper style={styles.ballContainer}>
          {onboardingData.map((_, index) => (
            <View
              key={index}
              style={[
                styles.ball,
                index === currentIndex && styles.activeBall,
              ]}
            />
          ))}
        </Wrapper>
        <Spacer/>
        <Wrapper style={{
          backgroundColor:  'rgba(255, 255, 255, 0.5) ', // Transparent white background with some opacity
          
          borderTopLeftRadius: 30, 
          borderTopRightRadius: 30,
          marginHorizontal: 20,
          height:height*0.42,
          width: width*1.01, // Adjust width for better fit
         
         right:22
        
        }}>
          <Spacer height={35}/>
          <Wrapper style={{
            marginBottom: 20,
           left:10
          }}>
            <Wrapper style={{
              height:height*0.1,
              width:width*0.90,
              alingText:'left'
            }}>
            <Text isLarge style={{
               fontSize: 32,
               color: '#000000',
               fontWeight: 'bold',
              
               lineHeight: 34, // Set line height
               fontFamily: 'Urbanist-Bold',
               
            }}>{onboardingData[currentIndex].title}</Text>
            </Wrapper>
            <Wrapper style={{width:width*0.95,height:height*0.1}}>
               <Text style={styles.description}>{onboardingData[currentIndex].description}</Text>
            </Wrapper>
           
          </Wrapper>
<Spacer height={35}/>
          <Wrapper style={{
            flexDirection: 'row',
           marginHorizontal:14,
            width: '80%',
            left:10
          }}>
            <Buttons.Bordered
              buttonColor={'white'}
              buttonStyle={{ height: 45, width: 135, backgroundColor: 'white', borderColor: 'white' }}
              text={'Sign Up'}
              textStyle={{ color: '#B84B62' }}
              onPress={()=>{
                navigation.navigate(routes.createAccount);
              }}
            />
            <Buttons.Colored
              buttonColor={['#B84B62', '#B84B62', '#711A2D']}
              buttonStyle={{ height: 45, width: 135 }}
              text={'Login'}
              textStyle={{ color: 'white' }}
              onPress={()=>{
            navigation.navigate(routes.signin);
              }}
            />
          </Wrapper>
        </Wrapper>
      </ImageBackground>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#000', // Fallback background color if image fails to load
  },
  imageBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    width: width,
    height: height + StatusBar.currentHeight, // Extend background to cover the status bar
  },
  overlayContainer: {
    backgroundColor: '#FFFFFF66',
    blurRadius:4, // Transparent white background with some opacity
    borderRadius: 20,
    padding: 20,
    marginHorizontal: 20,
    marginBottom: 50,
    width: width * 0.85, // Adjust width for better fit
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 10,
    elevation: 10,
    position: 'absolute',
    bottom: height * 0.15, // Position the container at the bottom half of the screen
  },
  textWrapper: {
    marginBottom: 20, // Spacing between text and buttons
  },
  title: {
    fontSize: 24,
    color: '#000000',
    fontWeight: 'bold',
    textAlign: 'center',
    lineHeight: 34, // Set line height
    fontFamily: 'Urbanist-Bold', // Use Urbanist font
  },
  ballContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 20,
  },
  ball: {
    width: 5,
    height: 5,
    borderRadius: 5,
    backgroundColor: '#FFFFFF',
    marginHorizontal: 5,
  },
  activeBall: {
    width: 7,
    height: 7,
    borderRadius: 7.5,
    backgroundColor: '#FFFFFF',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.8,
    shadowRadius: 5,
    elevation: 5,
  },
  description: {
    fontSize: 16,
    color: '#000000',
    marginTop: 10,
   
    lineHeight: 26, // Set line height
    fontFamily: 'Urbanist', // Use Urbanist font
  },
  buttonContainer: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    width: '80%',
  },
});

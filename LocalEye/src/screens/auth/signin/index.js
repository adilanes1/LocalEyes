/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal, TouchableWithoutFeedback } from 'react-native';
import { height,width } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, Headers, CheckBoxes, Logos, Switches } from '../../../components';
import { responsiveFontSize, responsiveHeight, routes, appSvgs, responsiveWidth, sizes, appIcons, fontSizes, appStyles, appFonts } from '../../../services';
import { useHooks } from './hooks';
import Img from '../../../assets/images/image1.png';
import { Image } from 'react-native-animatable';
import { color } from '../../../services/utilities/colors';
import { styles } from '../../../components/modals/styles';
import { Bordered } from '../../../components/textInput';
import { logo } from '../../../services/utilities/assets/appSvgs';
import { CheckBox, fonts } from '@rneui/base';
import Navigation from '../../../navigation';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';

export default function Index(props) {
  const navigation = useNavigation();
  const { toggleCheckbox, ischecked } = useHooks();
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  
  const showAlert = (title, message) => {
    console.log(`${title}: ${message}`);
  };

  const handleLogin = () => {
    if (!email || !password) {
      showAlert('Error', 'Please enter both email and password');
      return;
    }
  
    firebase
      .auth()
      .signInWithEmailAndPassword(email, password)
      .then(() => {
        navigation.navigate(routes.creat);
      })
      .catch((error) => {
        showAlert('Error', error.message);
      });
  };

  const handleOutsidePress = () => {
    setModalVisible(false);
  };

  const handleForgotPassword = () => {
    console.log('Forgot Password email:', email);
    setModalVisible(false);
  };
  const handleLocalPress = async () => {
    await handleSetKey('local');
    navigation.navigate(routes.localsignin);
  };
  const handleSetKey = async (key) => {
    try {
      await AsyncStorage.setItem('userType', key);
      console.log('User type set to:', key);
    } catch (error) {
      console.log('Error setting user type:', error);
    }
  };
  const handleDefaultUserType = async () => {
    await handleSetKey('user');
  };
  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <TouchableOpacity onPress={handleLocalPress}>
        <Wrapper style={{top:height(3),width:width(35),height:height(6),left:width(60),borderColor:'#B94C63',borderRadius:width(8),borderWidth:width(0.5)}} >
        <Text isLarge style={{left:width(4),top:height(1.25)}}>Local</Text>
        <Wrapper isGradient gradiantColors={['#B94C63','#711A2D']} style={{width:width(10),height:height(5),borderRadius:width(5),left:width(23.5),bottom:height(2.9)}}>
          <Image source={appIcons.forward} style={{width:width(5),height:height(5),left:width(3)}} resizeMode='contain' tintColor={'#FFFFFF'}/>
        </Wrapper>
        </Wrapper>
        </TouchableOpacity>
        <Wrapper alignItemsCenter style={{ marginTop: height(9)}}>
          <Text isMediumTitle style={{fontSize:fontSizes.h3,fontFamily:appFonts.apptexturbainist}}>Login to your account.</Text>

          
        </Wrapper>
        <Wrapper style={{ marginTop: height(3) }}>
          
          <TextInputs.Colored
            inputContainerStyle={{backgroundColor:'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center' ,borderRadius:width(5)}}
            placeholder={'example@email.com'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.mail}
            onChangeText={(text) => setEmail(text)}
            title={'Email or Phone Number'}
            titleStyle={{paddingLeft:width(1.5)}}
          />
          <Spacer height={height(1)} />
          
          <TextInputs.Colored
            inputContainerStyle={{backgroundColor:'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center',borderRadius:width(5) }}
            placeholder={'Minimum 8 characters'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.lock}
            customIconRight={appIcons.eye}
            iconColorRight={'#B94C63'}
            iconStyleRight={{ marginRight: 5 }}
            onChangeText={(text) => setPassword(text)}
            title={'Password'}
            titleStyle={{paddingLeft:width(1.5)}}
          />
          <Spacer />
          <Wrapper >
            
            <TouchableOpacity onPress={() =>{
              navigation.navigate(routes.forget);
            }}>
              <Text style={{ color: '#B94C63', paddingLeft:width(63) }}>Forgot Password?</Text>
            </TouchableOpacity>
          </Wrapper>
        </Wrapper>
        <Wrapper style={{ paddingTop: 35 }} alignItemsCenter>
        <Buttons.Colored
  text={'Login'}
  customIconRight={appIcons.forward}
 textStyle={{left:width(6)}}
  buttonColor={['#B84B62', '#B84B62','#711A2D']}
  buttonStyle={{ height: height(7), width: width(90)}}
  iconStyleRight={{height:height(6),width:width(11.5),backgroundColor:'white',justifyContent:'center',borderRadius:width(8),alignItems:'center',left:width(32)}}
  onPress={()=>{
    handleLogin();
    handleDefaultUserType();
  }
  }
  iconColorRight={'#B94C63'}
/>

        </Wrapper>
        <Wrapper alignItemsCenter style={{ paddingTop: 35 }}>
          <Spacer height={height(7)}/>
          <Wrapper style={{ flexDirection: 'row' }}>
          <Image source={appIcons.line} style={{width:width(30),marginTop:height(0.75),marginHorizontal:width(1.5)}}/>
          <Text isTiny style={{color:'rgba(135, 135, 135, 1)'}}>Or sign in with</Text>
          <Image source={appIcons.line} style={{width:width(30),marginTop:height(0.75),marginHorizontal:width(1.5)}}/>
          </Wrapper>
          
          <Spacer/>
          <Wrapper style={{ flexDirection: 'row' }}>
            <Buttons.Bordered
              iconStyle={{left:width(1)}}
              tintColor={'rgba(214, 214, 214, 1)'}
              customIcon={appIcons.google}
              buttonStyle={{ height:height(6.5) , width:width(13) , marginHorizontal:width(2),}}
            />
            <Buttons.Bordered
              tintColor={'rgba(214, 214, 214, 1)'}
              iconStyle={{left:width(1)}}
              customIcon={appIcons.facebook}
              buttonStyle={{ height:height(6.5) , width:width(13), marginHorizontal:width(3)  }}
            />
            <Buttons.Bordered
              tintColor={'rgba(214, 214, 214, 1)'}
              iconStyle={{left:width(1)}}
              customIcon={appIcons.apple}
              buttonStyle={{ height:height(6.5) , width:width(13), marginHorizontal: 2 }}
            />
          </Wrapper>
        </Wrapper>
        <Wrapper alignItemsCenter style={{ paddingTop:height(7) }}>
          <TouchableOpacity onPress={ ()=>{navigation.navigate(routes.createAccount)}}>
          <Text isBoldFont> Don't have an account? <Text style={{color:'#B94C63'}}>Register</Text></Text>
          </TouchableOpacity>
          
         
        </Wrapper>
<Spacer/>
        {/* Forgot Password Modal */}
        {/* <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            setModalVisible(!modalVisible);
          }}
        >
          <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={modalStyles.modalBackground}>
              <View style={modalStyles.modalView}>
                <Text style={modalStyles.modalText1}>Reset Password</Text>
                <Spacer />
                <Text style={modalStyles.modalText}>Enter your registered email address to receive a password reset link.</Text>
                <Spacer />
                <Text isTiny style={{ paddingRight: 178 }}>Email Address</Text>
                <TextInputs.Colored
                  inputContainerStyle={{ borderColor: 'rgba(197, 197, 197, 1)', borderWidth: 1, height: 40, width: 315, alignItem: 'center' }}
                  placeholder={'example@email.com'}
                  placeholderTextColor={'#C5C5C5'}
                  value={email}
                  customIconLeft={appIcons.mail}
                  onChangeText={setEmail}
                />
                <Spacer />
                <Spacer />
                <Buttons.Colored
                  text="Send Link"
                  buttonColor="#A75503"
                  onPress={handleForgotPassword}
                  buttonStyle={{ height: 64, width: 240, padding: '20px, 24px, 20px, 24px' }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal> */}
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const modalStyles = StyleSheet.create({
  modalBackground: {
    flex: 1,
    justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
  },
  modalView: {
    width: '100%',
    backgroundColor: 'white',
    borderTopLeftRadius: 35,
    borderTopRightRadius: 35,
    padding: 35,
    alignItems: 'flex-end',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  modalText1: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 24,
    fontWeight: 'bold',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
  },
});

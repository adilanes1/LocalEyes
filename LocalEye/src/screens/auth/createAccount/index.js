/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { StyleSheet, TouchableOpacity, View, Modal, TouchableWithoutFeedback, Alert } from 'react-native';
import { height, width } from 'react-native-dimension';
import { Text, TextInputs, Buttons, ScrollViews, Wrapper, Spacer, CheckBoxes } from '../../../components';
import { routes, appIcons, fontSizes, appFonts } from '../../../services';
import { useHooks } from './hooks';

import { Image } from 'react-native-animatable';

import { CheckBox, fonts } from '@rneui/base';

import { useNavigation } from '@react-navigation/native';
import { firebase } from '@react-native-firebase/auth';

export default function Index(props) {
  const navigation = useNavigation();
  const { toggleCheckbox, ischecked } = useHooks();  // Assuming toggleCheckbox works
  const [modalVisible, setModalVisible] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [icon, setIcon] = useState('visibility');  // Initial icon for password visibility
  const [isPasswordVisible, setIsPasswordVisible] = useState(false); // Track password visibility

  // Toggle password visibility
  const toggleIcon = () => {
    setIsPasswordVisible(!isPasswordVisible);
    setIcon(isPasswordVisible ? 'visibility' : 'visibility-off');
  };

  const handleSignUp = () => {
    firebase.auth()
      .createUserWithEmailAndPassword(email, password)
      .then(() => {
        setModalVisible(true); // Show modal on successful sign-up
      })
      .catch(error => {
        if (error.code === 'auth/email-already-in-use') {
          Alert.alert('That email address is already in use!');
        }

        if (error.code === 'auth/invalid-email') {
          Alert.alert('That email address is invalid!');
        }

        if (error.code === 'auth/weak-password') {
          Alert.alert('Password should be at least 6 characters!');
        }

        console.error(error);
      });
  };

  const handleOutsidePress = () => {
    setModalVisible(false); // Hide modal on outside press
  };

  return (
    <Wrapper isMain style={[{}]}>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper alignItemsCenter style={{ marginTop: height(9) }}>
          <Text isXXLTitle style={{ paddingRight: width(10) }}>Create your new account</Text>
        </Wrapper>

        <Wrapper style={{ marginTop: height(3) }}>
          <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'example@email.com'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.mail}
            onChangeText={(text) => setEmail(text)}
            title={'Email'}
            titleStyle={{ paddingLeft: width(1.5) }}
          />

          <Spacer height={height(1)} />

          <TextInputs.PhoneNumberInput
            title={'Phone Number'}
            value={email}
            onChangeText={(text) => setEmail(text)}
            keyboardType={'numeric'}
            inputContainerStyle={{
              backgroundColor: 'rgba(255, 255, 255, 1)',
              borderColor: 'rgba(84, 95, 113, 1)',
              borderRadius: width(5),
              borderWidth: 1,
              flexDirection: 'column',
            }}
            textStyle={{
              fontSize: fontSizes.medium,
              color: '#9BA5B7',
              paddingLeft: width(1.5),
            }}
          />

          <Spacer height={height(1)} />

          <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'Minimum 8 characters'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.lock}
            customIconRight={appIcons.eye}
            iconColorRight={'#B94C63'}
            iconStyleRight={{ marginRight: 5 }}
            onPressIconRight={toggleIcon}  // Toggle password visibility
            secureTextEntry={!isPasswordVisible}  // Manage visibility of password
            onChangeText={(text) => setPassword(text)}
            title={'Password'}
            titleStyle={{ paddingLeft: width(1.5) }}
          />

          <Spacer height={height(1)} />

          <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'Minimum 8 characters'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.lock}
            customIconRight={appIcons.eye}
            iconColorRight={'#B94C63'}
            iconStyleRight={{ marginRight: 5 }}
            onPressIconRight={toggleIcon}  // Toggle password visibility
            secureTextEntry={!isPasswordVisible}  // Manage visibility of confirm password
            onChangeText={(text) => setConfirmPassword(text)}
            title={'Confirm Password'}
            titleStyle={{ paddingLeft: width(1.5) }}
          />

          <Wrapper style={{ flexDirection: 'row', height: height(10) }}>
          <CheckBoxes.Primary
              checked={ischecked}
              onPress={toggleCheckbox}
              text={  <Text style={{ fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist}} isMedium>
              I Agree with <Text style={{ color: '#B84B62', paddingTop: height(2) }}>Terms of Service</Text> and <Text style={{ color: '#B84B62' }}>Privacy Policy</Text>
            </Text>}  // Toggle checkbox
              checkedColor={'#B84B62'}
              uncheckedColor={'#B84B62'}
            />
          </Wrapper>
        </Wrapper>

        <Wrapper style={{ paddingTop: 35 }} alignItemsCenter>
          <Buttons.Colored
            text={'Sign Up'}
            customIconRight={appIcons.forward}
            textStyle={{ left: width(6) }}
            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
            buttonStyle={{ height: height(7), width: width(90) }}
            iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(30.5) }}
            onPress={handleSignUp}
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
          <TouchableOpacity onPress={ ()=>{navigation.navigate(routes.signin)}}>
          <Text isBoldFont> Already have an account?<Text style={{color:'#B94C63'}}> Login </Text></Text>
          </TouchableOpacity>
          
         
        </Wrapper>
        <Modal
          animationType="slide"
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => setModalVisible(!modalVisible)}
        >
          <TouchableWithoutFeedback onPress={handleOutsidePress}>
            <View style={modalStyles.modalBackground}>
              <View style={modalStyles.modalView}>
                <Image source={appIcons.Success} style={{ height: height(25), width: width(25) }} resizeMode='contain' />
                <Text style={modalStyles.modalText1}>Success</Text>
                <Spacer />
                <Text style={modalStyles.modalText}>Account created successfully</Text>
                <Spacer />
                <Buttons.Colored
                  text="Continue"
                  buttonColor={['#003C8C', '#09B5EF']}
                  onPress={() => {
                    setModalVisible(false);
                    navigation.navigate(routes.creat);
                  }}
                  buttonStyle={{ height: height(7), width: width(90) }}
                />
              </View>
            </View>
          </TouchableWithoutFeedback>
        </Modal>
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
    alignItems: 'center',
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
    color:'#101010'
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 15,
    color:'#878787'
  },
});

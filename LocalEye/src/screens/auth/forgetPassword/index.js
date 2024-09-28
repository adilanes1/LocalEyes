import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Alert, Modal, TouchableWithoutFeedback, Image } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appIcons, routes } from '../../../services';
import { Buttons, Icons, Images, Text, TextInputs, ScrollViews, Modals } from '../../../components';
import Spacer from '../../../components/spacer';
import DropDownPicker from 'react-native-dropdown-picker';
import auth from '@react-native-firebase/auth';

export function index(props) {
  const navigation = useNavigation();
  const [email, setEmail] = useState('');
  const [modalVisible, setModalVisible] = useState(false);

  const handlePasswordReset = () => {
    auth()
      .sendPasswordResetEmail(email)
      .then(() => {
        setModalVisible(true); // Show modal on successful password reset email send
      })
      .catch((error) => {
        Alert.alert('Error', error.message);
      });
  };

  const handleOutsidePress = () => {
    setModalVisible(false); // Hide modal on outside press
    navigation.navigate(routes.signin); // Navigate to signin screen
  };

  return (
    <Wrapper isMain style={{ color: '#FFFFFF' }}>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper flexDirectionRow>
          <Wrapper
            style={{
              height: height(7),
              width: width(13),
              borderWidth: 1,
              borderColor: '#EDEDED',
              borderRadius: width(7),
              backgroundColor: '#FFFFFF',
              left: width(4),
              top: height(4),
            }}
            justifyContentCenter
            alignItemsCenter
          >
            <Icons.Button
              iconName={'chevron-left'}
              buttonSize={{ height: height(5), width: width(9) }}
              onPress={() => {
                navigation.navigate(routes.signin);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(22) }}>
            <Text isMediumFont style={{ color: '#101010' }}>Password Reset</Text>
          </Wrapper>
        </Wrapper>
        <Spacer height={height(7)} />
        <Wrapper style={{ left: width(5) }}>
          <Text isLargeTitle>Forgot password?</Text>
          <Text isLarge style={{ color: '#878787' }}>
            Enter your email address and we’ll send you a confirmation code to reset your password
          </Text>
        </Wrapper>
        <Spacer height={height(3)} />
        <Wrapper>
          <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'example@email.com'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.mail}
            onChangeText={(text) => setEmail(text)}
            keyboardType={'email-address'}
            title={'Email'}
            titleStyle={{ paddingLeft: width(1.5) }}
          />
        </Wrapper>
        <Spacer height={height(15)} />
        <Buttons.Colored
          text={'Continue'}
          onPress={handlePasswordReset}
          buttonColor={['#B84B62','#B84B62','#711A2D']}
          buttonStyle={{ height: height(7), width: width(90) }}
          iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
        />
      </ScrollViews.KeyboardAvoiding>

      <Modal
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
            <Image source={appIcons.Success} style={{height:height(25),width:width(25)}} resizeMode='contain'/>
              <Text style={modalStyles.modalText1}>Success</Text>
              <Spacer />
              <Text style={modalStyles.modalText}>A password reset link has been sent to your email successfully</Text>
              <Spacer />
              <Buttons.Colored
                text="Continue"
                buttonColor={['#B84B62','#B84B62','#711A2D']}
                onPress={() => {
                  setModalVisible(false);
                  navigation.navigate(routes.signin);
                }}
                buttonStyle={{ height: height(7), width: width(90) }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
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
  },
});

export default index;

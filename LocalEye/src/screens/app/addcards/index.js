
import React, { useState } from 'react'
import { Text, Wrapper, Icons, TextInputs, Buttons, ScrollViews, Modals } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function aboutUs() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const handlePasswordReset = () => {
        setModalVisible(true);
      };
      const handleOutsidePress = () => {
        setModalVisible(false); // Hide modal on outside press
         // Navigate to signin screen
      };
    return (
        <Wrapper isMain backgroundColor={'white'}>
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
                        iconColor={'black'}
                        buttonSize={{ height: height(5), width: width(9) }}
                        onPress={() => {
                            navigation.navigate(routes.conform);
                        }}
                    />
                </Wrapper>
                <Wrapper style={{ top: height(6), left: width(25) }}>
                    <Text isMediumFont style={{ color: '#101010' }}>Add Card Details</Text>
                  
                </Wrapper>
                <TouchableOpacity>
                <Image source={appIcons.delete} style={{height:height(5),width:width(5),top: height(5.5),left: width(45)}} resizeMode='contain'/>

                </TouchableOpacity>
            </Wrapper>
            <Spacer height={height(7)} />
            <Wrapper alignItemsCenter justifyContentCenter>
                <Image source={appIcons.bankAccount} style={{ height: height(25), width: width(80) }} resizeMode='contain' />
                <Text style={{ fontSize: fontSizes.h5, color: '#FFFFFF', fontFamily: appFonts.apptexturbainist, bottom: height(18), right: width(4) }}>3822 8293 8292 2356</Text>
                <Wrapper flexDirectionRow>
                    <Wrapper>
                        <Text style={{ color: '#FFFFFF', fontSize: fontSizes.tiny, fontFamily: appFonts.apptexturbainist, bottom: height(15), right: width(12) }}>Card holder name</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: fontSizes.regular, fontFamily: appFonts.apptexturbainist, bottom: height(14.5), right: width(12) }}>Alexser verguson</Text>
                    </Wrapper>
                    <Wrapper>
                        <Text style={{ color: '#FFFFFF', fontSize: fontSizes.tiny, fontFamily: appFonts.apptexturbainist, bottom: height(15), left: width(6) }} >Expiry Date</Text>
                        <Text style={{ color: '#FFFFFF', fontSize: fontSizes.regular, fontFamily: appFonts.apptexturbainist, bottom: height(14.5), left: width(6) }} >03/30</Text>
                    </Wrapper>
                </Wrapper>
            </Wrapper>
            
            <Wrapper style={{bottom:height(5)}}>
              


                <TextInputs.Colored
                    
                    placeholder={'John Doe'}
                    placeholderTextColor={'#878787'}
                    title={'Full Name'}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(6) ,color:'#545F71'}}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(80) ,left:width(5)}}
                />
                <Spacer/>
                 <TextInputs.Colored
                    
                    placeholder={'xxxx-xxxx-xxxx'}
                    placeholderTextColor={'#878787'}
                    title={'Card Number'}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(6) ,color:'#545F71'}}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(80) ,left:width(5)}}
                />
            </Wrapper>
            <Wrapper flexDirectionRow  style={{marginHorizontal:width(5),marginVertical:height(2),bottom:height(5)}}>
               


                <TextInputs.Colored
                  
                    placeholder={'11/24'}
                    placeholderTextColor={'#878787'}
                    title={'Expiry Date'}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(2) ,color:'#545F71'}}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(35) }}
                />
                  <TextInputs.Colored
                   
                    placeholder={'521'}
                    placeholderTextColor={'#878787'}
                    title={'3-Digit CVV'}
                    
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(2) }}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(35) }}
                />
            </Wrapper>
          <Spacer height={height(10)}/>
            <Buttons.Colored
                text={'Add'}
                textStyle={{ left: width(1) }}
                buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                buttonStyle={{ height: height(7), width: width(80),left:width(5),bottom:height(1) }}
                iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', right: width(5) }}
                onPress={handlePasswordReset}
            />
            </ScrollViews.KeyboardAvoiding>
            <Modals.PopupPrimary
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        onRequestClose={() => {
          setModalVisible(!modalVisible);
        }}
      >
        <TouchableWithoutFeedback onPress={handleOutsidePress}>
         
            <Wrapper style={modalStyles.modalView}>
                <Image source={appIcons.Success} style={{height:height(20),width:width(20)}} resizeMode='contain'/>
              <Text style={modalStyles.modalText1}>Success</Text>
              <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist ,color:'#878787'}}>Booking confirmed successfully</Text>
   
             
          <Spacer height={height(4)}/>     
                                <Buttons.Colored
                                    text={'Continue'}
                                    
                                    buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                                    buttonStyle={{ height: height(7), width: width(80) }}
                                    iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
                                  onPress={handleOutsidePress}
                                />
                            </Wrapper>
          
        
        </TouchableWithoutFeedback>
      </Modals.PopupPrimary>
        </Wrapper>
    )
}
const modalStyles = StyleSheet.create({
    modalBackground: {
      flex: 1,
      justifyContent: 'flex-end',
      alignItems: 'center',
     
    },
    modalView: {
      width: '100%',
      backgroundColor: 'white',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      padding: 15,
      alignItems: 'center',
      
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
  
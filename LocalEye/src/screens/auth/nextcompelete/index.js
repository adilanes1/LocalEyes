/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, TouchableWithoutFeedback, Modal } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appFonts, appIcons, fontSizes, routes, sizes } from '../../../services';
import { Buttons, Icons, Images, Text, TextInputs, ScrollViews, Modals } from '../../../components';
import Spacer from '../../../components/spacer';


export function index(props) {
  // const navigation = useNavigation();
  const {navigate} = props.navigation
  const [modalVisible, setModalVisible] = useState(false);
  const handleOutsidePress = () => {
    setModalVisible(false); 
    navigate(routes.app);// Hide modal on outside press
    // Navigate to signin screen
};
const handlemodelvisible =()=>{
    setModalVisible(true);
   
}
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
              iconColor={'black'}
              buttonSize={{ height: height(5), width: width(9) }}
              onPress={() => {
                navigation.navigate(routes.createAccount);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(18) }}>
            <Text isMediumFont style={{ color: '#101010' }}>Complete Your Profile</Text>
          </Wrapper>
        </Wrapper>
        <Wrapper flexDirectionRow  style={{marginHorizontal:width(13),top:height(6)}}>
            <Wrapper style={{height:height(1),width:width(25) ,borderRadius:width(1)}} isGradient gradiantColors={['#B84B62', '#B84B62', '#711A2D']}>

            </Wrapper>
            <Wrapper style={{height:height(1),width:width(25),marginHorizontal:width(1) ,borderRadius:width(1)}} isGradient gradiantColors={['#B84B62', '#B84B62', '#711A2D']}>

            </Wrapper>
            <Wrapper style={{height:height(1),width:width(25) ,borderRadius:width(1)}} isGradient gradiantColors={['#B84B62', '#B84B62', '#711A2D']}>

            </Wrapper>
        </Wrapper>
        <Spacer height={height(10)} />
        <Wrapper style={{marginHorizontal:width(2)}}>
        <Text style={{fontSize:fontSizes.h5,fontFamily:appFonts.apptexturbainist,color:'#212121'}}>Upload Drivers License or National ID Card 🪪</Text>
        <Text style={{fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist,color:'#212121',textAlign:'left',lineHeight:height(3)}}>We do a compulsory background check on all Locals for safety. Your data will be stored safely and privately according to regulations.</Text>
        
        </Wrapper>
        
        <Spacer height={height(10)}/>
        <TouchableOpacity>
        <Wrapper style={{marginHorizontal:width(5)}}>
       <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(17), width: width(90), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                                        <Wrapper backgroundColor={'#FAFAFA'} style={{ marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(16.5), borderRadius: width(7) }} justifyContentCenter alignItemsCenter>
                                            <Image source={appIcons.image} style={{height:height(8),width:width(8)}} resizeMode='contain'/>
                                            <Text style={{color:'#9E9E9E',fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist}} >Select file</Text>
                                        </Wrapper>
                                    </Wrapper>
       </Wrapper>
        </TouchableOpacity>
        <Spacer height={height(5)}/>
        <Wrapper style={{ flexDirection: 'row',marginHorizontal:width(4) }}>
          <Image source={appIcons.line} style={{width:width(40),marginTop:height(1.75),marginHorizontal:width(1.5)}} tintColor={'#EEEEEE'}/>
          <Text  style={{color:'rgba(135, 135, 135, 100)',fontSize:fontSizes.large,fontFamily:appFonts.apptexturbainist}}>Or </Text>
          <Image source={appIcons.line} style={{width:width(40),marginTop:height(1.75),marginHorizontal:width(1.5)}} tintColor={'#EEEEEE'}/>
          </Wrapper>
             <Spacer/>                    
          <TouchableOpacity>
        <Wrapper style={{marginHorizontal:width(5)}}>
       <Wrapper  gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(7), width: width(90), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                                        <Wrapper  style={{ backgroundColor:'#f4dde2',marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(6.5), borderRadius: width(7) }} alignItemsCenter justifyContentCenter  flexDirectionRow>
                                            <Image source={appIcons.book} style={{height:height(6),width:width(6),right:width(3)}} resizeMode='contain'/>
                                            <Image source={appIcons.takephoto} style={{height:height(8),width:width(58),left:width(1)}} resizeMode='contain'/>
                                            
                                        </Wrapper>
                                    </Wrapper>
       </Wrapper>
        </TouchableOpacity>  
        <Spacer height={height(5)}/>
        <Buttons.Colored
          text={'Next'}
          onPress={handlemodelvisible}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(90) }}
          iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
        />
                 
<Spacer/>
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
              <Text style={modalStyles.modalText}>Account created successfully</Text>
              <Spacer />
              <Buttons.Colored
                text="Continue"
                buttonColor={['#B84B62','#B84B62','#711A2D']}
                onPress={handleOutsidePress}
                buttonStyle={{ height: height(7), width: width(90) }}
              />
            </View>
          </View>
        </TouchableWithoutFeedback>
      </Modal>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  dropdownWrapper: {
    position: 'absolute',
    top: height(7), // Adjust this value based on your layout
    width: width(41), // Adjust this based on the width of your dropdown input
    // Ensure the dropdown is above other components
  },
  dropdownContainer: {
    backgroundColor: 'white',
    zIndex: 1000, // Adjust this value as needed
    elevation: 5000, // For Android
  },
  dropdown: {
    borderColor: '#545F71',
    borderWidth: 1,
    borderRadius: 5,
    backgroundColor: '#fafafa',
  },
  container: {
    padding: 15,

},
outerBullet: {
    width: 20,
    height: 20,
    borderRadius: 10,
    borderWidth: 2,
    borderColor: '#B84B62',
    justifyContent: 'center',
    alignItems: 'center',
},
innerBullet: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: '#B84B62',
},

});
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
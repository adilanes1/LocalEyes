/* eslint-disable no-unused-vars */
import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, Image, TouchableWithoutFeedback } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appFonts, appIcons, fontSizes, routes, sizes } from '../../../services';
import { Buttons, Icons, Images, Text, TextInputs, ScrollViews, Modals } from '../../../components';
import Spacer from '../../../components/spacer';


export function index(props) {
  const navigation = useNavigation();
  const [modalVisible, setModalVisible] = useState(false);
  const handlePasswordReset = () => {
      setModalVisible(true);
  };
  const handleOutsidePress = () => {
      setModalVisible(false); // Hide modal on outside press
      // Navigate to signin screen
  };
  const [isFilled3, setIsFilled3] = useState(false);
    const [isFilled4, setIsFilled4] = useState(false);
    const [isFilled5, setIsFilled5] = useState(false);
    const [isFilled6, setIsFilled6] = useState(false);
    const handlePress3 = () => {
        setIsFilled3(true);// Toggle the ball's visibility
    };
    const handlePress4 = () => {
        setIsFilled4(!isFilled4);// Toggle the ball's visibility
    };
    const handlePress5 = () => {
        setIsFilled5(!isFilled5);// Toggle the ball's visibility
    };

    const handlePress6 = () => {
        setIsFilled6(!isFilled6);// Toggle the ball's visibility
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
            <Wrapper style={{height:height(1),width:width(25) ,borderRadius:width(1)}} backgroundColor={'#EEEEEE'}>

            </Wrapper>
        </Wrapper>
        <Spacer height={height(10)} />
        <Text style={{left:width(5),fontSize:fontSizes.h5,fontFamily:appFonts.apptexturbainist,color:'#212121'}}>Add Your Preferences</Text>
        <Spacer/>
        <Text isInputTitle style={{left:width(6),color:'#545F71'}}>Map Pins</Text>
     <TouchableOpacity onPress={()=>{
      navigation.navigate(routes.mappin)
     }}>
     <Wrapper style={{
        borderColor:'#545F71',
        borderWidth:width(0.3),
        borderRadius:width(5),
        height:height(7),
        width:width(90),
        left:width(5)
      }}
      alignItemsCenter
      flexDirectionRow>
<Image source={appIcons.loca} style={{height:height(6),width:width(6),left:width(2.5)}} resizeMode='contain'  tintColor={'#545F71'}/>
     <Wrapper gradiantColors={['#B84B62','#B84B62','#711A2D']}isGradient  style={{height:height(4),width:width(25),left:width(4),borderRadius:width(5)}} alignItemsCenter justifyContentCenter>
<Text  style={{fontSize:fontSizes.small,fontFamily:appFonts.apptexturbainist,color:'#FFFFFF',textAlign:'center',top:height(0.5)}}>City Area 1</Text>
     </Wrapper>
<Image source={appIcons.icon} style={{height:height(2),width:width(2),left:width(53)}} resizeMode='contain'  tintColor={'#545F71'}/>

      </Wrapper>
      <Spacer/>
      <Text style={{ left: width(6), fontSize: fontSizes.regular, fontFamily: appFonts.apptexturbainist, color: '#545F71' }}>
                    Language
                </Text>
                <TouchableOpacity onPress={handlePasswordReset}>
                    <Wrapper
                        style={{
                            borderColor: '#545F71',
                            borderWidth: width(0.2),
                            borderRadius: width(5),
                            height: height(7),
                            width: width(90),
                            left: width(5),
                        }}
                        alignItemsCenter
                        flexDirectionRow
                    >
                        <Image
                            source={appIcons.us}
                            style={{ height: height(6), width: width(6), left: width(2.5) }}
                            resizeMode="contain"
                        />
                        <Wrapper
                            gradiantColors={['#B84B62', '#B84B62', '#711A2D']}
                            isGradient
                            style={{
                                height: height(4),
                                width: width(20),
                                left: width(4),
                                borderRadius: width(5),
                            }}
                            alignItemsCenter
                            justifyContentCenter
                        >
                            <Text
                                style={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.apptexturbainist,
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    top: height(0.5),
                                }}
                            >
                                English
                            </Text>
                        </Wrapper>
                        {/* Add other language options similarly if needed */}
                        <Image
                            source={appIcons.dropdown}
                            style={{ height: height(6), width: width(6), left: width(55) }}
                            resizeMode="contain"
                            tintColor={'#545F71'}
                        />
                    </Wrapper>
                </TouchableOpacity>
     </TouchableOpacity>
     <Wrapper>
        <Spacer/>
     <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(17), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'Lorem ipsum dolor sit amet. Id dolorem cumque qui fugiat incidunt non minima Quis. '}
            placeholderTextColor={'#9BA5B7'}
           
           inputStyle={{height: height(17),bottom:height(3)}}
          
            title={'Bio'}
            multiline
            titleStyle={{ paddingLeft: width(1.5) }}
          />
     </Wrapper>
     <TextInputs.Colored
            inputContainerStyle={{
              backgroundColor: 'white',
              borderColor: '#545F71',
              borderWidth: 1,
              height: height(7),
              width: width(90),
              alignItem: 'center',
              borderRadius: width(5),
            }}
            editable={false}
            placeholder={'Select here...'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.timer}
            customIconRight={appIcons.dropdown}
            iconColorLeft={'#545F71'}
            iconSizeLeft={sizes.icons.small}
            iconColorRight={'#545F71'}
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Experience Preferences'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          />
     <TextInputs.Removedin
           inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          title={'Adults'}
          iconSizeRight={15}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          iconColorRight={'white'}
          iconColorLeft={'#545F71'}
          customIconLeft={appIcons.adult}
          iconStyleRight={{width:width(6),height:height(4),left:width(1),top:height(0.8)}}
          />
          <Spacer/>
          <TextInputs.Removedin
           inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          title={'Toddler'}
          iconSizeRight={15}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          iconColorRight={'white'}
          iconColorLeft={'#545F71'}
          customIconLeft={appIcons.child}
          iconStyleRight={{width:width(6),height:height(4),left:width(1),top:height(0.8)}}
          />
          <Spacer/>
          <TextInputs.Removedin
           inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          title={'Infant'}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          iconColorRight={'white'}
          iconSizeRight={15}
          iconColorLeft={'#545F71'}
          customIconLeft={appIcons.baby}
          iconStyleRight={{width:width(6),height:height(4),left:width(1),top:height(0.8)}}
          />
        <Spacer height={height(10)} />
        <Buttons.Colored
          text={'Next'}
          onPress={() => {
            navigation.navigate(routes.nextComplete);
          }}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(90) }}
          iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
        />
<Spacer/>
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
                        <Wrapper style={styles.container}>
                            <Text style={{ fontSize: fontSizes.h5, fontFamily: appFonts.apptexturbainist, color: 'black' }}>{'                    '}Language</Text>

                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress3} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled3 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>
                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.united}
                                        style={{
                                            marginHorizontal: width(1.5),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    English (US)
                                </Text>
                            </Wrapper>
                            <Spacer />
                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress4} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled4 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>
                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.indo}
                                        style={{
                                            marginHorizontal: width(1.5),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    Indonesia
                                </Text>
                            </Wrapper>
                            <Spacer />
                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress5} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled5 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>
                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.thi}
                                        style={{
                                            marginHorizontal: width(1),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    Thailand
                                </Text>
                            </Wrapper>
                            <Spacer />
                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress6} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled6 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>

                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.china}
                                        style={{
                                            marginHorizontal: width(1.5),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    Chinese
                                </Text>
                            </Wrapper>
                        </Wrapper>


                        <Buttons.Colored
                            text={'Save Changes'}

                            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                            buttonStyle={{ height: height(7), width: width(80), zindex: 1, left: width(6) }}
                            iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
                            onPress={handleOutsidePress}
                        />
                        <Spacer />
                    </Wrapper>


                </TouchableWithoutFeedback>
            </Modals.PopupPrimary>
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

    },
    modalView: {
        width: '100%',
        height: height(50),
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,



    },
    modalText1: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#101010'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 15,
    },
});
export default index;

import React, { useState } from 'react'
import { Text, Wrapper, Icons, TextInputs, Buttons, ScrollViews, Modals, BookingComponent } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image, TouchableOpacity, StyleSheet, Modal } from 'react-native';
import { TouchableWithoutFeedback } from 'react-native-gesture-handler';

export default function aboutUs() {
    const navigation = useNavigation();
    const [modalVisible, setModalVisible] = useState(false);
    const [modalVisibleShare, setModalVisibleShare] = useState(false);
    const [isFilled, setIsFilled] = useState(false);
    const [isFilled1, setIsFilled1] = useState(false);
    const [isFilled2, setIsFilled2] = useState(false);
    const handlePress = () => {
        setIsFilled(!isFilled);
    };
    const handlePress1 = () => {
        setIsFilled1(!isFilled1);
    };
    const handlePress2 = () => {
        setIsFilled2(!isFilled2);
    };
    const handlePasswordReset = () => {
        setModalVisible(true);
      };
      const handleOutsidePress = () => {
        setModalVisible(false); // Hide modal on outside press
         // Navigate to signin screen
      };
      const handlePasswordReset1 = () => {
        setModalVisible(false);
        setModalVisibleShare(true);
      };
      const handleOutsidePress1 = () => {
        setModalVisibleShare(false); // Hide modal on outside press
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
                            navigation.navigate(routes.conformbook);
                        }}
                    />
                </Wrapper>
                <Wrapper style={{ top: height(6), left: width(25) }}>
                    <Text isMediumFont style={{ color: '#101010' }}>Payment Method</Text>
                </Wrapper>
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
           
            <Wrapper flexDirectionRow style={{bottom:height(5)}}>
                <Wrapper style={{ left: width(4.5), top: height(3.2) }}>
                    <TouchableOpacity onPress={handlePress} style={styles.container}>
                        <Wrapper style={styles.outerBullet}>
                            {isFilled && <Wrapper style={styles.innerBullet} />}
                        </Wrapper>
                    </TouchableOpacity>
                </Wrapper>

<TouchableOpacity onPress={()=>{
    navigation.navigate(routes.pay)
}}>
<TextInputs.Colored
                    customIconLeft={appIcons.card}
                    customIconRight={appIcons.icon}
                    placeholder={'**** **** 0582 4672'}
                    placeholderTextColor={'#878787'}
                    title={'Card 1'}
                    editable={false}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(2) }}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(73) }}
                  
                />
</TouchableOpacity >
                
            </Wrapper>
            <Wrapper flexDirectionRow style={{bottom:height(5)}}>
                <Wrapper style={{ left: width(4.5), top: height(3.2) }}>
                    <TouchableOpacity onPress={handlePress1} style={styles.container}>
                        <Wrapper style={styles.outerBullet}>
                            {isFilled1 && <Wrapper style={styles.innerBullet} />}
                        </Wrapper>
                    </TouchableOpacity>
                </Wrapper>

<TouchableOpacity onPress={()=>{
    navigation.navigate(routes.pay)
}}>
<TextInputs.Colored
                    customIconLeft={appIcons.card}
                    customIconRight={appIcons.icon}
                    placeholder={'**** **** 0582 4672'}
                    placeholderTextColor={'#878787'}
                    title={'Card 2'}
                    editable={false}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(2) }}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(73) }}
                  
                />
</TouchableOpacity>
                
            </Wrapper>
            <Wrapper flexDirectionRow style={{bottom:height(5)}}>
                <Wrapper style={{ left: width(4.5), top: height(3.2) }}>
                    <TouchableOpacity onPress={handlePress2} style={styles.container}>
                        <Wrapper style={styles.outerBullet}>
                            {isFilled2 && <Wrapper style={styles.innerBullet} />}
                        </Wrapper>
                    </TouchableOpacity>
                </Wrapper>
<TouchableOpacity onPress={()=>{
    navigation.navigate(routes.pay)
}} >
<TextInputs.Colored
                    customIconLeft={appIcons.card}
                    customIconRight={appIcons.icon}
                    placeholder={'**** **** 0582 4672'}
                    placeholderTextColor={'#878787'}
                    editable={false}
                    title={'Card 3'}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(2) }}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(73) }}
                    
                />
</TouchableOpacity>

               
            </Wrapper>
            <Spacer height={height(5)} />

            <Wrapper style={{ left: width(9) }}><TouchableOpacity onPress={()=>{
                navigation.navigate(routes.addcard)
            }}>
                <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(7), width: width(80), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                    <Wrapper backgroundColor={'white'} style={{ marginHorizontal: width(0.2), marginVertical: height(0.3), height: height(6.5), borderRadius: width(7) }} justifyContentCenter alignItemsCenter>
                        <Text style={{ color: '#B84B62' }} > +Add New Card</Text>
                    </Wrapper>
                </Wrapper>
            </TouchableOpacity></Wrapper>

            <Spacer height={height(5)} />
            <Buttons.Colored
                text={'Pay Now'}
                textStyle={{ left: width(1) }}
                buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                buttonStyle={{ height: height(7), width: width(80), left: width(5) ,bottom:height(1)}}
                iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
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
              <Text style={modalStyles.modalText1}>Success</Text>
              <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist ,color:'#878787'}}>Booking confirmed successfully</Text>
              <Spacer />
              <Wrapper style={{right:width(18)}}>
              <BookingComponent.localTopRatedView
            localName={'John Doe'}
            localPrice={'165.3'}
            iconpath={appIcons.clan}
            
            localDiscription={'Feb 17-20 | 4 Days | 4 hours'}
            textproductcontainer={{width:width(55),bottom:height(2)}}
            />
            <Spacer/>
              </Wrapper>
              <Text style={{fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist ,color:'#101010'}}>Share Your Travel Plan</Text>
              <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist ,color:'#878787',textAlign:'center'}}>Share your itinerary with anyone who might want to know your plan.</Text>
              
              <Spacer />
              <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(8), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'example@email.com'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.mail}
            
            keyboardType={'email-address'}
            title={'Email'}
            titleStyle={{ paddingLeft: width(1.5) }}
          />
          <Spacer height={height(3)}/>
          <Wrapper flexDirectionRow style={{ marginHorizontal: width(13) }}>
                                <TouchableOpacity onPress={handleOutsidePress}>
                                    <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(7), width: width(40), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                                        <Wrapper backgroundColor={'white'} style={{ marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(6.5), borderRadius: width(7) }} justifyContentCenter alignItemsCenter>
                                            <Text style={{color:'#B84B62'}} > Skip</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </TouchableOpacity>
                                <Spacer horizontal />
                                
                                <Buttons.Colored
                                    text={'Share'}
                                    
                                    buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                                    buttonStyle={{ height: height(7), width: width(40),left:width(3) }}
                                    iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
                                  onPress={handlePasswordReset1}
                                />
                            </Wrapper>
            </Wrapper>
        
        </TouchableWithoutFeedback>
      </Modals.PopupPrimary>
      <Modals.PopupPrimary
        animationType="slide"
        transparent={true}
        visible={modalVisibleShare}
        onRequestClose={() => {
          setModalVisibleShare(!modalVisibleShare);
        }}
      >
        <TouchableWithoutFeedback onPress={handleOutsidePress1}>
         
            <Wrapper style={modalStyles2.modalView}>
                <Image source={appIcons.Success} style={{height:height(20),width:width(20)}} resizeMode='contain'/>
              <Text style={modalStyles2.modalText1}>Success</Text>
              <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist ,color:'#878787'}}>Travel plan shared successfully</Text>
   
             
          <Spacer height={height(4)}/>     
                                <Buttons.Colored
                                    text={'Continue'}
                                    
                                    buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                                    buttonStyle={{ height: height(7), width: width(80) }}
                                    iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
                                  onPress={handleOutsidePress1}
                                />
                            </Wrapper>
          
        
        </TouchableWithoutFeedback>
      </Modals.PopupPrimary>
        </Wrapper>
    )
}
const styles = StyleSheet.create({
    container: {
        padding: 10,

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
      backgroundColor: 'white',
      borderTopLeftRadius: 35,
      borderTopRightRadius: 35,
      padding: 35,
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
  const modalStyles2 = StyleSheet.create({
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
  

import React, { useState } from 'react'
import { Text, Wrapper, Icons, TextInputs, Buttons, ScrollViews } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image, TouchableOpacity, StyleSheet } from 'react-native';

export default function aboutUs() {
    const navigation = useNavigation();
    
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
                    <Text isMediumFont style={{ color: '#101010' }}>Edit Card Details</Text>
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
                text={'Save Changes'}
                textStyle={{ left: width(1) }}
                buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                buttonStyle={{ height: height(7), width: width(80),left:width(5),bottom:height(1) }}
                iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', right: width(5) }}
                onPress={() => {
                    navigation.navigate(routes.conform);
                }}
            />
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    )
}

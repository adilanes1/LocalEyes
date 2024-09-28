import React, { useState } from 'react';

import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appIcons, routes } from '../../../services';
import { Buttons, Icons, Images, Text, TextInputs, ScrollViews, Modals } from '../../../components';
import Spacer from '../../../components/spacer';
import { color } from '@rneui/base';


export function index(props) {
  const navigation = useNavigation();
 

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
                navigation.navigate(routes.help);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(22) }}>
            <Text isMediumFont style={{ color: '#101010' }}>Contact Support</Text>
          </Wrapper>
        </Wrapper>
        <Spacer height={height(7)} />
        <Wrapper style={{ left: width(5) ,width:width(80)}}>
          <Text isLarge style={{color:'#000000'}}>Write us a message and we’ll reach back to you</Text>
          
        </Wrapper>
        <Spacer height={height(3)} />
        <Wrapper>
          <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(17), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'Type here...'}
            placeholderTextColor={'#9BA5B7'}
           
           inputStyle={{height: height(17),bottom:height(5)}}
            keyboardType={'email-address'}
            title={'Write a message'}
            multiline
            titleStyle={{ paddingLeft: width(1.5) }}
          />
        </Wrapper>
        <Spacer height={height(15)} />
        <Buttons.Colored
          text={'Send Message'}
         
          buttonColor={['#B84B62', '#B84B62','#711A2D']}
          buttonStyle={{ height: height(7), width: width(90) }}
          iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
        />
      </ScrollViews.KeyboardAvoiding>

    
    </Wrapper>
  );
}


export default index;


import React from 'react'
import { Text, Wrapper, Icons, Buttons } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appIcons, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image } from 'react-native';

export default function aboutUs() {
  const navigation = useNavigation();
  return (
    <Wrapper isMain backgroundColor={'white'}>
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
              navigation.navigate(routes.home);
            }}
          />
        </Wrapper>
        <Wrapper style={{ top: height(6), left: width(25) }}>
          <Text isMediumFont style={{ color: '#101010' }}>Help Center</Text>
        </Wrapper>
      </Wrapper>
      <Wrapper>
        <Image source={appIcons.helpcenterful} style={{height:height(45),width:width(55),left:width(22)} } resizeMode='contain'/>
      </Wrapper>
      <Wrapper>
        <Buttons.Bordered
       buttonStyle={{borderColor:'#545F71'}}
       text={'FAQ'}
       iconColor={'#545F71'}
       onPress={()=>{
        navigation.navigate(routes.faq);
       }}
       textStyle={{color:'#878787',right:width(40)}}
       customIcon={appIcons.icon}
       iconStyle={{left:width(45),height:height(3.5),width:width(10)}}
        />
        <Spacer/>
         <Buttons.Bordered
       buttonStyle={{borderColor:'#545F71'}}
       text={'Contact Support'}

       textStyle={{color:'#878787',right:width(30)}}
       customIcon={appIcons.icon}
       iconColor={'#545F71'}
       onPress={()=>{
        navigation.navigate(routes.contactsupport);
       }}
       iconStyle={{left:width(55),height:height(3.5),width:width(10),color:'#545F71'}}
        />
        <Spacer/>
         <Buttons.Bordered
       buttonStyle={{borderColor:'#545F71'}}
       text={'Guidelines'}
       iconColor={'#545F71'}
       textStyle={{color:'#878787',right:width(35)}}
       customIcon={appIcons.icon}
       iconStyle={{left:width(50),height:height(3.5),width:width(10)}}
       onPress={()=>{
        navigation.navigate(routes.gudlines);
       }}
        />
      </Wrapper>
    </Wrapper>
  )
}

import React from 'react'
import { Text, Wrapper, Icons, Buttons, TextInputs } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appIcons, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';

export default function aboutUs() {
  const navigation = useNavigation();
  return (
    <Wrapper isMain backgroundColor={'white'}>
      <Wrapper flexDirectionRow >
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
        <Wrapper style={{ top: height(6), left: width(30) }}>
          <Text isMediumFont style={{ color: '#101010' }}> Search</Text>
        </Wrapper>
    
      </Wrapper>
      
    <Wrapper style={{top:height(7)}}>
        <TextInputs.Colored
        borderColor={'#D6D6D6'}
        Text={'Search'}
        customIconLeft={appIcons.sreach}
        customIconRight={appIcons.filter}
        iconStyleRight={{right:width(5)}}
        inputContainerStyle={{borderColor:'#D6D6D6',backgroundColor:'white',borderWidth:width(0.5)}}
        iconColorLeft={'#A6A6A6'}
        placeholder={'Search'}
        placeholderTextColor={'#A6A6A6'}
       onPress={()=>{
        navigation.navigate(routes.filter);
       }}
        />
    </Wrapper>
    </Wrapper>
  )
}
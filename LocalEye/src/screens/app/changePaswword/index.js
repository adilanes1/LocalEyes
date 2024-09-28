
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
        <Wrapper style={{ top: height(6), left: width(25) }}>
          <Text isMediumFont style={{ color: '#101010' }}> Change Password</Text>
        </Wrapper>
    
      </Wrapper>
      
    <Wrapper style={{top:height(10)}}>
    <TextInputs.Colored
            inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
            placeholder={'Minimum 8 characters'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.lock}
            customIconRight={appIcons.eye}
            iconColorRight={'#B94C63'}
            iconStyleRight={{ marginRight: 5 }}
            
            title={'Current Password'}
            titleStyle={{ paddingLeft: width(1.5) }}
          /><TextInputs.Colored
          inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
          placeholder={'Minimum 8 characters'}
          placeholderTextColor={'#9BA5B7'}
          customIconLeft={appIcons.lock}
          customIconRight={appIcons.eye}
          iconColorRight={'#B94C63'}
          iconStyleRight={{ marginRight: 5 }}
        
          title={'New Password'}
          titleStyle={{ paddingLeft: width(1.5) }}
        /><TextInputs.Colored
        inputContainerStyle={{ backgroundColor: 'white', borderColor: '#545F71', borderWidth: 1, height: height(7), width: width(90), alignItem: 'center', borderRadius: width(5) }}
        placeholder={'Minimum 8 characters'}
        placeholderTextColor={'#9BA5B7'}
        customIconLeft={appIcons.lock}
        customIconRight={appIcons.eye}
        iconColorRight={'#B94C63'}
        iconStyleRight={{ marginRight: 5 }}
       
        title={'New Confirm Password'}
        titleStyle={{ paddingLeft: width(1.5) }}
      />
      <Spacer height={height(25)}/>
      <Buttons.Colored
            text={'Save Changes'}
           
            textStyle={{ left: width(2) }}
            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
            buttonStyle={{ height: height(7), width: width(90) }}
          onPress={()=>{
            navigation.navigate(routes.account);
          }}
          />
    </Wrapper>
    </Wrapper>
  )
}
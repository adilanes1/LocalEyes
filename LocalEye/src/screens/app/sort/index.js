
import React from 'react'
import { Text, Wrapper, Icons, Buttons, TextInputs } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image } from 'react-native';

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
          <Text isMediumFont style={{ color: '#101010' }}> Sort</Text>
        </Wrapper>
    
      </Wrapper>
      <Spacer height={height(4)}/>
      <Wrapper flexDirectionRow>
          <Image source={appIcons.sort} style={{  height: height(7),
                width: width(7),
                left: width(3),
                top:height(1)
                }} resizeMode='contain' />
          <Text style={{ fontSize: fontSizes.h3,top:height(2), left: width(5), color: '#101010' }}>Sort</Text>
        </Wrapper>
        <Spacer/>
        <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist, left:width(10) }}>
        Price
        </Text>
        <Spacer/>
        <Wrapper flexDirectionRow  style={{marginHorizontal:width(4)}}>
               


               <TextInputs.Colored
                 
                   placeholder={'$100'}
                   placeholderTextColor={'#878787'}
                   title={'Minimum'}
                   customIconLeft={appIcons.dollar}
                   iconStyleRight={{ right: width(2) }}
                   titleStyle={{ left: width(2) ,color:'#545F71'}}
                   inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(35) }}
               />
                 <TextInputs.Colored
                  customIconLeft={appIcons.dollar}
                   placeholder={'$500'}
                   placeholderTextColor={'#878787'}
                   title={'Maximum'}
                   
                   iconStyleRight={{ right: width(2) }}
                   titleStyle={{ left: width(2) }}
                   inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(35) }}
               />
       </Wrapper>
       <Spacer/>
        <Wrapper>
          <Spacer/>
        <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist,left:width(10),bottom:height(2) }}>
        Rating
        </Text>
        <TextInputs.Colored
                    
                    placeholder={'Best Rating'}
                    placeholderTextColor={'#878787'}
                    title={'Select Rating'}
                    customIconLeft={appIcons.rate}
                    customIconRight={appIcons.dropdown}
                    editable={false}
                    iconStyleRight={{ right: width(2) }}
                    titleStyle={{ left: width(6) ,color:'#545F71'}}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(80) ,left:width(5)}}
                />
                <Spacer/>
                <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist,left:width(10) }}>
                Featured
        </Text>
        <Spacer/>
                 <TextInputs.Colored
                    
                    placeholder={'Select'}
                    placeholderTextColor={'#878787'}
                    customIconLeft={appIcons.madle}
                    title={'Select Featured'}
                    iconStyleRight={{ right: width(2) }}
                    customIconRight={appIcons.dropdown}
                    editable={false}
                    titleStyle={{ left: width(6) ,color:'#545F71'}}
                    inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(80) ,left:width(5)}}
                />
            </Wrapper>
            <Spacer/>
        {/* Spacer and Next Button */}
        <Spacer height={height(10)} />
        <Buttons.Colored
          text={'Save'}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(85), left: width(3) }}
          onPress={() => {
            navigation.navigate(routes.matchResult);
          }}
        />
        <Spacer />
  
    </Wrapper>
  )
}
import React from 'react';
import { width, height } from 'react-native-dimension';
import { Buttons, Icons, Spacer, Text, Wrapper } from '..';
import { FlatList, Image } from 'react-native';
import { appFonts, appIcons, fontSizes, routes } from '../../services';
import { color } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
export const localTopRated = ({
  imagePath,
  localName,
  localDiscription,
  localPrice,
  localnamestyle,
  imagestyle,
  IconButtonStyle,

  localdata,
  containerstyle,
  textproductcontainer
}) => {
  const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(4.2), width: width(35.5), borderRadius: width(5) }} justifyContentSpaceBetween alignItemsCenter justifyContentCenter>
      <Wrapper style={{ height: height(3.85), width: width(34), backgroundColor: 'white', borderRadius: width(5), left: width(0.75), top: height(0.2) }} justifyContentSpaceBetween >
        <Text style={{ fontSizes: 12, lineHeight: height(2), fontFamily: 'Urbanist' }}>{item}</Text>
      </Wrapper>
    </Wrapper>
  );
  return (
    <Wrapper
      style={[
        {
         marginHorizontal:width(2),
          borderRadius: width(2),
          borderWidth: width(0.5),
          borderColor: '#234CB029',
          marginBottom: height(2),
         
        },
        containerstyle
      ]}
    >
      <Wrapper style={{ borderBottomLineWidth: 2 }}>
        <Wrapper flexDirectionRow>
          <Image
            source={imagePath}
            style={[{ height: height(14), width: width(30), backgroundColor: 'black', borderRadius: width(2) }]}
            resizeMode="contain"
          />


          <Wrapper style={{ justifyContent: 'space-between', paddingLeft: width(1), height: height(15), width: width(20) }}>
            <Wrapper flexDirectionRow>
              <Text isBoldFont1 isTextColor2 style={localnamestyle}>{localName}</Text>
              <Buttons.Colored
                text={'View Profile'}

                textStyle={{ left: width(1) }}
                buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                buttonStyle={{ height: height(4), width: width(30), left: width(5) }}
                iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
onPress={()=>{
  navigation.navigate(routes.viewprofile);
}}
              />
            </Wrapper>
            <Wrapper flexDirectionRow style={{ height: height(5), bottom: height(1) }}>
              <Image source={appIcons.star} style={{ height: height(6), width: width(6) }} resizeMode='contain' />
              <Text isBoldFont style={{ color: '#101010', top: height(1.75) }}> 5.0</Text>
            </Wrapper>
            <Wrapper justifyContentSpaceBetween alignItemsCenter>
              <Text isBoldFont style={{ color: 'black', fontSizes: 12 }}> <Text style={{ color: '#B84B62', fontFamily: 'Baloo 2' }}>{localPrice}</Text>/hour</Text>

            </Wrapper>
            <Text isSmall style={textproductcontainer}>{localDiscription}</Text>


          </Wrapper>
        </Wrapper>

        <Text style={{ color: '#234CB029' }}>     _____________________________________________</Text>
        <Spacer  height={height(1)}/>
        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
  <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ padding: 1, borderRadius: width(5), marginBottom: height(1), marginRight: width(2) }} justifyContentSpaceBetween alignItemsCenter justifyContentCenter paddingVerticalTiny>
    <Wrapper style={{ paddingVertical: 1, paddingHorizontal: 2, backgroundColor: 'white', borderRadius: width(5) }}>
      <Text style={{ fontSize: fontSizes.small, fontFamily: 'Urbanist' }}>Certified Tour Guide</Text>
    </Wrapper>
  </Wrapper>

  <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ padding: 1, borderRadius: width(5), marginBottom: height(1), marginRight: width(2) }} justifyContentSpaceBetween alignItemsCenter justifyContentCenter paddingVerticalTiny>
    <Wrapper style={{ backgroundColor: 'white', borderRadius: width(5) }}>
      <Text style={{ fontSize: fontSizes.small, fontFamily: 'Urbanist' }}>Certified Tour Guide</Text>
    </Wrapper>
  </Wrapper>

  <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ padding: 1, borderRadius: width(5), marginBottom: height(1), marginRight: width(2) }} justifyContentSpaceBetween alignItemsCenter justifyContentCenter paddingVerticalTiny>
    <Wrapper style={{ backgroundColor: 'white', borderRadius: width(5) }}>
      <Text style={{ fontSize: fontSizes.small, fontFamily: 'Urbanist' }}>Certified Tour Guide</Text>
    </Wrapper>
  </Wrapper>

  <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ padding: 1, borderRadius: width(5), marginBottom: height(1), marginRight: width(2) }} justifyContentSpaceBetween alignItemsCenter justifyContentCenter paddingVerticalTiny>
    <Wrapper style={{ backgroundColor: 'white', borderRadius: width(5) }}>
      <Text style={{ fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist }}>Certified Tour Guide</Text>
    </Wrapper>
  </Wrapper>
</Wrapper>

      </Wrapper>
    </Wrapper>
  );
};

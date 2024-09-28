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
  buttcolor,
  buttonText,
  localnamestyle,
  imagestyle,
  IconButtonStyle,
activbutstyle,
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
         marginHorizontal:width(3),
          borderRadius: width(2),
          borderWidth: width(0.5),
          borderColor: '#234CB029',
          marginBottom: height(2),
         
        },
        containerstyle
      ]}
    >
      <Wrapper style={{ borderBottomLineWidth:width(2) ,color:'gray' }}>
        <Wrapper flexDirectionRow>
          <Image
            source={{uri:imagePath}}
            style={[{ height: height(14), width: width(30), backgroundColor: 'black', borderRadius: width(2) }]}
            resizeMode="contain"
          />


          <Wrapper style={{ justifyContent: 'space-between', paddingLeft: width(1), height: height(15), width: width(20) }}>
            <Wrapper flexDirectionRow>
              <Text isBoldFont1 isTextColor2 style={localnamestyle}>{localName}</Text>
              <Buttons.Bordered
                text={buttonText}

                
                tintColor={buttcolor}
                buttonStyle={[{ height: height(4), width: width(30), left: width(5) },activbutstyle]}
                iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}

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

        <Text style={{ color: '#234CB029' }}>    ___________________________________________________</Text>
        <Spacer  height={height(1)}/>
        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
  



  

        <Wrapper flexDirectionRow style={{marginHorizontal:width(2.5)}}>
   <Wrapper flexDirectionRow style={{marginHorizontal:width(2.5)}}>
        <Image source={appIcons.info} style={{height:height(4),width:width(4)}} resizeMode='contain' tintColor={'#B84B62'}/>
    <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexbalo,top:height(0.5),color:'#606060'}}>  Bali, Indonesia</Text>
    </Wrapper>
    <Spacer horizontal/>
    <Wrapper flexDirectionRow style={{marginHorizontal:width(9.5)}}>
        <Image source={appIcons.adult} style={{height:height(4),width:width(4)}} resizeMode='contain' tintColor={'#B84B62'}/>
    <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexbalo,top:height(0.5),color:'#606060'}}>  5 guests</Text>
    </Wrapper>
   </Wrapper>
   <Wrapper flexDirectionRow style={{marginHorizontal:width(4.5)}}>
        <Image source={appIcons.clan} style={{height:height(4),width:width(4)}} resizeMode='contain' tintColor={'#B84B62'}/>
    <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexbalo,top:height(0.5),color:'#606060'}}>  Feb 17-20 | 4 Days | 4 hours</Text>
    </Wrapper>
</Wrapper>

      </Wrapper>
      <Text style={{ color: '#234CB029' }}>    ___________________________________________________</Text>
<Wrapper flexDirectionRow>
<Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,color:'#B84B62'}}>
   Total USD
</Text>
<Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,color:'#B84B62',left:width(60)}}>
$74.63
</Text>
</Wrapper>
    </Wrapper>
  );
};

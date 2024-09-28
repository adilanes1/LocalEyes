import React from 'react';
import { width, height } from 'react-native-dimension';
import { Buttons, Icons, Spacer, Text, Wrapper } from '..';
import { FlatList, Image } from 'react-native';
import { appFonts, appIcons, fontSizes, routes } from '../../services';
import { color } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
import { TouchableOpacity } from 'react-native-gesture-handler';
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

    return (
        <Wrapper
            style={
            
                containerstyle
            }
        >
            <Wrapper style={{ borderBottomLineWidth: 2, marginHorizontal: width(2), marginVertical: width(1) }}>
                <Wrapper flexDirectionRow>
                    <Image
                        source={imagePath}
                        style={[{ height: height(14), width: width(30), backgroundColor: 'black', borderRadius: width(2) }]}
                        resizeMode="contain"
                    />


                    <Wrapper style={{ justifyContent: 'space-between', paddingLeft: width(1), height: height(15), width: width(20) }}>
                        <Wrapper flexDirectionRow>
                            <Text isBoldFont1 isTextColor2 style={localnamestyle}>{localName}</Text>
                            <Wrapper style={{left:width(28),color: '#C1C1C126'}}>
                                <TouchableOpacity>
                                    <Wrapper style={{  borderWidth: width(0.5), borderColor: '#8C8C8C26', borderRadius: width(15) ,width:width(11)}}>
                                        <Image source={appIcons.chat} resizeMode='contain' style={{ height: height(5), width: width(5) ,left:width(2.5)}} />
                                    </Wrapper>
                                </TouchableOpacity>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper flexDirectionRow style={{ bottom: height(0.5) }}>
                            <Image source={appIcons.star} style={{ height: height(6), width: width(6) }} resizeMode='contain' />
                            <Text isBoldFont style={{ color: '#101010', top: height(1.75) }}> 5.0</Text>
                        </Wrapper>
                        <Wrapper flexDirection="row" style={{ width: width(35), height: height(5) }}>
                            <Text isBoldFont style={{ color: '#B84B62', fontSize: fontSizes.regular, fontFamily: 'Baloo-2' }}>
                                ${localPrice} {' '}
                                <Text isBoldFont style={{ color: 'black', fontSize: fontSizes.regular, fontFamily: appFonts.apptexturbainist }}>
                                /night
                            </Text>
                            </Text>
                            
                        </Wrapper>





                    </Wrapper>
                </Wrapper>

                <Text style={{ color: '#234CB029' }}>     _____________________________________________</Text>
                <Spacer height={height(0.5)} />
                <Text style={{ fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist, color: '#545F71' }}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.el facilis sint aut sunt voluptatem.</Text>

            </Wrapper>
        </Wrapper>
    );
};

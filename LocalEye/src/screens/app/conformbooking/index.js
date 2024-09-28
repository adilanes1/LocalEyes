
import React from 'react'
import { Text, Wrapper, Icons, BookingComponent, ScrollViews, Buttons } from '../../../components'
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
                    iconColor={'black'}
                        iconName={'chevron-left'}
                        buttonSize={{ height: height(5), width: width(9) }}
                        onPress={() => {
                            navigation.navigate(routes.viewprofile);
                        }}
                    />
                </Wrapper>
                <Wrapper style={{ top: height(6), left: width(20) }}>
                    <Text isMediumFont style={{ color: '#101010' }}>Booking Confirmation</Text>
                </Wrapper>
            </Wrapper>
            <Spacer height={height(8)}/>
            <Wrapper style={{marginHorizontal:width(5)}}>
            <BookingComponent.localTopRated
            localName={'John Doe'}
            localPrice={'165.3'}
            localDiscription={'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.'}
            textproductcontainer={{width:width(55),bottom:height(3)}}
            />
            </Wrapper>
            <Spacer/>
            <Wrapper>
                        <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Your Trip</Text>
                        <Spacer height={3} />
                        <Wrapper flexDirectionRow>
                            <Wrapper flexDirectionRow>
                                <Image source={appIcons.info} style={styles.iconStyle} resizeMode='contain' tintColor={'#B84B62'} />
                                <Text style={styles.iconText}>Bali, Indonesia</Text>
                            </Wrapper>
                            <Spacer horizontal />
                            <Wrapper flexDirectionRow style={{ left: width(8) }}>
                                <Image source={appIcons.adult} style={styles.iconStyle} resizeMode='contain'tintColor={'#B84B62'} />
                                <Text style={styles.iconText}> 5 guests</Text>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper flexDirectionRow>
                            <Image source={appIcons.clan} style={styles.iconStyle} resizeMode='contain' tintColor={'#B84B62'} />
                            <Text style={styles.iconText}>Feb 17-20 | 4 Days | 4 hours</Text>
                        </Wrapper>
                    </Wrapper>
                    <Wrapper>
                    <Spacer height={height(2)} />

                    <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Price Details</Text>
                    <Spacer height={height(2)} />
                    <Wrapper flexDirectionRow style={{marginHorizontal:width(6)}}>
                        <Text style={{color:'#545F71'}}>$63.97 x 2 hour</Text>
                        <Spacer horizontal/>
                        <Text style={{left:width(40),color:'#545F71'}}> $63.97</Text>
                    </Wrapper>
                    <Spacer height={height(2)} />
                    <Wrapper flexDirectionRow style={{marginHorizontal:width(6)}}>
                        <Text style={{color:'#545F71'}}>Clearing fee</Text>
                        <Spacer horizontal/>
                        <Text style={{left:width(46),color:'#545F71'}}> $10.66</Text>
                    </Wrapper>
                    <Spacer height={height(1)} />
                    <Text style={{color:'#8787873D',left:width(7)}}>_____________________________________________</Text>
                    <Spacer height={height(1)} />
                    
                    <Wrapper flexDirectionRow style={{marginHorizontal:width(6)}}>
                        <Text style={{color:'#B84B62'}}>Total USD</Text>
                        <Spacer horizontal/>
                        <Text style={{left:width(49),color:'#B84B62'}}> $63.97</Text>
                    </Wrapper>
                    </Wrapper>
                    <Spacer height={height(2)} />

                    <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Cancelation Policy</Text>
                    <Spacer height={height(0.25)} />

                    <Wrapper style={{  marginHorizontal: width(2) }}>
                                    <Wrapper style={{ marginHorizontal: width(2), marginVertical: height(2) }}>
                                        <Text style={{ textAlign: 'justify', fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist, color: '#545F71' }}>Lorem ipsum dolor sit amet. Ut esse repellat ut illo nesciunt et consequatur autem ut ipsa omnis qui officia expedita non deserunt voluptatem. Sed Quis itaque a dolores necessitatibus quo internos tempora. A fugit debitis ab blanditiis nulla et pariatur officiis ut nemo dolore eum dolorem quas qui inventore vitae aut autem cupiditate.</Text>

                                    </Wrapper>
                                </Wrapper>
                                <Spacer height={height(4)}/>
                                <Buttons.Colored
                                    text={'Confirm Booking'}
                                    textStyle={{ left: width(1) }}
                                    buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                                    buttonStyle={{ height: height(7), width: width(90) }}
                                    iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
                                   onPress={()=>{
                                    navigation.navigate(routes.conform);
                                   }}
                                />
                                <Spacer/>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
        
    )
}
const styles = {
    localItemContainer: {
        width: width(40),
        height: height(18),
        borderRadius: width(2),
        backgroundColor: '#F5F5F5',
        justifyContent: 'center',
        alignItems: 'center',
        marginHorizontal: width(2),
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 1 },
        shadowOpacity: 0.1,
        shadowRadius: 2,
        elevation: 2,
    },
    localItemImage: {
        width: width(15),
        height: height(7.5),
    },
    iconStyle: {
        marginHorizontal: width(2),
        height: height(4.5),
        width: width(4.5),
        left: width(3),
    },
    iconText: {
        fontSize: fontSizes.regular,
        fontFamily: appFonts.apptexturbainist,
        color: '#545F71',
        left: width(1),
        top: height(1),
    },
    additionalOfferingText: {
        fontSize: fontSizes.small,
        fontFamily: appFonts.apptexturbainist,
        color: '#545F71',
        marginHorizontal: width(1.5),
        marginVertical: height(0.5),
    },
};

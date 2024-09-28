import React from 'react';
import { Text, Wrapper, Icons, ProfileComponent, ScrollViews, Rating, Buttons } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension';
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import Spacer from '../../../components/spacer';
import { FlatList, Image, ImageBackground, View } from 'react-native';
import { BackgroundImage, color } from '@rneui/base';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function aboutUs() {
    const localdata = [
        { id: '1', imageLocal: appIcons.Success },
        { id: '2', imageLocal: appIcons.aboutus },
        { id: '3', imageLocal: appIcons.apple },
    ];
    const reviewdata = [
        { id: '1', reviewsImage: appIcons.review, reviewsname: 'Van Nga', reviewsuploded: '2 weeks ago', reviewText: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.', rate: '3' },
        { id: '2', reviewsImage: appIcons.review, reviewsname: 'Van Nga', reviewsuploded: '2 weeks ago', reviewText: 'Aliqua id fugiat nostrud irure ex duis ea quis id quis ad et. Sunt qui esse pariatur duis deserunt mollit dolore cillum minim tempor enim.', rate: '5' },

    ]
    const navigation = useNavigation();

    // FlatList Item Component
    const renderLocalItem = ({ item }) => (
        <Wrapper style={styles.localItemContainer}>
            <Image source={item.imageLocal} style={styles.localItemImage} resizeMode='contain' />
        </Wrapper>
    );
    const renderreviews = ({ item }) => (
        <Wrapper style={{ borderRadius: width(2), borderWidth: width(0.3), borderColor: '#A6A6A6', marginHorizontal: width(2) }}>
            <Wrapper style={{ marginHorizontal: width(5), marginVertical: height(3) }}>
                <Wrapper flexDirectionRow>
                    <Image source={item.reviewsImage} style={{ width: width(10), height: height(5), borderRadius: width(5) }} resizeMode='contain' />
                    <Spacer horizontal />
                    <Wrapper>
                        <Text style={{ color: '#263162', fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist }}>{item.reviewsname}</Text>
                        <Text style={{ color: '#263162', fontSize: fontSizes.tiny, fontFamily: appFonts.apptexturbainist }}>{item.reviewsuploded}</Text>
                    </Wrapper>

                </Wrapper>
                <Spacer />
                <Wrapper style={{ width: width(59) }}>
                    <Text style={{ fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist, color: '#263162' }}>{item.reviewText}</Text>
                </Wrapper>
                <Spacer />
                <Wrapper flexDirectionRow>
                    <Rating.Primary
                        value={item.rate}
                    />
                    <Text style={{ fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist, color: '#101010' }}>{item.rate}.0</Text>
                </Wrapper>
            </Wrapper>
        </Wrapper>
    );
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
                                navigation.navigate(routes.home);
                            }}
                        />
                    </Wrapper>
                    <Wrapper style={{ top: height(6), left: width(25) }}>
                        <Text isMediumFont style={{ color: '#101010' }}>Local Profile</Text>
                    </Wrapper>
                </Wrapper>
                <Spacer height={height(7)} />
                <Wrapper>
                    <ProfileComponent.localTopRated
                        localName={'Jhon Doe'}
                        localPrice={'165.3'}
                        containerstyle={{
                            marginHorizontal: width(4),

                            borderRadius: width(2),
                            borderWidth: width(0.5),
                            borderColor: '#234CB029',
                            marginBottom: height(2),
                            shadowColor: '#00000040',          // Shadow color
                            shadowOffset: {
                              width: 0,
                              height: 1,                  // Slight vertical offset
                            },
                            shadowOpacity: 0.1,           // Light transparency
                            shadowRadius: 2,              // Small blur radius for a subtle shadow
                            elevation: 2,   
                        }}
                    />
                    <Spacer height={15} />
                    <Wrapper>
                        <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Expertise</Text>
                        <Spacer height={3} />
                        <Wrapper flexDirectionRow>
                            <Wrapper flexDirectionRow>
                                <Image source={appIcons.archive} style={styles.iconStyle} resizeMode='contain' />
                                <Text style={styles.iconText}>Certified Tour Guide</Text>
                            </Wrapper>
                            <Spacer horizontal />
                            <Wrapper flexDirectionRow style={{ left: width(8) }}>
                                <Image source={appIcons.car} style={styles.iconStyle} resizeMode='contain' />
                                <Text style={styles.iconText}>Local with Transport</Text>
                            </Wrapper>
                        </Wrapper>
                        <Wrapper flexDirectionRow>
                            <Image source={appIcons.people} style={styles.iconStyle} resizeMode='contain' />
                            <Text style={styles.iconText}>Local Enthusiast</Text>
                        </Wrapper>
                    </Wrapper>
                    <Spacer height={15} />
                    <Wrapper>
                        <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Additional Offering</Text>
                        <Spacer height={3} />
                        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>
                            <Text style={styles.additionalOfferingText}>   Lorem Ispum</Text>
                            <Text style={styles.additionalOfferingText}>   Lorem Ispum</Text>
                            <Text style={styles.additionalOfferingText} >   Lorem</Text>
                            <Text style={styles.additionalOfferingText}>   Lorem Ispum</Text>
                            <Text style={styles.additionalOfferingText}>   Lorem Ispum</Text>
                        </Wrapper>
                    </Wrapper>
                    <Spacer height={15} />
                    <Wrapper>
                        <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Experience</Text>
                        <Spacer height={3} />
                        <Wrapper flexDirectionRow>
                            <Image source={appIcons.security} style={styles.iconStyle} resizeMode='contain' />
                            <Text style={styles.iconText}>10+ Years with Local eyes</Text>
                        </Wrapper>
                    </Wrapper>
                    <Spacer height={15} />
                    <Wrapper>

                        <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Unique Local Place</Text>
                        <Spacer height={15} />
                        <Wrapper>
                            <FlatList
                                horizontal
                                data={localdata}
                                renderItem={renderLocalItem}
                                keyExtractor={(item) => item.id}
                                contentContainerStyle={{ paddingBottom: height(5), paddingHorizontal: width(5) }}
                                showsHorizontalScrollIndicator={false}
                            />
                        </Wrapper>
                        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap' }}>

                            <Wrapper flexDirectionRow>
                                <Image source={appIcons.info} style={styles.iconStyle} resizeMode='contain' />
                                <Text style={styles.iconText}>Bali, Indonesia</Text>
                            </Wrapper>
                            <Spacer horizontal />
                            <Wrapper flexDirectionRow >
                                <Image source={appIcons.info} style={styles.iconStyle} resizeMode='contain' />
                                <Text style={styles.iconText}>Phuket, Thiland</Text>

                            </Wrapper>
                            <Wrapper flexDirectionRow >
                                <Image source={appIcons.info} style={styles.iconStyle} resizeMode='contain' />
                                <Text style={styles.iconText}>Italy</Text>

                            </Wrapper>
                            <Wrapper flexDirectionRow >
                                <Image source={appIcons.info} style={styles.iconStyle} resizeMode='contain' />
                                <Text style={styles.iconText}>Jumerah, Dubai</Text>

                            </Wrapper>
                        </Wrapper>
                        <Wrapper>
                            <Spacer height={15} />
                            <Wrapper>
                                <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Ratings & Reviews</Text>
                                <Spacer />
                                <FlatList
                                    horizontal
                                    data={reviewdata}
                                    renderItem={renderreviews}
                                    keyExtractor={(item) => item.id}
                                    contentContainerStyle={{ paddingBottom: height(5), paddingHorizontal: width(3) }}
                                    showsHorizontalScrollIndicator={false}
                                />
                            </Wrapper>
                            <Wrapper>
                                <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>License/ Certificate</Text>
                                <Spacer />
                                <Wrapper style={{ marginHorizontal: width(4), width: width(90), height: height(20) }} >
                                    <BackgroundImage source={appIcons.certificate} resizeMode='contain' style={{ width: width(90), height: height(20) }} />
                                    <Wrapper style={{ width: width(10), height: height(5), bottom: height(16), left: width(75), borderRadius: width(12), borderWidth: width(0.2), borderColor: '#8C8C8C26' }} backgroundColor={'#FFFFFF'} justifyContentCenter alignItemsCenter>
                                        <Image style={{ width: width(5), height: height(5) }} source={appIcons.download} resizeMode='contain' />
                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                            <Wrapper>
                                <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010', left: width(5) }}>Cancelation Policy</Text>
                                <Spacer height={15} />
                                <Wrapper style={{ borderRadius: width(5), borderWidth: width(0.3), borderColor: '#545F71', marginHorizontal: width(3) }}>
                                    <Wrapper style={{ marginHorizontal: width(2), marginVertical: height(2) }}>
                                        <Text style={{ textAlign: 'justify', fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist, color: '#545F71' }}>Lorem ipsum dolor sit amet. Ut esse repellat ut illo nesciunt et consequatur autem ut ipsa omnis qui officia expedita non deserunt voluptatem. Sed Quis itaque a dolores necessitatibus quo internos tempora. A fugit debitis ab blanditiis nulla et pariatur officiis ut nemo dolore eum dolorem quas qui inventore vitae aut autem cupiditate.</Text>

                                    </Wrapper>
                                </Wrapper>
                            </Wrapper>
                            <Spacer height={height(5)} />
                            <Wrapper flexDirectionRow style={{ marginHorizontal: width(9) }}>
                                <TouchableOpacity>
                                    <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(7), width: width(40), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                                        <Wrapper backgroundColor={'white'} style={{ marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(6.5), borderRadius: width(7) }} justifyContentCenter alignItemsCenter>
                                            <Text style={{color:'#003C8C'}} > Check Availability</Text>
                                        </Wrapper>
                                    </Wrapper>
                                </TouchableOpacity>
                               
                                <Buttons.Colored
                                    text={'Book Now'}
                                    
                                    buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                                    buttonStyle={{ height: height(7), width: width(40) }}
                                   onPress={()=>{
                                    navigation.navigate(routes.conformbook);
                                   }}
                                />

                            </Wrapper>
                            <Spacer/>
                        </Wrapper>
                    </Wrapper>
                </Wrapper>
            </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
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
        height: height(3.5),
        width: width(3.5),
        left: width(3),
    },
    iconText: {
        fontSize: fontSizes.small,
        fontFamily: appFonts.apptexturbainist,
        color: '#545F71',
        left: width(1),
        top: height(0.5),
    },
    additionalOfferingText: {
        fontSize: fontSizes.small,
        fontFamily: appFonts.apptexturbainist,
        color: '#545F71',
        marginHorizontal: width(1.5),
        marginVertical: height(0.5),
    },
};

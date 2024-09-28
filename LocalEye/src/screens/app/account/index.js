import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { Buttons, Icons, Images, Text, TextInputs, ScrollViews, Modals, Switches } from '../../../components';
import Spacer from '../../../components/spacer';

import { Image } from 'react-native';
import { color } from '@rneui/base';

export function index(props) {
    const navigation = useNavigation();

    const [modalVisible, setModalVisible] = useState(false);
    const handlePasswordReset = () => {
        setModalVisible(true);
    };
    const handleOutsidePress = () => {
        setModalVisible(false); // Hide modal on outside press
        // Navigate to signin screen
    };
    const [isFilled3, setIsFilled3] = useState(false);
    const [isFilled4, setIsFilled4] = useState(false);
    const [isFilled5, setIsFilled5] = useState(false);
    const [isFilled6, setIsFilled6] = useState(false);
    const handlePress3 = () => {
        setIsFilled3(true);// Toggle the ball's visibility
    };
    const handlePress4 = () => {
        setIsFilled4(!isFilled4);// Toggle the ball's visibility
    };
    const handlePress5 = () => {
        setIsFilled5(!isFilled5);// Toggle the ball's visibility
    };

    const handlePress6 = () => {
        setIsFilled6(!isFilled6);// Toggle the ball's visibility
    };
    return (
        <Wrapper isMain style={{ color: '#FFFFFF' }}>
            <ScrollViews.KeyboardAvoiding>
                <Wrapper flexDirectionRow>
                   
                    <Wrapper style={{ top: height(6), left: width(43) }}>
                        <Text isMediumFont style={{ color: '#101010' }}>Profile</Text>
                    </Wrapper>
                </Wrapper>
                <Wrapper
                    flexDirectionRow
                    alignItemsCenter
                    justifyContentCenter
                    style={{ top: height(8), left: width(4.5) }}
                >
                    <Images.Profile
                        source={appIcons.Success}
                        style={{ height: height(25), width: width(25) }}
                        resizeMode='contain'
                    />
                    <TouchableOpacity>
                        <Wrapper
                            justifyContentCenter
                            alignItemsCenter
                            style={{
                                height: height(6),
                                width: width(12),
                                right: width(8),
                                borderRadius: width(20),
                                top: height(4),
                                backgroundColor: '#F5F5FF',
                                borderWidth: width(0.5),
                                borderColor: '#FFFFFF',
                            }}
                        >
                            <Images.SqareRound
                                source={appIcons.book}
                                style={{ height: height(6), width: width(8) }}
                                alignItemsCenter
                            />
                        </Wrapper>
                    </TouchableOpacity>
                </Wrapper>
                <Text isMediumFont style={{ color: '#101010' ,fontSize:fontSizes.h6,fontFamily:appFonts.apptexturbainist,top:height(8),left:width(38)}}>John Doe</Text>

                <Spacer height={height(15)} />
                <Text style={{ left: width(6), fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010' }}>
                    Profile
                </Text>
                <Buttons.Bordered
                    buttonStyle={{ height: height(7), width: width(90), borderRadius: width(4), borderColor: '#545F71' }}
                    text={'Edit Profile'}
                    textStyle={{ color: '#878787', right: width(23) }}
                    customIcon={appIcons.logout}
                    iconStyle={{ right: width(22) }}
                    customIconRight={appIcons.icon}
                    iconStyleRight={{ left: width(26) }}
                    iconColorRight={'#545F71'}
                    iconColor={'#545F71'}
                    onPress={() => {
                        navigation.navigate(routes.editprfile);
                    }}
                />
                <Spacer />
                <Buttons.Bordered
                    buttonStyle={{ height: height(7), width: width(90), borderRadius: width(4), borderColor: '#545F71' }}
                    text={'Change Password'}
                    textStyle={{ color: '#878787', right: width(16) }}
                    customIcon={appIcons.lock}
                    iconStyle={{ right: width(15) }}
                    customIconRight={appIcons.icon}
                    iconStyleRight={{ left: width(19) }}
                    iconColorRight={'#545F71'}
                    iconColor={'#545F71'}
                    onPress={() => {
                        navigation.navigate(routes.changepassword);
                    }}
                />
                <Spacer />
                <Buttons.Bordered
                    buttonStyle={{ height: height(7), width: width(90), borderRadius: width(4), borderColor: '#545F71' }}
                    text={'Payment Method'}
                    textStyle={{ color: '#878787', right: width(16) }}
                    customIcon={appIcons.card}
                    iconStyle={{ right: width(15) }}
                    customIconRight={appIcons.icon}
                    iconStyleRight={{ left: width(20) }}
                    iconColorRight={'#545F71'}
                    iconColor={'#545F71'}
                    onPress={() => {
                        navigation.navigate(routes.paymentmethod);
                    }}
                />
                <Spacer />
                <Text style={{ left: width(6), fontSize: fontSizes.regular, fontFamily: appFonts.apptexturbainist, color: '#545F71' }}>
                    Language
                </Text>
                <TouchableOpacity onPress={handlePasswordReset}>
                    <Wrapper
                        style={{
                            borderColor: '#545F71',
                            borderWidth: width(0.2),
                            borderRadius: width(5),
                            height: height(7),
                            width: width(90),
                            left: width(5),
                        }}
                        alignItemsCenter
                        flexDirectionRow
                    >
                        <Image
                            source={appIcons.us}
                            style={{ height: height(6), width: width(6), left: width(2.5) }}
                            resizeMode="contain"
                        />
                        <Wrapper
                            gradiantColors={['#B84B62', '#B84B62', '#711A2D']}
                            isGradient
                            style={{
                                height: height(4),
                                width: width(20),
                                left: width(4),
                                borderRadius: width(5),
                            }}
                            alignItemsCenter
                            justifyContentCenter
                        >
                            <Text
                                style={{
                                    fontSize: fontSizes.small,
                                    fontFamily: appFonts.apptexturbainist,
                                    color: '#FFFFFF',
                                    textAlign: 'center',
                                    top: height(0.5),
                                }}
                            >
                                English
                            </Text>
                        </Wrapper>
                        {/* Add other language options similarly if needed */}
                        <Image
                            source={appIcons.dropdown}
                            style={{ height: height(6), width: width(6), left: width(55) }}
                            resizeMode="contain"
                            tintColor={'#545F71'}
                        />
                    </Wrapper>
                </TouchableOpacity>
                <Spacer />
                <Text style={{ left: width(6), fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010' }}>
                    Settings
                </Text>
                <Spacer />
                <Wrapper isBorderedWrapper>
                    <Wrapper justifyContentSpaceBetween flexDirectionRow>
                        <Text style={{fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010' }}>
                            Notifications
                        </Text>
                        <Switches.Primary />
                    </Wrapper>
                    <Spacer/>
                    <Wrapper  justifyContentSpaceBetween flexDirectionRow>
                        <Text style={{ fontSize: fontSizes.medium, fontFamily: appFonts.apptexturbainist, color: '#101010' }}>
                            Privacy Policy
                        </Text>

                        <Switches.Primary
tintColor={''}
                        />
                    </Wrapper>
                </Wrapper>

                <Spacer height={height(10)} />
                <TouchableOpacity>
                                    <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(7), width: width(85), borderRadius: width(7),left:width(8) }} alignItemsCenter justifyContentCenter>
                                        <Wrapper backgroundColor={'white'} style={{ marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(6.5), borderRadius: width(7) }} justifyContentCenter alignItemsCenter flexDirectionRow>
                                            <Text style={{color:'#000000',left:width(3)}} > Switch to Local</Text>
                                            <Wrapper gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{borderRadius:width(7),marginHorizontal:width(2),left:width(23)}}>
                                                <Image
                                                source={appIcons.forward}
                                                style={{width:width(6),height:height(3),color:'#FFFFFF',marginHorizontal:width(2.5),marginVertical:height(1.25)}}
                                                resizeMode='contain'
                                                tintColor={'#FFFFFF'}
                                                />


                                            </Wrapper>
                                        </Wrapper>
                                    </Wrapper>
                                </TouchableOpacity>
<Spacer/>
            </ScrollViews.KeyboardAvoiding>
            <Modals.PopupPrimary
                animationType="slide"
                transparent={true}
                visible={modalVisible}
                onRequestClose={() => {
                    setModalVisible(!modalVisible);
                }}
            >
                <TouchableWithoutFeedback onPress={handleOutsidePress}>

                    <Wrapper style={modalStyles.modalView}>
                        <Wrapper style={styles.container}>
                            <Text style={{ fontSize: fontSizes.h5, fontFamily: appFonts.apptexturbainist, color: 'black' }}>{'                    '}Language</Text>

                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress3} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled3 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>
                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.united}
                                        style={{
                                            marginHorizontal: width(1.5),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    English (US)
                                </Text>
                            </Wrapper>
                            <Spacer />
                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress4} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled4 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>
                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.indo}
                                        style={{
                                            marginHorizontal: width(1.5),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    Indonesia
                                </Text>
                            </Wrapper>
                            <Spacer />
                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress5} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled5 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>
                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.thi}
                                        style={{
                                            marginHorizontal: width(1),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    Thailand
                                </Text>
                            </Wrapper>
                            <Spacer />
                            <Wrapper flexDirectionRow>
                                <Wrapper style={{}}>
                                    <TouchableOpacity onPress={handlePress6} style={styles.container}>
                                        <Wrapper style={styles.outerBullet}>
                                            {isFilled6 && <Wrapper style={styles.innerBullet} />}
                                        </Wrapper>
                                    </TouchableOpacity>
                                </Wrapper>

                                <Wrapper
                                    style={{
                                        borderRadius: width(7),
                                        backgroundColor: '#F3F6FB',
                                        justifyContent: 'center',
                                        alignItems: 'center',
                                    }}
                                >
                                    <Image
                                        source={appIcons.china}
                                        style={{
                                            marginHorizontal: width(1.5),
                                            marginVertical: width(1.5),
                                        }}
                                    />
                                </Wrapper>
                                <Text
                                    style={{
                                        fontSize: fontSizes.regular,
                                        fontFamily: appFonts.apptexturbainist,
                                        color: '#545F71',
                                        top: height(2)
                                    }}
                                >
                                    {'    '}
                                    Chinese
                                </Text>
                            </Wrapper>
                        </Wrapper>


                        <Buttons.Colored
                            text={'Save Changes'}

                            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                            buttonStyle={{ height: height(7), width: width(80), zindex: 1, left: width(6) }}
                            iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
                            onPress={handleOutsidePress}
                        />
                        <Spacer />
                    </Wrapper>


                </TouchableWithoutFeedback>
            </Modals.PopupPrimary>
        </Wrapper>
    );
}

const styles = StyleSheet.create({
    container: {
        padding: 15,

    },
    outerBullet: {
        width: 20,
        height: 20,
        borderRadius: 10,
        borderWidth: 2,
        borderColor: '#B84B62',
        justifyContent: 'center',
        alignItems: 'center',
    },
    innerBullet: {
        width: 10,
        height: 10,
        borderRadius: 5,
        backgroundColor: '#B84B62',
    },
    dropdownWrapper: {
        position: 'absolute',
        top: height(7), // Adjust this value based on your layout
        width: width(41), // Adjust this based on the width of your dropdown input
        // Ensure the dropdown is above other components
    },
    dropdownContainer: {
        backgroundColor: 'white',
        zIndex: 1000, // Adjust this value as needed
        elevation: 5000, // For Android
    },
    dropdown: {
        borderColor: '#545F71',
        borderWidth: 1,
        borderRadius: 5,
        backgroundColor: '#fafafa',
    },
});
const modalStyles = StyleSheet.create({

    modalBackground: {
        flex: 1,
        justifyContent: 'flex-end',
        alignItems: 'center',

    },
    modalView: {
        width: '100%',
        height: height(50),
        backgroundColor: 'white',
        borderTopLeftRadius: 35,
        borderTopRightRadius: 35,



    },
    modalText1: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 24,
        fontWeight: 'bold',
        color: '#101010'
    },
    modalText: {
        marginBottom: 15,
        textAlign: 'center',
        fontSize: 15,
    },
});

export default index;
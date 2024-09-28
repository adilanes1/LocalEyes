import React, { useState } from 'react';
import { Text, Wrapper, Icons, Buttons, TextInputs, ScrollViews, Modals } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension';
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import Spacer from '../../../components/spacer';
import { Image, StyleSheet, TouchableWithoutFeedback } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
const languages = [
  { language: 'English (US)', flag: appIcons.united }, { language: 'Indonesia', flag: appIcons.indo }, { language: 'Thailand', flag: appIcons.thi }, { language: 'Chinese', flag: appIcons.china }
];
const flags = [appIcons.united, appIcons.indo, appIcons.thi, appIcons.china];

export default function AboutUs() {
  const navigation = useNavigation();
  const [showBallForLanguages, setShowBallForLanguages] = useState({});
  const [modalVisible, setModalVisible] = useState(false);
  const handlePasswordReset = () => {
    setModalVisible(true);
  };
  const handleOutsidePress = () => {
    setModalVisible(false); // Hide modal on outside press
    // Navigate to signin screen
  };
  const [isFilled, setIsFilled] = useState(false);
  const [isFilled1, setIsFilled1] = useState(false);
  const [isFilled2, setIsFilled2] = useState(false);
  const [isFilled3, setIsFilled3] = useState(false);
  const [isFilled4, setIsFilled4] = useState(false);
  const [isFilled5, setIsFilled5] = useState(false);
  const [isFilled6, setIsFilled6] = useState(false);
  const handlePress = () => {
    setIsFilled(!isFilled);
  };
  const handlePress3 = () => {
    setIsFilled3(true);// Toggle the ball's visibility
  };
  const handlePress4 = () => {
    setIsFilled4(!isFilled4);// Toggle the ball's visibility
  };
  const handlePress1 = () => {
    setIsFilled1(!isFilled1);
  };
  const handlePress2 = () => {
    setIsFilled2(!isFilled2);
  };
  const handlePress5 = () => {
    setIsFilled5(!isFilled5);// Toggle the ball's visibility
  };

  const handlePress6 = () => {
    setIsFilled6(!isFilled6);// Toggle the ball's visibility
  };

  const [preferences, setPreferences] = useState([
    { id: 'dining', label: 'Dining', icon: appIcons.dinnig, selected: false },
    { id: 'history', label: 'History', icon: appIcons.history, selected: false },
    { id: 'shopping', label: 'Shopping', icon: appIcons.shopping, selected: false },
    { id: 'art', label: 'Art', icon: appIcons.art, selected: false },
    { id: 'nightLife', label: 'Night Life', icon: appIcons.nightLife, selected: false },
    { id: 'culture', label: 'Culture', icon: appIcons.culture, selected: false },
    { id: 'nature', label: 'Nature', icon: appIcons.nature, selected: false },
    { id: 'sightseeing', label: 'Sightseeing', icon: appIcons.sightseeing, selected: false },
  ]);

  // Local Attributes state
  const [localAttributes, setLocalAttributes] = useState([
    { id: 'couple', label: 'Couple', icon: appIcons.coupleGradient, selected: false },
    { id: 'family', label: 'Family', icon: appIcons.childGradient, selected: false },
  ]);

  // Handler to toggle preference selection
  const handlePreferencePress = (id) => {
    setPreferences((prevPreferences) =>
      prevPreferences.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  // Handler to toggle local attribute selection
  const handleLocalAttributePress = (id) => {
    setLocalAttributes((prevAttributes) =>
      prevAttributes.map((item) =>
        item.id === id ? { ...item, selected: !item.selected } : item
      )
    );
  };

  return (
    <Wrapper isMain  backgroundColor={'white'}>
 <Wrapper >
      <ScrollViews.KeyboardAvoiding>
        {/* Header */}
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
                navigation.navigate(routes.trip);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(18) }}>
            <Text isMediumFont style={{ color: '#101010' }}>
              Select Your Preferences
            </Text>
          </Wrapper>
        </Wrapper>
        <Spacer height={height(10)} />
        <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist, left: width(10), bottom: height(2) }}>
          Local Expertise Selection
        </Text>
        <Spacer />
        <Wrapper flexDirectionRow style={{ bottom: height(5), marginHorizontal: width(4.5) }}>
          <Wrapper style={{ top: height(3.2) }}>
            <TouchableOpacity onPress={handlePress} style={styles.container}>
              <Wrapper style={styles.outerBullet}>
                {isFilled && <Wrapper style={styles.innerBullet} />}
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>


          <Wrapper style={{ top: height(4), width: width(80) }}>
            <Text style={{ color: '#545F71', fontSize: fontSizes.regular, fontFamily: appFonts.apptexbalo }}>
              Certified Tour Guide
            </Text>
            <Text style={{ color: '#A6A6A6', fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist }}>
              Professional Tour Guide with Certification and License
            </Text>
          </Wrapper>

        </Wrapper>
        <Spacer height={height(6)} />
        <Wrapper flexDirectionRow style={{ bottom: height(5), marginHorizontal: width(4.5) }}>
          <Wrapper style={{ top: height(3.2) }}>
            <TouchableOpacity onPress={handlePress1} style={styles.container}>
              <Wrapper style={styles.outerBullet}>
                {isFilled1 && <Wrapper style={styles.innerBullet} />}
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>


          <Wrapper style={{ top: height(3), width: width(80) }}>
            <Text style={{ color: '#545F71', fontSize: fontSizes.regular, fontFamily: appFonts.apptexbalo }}>
              10+ Local Years
            </Text>
            <Text style={{ color: '#A6A6A6', fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist }}>
              Highly Experienced Local with over 10 years of Residency
            </Text>
          </Wrapper>

        </Wrapper>
        <Spacer height={height(6)} />
        <Wrapper flexDirectionRow style={{ bottom: height(5), marginHorizontal: width(4.5) }}>
          <Wrapper style={{ top: height(3.2) }}>
            <TouchableOpacity onPress={handlePress2} style={styles.container}>
              <Wrapper style={styles.outerBullet}>
                {isFilled2 && <Wrapper style={styles.innerBullet} />}
              </Wrapper>
            </TouchableOpacity>
          </Wrapper>


          <Wrapper style={{ top: height(3), width: width(80) }}>
            <Text style={{ color: '#545F71', fontSize: fontSizes.regular, fontFamily: appFonts.apptexbalo }}>
              Local Enthusiast
            </Text>
            <Text style={{ color: '#A6A6A6', fontSize: fontSizes.small, fontFamily: appFonts.apptexturbainist }}>
              Locals with a Focus on Unique & Personal Experiences
            </Text>
          </Wrapper>

        </Wrapper>
        {/* Filters Title */}
        <Wrapper flexDirectionRow>
          <Image
            source={appIcons.filter}
            style={{ width: width(9), height: height(9), top: height(6), left: width(5) }}
            resizeMode="contain"
          />
          <Text
            style={{
              fontSize: fontSizes.h3,
              top: height(7.5),
              left: width(5),
              color: '#101010',
            }}
          >
            Filters
          </Text>
        </Wrapper>
        <Spacer height={height(7)} />

        {/* Language Section */}
        <Text isInputTitle style={{ left: width(6), color: '#545F71' }}>
          Language
        </Text>
        <TouchableOpacity onPress={handlePasswordReset}>
          <Wrapper
            style={{
              borderColor: '#545F71',
              borderWidth: width(0.3),
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

        {/* Preferences Section */}
        <Text
          style={{
            fontSize: fontSizes.medium,
            color: '#101010',
            fontFamily: appFonts.apptexturbainist,
            padding: width(6),
          }}
        >
          Preferences
        </Text>
        <TextInputs.Colored
          borderColor={'#D6D6D6'}
          customIconLeft={appIcons.sreach}
          inputContainerStyle={{
            borderColor: '#D6D6D6',
            backgroundColor: 'white',
            borderWidth: width(0.5),
          }}
          iconColorLeft={'#A6A6A6'}
          placeholder={'Search'}
          placeholderTextColor={'#A6A6A6'}
        />
        <Spacer />

        {/* Preferences Buttons */}
        <Wrapper flexDirectionRow style={{ flexWrap: 'wrap', marginHorizontal: width(3) }}>
          {preferences.map((item) => (
            <Wrapper
              key={item.id}
              style={{ marginHorizontal: width(2), marginVertical: width(2) }}
            >
              <TouchableOpacity onPress={() => handlePreferencePress(item.id)}>
                <Wrapper
                  gradiantColors={['#B84B62', '#B84B62', '#711A2D']}
                  isGradient
                  style={{ height: height(7), borderRadius: width(7) }}
                  alignItemsCenter
                  justifyContentCenter
                >
                  <Wrapper
                    gradiantColors={
                      item.selected ? ['#B84B62', '#B84B62', '#711A2D'] : ['white', 'white']
                    }
                    isGradient={item.selected}
                    backgroundColor={'white'}
                    style={{
                      marginHorizontal: width(0.2),
                      marginVertical: height(0.3),
                      height: height(6.5),
                      borderRadius: width(7),
                      flexDirection: 'row',
                    }}
                    justifyContentCenter
                    alignItemsCenter
                  >
                    <Image
                      source={item.icon}
                      style={{
                        height: height(5),
                        width: width(5),
                        left: width(3),
                        tintColor: item.selected ? 'white' : '#B84B62',
                      }}
                      resizeMode="contain"
                    />
                    <Text
                      style={{
                        color: item.selected ? 'white' : '#B84B62',
                        marginHorizontal: width(1),
                        top: item.selected ? height(1.5) : height(0),
                      }}
                    >
                      {' '}{`   ${item.label} `}
                    </Text>
                  </Wrapper>
                </Wrapper>
              </TouchableOpacity>
            </Wrapper>
          ))}
        </Wrapper>

        {/* Locals Attributes Section */}
        <Text
          style={{
            fontSize: fontSizes.medium,
            color: '#101010',
            fontFamily: appFonts.apptexturbainist,
            padding: width(6),
          }}
        >
          Locals Attributes
        </Text>
        <Wrapper flexDirectionRow style={{ marginHorizontal: width(2) }}>
          {localAttributes.map((item) => (
            <Wrapper
              key={item.id}
              style={{ marginHorizontal: width(2), marginVertical: width(2) }}
            >
              <TouchableOpacity onPress={() => handleLocalAttributePress(item.id)}>
                <Wrapper
                  gradiantColors={['#B84B62', '#B84B62', '#711A2D']}
                  isGradient
                  style={{ height: height(7), borderRadius: width(7) }}
                  alignItemsCenter
                  justifyContentCenter
                >
                  <Wrapper
                    gradiantColors={
                      item.selected ? ['#B84B62', '#B84B62', '#711A2D'] : ['white', 'white']
                    }
                    isGradient={item.selected}
                    backgroundColor={'white'}
                    style={{
                      marginHorizontal: width(0.2),
                      marginVertical: height(0.3),
                      height: height(6.5),
                      borderRadius: width(7),
                      flexDirection: 'row',
                    }}
                    justifyContentCenter
                    alignItemsCenter
                  >
                    <Image
                      source={item.icon}
                      style={{
                        height: height(5),
                        width: width(5),
                        left: width(3),
                        tintColor: item.selected ? 'white' : '#B84B62',
                      }}
                      resizeMode="contain"
                    />
                    <Text
                      style={{
                        color: item.selected ? 'white' : '#B84B62',
                        marginHorizontal: width(1),
                        top: item.selected ? height(1) : height(0),
                      }}
                    >
                      {' '} {`  ${item.label} `}
                    </Text>
                  </Wrapper>
                </Wrapper>
              </TouchableOpacity>
            </Wrapper>
          ))}
        </Wrapper>
        <Wrapper flexDirectionRow>
          <Image source={appIcons.sort} style={{
            height: height(7),
            width: width(7),
            left: width(3),
            top: height(1)
          }} resizeMode='contain' />
          <Text style={{ fontSize: fontSizes.h3, top: height(2), left: width(5), color: '#101010' }}>Sort</Text>
        </Wrapper>
        <Spacer />
        <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist, left: width(10) }}>
          Price
        </Text>
        <Spacer />
        <Wrapper flexDirectionRow style={{ marginHorizontal: width(4) }}>



          <TextInputs.Colored

            placeholder={'$100'}
            placeholderTextColor={'#878787'}
            title={'Minimum'}
            customIconLeft={appIcons.dollar}
            iconStyleRight={{ right: width(2) }}
            titleStyle={{ left: width(2), color: '#545F71' }}
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
        <Spacer />
        <Wrapper>
          <Spacer />
          <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist, left: width(10), bottom: height(2) }}>
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
            titleStyle={{ left: width(6), color: '#545F71' }}
            inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(80), left: width(5) }}
          />
          <Spacer />
          <Text style={{ fontSize: fontSizes.medium, color: '#101010', fontFamily: appFonts.apptexturbainist, left: width(10) }}>
            Featured
          </Text>
          <Spacer />
          <TextInputs.Colored

            placeholder={'Select'}
            placeholderTextColor={'#878787'}
            customIconLeft={appIcons.madle}
            title={'Select Featured'}
            iconStyleRight={{ right: width(2) }}
            customIconRight={appIcons.dropdown}
            editable={false}
            titleStyle={{ left: width(6), color: '#545F71' }}
            inputContainerStyle={{ borderColor: '#545F71', backgroundColor: '#FFFFFF', borderWidth: width(0.2), width: width(80), left: width(5) }}
          />
        </Wrapper>
        <Spacer />
        {/* Spacer and Next Button */}
        <Spacer height={height(10)} />
        <Buttons.Colored
          text={'Next'}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(85), left: width(3) }}
          onPress={() => {
            navigation.navigate(routes.matchResult);
          }}
        />
        <Spacer />
      </ScrollViews.KeyboardAvoiding>
     
    </Wrapper>
    <Wrapper>
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
    </Wrapper>
   
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 15,

  },
  containerlan: {

    backgroundColor: '#fff',

  },
  languageItem: {
    flexDirection: 'row',
    alignItems: 'center',
    marginVertical: width(1),
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

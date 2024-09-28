import React, { useState } from 'react';
import { Text, Wrapper, Icons, Buttons, TextInputs, ScrollViews } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension';
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import Spacer from '../../../components/spacer';
import { Image, StyleSheet } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';

export default function AboutUs() {
  const navigation = useNavigation();

  // State for language selection can also be managed similarly if needed

  // Preferences state: an array of preference objects
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
    <Wrapper isMain backgroundColor={'white'}>
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
                navigation.navigate(routes.sreach);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(18) }}>
            <Text isMediumFont style={{ color: '#101010' }}>
              Filters
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
        <TouchableOpacity>
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

        {/* Spacer and Next Button */}
        <Spacer height={height(10)} />
        <Buttons.Colored
          text={'Next'}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(85), left: width(3) }}
          onPress={() => {
            navigation.navigate(routes.yourPreference);
          }}
        />
        <Spacer />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
  container: {
    padding: 10,
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

import React, { useState } from 'react';
import { TouchableOpacity, View, StyleSheet } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appIcons, routes } from '../../../services';
import { Buttons, Icons, Images, Text, TextInputs, ScrollViews, Modals } from '../../../components';
import Spacer from '../../../components/spacer';
import DropDownPicker from 'react-native-dropdown-picker';

export function index(props) {
  const navigation = useNavigation();
  const [open, setOpen] = useState(false);
  const [gender, setGender] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);
  const [items, setItems] = useState([
    { label: 'Male', value: 'male' },
    { label: 'Female', value: 'female' },
    { label: 'Other', value: 'other' },
  ]);

  const toggleDropdown = () => {
    setOpen(!open);
  };

  return (
    <Wrapper isMain style={{ color: '#FFFFFF' }}>
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
                navigation.navigate(routes.createAccount);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(18) }}>
            <Text isMediumFont style={{ color: '#101010' }}>Complete Your Profile</Text>
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
        <Spacer height={height(15)} />
        <TextInputs.Colored
          inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          placeholder={'John Doe'}
          placeholderTextColor={'#9BA5B7'}
          customIconLeft={appIcons.logout}
          // onChangeText={(text) => setEmail(text)}
          title={'Full Name'}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
        />
        <Spacer />
        <Wrapper flexDirectionRow>
          <TextInputs.Colored
            inputContainerStyle={{
              backgroundColor: 'white',
              borderColor: '#545F71',
              borderWidth: 1,
              height: height(7),
              width: width(39),
              alignItem: 'center',
              borderRadius: width(5),
            }}
            placeholder={'1990/01/31'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.edit}
            // onChangeText={(text) => setEmail(text)}
            title={'Date of Birth'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
          <Wrapper >
            <TextInputs.Colored
              inputContainerStyle={{
                backgroundColor: 'white',
                borderColor: '#545F71',
                borderWidth: 1,
                height: height(7),
                width: width(41),
                alignItem: 'center',
                borderRadius: width(5),
              }}
              placeholder={'Select--'}
              placeholderTextColor={'#9BA5B7'}
              customIconRight={appIcons.dropdown}
              iconStyleRight={{ right: width(2) }}
              onPress={toggleDropdown}
              // onChangeText={(text) => setEmail(text)}
              title={'Gender'}
              titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
            />
            <Wrapper >
              {open && (
                <DropDownPicker
                  open={open}
                  value={gender}
                  items={items}
                  setOpen={setOpen}
                  setValue={setGender}
                  setItems={setItems}
                  dropDownContainerStyle={{zIndex:1000,top:-height(17)}}
                
                  dropDownStyle={{ backgroundColor: '#fafafa' }}
                  onChangeItem={(item) => setGender(item.value)}
                />
              )}
            </Wrapper>
          </Wrapper>
        </Wrapper>
        <Spacer />
        <TouchableOpacity onPress={() => {
          navigation.navigate(routes.add);
        }}>
          <TextInputs.Colored
            inputContainerStyle={{
              backgroundColor: 'white',
              borderColor: '#545F71',
              borderWidth: 1,
              height: height(7),
              width: width(90),
              alignItem: 'center',
              borderRadius: width(5),
            }}
            placeholder={'Add here...'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.info}
            customIconRight={appIcons.dropdown}
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Home - Address'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
        </TouchableOpacity>
        <Spacer/>
        <TextInputs.Colored
            inputContainerStyle={{
              backgroundColor: 'white',
              borderColor: '#545F71',
              borderWidth: 1,
              height: height(7),
              width: width(90),
              alignItem: 'center',
              borderRadius: width(5),
            }}
            placeholder={'Phuket, Thiland'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.info}
            customIconRight={appIcons.dropdown}
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Travel Desitination'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
        <Spacer height={height(10)} />
        <Buttons.Colored
          text={'Continue'}
          onPress={() => {
            navigation.navigate(routes.app);
          }}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(90) }}
          iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
        />

      </ScrollViews.KeyboardAvoiding>
      <Modals.PopupPrimary
        animationType="slide"
        transparent={true}
        visible={modalVisible}
        disableBackdropPress={false}
      >
        <Wrapper style={{ left: width(2) }}>
          <TextInputs.Colored
            inputContainerStyle={{ borderColor: 'rgba(197, 197, 197, 1)', backgroundColor: 'white' }}
            placeholder={'Type'}
            placeholderTextColor={'rgba(197, 197, 197, 1)'}
            customIconRight={appIcons.dropdown}
            // onChangeText={(text) => setType(text)}
          />
          <Spacer />
          <Spacer />
          <Buttons.Colored
            text={'Add'}
            buttonColor={['#003C8C', '#09B5EF']}
            buttonStyle={{ height: height(7), width: width(90) }}
            iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
            onPress={() => {
              // Handle add action
            }}
          />
        </Wrapper>
      </Modals.PopupPrimary>
    </Wrapper>
  );
}

const styles = StyleSheet.create({
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

export default index;
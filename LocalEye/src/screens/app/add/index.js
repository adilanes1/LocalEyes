import React, { useState, useEffect } from 'react';
import { View, StyleSheet, Dimensions, ActivityIndicator, ScrollView } from 'react-native';
import Wrapper from '../../../components/wrapper';
import { height, width } from 'react-native-dimension';
import { useNavigation } from '@react-navigation/native';
import { appIcons, routes } from '../../../services';
import { Buttons, Icons, Text, TextInputs, ScrollViews } from '../../../components';
import Spacer from '../../../components/spacer';
import DropDownPicker from 'react-native-dropdown-picker';
import { Country, State, City } from 'country-state-city';

export function index(props) {
    const navigation = useNavigation();
    const [openDropdown, setOpenDropdown] = useState(null); // Track which dropdown is open
    const [selectedCountry, setSelectedCountry] = useState(null);
    const [selectedState, setSelectedState] = useState(null);
    const [selectedCity, setSelectedCity] = useState(null);

    const [countries, setCountries] = useState([]);
    const [states, setStates] = useState([]);
    const [cities, setCities] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        console.log('Fetching countries...');
        const countriesData = Country.getAllCountries();
       
        const subData = countriesData.map(country => ({
            label: country.name,
            value: country.isoCode,
            key: country.isoCode // Ensure unique key
        }));
  
        setCountries(subData);
        setLoading(false);
    }, []);

    useEffect(() => {
        if (countries.length > 0) {
            console.log('Rendering country dropdown with data');
        }
    }, [countries]);

    useEffect(() => {
        if (selectedCountry) {
            const statesData = State.getStatesOfCountry(selectedCountry).map(state => ({
                label: state.name,
                value: state.isoCode,
                key: state.isoCode // Ensure unique key
            }));
            setStates(statesData);
        } else {
            setStates([]);
            setSelectedState(null);
        }
    }, [selectedCountry]);

    useEffect(() => {
        if (selectedState) {
            const citiesData = City.getCitiesOfState(selectedCountry, selectedState).map(city => ({
                label: city.name,
                value: city.id,
                key: city.id // Ensure unique key
            }));
            setCities(citiesData);
        } else {
            setCities([]);
            setSelectedCity(null);
        }
    }, [selectedState, selectedCountry]);

    const handleDropdownToggle = (dropdown) => {
        setOpenDropdown(openDropdown === dropdown ? null : dropdown);
    };

    const screenHeight = Dimensions.get('window').height;

    return (
        <ScrollView
            contentContainerStyle={{ flexGrow: 1 }}
            keyboardShouldPersistTaps="handled"
        >
            <Wrapper isMain style={{ color: '#FFFFFF' }}>
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
                                navigation.navigate(routes.creat);
                            }}
                        />
                    </Wrapper>
                    <Wrapper style={{ top: height(6), left: width(25) }}>
                        <Text isMediumFont style={{ color: '#101010' }}>Add Address</Text>
                    </Wrapper>
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
                        borderRadius: width(5)
                    }}
                    placeholder={'Type here...'}
                    placeholderTextColor={'#9BA5B7'}
                    title={'Street 1'}
                    titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
                />
                <Spacer />
                <TextInputs.Colored
                    inputContainerStyle={{
                        backgroundColor: 'white',
                        borderColor: '#545F71',
                        borderWidth: 1,
                        height: height(7),
                        width: width(90),
                        alignItem: 'center',
                        borderRadius: width(5)
                    }}
                    placeholder={'Type here...'}
                    placeholderTextColor={'#9BA5B7'}
                    title={'Street 2'}
                    titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
                />
                <Spacer />
                <Wrapper flexDirectionRow>
                    <Wrapper style={{ flex: 1 }}>
                        <TextInputs.Colored
                            inputContainerStyle={{
                                backgroundColor: 'white',
                                borderColor: '#545F71',
                                borderWidth: 1,
                                height: height(7),
                                width: width(41),
                                alignItem: 'center',
                                borderRadius: width(5)
                            }}
                            placeholder={'Select--'}
                            placeholderTextColor={'#9BA5B7'}
                            customIconRight={appIcons.dropdown}
                            iconStyleRight={{ right: width(2) }}
                            onPress={() => handleDropdownToggle('city')}
                            title={'City'}
                            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
                        />
                        {openDropdown === 'city' && (
                            <DropDownPicker
                                items={cities}
                                value={selectedCity}
                                setValue={setSelectedCity}
                                open={openDropdown === 'city'}
                                setOpen={() => setOpenDropdown(openDropdown === 'city' ? null : 'city')}
                                onChange={(item) => setSelectedCity(item.value)}
                                containerStyle={styles.dropdownWrapper}
                                style={styles.dropdown}
                                dropDownContainerStyle={styles.dropdownContainer}
                                placeholder={'Select--'}
                            />
                        )}
                    </Wrapper>
                    <Wrapper style={{ flex: 1 }}>
                        <TextInputs.Colored
                            inputContainerStyle={{
                                backgroundColor: 'white',
                                borderColor: '#545F71',
                                borderWidth: 1,
                                height: height(7),
                                width: width(41),
                                alignItem: 'center',
                                borderRadius: width(5)
                            }}
                            placeholder={'Select--'}
                            placeholderTextColor={'#9BA5B7'}
                            customIconRight={appIcons.dropdown}
                            iconStyleRight={{ right: width(2) }}
                            onPress={() => handleDropdownToggle('state')}
                            title={'State'}
                            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
                        />
                        {openDropdown === 'state' && (
                            <DropDownPicker
                                items={states}
                                value={selectedState}
                                setValue={setSelectedState}
                                open={openDropdown === 'state'}
                                setOpen={() => setOpenDropdown(openDropdown === 'state' ? null : 'state')}
                                onChange={(item) => setSelectedState(item.value)}
                                containerStyle={styles.dropdownWrapper}
                                style={styles.dropdown}
                                dropDownContainerStyle={styles.dropdownContainer}
                                placeholder={'Select--'}
                            />
                        )}
                    </Wrapper>
                </Wrapper>

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
                            borderRadius: width(5)
                        }}
                        placeholder={'05520'}
                        placeholderTextColor={'#9BA5B7'}
                        title={'ZIP / Postal Code'}
                        titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
                    />
                    <Wrapper style={{ flex: 1 }}>
                        <TextInputs.Colored
                            inputContainerStyle={{
                                backgroundColor: 'white',
                                borderColor: '#545F71',
                                borderWidth: 1,
                                height: height(7),
                                width: width(41),
                                alignItem: 'center',
                                borderRadius: width(5)
                            }}
                            placeholder={'Select--'}
                            placeholderTextColor={'#9BA5B7'}
                            customIconRight={appIcons.dropdown}
                            iconStyleRight={{ right: width(2) }}
                            onPress={() => handleDropdownToggle('country')}
                            title={'Country'}
                            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
                        />
                        {openDropdown === 'country' && (
                            <DropDownPicker
                            items={countries}
                            value={selectedCountry}
                            setValue={setSelectedCountry}
                            open={openDropdown === 'country'}
                            setOpen={() => setOpenDropdown(openDropdown === 'country' ? null : 'country')}
                            onChange={(item) => setSelectedCountry(item.value)}
                            containerStyle={styles.dropdownWrapper}
                            style={styles.dropdown}
                            dropDownContainerStyle={styles.dropdownContainer}
                            scrollViewProps={{ showsVerticalScrollIndicator: true, scrollEnabled: true }}
                            placeholder={'Select--'}
                        />
                        
                        )}
                    </Wrapper>
                </Wrapper>

                <Spacer height={height(19)} />
                <Buttons.Colored
                    text={'Add'}
                    onPress={() => {
                        navigation.navigate(routes.creat);
                    }}
                    buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                    buttonStyle={{ height: height(7), width: width(90) }}
                    iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
                />
            </Wrapper>
        </ScrollView>
    );
}
const styles = StyleSheet.create({
    dropdownWrapper: {
        position: 'absolute',
        width: '100%',
        zIndex: 1000, // Ensure dropdown appears on top of other elements
    },
    dropdownContainer: {
        zIndex: 1000,
        elevation: 1000,
        borderColor: '#545F71',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
        backgroundColor: '#fafafa',
        maxHeight: 300, // Increase height to fit more items
        overflow: 'hidden', // Ensure items are clipped correctly
    },
    dropdown: {
        borderColor: '#545F71',
        borderWidth: 1,
        borderRadius: 5,
        width: '100%',
    },
});


export default index;

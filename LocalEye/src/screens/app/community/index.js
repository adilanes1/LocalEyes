import React, { useState } from 'react';
import { StyleSheet, Text, Image, TouchableOpacity } from 'react-native';
import MapView, { Marker } from 'react-native-maps';
import { height, width } from 'react-native-dimension';
import { Icons, TextInputs, Wrapper } from '../../../components';
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { useNavigation } from '@react-navigation/native';

const MapScreen = () => {
  const navigation = useNavigation();
  const [region, setRegion] = useState({
    latitude: 37.78825,
    longitude: -122.4324,
    latitudeDelta: 0.0922,
    longitudeDelta: 0.0421,
  });

  const [selectedCity, setSelectedCity] = useState(''); // For city selection

  const cities = [
    { id: 1, name: 'San Francisco', latitude: 37.78825, longitude: -122.4324 },
    { id: 2, name: 'Maldives', latitude: 3.2028, longitude: 73.2207 },
    // Add more cities as needed
  ];

  return (
    <Wrapper style={styles.container}>
      {/* Map in the background */}
      <MapView
        style={StyleSheet.absoluteFillObject} // Map takes full screen and is absolutely positioned
        region={region}
        onRegionChangeComplete={(region) => setRegion(region)}
        customMapStyle={mapStyle}
        showsUserLocation={true}
      >
        {cities.map((city) => (
          <Marker
            key={city.id}
            coordinate={{ latitude: city.latitude, longitude: city.longitude }}
          >
            <Wrapper style={styles.markerWrapper} isGradient gradiantColors={['#B84B62', '#B84B62', '#711A2D']}>
              <Image
                source={appIcons.loca}
                style={styles.markerIcon}
                resizeMode="contain"
                tintColor={'white'}
              />
              <Text style={styles.markerText}>{city.name}</Text>
            </Wrapper>
          </Marker>
        ))}
      </MapView>

      {/* City Dropdown */}
      <Wrapper flexDirectionRow style={{ZIndex:1}}>
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
          <Wrapper style={{ top: height(6), left: width(28) }}>
            <Text isMediumFont style={{ color: '#101010' }}>LocalPin</Text>
          </Wrapper>
        </Wrapper>
      <Text style={styles.cityLabel}>City Selected</Text>
      <Wrapper style={styles.cityDropdown}>
        
        <TextInputs.Colored
          style={styles.cityInput}
          placeholder="Select here"
          value={selectedCity}
          customIconRight={appIcons.dropdown}
          iconStyleRight={{right:width(1)}}
          inputContainerStyle={{backgroundColor:'white'}}
          containerStyle={{backgroundColor:'white'}}
          onChangeText={setSelectedCity}
        />
      </Wrapper>

      {/* Tooltip */}
      <Wrapper style={styles.tooltip}>
        <Text style={{fontSize:fontSizes.h4,fontFamily:appFonts.interBold,color:'#212121'}}>Select a meetup point pin</Text>
        <Wrapper flexDirectionRow>
        <Image
                source={appIcons.loca}
                style={styles.markerIcon}
                resizeMode="contain"
                tintColor={'black'}
              />
              <Wrapper  style={styles.selectedCity} isGradient gradiantColors={['#B84B62', '#B84B62', '#711A2D']}>
              <TouchableOpacity>
          <Text style={styles.cityText}>{selectedCity || 'Maldives'}</Text>
        </TouchableOpacity>
              </Wrapper>
        
        </Wrapper>
       
      </Wrapper>

      {/* Bottom Gradient Button */}
      <TouchableOpacity style={styles.selectButton}>
        <Wrapper
          isGradient gradiantColors={['#B84B62', '#B84B62', '#711A2D']}
          style={styles.gradientButton}
        >
          <Text style={styles.buttonText}>Select</Text>
        </Wrapper>
      </TouchableOpacity>
    </Wrapper>
  );
};

// Grayscale map style
const mapStyle = [
  // Map style configuration (same as before)
  {
    elementType: 'geometry',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    elementType: 'labels.icon',
    stylers: [{ visibility: 'off' }],
  },
  {
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    elementType: 'labels.text.stroke',
    stylers: [{ color: '#f5f5f5' }],
  },
  {
    featureType: 'administrative.land_parcel',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#bdbdbd' }],
  },
  {
    featureType: 'poi',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'poi',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }],
  },
  {
    featureType: 'poi.park',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'road',
    elementType: 'geometry',
    stylers: [{ color: '#ffffff' }],
  },
  {
    featureType: 'road.arterial',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#757575' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'geometry',
    stylers: [{ color: '#dadada' }],
  },
  {
    featureType: 'road.highway',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#616161' }],
  },
  {
    featureType: 'road.local',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
  {
    featureType: 'transit.line',
    elementType: 'geometry',
    stylers: [{ color: '#e5e5e5' }],
  },
  {
    featureType: 'transit.station',
    elementType: 'geometry',
    stylers: [{ color: '#eeeeee' }],
  },
  {
    featureType: 'water',
    elementType: 'geometry',
    stylers: [{ color: '#c9c9c9' }],
  },
  {
    featureType: 'water',
    elementType: 'labels.text.fill',
    stylers: [{ color: '#9e9e9e' }],
  },
];

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  cityDropdown: {
    position: 'absolute',
    top: height(18),
    left: 10,
    right: 10,
    zIndex: 1,
    backgroundColor: 'white',
    padding:width(1),
    marginHorizontal:width(2),
    borderRadius: 10,
    borderColor: '#ddd',
    borderWidth: 1,
  },
  cityLabel: {
    fontSize: 14,
    top:height(6) ,
    left: width(5),
    right: 10,
    zIndex: 1,
   
    color: '#000000',
  },
  cityInput: {
    height:height(7),
    
    borderRadius: 8,
    paddingHorizontal:width(4),
    
  },
  markerWrapper: {
    flexDirection: 'row',
    height: height(3),
    borderRadius: width(2),
    paddingHorizontal: width(1),
    alignItems: 'center',
  },
  markerIcon: {
    height: height(4),
    width: width(4),
  },
  markerText: {
    marginHorizontal: width(2),
    color: 'white',
    fontSize: fontSizes.small,
    fontFamily: appFonts.apptexturbainist,
  },
  tooltip: {
    position: 'absolute',
    top:height(27),
   left:width(2),
   width:width(91),
   padding:width(4),
    backgroundColor: 'white',
   marginHorizontal:width(2),
   
    borderRadius: 10,
    
    borderColor: '#ddd',
    borderWidth: 1,
  },
  tooltipText: {
    fontSize: 16,
    fontFamily: appFonts.apptexturbainist,
    color: '#333',
    marginBottom: 10,
  },
  selectedCity: {
    marginHorizontal:width(1),
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 20,
  },
  cityText: {
    color: 'white',
    fontSize: fontSizes.small,
    fontFamily: appFonts.apptexturbainist,
  },
  selectButton: {
    position: 'absolute',
    bottom: 10,
    left: 20,
    right: 20,
    alignItems: 'center',
  },
  gradientButton: {
    width: '100%',
    height: height(6),
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: width(7),
  },
  buttonText: {
    color: 'white',
    fontSize: fontSizes.regular,
    fontFamily: appFonts.apptexturbainist,
  },
});

export default MapScreen;

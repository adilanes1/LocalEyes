import React, { useState } from 'react';
import { View, FlatList, TouchableOpacity } from 'react-native';
import { Wrapper, Spacer, Buttons, ScrollViews, Text, TimeRemaning, ActiveLocalWithCurreny, Request } from '../../../components';
import { height, width } from 'react-native-dimension';
import { appFonts, fontSizes, appIcons, routes } from '../../../services';
import { useNavigation } from '@react-navigation/native';

const localdata = [
  { id: '1', localname: 'John Doe' },
  { id: '2', localname: 'John Doe' },
  { id: '3', localname: 'John Doe' },
];

const historydata = [
  { id: '1', localname: 'John Doe', buttonback: '#09B5EF1C', border: '#09B5EF', buttontext: 'Completed' },
  { id: '2', localname: 'John Doe', buttonback: '#EF17091C', border: '#EF0909', buttontext: 'Cancelled' },
  { id: '3', localname: 'John Doe', buttonback: '#09B5EF1C', border: '#09B5EF', buttontext: 'Completed' },
];

const initialData = [
  { id: '1', name: 'Active', selected: true }, // Automatically set "Active" as selected initially
  { id: '2', name: 'Requests', selected: false },
  { id: '3', name: 'Scheduled', selected: false },
  { id: '4', name: 'History', selected: false },
];

export default function Home() {
  const navigation = useNavigation();
  
  // Manage state for the list data
  const [data, setData] = useState(initialData);

  const handleItemPress = (id) => {
    // Update the selected state of the clicked item, ensuring only one is selected
    const updatedData = data.map(item =>
      item.id === id ? { ...item, selected: true } : { ...item, selected: false }
    );
    setData(updatedData);
  };

  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => handleItemPress(item.id)}>
      <Wrapper style={{ marginHorizontal: width(1) }}>
        <Wrapper
          gradiantColors={['#B84B62', '#B84B62', '#711A2D']}
          isGradient
          style={{ height: height(7), width: width(30), borderRadius: width(7) }}
          alignItemsCenter
          justifyContentCenter
        >
          <Wrapper
            style={{
              backgroundColor: item.selected ? 'rgba(255, 255, 255, 0)' : '#faeef1',
              marginHorizontal: width(0.4),
              marginVertical: height(0.3),
              height: height(6.5),
              borderRadius: width(7),
            }}
            alignItemsCenter
            justifyContentCenter
            flexDirectionRow
          >
            <Text
              style={{
                fontSize: fontSizes.regular,
                fontFamily: appFonts.apptexbalo,
                color: item.selected ? '#FFFFFF' : '#000000',
              }}
            >
              {item.name}
            </Text>
          </Wrapper>
        </Wrapper>
      </Wrapper>
    </TouchableOpacity>
  );

  return (
    <Wrapper isMain>
      <ScrollViews.KeyboardAvoiding>
        <Wrapper>
          <Spacer />
          <Buttons.Bordered
            buttonStyle={{ height: height(7), width: width(90), borderRadius: width(4), borderColor: '#D6D6D6' }}
            text={'Search Country, City, Town'}
            textStyle={{ color: '#878787', right: width(11) }}
            customIcon={appIcons.sreach}
            iconStyle={{ right: width(10) }}
            customIconRight={appIcons.filter}
            iconStyleRight={{ left: width(10) }}
            iconColorRight={'#B84B62'}
            onPress={() => {
              navigation.navigate(routes.sreach);
            }}
          />
          <Spacer size={3} />
          <FlatList
            horizontal
            data={data}
            renderItem={renderItem}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: height(5) }}
          />
        </Wrapper>

        <Spacer />
        <Wrapper>
          {data[0].selected && (
            <>
              <TimeRemaning.TimeRemaining />
              <Spacer />
              <ActiveLocalWithCurreny.localTopRated
                localName={'John Doe'}
                localPrice={'$13'}
                buttonText={'Active'}
                activbutstyle={{ backgroundColor: '#7CE1161C', borderColor: '#7CE116', color: 'black' }}
                buttcolor={'black'}
                localImage={appIcons.review}
                textproductcontainer={{ height: height(7), width: width(55) }}
                localDiscription={'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.'}
                containerstyle={{ padding: width(2), marginHorizontal: width(2), width: width(95) }}
              />
              <Spacer />
              <Wrapper flexDirectionRow>
                <Buttons.Bordered
                  text={'Cancel'}
                  tintColor={'#EF0909'}
                  buttonStyle={{ height: height(5), width: width(35), borderColor: '#EF0909', color: 'black', left: width(5) }}
                />
                <Buttons.Colored
                  text={'Mark Done'}
                  buttonColor={['#B84B62', '#B84B62', '#711A2D']}
                  buttonStyle={{ height: height(5), width: width(35) }}
                />
              </Wrapper>
            </>
          )}
          
          {data[1].selected && (
            <FlatList
              data={localdata}
              renderItem={({ item }) => (
                <Request.localTopRated
                  localName={'John Doe'}
                  localPrice={'$13'}
                  buttonText={'Pending'}
                  buttcolor={'black'}
                  activbutstyle={{ backgroundColor: '#EFCA091C', borderColor: '#FEC62E', color: 'black' }}
                  localImage={appIcons.review}
                  textproductcontainer={{ height: height(7), width: width(55) }}
                  localDiscription={'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.'}
                  containerstyle={{ padding: width(2), marginHorizontal: width(2), width: width(95) }}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: height(5) }}
            />
          )}

          {data[2].selected && (
            <FlatList
              data={localdata}
              renderItem={({ item }) => (
                <ActiveLocalWithCurreny.localTopRated
                  localName={item.localname}
                  localPrice={'$13'}
                  buttonText={'Upcoming'}
                  activbutstyle={{ backgroundColor: '#09B5EF1C', borderColor: '#09B5EF', color: 'black' }}
                  buttcolor={'black'}
                  localImage={appIcons.review}
                  textproductcontainer={{ height: height(7), width: width(55) }}
                  localDiscription={'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.'}
                  containerstyle={{ padding: width(2), marginHorizontal: width(2), width: width(95) }}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: height(5) }}
            />
          )}

          {data[3].selected && (
            <FlatList
              data={historydata}
              renderItem={({ item }) => (
                <ActiveLocalWithCurreny.localTopRated
                  localName={'John Doe'}
                  localPrice={'$13'}
                  buttonText={item.buttontext}
                  buttcolor={'black'}
                  activbutstyle={{ backgroundColor: item.buttonback, borderColor: item.border, color: 'black' }}
                  localImage={appIcons.review}
                  textproductcontainer={{ height: height(7), width: width(55) }}
                  localDiscription={'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.'}
                  containerstyle={{ padding: width(2), marginHorizontal: width(2), width: width(95) }}
                />
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: height(5) }}
            />
          )}
        </Wrapper>
        <Spacer />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

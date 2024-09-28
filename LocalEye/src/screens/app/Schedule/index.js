import React, { useState } from 'react';
import { Text, Wrapper, Icons, Spacer, TimePicker, HourPicker, Buttons } from '../../../components';
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension';
import { Calendar } from 'react-native-calendars';
import { appFonts, fontSizes, routes } from '../../../services';
import { Image, ScrollView, TouchableOpacity, View ,StyleSheet} from 'react-native';

import CustomLeftArrowIcon from '../../../assets/images/Icon.png';
import CustomRightArrowIcon from '../../../assets/images/iconshape.png';

export default function AboutUs() {
  const navigation = useNavigation();
  const [selected, setSelected] = useState('');
  const [date, setDate] = useState(new Date());
  const [isFilled, setIsFilled] = useState(false);
  const today = new Date().toISOString().split('T')[0];
  const nextDay = new Date();
  nextDay.setDate(new Date().getDate() + 1);
  const nextDayString = nextDay.toISOString().split('T')[0];
  const handlePress = () => {
    setIsFilled(!isFilled);
  };
  const onChange = (event, selectedDate) => {
    const currentDate = selectedDate || date;
    setDate(currentDate);
  };

  const renderArrow = (direction) => (
    <Wrapper
      style={{
        height: height(5),
        width: width(9),
        justifyContent: 'center',
        alignItems: 'center',
      }}
    >
      {direction === 'left' ? (
        <Image source={CustomLeftArrowIcon} style={{ width: width(5), height: height(3) }} resizeMode='contain' />
      ) : (
        <Image source={CustomRightArrowIcon} style={{ width: width(5), height: height(3) }} resizeMode='contain' />
      )}
    </Wrapper>
  );

  return (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <Wrapper isMain backgroundColor={'white'}>
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
          <Wrapper style={{ top: height(6), left: width(30) }}>
            <Text isMediumFont style={{ color: '#101010' }}>Schedule</Text>
          </Wrapper>
        </Wrapper>
        <Spacer height={height(9)} />
        <Wrapper style={{borderColor:'#D7D7D7',borderWidth:width(0.5),borderRadius:width(5),marginHorizontal:5,padding:4}}>
          <Calendar
            onDayPress={day => {
              setSelected(day.dateString);
            }}
            markedDates={{
              [today]: { selected: selected === today, customStyles: {
                container: { backgroundColor: '#B84B62' },
                text: { color: 'white' }
              }},
              [nextDayString]: { selected: selected === nextDayString, customStyles: {
                container: { backgroundColor: '#F5F5F5' },
                text: { color: '#000' }
              }},
              [selected]: {
                selected: true,
                selectedColor: 'transparent',
                customStyles: {
                  container: {
                    borderWidth: 2,
                    borderColor: '#B84B62',
                    backgroundColor: '#FFFFFF',
                  },
                  text: {
                    color: 'black',
                  },
                },
              },
            }}
            theme={{
              selectedDayBackgroundColor: 'transparent', 
              selectedDayTextColor: '#FF6347',
            }}
            markingType={'custom'}
            renderArrow={renderArrow}
          />
        </Wrapper>
        <Spacer height={height(5)} />
        <Wrapper style={{ alignItems: 'center' }}>
          <Text isMediumFont style={{ color: '#101010',right:width(30) ,fontSize:fontSizes.medium,fontFamily:appFonts.apptexbalo}}>Starting Time</Text>
          <Spacer/>
           <Wrapper style={{borderColor:'#D7D7D7',borderRadius:width(4),borderWidth:width(0.5),width:width(80)}}>
           <TimePicker.TimePicker/>

           </Wrapper>
            
          
        </Wrapper>
        <Spacer height={height(5)} />
        <Wrapper style={{ alignItems: 'center' }}>
          <Text  style={{ color: '#101010',right:width(25),fontSize:fontSizes.medium,fontFamily:appFonts.apptexbalo }}>How many hours?</Text>
          <Spacer/>
           <Wrapper style={{borderColor:'#D7D7D7',borderRadius:width(4),borderWidth:width(0.5),width:width(80)}}>
           <HourPicker.TimePicker/>

           </Wrapper>
            
          
        </Wrapper>
        <Spacer height={height(3)}/>
        <Wrapper flexDirectionRow style={{ bottom: height(5), marginHorizontal: width(4.5) }}>
  <Wrapper style={{ top: height(3.2) }}>
    <TouchableOpacity onPress={handlePress} style={styles.container}>
      <Wrapper style={styles.outerBullet}>
        {isFilled && <Wrapper style={styles.innerBullet} />}
      </Wrapper>
    </TouchableOpacity>
  </Wrapper>


  <Wrapper style={{ top: height(4.5), width: width(80) }}>
    <Text style={{ color: '#545F71', fontSize: fontSizes.regular, fontFamily: appFonts.apptexbalo }}>
    Select Multiple Days
    </Text>
    
  </Wrapper>

</Wrapper>
<Spacer/>
<Buttons.Colored
            text={'Next'}
           
            
            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
            buttonStyle={{ height: height(7), width: width(90) }}
           onPress={()=>{
            navigation.navigate(routes.trip);
           }}
          />
          <Spacer/>
      </Wrapper>
    </ScrollView>
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

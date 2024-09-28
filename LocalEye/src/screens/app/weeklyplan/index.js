import React,{useState} from 'react';
import { Text, Wrapper, Icons, ScrollViews, TextInputs, Buttons } from '../../../components';
import { useNavigation, useRoute } from '@react-navigation/native'; // Import useRoute
import { height, width } from 'react-native-dimension';
import { appFonts, appIcons, fontSizes, routes } from '../../../services';

import { Calendar } from 'react-native-calendars';
import Spacer from '../../../components/spacer';
import { Image } from 'react-native';
import CustomLeftArrowIcon from '../../../assets/images/Icon.png';
import CustomRightArrowIcon from '../../../assets/images/iconshape.png';
import { color } from '@rneui/base';
export default function aboutUs() {
    const navigation = useNavigation();
    const [selected, setSelected] = useState('');
    const [date, setDate] = useState(new Date());
    const route = useRoute();
    const today = new Date().toISOString().split('T')[0];
    const nextDay = new Date();
    nextDay.setDate(new Date().getDate() + 1);
    const nextDayString = nextDay.toISOString().split('T')[0]; // Use useRoute hook to access route params
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
    // Access the Weekname from route params
    const { weekname } = route.params || {}; 

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
                            navigation.navigate(routes.weeklyplan);
                        }}
                    />
                </Wrapper>
                <Wrapper style={{ top: height(6), left: width(30) }}>
                    <Text isMediumFont style={{ color: '#101010' }}>{weekname}</Text>
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
        <Spacer/>
        <Wrapper flexDirectionRow justifyContentSpaceBetween style={{marginHorizontal:width(4)}}>
<Text  style={{fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist,color:'#101010',fontWeight:'bold'}}>Time Slot</Text>
        <Image source={appIcons.chip} style={{height:height(5),width:width(25)}} resizeMode='contain'/>
        </Wrapper>
        <Spacer/>
        <Wrapper flexDirectionRow>
        <TextInputs.Colored
            inputContainerStyle={{
              backgroundColor: 'white',
              borderColor: '#545F71',
              borderWidth: 1,
              height: height(7),
              width: width(40),
              alignItem: 'center',
              borderRadius: width(5),
            }}
            placeholder={'00:900 am'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.clock}
           
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Starting Time'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
          <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,top:height(5)}}>-</Text>
           <TextInputs.Colored
            inputContainerStyle={{
              backgroundColor: 'white',
              borderColor: '#545F71',
              borderWidth: 1,
              height: height(7),
              width: width(40),
              alignItem: 'center',
              borderRadius: width(5),
            }}
            placeholder={'11:00 am'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.clock}
           
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Ending Time'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
        </Wrapper>
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
            placeholder={'$13'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.dollar}
           
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Starting Time'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
          <Spacer/>
          <Wrapper flexDirectionRow style={{marginHorizontal:width(2)}} justifyContentSpaceBetween>
<Image source={appIcons.infoCricle} style={{height:height(5),width:width(5),left:width(4),bottom:height(1)}} resizeMode='contain'/>
<Wrapper style={{width:width(85)}}> 
<Text style={{fontSize:fontSizes.small,fontFamily:appFonts.apptexturbainist}}>Tips make up a significant proportion of earning so, a lower rate may be beneficial</Text>

</Wrapper>
          </Wrapper>
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
            placeholder={'Select here...'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.timer}
           
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Time Zone'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
          <Spacer/>
          <Text style={{fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist,fontWeight:'bold',color:'#101010',left:width(5)}}>Transport</Text>
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
            placeholder={'Car'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.car}
           
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Transport Preferences'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
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
            placeholder={'$13'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.dollar}
           
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Transport Charges'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' }}
          />
           <Spacer/>
           <Buttons.Colored
          text={'Save Changes'}
          onPress={() => {
            navigation.navigate(routes.avaliablity);
          }}
          buttonColor={['#B84B62', '#B84B62', '#711A2D']}
          buttonStyle={{ height: height(7), width: width(90) }}
          iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(32) }}
        />
        <Spacer/>
        </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    );
}

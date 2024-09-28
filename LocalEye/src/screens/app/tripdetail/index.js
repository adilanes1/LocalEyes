
import React from 'react'
import { Text, Wrapper, Icons, Buttons, TextInputs, CheckBoxes, ScrollViews } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes, sizes } from '../../../services';
import { CheckBox, color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image, TouchableOpacity } from 'react-native';
import { useHooks } from './hooks';

export default function aboutUs() {
  const navigation = useNavigation();
  const { isChecked, toggleCheckbox } = useHooks();
  return (
    <Wrapper isMain backgroundColor={'white'}>
        <ScrollViews.KeyboardAvoiding>
            <Wrapper>
      <Wrapper flexDirectionRow >
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
            buttonSize={{ height: height(5), width: width(10) }}
            onPress={() => {
              navigation.navigate(routes.home);
            }}
          />
        </Wrapper>
        <Wrapper style={{ top: height(6), left: width(25) }}>
          <Text isMediumFont style={{ color: '#101010' }}> Add Trip Details</Text>
        </Wrapper>
       
      </Wrapper>
      <Spacer height={height(7)}/>
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
            editable={false}
            placeholder={'Phuket, Thilland'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.info}
            customIconRight={appIcons.dropdown}
            iconStyleRight={{ right: width(2) }}
            iconColorLeft={'#545F71'}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Destination'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium}}
          />
     <Spacer height={height(3)}/>
     <Text isInputTitle style={{left:width(6),color:'#545F71'}}>Select LocalPin</Text>
     <TouchableOpacity onPress={()=>{
      navigation.navigate(routes.community)
     }}>
     <Wrapper style={{
        borderColor:'#545F71',
        borderWidth:width(0.3),
        borderRadius:width(5),
        height:height(7),
        width:width(90),
        left:width(5)
      }}
      alignItemsCenter
      flexDirectionRow>
<Image source={appIcons.loca} style={{height:height(6),width:width(6),left:width(2.5)}} resizeMode='contain'  tintColor={'#545F71'}/>
     <Wrapper gradiantColors={['#B84B62','#B84B62','#711A2D']}isGradient  style={{height:height(4),width:width(25),left:width(4),borderRadius:width(5)}} alignItemsCenter justifyContentCenter>
<Text  style={{fontSize:fontSizes.small,fontFamily:appFonts.apptexturbainist,color:'#FFFFFF',textAlign:'center',top:height(0.5)}}>City Area 1</Text>
     </Wrapper>
<Image source={appIcons.icon} style={{height:height(2),width:width(2),left:width(53)}} resizeMode='contain'  tintColor={'#545F71'}/>

      </Wrapper>
     </TouchableOpacity>
      
          <Wrapper style={{ flexDirection: 'row' }}>
            <CheckBoxes.Primary
            text={' Select LocalPin Later'}
          checkedIconColor={'#B84B62'}
          uncheckedIconColor={'#711A2D'}
          onPress={toggleCheckbox}
          checked={isChecked}
            />
            {/* <Text style={{ top: height(2)}} isMedium>
           
            </Text> */}
          </Wrapper>
          <TouchableOpacity onPress={()=>{
            navigation.navigate(routes.schedule);
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
            editable={false}
            placeholder={'Feb 17 - 20 | 4 Days'}
            placeholderTextColor={'#9BA5B7'}
            customIconLeft={appIcons.clander}
            customIconRight={appIcons.dropdown}
            iconColorLeft={'#545F71'}
            iconSizeLeft={sizes.icons.small}
            iconColorRight={'#545F71'}
            iconStyleRight={{ right: width(2) }}
            KeyboardAvoiding={'true'}
            // onChangeText={(text) => setEmail(text)}
            title={'Schedule'}
            titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          />
          </TouchableOpacity>
            <Text style={{fontSize:fontSizes.large ,color:'#101010' ,fontFamily:appFonts.apptexturbainist,padding:width(5) }}>
             Who’s Coming?
            </Text>
          <TextInputs.Removedin
           inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          title={'Adults'}
          iconSizeRight={15}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          iconColorRight={'white'}
          iconColorLeft={'#545F71'}
          customIconLeft={appIcons.adult}
          iconStyleRight={{width:width(6),height:height(4),left:width(1),top:height(0.8)}}
          />
          <Spacer/>
          <TextInputs.Removedin
           inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          title={'Toddler'}
          iconSizeRight={15}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          iconColorRight={'white'}
          iconColorLeft={'#545F71'}
          customIconLeft={appIcons.child}
          iconStyleRight={{width:width(6),height:height(4),left:width(1),top:height(0.8)}}
          />
          <Spacer/>
          <TextInputs.Removedin
           inputContainerStyle={{
            backgroundColor: 'white',
            borderColor: '#545F71',
            borderWidth: 1,
            height: height(7),
            width: width(90),
            alignItem: 'center',
            borderRadius: width(5),
          }}
          title={'Infant'}
          titleStyle={{ paddingLeft: width(1.5), color: '#545F71' ,fontSize:fontSizes.medium }}
          iconColorRight={'white'}
          iconSizeRight={15}
          iconColorLeft={'#545F71'}
          customIconLeft={appIcons.baby}
          iconStyleRight={{width:width(6),height:height(4),left:width(1),top:height(0.8)}}
          />
          <Spacer height={height(2)}/>
           <Buttons.Colored
            text={'Next'}
           
            
            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
            buttonStyle={{ height: height(7), width: width(90) }}
           onPress={()=>{
            navigation.navigate(routes.yourPreference);
           }}
          />
          <Spacer/>
          </Wrapper>
          </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  )
}
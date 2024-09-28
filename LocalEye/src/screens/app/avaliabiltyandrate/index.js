/* eslint-disable no-unused-vars */

import React from 'react'
import { Text, Wrapper, Icons, ScrollViews, Switches } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image, TouchableOpacity } from 'react-native';
import { FlatList } from 'react-native';
const localdata = [
    { id: '1', weekname: 'Monday' ,week:'Week Days' },
    { id: '2', weekname: 'Tuesday' },
    { id: '3', weekname: 'Wednesday' },
    { id: '4', weekname: 'Thursday' },
    { id: '5', weekname: 'Friday' },
    { id: '6', weekname: 'Saturday',week:'Weekends' },
    { id: '7', weekname: 'Sunday' },
  ];
export default function aboutUs() {
    const navigation = useNavigation();
    const renderItem=(item)=>{
        return(
            <Wrapper>
              
                <Text style={{fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist,color:'#101010',fontWeight: 'bold',marginVertical:height(1)}}>{'     '}{item.week}</Text>
      <TouchableOpacity onPress={()=>{
        navigation.navigate(routes.weeklyplan, { weekname: item.weekname});
      }}>        
 <Wrapper isBorderedWrapper >
            <Wrapper flexDirectionRow justifyContentSpaceBetween>
            <Text style={{fontSize:fontSizes.medium,fontFamily:appFonts.apptexturbainist,color:'#131523'}}>
            {'  '}{item.weekname}
            </Text>
            
            <Switches.Primary />
            </Wrapper>
            <Spacer/>
            <Wrapper flexDirectionRow style={{marginHorizontal:width(4)}}>
            <Wrapper  gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(4), width: width(35), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                                                    <Wrapper  style={{ backgroundColor:'white',marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(3.5), borderRadius: width(7) }} alignItemsCenter justifyContentCenter  flexDirectionRow>
                                                        <Image source={appIcons.timenight} style={{height:height(4),width:width(32)}} resizeMode='contain'/>
                                                        
                                                    </Wrapper>
                                                </Wrapper>
                                                <Spacer horizontal/>
                                                <Wrapper  gradiantColors={['#B84B62', '#B84B62', '#711A2D']} isGradient style={{ height: height(4), width: width(35), borderRadius: width(7) }} alignItemsCenter justifyContentCenter>
                                                    <Wrapper  style={{ backgroundColor:'white',marginHorizontal: width(0.4), marginVertical: height(0.3), height: height(3.5), borderRadius: width(7) }} alignItemsCenter justifyContentCenter  flexDirectionRow>
                                                        <Image source={appIcons.timemor} style={{height:height(4),width:width(32)}} resizeMode='contain'/>
            
                                                        
                                                    </Wrapper>
                                                </Wrapper>
            </Wrapper>
            <Spacer/>
            <Text style={{fontSize:fontSizes.small,fontFamily:appFonts.apptexturbainist,color:'#131523'}}>Eastern Time - Us & Canada</Text>
                       <Spacer/>
                        <Wrapper flexDirectionRow>
                            <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,color:'#B84B62',fontWeight: 'bold',}}>
                            $13
                            <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,color:'#131523'}}> /hour</Text> 
                       </Text>
                       <Spacer horizontal/>
                       <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,color:'#B84B62',fontWeight: 'bold',}}>
                       $5
                            <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexturbainist,color:'#131523'}}>  /transport charges</Text> 
                       </Text>
                        </Wrapper>
                        </Wrapper>
                        </TouchableOpacity> 
            </Wrapper>
           
        );
    }
    return (
        <Wrapper isMain backgroundColor={'white'}>
           <ScrollViews.KeyboardAvoiding>
            <Spacer/>
           
            <FlatList
              data={localdata}
              renderItem={({ item }) => (
               renderItem(item)
              )}
              keyExtractor={(item) => item.id}
              contentContainerStyle={{ paddingBottom: height(5) }}
            />
           </ScrollViews.KeyboardAvoiding>
        </Wrapper>
    )
}
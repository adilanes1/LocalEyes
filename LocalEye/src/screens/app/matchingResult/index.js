
import React from 'react'
import { Text, Wrapper, Icons, Buttons, TextInputs, Loaders, Localoprated, ScrollViews } from '../../../components'
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { color } from '@rneui/base';
import Spacer from '../../../components/spacer';
import { Image } from 'react-native';
import { TouchableOpacity } from 'react-native-gesture-handler';
import { FlatList } from 'react-native';
const localdata =[
    {id:'1',imageLocal:appIcons.Success,localname:'John Doe',localprice:'$13 ',rated:'5.0',ratedstar:appIcons.star,localdiscription:'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',localcirtiefied:['Certified Tour Guide','Local with Transport','10+ Year Local','Local Enthusiast']},
    {id:'2',imageLocal:appIcons.aboutus,localname:'John Doe',localprice:'$13 ',rated:'5.0',ratedstar:appIcons.star,localdiscription:'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',localcirtiefied:['Certified Tour Guide','Local with Transport','10+ Year Local','Local Enthusiast']},
    {id:'3',imageLocal:appIcons.apple,localname:'John Doe',localprice:'$13 ',rated:'5.0',ratedstar:appIcons.star,localdiscription:'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',localcirtiefied:['Certified Tour Guide','Local with Transport','10+ Year Local','Local Enthusiast']},
  ]
export default function aboutUs() {
  const navigation = useNavigation();
  return (
    <Wrapper isMain backgroundColor={'white'}>
        <ScrollViews.KeyboardAvoiding>
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
            buttonSize={{ height: height(5), width: width(9) }}
            onPress={() => {
              navigation.navigate(routes.yourPreference);
            }}
          />
        </Wrapper>
        <Wrapper style={{ top: height(6), left: width(20) }}>
          <Text isMediumFont style={{ color: '#101010' }}> Matching Result</Text>
        </Wrapper>
        <TouchableOpacity onPress={()=>{
            navigation.navigate(routes.filter);
        }}>
    <Image source={appIcons.filter} resizeMode='contain' style={{height:height(6),width:width(6),top:height(4),left:width(38)}}/>

        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{
            navigation.navigate(routes.sort);
        }}>
    <Image source={appIcons.sort} resizeMode='contain' style={{height:height(6),width:width(6),top:height(4),left:width(43)}}/>

        </TouchableOpacity>
        <Spacer height={height(5)}/>
<Wrapper style={{borderColor:'#D7D7D7',borderRadius:width(5),borderWidth:width(0.3),top:height(15),right:width(45)}}>
   <Spacer/>
   <Wrapper flexDirectionRow style={{marginHorizontal:width(2.5)}}>
   <Wrapper flexDirectionRow style={{marginHorizontal:width(2.5)}}>
        <Image source={appIcons.info} style={{height:height(4),width:width(4)}} resizeMode='contain' tintColor={'#B84B62'}/>
    <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexbalo,top:height(0.5),color:'#606060'}}>  Bali, Indonesia</Text>
    </Wrapper>
    <Spacer horizontal/>
    <Wrapper flexDirectionRow style={{marginHorizontal:width(9.5)}}>
        <Image source={appIcons.adult} style={{height:height(4),width:width(4)}} resizeMode='contain' tintColor={'#B84B62'}/>
    <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexbalo,top:height(0.5),color:'#606060'}}>  5 guests</Text>
    </Wrapper>
   </Wrapper>
   <Spacer/>
   <Wrapper flexDirectionRow style={{marginHorizontal:width(4.5)}}>
        <Image source={appIcons.clan} style={{height:height(4),width:width(4)}} resizeMode='contain' tintColor={'#B84B62'}/>
    <Text style={{fontSize:fontSizes.regular,fontFamily:appFonts.apptexbalo,top:height(0.5),color:'#606060'}}>  Feb 17-20 | 4 Days | 4 hours</Text>
    </Wrapper>
    <Spacer/>
</Wrapper>
      </Wrapper>
      <Spacer height={height(20)}/>
          <Text isLarge style={{left:width(5),color:'#101010',fontSize:16 }}  >Suggested Locals</Text>
          <Spacer/>
          <FlatList
          vertical
            data={localdata}
            renderItem={({ item }) => (
              
              <Localoprated.localTopRated
              localName={item.localname}
              localPrice={item.localprice}
              localImage={item.localimage}
            textproductcontainer={{height:height(7),width:width(55)}}
              localDiscription={item.localdiscription}
              containerstyle={{padding:width(2)}}
              localdata={item.localcirtiefied}
              />
            )}
            keyExtractor={(item) => item.id}
            contentContainerStyle={{ paddingBottom: height(5) }}
          />
</ScrollViews.KeyboardAvoiding>
    </Wrapper>
  )
}
import React from 'react';
import { View, FlatList, Image, TouchableOpacity } from 'react-native';
import { Wrapper, Spacer, Buttons, ScrollViews,Text, Localoprated, Images, TimeRemaning, ActiveLocal } from '../../../components';
import { useHooks } from './hooks';
import { height, width } from 'react-native-dimension';
import { appIcons, routes, sizes } from '../../../services';
import { color } from '@rneui/base';
import { useNavigation } from '@react-navigation/native';
const data = [
  { id: '1', name: 'Nearby', image: appIcons.trending },
  { id: '2', name: 'Prague', image: appIcons.loaclarea },
  { id: '3', name: 'Brno', image: appIcons.loaclarea},
  { id: '4', name: 'Pilsen', image: appIcons.loaclarea },
  { id: '5', name: 'Ostrava', image: appIcons.loaclarea},
  // Add more items as needed
];
const localdata =[
  {id:'1',imageLocal:appIcons.Success,localname:'John Doe',localprice:'$13 ',rated:'5.0',ratedstar:appIcons.star,localdiscription:'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',localcirtiefied:['Certified Tour Guide','Local with Transport','10+ Year Local','Local Enthusiast']},
  {id:'2',imageLocal:appIcons.aboutus,localname:'John Doe',localprice:'$13 ',rated:'5.0',ratedstar:appIcons.star,localdiscription:'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',localcirtiefied:['Certified Tour Guide','Local with Transport','10+ Year Local','Local Enthusiast']},
  {id:'3',imageLocal:appIcons.apple,localname:'John Doe',localprice:'$13 ',rated:'5.0',ratedstar:appIcons.star,localdiscription:'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.',localcirtiefied:['Certified Tour Guide','Local with Transport','10+ Year Local','Local Enthusiast']},
]

export default function Home() {
  const navigation = useNavigation();
  const {} = useHooks();

  const renderItem = ({ item }) => (
    <TouchableOpacity style={{  alignItems: 'center', top:height(2),left:width(3.5),right:width(2.5)}}>
      <Images.Round size={sizes.images.medium} source={item.image} style={{ marginRight: width(4),borderRadius:width(9) ,resizeMode:'contain'}} />
      <Text  style={{ fontSize: 12, color: '#878787',right:width(1.5) }}>{item.name}</Text>
    </TouchableOpacity>
  );

  return (
    <Wrapper isMain isCenter>
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
            onPress={()=>{
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
        <Buttons.Colored
            text={'Plan My Trip'}
            textStyle={{ left: width(1) }}
            buttonColor={['#B84B62', '#B84B62','#711A2D']}
            buttonStyle={{ height: height(7), width: width(90) }}
            iconStyleRight={{ height: height(6), width: width(11.5), backgroundColor: 'white', justifyContent: 'center', borderRadius: width(8), alignItems: 'center', left: width(31) }}
            onPress={()=>{
              navigation.navigate(routes.trip);
            }}
          />
          <Wrapper>
          <TimeRemaning.TimeRemaining/>
          <Spacer/>
          <ActiveLocal.localTopRated
          localName={'John Doe'}
          
              localPrice={'$13'}
              localImage={appIcons.review}
            textproductcontainer={{height:height(7),width:width(55)}}
              localDiscription={'Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.'}
              containerstyle={{padding:width(2)}}
            
          />
          <Spacer/>
          <Buttons.Bordered
           text={'Cancel'}

                
           tintColor={'#EF0909'}
           buttonStyle={{ height: height(7), width: width(90),borderColor:'#EF0909',color:'black' }}
          />
          </Wrapper>
          

          <Spacer/>
          <Text isLarge style={{left:width(5),color:'#101010',fontSize:16 }}  >Top- Rated Locals</Text>
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
  );
}

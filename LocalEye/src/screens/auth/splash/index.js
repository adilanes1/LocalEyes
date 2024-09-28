import {  Easing, Image, View } from 'react-native'
import React, { useEffect, useRef } from 'react'
import { width, height } from 'react-native-dimension'
import { Spacer, Wrapper,Text } from '../../../components'

import { appIcons } from '../../../services'
import  Animated  from 'react-native-animatable'

export default function index() {
//   const translation= useRef(new Animated.alue(0)).current;
//   useEffect(()=>{
// Animated.timing(translation,{
//   tovalue:300,
//   duration:1000,
//   easing:Easing.inOut(Easing.ease),
//   useNativeDriver:true,
// }).start();
//   },[]);
  return (
    
     <Wrapper alignItemsCenter justifyContentCenter style={{ flex: 1 }}   >
      <Wrapper >
     <Wrapper animation={'zoomIn'}>
      <Image source={appIcons.logo}/>
     </Wrapper>
<Wrapper animation={'fadeIn'}>
  <Text isBoldFont style={{color:'#B84B62'}}>Local Eyes</Text>
</Wrapper>
</Wrapper>
    </Wrapper>

  )
}
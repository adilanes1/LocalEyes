import React, { useState } from 'react';
import { Image, TouchableOpacity } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import { height, width } from 'react-native-dimension';
import Wrapper from '../../../components/wrapper';
import { appIcons, routes } from '../../../services';
import { Icons, Text, ScrollViews } from '../../../components';
import Spacer from '../../../components/spacer';

export default function Index() {
  const navigation = useNavigation();
  const [isTextVisible, setIsTextVisible] = useState(false);

  return (
    <Wrapper isMain style={{ color: '#FFFFFF' }}>
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
                navigation.navigate(routes.help);
              }}
            />
          </Wrapper>
          <Wrapper style={{ top: height(6), left: width(22) }}>
            <Text isMediumFont style={{ color: '#101010' }}>Contact Support</Text>
          </Wrapper>
        </Wrapper>
        <Spacer height={height(7)} />
        <Wrapper style={{ left: width(5), width: width(90) }}>
          <Text isLarge style={{ color: '#000000' }}>We’re here to help you with anything and everything on Local Eyes</Text>
        </Wrapper>
        <Wrapper>
          <Spacer />
          <Text h6 style={{ color: '#000000', left: width(5) ,bottom:height(1) }}>FAQ</Text>
          <Wrapper style={{ width: width(100), borderWidth: width(0.2), borderColor: '#D4D4D4', padding: width(4) }}>
            <Wrapper flexDirectionRow justifyContentCenter>
              <Text style={{ top: height(1.5), right: width(28), color: '#5B5B5B' }}>   What is Local Eyes?</Text>
              <TouchableOpacity onPress={() => setIsTextVisible(!isTextVisible)}>
                <Image source={isTextVisible ? appIcons.minus : appIcons.plus} style={{ height: height(5), width: width(5), left: width(25) }} resizeMode='contain' />
              </TouchableOpacity>
            </Wrapper>
            {isTextVisible && (
              <Text isSmall style={{ color: '#878787', marginTop: height(1) }}>
                Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.
              </Text>
            )}
          </Wrapper>
          <Wrapper style={{ width: width(100), borderWidth: width(0.2), borderColor: '#D4D4D4', padding: width(4) }}>
            <Wrapper flexDirectionRow justifyContentCenter>
              <Text style={{ top: height(1.5), right: width(18), color: '#5B5B5B' }}>Lorem ipsum dolor sit amet.?</Text>
              <TouchableOpacity onPress={() => setIsTextVisible(!isTextVisible)}>
                <Image source={isTextVisible ? appIcons.minus : appIcons.plus} style={{ height: height(5), width: width(5), left: width(18) }} resizeMode='contain' />
              </TouchableOpacity>
            </Wrapper>
            {isTextVisible && (
              <Text isSmall style={{ color: '#878787', marginTop: height(1) }}>
                Lorem ipsum dolor sit amet. Ut galisum dignissimos et rerum dolore est doloribus mollitia in consequatur mollitia ex velit quia et dolor architecto aut suscipit illo! Qui eius veniam id cupiditate consequatur nam corporis aperiam! Aut sunt facere qui voluptatem deleniti eos ipsa consequatur vel quia fugit vel fugit quia.
              </Text>
            )}
          </Wrapper>
        </Wrapper>
        <Spacer height={height(3)} />
      </ScrollViews.KeyboardAvoiding>
    </Wrapper>
  );
}

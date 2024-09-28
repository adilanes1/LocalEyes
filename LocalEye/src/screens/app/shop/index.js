// screens/ChatList.js
import React from 'react';
import { View, Text, FlatList, Image, TouchableOpacity, StyleSheet } from 'react-native';
import { useNavigation } from '@react-navigation/native';
import {height,width} from 'react-native-dimension'
import { appFonts, appIcons, fontSizes, routes } from '../../../services';
import { Wrapper } from '../../../components';
const chatData = [
  { id: '1', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', imageUrl: appIcons.review },
  { id: '2', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', imageUrl: appIcons.review },
  { id: '3', name: 'Aspen Mango', message: 'Lorem ipsum dolor sit amet.', time: '5 mins ago', imageUrl: appIcons.review },
  // Add more users here...
];

const ChatList = () => {
    const navigation = useNavigation();
  const renderItem = ({ item }) => (
    <TouchableOpacity onPress={() => navigation.navigate(routes.chat, { userName: item.name, userImage: item.imageUrl })}>

      <Wrapper style={styles.chatItem}>
        <Image source={ item.imageUrl } style={styles.userImage} />
        <Wrapper style={styles.chatDetails}>
          <Text style={styles.userName}>{item.name}</Text>
          <Text style={styles.lastMessage}>{item.message}</Text>
        </Wrapper>
        <Text style={styles.messageTime}>{item.time}</Text>
      </Wrapper>
    </TouchableOpacity>
  );

  return (
<Wrapper isMain backgroundColor={'white'} >
    <Wrapper>
        <Text style={styles.chat}>
        Chats
        </Text>
    </Wrapper>
<FlatList
      data={chatData}
      renderItem={renderItem}
      keyExtractor={item => item.id}
    />
</Wrapper>
   
  );
};

const styles = StyleSheet.create({
  chatItem: {
    flexDirection: 'row',
    padding: 16,
    borderBottomWidth: 1,
    borderBottomColor: '#ccc',
    alignItems: 'center',
  },
  userImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  chatDetails: {
    flex: 1,
    marginLeft: 16,
  },
  userName: {
    fontSize: 16,
    fontWeight: 'bold',
  },
  lastMessage: {
    color: '#777',
  },
  messageTime: {
    color: '#777',
    top:height(1.5)
  },
 chat: {
    color:'#101010',
    left:width(43),
    marginTop:height(5),
    fontSize:fontSizes.medium,
    fontFamily:appFonts.apptexturbainist,
  },
});

export default ChatList;

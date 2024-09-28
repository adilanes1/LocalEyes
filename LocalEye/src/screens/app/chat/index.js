import React, { useState, useCallback, useEffect } from 'react';
import { View, Text, TouchableOpacity, StyleSheet, Image } from 'react-native';
import { GiftedChat, Bubble, InputToolbar, Send, Avatar } from 'react-native-gifted-chat';
import Icon from 'react-native-vector-icons/FontAwesome';
import { appFonts, appIcons, fontSizes, sizes } from '../../../services';
import { width, height } from 'react-native-dimension';
import Wrapper from '../../../components/wrapper';
import Spacer from '../../../components/spacer';
import { Buttons, Icons } from '../../../components';
import AsyncStorage from '@react-native-async-storage/async-storage';
const ChatScreen = ({ route, navigation }) => {
  const [isTyping, setIsTyping] = useState(false);
  const { userName, userImage } = route.params || {};
  const [messages, setMessages] = useState([]);
  const [userType, setUserType] = useState('');
  useEffect(() => {
    const fetchUserType = async () => {
      const storedKey = await AsyncStorage.getItem('key'); // Fetch 'key' from AsyncStorage
      if (storedKey) {
        setUserType(storedKey);
      }
    };
    fetchUserType();
    setMessages([
      {
        _id: 1,
        text: `Hey!`,
        createdAt: new Date(),
        user: {
          _id: 2,
          name: 'John Doe',
          avatar: appIcons.review, // Random image URL for demo
        },
      },
      {
        _id: 2,
        text: 'Hey!',
        createdAt: new Date(),
        user: {
          _id: 1,
          name: 'Liana Liam',
          avatar: appIcons.review,
        },
      },
    ]);
  }, []);
  const handleInputTextChanged = (text) => {
    setIsTyping(text.length > 0);
  };
  // Message send handler
  const onSend = useCallback((messages = []) => {
    setMessages(previousMessages => GiftedChat.append(previousMessages, messages));
  }, []);

  // Customize avatar with new design
  const renderAvatar = (props) => {
    return (
      <Avatar
        {...props}
        imageStyle={{
          left: styles.avatarImage, // Style for received messages
          right: styles.avatarImage, // Style for sent messages
        }}
      />
    );
  };

  // Customize the chat bubble
  const renderBubble = (props) => {
    const formattedTime = new Date(props.currentMessage.createdAt).toLocaleTimeString([], {
      hour: '2-digit',
      minute: '2-digit',
    });
    return (
      <Wrapper>
        <Bubble
          {...props}
          wrapperStyle={{
            right: {
              backgroundColor: '#B84B62',
              borderRadius: width(5), // Sender bubble style
            },
            left: {
              backgroundColor: '#F2F2F2',
              borderRadius: width(5), // Receiver bubble style
            },
          }}
          textStyle={{
            right: {
              color: '#fff',
              marginHorizontal: width(2),
            },
            left: {
              color: '#000',
              marginHorizontal: width(2),
            },
          }}
          renderTime={() => null} // Hide time inside bubble
        />
        <Text style={styles.timeText}>{formattedTime}</Text>
      </Wrapper>
    );
  };
const renderCard =()=>{
  return(
    <Wrapper isBorderedWrapper style={styles.offerCard}>
        <Image source={userImage} style={styles.offerImage} />
        <View style={styles.offerDetails}>
          <Text style={styles.offerName}>John Doe</Text>
          <Text style={styles.offerCity}>Travel City</Text>
          <Text style={styles.offerDescription}>Lorem ipsum dolor sit amet. Vel facilis sint aut sunt voluptatem.</Text>
          <Spacer />
          <View style={{ flexDirection: 'row' }}>
            <Text style={styles.totalPrice}>Total USD</Text>
            <Text style={styles.priceAmount}>$74.63</Text>
          </View>
          <Spacer />
          <View style={{ flexDirection: 'row' }}>
            <TouchableOpacity style={styles.rejectButton}>
              <Text style={styles.rejectText}>Reject</Text>
            </TouchableOpacity>
            <TouchableOpacity style={styles.acceptWrapper}>
              <Wrapper style={styles.acceptButton} isGradient gradiantColors={['#B84B62', '#711A2D']}>
                <Text style={styles.acceptText}>Accept</Text>
              </Wrapper>
            </TouchableOpacity>
          </View>
        </View>
      </Wrapper>

  );

}
const renderInputToolbar = (props) => (
  <InputToolbar
    {...props}
    renderAccessory={() => (
      <TouchableOpacity style={styles.attachButton}>
        <Icon name="paperclip" size={24} color="#666" />
      </TouchableOpacity>
    )}
    containerStyle={styles.inputToolbar}
   
     // Track input text changes
  />
);
  // Custom send button
  const renderSend = (props) => (
    <Send {...props}>
      <Wrapper style={styles.sendButton} isGradient gradiantColors={['#B84B62', '#711A2D']}>
        <Icon name="arrow-right" size={sizes.icons.tiny} color="#fff" />
      </Wrapper>
    </Send>
  );

  return (
    <Wrapper style={{ flex: 1, backgroundColor: 'white' }}>
      {/* Header with user image, name, and back button */}
      <Wrapper style={styles.header}>
        <TouchableOpacity onPress={() => navigation.goBack()}>
        <Icons.Button
                        iconName={'chevron-left'}
                        iconColor={'black'}
                      buttonStyle={{ height: height(5), width: width(10),borderWidth:width(0.2),borderColor:'#EDEDED' ,borderRadius:width(5)}}
                    />
        </TouchableOpacity>
        <Image source={userImage} style={styles.headerImage} />
        <Text style={styles.userName}>{userName}</Text>
      </Wrapper>
      {userType === 'local' && (
        <Wrapper justifyContentCenter>
          <Buttons.Colored
            text={'Send Customize Offer'}
            buttonColor={['#B84B62', '#B84B62', '#711A2D']}
            buttonStyle={{
              height: height(7),
              width: width(80),
              left: width(5),
              top: height(3),
            }}
            iconStyleRight={{
              height: height(6),
              width: width(11.5),
              backgroundColor: 'white',
              justifyContent: 'center',
              borderRadius: width(8),
              alignItems: 'center',
              left: width(32),
            }}
            iconColorRight={'#B94C63'}
          />
        </Wrapper>
      )}

      {/* Display the offer card separately here */}
      
      

      <GiftedChat
        messages={messages}
        onSend={(messages) => onSend(messages)}
        user={{ _id: 1 }}
        renderAvatarOnTop
        renderAvatar={renderAvatar} // Custom avatar rendering
        renderBubble={renderBubble}
        renderChatFooter={renderCard}
        renderInputToolbar={renderInputToolbar}
        renderSend={renderSend}
      />
    </Wrapper>
  );
};

const styles = StyleSheet.create({
  // Chat UI styles
  inputToolbar: {
    borderTopWidth: 1,
    borderColor: '#E4E4E4',
    paddingVertical: 5,
    paddingHorizontal: 10,
    marginHorizontal: width(6),
    left: width(4),
    backgroundColor: '#B84B621C',
    borderRadius: 50,
    marginVertical: 5,
    flexDirection: 'row',
    alignItems: 'center',
  },
  attachButton: {
    paddingHorizontal: 10,
    top:height(1),
        right: width(95),
  },
  attachmentWrapper: {
   
    top: '90%', // Adjust position based on your screen size
    left: 10,
  
  },
  sendButton: {
  
    borderRadius: 50,
    width: 32,
    height: 32,
    alignItems: 'center',
    justifyContent: 'center',
    marginRight: 10,
  },
  header: {
    
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
  },
  headerImage: {
    width: 40,
    height: 40,
    borderRadius: 10,
    marginLeft: 10,
    left:width(20)
  },
  userName: {
    color: '#101010',
    fontSize: 16,
    left:width(20),
    fontFamily:appFonts.apptexturbainist,
    marginLeft: 10,
  },
  offerCard: {
    flexDirection: 'row',
    backgroundColor: 'white',
    borderRadius: 10,
    padding: 10,
    width: width(85),
    marginVertical: 5,
  },
  offerImage: {
    width: 80,
    height: 80,
    borderRadius: 10,
  },
  offerDetails: {
    flex: 1,
    marginLeft: 10,
    justifyContent: 'space-between',
  },
  offerName: {
    color: '#000000',
    fontSize: 16,
    fontWeight: 'bold',
    fontFamily: appFonts.apptexturbainist,
  },
  offerCity: {
    color: '#101010',
    fontSize: fontSizes.small,
    fontFamily: appFonts.apptexturbainist,
  },
  offerDescription: {
    fontSize: 12,
    color: '#666',
  },
  totalPrice: {
    color: '#B84B62',
    fontFamily: appFonts.apptexturbainist,
    fontSize: fontSizes.regular,
    right: width(20),
  },
  priceAmount: {
    left: width(25),
    color: '#B84B62',
    fontFamily: appFonts.apptexturbainist,
    fontSize: fontSizes.regular,
    right: width(5),
  },
  rejectButton: {
    borderRadius: width(5),
    borderColor: '#EF0909',
    borderWidth: width(0.3),
    alignContent: 'center',
    alignItems: 'center',
    width: width(35),
    right: width(20),
  },
  rejectText: {
    color: '#EF0909',
    fontSize: fontSizes.small,
    marginHorizontal: width(2),
    marginVertical: height(1),
    fontFamily: appFonts.apptexturbainist,
  },
  acceptWrapper: {
    right: width(15),
  },
  acceptButton: {
    borderRadius: width(7),
    alignContent: 'center',
    alignItems: 'center',
    width: width(35),
  },
  acceptText: {
    color: '#FFFFFF',
    fontSize: fontSizes.small,
    marginHorizontal: width(2),
    marginVertical: height(1),
    fontFamily: appFonts.apptexturbainist,
  },
  avatarImage: {
    borderRadius: 10, // Customize avatar shape
    width: 30, // Customize size
    height: 30,
  },
});

export default ChatScreen;

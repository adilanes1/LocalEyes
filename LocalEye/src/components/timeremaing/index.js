import React, { useState, useEffect } from 'react';
import { View, Text, StyleSheet } from 'react-native';
import { Spacer } from '..';
import {height,width} from 'react-native-dimension';
import { appFonts, fontSizes } from '../../services';

export const TimeRemaining = () => {
  const calculateTimeLeft = () => {
    const targetDate = new Date('2024-09-30T00:00:00'); // Set your target date
    const currentDate = new Date();
    const difference = targetDate - currentDate;

    let timeLeft = {};

    if (difference > 0) {
      timeLeft = {
        days: Math.floor(difference / (1000 * 60 * 60 * 24)),
        hours: Math.floor((difference / (1000 * 60 * 60)) % 24),
        minutes: Math.floor((difference / 1000 / 60) % 60),
        seconds: Math.floor((difference / 1000) % 60),
      };
    }
    return timeLeft;
  };

  const [timeLeft, setTimeLeft] = useState(calculateTimeLeft());

  useEffect(() => {
    const timer = setTimeout(() => {
      setTimeLeft(calculateTimeLeft());
    }, 1000);

    return () => clearTimeout(timer);
  });

  const renderDigit = (digit) => {
    const digitStr = digit.toString().padStart(2, '0'); // Ensuring it's always two digits
    return (
        <View>
<View style={styles.digitBox}>

        <Text style={styles.digitTextuper}>{digitStr}</Text>

      </View>
      <Spacer height={2}/>
      <View style={styles.digitBox}>
        <Text style={styles.digitTextdown}>{digitStr}</Text>
      </View>
        </View>
      
    );
  };

  const renderSeparator = () => (
    <Text style={styles.separator}>:</Text>
  );

  return (
    <View style={styles.container}>
      <Text style={styles.title}>TIME REMAINING</Text>
      <View style={styles.timerContainer}>
        {renderDigit(timeLeft.days || 0)}
        {renderSeparator()}
        {renderDigit(timeLeft.hours || 0)}
        {renderSeparator()}
        {renderDigit(timeLeft.minutes || 0)}
        {renderSeparator()}
        {renderDigit(timeLeft.seconds || 0)}
      </View>
      <View style={styles.labelContainer}>
        <Text style={styles.label}>Days</Text>
        <Text style={styles.label}>Hours</Text>
        <Text style={styles.label}>Mins</Text>
        <Text style={styles.label}>Secs</Text>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    marginTop: 20,
    alignItems: 'center',
    paddingHorizontal: 20,
  },
  title: {
    fontSize: 24,
   fontFamily:appFonts.apptexturbainist,
    color: '#B84B62',
    marginBottom: 15,
  },
  timerContainer: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#B84B62',
    borderRadius: 15,
    marginHorizontal:width(0),
    padding:width(3)
  },
  digitBox: {
    backgroundColor: '#F76987',
    borderRadius: 10,
    width: width(18),
    height:height(7) ,
    justifyContent: 'center',
    alignItems: 'center',
 

    overflow:'hidden',
  },
  digitTextuper: {
    fontSize: 50,
    fontFamily:appFonts.apptexturbainist,

    color: '#fff',
    top:height(2.5),
    overflow:'hidden',
  },
  digitTextdown: {
    fontSize: 50,
    fontFamily:appFonts.apptexturbainist,
    
    color: '#fff',
    bottom:height(4.5),
    overflow:'visible',
  },
  separator: {
    fontSize: 32,
    color: '#fff',
    marginHorizontal: 5,
  },
  labelContainer: {
    flexDirection: 'row',
    justifyContent: 'space-around',
    marginTop: 10,
    width: '100%',
  },
  label: {
    fontSize: fontSizes.medium,
    color: '#B84B62',
    textAlign: 'center',
    fontFamily:appFonts.interBold,
    width: 60, // Matches the width of the digit box
  },
});

export default TimeRemaining;

import React, { useState } from 'react';
import { View, Text, Dimensions } from 'react-native';
import WheelPicker from 'react-native-wheel-scrollview-picker';

const { width } = Dimensions.get('window');

export default function AboutUs() {
  const [time, setTime] = useState({ hour: '06', minute: '30', period: 'PM' });

  const hours = Array.from({ length: 12 }, (_, i) => (i + 1).toString().padStart(2, '0'));
  const minutes = Array.from({ length: 60 }, (_, i) => i.toString().padStart(2, '0'));
  const periods = ['AM', 'PM'];

  return (
    <View style={{ flex: 1, justifyContent: 'center', alignItems: 'center', backgroundColor: '#fff' }}>
      <View style={{
        flexDirection: 'row',
        justifyContent: 'space-between',
        alignItems: 'center',
        width: width * 0.8,
        backgroundColor: '#F5F5F5',
        borderRadius: 10,
        padding: 10
      }}>
        <WheelPicker
          data={hours}
          selectedItem={hours.indexOf(time.hour)}
          onItemSelected={(index) => setTime({ ...time, hour: hours[index] })}
          itemTextStyle={{ fontSize: 24, color: '#000' }}
          selectedItemTextStyle={{ fontSize: 28, fontWeight: 'bold', color: '#000' }}
          style={{ width: width * 0.25 }}
        />
        <Text style={{ fontSize: 28, fontWeight: 'bold', color: '#000' }}>:</Text>
        <WheelPicker
          data={minutes}
          selectedItem={minutes.indexOf(time.minute)}
          onItemSelected={(index) => setTime({ ...time, minute: minutes[index] })}
          itemTextStyle={{ fontSize: 24, color: '#000' }}
          selectedItemTextStyle={{ fontSize: 28, fontWeight: 'bold', color: '#000' }}
          style={{ width: width * 0.25 }}
        />
        <WheelPicker
          data={periods}
          selectedItem={periods.indexOf(time.period)}
          onItemSelected={(index) => setTime({ ...time, period: periods[index] })}
          itemTextStyle={{ fontSize: 24, color: '#000' }}
          selectedItemTextStyle={{ fontSize: 28, fontWeight: 'bold', color: '#000' }}
          style={{ width: width * 0.25 }}
        />
      </View>
      <Text style={{ marginTop: 20, fontSize: 20 }}>
        Selected Time: {`${time.hour}:${time.minute} ${time.period}`}
      </Text>
    </View>
  );
}

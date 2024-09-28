/* eslint-disable react/react-in-jsx-scope */
import { useState } from "react";
import ScrollPicker from "react-native-wheel-scrollview-picker";
import { width } from 'react-native-dimension';
import { Text, Wrapper } from "..";
import { StyleSheet } from "react-native";
import { appFonts, colors, fontSizes } from "../../services";

export const TimePicker = () => {
    // Helper function to format hours
    const formatHour = (hour) => hour.toString(); // No leading zero for hours
    //const formatMinute = (unit) => (unit < 10 ? `0${unit}` : unit.toString()); // Leading zero for minutes

    const now = new Date();
    const currentHour = formatHour(now.getHours() % 12 || 12);

    const [selectedHour, setSelectedHour] = useState(currentHour);

    // Generate hours options (1 to 12, without leading zeros)
    const hours = Array.from({ length: 12 }, (_, i) => formatHour(i + 1));

    const handleHourChange = (data) => {
        setSelectedHour(data);
    };

    const getItemTextStyle = (item, selectedValue) => {
        return item === selectedValue
            ? styles.selectedText
            : styles.unSelectedText;
    };

    return (
        <Wrapper alignItemsCenter style={styles.container}>
            <ScrollPicker
                dataSource={hours}
                selectedIndex={hours.indexOf(selectedHour)}
                onValueChange={handleHourChange}
                wrapperHeight={180}
                wrapperBackground={colors.appColor1}
                itemHeight={60}
                renderItem={(item) => (
                    <Text style={getItemTextStyle(item, selectedHour)}>
                        {item === selectedHour ? ` ${item} hours` : item}  {/* Only show "Hour:" for selected */}
                    </Text>
                )}
                highlightColor={colors.border}
                highlightBorderWidth={width(0.2)}
            />
        </Wrapper>
    );
};

const styles = StyleSheet.create({
    container: {
        borderRadius: width(2),
        borderColor: '#FFFFFF',
        borderWidth: width(0.5),
        marginHorizontal: width(2),
    },
    selectedText: {
        color: colors.appTextColor18,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6,
    },
    unSelectedText: {
        color: colors.appTextColor19,
        fontFamily: appFonts.interMedium,
        fontSize: fontSizes.h6,
    },
});

export default TimePicker;

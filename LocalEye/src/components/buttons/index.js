/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */
import React from 'react';
import { View, TouchableOpacity, ActivityIndicator ,StyleSheet} from 'react-native';
import { Icon } from '@rneui/base';
import LinearGradient from 'react-native-linear-gradient';
import { height, totalSize, width } from 'react-native-dimension';
import { colors, appStyles, fontSizes, sizes } from '../../services';
import * as Icons from '../icons';
import Wrapper from '../wrapper';
import Text from '../text';
import ButtonGroupAnimated from './buttonGroupAnimated';

// LinearGradientButton Component
const LinearGradientButton = ({
  colors,
  start,
  end,
  style,
  children,
  ...props
}) => {
  return (
    <TouchableOpacity {...props}>
      <LinearGradient
        colors={colors}
        start={start}
        end={end}
        style={style}
      >
        {children}
      </LinearGradient>
    </TouchableOpacity>
  );
};

export const Colored = ({
  text, isLoading, activityColor, animation, onPress, disabled, buttonStyle, iconNameRight, iconTypeRight, right, iconColorRight, iconSizeRight, onPressIconRight, customIconRight, iconColorLeft, iconStyleLeft, onPressIconLeft, left, customIconLeft, iconStyleRight, iconNameLeft, iconTypeLeft, iconSizeLeft,
  customIcon, textStyle, iconName, iconType, iconSize, buttonColor, iconStyle,
  tintColor, direction
}) => {
  // Ensure buttonColor is an array of colors for gradient or use a default gradient
  const gradientColors = disabled ? [colors.appColor11 + '80', colors.appColor11 + '80'] : Array.isArray(buttonColor) ? buttonColor : [colors.appColor1, colors.appColor2];

  return (
    <LinearGradientButton
      onPress={onPress}
      disabled={isLoading ? true : disabled}
      colors={gradientColors}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 0 }}
      style={[appStyles.buttonColord, { borderRadius: sizes.buttonRadius, height: sizes.buttonHeight }, buttonStyle]}
    >
      <Wrapper animation={animation} style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
        {
          left ?
            left
            :
            customIconLeft ?
              <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                <Icons.Custom icon={customIconLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor1} containerStyle={iconStyleLeft} />
              </Wrapper>
              :
              iconNameLeft ?
                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                  <Icon name={iconNameLeft} type={iconTypeLeft} size={iconSizeLeft ? iconSizeLeft : sizes.icons.medium} color={iconColorLeft ? iconColorLeft : colors.appTextColor4} iconStyle={iconStyleLeft} onPress={onPressIconLeft} />
                </Wrapper>
                :
                null
        }
        {
          isLoading ?
            <ActivityIndicator
              color={activityColor ? activityColor : colors.appBgColor11}
              size={"small"}
            />
            :
            <Text isButtonMedium style={[{ color: tintColor ? tintColor : colors.appTextColor6, }, textStyle]}>{text}</Text>
        }
        <View style={{}}>
          {
            right ?
              right
              :
              customIconRight ?
                <Wrapper style={{ alignItems: 'center', marginLeft: sizes.marginHorizontal / 2 }}>
                  <Icons.Custom icon={customIconRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor1} containerStyle={iconStyleRight} />
                </Wrapper>
                :
                iconNameRight ?
                  <Wrapper style={{ alignItems: 'center', marginRight: sizes.marginHorizontal }}>
                    <Icon name={iconNameRight} type={iconTypeRight} size={iconSizeRight ? iconSizeRight : sizes.icons.medium} color={iconColorRight ? iconColorRight : colors.appTextColor5} iconStyle={iconStyleRight} onPress={onPressIconRight} />
                  </Wrapper>
                  :
                  null
          }
        </View>
      </Wrapper>
    </LinearGradientButton>
  );
};

// Other existing components remain unchanged...

export const ColoredSmall = ({right, left,text, onPress, buttonStyle, customIcon, direction, textStyle, iconName, iconType, iconSize, iconColor, iconStyle,customIconRight,iconColorRight,iconNameRight,iconStyleRight }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), backgroundColor: colors.appColor1 }, buttonStyle]}>
      <Wrapper style={{ flexDirection: direction ? direction : 'row', alignItems: 'center' }}>
        {
          left ?
          left
          :
          customIcon ?
            <Icons.Custom
              icon={customIcon}
              size={iconSize ? iconSize : totalSize(2)}
              color={iconColor ? iconColor : colors.appTextColor6}
            />
            :
            iconName ?
              <Icon
                name={iconName ? iconName : "email-outline"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : totalSize(2)}
                color={iconColor ? iconColor : colors.appTextColor6}
                iconStyle={[{}, iconStyle]}
              />
              :
              null
        }
        <Text isButtonRegular style={[{ color: colors.appTextColor6, }, textStyle]}>  {text}  </Text>
        {right?
        right
        :
          customIconRight ?
            <Icons.Custom
              icon={customIconRight}
              size={iconSize ? iconSize : totalSize(2)}
              iconColorRight={iconColorRight ? iconColorRight : colors.appTextColor6}
            />
            :
            iconNameRight ?
              <Icon
                name={iconName ? iconName : "email-outline"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : totalSize(2)}
                iconColorRight={iconColorRight ? iconColorRight : colors.appTextColor6}
                iconStyleRight={[{}, iconStyleRight]}
              />
              :
              null
        }
      </Wrapper>
    </TouchableOpacity>
  );
};

export const Bordered = ({ right,customIconRight,iconColorRight,iconNameRight,iconStyleRight,text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[appStyles.buttonBorderd, { borderRadius: sizes.buttonRadius, height: sizes.buttonHeight, borderColor: tintColor ? tintColor : colors.appColor2 }, buttonStyle]}>
      <Wrapper style={{ flexDirection: 'row', alignItems: 'center' }}>
        {
          customIcon ?
            <Icons.Custom
              icon={customIcon}
              size={iconSize ? iconSize : totalSize(3)}
              color={iconColor ? iconColor : null}
              containerStyle={[{ marginRight: width(2.5) }, iconStyle]}
            />
            :
            iconName ?
              <Icon
                name={iconName ? iconName : "email-outline"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : totalSize(3)}
                color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                iconStyle={[{ marginRight: width(2.5) }, iconStyle]}

              />
              :
              null
        }
        <Text isButtonMedium style={[{ color: tintColor ? tintColor : colors.appColor2, }, textStyle]}>{text}</Text>
        {right?
        right
        :
          customIconRight ?
            <Icons.Custom
              icon={customIconRight}
              size={iconSize ? iconSize : totalSize(2)}
              iconColorRight={iconColorRight ? iconColorRight : colors.appTextColor6}
              containerStyle={[{ marginRight: width(2.5) }, iconStyleRight]}
              
            />
            :
            iconNameRight ?
              <Icon
                name={iconName ? iconName : "email-outline"}
                type={iconType ? iconType : "material-community"}
                size={iconSize ? iconSize : totalSize(2)}
                iconColorRight={iconColorRight ? iconColorRight : colors.appTextColor6}
                iconStyleRight={[{}, iconStyleRight]}
              />
              :
              null
        }
      </Wrapper>
    </TouchableOpacity>
  );
};

export const BorderedSmall = ({ text, onPress, buttonStyle, rowReverse, textStyle, iconName, iconType, iconSize, iconColor, iconStyle, tintColor }) => {
  return (
    <TouchableOpacity onPress={onPress} style={[{ borderRadius: 15, paddingHorizontal: width(5), paddingVertical: height(1), borderColor: tintColor ? tintColor : colors.appColor1, borderWidth: 1 }, buttonStyle]}>
      <Wrapper style={{ flexDirection: rowReverse ? 'row-reverse' : 'row', alignItems: 'center' }}>
        {
          iconName ?
            <Icon
              name={iconName ? iconName : "email-outline"}
              type={iconType ? iconType : "material-community"}
              size={iconSize ? iconSize : totalSize(2)}
              color={tintColor ? tintColor : colors.appColor1}
              iconStyle={[{ marginHorizontal: width(2) }, iconStyle]}
            />
            :
            null
        }
        <Text isButtonRegular style={[{ color: tintColor ? tintColor : colors.appColor1, fontSize: fontSizes.regular }, textStyle]}>{text}</Text>
      </Wrapper>
    </TouchableOpacity>
  );
};
export const GrBordered = ({
  text, onPress, buttonStyle, textStyle, iconName, customIcon, iconType, iconSize, iconColor, iconStyle, tintColor, gradientColors
}) => {
  return (
    <View style={{ margin: width(2) }}>
      <LinearGradient
        colors={gradientColors ? gradientColors : [colors.appColor1, colors.appColor2]}
        style={[styles.gradientBorder, { borderRadius: sizes.buttonRadius, height: sizes.buttonHeight }]}
      >
        <TouchableOpacity onPress={onPress} style={[styles.innerButton, { borderRadius: sizes.buttonRadius }, buttonStyle]}>
          <Wrapper style={{ flexDirection: 'row', alignItems: 'center' }}>
            {
              customIcon ?
                <Icons.Custom
                  icon={customIcon}
                  size={iconSize ? iconSize : totalSize(3)}
                  color={iconColor ? iconColor : null}
                  containerStyle={[{ marginRight: width(2.5) }, iconStyle]}
                />
                :
                iconName ?
                  <Icon
                    name={iconName ? iconName : "email-outline"}
                    type={iconType ? iconType : "material-community"}
                    size={iconSize ? iconSize : totalSize(3)}
                    color={iconColor ? iconColor : tintColor ? tintColor : colors.appColor1}
                    iconStyle={[{ marginRight: width(2.5) }, iconStyle]}
                  />
                  :
                  null
            }
            <Text isButtonMedium 
             colors={gradientColors ? gradientColors : [colors.appColor1, colors.appColor2]}
            style={ textStyle}>{text}</Text>
          </Wrapper>
        </TouchableOpacity>
      </LinearGradient>
    </View>
  );
};
const styles = StyleSheet.create({
  gradientBorder: {
    padding: 2, // Adjust padding to control border thickness
  
  height:height(5),
  width:width(35),
    borderRadius: sizes.buttonRadius,
  },
  innerButton: {
    flex: 1,
    backgroundColor: colors.appBgColor1,
    justifyContent: 'center',
    alignItems: 'center',
  },
});
export { ButtonGroupAnimated };

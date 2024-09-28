import React from 'react';
import { View, Text, StyleSheet, TouchableOpacity } from 'react-native';
import { colors, sizes, appStyles } from '../../services';
import * as Icons from '../icons';

export const Primary = ({
  textStyle,
  containerStyle,
  text,
  checked,
  onPress,
  checkedIconName,
  uncheckedIconName,
  checkIconType,
  uncheckIconType,
  checkIconsize,
  checkedIconColor,
  uncheckedIconColor
}) => {
  const defaultCheckedIconName = checkedIconName || 'checkbox-outline';
  const defaultUncheckedIconName = uncheckedIconName || 'checkbox-blank-outline';
  const defaultCheckIconType = checkIconType || 'material-community';
  const defaultUncheckIconType = uncheckIconType || 'material-community';
  const defaultCheckIconsize = checkIconsize || sizes.icons.medium;

  return (
    <TouchableOpacity onPress={onPress} style={[styles.checkboxContainer, containerStyle]}>
      <View style={styles.checkboxContainer}>
        <View style={styles.iconContainer}>
          <Icons.WithText
            text={text}
            iconName={checked ? defaultCheckedIconName : defaultUncheckedIconName}
            iconType={checked ? defaultCheckIconType : defaultUncheckIconType}
            iconSize={defaultCheckIconsize}
            tintColor={checked ? checkedIconColor : uncheckedIconColor}
            textStyle={[styles.checkboxText, textStyle]}
          />
        </View>
      </View>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  checkboxContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    padding: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  iconContainer: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  checkboxText: {
    ...appStyles.textRegular,
    // ...appStyles.textGray
  }
});

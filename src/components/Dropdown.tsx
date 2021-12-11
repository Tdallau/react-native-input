import React, { Component } from "react";
import { StyleSheet, Text, View } from "react-native";
// @ts-ignore
import { Picker } from '@react-native-picker/picker';

type Props = {
  style: any, 
  placeholder: string,
  required: boolean,
  onSelect: (index: number, option: any) => void,
  value: string | undefined,
  options: Array<{value: string | number, label: string}>
}

export default class Dropdown extends Component<Props, {options: Array<any>}> {
  state = {
    options: [],
  };
  static getDerivedStateFromProps(nextProps: any, prevState: any) {
    if (nextProps.hasOwnProperty('options') && nextProps.options) {
      return {
        options: nextProps.options,
      };
    }
    return null;
  }
  render() {
    return (
      <View style={[{ width: '100%', marginTop: 8 }, this.props.style]}>
        <Text style={styles.placeholder}>
          {this.props.placeholder}
          {this.props.required && this.props.placeholder !== '' ? '*' : ''}
        </Text>
        <View style={styles.pickerHolder}>
          <Picker
            onValueChange={(option: any, index: number) => this.props.onSelect(index, option)}
            style={picker}
            placeholder={this.state.options[0]}
            // Icon={() => <FontAwesomeIcon icon={faChevronDown} />}
            items={this.state.options.slice(1)}
            value={this.props.value}
            // useNativeAndroidPickerStyle={false}
          />
        </View>
      </View>
    );
  }
}

const picker = StyleSheet.create({
  inputIOSContainer: {
    height: 35,
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
  },
  inputAndroid: {
    fontSize: 16,
    // paddingHorizontal: 10,
    paddingVertical: 8,
    borderWidth: 0.5,
    borderColor: 'purple',
    borderRadius: 5,
    color: 'black',
    paddingRight: 30, // to ensure the text is never behind the icon
  },
  iconContainer: {
    right: 5,
  },
  placeholder: {
    color: 'black',
  },
  inputIOS: {
    color: 'black',
  },
});

const styles = StyleSheet.create({
  dropdown: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 2,
    height: 35,
  },
  list: {
    width: '85%',
    marginLeft: -2,
    paddingLeft: 0,
  },
  listText: {
    // fontFamily: constants.fontFamily.light,
    // fontSize: constants.fontSize.small,
  },
  text: {
    // fontSize: constants.fontSize.medium,
    // fontFamily: constants.fontFamily.light,
  },
  placeholder: {
    color: 'black',
    // fontSize: constants.fontSize.smallest,
    marginBottom: 5,
  },
  pickerHolder: { width: '100%' },
});
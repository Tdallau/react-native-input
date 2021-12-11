import React, { Component } from 'react'
import { Text, View, TextInput, StyleSheet, Alert } from 'react-native'
import Dropdown from './components/Dropdown';
import Props from './types/Input/props'
import State from './types/Input/state';

export default class Input extends Component<Props, State> {
  state = {
    ownSet: false,
    value: undefined,
    isSet: false,
    options: [],
    selectedOptionsIndex: -1,
  }

  static getDerivedStateFromProps(props: Props, state: State) {
    if (state.ownSet) {
      return {
        ownSet: false,
      }
    }
    switch (props.type) {
      case 'TextInput':
        return {
          value: props.baseValue,
        }
      case 'DropDown':
        return {
          options: props.baseValue,
          value: props.baseValue[0],
          selectedOptionsIndex: 0
        }
      default:
        return null;
    }
  }

  setValue = (v: string) => {
    this.setState({ value: v, ownSet: true })
  }

  renderInput = () => {
    switch (this.props.type) {
      case 'TextInput':

        return (
          <TextInput value={this.state.value} onChangeText={this.setValue} onBlur={(e) => this.props.getValue(e.nativeEvent.text)} />
        );
      case 'DropDown':
        return (
         <Dropdown
            options={this.state.options}
            onSelect={(index, option) => console.log(option)} 
            placeholder="test" 
            required={false}  
            style={{}} 
            value={this.state.value} 
        />
        )
      default:
        return <View />
    }
  }

  render() {
    return (
      <View style={[styles.container, this.props.baseContainerStyle]}>
        {
          this.renderInput()
        }
      </View>
    )
  }
}

const styles = StyleSheet.create({
  container: {
    width: '100%',
    borderBottomColor: 'black',
    borderBottomWidth: 1.5,
    paddingHorizontal: 20,
  }
})
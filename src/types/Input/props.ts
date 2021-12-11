import { StyleProp, ViewStyle } from "react-native";

type BaseProps = {
  getValue: (value: string) => void,
  baseContainerStyle?: StyleProp<ViewStyle>
}

type PropsIfTextInput = {
  type: 'TextInput'
  baseValue: string,
}

type PropsIfDropDown = {
  type: 'DropDown'
  baseValue: Array<{value: string | number, label: string}>,
}

type Props = BaseProps & PropsIfTextInput | BaseProps & PropsIfDropDown

export default Props;
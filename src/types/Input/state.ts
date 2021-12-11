type State = {
  ownSet: boolean,
  value: string | number | undefined,
  isSet: boolean,
  options: Array<{value: string | number, label: string}>,
  selectedOptionsIndex: number,
}

export default State;
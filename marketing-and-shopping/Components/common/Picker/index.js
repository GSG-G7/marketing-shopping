import React from "react";
import { View, Picker } from "react-native";

import generalStyle from "../CommonStyle";
import picker from "./style";

const PickerComponent = ({ items, selectFunc }) => (
  <Picker
    style={[generalStyle.secondBgColor, picker.parent]}
    onValueChange={selectFunc}
  >
    {items.map((e, i) => (
      <Picker.Item label={e} value={e} key={i} />
    ))}
  </Picker>
);

export default PickerComponent;

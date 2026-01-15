import React from "react";
import { StyleSheet, View } from "react-native";

type DividerProps = {
  length?: number | string;
  color?: string;
  marginVertical?: number;
};

const Divider: React.FC<DividerProps> = ({
  length = "100%",
  color = "#E0E0E0",
  marginVertical = 8,
}) => {
  return (
    <View
      style={[
        styles.divider,
        {
          width: length,
          backgroundColor: color,
          marginVertical,
        },
      ]}
    />
  );
};

export default Divider;

const styles = StyleSheet.create({
  divider: {
    height: StyleSheet.hairlineWidth,
    alignSelf: "center",
  },
});

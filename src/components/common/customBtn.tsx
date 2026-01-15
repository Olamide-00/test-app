import React, { memo } from "react";
import {
  Pressable,
  Text,
  StyleSheet,
  ActivityIndicator,
  View,
  PressableProps,
  ViewStyle,
} from "react-native";
import { widthPercentageToDP as wp } from "react-native-responsive-screen";
import { COLORS } from "../../constant/colors";

type BtnProps = {
  label: string;
  onPress?: () => void;
  loading?: boolean;
  disabled?: boolean;
  testID?: string;
  width?: number | string;
} & PressableProps;

const Btn = ({
  label,
  onPress,
  loading = false,
  disabled = false,
  testID,
  width,
  ...rest
}: BtnProps) => {
  const isDisabled = disabled || loading;

  // Determine the width style
  const widthStyle: ViewStyle = width
    ? typeof width === "number"
      ? { width }
      : { width }
    : { width: wp("100%") };

  return (
    <Pressable
      style={[styles.container, widthStyle]}
      onPress={onPress}
      disabled={isDisabled}
      accessibilityRole="button"
      accessibilityState={{ disabled: isDisabled }}
      testID={testID}
      hitSlop={10}
      {...rest}
    >
      <View style={styles.content}>
        {loading && <ActivityIndicator size="small" color={COLORS.white} />}

        <Text style={styles.label}>{label}</Text>
      </View>
    </Pressable>
  );
};

export default memo(Btn);

const styles = StyleSheet.create({
  container: {
    backgroundColor: COLORS.primary,
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 20,
    alignItems: "center",
  },
  content: {
    flexDirection: "row",
    alignItems: "center",
    gap: 8,
  },
  label: {
    color: COLORS.white,
    fontSize: 16,
  },
});

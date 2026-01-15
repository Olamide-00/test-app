import React, { memo } from "react";
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  ViewStyle,
  TextStyle,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";

type HeaderProps = {
  title: string;
  rightIcon?: keyof typeof Ionicons.glyphMap;
  onBackPress?: () => void;
  onRightIconPress?: () => void;
  titleColor?: string;
  containerStyle?: ViewStyle;
  titleStyle?: TextStyle;
};

const ICON_SIZE = 24;
const Header = ({
  title,
  rightIcon,
  onBackPress,
  onRightIconPress,
  titleColor = COLORS.primary,
  containerStyle,
  titleStyle,
}: HeaderProps) => {
  return (
    <View style={[styles.container, containerStyle]}>
      {/* Back */}
      <Pressable
        onPress={onBackPress}
        hitSlop={10}
        accessibilityRole="button"
        accessibilityLabel="Go back"
        style={styles.backContainer}
      >
        <Ionicons name="arrow-back" size={ICON_SIZE} color={COLORS.white} />
      </Pressable>

      {/* Title */}
      <Text
        style={[styles.title, { color: titleColor }, titleStyle]}
        numberOfLines={1}
      >
        {title}
      </Text>

      {/* Right */}
      {rightIcon ? (
        <Pressable
          onPress={onRightIconPress}
          hitSlop={10}
          style={styles.rightButton}
        >
          <Image
            source={require("../../../assets/images/1.png")}
            style={styles.rightImage}
            resizeMode="contain"
          />
        </Pressable>
      ) : null}
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 12,
  },

  backContainer: {
    padding: 8,
    borderRadius: 20,
    backgroundColor: COLORS.primary,
  },

  title: {
    flex: 1,
    textAlign: "center",
    fontSize: 24,
    fontWeight: "800",
  },

  rightButton: {
    marginLeft: "auto",
  },

  rightImage: {
    width: 38,
    height: 38,
    marginRight: -16,
  },
});
export default memo(Header);

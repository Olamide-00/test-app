import { View, Text, StyleSheet } from "react-native";
import React from "react";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";
import { COLORS } from "../../constant/colors";

const formatAmount = (value: number) => {
  // Format with proper spacing and decimal places
  const formatted = value.toLocaleString("en-NG", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  });

  const [wholePart, decimalPart] = formatted.split(".");

  return (
    <>
      <Text style={styles.currency}>₦</Text>
      <Text style={styles.wholeAmount}>{wholePart}</Text>
      <Text style={styles.decimal}>.{decimalPart}</Text>
    </>
  );
};

const Balance = ({ amount }: { amount: number }) => {
  return (
    <View style={styles.container}>
      <View style={styles.amountContainer}>{formatAmount(amount)}</View>
    </View>
  );
};

export default Balance;

const styles = StyleSheet.create({
  container: {
    width: wp("80%"),
    height: hp("7%"),
    justifyContent: "center",
    alignItems: "center",
    borderRadius: 24,
    backgroundColor: "rgba(16, 116, 253, 0.13)",
    paddingHorizontal: 20,
  },
  amountContainer: {
    flexDirection: "row",
    alignItems: "baseline",
  },
  currency: {
    fontSize: 30,
    color: COLORS.white,
    fontWeight: "800",
    marginRight: 2,
  },
  wholeAmount: {
    fontSize: 36,
    color: COLORS.white,
    fontWeight: "800",
    letterSpacing: 5,
  },
  decimal: {
    fontSize: 28,
    color: COLORS.white,
    fontWeight: "800",
    letterSpacing: 0.5,
  },
});

import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: COLORS.white,
    // paddingHorizontal: wp("1%"),
    // paddingTop: hp("3%"),
  },
  bg: {
    backgroundColor: COLORS.bg,
    height: hp("30%"),
    borderBottomRightRadius: 20,
    borderBottomLeftRadius: 20,
  },
  amount: {
    color: COLORS.orange,
    fontSize: 16,
    marginTop: hp("2%"),
    alignSelf: "center",
  },
  balanceContainer: {
    marginTop: hp("2%"),
    alignItems: "center",
  },
  availableBalanceContainer: {
    marginTop: hp("-2.5%"),
    backgroundColor: COLORS.green,
    padding: hp("1%"),
    borderRadius: 20,
    alignItems: "center",
    width: wp("50%"),
    alignSelf: "center",
    borderColor: COLORS.white,
    borderWidth: 3,
  },
  balance: {
    color: COLORS.white,
    fontSize: 14,
    fontWeight: "600",
  },
});

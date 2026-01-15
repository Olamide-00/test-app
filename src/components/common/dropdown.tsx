import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  TouchableOpacity,
  FlatList,
  ScrollView,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp,
} from "react-native-responsive-screen";

type Beneficiary = {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
};

type Props = {
  data: Beneficiary[];
  onSelect: (item: Beneficiary) => void;
};

const BeneficiaryDropdown = ({ data, onSelect }: Props) => {
  const [open, setOpen] = useState(false);
  const [selected, setSelected] = useState<Beneficiary | null>(null);

  const handleSelect = (item: Beneficiary) => {
    setSelected(item);
    setOpen(false);
    onSelect(item);
  };

  return (
    <View style={styles.wrapper}>
      {/* Dropdown header */}
      <TouchableOpacity
        style={styles.header}
        activeOpacity={0.7}
        onPress={() => setOpen(!open)}
      >
        <Text style={styles.headerText}>
          {selected ? selected.name : "Select Beneficiary"}
        </Text>
        <Ionicons
          name={open ? "chevron-up" : "chevron-down"}
          size={20}
          color={COLORS.primary}
        />
      </TouchableOpacity>

      {/* Dropdown list */}
      {open && (
        <View style={styles.dropdown}>
          <ScrollView
            style={styles.scrollView}
            showsVerticalScrollIndicator={true}
            nestedScrollEnabled={true}
          >
            {data.map((item, index) => (
              <TouchableOpacity
                key={item.id}
                style={styles.item}
                onPress={() => handleSelect(item)}
              >
                <View style={styles.icon}>
                  <Ionicons name="person" size={18} color={COLORS.white} />
                </View>

                <View style={styles.info}>
                  <Text style={styles.name}>{item.name}</Text>
                  <Text style={styles.meta}>
                    {item.accountNumber} - {item.bankName}
                  </Text>

                  {/* Custom divider */}
                  {index !== data.length - 1 && <View style={styles.divider} />}
                </View>
              </TouchableOpacity>
            ))}
          </ScrollView>
        </View>
      )}
    </View>
  );
};

export default BeneficiaryDropdown;

const styles = StyleSheet.create({
  wrapper: {
    width: "100%",
    borderWidth: 1,
    borderColor: COLORS.balanceBg,
    borderRadius: 20,
  },

  header: {
    height: 56,
    borderRadius: 12,
    paddingHorizontal: 16,
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },

  headerText: {
    fontSize: 16,
    fontWeight: "500",
  },

  dropdown: {
    marginTop: 8,
    borderRadius: 12,
    backgroundColor: COLORS.white,
    elevation: 4,
    maxHeight: hp("40%"),
  },

  scrollView: {
    flexGrow: 0,
  },

  item: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: hp("2.5%"),
    paddingVertical: hp("1.8%"),
  },

  divider: {
    marginTop: hp("2%"),
    height: 0.5,
    width: wp("75%"),
    backgroundColor: "grey",
  },

  icon: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.dropdownBg,
    justifyContent: "center",
    alignItems: "center",
    marginRight: 12,
  },

  info: {
    flex: 1,
  },

  name: {
    fontSize: 15,
    fontWeight: "600",
  },

  meta: {
    fontSize: 13,
    color: "grey",
    marginTop: 2,
  },
});

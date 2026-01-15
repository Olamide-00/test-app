import React, { useState } from "react";
import { View, Text, StyleSheet, TouchableOpacity } from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { COLORS } from "../../constant/colors";

type TransactionDetailsProps = {
  transaction: {
    id: string;
    name: string;
    accountNumber: string;
    bankName: string;
  };
};

const TransactionDetails = ({ transaction }: TransactionDetailsProps) => {
  const [saveAsBeneficiary, setSaveAsBeneficiary] = useState(false);

  return (
    <View style={styles.container}>
      {/* Header Icon */}
      <View style={styles.iconContainer}>
        <Ionicons name="paper-plane-outline" size={20} color="#ccc" />
      </View>

      {/* Title */}
      <Text style={styles.title}>Transfer Confirmation</Text>

      {/* Amount */}
      <View style={styles.amountContainer}>
        <Text style={styles.amountLabel}>Amount</Text>
        <Text style={styles.amount}>NGN 60,560.00</Text>
      </View>

      {/* Details Section */}
      <View style={styles.detailsContainer}>
        {/* Transfer To */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Transfer To</Text>
          <Text style={styles.value}>0123456789</Text>
        </View>

        {/* Bank */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Bank</Text>
          <Text style={styles.value}>Guaranty Trust Bank</Text>
        </View>

        {/* Account Name */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Account Name</Text>
          <View style={styles.valueWithCheck}>
            <Text style={styles.value}>{transaction.name}</Text>
            <Ionicons name="checkmark-circle" size={16} color={COLORS.green} />
          </View>
        </View>

        {/* Bank Charge */}
        <View style={styles.detailRow}>
          <Text style={styles.label}>Bank Charge</Text>
          <Text style={styles.value}>NGN 50</Text>
        </View>
      </View>

      {/* Description */}
      <View style={styles.descriptionContainer}>
        <Text style={styles.descriptionLabel}>Description</Text>
      </View>

      {/* Save as Beneficiary */}
      <View style={styles.checkboxContainer}>
        <TouchableOpacity
          style={styles.checkbox}
          onPress={() => setSaveAsBeneficiary(!saveAsBeneficiary)}
        >
          {saveAsBeneficiary && (
            <Ionicons name="checkmark" size={14} color={COLORS.primary} />
          )}
        </TouchableOpacity>
        <Text style={styles.checkboxLabel}>Save as Beneficiary</Text>
      </View>

      {/* Terms */}
      <View style={styles.termsContainer}>
        <Ionicons name="checkmark-circle" size={16} color="gray" />
        <Text style={styles.terms}>
          Please double check and confirm the recipient details before
          authorization
        </Text>
      </View>

      {/* Continue Button */}
      <TouchableOpacity style={styles.continueButton}>
        <Text style={styles.continueButtonText}>Continue</Text>
      </TouchableOpacity>
    </View>
  );
};

export default TransactionDetails;

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  iconContainer: {
    alignItems: "center",
    marginBottom: 16,
  },
  title: {
    fontSize: 16,
    fontWeight: "600",
    textAlign: "center",
    color: "#333",
    marginBottom: 12,
  },
  amountContainer: {
    alignItems: "center",
    marginBottom: 10,
    backgroundColor: "rgba(16, 116, 253, 0.1)",
    borderRadius: 20,
    width: "70%",
    alignSelf: "center",
    paddingVertical: 10,
  },
  amountLabel: {
    fontSize: 12,
    color: "#999",
  },
  amount: {
    fontSize: 28,
    fontWeight: "700",
    textAlign: "center",
    color: "#007AFF",
  },
  detailsContainer: {
    backgroundColor: "#f9f9f9",
    borderRadius: 12,
    padding: 16,
    marginBottom: 20,
  },
  detailRow: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    paddingVertical: 12,
  },
  label: {
    fontSize: 14,
    color: "#666",
    flex: 1,
  },
  value: {
    fontSize: 14,
    fontWeight: "500",
    color: "#333",
    textAlign: "right",
    flex: 1,
  },
  valueWithCheck: {
    flexDirection: "row",
    alignItems: "center",
    gap: 6,
    flex: 1,
    justifyContent: "flex-end",
  },
  descriptionContainer: {
    borderWidth: 1,
    borderColor: "#e0e0e0",
    borderRadius: 8,
    padding: 12,
    minHeight: 50,
    marginBottom: 16,
  },
  descriptionLabel: {
    fontSize: 14,
    color: "#999",
  },
  checkboxContainer: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 16,
  },
  checkbox: {
    width: 18,
    height: 18,
    borderRadius: 4,
    borderWidth: 1.5,
    borderColor: "#007AFF",
    marginRight: 10,
    justifyContent: "center",
    alignItems: "center",
  },
  checkboxLabel: {
    fontSize: 14,
    color: "#333",
  },
  termsContainer: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(16, 116, 253, 0.1)",
    borderRadius: 8,
    gap: 10,
    marginBottom: 20,
    paddingLeft: 10,
    paddingVertical: 3,
  },
  terms: {
    fontSize: 11,
    color: "#999",
    // lineHeight: 16,
    // marginBottom: 24,
  },
  continueButton: {
    backgroundColor: "#007AFF",
    borderRadius: 25,
    paddingVertical: 16,
    alignItems: "center",
    justifyContent: "center",
  },
  continueButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
  },
});

import { View, Text, SafeAreaView, ScrollView } from "react-native";
import React from "react";
import Header from "../../components/common/header";
import { styles } from "./style";
import Balance from "../../components/common/balance";
import BeneficiaryDropdown from "../../components/common/dropdown";
import CustomBtn from "../../components/common/customBtn";
import RecentHistory from "../../components/common/recentHistory";

// Define beneficiary data at the top
const beneficiaryData = [
  {
    id: "1",
    name: "Kelechi Nnadi",
    accountNumber: "01234578908",
    bankName: "Moniepoint",
  },
  {
    id: "2",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "3",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "4",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "5",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "6",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "7",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "8",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
];

const Home = () => {
  return (
    <SafeAreaView style={styles.safeArea}>
      <ScrollView
        style={styles.scrollView}
        contentContainerStyle={styles.scrollContent}
        showsVerticalScrollIndicator={false}
      >
        <View style={styles.container}>
          <View style={styles.bg}>
            <View style={{ marginTop: 30 }}>
              <Header title="Withdraw/send" titleColor="white" rightIcon />
            </View>
            <Text style={styles.amount}>Enter amount</Text>
            <View style={styles.balanceContainer}>
              <Balance amount={150000000} />
            </View>
          </View>
          <View>
            <View style={styles.availableBalanceContainer}>
              <Text style={styles.balance}>Available Balance 1,500,000.00</Text>
            </View>
            <View style={{ paddingHorizontal: 10 }}>
              <View style={{ marginTop: 30 }}>
                <BeneficiaryDropdown
                  data={beneficiaryData}
                  onSelect={(item) => console.log(item)}
                />
              </View>
              <View style={{ marginTop: 30, alignItems: "center" }}>
                <CustomBtn label="Transaction" width={"99%"} />
              </View>
              <View style={{ marginTop: 20 }}>
                <RecentHistory />
              </View>
            </View>
          </View>
        </View>
      </ScrollView>
    </SafeAreaView>
  );
};

export default Home;

import {
  View,
  Text,
  StyleSheet,
  FlatList,
  TextInput,
  TouchableOpacity,
} from "react-native";
import React, { useState } from "react";
import { Ionicons } from "@expo/vector-icons";
import Divider from "./divider";
import BottomSheet from "../ui/bottomsheet";
import TransactionDetails from "../modals/TransactionDetails";
import { COLORS } from "../../constant/colors";

type Transaction = {
  id: string;
  name: string;
  accountNumber: string;
  bankName: string;
};

const TRANSACTIONS: Transaction[] = [
  {
    id: "1",
    name: "John Doe",
    accountNumber: "0123456789",
    bankName: "GTBank",
  },
  {
    id: "2",
    name: "Sarah Ahmed",
    accountNumber: "0987654321",
    bankName: "Access Bank",
  },
  {
    id: "3",
    name: "Michael Okoye",
    accountNumber: "1234567890",
    bankName: "First Bank",
  },
  {
    id: "4",
    name: "Jane Smith",
    accountNumber: "2345678901",
    bankName: "UBA",
  },
  {
    id: "5",
    name: "David Johnson",
    accountNumber: "3456789012",
    bankName: "Zenith Bank",
  },
];

const ICON_SIZE = 36;
const ICON_GAP = 12;

const RecentHistory = () => {
  const [searchQuery, setSearchQuery] = useState("");
  const [isSearching, setIsSearching] = useState(false);
  const [selectedTransaction, setSelectedTransaction] =
    useState<Transaction | null>(null);
  const [bottomSheetVisible, setBottomSheetVisible] = useState(false);

  // Filter transactions based on search query
  const filteredTransactions = TRANSACTIONS.filter(
    (transaction) =>
      transaction.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
      transaction.accountNumber.includes(searchQuery) ||
      transaction.bankName.toLowerCase().includes(searchQuery.toLowerCase())
  );

  const handleTransactionPress = (transaction: Transaction) => {
    setSelectedTransaction(transaction);
    setBottomSheetVisible(true);
  };

  const closeBottomSheet = () => {
    setBottomSheetVisible(false);
    setTimeout(() => {
      setSelectedTransaction(null);
    }, 300);
  };

  const renderItem = ({
    item,
    index,
  }: {
    item: Transaction;
    index: number;
  }) => (
    <TouchableOpacity onPress={() => handleTransactionPress(item)}>
      <View>
        {/* Row */}
        <View style={styles.row}>
          <View style={styles.icon}>
            <Ionicons name="person" size={18} color={COLORS.green} />
          </View>

          <View style={styles.textBlock}>
            <Text style={styles.name}>{item.name}</Text>
            <Text style={styles.meta}>
              {item.accountNumber} • {item.bankName}
            </Text>
          </View>
        </View>

        {/* Divider */}
        {index !== filteredTransactions.length - 1 && (
          <View
            style={[
              styles.dividerWrapper,
              {
                marginLeft: ICON_SIZE + ICON_GAP,
              },
            ]}
          >
            <Divider length="109%" color="grey" />
          </View>
        )}
      </View>
    </TouchableOpacity>
  );

  const toggleSearch = () => {
    setIsSearching(!isSearching);
    if (isSearching) {
      setSearchQuery("");
    }
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <Text style={styles.title}>Recent Transactions</Text>

        {isSearching ? (
          <View style={styles.searchInputContainer}>
            <TextInput
              style={styles.searchInput}
              placeholder="Search transactions..."
              value={searchQuery}
              onChangeText={setSearchQuery}
              autoFocus={true}
              placeholderTextColor="#999"
            />
            <TouchableOpacity onPress={toggleSearch} style={styles.closeButton}>
              <Ionicons name="close" size={20} color="grey" />
            </TouchableOpacity>
          </View>
        ) : (
          <TouchableOpacity
            onPress={toggleSearch}
            style={styles.searchContainer}
          >
            <Ionicons name="search-outline" size={20} color="grey" />
          </TouchableOpacity>
        )}
      </View>

      <Divider length="90%" color="grey" />

      {/* Scrollable transaction list */}
      <View style={styles.scrollContainer}>
        {filteredTransactions.length > 0 ? (
          <FlatList
            data={filteredTransactions}
            keyExtractor={(item) => item.id}
            renderItem={renderItem}
            showsVerticalScrollIndicator={true}
            scrollEnabled={true}
            style={styles.scrollableList}
            contentContainerStyle={styles.listContent}
          />
        ) : (
          <View style={styles.noResultsContainer}>
            <Ionicons name="search-outline" size={40} color="#ccc" />
            <Text style={styles.noResultsText}>No transactions found</Text>
            <Text style={styles.noResultsSubText}>
              Try searching with a different term
            </Text>
          </View>
        )}
      </View>

      {/* Bottom Sheet */}
      <BottomSheet
        visible={bottomSheetVisible}
        onClose={closeBottomSheet}
        title="Transaction Details"
      >
        {selectedTransaction && (
          <TransactionDetails transaction={selectedTransaction} />
        )}
      </BottomSheet>
    </View>
  );
};

export default RecentHistory;

const styles = StyleSheet.create({
  container: {
    borderWidth: 0.5,
    borderColor: "grey",
    borderRadius: 16,
    paddingBottom: 10,
  },

  scrollContainer: {
    maxHeight: 300,
  },

  scrollableList: {
    flexGrow: 0,
  },

  listContent: {
    paddingBottom: 10,
  },

  header: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
    margin: 15,
  },

  title: {
    fontSize: 18,
    fontWeight: "600",
    flex: 1,
  },

  searchContainer: {
    width: 45,
    height: 38,
    borderRadius: 10,
    justifyContent: "center",
    alignItems: "center",
    backgroundColor: "rgba(33, 33, 33, 0.04)",
  },

  searchInputContainer: {
    flex: 1,
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "rgba(33, 33, 33, 0.04)",
    borderRadius: 10,
    paddingHorizontal: 12,
    height: 38,
    marginLeft: 10,
  },

  searchInput: {
    flex: 1,
    fontSize: 14,
    color: "#333",
    paddingVertical: 8,
  },

  closeButton: {
    padding: 5,
  },

  noResultsContainer: {
    height: 200,
    justifyContent: "center",
    alignItems: "center",
    paddingHorizontal: 20,
  },

  noResultsText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#666",
    marginTop: 10,
  },

  noResultsSubText: {
    fontSize: 14,
    color: "#999",
    marginTop: 5,
    textAlign: "center",
  },

  row: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 15,
    paddingVertical: 14,
  },

  icon: {
    width: ICON_SIZE,
    height: ICON_SIZE,
    borderRadius: ICON_SIZE / 2,
    backgroundColor: "rgba(209, 250, 223, 0.78)",
    justifyContent: "center",
    alignItems: "center",
    marginRight: ICON_GAP,
  },

  textBlock: {
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

  dividerWrapper: {
    paddingRight: 15,
  },
});

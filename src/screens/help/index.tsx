import React from "react";
import {
  View,
  Text,
  StyleSheet,
  SafeAreaView,
  Image,
  TouchableOpacity,
  StatusBar,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import MapView from "react-native-maps";

const DeliveryTrackingScreen = () => {
  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" backgroundColor="#fff" />

      {/* Map/Delivery Illustration */}
      <View style={styles.mapWrapper}>
        <View style={styles.locationCard}>
          <View style={styles.locationHeader}>
            <Ionicons name="location" size={20} color="#4A90E2" />
            <Text style={styles.locationTitle}>
              31, John Avenue, olabisi estate, Lekki, Lagos
            </Text>
          </View>
        </View>
        <MapView style={styles.map} />
      </View>

      {/* Runners Section */}
      <View style={styles.runnersContainer}>
        <View style={styles.runnersHeader}>
          <Text style={styles.runnersTitle}>3 runners viewing request...</Text>
          <View style={styles.runnersCount}>
            <View style={styles.runnersAvatars}>
              <View style={styles.avatar}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/32.jpg",
                  }}
                  style={styles.avatarImage}
                />
              </View>
              <View style={[styles.avatar, styles.secondAvatar]}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/women/44.jpg",
                  }}
                  style={styles.avatarImage}
                />
              </View>
              <View style={[styles.avatar, styles.thirdAvatar]}>
                <Image
                  source={{
                    uri: "https://randomuser.me/api/portraits/men/67.jpg",
                  }}
                  style={styles.avatarImage}
                />
              </View>
              <View style={styles.moreRunners}>
                <Text style={styles.moreText}>+2</Text>
              </View>
            </View>
          </View>
        </View>
      </View>

      {/* Reassurance Message */}
      <View
        style={{
          backgroundColor: "rgba(126, 178, 255, 0.07)",
          borderRadius: 8,
          paddingVertical: 10,
        }}
      >
        <View style={styles.reassuranceContainer} />
        <View style={styles.reassuranceTextContainer}>
          <Text style={styles.reassuranceText}>
            Don't worry it will only take a minute
          </Text>
          <Text style={{ color: "grey" }}>Please be patient...</Text>
        </View>
      </View>

      {/* Pick-up Details */}
      <View style={styles.pickupContainer}>
        <Text style={{ color: "grey" }}>Pick-up Address</Text>
        <View
          style={{
            flexDirection: "row",
            justifyContent: "space-between",
            marginTop: 30,
            alignItems: "flex-end",
          }}
        >
          <View style={{ flexDirection: "row", gap: 10 }}>
            <Ionicons
              name="location"
              size={15}
              color="rgba(126, 178, 255, 1)"
            />
            <Text>Kinddom Hall</Text>
          </View>
          <View
            style={{
              backgroundColor: "rgba(126, 178, 255, 0.2)",
              paddingHorizontal: 10,
              paddingVertical: 6,
              borderRadius: 10,
            }}
          >
            <Text
              style={{
                fontSize: 24,
                fontWeight: "bold",
              }}
            >
              60,000
            </Text>
          </View>
        </View>
      </View>

      {/* Cancel Button */}
      <View style={styles.footer}>
        <TouchableOpacity style={styles.cancelButton}>
          <Ionicons name="close-circle" size={20} color="#fff" />
          <Text style={styles.cancelButtonText}>Cancel Delivery</Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "#f8f9fa",
  },
  mapWrapper: {
    width: "100%",
    height: "40%",
    backgroundColor: "#fff",
    position: "relative",
  },
  map: {
    width: "100%",
    height: "100%",
  },
  locationCard: {
    position: "absolute",
    top: 50,
    left: 16,
    right: 16,
    zIndex: 1,
    backgroundColor: "#fff",
    paddingVertical: 12,
    paddingHorizontal: 16,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  locationHeader: {
    flexDirection: "row",
    alignItems: "center",
  },
  locationTitle: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginLeft: 8,
  },
  runnersContainer: {
    marginHorizontal: 16,
    marginTop: 12,
  },
  runnersHeader: {
    flexDirection: "row",
    justifyContent: "flex-end",
    alignItems: "center",
    marginBottom: 16,
    gap: 20,
  },
  runnersTitle: {
    fontSize: 13,
    fontWeight: "600",
    color: "#333",
  },
  runnersAvatars: {
    flexDirection: "row",
    alignItems: "center",
  },
  avatar: {
    width: 34,
    height: 34,
    borderRadius: 22,
    borderWidth: 2,
    borderColor: "#fff",
    overflow: "hidden",
  },
  secondAvatar: {
    marginLeft: -10,
  },
  thirdAvatar: {
    marginLeft: -10,
  },
  avatarImage: {
    width: "100%",
    height: "100%",
  },
  moreRunners: {
    width: 44,
    height: 44,
    borderRadius: 22,
    backgroundColor: "#f0f0f0",
    justifyContent: "center",
    alignItems: "center",
    marginLeft: -10,
    borderWidth: 2,
    borderColor: "#fff",
  },
  moreText: {
    fontSize: 12,
    color: "#666",
    fontWeight: "600",
  },
  reassuranceContainer: {
    backgroundColor: "rgba(217, 217, 217, 1)",
    marginHorizontal: 16,
    marginTop: 12,
    borderRadius: 12,
    height: 145,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 4,
    elevation: 3,
  },
  reassuranceTextContainer: {
    alignItems: "center",
    marginTop: 16,
  },
  reassuranceText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#333",
    marginTop: 12,
    textAlign: "center",
  },
  pickupContainer: {
    marginHorizontal: 16,
    marginTop: 12,
    marginBottom: 30,
    padding: 16,
  },
  cancelButton: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "center",
    backgroundColor: "#ff3a3060",
    paddingVertical: 16,
    borderRadius: 12,
    width: "90%",
    alignSelf: "center",
    marginTop: -23,
  },
  cancelButtonText: {
    fontSize: 16,
    fontWeight: "600",
    color: "#fff",
    marginLeft: 8,
  },
});

export default DeliveryTrackingScreen;

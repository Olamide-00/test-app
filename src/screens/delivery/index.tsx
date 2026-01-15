import React, { useState } from "react";
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  SafeAreaView,
  StatusBar,
  Image,
} from "react-native";
import { Ionicons } from "@expo/vector-icons";
import { styles } from "./style";

type DeliveryStatus = "active" | "completed";

type Delivery = {
  id: string;
  packageId: string;
  status: DeliveryStatus;
  estimatedTime: string;
  progress: string;
  pickupLocation: string;
  deliveryLocation: string;
  pickupTime: string;
  deliveryTime: string;
  origin: string;
  courierService: string;
  amount: number;
  acceptedStatus: "accepted" | "picked" | "completed";
};

const DELIVERIES: Delivery[] = [
  {
    id: "1",
    packageId: "NGR-110822000B",
    status: "active",
    estimatedTime: "00:50 - 24 Left",
    progress: "0/15",
    pickupLocation: "Sharon Str, Ketu.",
    deliveryLocation: "12,Thomas Str, Palmgrove.",
    pickupTime: "2:00",
    deliveryTime: "4:00",
    origin: "CrowdCargo Delivery",
    courierService: "CrowdCargo Delivery",
    amount: 4000,
    acceptedStatus: "accepted",
  },
  {
    id: "2",
    packageId: "NGR-110822000B",
    status: "completed",
    estimatedTime: "",
    progress: "",
    pickupLocation: "",
    deliveryLocation: "",
    pickupTime: "",
    deliveryTime: "",
    origin: "",
    courierService: "",
    amount: 0,
    acceptedStatus: "completed",
  },
];

const MyDeliveries = () => {
  const [activeTab, setActiveTab] = useState<
    "deliveries" | "hours" | "cancels"
  >("deliveries");
  const [selectedStatus, setSelectedStatus] = useState<"active" | "completed">(
    "active"
  );

  const renderDeliveryCard = (delivery: Delivery) => {
    if (delivery.status === "active") {
      return (
        <View key={delivery.id} style={styles.deliveryCard}>
          {/* Challenge Header */}
          <View
            style={{
              backgroundColor: "rgba(126, 178, 255, 0.2)",
              borderRadius: 8,
              padding: 10,
              marginBottom: 16,
            }}
          >
            <View style={styles.cardHeader}>
              <View style={styles.challengeHeaderLeft}>
                <Text style={styles.challengeTitle}>Bonus Challenge</Text>
                <Text style={styles.challengeSubtitle}>
                  Complete 15 Deliveries by 11:59PM
                </Text>
              </View>
              <View style={styles.rewardBadge}>
                <Text style={styles.rewardText}>Reward N3,500</Text>
              </View>
            </View>
            {/* Bike Illustration with Timer and Progress */}
            <View style={styles.bikeSection}>
              <View style={styles.leftSection}>
                <TouchableOpacity style={styles.timerButton}>
                  <Text style={styles.timerText}>{delivery.estimatedTime}</Text>
                </TouchableOpacity>
                <Text style={styles.progressText}>
                  Progress:{" "}
                  <Text style={styles.progressValue}>{delivery.progress}</Text>
                </Text>
              </View>

              <View style={styles.bikeImageContainer}>
                <Image
                  source={require("../../../assets/images/bicycle.png")}
                  style={styles.bikeImage}
                  resizeMode="contain"
                />
              </View>
            </View>
          </View>

          {/* Status Tabs */}
          <View style={styles.statusTabs}>
            <TouchableOpacity
              style={[
                styles.statusTab,
                selectedStatus === "active" && styles.statusTabActive,
              ]}
            >
              <Text
                style={[
                  styles.statusTabText,
                  selectedStatus === "active" && styles.statusTabTextActive,
                ]}
              >
                Active
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[
                styles.statusTab,
                selectedStatus === "completed" && styles.statusTabActive,
              ]}
            >
              <Text
                style={[
                  styles.statusTabText,
                  selectedStatus === "completed" && styles.statusTabTextActive,
                ]}
              >
                Completed
              </Text>
              <View style={styles.completedBadge}>
                <Text style={styles.completedBadgeText}>2</Text>
              </View>
            </TouchableOpacity>
          </View>
          {/* Package Info */}
          <View style={styles.packageInfoCard}>
            <View style={styles.packageHeader}>
              <View>
                <Text style={styles.packageId}>
                  Package ID: {delivery.packageId}
                </Text>
                <View style={styles.deliveryBadge}>
                  <Text style={styles.deliveryBadgeText}>Delivery</Text>
                  <Ionicons name="arrow-forward" size={12} color="#007AFF" />
                </View>
              </View>
              <TouchableOpacity style={styles.joinButton}>
                <Ionicons name="time-outline" size={12} color="#fff" />
                <Text style={styles.joinButtonText}>Jun 16, 2:00pm</Text>
              </TouchableOpacity>
            </View>

            {/* Locations with Timeline */}
            <View style={styles.locationsContainer}>
              <View style={styles.locationRow}>
                <View style={styles.timeColumn}>
                  <Text style={styles.timeText}>{delivery.pickupTime}</Text>
                </View>
                <View style={styles.dotColumn}>
                  <View style={styles.locationDot} />
                  <View style={styles.connectorLine} />
                </View>
                <View style={styles.locationTextColumn}>
                  <Text style={styles.locationText}>
                    {delivery.pickupLocation}
                  </Text>
                </View>
              </View>

              <View style={styles.locationRow}>
                <View style={styles.timeColumn}>
                  <Text style={styles.timeText}>{delivery.deliveryTime}</Text>
                </View>
                <View style={styles.dotColumn}>
                  <View
                    style={[styles.locationDot, styles.locationDotFilled]}
                  />
                </View>
                <View style={styles.locationTextColumn}>
                  <Text style={styles.locationText}>
                    {delivery.deliveryLocation}
                  </Text>
                </View>
              </View>
            </View>

            {/* Bottom Status Timeline */}
            <View style={styles.bottomTimeline}>
              <View style={styles.timelineStep}>
                <View style={[styles.timelineDot, styles.timelineDotActive]}>
                  <Ionicons name="checkmark" size={16} color="#fff" />
                </View>
                <Text style={styles.timelineLabel}>Accepted</Text>
              </View>

              <View style={styles.timelineConnector} />

              <View style={styles.timelineStep}>
                <View style={styles.timelineDot}>
                  <Ionicons name="checkmark" size={16} color="#fff" />
                </View>
                <Text style={styles.timelineLabel}>Picked Up</Text>
              </View>

              <View style={styles.timelineConnector} />

              <View style={styles.timelineStep}>
                <View style={styles.timelineDot}>
                  <Ionicons name="checkmark" size={16} color="#d1d5db" />
                </View>
                <Text style={styles.timelineLabel}>Completed</Text>
              </View>
            </View>
          </View>
          {/* Origin and Amount */}
          <View style={styles.bottomInfo}>
            <View style={styles.originContainer}>
              <Text style={styles.originLabel}>Origin:</Text>
              <Text style={styles.originValue}>{delivery.origin}</Text>
            </View>
            <Text style={styles.amountText}>
              N {delivery.amount.toLocaleString()}
            </Text>
          </View>
        </View>
      );
    }

    // Completed delivery card
    return (
      <View key={delivery.id} style={styles.completedDeliveryCard}>
        <View style={styles.completedHeader}>
          <View>
            <Text style={styles.packageId}>
              Package ID: {delivery.packageId}
            </Text>
            <View style={styles.deliveryBadge}>
              <Text style={styles.deliveryBadgeText}>Delivery</Text>
              <Ionicons name="arrow-forward" size={12} color="#007AFF" />
            </View>
          </View>
          <TouchableOpacity style={styles.joinButton}>
            <Ionicons name="time-outline" size={12} color="#fff" />
            <Text style={styles.joinButtonText}>Jun 16, 2:00pm</Text>
          </TouchableOpacity>
        </View>
      </View>
    );
  };

  return (
    <View style={styles.container}>
      <StatusBar barStyle="dark-content" />

      {/* Header */}
      <View style={styles.header}>
        <TouchableOpacity style={styles.backButton}>
          <Ionicons name="chevron-back" size={24} color="#fff" />
        </TouchableOpacity>
        <Text style={styles.headerTitle}>My Deliveries</Text>
        <View style={styles.headerRight} />
      </View>

      {/* Content */}
      <ScrollView style={styles.content} showsVerticalScrollIndicator={false}>
        {DELIVERIES.map(renderDeliveryCard)}
      </ScrollView>

      {/* Bottom Tab Bar */}
      <View style={styles.bottomBar}>
        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "deliveries" && styles.tabItemActive,
          ]}
          onPress={() => setActiveTab("deliveries")}
        >
          <Text
            style={[
              styles.tabLabel,
              activeTab === "deliveries" && styles.tabLabelActive,
            ]}
          >
            DELIVERIES
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "hours" && styles.tabItemActive,
          ]}
          onPress={() => setActiveTab("hours")}
        >
          <Text
            style={[
              styles.tabLabel,
              activeTab === "hours" && styles.tabLabelActive,
            ]}
          >
            HOURS
          </Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[
            styles.tabItem,
            activeTab === "cancels" && styles.tabItemActive,
          ]}
          onPress={() => setActiveTab("cancels")}
        >
          <Text
            style={[
              styles.tabLabel,
              activeTab === "cancels" && styles.tabLabelActive,
            ]}
          >
            CANCELS
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default MyDeliveries;

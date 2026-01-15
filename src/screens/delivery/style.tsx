import { StyleSheet } from "react-native";
import { COLORS } from "../../constant/colors";

export const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "rgba(126, 178, 255, 0.2)",
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    paddingHorizontal: 16,
    paddingVertical: 12,
    // backgroundColor: "#fff",
    borderBottomWidth: 1,
    borderBottomColor: "#f0f0f0",
    paddingTop: 45,
  },
  backButton: {
    width: 36,
    height: 36,
    borderRadius: 18,
    backgroundColor: COLORS.bg,
    justifyContent: "center",
    alignItems: "center",
  },
  headerTitle: {
    fontSize: 18,
    fontWeight: "700",
    color: "#000",
  },
  headerRight: {
    width: 36,
  },
  content: {
    flex: 1,
    padding: 16,
  },
  deliveryCard: {
    // backgroundColor: "rgba(255, 255, 255, 1)",
    borderRadius: 16,
    padding: 8,
    marginBottom: 16,
  },
  cardHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
  },
  challengeHeaderLeft: {
    flex: 1,
  },
  challengeTitle: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
    marginBottom: 4,
  },
  challengeSubtitle: {
    fontSize: 11,
    color: "#666",
  },
  rewardBadge: {
    backgroundColor: "rgba(16, 10, 44, 0.1)",
    paddingHorizontal: 10,
    paddingVertical: 5,
    borderRadius: 8,
  },
  rewardText: {
    fontSize: 11,
    fontWeight: "600",
    color: "rgba(16, 10, 44, 1)",
  },
  bikeSection: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-end",
    marginBottom: 16,
  },
  leftSection: {
    flex: 1,
  },
  timerButton: {
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 14,
    paddingVertical: 5,
    borderRadius: 20,
    alignSelf: "flex-start",
    marginBottom: 12,
  },
  timerText: {
    fontSize: 11,
    fontWeight: "600",
    color: "#fff",
  },
  progressText: {
    fontSize: 12,
    color: "#666",
  },
  progressValue: {
    fontWeight: "600",
    color: "#000",
  },
  bikeImageContainer: {
    position: "relative",
    width: 140,
    height: 100,
    justifyContent: "center",
    alignItems: "center",
  },
  bikeImage: {
    width: 120,
    height: 80,
  },
  dimensionBadge: {
    position: "absolute",
    bottom: 4,
    backgroundColor: "#007AFF",
    paddingHorizontal: 8,
    paddingVertical: 3,
    borderRadius: 4,
  },
  dimensionText: {
    fontSize: 9,
    fontWeight: "600",
    color: "#fff",
  },
  statusTabs: {
    flexDirection: "row",
    gap: "50%",
    marginBottom: 16,
  },
  statusTab: {
    flexDirection: "row",
    alignItems: "center",
    paddingHorizontal: 16,
    paddingVertical: 8,
    borderRadius: 8,
    backgroundColor: "transparent",
    gap: 6,
  },
  statusTabActive: {
    // backgroundColor: "#fff",
    borderBottomWidth: 1,
  },
  statusTabText: {
    fontSize: 13,
    fontWeight: "500",
    color: "#666",
  },
  statusTabTextActive: {
    color: "#000",
    fontWeight: "600",
  },
  completedBadge: {
    width: 18,
    height: 18,
    borderRadius: 9,
    backgroundColor: "#1a1a2e",
    justifyContent: "center",
    alignItems: "center",
  },
  completedBadgeText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
  },
  packageInfoCard: {
    // backgroundColor: "",
    borderRadius: 12,
    padding: 14,
    marginBottom: 12,
  },
  packageHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
    marginBottom: 16,
    backgroundColor: "rgba(126, 178, 255, 0.08)",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
  },
  packageId: {
    fontSize: 13,
    fontWeight: "600",
    color: "#000",
    marginBottom: 6,
  },
  deliveryBadge: {
    flexDirection: "row",
    alignItems: "center",
    gap: 4,
  },
  deliveryBadgeText: {
    fontSize: 11,
    color: "#007AFF",
    fontWeight: "500",
  },
  joinButton: {
    flexDirection: "row",
    alignItems: "center",
    backgroundColor: "#1a1a2e",
    paddingHorizontal: 10,
    paddingVertical: 6,
    borderRadius: 8,
    gap: 4,
  },
  joinButtonText: {
    fontSize: 10,
    fontWeight: "600",
    color: "#fff",
  },
  locationsContainer: {
    marginBottom: 20,
  },
  locationRow: {
    flexDirection: "row",
    alignItems: "flex-start",
  },
  timeColumn: {
    width: 40,
  },
  timeText: {
    fontSize: 12,
    color: "#999",
    fontWeight: "500",
  },
  dotColumn: {
    alignItems: "center",
    marginRight: 12,
  },
  locationDot: {
    width: 10,
    height: 10,
    borderRadius: 5,
    backgroundColor: "#10b981",
  },
  locationDotFilled: {
    backgroundColor: "#1a1a2e",
  },
  connectorLine: {
    width: 2,
    height: 30,
    backgroundColor: "#e0e0e0",
    marginVertical: 4,
  },
  locationTextColumn: {
    flex: 1,
  },
  locationText: {
    fontSize: 13,
    color: "#000",
    fontWeight: "500",
  },
  bottomTimeline: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
  },
  timelineStep: {
    alignItems: "center",
    flex: 1,
  },
  timelineDot: {
    width: 32,
    height: 32,
    borderRadius: 16,
    backgroundColor: "#d1d5db",
    justifyContent: "center",
    alignItems: "center",
    marginBottom: 6,
  },
  timelineDotActive: {
    backgroundColor: "#1a1a2e",
  },
  timelineLabel: {
    fontSize: 10,
    color: "#666",
    fontWeight: "500",
  },
  timelineConnector: {
    height: 2,
    flex: 0.5,
    backgroundColor: "#d1d5db",
    marginBottom: 28,
  },
  bottomInfo: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "center",
  },
  originContainer: {
    flexDirection: "row",
    gap: 4,
  },
  originLabel: {
    fontSize: 12,
    color: "#666",
  },
  originValue: {
    fontSize: 12,
    color: "#000",
    fontWeight: "500",
  },
  amountText: {
    fontSize: 16,
    fontWeight: "700",
    color: "#000",
  },
  completedDeliveryCard: {
    backgroundColor: "rgba(126, 178, 255, 0.2)",
    borderRadius: 12,
    padding: 14,
    marginBottom: 16,
  },
  completedHeader: {
    flexDirection: "row",
    justifyContent: "space-between",
    alignItems: "flex-start",
  },
  bottomBar: {
    flexDirection: "row",
    backgroundColor: "#1a1a2e",
    paddingVertical: 0,
    paddingHorizontal: 0,
  },
  tabItem: {
    flex: 1,
    alignItems: "center",
    justifyContent: "center",
    paddingVertical: 14,
    borderBottomWidth: 3,
    borderBottomColor: "transparent",
  },
  tabItemActive: {
    borderBottomColor: "#007AFF",
  },
  tabLabel: {
    fontSize: 12,
    fontWeight: "600",
    color: "#999",
  },
  tabLabelActive: {
    color: "#fff",
  },
});

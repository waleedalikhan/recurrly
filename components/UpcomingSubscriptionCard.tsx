import { formatCurrency } from "@/lib/utils";
import { Image, Text, View } from "react-native";

const UpcomingSubscriptionCard: React.FC<UpcomingSubscriptionCardProps> = ({
  icon,
  name,
  price,
  currency,
  daysLeft,
}) => {
  return (
    <View className="upcoming-card">
      <View className="upcoming-row">
        <Image source={icon} className="upcoming-icon" />
        <View>
          <Text className="upcoming-price">
            {formatCurrency(price, currency)}
          </Text>
          <Text className="upcoming-meta">
            {daysLeft} {daysLeft === 1 ? "day" : "days"} left
          </Text>
        </View>
      </View>
      <Text className="upcoming-name">{name}</Text>
    </View>
  );
};

export default UpcomingSubscriptionCard;

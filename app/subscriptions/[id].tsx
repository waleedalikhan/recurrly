import { useLocalSearchParams } from "expo-router";
import React from "react";
import { Text, View } from "react-native";

const SubscriptionDetails: React.FC = () => {
  const { id } = useLocalSearchParams();

  return (
    <View>
      <Text>Subscription Details: {id}</Text>
    </View>
  );
};

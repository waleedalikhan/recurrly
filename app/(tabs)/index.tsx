import ListHeading from "@/components/ListHeading";
import SubscriptionCard from "@/components/SubscriptionCard";
import UpcomingSubscriptionCard from "@/components/UpcomingSubscriptionCard";
import {
  HOME_BALANCE,
  HOME_SUBSCRIPTIONS,
  HOME_USER,
  UPCOMING_SUBSCRIPTIONS,
} from "@/constants/data";
import { icons } from "@/constants/icons";
import images from "@/constants/images";
import { formatCurrency } from "@/lib/utils";
import dayjs from "dayjs";
import { styled } from "nativewind";
import React, { useState } from "react";
import { FlatList, Image, Text, View } from "react-native";
import { SafeAreaView as RNSafeAreaView } from "react-native-safe-area-context";

const SafeAreaView = styled(RNSafeAreaView);

const HomeHeader: React.FC = () => (
  <View className="home-header">
    <View className="home-user">
      <Image
        source={images.avatar}
        resizeMode="contain"
        className="home-avatar"
      />
      <Text className="home-user-name">{HOME_USER.name}</Text>
    </View>
    <Image source={icons.add} className="home-add-icon" />
  </View>
);

const HomeBalanceCard: React.FC = () => (
  <View className="home-balance-card">
    <Text className="home-balance-label">Balance</Text>
    <View className="home-balance-row">
      <Text className="home-balance-amount">
        {formatCurrency(HOME_BALANCE.amount)}
      </Text>
      <Text className="home-balance-date">
        {dayjs(HOME_BALANCE.nextRenewalDate).format("MM/DD")}
      </Text>
    </View>
  </View>
);

const HomeUpcomingSubscriptions: React.FC = () => (
  <View>
    <ListHeading title="Upcoming" />
    <FlatList
      data={UPCOMING_SUBSCRIPTIONS}
      renderItem={({ item }) => <UpcomingSubscriptionCard {...item} />}
      keyExtractor={(item) => item.id}
      horizontal
      showsHorizontalScrollIndicator={false}
      ListEmptyComponent={
        <Text className="home-empty-state">No upcoming subscriptions</Text>
      }
    />
  </View>
);

export default function App() {
  const [expandedSubscriptionId, setExpandedSubscriptionId] = useState<
    string | null
  >(null);

  return (
    <SafeAreaView className="flex-1 bg-background p-5">
      <FlatList
        ListHeaderComponent={() => (
          <>
            <HomeHeader />
            <HomeBalanceCard />
            <HomeUpcomingSubscriptions />
            <ListHeading title="All Subscriptions" />
          </>
        )}
        data={HOME_SUBSCRIPTIONS}
        renderItem={({ item }) => (
          <SubscriptionCard
            {...item}
            expanded={expandedSubscriptionId === item.id}
            onPress={() =>
              setExpandedSubscriptionId((currentId) =>
                currentId === item.id ? null : item.id,
              )
            }
          />
        )}
        keyExtractor={(item) => item.id}
        extraData={expandedSubscriptionId}
        contentContainerClassName="gap-4 pb-16"
        showsVerticalScrollIndicator={false}
        ListEmptyComponent={
          <Text className="home-empty-state">No subscriptions yet</Text>
        }
      />
    </SafeAreaView>
  );
}

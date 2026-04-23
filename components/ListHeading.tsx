import { Text, TouchableOpacity, View } from "react-native";

const ListHeading: React.FC<ListHeadingProps> = ({ title }) => {
  return (
    <View className="list-head">
      <Text className="list-title">{title}</Text>
      <TouchableOpacity className="list-action">
        <Text className="list-action-text">View all</Text>
      </TouchableOpacity>
    </View>
  );
};

export default ListHeading;

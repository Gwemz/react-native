import React from "react";
import {
  View,
  Text,
  TouchableOpacity
} from "react-native";
import { useNavigation } from "@react-navigation/native";

const MatchContainer = () => {
    const navigation = useNavigation();
    return (
        <Text style={{color: "#ff6600",fontSize: 24}} onPress={()=> navigation.navigate('About')}>MatchContainer</Text>
    )
}

export default MatchContainer;
import { Text, View } from "react-native"; 

export default function Bio({ bioText }){
  return <View>
    <Text
      style={{color: "black"}}>{bioText}</Text>
  </View>
}
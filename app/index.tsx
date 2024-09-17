import { Text, View } from "react-native";
import Profile from "@/components/molecules/Profile"; 

export default function Index() {
  return (
    <View
      style={{
        flex: 1,
        justifyContent: "center",
        alignItems: "center",
      }}
    >

      <Profile
        nameText="Kelly Huang"
        bioText="I am a student in the D3 program in the faculty of Business & Media at BCIT."
      />
      
    </View>
  );
}

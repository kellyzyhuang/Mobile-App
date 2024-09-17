import { View } from "react-native"; 
import Name from "@/components/atoms/Name"; 
import Bio from "@/components/atoms/Bio"; 

export default function Profile ({ nameText, bioText }){
  return (
  <View
    style={{
      flexDirection: "column", 
      alignItems: "center",
      gap: 10
    }}>
    <img src="https://t3.ftcdn.net/jpg/05/16/27/58/360_F_516275801_f3Fsp17x6HQK0xQgDQEELoTuERO4SsWV.jpg" width="100" height="100"/> 
    <Name nameText={nameText}/>
    <Bio bioText={bioText}/>
  </View>
  )
}; 
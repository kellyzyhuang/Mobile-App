import { View, TextInput } from "react-native"; 
import Button from "@/components/atoms/Button"; 
import Label from "@/components/atoms/Label"; 

export default function InputForm ({ labelText, buttonText }){
  return (
  <View
    style={{
      flexDirection: "row",
      gap: 10,
      alignItems: "center", 
    }}>
    <Label labelText={labelText}/>
    <TextInput 
      style={{
        border: "5px dashed hotpink"
      }}
      /><Button buttonText={buttonText}
        />
  </View>
  )
}; 
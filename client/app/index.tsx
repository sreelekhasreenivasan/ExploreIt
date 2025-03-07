import { Image, ImageBackground, StyleSheet, Text, TouchableOpacity, View } from "react-native";
import React from "react";
import { Link, Stack } from "expo-router";
import { LinearGradient } from "expo-linear-gradient";
import Colors from "@/constants/Colors";
import { Ionicons } from "@expo/vector-icons";


const WelcomeScreen = () => {
  return (
    <>
    <ImageBackground 
        source={require("@/assets/images/pexels-nubikini-386009.jpg")}
        style={{flex:1}}
        resizeMode='cover'>
    <Stack.Screen options={{headerShown:false}}/>
    <View style={styles.container}>
      <LinearGradient colors={["transparent","rgba(255,255,255,0.1)","rgba(255,255,255,0.8)"]} style={styles.backgound}>
      <View style={styles.wrapper}>
      <Text style={styles.title}>ExploreIt</Text>
      <Text style={styles.description}>Break The Shell</Text>
      <View style={styles.socialLoginwrapper}>
        <Link href={"/signup"} asChild>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="mail-outline" size={22} color={Colors.black}/>
          <Text style={styles.btnTxt}>Continue with Email</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity style={styles.button}>
          <Image source={require('@/assets/images/png-transparent-google-logo-google-text-trademark-logo-thumbnail-removebg-preview.png')} style={{width:20,height:20}}></Image>
          <Text style={styles.btnTxt}>Continue with Google</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/signup"} asChild>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-apple" size={22} color={Colors.black}/>
          <Text style={styles.btnTxt}>Continue with Apple</Text>
        </TouchableOpacity>
      </Link>
      </View>
      <Text style={styles.loginTxt}>Already Have an account? {" "}
      <Link href={"/login"} asChild>
        <TouchableOpacity>
          <Text style={styles.loginTxtSpan}>LogIn</Text>
        </TouchableOpacity>
      </Link>
      </Text>
      </View>
      </LinearGradient>
    </View>
    </ImageBackground>
    </>
  );
};

export default WelcomeScreen;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: "center",
    alignItems: "center",
  },
  backgound: {
    flex:1,
    position:'absolute',
    top:0,
    bottom:0,
    left:0,
    right:0,
    justifyContent:'flex-end'
  },
  wrapper:{
    paddingBottom:50,
    paddingHorizontal:20,
    alignItems:'center'
  },
  title:{
    fontSize:30,
    color:Colors.primaryColor,
    fontWeight:'800',
    letterSpacing:2.4,
    marginBottom:5
  },
  description:{
    fontSize:16,
    color:"#508C9B",
    letterSpacing:1.2,
    lineHeight:30,
    marginBottom:20
  },
  socialLoginwrapper:{
    alignSelf:'stretch',
  },
  button:{
    flexDirection:'row',
    padding:10,
    borderRadius:25,
    borderBlockColor:"#737373",
    borderWidth:StyleSheet.hairlineWidth,
    alignItems:'center',
    justifyContent:'center',
    gap:5,
    marginBottom:15
  },
  btnTxt:{
    fontSize:14,
    fontWeight:'600',
    color:Colors.black

  },
  loginTxt:{
    marginTop:30,
    fontSize:14,
    color:Colors.black,
    lineHeight:24
  },
  loginTxtSpan:{
    color:Colors.primaryColor,
    fontWeight:'600'
  }
});
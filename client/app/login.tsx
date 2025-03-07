import { Image, StyleSheet, Text, TextInput, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Link, router, Stack } from 'expo-router'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const login = () => {
  return (
    <>
    <Stack.Screen options={{headerTitle:'',headerTitleAlign:'center',headerTransparent:true}}/>
    <View style={styles.container}>
      <Text style={styles.title}>Welcome Back</Text>
      <TextInput 
      placeholder='Email Address' 
      placeholderTextColor={'#A9A9A9'} 
      style={styles.inputField}
      autoCapitalize='none'
      keyboardType='email-address'
      />
      <TextInput 
      placeholder='Password' 
      placeholderTextColor={'#A9A9A9'} 
      style={styles.inputField}
      secureTextEntry={true}
      />
      <TouchableOpacity style={styles.btn} onPress={()=>{
        router.dismissAll();
        router.push('/(tabs)');
      }}>
        <Text style={styles.btnTxt}>Login</Text>
      </TouchableOpacity>
      <Text style={styles.loginTxt}>Don't Have an account? {" "}
      <Link href={"/signup"} asChild>
        <TouchableOpacity>
          <Text style={styles.loginTxtSpan}>SignUp</Text>
        </TouchableOpacity>
      </Link>
      </Text>
      <View style={styles.divider}/>
      <View style={styles.socialLoginwrapper}>
        <Link href={"/login"} asChild>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="mail-outline" size={22} color={Colors.black}/>
          <Text style={styles.btnTxt1}>Continue with Email</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/login"} asChild>
        <TouchableOpacity style={styles.button}>
          <Image source={require('@/assets/images/png-transparent-google-logo-google-text-trademark-logo-thumbnail-removebg-preview.png')} style={{width:20,height:20}}></Image>
          <Text style={styles.btnTxt1}>Continue with Google</Text>
        </TouchableOpacity>
      </Link>
      <Link href={"/login"} asChild>
        <TouchableOpacity style={styles.button}>
        <Ionicons name="logo-apple" size={22} color={Colors.black}/>
          <Text style={styles.btnTxt1}>Continue with Apple</Text>
        </TouchableOpacity>
      </Link>
      </View>
    </View>
    </>
  )
}

export default login

const styles = StyleSheet.create({
  container:{
      flex:1,
      justifyContent:'center',
      alignItems:'center',
      padding:20,
      backgroundColor:Colors.bgColor
    },
    title:{
      fontSize:34,
      fontWeight:'600',
      letterSpacing:1.2,
      color:Colors.primaryColor,
      marginBottom:50
    },
    inputField:{
      backgroundColor:Colors.white,
      paddingVertical:12,
      paddingHorizontal:18,
      alignSelf:'stretch',
      borderRadius:5,
      fontSize:16,
      color:Colors.black,
      marginBottom:20
    },
    btn:{
      backgroundColor:'#508C9B',
      paddingHorizontal:18,
      paddingVertical:14,
      alignSelf:'stretch',
      alignItems:'center',
      borderRadius:5,
      marginBottom:20
  
    },
    btnTxt:{
      color:Colors.white,
      fontSize:16,
      fontWeight:'600'
    },
    loginTxt:{
      marginBottom:30,
      fontSize:14,
      color:Colors.black,
      lineHeight:24
    },
    loginTxtSpan:{
      color:Colors.primaryColor,
      fontWeight:'600'
    },
    divider:{
      borderTopColor:'#A9A9A9',
      borderTopWidth:StyleSheet.hairlineWidth,
      width:'30%',
      marginBottom:30
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
        btnTxt1:{
          fontSize:14,
          fontWeight:'600',
          color:Colors.black
      
        }
})
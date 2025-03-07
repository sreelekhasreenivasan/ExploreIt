import { Dimensions, Image, ScrollView, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React from 'react'
import { Stack, useLocalSearchParams, useRouter } from 'expo-router'
import { ListingType } from '@/types/listingType';
import listingData from '@/data/destinations.json'
import { Feather, FontAwesome5, Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';

const {width}=Dimensions.get('window')
const IMG_HEIGHT = 300
const ListingDetails = () => {
    const {id}=useLocalSearchParams();
    const listing :ListingType = (listingData as ListingType[]).find(
        (item)=> item.id == id
    );
    const router = useRouter();
  return (
    <>
    <Stack.Screen options={{headerTitle:'',headerTransparent:true,headerBackVisible:false}}/>
    <View style={styles.container}>
        <ScrollView contentContainerStyle={{paddingBottom:150}}>
        <Image source={{uri:listing.image}} style={styles.image}/>
        <View style={{flexDirection:'row',justifyContent:'space-between',marginTop:10}}>
        <TouchableOpacity onPress={()=>router.push('/(tabs)/explore')} style={{
            backgroundColor:"rgba(226, 136, 51, 0.34)",
            borderRadius:10,
            marginLeft:10,
            alignItems:'center'
        }}>
            <View style={{backgroundColor:Colors.primaryColor,padding:8, borderRadius:10,marginLeft:10}}>
                <Feather name='arrow-left' size={24} color={Colors.white}/>
            </View>
        </TouchableOpacity>
      
        </View>
        <View style={styles.contentWrapper}>
        <Text style={styles.listingName}>{listing.name}</Text>
        <View style={styles.listinglocationWrapper}>
            <FontAwesome5 name='map-marker-alt' size={18} color={Colors.primaryColor}/>
            <Text style={styles.listinglocationTxt}>{listing.location}</Text>
        </View>
        <View style={styles.highlightWrapper}>
            <View style={{flexDirection:'row'}}>
                <View style={styles.highlightIcon}>
                    <Ionicons name='time' size={18} color={Colors.primaryColor}/>
                </View>
                <View>
                    <Text style={{fontSize:12,color:'#999'}}>Duration</Text>
                    <Text style={{fontSize:14,fontWeight:'600'}}>{listing.duration} days</Text>

                </View>

            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.highlightIcon}>
                    <FontAwesome5 name='users' size={18} color={Colors.primaryColor}/>
                </View>
                <View>
                    <Text style={{fontSize:12,color:'#999'}}>Person</Text>
                    <Text style={{fontSize:14,fontWeight:'600'}}>{listing.duration}</Text>

                </View>

            </View>
            <View style={{flexDirection:'row'}}>
                <View style={styles.highlightIcon}>
                    <Ionicons name='star' size={18} color={Colors.primaryColor}/>
                </View>
                <View>
                    <Text style={{fontSize:12,color:'#999'}}>Rating</Text>
                    <Text style={{fontSize:14,fontWeight:'600'}}>{listing.rating}</Text>

                </View>

            </View>
        </View>
        <Text style={{fontSize:16,color:Colors.black,lineHeight:25,letterSpacing:0.5}}>{listing.description}</Text>
        </View>
        </ScrollView>
    </View>
    <View style={styles.footer}>
        <TouchableOpacity onPress={()=>{}} style={[styles.footerBtn, styles.footerBookBtn]}>
            <Text style={{color:Colors.white,fontSize:16,fontWeight:'600'}}>ADD REVIEW</Text>
        </TouchableOpacity>
        <TouchableOpacity onPress={()=>{}}style={{
            backgroundColor:"rgba(226, 136, 51, 0.34)",
            borderRadius:10,
            marginRight:10,
            alignItems:'center'}}>
            <View style={{backgroundColor:Colors.primaryColor,padding:12, borderRadius:10}}>
                <Feather name='bookmark' size={24} color={Colors.white}/>
            </View>
        </TouchableOpacity>
    </View>
    </>
  )
}

export default ListingDetails

const styles = StyleSheet.create({
    image:{
        width: width,
        height:IMG_HEIGHT
    },
    contentWrapper:{
        padding:20,

    },
    container:{
        flex:1,
        backgroundColor:Colors.white,

    },
    listingName:{
        fontSize:25,
        fontWeight:'500',
        color:Colors.black,
        letterSpacing:0.6
    },
    listinglocationWrapper:{
        flexDirection:'row',
        marginTop:5,
        marginBottom:10,
        alignItems:'center'
    },
    listinglocationTxt:{
        fontSize:14,
        marginLeft:5,
        color:Colors.black
    },
    highlightWrapper:{
        flexDirection:'row',
        marginVertical:20,
        justifyContent:'space-between'
    },
    highlightIcon:{
        backgroundColor:'#F4F4F4',
        paddingHorizontal:8,
        paddingVertical:5,
        borderRadius:8,
        marginRight:5,
        alignItems:'center'
    },
    footer:{
        flexDirection:'row',
        position:'absolute',
        bottom:0,
        padding:20,
        paddingBottom:30,
        width:width,
    },
    footerBtn:{
        flex:1,
        backgroundColor:Colors.black,
        padding:20,
        borderRadius:10,
        alignItems:'center'
    },
    footerBookBtn:{
        flex:2,
        backgroundColor:Colors.primaryColor,
        marginRight:20
    }
})
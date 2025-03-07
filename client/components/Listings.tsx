import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListingType } from '@/types/listingType'
import Colors from '@/constants/Colors'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
    listings: any[]
    category:string
}

const Listings = ({ listings,category }: Props) => {

    const [loading,setLoading]=useState(false);

    useEffect(()=>{

        setLoading(true);

        setTimeout(()=>{
            setLoading(false),200
        })
    },[category])

    const renderItems:ListRenderItem<ListingType> = ({ item }) => {
        return (
        <Link href={`/listing/${item.id}`} asChild>
           <TouchableOpacity>
            <View style={styles.item}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <View>
                    <Ionicons name='bookmark-outline' size={20} style={styles.bookmark}/>
                </View>
                <Text style={styles.itemTxt} numberOfLines={1} ellipsizeMode='tail'>{item.name}</Text>
                <View style={{flexDirection:'row', justifyContent:'space-between'}}>
                    <View style={{flexDirection:'row'}}>
                        <FontAwesome5 name='map-marker-alt' size={18} color={Colors.primaryColor}/>
                        <Text style={{marginLeft:10,fontWeight:'400'}}>{item.location}</Text>
                    </View>
                </View>
            </View>
           </TouchableOpacity>
        </Link>
        )
    }

    return (
        <View>
            <FlatList 
            data={loading?[]:listings} 
            renderItem={renderItems}  
            horizontal 
            showsHorizontalScrollIndicator={false}/>
        </View>
    )
}

export default Listings

const styles = StyleSheet.create({
    item:{
        backgroundColor:Colors.white,
        padding:12,
        marginRight:50,
        width:314,
        height:450,
        borderRadius:10,
        marginTop:20


    },
    image:{
        width:290, 
        height:350,
        borderRadius:10,
        marginBottom:30,
    },
    bookmark:{
        position:'absolute',
        bottom:10,
        right:30,
        backgroundColor:Colors.primaryColor,
        padding:10,
        borderRadius:30,
        borderWidth:2,
        borderColor:Colors.white,
        color:Colors.white

    },
    itemTxt:{
        fontSize:16,
        fontWeight:'500',
        color:Colors.black,
        marginBottom:10
    },
    
})

import { FlatList, Image, ListRenderItem, StyleSheet, Text, View } from 'react-native'
import React from 'react'
import { GroupType } from '@/types/groupType'
import Colors from '@/constants/Colors'
import { Ionicons } from '@expo/vector-icons'

const GroupListings = ({listings}:{listings:GroupType[]}) => {

    const renderItem:ListRenderItem<GroupType>=({item})=>{
        return(
           <View style={styles.item}>
                <Image source={{uri:item.image}} style={styles.image}/>
                <View style={{margin:10}}>
                    <Text style={{fontSize:20,fontWeight:'600',color:Colors.black,marginBottom:8}}>{item.name}</Text>
                        <View style={{flexDirection:'row',alignItems:'center'}}>
                            <Ionicons name='star' size={20} style={{color:Colors.primaryColor}}/>
                            <Text style={{fontSize:18, fontWeight:'600',color:Colors.black,marginLeft:5}}>{item.rating}</Text>
                            <Text style={{color:'#999',marginLeft:5}}>({item.reviews})</Text>
                        </View>
                </View>
            </View>
        )
    }

  return (
    <View style={{marginVertical:20}}>
      <Text style={styles.titleTxt}>Top Travel Groups</Text>
      <FlatList data={listings} renderItem={renderItem} horizontal showsHorizontalScrollIndicator={false}/>
      
    </View>
  )
}

export default GroupListings

const styles = StyleSheet.create({
    image:{
        width:100,
        height:140,
        borderRadius:10,
        marginRight:10
    },
    item:{
        backgroundColor:Colors.white,
        padding:10,
        borderRadius:10,
        marginRight:20,
        flexDirection:'row',
        alignItems:'center'
    },
    titleTxt:{
        fontSize:22,
        fontWeight:'600',
        color:Colors.black,
        marginBottom:10,


    }
})
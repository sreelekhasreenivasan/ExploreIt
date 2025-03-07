import { StyleSheet, View, Text, ScrollView, TouchableOpacity, TouchableOpacityProps } from 'react-native'
import React, { useRef, useState } from 'react'
import Colors from '@/constants/Colors'
import destinationCategories from '@/data/categories'
import { MaterialCommunityIcons } from '@expo/vector-icons'

type Props = {
    onCategoryChanged:(category:string)=> void;
}

const CategoryButton = ({onCategoryChanged}:Props) => {
    const scrollRef=useRef<ScrollView>(null)
    const itemRef = useRef<TouchableOpacity | null[]>([]);
    const [activeIndex,setActiveIndex]=useState(0);
    const handleSelectCategory=(index:number)=>{
        const selected = itemRef.current[index];
        setActiveIndex(index);
       
        selected?.measure((x)=>{
            scrollRef.current?.scrollTo({x:x, y:0, animated:true})
        })

        onCategoryChanged(destinationCategories[index].title);
        
    }
  return (
    <View>
    <Text style={styles.titleTxt}>Categories</Text>
        
      <ScrollView 
      ref={scrollRef}
      horizontal 
      showsHorizontalScrollIndicator={false} 
      contentContainerStyle={{
        gap:20,
        paddingVertical:10,
        marginBottom:10
      }}>
        {destinationCategories.map((item,index)=>(
            <TouchableOpacity 
            key={index} 
            ref={(el)=>itemRef.current[index]=el} 
            onPress={()=>handleSelectCategory(index)} 
            style={activeIndex== index ? styles.categoryBtnActive: styles.categoryBtn}>
                <MaterialCommunityIcons name={item.iconName as any} size={20} color={activeIndex == index ? Colors.white:Colors.black}/>
                <Text style={activeIndex==index ? styles.categoryBtnTxtActive: styles.categoryBtnTxt}>{item.title}</Text>
            </TouchableOpacity>
        ))}
      </ScrollView>
    </View>
  )
}

export default CategoryButton

const styles = StyleSheet.create({
    title:{
        fontSize:25,
        fontWeight:'700',
        color:Colors.black,
        marginTop:20,
        marginBottom:20
    },
    categoryBtn:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.white,
        paddingHorizontal:18,
        paddingVertical:15,
        borderRadius:10,
        shadowColor:"#333333",
        shadowOffset:{width:1,height:2},
        shadowOpacity:0.1,
        shadowRadius:3,
    },
    categoryBtnActive:{
        flexDirection:'row',
        alignItems:'center',
        backgroundColor:Colors.primaryColor,
        paddingHorizontal:18,
        paddingVertical:15,
        borderRadius:10,
        shadowColor:"#333333",
        shadowOffset:{width:1,height:2},
        shadowOpacity:0.1,
        shadowRadius:3,
    },
    categoryBtnTxt:{
        marginLeft:10,
        color:Colors.black,
        
    },
    categoryBtnTxtActive:{
        marginLeft:10,
        color:Colors.white
    },
      titleTxt:{
            fontSize:32,
            fontWeight:'600',
            color:Colors.black,
            marginBottom:20,
    
    
        }
})
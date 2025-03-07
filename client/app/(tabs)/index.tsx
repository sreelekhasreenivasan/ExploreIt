import {Image, ImageBackground, ScrollView, StyleSheet, Text, TouchableOpacity, View, SafeAreaView,} from 'react-native';
import React, { useState } from 'react';
import { Stack } from 'expo-router';
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors';
import { useHeaderHeight } from '@react-navigation/elements';
import { LinearGradient } from 'expo-linear-gradient';
import { Animated, Easing } from 'react-native';
import Listing1 from '@/components/Listing1';
import ListingData from '@/data/destinations.json'
import Most from '@/components/Most';
import GroupListings from '@/components/GroupListings';
import groupData from '@/data/groups.json'


const Page = () => {
  const headerHeight = useHeaderHeight();
    const [category,setCategory]=useState('All')
  
    const onCatChanged = (category:string)=>{
      console.log(category);
      
      setCategory(category)
    }
  
  const fadeAnim = new Animated.Value(0);

  React.useEffect(() => {
    Animated.timing(fadeAnim, {
      toValue: 1,
      duration: 1500,
      easing: Easing.ease,
      useNativeDriver: true,
    }).start();
  }, []);

  return (
    <>
      <Stack.Screen
        options={{
          headerBackground: () => <View style={{ flex: 1 }} />,
          headerTitle: '',
          headerTransparent: true,
          headerLeft: () => (
            <TouchableOpacity onPress={() => {}} style={styles.profileIcon}>
              <Image
                source={{
                  uri: 'https://thumbs.dreamstime.com/b/faceless-female-airport-staff-avatar-icon-wearing-blue-uniform-yellow-hat-female-airport-staff-avatar-icon-wearing-uniform-334006653.jpg',
                }}
                style={styles.profileImage}
              />
            </TouchableOpacity>
          ),
          headerRight: () => (
            <TouchableOpacity onPress={() => {}} style={styles.notificationButton}>
              <Ionicons name="notifications" size={30} color={Colors.black} />
            </TouchableOpacity>
          ),
        }}
      />

      <View style={[styles.container, { paddingTop: headerHeight }]}>
        <ScrollView showsVerticalScrollIndicator={false}>
          <SafeAreaView style={styles.safeArea}>
            <View style={styles.rowContainer}>
              <ImageBackground
                source={{
                  uri: 'https://static.vecteezy.com/system/resources/previews/043/028/681/non_2x/seamless-pattern-with-french-symbols-france-illustrations-colored-ornament-of-cheese-wine-croissant-eifel-tower-on-white-background-travel-to-paris-cute-doodle-icons-for-wrapping-vector.jpg',
                }}
                style={styles.background}
                imageStyle={{ borderRadius: 20 }}
              >
                <LinearGradient
                  colors={['rgba(0,0,0,0.5)', 'transparent']}
                  style={styles.gradientOverlay}
                />

                <Animated.View style={[styles.textContainer, { opacity: fadeAnim }]}>
                  <Text style={styles.headingText}>Explore The Beautiful World!</Text>
                </Animated.View>
              </ImageBackground>
            </View>
          </SafeAreaView>
          <Text style={styles.titleTxt}>Recommended</Text>
          <Listing1 listings={ListingData} category={category}/>
          <Text style={styles.titleTxt1}>Mostly Viewed</Text>
          <Most listings={ListingData} category={category}/>
          <GroupListings listings={groupData}/>
        </ScrollView>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    paddingHorizontal: 20,
    backgroundColor: Colors.bgColor,
  },
  safeArea: {
    flex: 1,
  },
  rowContainer: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 20,
    paddingHorizontal: 20,
  },
  background: {
    height: 200,
    width: 455,
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    elevation: 5,
  },
  gradientOverlay: {
    position: 'absolute',
    height: '100%',
    width: '100%',
    borderRadius: 20,
  },
  textContainer: {
    position: 'fixed',
    width:300,
    backgroundColor: 'rgba(0, 0, 0, 0.5)',
    paddingVertical: 15,
    paddingHorizontal: 20,
    borderRadius: 15,
    marginLeft:80,
    marginTop:45
  },
  headingText: {
    fontSize: 30,
    fontWeight: 'bold',
    color: Colors.white,
    textAlign: 'center',
    textTransform: 'uppercase',
    letterSpacing: 1.2,
    paddingTop:20
  },
  subText: {
    fontSize: 16,
    color: Colors.white,
    textAlign: 'center',
    marginTop: 5,
    fontStyle: 'italic',
  },
  profileIcon: {
    marginLeft: 20,
    marginTop: 20,
  },
  profileImage: {
    width: 50,
    height: 50,
    borderRadius: 10,
  },
  notificationButton: {
    marginTop: 20,
    marginRight: 20,
    backgroundColor: Colors.white,
    padding: 10,
    borderRadius: 10,
    shadowColor: '#171717',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 3,
  },
  titleTxt:{
          fontSize:35,
          fontWeight:'600',
          color:Colors.black,
          marginBottom:20,
          marginTop:30
      },
      titleTxt1:{
        fontSize:25,
        fontWeight:'600',
        color:Colors.black,
        marginBottom:10,
        marginTop:30
    }
});

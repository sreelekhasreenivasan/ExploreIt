import React, { useEffect, useState } from 'react';
import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View, ActivityIndicator, Animated, ScrollView } from 'react-native';
import { ListingType } from '@/types/listingType';
import Colors from '@/constants/Colors';
import { Link } from 'expo-router';

type Props = {
  listings: any[];
  category: string;
};

const Listing1 = ({ listings, category }: Props) => {

  const renderItems: ListRenderItem<ListingType> = ({ item }) => {
    return (
        <ScrollView>
        <View>
      <Link href={`/listing/${item.id}`} asChild>
        <TouchableOpacity>
          <View style={styles.item}>
            <Image source={{ uri: item.image }} style={styles.image} />
            <View style={[styles.textContainer,]}>
              <Text style={styles.itemTxt} numberOfLines={1}>
                {item.name}
              </Text>
            </View>
          </View>
        </TouchableOpacity>
      </Link>
      </View>
      </ScrollView>
    );
  };

  return (
    <View>
        <FlatList
          data={listings}
          renderItem={renderItems}
          horizontal
          showsHorizontalScrollIndicator={false}
        />
      
    </View>
  );
};

export default Listing1;

const styles = StyleSheet.create({
  item: {
    marginRight: 36,
    width: 314,
    height: 180,
    borderRadius: 20,
    marginTop: 15,
    elevation: 5,
    shadowColor: '#000',
    shadowOffset: { width: 2, height: 4 },
    shadowOpacity: 0.2,
    shadowRadius: 5,
    overflow: 'hidden',
    marginBottom:16,
    backgroundColor:"#508C9B",
  },
  image: {
    width: '90%',
    height: '80%',
    borderRadius: 20,
    position: 'absolute',
    marginTop:18,
    marginLeft:14
  },
  textContainer: {
    position: 'absolute',
    bottom: 20,
    left: 20,
    right: 20,
    padding: 15,
    borderRadius: 10,
    opacity: 0.75, 
    flexDirection: 'column',
    alignItems: 'flex-start',
  },
  itemTxt: {
    fontSize: 18,
    fontWeight: '900',
    color: Colors.white,
    marginBottom: 1,
    textTransform: 'capitalize',

  },
});

import { FlatList, Image, ListRenderItem, StyleSheet, Text, TouchableOpacity, View } from 'react-native'
import React, { useEffect, useState } from 'react'
import { ListingType } from '@/types/listingType'
import Colors from '@/constants/Colors'
import { FontAwesome, FontAwesome5, Ionicons } from '@expo/vector-icons'
import { Link } from 'expo-router'

type Props = {
    listings: any[]
    category: string
}

const Most = ({ listings, category }: Props) => {
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        setLoading(true);
        setTimeout(() => {
            setLoading(false);
        }, 200)
    }, [category])

    const renderItems: ListRenderItem<ListingType> = ({ item }) => {
        return (
            <Link href={`/listing/${item.id}`} asChild>
                <TouchableOpacity>
                    <View style={styles.item}>
                        <Image source={{ uri: item.image }} style={styles.image} />
                        <View style={styles.itemContent}>
                            <View style={styles.locationContainer}>
                                <FontAwesome5 name='map-marker-alt' size={18} color={Colors.primaryColor} />
                                <Text style={styles.locationText}>{item.location}</Text>
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
                data={loading ? [] : listings}
                renderItem={renderItems}
                horizontal
                showsHorizontalScrollIndicator={false}
            />
        </View>
    )
}

export default Most

const styles = StyleSheet.create({
    item: {
        padding: 12,
        marginRight: 20,
        width: 200,
        height: 210,
        borderRadius: 15,
        marginTop: 20,
        shadowColor: '#000',
        shadowOffset: { width: 0, height: 4 },
        shadowOpacity: 0.2,
        shadowRadius: 6,
        backgroundColor: '#508C9B',
        elevation: 5,
        overflow: 'hidden',
        transform: [{ scale: 1 }],
        transitionDuration: 'transform 0.3s ease-in-out',
    },
    image: {
        width: 160,
        height: 130,
        borderRadius: 12,
        marginBottom: 15,
        alignSelf: 'center',
        objectFit: 'cover',
    },
    itemContent: {
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: 'flex-start',
        marginTop: 10,
    },
    locationContainer: {
        flexDirection: 'row',
        alignItems: 'center',
    },
    locationText: {
        marginLeft: 10,
        fontSize: 14,
        fontWeight: '400',
        color: Colors.white,
    },
});

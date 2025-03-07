import { StyleSheet, Text, View, Image, TouchableOpacity } from 'react-native'
import React from 'react'
import { Ionicons } from '@expo/vector-icons';
import Colors from '@/constants/Colors'; 
import { Link, Stack } from 'expo-router';

const Page = () => {
  return (
    <>
      <Stack.Screen options={{ headerTitle: '', headerTransparent: true }} />
      <View style={styles.container}>
        <View style={styles.profileContainer}>
          <View style={styles.profileImageContainer}>
            <Image
              source={{
                uri: 'https://thumbs.dreamstime.com/b/faceless-female-airport-staff-avatar-icon-wearing-blue-uniform-yellow-hat-female-airport-staff-avatar-icon-wearing-uniform-334006653.jpg',
              }}
              style={styles.profileImage}
            />
            <View style={styles.imageIcons}>
              <TouchableOpacity style={styles.imageIcon}>
                <Ionicons name="camera" size={25} color={Colors.white} />
              </TouchableOpacity>
              <TouchableOpacity style={styles.imageIcon}>
                <Ionicons name="trash" size={25} color={Colors.white} />
              </TouchableOpacity>
            </View>
          </View>

          <Text style={styles.name}>John Doe</Text>

          <View style={styles.optionsContainer}>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="settings-outline" size={20} color={Colors.primaryColor} />
              <Text style={styles.optionText}>Settings</Text>
            </TouchableOpacity>

            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="list-outline" size={20} color={Colors.primaryColor} />
              <Text style={styles.optionText}>Activities</Text>
            </TouchableOpacity>
            <Link href={'/login'} asChild>
            <TouchableOpacity style={styles.optionButton}>
              <Ionicons name="log-out-outline" size={20} color={Colors.primaryColor} />
              <Text style={styles.optionText}>Sign Out</Text>
            </TouchableOpacity>
            </Link>
          </View>
        </View>
      </View>
    </>
  );
};

export default Page;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: Colors.bgColor,
  },
  profileContainer: {
    marginTop: 150, 
    alignItems: 'center',
    justifyContent: 'center',
    padding: 20,
    backgroundColor: Colors.white,
    borderRadius: 20,
    marginHorizontal: 15,
    height: '65%',
    shadowColor: Colors.black,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 5,
  },
  profileImageContainer: {
    position: 'relative', 
    marginBottom: 35,
  },
  profileImage: {
    width: 120,
    height: 120,
    borderRadius: 60,
    borderWidth: 3,
    borderColor: Colors.primaryColor,
  },
  imageIcons: {
    position: 'absolute', 
    bottom: -12,           
    right: -11,            
    flexDirection: 'row', 
    gap: 56,              
  },
  imageIcon: {
    backgroundColor: 'rgba(0, 0, 0, 0.6)', 
    borderRadius: 25,                      
    padding: 8,                             
  },
  name: {
    fontSize: 22,
    fontWeight: '700',
    color: Colors.primaryColor,
    marginBottom: 5,
  },
  optionsContainer: {
    marginTop: 20,
    width: '80%',
    paddingHorizontal: 20,
    backgroundColor: '#508C9B',
    gap: 15,
    bottom: 20,
    borderRadius: 20,
    top: 20,
    shadowColor: Colors.primaryColor,
    shadowOpacity: 0.1,
    shadowOffset: { width: 0, height: 5 },
    shadowRadius: 15,
    elevation: 5,
    paddingVertical:20
  },
  optionButton: {
    flexDirection: 'row',
    alignItems: 'center',
    paddingVertical: 15,
    borderBottomColor: Colors.primaryColor,
  },
  optionText: {
    fontSize: 16,
    fontWeight: '500',
    color: Colors.white,
    marginLeft: 10,
  },
});

import React from "react";
import { View, Text, Image, TouchableOpacity, StyleSheet } from "react-native";

const JobSeekerCard = ({navigation}) => {
  return (
    <View style={styles.card}>
      <Text style={styles.jobRole}>Lorry Driver</Text>
      
      <View style={styles.middleSection}>
        <Text style={styles.heading}>About:</Text>
        <Text style={styles.description}>
          Join our team as a 3D Designer and bring your creative skills to life!
          Work on exciting projects and collaborate with a...
        </Text>
        
        <Text style={styles.heading}>Company Name:</Text>
        <Text style={styles.details}>Creative Designs Ltd.</Text>

        <Text style={styles.heading}>Posted By:</Text>
        <View style={styles.header}>
          
          <View>
            <Text style={styles.name}>Mehran Ghanbari</Text>
            
          </View>
        </View>
        
        <Text style={styles.heading}>Salary:</Text>
        <Text style={styles.price}>₹500/Day</Text>
        
        <Text style={styles.heading}>Location:</Text>
        <Text style={styles.details}>Bangalore, India</Text>
      </View>
      
      <TouchableOpacity style={styles.applyButton}>
        <Text style={styles.applyText}>Apply</Text>
      </TouchableOpacity>
    </View>
  );
};

const styles = StyleSheet.create({
  card: {
    backgroundColor: "#fff",
    padding: 15,
    borderRadius: 10,
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 10,
    marginTop: 150,
    width:"90%",
    alignSelf:"center"
  },
  jobRole: {
    fontSize: 20,
    fontWeight: "bold",
    marginBottom: 10,
    textAlign: "center",
  },
  middleSection: {
    marginBottom: 15,
  },
  heading: {
    fontSize: 14,
    fontWeight: "bold",
    marginTop: 10,
  },
  header: {
    flexDirection: "row",
    alignItems: "center",
    marginBottom: 10,
  },
  profileImage: {
    width: 40,
    height: 40,
    borderRadius: 20,
    marginRight: 10,
  },
  name: {
    fontWeight: "bold",
    fontSize: 18,
  },
  time: {
    color: "gray",
    fontSize: 12,
  },
  description: {
    fontSize: 14,
    marginBottom: 10,
  },
  price: {
    fontWeight: "bold",
    fontSize: 18,
  },
  details: {
    color: "black",
    fontSize:18 ,
    marginBottom: 10,
    fontWeight:"bold"
  },
  applyButton: {
    backgroundColor: "#BFFF00",
    paddingVertical: 10,
    borderRadius: 10,
    alignItems: "center",
  },
  applyText: {
    fontSize: 16,
    fontWeight: "bold",
    color: "black",
  },
});

export default JobSeekerCard;
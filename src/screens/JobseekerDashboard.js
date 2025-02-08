import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Animated, ScrollView,TouchableOpacity } from 'react-native';
import { IconButton, Card, Button } from 'react-native-paper';
import { MaterialIcons } from "@expo/vector-icons";
import { useNavigation } from '@react-navigation/native';


const jobsData = [
    {
        id: '1',
        title: 'Cooking & driving service available',
        location: 'Bank Colony, Bhimavaram',
        salary: '1,000 - 1,500 per month',
        role: 'Cook/Chef',
    },
    {
        id: '2',
        title: 'Field sales executive female',
        location: 'Housing Board Colony, Bhimavaram',
        salary: '8,000 - 15,000 per month',
        role: 'Marketing',
    },
    {
        id: '3',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '4',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '5',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '6',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '7',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '8',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '9',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '10',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '11',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
    {
        id: '12',
        title: 'Required candidate in Bhimavaram',
        location: 'Bhimavaram Narasapuram Road, Bhimavaram',
        salary: '15,000 - 16,000 per month',
        role: 'Electrician',
    },
];

const filterOptions = ['Paperboy', 'Carpenter', 'Waiter', 'Worker', 'Shopkeeper', 'Part-time', 'Full-time'];

const JobCard = ({ job}) => {
  const navigation = useNavigation();
  return (
    <View style={styles.card}>
      <View style={styles.titleContainer}>
        <MaterialIcons name="engineering" size={25} color="black" />
        <Text style={styles.title}>{job.title}</Text>
      </View>
      <View style={styles.bottomSection}>
        <View style={styles.locationContainer}>
          <MaterialIcons name="location-on" size={16} color="black" />
          <Text style={styles.companyText}>{job.location}</Text>
        </View>
        <TouchableOpacity style={styles.viewButton}>
          <Text mode="contained" onPress={() => navigation.navigate('JobSeekerCard')} style={styles.viewText}>
            View
          </Text>
        </TouchableOpacity>
      </View>
    </View>
  );
};

const JobseekerDashboard = ({ navigation }) => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(-300)).current;
  const filterPanelAnimation = useRef(new Animated.Value(0)).current;

  const toggleDrawer = () => {
    Animated.timing(drawerAnimation, {
      toValue: isDrawerOpen ? -300 : 0,
      duration: 300,
      useNativeDriver: true,
    }).start();
    setIsDrawerOpen(!isDrawerOpen);
  };

  const toggleFilterPanel = () => {
    setIsFilterPanelVisible(!isFilterPanelVisible);
    Animated.timing(filterPanelAnimation, {
      toValue: isFilterPanelVisible ? 0 : 1,
      duration: 300,
      useNativeDriver: true,
    }).start();
  };

  const renderHeader = () => (
    <>
      <View style={styles.header}>
        <IconButton icon="menu" size={30} onPress={toggleDrawer} />
        <Text style={styles.headerTitle}>Job Listings</Text>
        <Button mode="contained" style={styles.filterButton} labelStyle={styles.filterButtonLabel} onPress={toggleFilterPanel}>
          Filters
        </Button>
      </View>
      <TextInput style={styles.searchBar} placeholder="Search jobs..." />
      {isFilterPanelVisible && (
        <Animated.View
          style={[
            styles.filterPanel,
            {
              opacity: filterPanelAnimation,
              transform: [
                {
                  scale: filterPanelAnimation.interpolate({
                    inputRange: [0, 1],
                    outputRange: [0.9, 1],
                  }),
                },
              ],
            },
          ]}
        >
          {filterOptions.map((option) => (
            <Button key={option} mode="outlined" style={styles.filterOptionButton} onPress={() => alert(`Filter: ${option}`)}>
              {option}
            </Button>
          ))}
        </Animated.View>
      )}
      <View style={styles.warningBanner}>
        <Text style={styles.warningText}>Beware of Scammers! NEVER pay any money to anyone promising a job.</Text>
      </View>
    </>
  );

  return (
    <View style={styles.container}>
      <Animated.View style={[styles.drawer, { transform: [{ translateX: drawerAnimation }] }]}>
        <IconButton icon="close" size={24} onPress={toggleDrawer} style={styles.drawerCloseIcon} />
        <Text style={styles.drawerItem} onPress={() => navigation.navigate('JobProviderProfile')}>
          Profile
        </Text>
        <Text style={styles.drawerItem}>Settings</Text>
        <Text style={styles.drawerItem}>Logout</Text>
      </Animated.View>
      <FlatList
        data={jobsData}
        keyExtractor={(item) => item.id}
        renderItem={({ item }) => <JobCard job={item} navigation={navigation} />}
        ListHeaderComponent={renderHeader}
      />
    </View>
  );
};


const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 25 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: 'bold' },
  filterButton: { backgroundColor: '#0384fc', borderRadius: 4, padding: 2, fontSize: 18 },
  searchBar: { margin: 10, padding: 15, backgroundColor: '#fff', borderRadius: 8, fontSize: 16, borderColor: 'grey', borderWidth: 1 },
  warningBanner: { backgroundColor: '#ffeb3b', padding: 10, margin: 10, borderRadius: 8 },
  warningText: { color: '#d32f2f', fontWeight: 'bold' },
  card: { margin: 10, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#555' },
  salary: { fontSize: 14, color: '#1e88e5', marginTop: 5 },
  role: { fontSize: 14, color: '#757575', marginBottom: 5 },
  drawer: { position: 'absolute', top: 0, left: 0, width: 300, height: '100%', backgroundColor: '#fff', padding: 20, zIndex: 10 },
  drawerCloseIcon: { alignSelf: 'flex-end' },
  drawerItem: { fontSize: 18, marginBottom: 30, marginLeft: 30 },
  filterButtonLabel: { fontSize: 19 },
  filterPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor: 'white',
  },
  filterOptionButton: {
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor: 'white',
    color: 'black',
  },
  card: {
    backgroundColor: "#F8F6FB",
    borderRadius: 15,
    padding: 20,
    width: "90%",
    alignSelf: "center",
    shadowColor: "#000",
    shadowOpacity: 0.1,
    shadowRadius: 5,
    elevation: 5,
    marginTop: 25,
  },
  titleContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  title: {
    fontSize: 20,
    fontWeight: "bold",
    marginVertical: 10,
    marginLeft: 10,
  },
  bottomSection: {
    flexDirection: "row",
    alignItems: "center",
    justifyContent: "space-between",
    marginTop: 15,
  },
  locationContainer: {
    flexDirection: "row",
    alignItems: "center",
  },
  companyText: {
    fontWeight: "bold",
    marginLeft: 5,
  },
  viewButton: {
    backgroundColor: "#0384fc",
    borderRadius: 20,
    paddingVertical: 6,
    paddingHorizontal: 15,
  },
  viewText: {
    color: "white",
    fontWeight: "bold",
  },
});

export default JobseekerDashboard;
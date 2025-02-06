import React, { useState, useRef } from 'react';
import { View, Text, TextInput, FlatList, StyleSheet, Animated, ScrollView } from 'react-native';
import { IconButton, Card, Button } from 'react-native-paper';


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

const JobCard = ({ job }) => (
  <Card style={styles.card}>
    <Card.Content>
      <Text style={styles.title}>{job.title}</Text>
      <Text style={styles.subtitle}>{job.location}</Text>
      <Text style={styles.salary}>Salary: {job.salary}</Text>
      <Text style={styles.role}>Role: {job.role}</Text>
    </Card.Content>
    <Card.Actions>
      <Button mode="contained" onPress={() => alert(`Applied for ${job.role}!`)} buttonColor="#0384fc">Apply</Button>
    </Card.Actions>
  </Card>
);

const JobseekerDashboard = () => {
  const [isDrawerOpen, setIsDrawerOpen] = useState(false);
  const [isFilterPanelVisible, setIsFilterPanelVisible] = useState(false);
  const drawerAnimation = useRef(new Animated.Value(-300)).current;

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
  };

  return (
    <View style={styles.container}>
      {/* Header */}
      <View style={styles.header}>
        <IconButton icon="menu" size={24} onPress={toggleDrawer} />
        <Text style={styles.headerTitle}>Job Listings</Text>
        <Button mode="contained" style={styles.filterButton} labelStyle={styles.filterButtonLabel} onPress={toggleFilterPanel}>
          Filters
        </Button>
      </View>

      {/* Drawer */}
      <Animated.View style={[styles.drawer, { transform: [{ translateX: drawerAnimation }] }]}>
        <IconButton icon="close" size={24} onPress={toggleDrawer} style={styles.drawerCloseIcon} />
        <Text style={styles.drawerItem}>Profile</Text>
        <Text style={styles.drawerItem}>Settings</Text>
        <Text style={styles.drawerItem}>Logout</Text>
      </Animated.View>

      {/* Main Content */}
      <ScrollView>
        {/* Search Bar */}
        <TextInput style={styles.searchBar} placeholder="Search jobs..." />

        {/* Filter Panel */}
        {isFilterPanelVisible && (
          <View style={styles.filterPanel}>
            {filterOptions.map((option) => (
              <Button key={option} mode="outlined" style={styles.filterOptionButton} onPress={() => alert(`Filter: ${option}`)}>
                {option}
              </Button>
            ))}
          </View>
        )}

        {/* Warning Banner */}
        <View style={styles.warningBanner}>
          <Text style={styles.warningText}>
            Beware of Scammers! NEVER pay any money to anyone promising a job.
          </Text>
        </View>

        {/* Job Listings */}
        <FlatList
          data={jobsData}
          keyExtractor={(item) => item.id}
          renderItem={({ item }) => <JobCard job={item} />}
        />
      </ScrollView>
    </View>
  );
};

const styles = StyleSheet.create({
  container: { flex: 1, backgroundColor: 'white', paddingTop: 20 },
  header: { flexDirection: 'row', alignItems: 'center', padding: 10, backgroundColor: '#fff' },
  headerTitle: { flex: 1, fontSize: 18, fontWeight: 'bold' },
  filterButton: { backgroundColor: '#0384fc', borderRadius: 4, padding: 2, fontSize: 18 },
  searchBar: { margin: 10,padding: 15,backgroundColor: '#fff',borderRadius: 8,fontSize: 16,borderColor: 'grey', borderWidth: 1, }, 
  warningBanner: { backgroundColor: '#ffeb3b', padding: 10, margin: 10, borderRadius: 8 },
  warningText: { color: '#d32f2f', fontWeight: 'bold' },
  card: { margin: 10, padding: 10, backgroundColor: '#fff' },
  title: { fontSize: 16, fontWeight: 'bold' },
  subtitle: { fontSize: 14, color: '#555' },
  salary: { fontSize: 14, color: '#1e88e5', marginTop: 5 },
  role: { fontSize: 14, color: '#757575', marginBottom: 5 },
  drawer: { position: 'absolute', top: 0, left: 0, width: 200, height: '100%', backgroundColor: '#fff', padding: 20, zIndex: 10 },
  drawerCloseIcon: { alignSelf: 'flex-end' },
  drawerItem: { fontSize: 18, marginBottom: 20 },
  filterButtonLabel: { fontSize: 19 },
  filterPanel: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginBottom: 10,
    backgroundColor : 'white'
  },
  filterOptionButton: {
    margin: 5,
    paddingHorizontal: 10,
    backgroundColor : 'white',
    color:'black'
  },
});

export default JobseekerDashboard;
 
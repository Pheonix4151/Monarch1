import * as React from 'react';
import { Image, View, Text } from 'react-native';
import { PaperProvider, Card, Button } from 'react-native-paper';

const leftComponent = ({ size }) => (
  <Image
    resizeMode="cover"
    style={{ width: size, height: size, borderRadius: size / 2 }}
    source={{
      uri: 'https://fastly.picsum.photos/id/168/700/700.jpg?hmac=TdvFbMN99iyiBXtZ2P8n01OzXKYcEjCkhlSnsZZ5LyU',
    }}
  />
);

const JobProviderDashboard = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1, padding: 20 }}>
        <Text style={{ fontSize: 22, fontWeight: 'bold', marginTop: 20 }}>
          Welcome back, Job Provider!
        </Text>

        <Card style={{ marginBottom: 20 }}>
          <Card.Title
            title="Post a New Job"
            subtitle="Click to post a new job listing"
            titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
            subtitleStyle={{ fontSize: 14 }}
            left={leftComponent}
          />
          <Card.Content>
            <Button mode="contained" onPress={() => console.log('Post Job')}>
              Post New Job
            </Button>
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Card.Title
            title="Active Job Listings"
            subtitle="View or edit your current job listings"
            titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
            subtitleStyle={{ fontSize: 14 }}
            left={leftComponent}
          />
          <Card.Cover
            style={{ margin: 10, borderRadius: 10 }}
            source={{
              uri: 'https://fastly.picsum.photos/id/558/700/700.jpg?hmac=9BsnzhVewVpZGiQgZOEmypsxcAA6duN_vFlZWaLN1I4',
            }}
          />
          <Card.Content>
            <Button mode="outlined" onPress={() => console.log('View Active Jobs')}>
              View Active Jobs
            </Button>
          </Card.Content>
        </Card>

        <Card style={{ marginBottom: 20 }}>
          <Card.Title
            title="Applicants"
            subtitle="View applicants for your job postings"
            titleStyle={{ fontSize: 18, fontWeight: 'bold' }}
            subtitleStyle={{ fontSize: 14 }}
            left={leftComponent}
          />
          <Card.Cover
            style={{ margin: 10, borderRadius: 10 }}
            source={{
                uri: 'https://fastly.picsum.photos/id/558/700/700.jpg?hmac=9BsnzhVewVpZGiQgZOEmypsxcAA6duN_vFlZWaLN1I4',
            }}
          />
          <Card.Content>
            <Button mode="outlined" onPress={() => console.log('View Applicants')}>
              View Applicants
            </Button>
          </Card.Content>
        </Card>
      </View>
    </PaperProvider>
  );
};

export default JobProviderDashboard;

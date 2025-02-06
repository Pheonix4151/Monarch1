import * as React from 'react';
import { Image, View } from 'react-native';
import { PaperProvider, Card } from 'react-native-paper';

const leftComponent = ({ size }) => (
  <Image
    resizeMode="cover"
    style={{ width: size, height: size, borderRadius: size / 2 }}
    source={{
      uri: 'https://fastly.picsum.photos/id/168/700/700.jpg?hmac=TdvFbMN99iyiBXtZ2P8n01OzXKYcEjCkhlSnsZZ5LyU',
    }}
  />
);

const PaperProviderComponent = () => {
  return (
    <PaperProvider>
      <View style={{ flex: 1, justifyContent: 'center', paddingVertical: 20 }}>
        <Card style={{ margin: 20 }}>
          <Card.Title
            title="Job Provider"
            // subtitle="Card Subtitle"
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
        </Card>

        <Card style={{ margin: 20 }}>
          <Card.Title
            title="Job Seeker"
            // subtitle="Card Subtitle"
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
        </Card>
      </View>
    </PaperProvider>
  );
};

export default PaperProviderComponent;

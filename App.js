import * as React from 'react';
import { SafeAreaView } from 'react-native';
//import PaperProviderComponent from './PaperProvider';
import JobProviderDashboard from './JobProviderDashboard';
//import JobProviderProfile from './JobProviderProfile';

const App = () => {
  return (
    <SafeAreaView style={{ flex: 2 }}>
      <JobProviderDashboard/>
      {/*<PaperProviderComponent/>*/}
      {/* <JobProviderProfile/> */}
    </SafeAreaView>
  );
};

export default App;

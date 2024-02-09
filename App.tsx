import { SafeAreaView } from 'react-native';
import { Provider as StoreProvider } from 'react-redux';
import { PaperProvider } from 'react-native-paper';
import FeatherIcon from 'react-native-vector-icons/Feather'
import theme from 'constants/theme';
import Router from 'navigation/Router';
import store from 'store';

const App = () => {
  return (
    <StoreProvider store={store}>
      <PaperProvider settings={{icon:props=><FeatherIcon {...props}/>}} theme={theme}>
        <SafeAreaView style={{flex:1}}>
          <Router/>
        </SafeAreaView>
      </PaperProvider>
    </StoreProvider>
  )
}

export default App
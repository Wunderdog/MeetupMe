import React from 'react';
import { Components } from 'expo';
import EStyleSheet from 'react-native-extended-stylesheet';
import Colors from './constants/Colors'
import { fetchMeetups } from './constants/api';
import { HomeScreen } from './src/screens';
import { cachedFonts } from './helpers';
import { LoadingScreen } from './src/commons'

EStyleSheet.build(Colors);

export default class App extends React.Component {
  state = {
    fontLoaded: false
  }

  componentDidMount() {
    this._loadedAssetsAsync();
  }

  async _loadedAssetsAsync() {
    const fontAssets = cachedFonts([
      {
        montserrat: require('./assets/fonts/Montserrat-Regular.ttf')
      },
      {
        montserratBold: require('./assets/fonts/Montserrat-Bold.ttf')
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Light.ttf')
      },
      {
        montserratLight: require('./assets/fonts/Montserrat-Medium.ttf')
      },
    ]);

    await Promise.all(fontAssets);

    this.setState({ fontLoaded: true });
  }

  render() {
    if (!this.state.fontLoaded) {
      return <LoadingScreen />
    }
    return <HomeScreen />
  }
}

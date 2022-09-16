import {View, Text, ImageBackground} from 'react-native';
import React from 'react';
import { images } from '../../contains';

export default function HomeScreens(props) {
 const {navigation,rount}=props
 const {navigate,goBack}=navigation
  setTimeout(()=> navigate('HomePlays'),2000)
  return <ImageBackground 
  style={{flex:1}} 
  source={images.backgroundHome}>
  </ImageBackground>;
}

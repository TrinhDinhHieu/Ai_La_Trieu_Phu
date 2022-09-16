import { 
  View,
  Image,
   Text,
   StyleSheet,
    TouchableOpacity, 
    ImageBackground,
  } from 'react-native'
import React from 'react'
import { icons, images } from '../../contains'


export default function HomePlays(props) {
  return (
    <ImageBackground style={{flex:1}}source={images.backgroundHome}>
        <View style={{height:'30%'}}/>
     <View style={{flex:1,justifyContent:'center', alignItems:'center'}}>
     <TouchableOpacity style={styles.play}>
        <Text style={{fontSize:22,color:'black',}}>Play</Text>
      </TouchableOpacity>

      <View style={{flexDirection:'row',marginTop:30}}>
     <TouchableOpacity style={styles.sound}>
        <Image style={styles.imgSound} source={icons.sound}/>
        {/* <Image style={{ height:40, width:40}} source={icons.sound}/> */}
      </TouchableOpacity>
      <TouchableOpacity style={styles.rating}>
      <Image style={styles.imgRating} source={icons.rating}/>
      </TouchableOpacity>
     </View>
     </View>
     
    </ImageBackground>
  )
}
const styles = StyleSheet.create({
  play: {
    backgroundColor: 'yellow',
    height: 50,
    width: 250,
    borderRadius: 15,
    justifyContent:'center',
    alignItems:'center'
  },
  sound: {
    backgroundColor: 'white',
    height: 45,
    width: 45,
    borderRadius: 25,
    marginRight: 25,
    borderWidth: 1,
  },
  rating: {
    backgroundColor: 'white',
    height: 50,
    width: 50,
    borderRadius: 25,
    borderWidth: 1,
    
  },
  imgSound: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginTop: 5,
  },
  imgRating: {
    height: 40,
    width: 40,
    alignSelf: 'center',
    marginTop: 5,
      },
});
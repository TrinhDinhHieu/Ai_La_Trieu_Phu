import { View, Text } from 'react-native'
import React from 'react'
import CountDown from 'react-native-countdown-component'

export default function Time(props) {
  return (
    <View style={{flex:1}}>
      <CountDown
            until={20}
            size={12}
            timeToShow={'S'}
            onFinish={() =>
              Alert.alert('Hết giờ', 'Mời bạn chơi lại', [
                {
                  onPress: () => navigate('HomeStart'),
                },
              ])
            }
            digitStyle={{backgroundColor: 'white', marginRight: 18}}
            style={Style.TextTime}
            digitTxtStyle={{
              color: '#FF9900',
              backgroundColor: 'white',
              alignSelf: 'center',
              fontSize: 18,
            }}
            timeLabels={{s: null}}
          />
    </View>
  )
}
const Style = StyleSheet.create({
    TextTime: {
        fontSize: 20,
        color: '#FF9900',
        borderWidth: 1,
        borderColor: '#FF9900',
        marginTop: -15,
        width: 50,
        backgroundColor: 'white',
        zIndex: 2,
        position: 'absolute',
        marginLeft: 240,
        borderRadius: 20,
        paddingLeft: 20,
      },
})
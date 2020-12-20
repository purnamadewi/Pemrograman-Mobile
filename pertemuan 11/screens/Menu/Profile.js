import React from 'react';
import {
  StyleSheet, View, Text, ScrollView, Image
} from 'react-native';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",
  },

});

const ProfileScreen = () => {
  return (
  <View style={styles.container}>

    <View style={{marginTop:0}}>
      <Text style={{textAlign:"center",
      fontWeight:"bold",
      fontSize: 80,
      color:"white"
    }}>Profile</Text>
    </View>
      
    <View>
      <Image source={require('./../../assets/foto/book.png')} style={{alignItems:"center",
      width: 300,
      height: 300,
      marginLeft: 20,
      marginTop:20,
      resizeMode:"contain"
    }}/>
    </View>

    <View>
    <Text style={{textAlign:"center", fontSize:15, marginTop:20, fontWeight:"500"}}>
      Nama : Ni Luh Putu Purnama Dewi
    </Text>
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"500"}}>
      NIM : 1801010025
    </Text>
    <Text style={{textAlign:"center", fontSize:15, fontWeight:"500"}}>
      Email : pdewi4428@gmail.com
    </Text>
  </View>

  </View>
  
  );
};
export default ProfileScreen;
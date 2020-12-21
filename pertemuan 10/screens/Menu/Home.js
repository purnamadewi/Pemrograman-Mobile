import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity, Image
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:25,
  },
  loginbutton: {
    backgroundColor: "#FFFACD",
    borderRadius: 10,
    height: 40,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 20,
    marginBottom: 5,
    marginRight: 45,
    marginLeft: 45,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

      <View>
    
      <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, textAlign: "center", paddingTop: 50  }}>Selamat Datang di Berbagi Resep Makanan</Text>

      </View>

      <View >
      <Image source={require('./../../assets/foto/masak.jpg')} style={{alignItems:"center",
    
      width: 300,
      height: 200,
      marginLeft: 30,
      marginTop:0,
      resizeMode:"contain"
    }}/>
      </View>

      <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Form')}
          >
            <Text style={{
              color: "black",
            }}> ***Formulir Data Pengguna***</Text> 
          </TouchableOpacity>
        
        </View>


    <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Details')}
          >
            <Text style={{
              color: "black",
            }}> Cara membuat Brownies</Text>
          </TouchableOpacity>
        
        </View>

        <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Details1')}
          >
            <Text style={{
              color: "black",
            }}> Cara membuat Nasi Goreng</Text>
          </TouchableOpacity>
        
        </View>

        <View >
          <TouchableOpacity
            style={styles.loginbutton}
            onPress={() => navigation.navigate('Details2')}
          >
            <Text style={{
              color: "black",
            }}> Cara membuat Kue Nastar</Text>
          </TouchableOpacity>
        
        </View>
 
  </View>
);

export default HomeScreen;

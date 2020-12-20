import React from 'react';
import { MaterialCommunityIcons } from '@expo/vector-icons';
import { StyleSheet, View, Text, TouchableOpacity
} from 'react-native';



const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  flexRow: {
    flexDirection: 'row',
    alignItems: 'center',
    marginBottom:30,
  },
  loginbutton: {
    backgroundColor: "#FFFACD",
    borderRadius: 30,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 40,
    marginLeft: 40,
  },
});

const HomeScreen = ({ navigation }) => (
  <View style={styles.container}>

      <View>
    
        <Text style={{ fontSize: 30, fontWeight: 'bold', marginBottom: 5, textAlign: "center", paddingTop: 120  }}>Resep Makanan</Text>

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
 
  </View>
);

export default HomeScreen;

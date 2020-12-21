import React from 'react';
import {
  StyleSheet, Text, View, Image,
} from 'react-native';
import { ScrollView } from 'react-native-gesture-handler';


const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "white",  
  },
});

const Details1Screen = () => (
  <ScrollView style={styles.container}>
    
      <Image style={{height: 350, width: 370, marginTop: 30}} source={require('../assets/foto/nasgor.jpg')}/>
    
      <View>

      <View style={{padding:10, marginBottom: 5, color: 'black'}}>
        <Text style={{color: "black", fontSize: 25}}>
          Bahan:
        </Text>
        <Text style={{color: "black"}}>
          1 piring nasi dingin
        </Text>
        <Text style={{color: "black"}}>
          5 bh cabe rawit, iris
        </Text>
        <Text style={{color: "black"}}>
         3 bh bawang merah, iris
        </Text>
        <Text style={{color: "black"}}>
          2 siung bawang putih, iris
        </Text>
        <Text style={{color: "black"}}>
         1 btr telur
        </Text>
        <Text style={{color: "black"}}>
          1 sdm kecap manis
        </Text>
        <Text style={{color: "black"}}>
          1 sdm kecap asin
        </Text>
        <Text style={{color: "black"}}>
          1/2 sdt gula pasir
        </Text>
        <Text style={{color: "black"}}>
          1/2 sdt merica
        </Text>
        <Text style={{color: "black"}}>
         secukupnya Garam
        </Text>

        <Text style={{color: "black", marginTop: 10,fontSize: 25}}>
        Cara Membuat:
        </Text>
        <Text style={{color: "black"}}>
        1. Kocok telur beri sedikit garam. Panaskan minyak di wajan. Masukkan telur, bikin orak arik. Sisihkan
        </Text>
        <Text style={{color: "black"}}>
        2. Dg sisa minyak di wajan, tumis bawang merah, bawang putih dan cabe hingga harum. Masukkan nasi dan telur orak arik. Beri kecap2an, garam, gula dan merica. Aduk rata
        </Text>
        <Text style={{color: "black"}}>
        3. Masak sambil terus diaduk hingga nasi agak kering. Koreksi rasa. Angkat. Sajikan nasgor dg telur ceplok dan irisan timun
        </Text>
        <Text style={{color: "black"}}>
        4. Tips : jumlah kecap bisa ditambah sesuai selera
        </Text>
      
      </View>
      </View>
  </ScrollView>
);
export default Details1Screen;

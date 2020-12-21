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

const Details2Screen = () => (
  <ScrollView style={styles.container}>
    
      <Image style={{height: 380, width: 370, marginTop: 30}} source={require('../assets/foto/nastar.jpg')}/>
    
      <View>

      <View style={{padding:10, marginBottom: 5, color: 'black'}}>
        <Text style={{color: "black", fontSize: 25}}>
          Bahan:
        </Text>
        <Text style={{color: "black"}}>
        1 kg Tepung Terigu
        </Text>
        <Text style={{color: "black"}}>
        3 sacet mentega (200grm 1sct)
        </Text>
        <Text style={{color: "black"}}>
        1 bungkus gula halus (100grm)
        </Text>
        <Text style={{color: "black"}}>
        8 butir telur ( kuningnya saja)
        </Text>
        <Text style={{color: "black"}}>
        2 sdm susu bubuk
        </Text>
        <Text style={{color: "black"}}>
        2 sdm rum butter
        </Text>
        <Text style={{color: "black"}}>
        1 sachet fanili
        </Text>
        <Text style={{color: "black"}}>
        2 butir telur bebek (untk olesan) kuningnya saja
        </Text>
        <Text style={{color: "black"}}>
        4 buah nanas
        </Text>
        <Text style={{color: "black"}}>
        2 blok Keju parut
        </Text>

        <Text style={{color: "black", marginTop: 10,fontSize: 25}}>
        Cara Membuat:
        </Text>
        <Text style={{color: "black"}}>
        1. Pertama2 buat selai nanas, parut nanas lalu masak hingga kering. Angkat sisihkan
        </Text>
        <Text style={{color: "black"}}>
        2. Campurkan mentega, gula halus, kuning telur, rum butter, susu bubuk, fanili. Aduk hingga tercampur rata
        </Text>
        <Text style={{color: "black"}}>
        3.Jika sdh trcampur rata masukan terigu sedikit demi sedikit hingga adonan tdk lengket di tangan
        </Text>
        <Text style={{color: "black"}}>
        4. Ambil bulatan kecil lalu pipihkn dan masukan selai nanas, bulatkn kembali smpai adonan habis.
        </Text>
        <Text style={{color: "black"}}>
        5. Oleskan atasnya dengan kuning telur bebek. Taburi keju di atasnya.
        </Text>
        <Text style={{color: "black"}}>
        6. Kemudian oven selama 15 menit smp adonan kering. Dan sajikan...Nastar yg lembut siap di nikmati
        </Text>
      
      </View>
      </View>
  </ScrollView>
);
export default Details2Screen;

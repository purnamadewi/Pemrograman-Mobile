import React, {useState} from 'react';
import {
  StyleSheet, View, ScrollView, Image, Text, TextInput, TouchableOpacity, Alert,
} from 'react-native';
import firebase from './Firebase'


const styles = StyleSheet.create({
    container: {
      flex: 1,
      backgroundColor: "white",
      marginTop:25  
    },
    inputgrup : {
    width: "80%",
    backgroundColor: "#DCDCDC",
    borderRadius: 50,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
    }
  });

const FormScreen = ({navigation}) => {
    const GoTo =(screen) => {
        navigation.navigate(screen)
    }

    const [state, setState] = useState ({
        name: "",
        nohandphone: "",
        alamat: "",
        namamakanan: ""
    })
    
    const handleChangeText = (name, value) => {
        setState ({ ...state, [name]: value})
    }

    const submit = async () => {
        if (state.name === '') {
            alert ('Form belum di input')
        }
        else {
            // await firebase.db.collection('users').add({
                await firebase.bd.ref('/users').push({
                    name: state.name,
                    nohandphone: state.nohandphone,
                    alamat: state.alamat,
                    namamakanan:state.namamakanan

                })
                alert ('Form Sudah Berhasil Diinput!')
        }
    }
    
    //const savecomment = async () => {
    //    if (state.name === '') {
    //       alert ('Please provide a name')
    //    }
    //    else {
    //        await firebase.db.collection('users').add({
    //            name: state.name,
    //            nohandphone: state.nohandphone,
    //            alamat: state.alamat,
    //            namamakanan: state.namamakanan,
    //        })
    //        alert('Seved!')
    //   }
   // }

return (
  <ScrollView style={styles.container}>

<View>
    
    <Text style={{ 
        fontSize: 30, 
        fontWeight: 'bold', 
        marginBottom: 5, 
        textAlign: "center", 
        paddingTop: 80  }}>Form Data Diri Pengguna </Text>

  </View>


    <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "Name"
                onChangeText= {(value) => handleChangeText ("name", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "No Handphone"
                onChangeText= {(value) => handleChangeText ("nohandphone", value)}
                />
            </View>

            <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "Alamat"
                onChangeText= {(value) => handleChangeText ("alamat", value)}
                />
            </View>


      <View style={styles.inputgrup}>
                <TextInput
                style={{marginHorizontal: 15}}
                placeholder= "Nama Menu Makanan"
                onChangeText= {(value) => handleChangeText ("namamakanan", value)}
                />
            </View>

            <TouchableOpacity onPress={() => submit ()} style={{width: 125, 
                backgroundColor: '#A52A2A', 
                padding: 10,  
                borderRadius: 40, 
                alignSelf: 'center', 
                marginTop: 20}}>

                <Text style={{ textAlign: 'center', color: '#fff', fontSize: 16 }}>Submit</Text>
            </TouchableOpacity>
            <TouchableOpacity onPress={() => GoTo('Input')} style={{width: 125,
                backgroundColor: '#DEB887',
                padding: 10, 
                borderRadius: 40,
                alignSelf: 'center',
                marginTop: 20}}>

                <Text style={{ textAlign: 'center',color: '#fff', fontSize: 16 }}>Lihat Form</Text>
            </TouchableOpacity>

  </ScrollView>

);
}

export default FormScreen;


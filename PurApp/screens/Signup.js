import React from 'react';
import { StyleSheet, View, Image, ScrollView, Text, TouchableOpacity, TextInput
} from 'react-native';
import Constants from 'expo-constants';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: "orange",
  },
  inputView: {
    width: "80%",
    backgroundColor: "#DCDCDC",
    borderRadius: 0,
    borderColor: '#DCDCDC',
    borderWidth: 1,
    height: 50,
    marginBottom: 20,
    justifyContent: "center",
    padding: 15,
    marginRight: 40,
    marginLeft: 40,
  },
  loginbutton: {
    backgroundColor: "Maroon",
    borderRadius: 20,
    backgroundColor: "#8B0000",
    borderRadius: 25,
    height: 50,
    alignItems: "center",
    justifyContent: "center",
    marginTop: 40,
    marginBottom: 10,
    marginRight: 100,
    marginLeft: 100,
  },
});

const SignupScreen = ({ navigation }) => {
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [confirmPass, setConfirmPass] = React.useState('');

  const app = () => {
      navigation.navigate('Tab');
  };

  return (
    <ScrollView style={styles.container}>
      <View style={{paddingTop: 100}} >

        <View >
          <Text style={{ fontSize: 40, fontWeight: 'bold', marginBottom: 40, textAlign: "center" }}>Buat Akun</Text>
        </View>

        <View>
        <TextInput
            style={styles.inputView}
            value={email}
            onChangeText={setEmail}
            placeholder="Email"
           
          />
        <TextInput
            style={styles.inputView}
            value={password}
            onChangeText={setPassword}
            placeholder="Password"
            secureTextEntry={true}
        
          />
        <TextInput
            style={styles.inputView}
            value={confirmPass}
            onChangeText={setConfirmPass}
            placeholder="Confirm Password"
            secureTextEntry={true}
          
          />
        </View>

        <TouchableOpacity
            style={styles.loginbutton}
            onPress={app}
          >
            <Text style={{ 
              color:"#fff",
               }}>Sign up</Text>
          </TouchableOpacity>
      </View>
    </ScrollView>
  );
};

export default SignupScreen;

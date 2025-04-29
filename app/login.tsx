import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
const Login = () => {
    const router = useRouter()
  return (
    <LinearGradient
      colors={['#00c6ff', '#0072ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
       
      <View style={styles.formContainer}>
     




        <View style={styles.titleContainer}>
        <MaterialIcons name="account-circle" size={62} color='#0072ff' />
        
          <Text style={styles.welcomeText}>Login</Text> 
          <TextInput placeholder="E-mail" placeholderTextColor="#555" style={styles.input} />
           <TextInput placeholder="Senha" secureTextEntry placeholderTextColor="#555" style={styles.input} />

        </View>

        <TouchableOpacity style={[styles.button, styles.loginButton]}  onPress={()=>router.replace('./(tabs)/home')}>
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity> 
        
        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={()=>router.replace('/welcome')}>
          <Text style={[styles.buttonText, styles.registerButtonText]}>Voltar</Text>
        </TouchableOpacity> 
      </View>    
    </LinearGradient>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  },
  formContainer: {
    width: '85%',
    backgroundColor: 'rgba(255, 255, 255, 0.9)',
    padding: 25,
    borderRadius: 15,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  icon: {
    marginBottom: 15,
    backgroundColor: 'rgba(255, 255, 255, 0.7)',
    padding: 10,
    borderRadius: 50,
  },
  welcomeText: {
    fontSize: 26, 
  color: '#000', 
  fontWeight: 'bold', 
  marginBottom: 10,
  },
  appName: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#0072ff',
    marginBottom: 5
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
    marginBottom: 10
  },
 
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.23,
    shadowRadius: 2.62,
    elevation: 4,
  },
  loginButton: {
    backgroundColor: '#0072ff',

  },
  registerButton: {
    backgroundColor: 'white',
    borderWidth: 1,
    borderColor: '#0072ff',
  },
  buttonText: {
    color: 'white',
    fontWeight: '600',
    fontSize: 16,
  },
  registerButtonText: {
    color: '#0072ff',
  },
  forgotPassword: {
    textAlign: 'center',
    marginTop: 15,
    color: '#0072ff',
    fontSize: 14
  },
  input: {
    width: '100%',
    backgroundColor: 'white',
    padding: 15,
    borderRadius: 8,
    marginVertical: 8,
    borderWidth: 1,
    borderColor: '#ccc',
    fontSize: 16,
    shadowColor: "#000",
    shadowOffset: {
      width: 0,
      height: 1,
    },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  }
  
});

export default Login;
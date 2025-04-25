import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import Ionicons from '@expo/vector-icons/Ionicons';

const Welcome = () => {
  return (
    <LinearGradient
      colors={['#00c6ff', '#0072ff']}
      start={{ x: 0, y: 0 }}
      end={{ x: 1, y: 1 }}
      style={styles.container}
    >
      <View style={styles.formContainer}>
        <View style={styles.titleContainer}>
          <Ionicons name="library-sharp" size={48} color="#0072ff" style={styles.icon} />
          <Text style={styles.welcomeText}>Bem-vindo ao</Text>
          <Text style={styles.appName}>Capítulo Um</Text>
          <Text style={styles.subtitle}>Sua jornada começa aqui</Text>
        </View>

        <TouchableOpacity style={[styles.button, styles.loginButton]}>
          <Text style={styles.buttonText}>Login</Text>
        </TouchableOpacity> 
        
        <TouchableOpacity style={[styles.button, styles.registerButton]}>
          <Text style={[styles.buttonText, styles.registerButtonText]}>Registrar</Text>
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
    fontSize: 18,
    color: '#666',
    marginBottom: 5
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
  }
});

export default Welcome;
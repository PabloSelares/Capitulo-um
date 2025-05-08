import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Alert } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';
import AsyncStorage from '@react-native-async-storage/async-storage';
import { LinearGradient } from 'expo-linear-gradient';

const SERVER_URL = ''; 

const Login = () => {
  const router = useRouter();
  const [email, setEmail] = React.useState('');
  const [password, setPassword] = React.useState('');
  const [emailDirty, setEmailDirty] = React.useState(false);
  const [passwordDirty, setPasswordDirty] = React.useState(false);

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

  const storeData = async (value: string) => {
    try {
      await AsyncStorage.setItem('token', value);
    } catch (e) {
      console.log("Erro ao armazenar o token", e);
    }
  };

  const handleLogin = async () => {
    setEmailDirty(true);
    setPasswordDirty(true);

    if (!emailRegex.test(email)) {
      Alert.alert("E-mail inválido", "Digite um e-mail válido.");
      return;
    }

    if (!password || password.length < 6) {
      Alert.alert("Senha inválida", "A senha deve ter pelo menos 6 caracteres.");
      return;
    }


    await storeData("token_simulado");
    router.push({
      pathname: "/home",
      params: { email: email },
    });
  };

  /*
  try {
    const response = await fetch(`${SERVER_URL}/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password }),
    });

    const data = await response.json();

    if (response.ok) {
      await storeData(data.token)
      router.push({
        pathname: "/home",
        params: { email: email },
      });
    } else {
      Alert.alert("Erro", data.message || "Erro ao fazer login.");
    }
  } catch (error) {
    console.log("Erro na requisição", error);
    Alert.alert("Erro", "Erro ao conectar com o servidor.");
  }
  */


  const handleErrorEmail = () => {
    if (!email && emailDirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (!emailRegex.test(email) && emailDirty) {
      return <Text style={styles.error}>Email inválido</Text>;
    }
    return null;
  };

  const handleErrorPassword = () => {
    if (!password && passwordDirty) {
      return <Text style={styles.error}>Campo obrigatório</Text>;
    } else if (password.length < 6 && passwordDirty) {
      return <Text style={styles.error}>Senha deve ter pelo menos 6 caracteres</Text>;
    }
    return null;
  };

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

          <TextInput
            placeholder="E-mail"
            placeholderTextColor="#555"
            style={styles.input}
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              setEmailDirty(true);
            }}
          />
          {handleErrorEmail()}

          <TextInput
            placeholder="Senha"
            placeholderTextColor="#555"
            style={styles.input}
            secureTextEntry
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              setPasswordDirty(true);
            }}
          />
          {handleErrorPassword()}
        </View>

        <TouchableOpacity
          style={[styles.button, styles.loginButton]}
          onPress={handleLogin} 
        >
          <Text style={styles.buttonText}>Entrar</Text>
        </TouchableOpacity>

        <TouchableOpacity
          style={[styles.button, styles.registerButton]}
          onPress={() => router.replace('/welcome')}
        >
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
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.25,
    shadowRadius: 3.84,
    elevation: 5,
  },
  titleContainer: {
    alignItems: 'center',
    marginBottom: 30
  },
  welcomeText: {
    fontSize: 26,
    color: '#000',
    fontWeight: 'bold',
    marginBottom: 10,
  },
  button: {
    padding: 15,
    borderRadius: 8,
    alignItems: 'center',
    marginVertical: 5,
    shadowColor: "#000",
    shadowOffset: { width: 0, height: 2 },
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
    shadowOffset: { width: 0, height: 1 },
    shadowOpacity: 0.22,
    shadowRadius: 2.22,
    elevation: 3,
  },
  error: {
    color: 'red',
    fontSize: 14,
    marginTop: -5,
    alignSelf: 'flex-start'
  }
});

export default Login;

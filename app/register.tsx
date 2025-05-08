import { LinearGradient } from 'expo-linear-gradient';
import React from 'react';
import { Text, View, StyleSheet, TouchableOpacity, TextInput, Image } from 'react-native';
import MaterialIcons from '@expo/vector-icons/MaterialIcons';
import { useRouter } from 'expo-router';

const Register = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [senha, setSenha] = React.useState('');
  const [repetirSenha, setRepetirSenha] = React.useState('');

  const [checked, setChecked] = React.useState(false);
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  const [isLoading, setIsLoading] = React.useState(false);
  const [formSubmitted, setFormSubmitted] = React.useState(false);

  const router = useRouter();

  const handleErrorNome=() => {
    if (formSubmitted) {
      if (!nome) return <Text style={styles.error}>Campo obrigatório</Text>;
      if (nome.trim().length < 2) return <Text style={styles.error}>Nome deve ter pelo menos 2 caracteres</Text>;
    }
    return null;
  }

  const handleErrorEmail = () => {
    if (formSubmitted) {
      if (!email) return <Text style={styles.error}>Campo obrigatório</Text>;
      if (!emailRegex.test(email)) return <Text style={styles.error}>Email inválido</Text>;
    }
    return null;
  };

  const handleErrorPassword = () => {
    if (formSubmitted) {
      if (!senha) return <Text style={styles.error}>Campo obrigatório</Text>;
      if (senha.length < 6) return <Text style={styles.error}>Senha deve ter pelo menos 6 caracteres</Text>;
    }
    return null;
  };
  const handleErrorRepitir = () => {
    if (formSubmitted) {
      if (!repetirSenha) return <Text style={styles.error}>Campo obrigatório</Text>;
      if (repetirSenha !== senha) return <Text style={styles.error}>As senhas não coincidem</Text>;
    }
    return null;
  };
  const handleRegister = async () => {
    setFormSubmitted(true);
    let hasError = false;

    if (!nome || nome.trim().length < 2) {
      hasError = true;
    }

    if (!email || !emailRegex.test(email)) {
      hasError = true;
    }

    if (!senha || senha.length < 6) {
      hasError = true;
    }

    if (!repetirSenha || repetirSenha !== senha) {
      hasError = true;
    }

    if (hasError) return;

    setIsLoading(true);

    try {
      const json = {
        name: nome,
        email: email,
        password: senha,
        tipo: checked,
      };

   
      console.log('Registrando:', json);

      router.replace('/login');
    } catch (error) {
      console.error('Erro ao registrar', error);
    } finally {
      setIsLoading(false);
    }
  };

  const validateForm = () => {
    handleRegister();
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
          <Text style={styles.welcomeText}>Criar conta:</Text>

          <TextInput
            placeholder="Nome Completo"
            value={nome}
            onChangeText={setNome}
            placeholderTextColor="#555"
            style={styles.input}
            
          />
            {handleErrorNome()}

          <TextInput
            placeholder="E-mail"
            value={email}
            onChangeText={setEmail}
            placeholderTextColor="#555"
            style={styles.input}
          />
          {handleErrorEmail()}

          <TextInput
            placeholder="Senha"
            value={senha}
            onChangeText={setSenha}
            placeholderTextColor="#555"
            secureTextEntry
            style={styles.input}
          />
          {handleErrorPassword()}

          <TextInput
            placeholder="Repetir senha"
            value={repetirSenha}
            onChangeText={setRepetirSenha}
            placeholderTextColor="#555"
            secureTextEntry
            style={styles.input}

          />
          { handleErrorRepitir ()}
        </View>

        <TouchableOpacity style={[styles.button, styles.loginButton]} onPress={validateForm}>
          <Text style={styles.buttonText}>Criar conta</Text>
        </TouchableOpacity>

        <TouchableOpacity style={[styles.button, styles.registerButton]} onPress={() => router.replace('/welcome')}>
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
    alignItems: 'center',
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
    marginBottom: 30,
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
    marginBottom: 5,
  },
  subtitle: {
    fontSize: 14,
    color: '#888',
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
  forgotPassword: {
    textAlign: 'center',
    marginTop: 15,
    color: '#0072ff',
    fontSize: 14,
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
    fontSize: 13,
    alignSelf: 'flex-start',
    marginBottom: 5,
    marginLeft: 5,
  }
});

export default Register;

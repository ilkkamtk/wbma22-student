import React, {useContext, useEffect, useState} from 'react';
import {
  StyleSheet,
  KeyboardAvoidingView,
  Platform,
  TouchableOpacity,
  Keyboard,
  View,
} from 'react-native';
import PropTypes from 'prop-types';
import {MainContext} from '../contexts/MainContext';
import AsyncStorage from '@react-native-async-storage/async-storage';
import {useUser} from '../hooks/ApiHooks';
import LoginForm from '../components/LoginForm';
import RegisterForm from '../components/RegisterForm';
import {ButtonGroup, Card, Text} from 'react-native-elements';

const Login = ({navigation}) => {
  const [formToggle, setFormToggle] = useState(true);
  const {setIsLoggedIn, setUser} = useContext(MainContext);
  const {getUserByToken} = useUser();

  const checkToken = async () => {
    const userToken = await AsyncStorage.getItem('userToken');
    console.log('token value in async storage', userToken);
    if (!userToken) {
      return;
    }
    try {
      const userData = await getUserByToken(userToken);
      console.log('checkToken', userData);
      console.log('token', userToken);
      setUser(userData);
      setIsLoggedIn(true);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    checkToken();
  }, []);

  return (
    <TouchableOpacity
      style={{flex: 1}}
      activeOpacity={1}
      onPress={() => Keyboard.dismiss()}
    >
      <KeyboardAvoidingView
        behavior={Platform.OS === 'ios' ? 'padding' : ''}
        style={styles.container}
      >
        <View style={styles.appTitle}>
          <Text>MyApp</Text>
        </View>
        <View style={styles.form}>
          <Card>
            <ButtonGroup
              onPress={() => setFormToggle(!formToggle)}
              selectedIndex={formToggle ? 0 : 1}
              buttons={['Login', 'Register']}
            />
          </Card>
          {formToggle ? (
            <Card>
              <Card.Title h4>Login</Card.Title>
              <Card.Divider />
              <LoginForm />
            </Card>
          ) : (
            <Card>
              <Card.Title h4>Register</Card.Title>
              <Card.Divider />
              <RegisterForm setFormToggle={setFormToggle} />
            </Card>
          )}
        </View>
      </KeyboardAvoidingView>
    </TouchableOpacity>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 16,
  },
  appTitle: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
  },
  form: {
    flex: 8,
  },
});

Login.propTypes = {
  navigation: PropTypes.object,
};

export default Login;

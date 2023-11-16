import React, { useState } from 'react';
import { View, StyleSheet, TouchableOpacity, Text, Image, TextInput } from 'react-native';
import { BottomSheet } from 'react-native-btr';
import PropTypes from 'prop-types';

const BottomSheetLogin = ({ visibility, toggleSelect }) => {
    const [activeTab, setActiveTab] = useState('password');
    const [mobileNumber, setMobileNumber] = useState('');
    const [password, setPassword] = useState('');
    const [verificationCode, setVerificationCode] = useState('');
  
    const handleTabChange = (tabName) => {
      setActiveTab(tabName);
    };
  
    const handleGetCode = () => {
      // Logic to get verification code
    };
  
    const handleLogin = () => {
      // Logic to handle login
    };
  

  return (
    <BottomSheet
      visible={visibility}
      onBackButtonPress={toggleSelect}
      onBackdropPress={toggleSelect}
    >
      <View style={styles.bottomNavigationView}>
        <View style={styles.container}>
          <View style={styles.header}>
            <Image source={require('../assets/icons/login-49.png')} style={styles.logo} />
          </View>
          <View style={styles.tabs}>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'password' && styles.activeTabButton]}
              onPress={() => handleTabChange('password')}
            >
              <Text style={[styles.tabButtonText, activeTab === 'password' && styles.activeTabText]}>
                Password
              </Text>
            </TouchableOpacity>
            <TouchableOpacity
              style={[styles.tabButton, activeTab === 'verification' && styles.activeTabButton]}
              onPress={() => handleTabChange('verification')}
            >
              <Text style={[styles.tabButtonText, activeTab === 'verification' && styles.activeTabText]}>
                Verification
              </Text>
            </TouchableOpacity>
          </View>
          <View style={styles.tabContent}>
            {activeTab === 'password' && (
              <View>
                <TextInput
                  placeholder="Mobile Number"
                  style={styles.inputField}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  style={styles.inputField}
                  value={password}
                  onChangeText={setPassword}
                />
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordLink}>Forgot password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            )}
           {activeTab === 'verification' && (
              <View>
                <TextInput
                  placeholder="Mobile Number"
                  style={styles.inputField}
                  value={mobileNumber}
                  onChangeText={setMobileNumber}
                />
                <TextInput
                  placeholder="Password"
                  secureTextEntry
                  style={styles.inputField}
                  value={password}
                  onChangeText={setPassword}
                />
                <View style={styles.verificationCodeContainer}>
                  <TextInput
                    placeholder="Verification Code"
                    style={styles.verificationCodeInput}
                    value={verificationCode}
                    onChangeText={setVerificationCode}
                  />
                  <TouchableOpacity style={styles.getCodeButton} onPress={handleGetCode}>
                    <Text style={styles.getCodeButtonText}>Get Code</Text>
                  </TouchableOpacity>
                </View>
                <TouchableOpacity>
                  <Text style={styles.forgotPasswordLink}>Forgot password</Text>
                </TouchableOpacity>
                <TouchableOpacity style={styles.loginButton} onPress={handleLogin}>
                  <Text style={styles.loginButtonText}>Login</Text>
                </TouchableOpacity>
              </View>
            )}
          </View>
        </View>
      </View>
    </BottomSheet>
  );
};

BottomSheetLogin.propTypes = {
  visibility: PropTypes.bool.isRequired,
  toggleSelect: PropTypes.func.isRequired,
};

const styles = StyleSheet.create({
  bottomNavigationView: {
    backgroundColor: 'white',
    width: '100%',
    height:'60%',
    borderTopLeftRadius: 15,
    borderTopRightRadius: 15,
  },
  container: {
    width: '100%',
    height:'100%',
    padding: 20,
  },
  header: {
    alignItems: 'center',
    marginBottom: 20,
  },
  logo: {
    width: 100,
    height: 100,
    resizeMode: 'contain',
  },
  tabs: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  tabButton: {
    flex: 1,
    paddingVertical: 10,
    paddingHorizontal: 20,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white', // Set default background color
  },
  activeTabButton: {
    backgroundColor: 'white',
  },
  tabButtonText: {
    fontSize: 16,
    fontWeight: 'bold',
    color: 'black',
  },
  activeTabText: {
    color: 'green', // Set active tab text color
  },
  tabContent: {
    flex: 1,
  },
  inputField: {
    width: '100%',
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    marginBottom: 10,
    paddingHorizontal: 10,
  },
  forgotPasswordLink: {
    color: 'green',
    marginBottom: 10,
    textAlign:'center'
  },
  loginButton: {
    backgroundColor: 'green',
    paddingVertical: 10,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  loginButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
  verificationCodeContainer: {
    flexDirection: 'row',
    marginBottom: 10,
    alignItems: 'center',
  },
  verificationCodeInput: {
    flex: 1,
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
    borderRadius: 5,
    paddingHorizontal: 10,
    marginRight: 10,
  },
  getCodeButton: {
    backgroundColor: 'green',
    paddingVertical: 8,
    paddingHorizontal: 12,
    borderRadius: 5,
    justifyContent: 'center',
    alignItems: 'center',
  },
  getCodeButtonText: {
    color: 'white',
    fontWeight: 'bold',
  },
});

export default BottomSheetLogin;

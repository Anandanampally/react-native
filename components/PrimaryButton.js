import React from 'react';
import {View} from 'react-native-animatable';
import {
  Text,
  Button,
  TouchableOpacity,
  Dimensions,
  TextInput,
  Platform,
  Image,
  StyleSheet,
  ScrollView,
  StatusBar,
} from 'react-native';
const PrimaryButton = () => {
  return (
    <View>
      <View style={styles.button}>
        <TouchableOpacity style={styles.signIn} onPress={() => {}}>
          <View colors={['#00C100', '#01ab9d']} style={styles.signIn}>
            <Text
              style={[
                styles.textSign,
                {
                  color: '#fff',
                },
              ]}>
              SIGN U
            </Text>
          </View>
        </TouchableOpacity>
      </View>
    </View>
  );
};

export default PrimaryButton;

const styles = StyleSheet.create({
  signIn: {
    width: '100%',
    height: 50,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 40,
  },
});

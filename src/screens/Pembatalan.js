import React from 'react'
import { View, Text, StyleSheet, Image} from 'react-native'

const Pembatalan = ({}) => {
  return (
    <View>
        <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
            <Text style={styles.header}>Daftar Pembatalan</Text>
            <Image source={{ uri: 'https://media.istockphoto.com/vectors/online-ship-ticket-vector-icon-for-computer-website-or-application-vector-id954389882' }} 
              style={{ width: 200, height: 250 }}/>
            <Text style={styles.text}>Tidak Ada Aktivitas Pembatalan Tiket</Text>
        </View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  header: {
    color: '#1e90ff',
    fontSize: 20,
    fontWeight: 500,
    textAlign: 'center',
    marginBottom: 20,
  },
  text: {
    color: '#87cefa',
    fontWeight: 'bold',
    fontSize: 16,
  }
});
export default Pembatalan;
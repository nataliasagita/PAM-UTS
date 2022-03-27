import React from 'react'
import { View, Text, SafeAreaView, StyleSheet} from 'react-native'
import Icon from 'react-native-vector-icons/ionicons'

const Pesanan = ({}) => {
  return (
    <View style={{ flex: 1, alignItems: 'center'}}>
      <SafeAreaView>
        <Text style={styles.header}>Daftar Pemesanan</Text>
            <View style={styles.box}>
                <Text style={styles.text}>Bakauheni  <Icon name={'arrow-forward'}  size={20} color={'black'} />  Merak</Text>
                <Text style={styles.text2}>Jadwal Masuk Pelabuhan</Text>
                <Text style={styles.text3}>Kamis, 17 Maret 2022</Text>
                <Text style={styles.text3}>15:30 WIB</Text>
                <Text style={styles.text2}>Layanan</Text>
                <Text style={styles.text3}>Express</Text>
                <Text style={styles.text3}>______________________________________</Text>
                <Text style={styles.text3}>Dewasa x 1                      Rp 65.000</Text>
            </View>
      </SafeAreaView>
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
  },
  box: {
    alignItems: 'center',
    backgroundColor: '#f5fffa',
    marginTop: 10,
    width: 250,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  text: {
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
    marginBottom: 10,
  },
  text2: {
    fontSize: 14,
    fontWeight: 700,
    alignSelf: 'flex-start',
    marginBottom: 8,
  },
  text3: {
    fontSize: 14,
    alignSelf: 'flex-start', 
  },
});
export default Pesanan;
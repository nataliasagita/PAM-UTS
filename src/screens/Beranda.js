import React, { useState} from 'react'
import { View, Text, StyleSheet, TextInput, Button, SafeAreaView, TouchableOpacity} from 'react-native'

const Beranda = ({navigation}) => {
  const [Awal, setAwal] = useState('');
  const [Tujuan, setTujuan] = useState('');
  const [Layanan, setLayanan] = useState('');
  const [TglMasuk, setTglMasuk] = useState('');
  const [JamMasuk, setJamMasuk] = useState('');
  const [JlhOrng, setJlhOrng] = useState('');

  return (
    <View>
      <View style={{ flex: 1, alignItems: 'center', justifyContent: 'center' }}>
      <TouchableOpacity onPress={()=>navigation.navigate(Beranda)}>
          <View>
          <View style={styles.box}/>
          <View style={styles.boxinput}>
            <SafeAreaView>
              <Text style={styles.header}>Kapalzy</Text>
              <Text style={styles.textinput}>Pelabuhan Awal</Text>
              <TextInput placeholder='Pilih Pelabuhan Awal' style={styles.input} onChangeText={(val) => setAwal(val)}></TextInput>
              <Text style={styles.textinput}>Pelabuhan Tujuan</Text>
              <TextInput placeholder='Pilih Pelabuhan Tujuan' style={styles.input} onChangeText={(val) => setTujuan(val)}></TextInput>
              <Text style={styles.textinput}>Kelas Layanan</Text>
              <TextInput placeholder='Pilih Layanan' style={styles.input} onChangeText={(val) => setLayanan(val)}></TextInput>
              <Text style={styles.textinput}>Tanggal Masuk Pelabuhan</Text>
              <TextInput placeholder='Pilih Tanggal Masuk' style={styles.input} onChangeText={(val) => setTglMasuk(val)}></TextInput>
              <Text style={styles.textinput}>Jam Masuk Pelabuhan</Text>
              <TextInput placeholder='Pilih Jam Masuk' style={styles.input} onChangeText={(val) => setJamMasuk(val)}></TextInput>
              <TextInput placeholder='Dewasa 1 Orang' style={styles.input} onChangeText={(val) => setJlhOrng(val)}></TextInput>
            </SafeAreaView>
            <Button title='Buat Tiket' color= {'#FF7F10'} onPress={()=>navigation.navigate("Pesanan",{awal: Awal, tujuan: Tujuan, layanan: Layanan, tglmasuk: TglMasuk, jammasuk: JamMasuk, jlhorng: JlhOrng})}></Button>
          </View>
          </View>
      </TouchableOpacity>
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
    fontWeight: 700,
    textAlign: 'center',
    marginTop: 10,
    marginBottom: 20,
  },
  box: {
    backgroundColor: '#fff',
    flex: 1.3,
  },
  boxinput: {
    backgroundColor: 'white',
    top: 10,
    left: 5,
    padding: 10,
    width: 250,
    height: 'auto',
    borderRadius: 10,
    borderWidth: 1,
  },
  textinput: {
    fontWeight: 200,
    fontSize: 16,
    color: '#808080',
  },
  input: {
    height: 20,
    margin: 10,
    borderWidth: 1,
    borderRadius: 3,
    padding: 10,
    marginBottom: 20,
    backgroundColor: '#d3d3d3',
    color: '#000000',
  },
});
export default Beranda;
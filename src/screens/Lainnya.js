import React from 'react'
import { View, Text, SafeAreaView, StyleSheet } from 'react-native'
import { FontAwesome5, AntDesign, Entypo, MaterialIcons } from '@expo/vector-icons'

const Lainnya = ({}) => {
  return (
    <View>
        <View style={{ flex: 1, alignItems: 'center' }}>
          <SafeAreaView>
            <View style={styles.box}>
              <Text style={styles.header}>Menu</Text>
              <View style={styles.box1}> <AntDesign name="search1" size={24} color="black" />
                <Text style={styles.text}>Cari Pemesanan</Text>
              </View> 
              <View style={styles.box2}> <FontAwesome5 name="user-alt" size={24} color="green" />
                <Text style={styles.text}>Detail Profil</Text>
              </View>
              <View style={styles.box3}> <Entypo name="phone" size={24} color="red" />
                <Text style={styles.text}>Hubungi Kami</Text>
              </View>
              <View style={styles.box4}> <MaterialIcons name="history-edu" size={24} color="orange" />
                <Text style={styles.text}>Riwayat Pemesanan</Text>
              </View>
            </View>
          </SafeAreaView>
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
  box: {
    alignItems: 'center',
    backgroundColor: '#f5fffa',
    marginTop: 10,
    width: 300,
    paddingHorizontal: 15,
    paddingVertical: 20,
    borderRadius: 5,
    borderWidth: 1,
  },
  box1: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
  },
  box2:{
    alignSelf: 'flex-end',
    alignItems: 'center',
    justifyContent: 'center',
    marginTop: 45.9,
    backgroundColor: '#ffe4e1',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    position: 'absolute',
  },
  box3: {
    alignSelf: 'flex-start',
    alignItems: 'center',
    backgroundColor: '#ffe4e1',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 14,
    paddingVertical: 3,
    marginTop: 20,
  },
  box4: {
    alignSelf: 'flex-end',
    alignItems: 'center',
    marginTop: 122,
    backgroundColor: '#ffe4e1',
    borderRadius: 8,
    borderWidth: 1,
    paddingHorizontal: 8,
    paddingVertical: 3,
    position: 'absolute',
  },
});
export default Lainnya ;
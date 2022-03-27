import React from 'react'
import { View, Text, StyleSheet, ScrollView, SafeAreaView, TouchableOpacity} from 'react-native'
import DataTiket from '../src/screens/Tiket'

const Hasil = ({ route, navigation }) => {
    const tampil = DataTiket[3].map((TglMasuk, index) => {
        if (
            route.params.TglMasuk == TglMasuk ||
            route.params.Awal == DataTiket[0][index] ||
            route.params.Tujuan == DataTiket[1][index] ||
            route.params.Layanan == DataTiket[2][index]
        ) {
            return (
                <View style={styles.box} key={index}>
                    <View style={style.box1}>
                        <Text style={styles.textbox1}>{DataTiket[0][index]}</Text>
                    </View>
                    <View style={styles.box2}>
                        <Text style={styles.textBox}>{DataTiket[3][index]}</Text>
                    </View>
                </View>
            );
        }
    })
};

const styles = StyleSheet.create({
    container: {
      flex: 1,
    },
    box: {
        backgroundColor: "blue",
        flex: 1,
        padding: 20,
    },
});
export default Pencarian;
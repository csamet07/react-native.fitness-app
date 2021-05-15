import React from 'react';
import {
    SafeAreaView,
    View,
    Text,
    StyleSheet
} from 'react-native';

const MemberResult = ({route}) => {
    return (
        <SafeAreaView style={styles.container}>
            <Text style={styles.header}> Kayıt tamamlandı.</Text>
            <View style={styles.inner_container}>
                <Text style={styles.label}>üye adı: {route.params.user.user_name}</Text>
                <Text style={styles.label}>üye soyadı: {route.params.user.user_surName}</Text>
                <Text style={styles.label}>üye e-posta adresi: {route.params.user.user_mail}</Text>
                <Text style={styles.label}>üye yaşı: {route.params.user.user_age}</Text>
                <Text style={styles.label}>üye memleketi: {route.params.user.user_home_town}</Text>
            </View>
        </SafeAreaView>
    )
}

export default MemberResult;

const styles = StyleSheet.create({
    label: {
        fontWeight: 'bold',
        fontSize: 20,
        margin: 5
    },
    container: {
        justifyContent: 'center',
        flex: 1
    },
    header: {
        fontWeight: 'bold',
        fontSize: 40,
        textAlign: 'center',
        paddingTop: 150,
        flex: 1
    },
    inner_container: {
        flex: 2,
        paddingLeft: 20
    }
})
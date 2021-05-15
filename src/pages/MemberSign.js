import React, { useState } from 'react';
import {
    SafeAreaView,
    View,
    Text,
    Alert
} from 'react-native';
import Input from '../components/Input';
import Button from '../components/Button';

const MemberSign = ({navigation}) => {

    const [user_name, setUserName] = useState(null);
    const [user_surName, setUserSurName] = useState(null);
    const [user_age, setUserAge] = useState(null);
    const [user_mail, setUserMail] = useState(null);
    const [user_home_town, setUserHomeTown] = useState(null);

    const handleSubmit = () => {
        if(!user_name || !user_surName || !user_age || !user_mail || !user_home_town) {
            Alert.alert('kebap fitness salonu', 'bilgiler boş bıraklamaz.')
        }else{
            const user = {
                user_name,
                user_surName,
                user_age,
                user_mail,
                user_home_town
            }
            
            navigation.navigate('MemberResultScreen',{
                user
            });
        }
        

    }


    return (
        <SafeAreaView>
            <Input label="ad" placeholder="üye ismini giriniz.." onChangeText={setUserName} />
            <Input label="soyad" placeholder="üye soyismini giriniz.." onChangeText={setUserSurName} />
            <Input label="yaş" placeholder="üye yaşını giriniz.." onChangeText={setUserAge} />
            <Input label="e-posta" placeholder="üye eposta adresini giriniz.." onChangeText={setUserMail} />
            <Input label="memleket" placeholder="üye memleketi giriniz.." onChangeText={setUserHomeTown} />
            <Button text="kaydı tamamla" onPress={handleSubmit} />
        </SafeAreaView>
    )
}

export default MemberSign;
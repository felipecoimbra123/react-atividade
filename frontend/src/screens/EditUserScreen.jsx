import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import { editarUsuario } from "../services/api";

export default function EditScreen({ navigation, route }) {
    const {id, username, email, placa, cor, modelo} = route.params.user

    const [form, setForm] = useState({
        username: username, password: password, email: email,
        placa: placa, cor: cor, modelo: modelo
    })

    const handleChange = (name, value) => setForm({ ...form, [name]: value})

    const handleSubmit = async () => {
    const result = await editarUsuario(id, form)

    if(result.success) {
        Alert.alert('Sucesso', result.message)
        navigation.navigate('Vagas', { user: result.user })
    } else {
        Alert.alert('Erro', result.message)
    }
}

    return (
        <View style={styles.container}>
            <Text style={styles.title}>Editar</Text>
        </View>
    )
}
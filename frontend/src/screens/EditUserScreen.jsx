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
        username: username, password: '', email: email,
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
            <TextInput style={styles.input} placeholder="Username" onChangeText={(input) => handleChange('username', input)} value={form.username}/>
            <TextInput style={styles.input} placeholder="Senha" onChangeText={(input) => handleChange('password', input)} value={form.password}/>
            <TextInput style={styles.input} placeholder="E-mail" onChangeText={(input) => handleChange('email', input)} value={form.email}/>
            <TextInput style={styles.input} placeholder="Placa" onChangeText={(input) => handleChange('placa', input)} value={form.placa}/>
            <TextInput style={styles.input} placeholder="Cor" onChangeText={(input) => handleChange('cor', input)} value={form.cor}/>
            <TextInput style={styles.input} placeholder="Modelo" onChangeText={(input) => handleChange('modelo', input)} value={form.modelo}/>
            <Button title="Editar" onPress={handleSubmit}/>
        </View>
    )
}
import React, { useState } from "react";
import {
    View,
    TextInput,
    Button,
    Text,
    StyleSheet,
    Alert
} from 'react-native';
import { login } from "../services/api";

export default function LoginScreen({ navigation }) {
    const [email, setEmail] = useState('')
    const [password, setPassword] = useState('')

    const handleLogin = async () => {
        const result = await login(email, password);
        if (result.success) {
            navigation.navigate('Vagas', { user: result.user })
        } else {
            Alert.alert('Erro', result.message)
        }
    }

    return (
        <View style={styles.container}>
            <Text style={styles.title}> Login </Text>
            <TextInput style={styles.input} placeholder="E-mail" onChangeText={setEmail} />
            <TextInput style={styles.input} placeholder="Senha" onChangeText={setPassword} />
            <Button title="Entrar" onPress={handleLogin} />
            <Text style={styles.link} onPress={() => navigation.navigate('Cadastro')}> Criar Conta </Text>
        </View>
    )

}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#FFFACC'
    },
    input: {
        borderWidth: 1,
        marginBottom: 10,
        padding: 15,
        fontSize: 18,
        borderRadius: 10,
        backgroundColor: '#FFFFFF',
        fontWeight: 300
    },
    title: {
        fontSize: 50,
        fontFamily: '"Abel" serif',
        fontWeight: 300,
        marginBottom: 20,
        textTransform: 'uppercase',
        fontWeight: 500,
        textAlign: 'center'
    },
    link: {
        marginTop: 20,
        color: 'blue',
        textAlign: 'center',
    }
})

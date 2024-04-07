import React, { useState } from "react";
import { Text, View, TouchableOpacity, ScrollView } from "react-native";
import { styles } from "./styles";
import { useNavigation } from "@react-navigation/native";
import InputButton from "../../components/inputbutton/inputbutton";

export default function Home() {
    const navigation = useNavigation();
    const [nome, setNome] = useState("");
    const [email, setEmail] = useState("");
    const [idade, setIdade] = useState("");
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");

    function Enviar() {
        if (!nome.trim() || !email.trim() || !idade.trim() || !username.trim() || !password.trim()) {
            alert("Há campos vazios, preencha-os e tente novamente");
            return;
        }
        navigation.navigate("Profile", {
            nome,
            email,
            idade,
            username,
            password
        });
    }

    return (
        <View style={styles.container}>
            <View style={styles.box}>
                <Text style={styles.text}> Fomulário </Text>
                <ScrollView style={styles.form}>
                    <InputButton
                        cName="Nome"
                        onChangeText={(text) => setNome(text)}
                    />
                    <InputButton
                        cName="E-mail"
                        onChangeText={(text) => setEmail(text)}
                    />
                    <InputButton
                        cName="Idade"
                        onChangeText={(text) => setIdade(text)}
                    />
                    <InputButton
                        cName="Username"
                        onChangeText={(text) => setUsername(text)}
                    />
                    <InputButton
                        cName="Senha"
                        onChangeText={(text) => setPassword(text)}
                    /> 
                </ScrollView>
                
                <TouchableOpacity
                    style={styles.button}
                    onPress={Enviar}>
                    <Text style={styles.textbutton}>Enviar</Text>
                </TouchableOpacity>
            </View>
        </View>
    );
}


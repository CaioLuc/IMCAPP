import { StatusBar } from 'expo-status-bar';
import { useState } from 'react';
import { TouchableOpacity, Image, StyleSheet, Text, TextInput, View } from 'react-native';
import { Topo } from './components/Topo';
import { Resultado } from './components/Resultado';

export default function App() {
    // HOOKS
    const [peso, setPeso] = useState<string>("");
    const [altura, setAltura] = useState<string>("");
    const [imc, setIMC] = useState<number | null>(null);
    const [classificacao, setClassificacao] = useState<string | null>(null);
    
    // Novo Hook para controlar a mensagem de erro
    const [mensagemErro, setMensagemErro] = useState<string | null>(null);

    // Função para validar os campos antes de calcular o IMC
    function validarCampos() {
        // Verifica se os campos estão vazios ou se não são numeros validos
        if (!peso.trim() || !altura.trim() || isNaN(parseFloat(peso)) || isNaN(parseFloat(altura))) {
            setMensagemErro("Preencha o peso e a altura");
            setIMC(null); // limpa o resultado anterior caso tenha  erro
            setClassificacao(null);
        } else {
            setMensagemErro(null); 
            calcularIMC(); 
        }
    }

    function calcularIMC() {
        let imcCalculado = parseFloat(peso) / (parseFloat(altura) * parseFloat(altura));

        setIMC(imcCalculado);

        if (imcCalculado < 18.5) {
            setClassificacao("Abaixo do peso");
        } else if (imcCalculado < 25) {
            setClassificacao("Peso normal");
        } else if (imcCalculado < 30) {
            setClassificacao("Sobrepeso");
        } else {
            setClassificacao("Obeso");
        }
    }

    return (
        <View style={styles.container}>
            <Topo />

            <View style={styles.form}>
                {/* Exibe o alerta acima do formulário caso exista um erro */}
                {mensagemErro && <Text style={styles.erro}>{mensagemErro}</Text>}

                <Text style={styles.label}>Peso</Text>
                {/* Foi adicionado keyboardType para facilitar a digitação de números */}
                <TextInput style={styles.input} onChangeText={setPeso} keyboardType="numeric"></TextInput>

                <Text style={styles.label}>Altura</Text>
                <TextInput style={styles.input} onChangeText={setAltura} keyboardType="numeric"></TextInput>

                {/* O botão agora chama a função validarCampos em vez de calcularIMC diretamente */}
                <TouchableOpacity style={styles.btn} onPress={validarCampos}>
                    <Text style={styles.btnText}>Calcular</Text>
                </TouchableOpacity>

                <Resultado imc={imc} classificacao={classificacao} />

            </View>
            <StatusBar style="auto" />
        </View>
    );
}

const styles = StyleSheet.create({
    container: {
        flex: 1,
        backgroundColor: '#06C',
    },
    form: {
        backgroundColor: '#FFF',
        height: '100%',
        borderTopStartRadius: 30,
        borderTopEndRadius: 30,
        padding: 30
    },
    label: {
        fontSize: 22,
        marginBottom: 10
    },
    input: {
        backgroundColor: '#DDD',
        borderRadius: 10,
        fontSize: 22,
        padding: 10,
        height: 60,
        marginBottom: 20
    },
    btn: {
        backgroundColor: '#F90',
        padding: 15,
        height: 60,
        borderRadius: 10,
        alignItems: 'center',
        marginBottom: 20
    },
    btnText: {
        color: '#FFF',
        fontSize: 22
    },
    // Novo estilo para o texto de alerta
    erro: {
        color: 'red',
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 15,
        fontWeight: 'bold'
    }
});
import { StyleSheet, Text, View } from "react-native"

interface ResultadoProps {
    imc?: number;
    classificacao?: string;
}

export function Resultado({ imc, classificacao }: ResultadoProps) {
    return (
        <View style={styles.resultado}>
            <Text style={styles.labelResultado}>Seu IMC:</Text>
            <Text style={styles.imc}>{imc?.toFixed(2)}</Text>
            <Text style={styles.labelResultado}>Classificação</Text>
            <Text style={styles.classificacao}>{classificacao}</Text>
        </View>
    );
}

const styles = StyleSheet.create(
    {
        resultado: {
            backgroundColor: '#EEE',
            padding: 20,
            borderRadius: 20
        },
        labelResultado: {
            textAlign: 'center',
            fontSize: 18,
            marginBottom: 10
        },
        imc: {
            backgroundColor: '#FFF',
            textAlign: 'center',
            padding: 10,
            fontSize: 24,
            borderRadius: 10,
            marginBottom: 10
        },
        classificacao: {
            backgroundColor: '#F00',
            color: '#FFF',
            textAlign: 'center',
            padding: 10,
            fontSize: 24,
            borderRadius: 10,
            marginBottom: 10
        }
    }
)
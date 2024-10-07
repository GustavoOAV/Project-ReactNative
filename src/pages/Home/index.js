import { FlatList, StyleSheet, Text, View } from 'react-native';
import Balance from '../../componentes/Balance';
import Header from '../../componentes/Header';

const list = [
    {
        id: 1,
        label: 'Boleto conta Luz',
        value: '300,90',
        date: '17/09/2022',
        type: 0
    },
    {
        id: 2,
        label: 'Pix Cliente X',
        value: '2500,00',
        date: '17/09//2023',
        type: 1
    },
    {
        id: 3,
        label: 'Salario',
        value: '8000,00',
        date: '17/09//2023',
        type: 2
    },
]

export default function Home() {
  return (
    <View style={styles.container}>
    <Header name="Gustavo Orlando"/>
    <Balance saldo="9.250,90" gastos="-527,00"/>
    
    <Text style={styles.title}>Últimas Movimentações</Text>
    <FlatList 
    style={styles.list}
    data={list}
    keyExtractor={(item => String(item.id))}
    showsVerticalScrollIndicator={false}
    renderItem={({ item }) => <Text>Text</Text>}
    />
    
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fafafa',
  
  },
  title:{
    fontSize: 18,
    fontWeight: 'bold',
    marginLeft: 14,
    marginRight: 14,
    marginTop: 14,
  },
  list:{

  }
});
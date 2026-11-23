import { View, Text, StyleSheet } from 'react-native';

const Inicio = () => {
  return (
    <View style={styles.contenedor}>
      <Text style={styles.titulo}>App Sena</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  titulo: {
    color:'#ff0000',
    fontSize: 20
  },
  contenedor: {
    flex: 1
  }
});

export default Inicio;
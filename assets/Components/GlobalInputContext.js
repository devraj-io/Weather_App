
// const GlobalInput = () => {
//   return (
//     <View style={styles.container}>
//       <Text style={styles.label}>Label</Text>
//       <Pressable style={styles.input} onPress={() => {}}>
//         <Text style={styles.inputText}>Input</Text>
//       </Pressable>
//     </View>
//   );
// };

// const styles = StyleSheet.create({
//   container: {
//     marginVertical: 12,
//   },
//   label: {
//     marginBottom: 4,
//     fontSize: 16,
//     fontWeight: 'bold',
//   },
//   input: {
//     backgroundColor: '#f0f0f0',
//     borderRadius: 8,
//     padding: 12,
//   },
//   inputText: {
//     fontSize: 16,
//   },
// });

// export default GlobalInput;


import React, { createContext, useState } from 'react';

export const GlobalInputContext = createContext();

export const GlobalInputProvider = ({ children }) => {
  const [inputValue, setInputValue] = useState('');
  return (
    <GlobalInputContext.Provider value={{ inputValue, setInputValue }}>
      {children}
    </GlobalInputContext.Provider>
  );
};



// {loading ? (
//   <View>
//     <ActivityIndicator size="large" color="#4f8cff" />
//     <Text style={styles.text}>Loading...</Text>
//   </View>
// ) : errorMsg ? (
//   <Text style={styles.error}>{errorMsg}</Text>
// ) : weather ? (
//   <View>
//     <Text style={styles.modalTitle}>Current weather</Text>
//     <Text style={styles.time}>
//       {weather.dt
//         ? new Date(weather.dt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
//         : '12:25 AM'}
//     </Text>
//     <View style={styles.weatherHeader}>
//       <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
//       <View style={styles.conditionContainer}>
//         <Text style={styles.condition}>{weather.weather[0].description || 'Partly cloudy'}</Text>
//         <Text style={styles.feelsLike}>Feels like {Math.round(weather.main.feels_like)}°C</Text>
//       </View>
//     </View>
//     <Text style={styles.forecast}>
//       The skies will be {weather.weather[0].description || 'partly cloudy'}. The low will be{' '}
//       {Math.round(weather.main.temp_min)}°C.
//     </Text>
//     <View style={styles.detailsContainer}>
//       {/* ... (rest of the details) */}
//     </View>
//     <Pressable style={[styles.button, { marginTop: 20 }]} onPress={() => setModalVisible(false)}>
//       <Text style={styles.buttonText}>Close</Text>
//     </Pressable>
//   </View>
// ) : (
//   <Text style={styles.text}>No data.</Text>
// )}
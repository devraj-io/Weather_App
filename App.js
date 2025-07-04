// import { StatusBar } from 'expo-status-bar';
// import { StyleSheet, Text, View, TextInput,Pressable } from 'react-native';
// import { GlobalInputProvider, GlobalInputContext } from './assets/Components/GlobalInputContext';
// import React, { useContext } from 'react';

// function MainScreen() {
//   const { inputValue, setInputValue } = useContext(GlobalInputContext);

//   return (
//     <View style={styles.container}>
//       <Text>Global Input Example</Text>
//       <TextInput
//         style={{borderWidth: 1, width: 200, margin: 10, padding: 5}}
//         value={inputValue}
//         onChangeText={setInputValue}
//         placeholder="Type here..."
//       />
//       <Pressable
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed ? '#87ceeb' : '#2196F3',
//             padding: 10,
//             borderRadius: 5,
//             marginTop: 10,
//           },
//         ]}
//         onPress={() => setInputValue('Pressed!')}
//       >
//         <Text style={{ color: 'white', fontWeight: 'bold' }}>Press Me</Text>
//       </Pressable>
//       <Text style={{marginTop: 20}}>Current value: {inputValue}</Text>
//       <StatusBar style="auto" />
//     </View>

//   );
// }

// export default function App() {
//   return (
//     <GlobalInputProvider>
//       <MainScreen />
//     </GlobalInputProvider>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
// });

// Model Component

// import { StatusBar } from 'expo-status-bar';
// import React, { useState } from 'react';
// import { StyleSheet, Text, View, TextInput, Pressable, Modal } from 'react-native';

// export default function App() {
//   const [inputValue, setInputValue] = useState('');
//   const [modalVisible, setModalVisible] = useState(false);


//   return (
//     <View style={styles.container}>
//       <Text>Global Input Example</Text>
//       <TextInput
//         style={{borderWidth: 1, width: 200, margin: 10, padding: 5}}
//         value={inputValue}
//         onChangeText={setInputValue}
//         placeholder="Type here..."
//       />
//       <Pressable
//         style={({ pressed }) => [
//           {
//             backgroundColor: pressed ? '#87ceeb' : '#2196F3',
//             padding: 10,
//             borderRadius: 5,
//             marginTop: 10,
//           },
//         ]}
//         onPress={() => setModalVisible(true)}
//       >
//         <Text style={{ color: 'white', fontWeight: 'bold' }}>Show Modal</Text>
//       </Pressable>
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             <Text style={{marginBottom: 20}}>This is a React Native Modal!</Text>
//             <Pressable
//               style={{
//                 backgroundColor: '#2196F3',
//                 padding: 10,
//                 borderRadius: 5,
//               }}
//               onPress={() => setModalVisible(false)}
//             >
//               <Text style={{ color: 'white', fontWeight: 'bold' }}>Close Modal</Text>
//             </Pressable>
//           </View>
//         </View>
//       </Modal>
//       <Text style={{marginTop: 20}}>Current value: {inputValue}</Text>
//       <StatusBar style="auto" />
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#fff',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.3)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     backgroundColor: 'white',
//     padding: 30,
//     borderRadius: 10,
//     alignItems: 'center',
//     elevation: 5,
//   },
// });



// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator, Pressable, Platform } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// export default function App() {
//   const [country, setCountry] = useState('IN');
//   const [city, setCity] = useState('Delhi');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);

//   // Example country-city data
//   const countryCityData = {
//     IN: ['Delhi', 'Mumbai', 'Bangalore'],
//     US: ['New York', 'Los Angeles', 'Chicago'],
//     GB: ['London', 'Manchester', 'Birmingham'],
//   };

//   // Replace with your OpenWeatherMap API key
//   const API_KEY = '341c94518eb682ca2e66c329ce33ffa1';

//   const fetchWeather = async () => {
//     setLoading(true);
//     setErrorMsg(null);
//     setWeather(null);
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
//       const response = await fetch(url);
//       const data = await response.json();
//       if (response.ok) {
//         setWeather(data);
//       } else {
//         setErrorMsg('Failed to fetch weather data');
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching weather data');
//     }
//     setLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weather App</Text>
//       <View style={styles.card}>
//         <Text style={styles.label}>Select Country</Text>
//         <View style={styles.pickerWrapper}>
//           <Picker
//             selectedValue={country}
//             style={styles.picker}
//             itemStyle={styles.pickerItem}
//             onValueChange={(itemValue) => {
//               setCountry(itemValue);
//               setCity(countryCityData[itemValue][0]);
//             }}
//             mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//           >
//             <Picker.Item label="India" value="IN" />
//             <Picker.Item label="United States" value="US" />
//             <Picker.Item label="United Kingdom" value="GB" />
//           </Picker>
//         </View>
//         <Text style={styles.label}>Select City</Text>
//         <View style={styles.pickerWrapper}>
//           <Picker
//             selectedValue={city}
//             style={styles.picker}
//             itemStyle={styles.pickerItem}
//             onValueChange={(itemValue) => setCity(itemValue)}
//             mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//           >
//             {countryCityData[country].map((cityName) => (
//               <Picker.Item key={cityName} label={cityName} value={cityName} />
//             ))}
//           </Picker>
//         </View>
//         <Pressable style={styles.button} onPress={fetchWeather}>
//           <Text style={styles.buttonText}>Get Weather</Text>
//         </Pressable>
//       </View>
//       {loading && (
//         <View style={styles.weatherBox}>
//           <ActivityIndicator size="large" color="#4f8cff" />
//           <Text style={styles.text}>Loading...</Text>
//         </View>
//       )}
//       {errorMsg && (
//         <View style={styles.weatherBox}>
//           <Text style={styles.error}>{errorMsg}</Text>
//         </View>
//       )}
//       {weather && (
//         <View style={styles.weatherBox}>
//           <Text style={styles.title}>Weather in {weather.name}, {country}</Text>
//           <Text style={styles.text}>Temperature: {weather.main.temp}°C</Text>
//           <Text style={styles.text}>Weather: {weather.weather[0].description}</Text>
//           <Text style={styles.text}>Humidity: {weather.main.humidity}%</Text>
//           <Text style={styles.text}>Wind Speed: {weather.wind.speed} m/s</Text>
//         </View>
//       )}
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8fafc',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingHorizontal: 16,
//     paddingTop: 60,
//     paddingBottom: 30,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#22223b',
//     marginBottom: 24,
//     letterSpacing: 0.5,
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     padding: 24,
//     width: '100%',
//     maxWidth: 370,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.10,
//     shadowRadius: 8,
//     elevation: 4,
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 16,
//     color: '#4f8cff',
//     fontWeight: '600',
//     marginBottom: 6,
//     alignSelf: 'flex-start',
//     marginLeft: 4,
//   },
//   pickerWrapper: {
//     width: '100%',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     overflow: 'hidden',
//     marginBottom: 16,
//     backgroundColor: '#f4f4f4',
//   },
//   picker: {
//     width: '100%',
//     height: 48,
//     backgroundColor: 'transparent',
//   },
//   pickerItem: {
//     fontSize: 18,
//     color: '#22223b',
//     height: 48,
//   },
//   button: {
//     backgroundColor: '#4f8cff',
//     borderRadius: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     marginTop: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: 350,
//     alignSelf: 'center',
//     shadowColor: '#4f8cff',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 18,
//     letterSpacing: 0.5,
//   },
//   weatherBox: {
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     padding: 24,
//     marginTop: 10,
//     width: '100%',
//     maxWidth: 370,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.10,
//     shadowRadius: 8,
//     elevation: 4,
//   },
//   text: {
//     fontSize: 18,
//     color: '#22223b',
//     marginVertical: 4,
//     textAlign: 'center',
//   },
//   error: {
//     color: '#e63946',
//     marginTop: 10,
//     fontSize: 16,
//     textAlign: 'center',
//   },
// });

//                            good running code for weather app

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator, Pressable, Platform, Modal } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// export default function App() {
//   const [country, setCountry] = useState('IN');
//   const [city, setCity] = useState('Delhi');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   // Example country-city data
//   const countryCityData = {
//     IN: ['Delhi', 'Mumbai', 'Bangalore'],
//     US: ['New York', 'Los Angeles', 'Chicago'],
//     GB: ['London', 'Manchester', 'Birmingham'],
//   };

//   // Replace with your OpenWeatherMap API key
//   const API_KEY = '341c94518eb682ca2e66c329ce33ffa1';

//   const fetchWeather = async () => {
//     setLoading(true);
//     setErrorMsg(null);
//     setWeather(null);
//     setModalVisible(true);
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
//       const response = await fetch(url);
//       const data = await response.json();
//       if (response.ok) {
//         setWeather(data);
//       } else {
//         setErrorMsg('Failed to fetch weather data');
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching weather data');
//     }
//     setLoading(false);
//   };

//   return (
//     <View style={styles.container}>
//       <Text style={styles.title}>Weather App</Text>
//       <View style={styles.card}>
//         <Text style={styles.label}>Select Country</Text>
//         <View style={styles.pickerWrapper}>
//           <Picker
//             selectedValue={country}
//             style={styles.picker}
//             itemStyle={styles.pickerItem}
//             onValueChange={(itemValue) => {
//               setCountry(itemValue);
//               setCity(countryCityData[itemValue][0]);
//             }}
//             mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//           >
//             <Picker.Item label="India" value="IN" />
//             <Picker.Item label="United States" value="US" />
//             <Picker.Item label="United Kingdom" value="GB" />
//           </Picker>
//         </View>
//         <Text style={styles.label}>Select City</Text>
//         <View style={styles.pickerWrapper}>
//           <Picker
//             selectedValue={city}
//             style={styles.picker}
//             itemStyle={styles.pickerItem}
//             onValueChange={(itemValue) => setCity(itemValue)}
//             mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//           >
//             {countryCityData[country].map((cityName) => (
//               <Picker.Item key={cityName} label={cityName} value={cityName} />
//             ))}
//           </Picker>
//         </View>
//         <Pressable style={styles.button} onPress={fetchWeather}>
//           <Text style={styles.buttonText}>Get Weather</Text>
//         </Pressable>
//       </View>
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             {loading ? (
//               <>
//                 <ActivityIndicator size="large" color="#4f8cff" />
//                 <Text style={styles.text}>Loading...</Text>
//               </>
//             ) : errorMsg ? (
//               <Text style={styles.error}>{errorMsg}</Text>
//             ) : weather ? (
//               <>
//                 <Text style={styles.modalTitle}>Current weather</Text>
//                 <Text style={styles.time}>{weather.dt ? new Date(weather.dt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true }) : '11:50 PM'}</Text>
//                 <View style={styles.weatherHeader}>
//                   <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
//                   <View style={styles.conditionContainer}>
//                     <Text style={styles.condition}>{weather.weather[0].description || 'Partly cloudy'}</Text>
//                     <Text style={styles.feelsLike}>Feels like {Math.round(weather.main.feels_like)}°C</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.forecast}>The skies will be {weather.weather[0].description || 'partly cloudy'}. The low will be {Math.round(weather.main.temp_min)}°C.</Text>
//                 <View style={styles.detailsContainer}>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Air quality</Text>
//                     <Text style={styles.detailValue}>{97}</Text> {/* Placeholder, replace with actual API data if available */}
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Wind</Text>
//                     <Text style={styles.detailValue}>{weather.wind.speed} km/h {weather.wind.deg ? '↘' : '↓'}</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Humidity</Text>
//                     <Text style={styles.detailValue}>{weather.main.humidity}%</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Visibility</Text>
//                     <Text style={styles.detailValue}>{weather.visibility / 1000} km</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Pressure</Text>
//                     <Text style={styles.detailValue}>{weather.main.pressure} mb</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Dew point</Text>
//                     <Text style={styles.detailValue}>{Math.round(weather.main.temp - ((100 - weather.main.humidity) / 5))}°C</Text> {/* Approximation */}
//                   </View>
//                 </View>
//                 <Pressable
//                   style={[styles.button, { marginTop: 20 }]}
//                   onPress={() => setModalVisible(false)}
//                 >
//                   <Text style={styles.buttonText}>Close</Text>
//                 </Pressable>
//               </>
//             ) : (
//               <Text style={styles.text}>No data.</Text>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </View>
//   );
// }

// const styles = StyleSheet.create({
//   container: {
//     flex: 1,
//     backgroundColor: '#f8fafc',
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingHorizontal: 16,
//     paddingTop: 60,
//     paddingBottom: 30,
//   },
//   title: {
//     fontSize: 26,
//     fontWeight: '700',
//     color: '#22223b',
//     marginBottom: 24,
//     letterSpacing: 0.5,
//     textAlign: 'center',
//   },
//   card: {
//     backgroundColor: '#fff',
//     borderRadius: 18,
//     padding: 24,
//     width: '100%',
//     maxWidth: 370,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.10,
//     shadowRadius: 8,
//     elevation: 4,
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 16,
//     color: '#4f8cff',
//     fontWeight: '600',
//     marginBottom: 6,
//     alignSelf: 'flex-start',
//     marginLeft: 4,
//   },
//   pickerWrapper: {
//     width: '100%',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     overflow: 'hidden',
//     marginBottom: 16,
//     backgroundColor: '#f4f4f4',
//   },
//   picker: {
//     width: '100%',
//     height: 48,
//     backgroundColor: 'transparent',
//   },
//   pickerItem: {
//     fontSize: 18,
//     color: '#22223b',
//     height: 48,
//   },
//   button: {
//     backgroundColor: '#4f8cff',
//     borderRadius: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     marginTop: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: 350,
//     alignSelf: 'center',
//     shadowColor: '#4f8cff',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 18,
//     letterSpacing: 0.5,
//   },
//   text: {
//     fontSize: 18,
//     color: '#22223b',
//     marginVertical: 4,
//     textAlign: 'center',
//   },
//   error: {
//     color: '#e63946',
//     marginTop: 10,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: '600',
//     marginBottom: 4,
//     textAlign: 'center',
//   },
//   time: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   weatherHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   temp: {
//     fontSize: 48,
//     color: '#fff',
//     fontWeight: '700',
//   },
//   conditionContainer: {
//     alignItems: 'flex-end',
//   },
//   condition: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   feelsLike: {
//     fontSize: 14,
//     color: '#fff',
//     opacity: 0.8,
//   },
//   forecast: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   detailItem: {
//     width: '48%',
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontSize: 12,
//     color: '#fff',
//     opacity: 0.7,
//   },
//   detailValue: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     backgroundColor: '#1e2a44',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '90%',
//     maxWidth: 350,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 6,
//   },
// });

//                     good app with background image

// import React, { useState } from 'react';
// import { StyleSheet, Text, View, ActivityIndicator, Pressable, Platform, Modal, ImageBackground } from 'react-native';
// import { Picker } from '@react-native-picker/picker';

// // Assuming the image is saved as 'sky_background.jpg' in the 'assets' folder
// const backgroundImage = require('./assets/sky_background.jpg');

// export default function App() {
//   const [country, setCountry] = useState('IN');
//   const [city, setCity] = useState('Delhi');
//   const [weather, setWeather] = useState(null);
//   const [loading, setLoading] = useState(false);
//   const [errorMsg, setErrorMsg] = useState(null);
//   const [modalVisible, setModalVisible] = useState(false);

//   // Example country-city data
//   const countryCityData = {
//     IN: ['Delhi', 'Mumbai', 'Bangalore'],
//     US: ['New York', 'Los Angeles', 'Chicago'],
//     GB: ['London', 'Manchester', 'Birmingham'],
//   };

//   // Replace with your OpenWeatherMap API key
//   const API_KEY = '341c94518eb682ca2e66c329ce33ffa1';

//   const fetchWeather = async () => {
//     setLoading(true);
//     setErrorMsg(null);
//     setWeather(null);
//     setModalVisible(true);
//     try {
//       const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
//       const response = await fetch(url);
//       const data = await response.json();
//       if (response.ok) {
//         setWeather(data);
//       } else {
//         setErrorMsg('Failed to fetch weather data');
//       }
//     } catch (error) {
//       setErrorMsg('Error fetching weather data');
//     }
//     setLoading(false);
//   };

//   return (
//     <ImageBackground source={backgroundImage} style={styles.background}>
//       <View style={styles.container}>
//         <Text style={styles.title}>Weather App</Text>
//         <View style={styles.card}>
//           <Text style={styles.label}>Select Country</Text>
//           <View style={styles.pickerWrapper}>
//             <Picker
//               selectedValue={country}
//               style={styles.picker}
//               itemStyle={styles.pickerItem}
//               onValueChange={(itemValue) => {
//                 setCountry(itemValue);
//                 setCity(countryCityData[itemValue][0]);
//               }}
//               mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//             >
//               <Picker.Item label="India" value="IN" />
//               <Picker.Item label="United States" value="US" />
//               <Picker.Item label="United Kingdom" value="GB" />
//             </Picker>
//           </View>
//           <Text style={styles.label}>Select City</Text>
//           <View style={styles.pickerWrapper}>
//             <Picker
//               selectedValue={city}
//               style={styles.picker}
//               itemStyle={styles.pickerItem}
//               onValueChange={(itemValue) => setCity(itemValue)}
//               mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
//             >
//               {countryCityData[country].map((cityName) => (
//                 <Picker.Item key={cityName} label={cityName} value={cityName} />
//               ))}
//             </Picker>
//           </View>
//           <Pressable style={styles.button} onPress={fetchWeather}>
//             <Text style={styles.buttonText}>Get Weather</Text>
//           </Pressable>
//         </View>
//       </View>
//       <Modal
//         visible={modalVisible}
//         transparent={true}
//         animationType="slide"
//         onRequestClose={() => setModalVisible(false)}
//       >
//         <View style={styles.modalBackground}>
//           <View style={styles.modalContainer}>
//             {loading ? (
//               <>
//                 <ActivityIndicator size="large" color="#4f8cff" />
//                 <Text style={styles.text}>Loading...</Text>
//               </>
//             ) : errorMsg ? (
//               <Text style={styles.error}>{errorMsg}</Text>
//             ) : weather ? (
//               <>
//                 <Text style={styles.modalTitle}>Current weather</Text>
//                 <Text style={styles.time}>
//                   {weather.dt
//                     ? new Date(weather.dt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
//                     : '11:57 PM'}
//                 </Text>
//                 <View style={styles.weatherHeader}>
//                   <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
//                   <View style={styles.conditionContainer}>
//                     <Text style={styles.condition}>{weather.weather[0].description || 'Partly cloudy'}</Text>
//                     <Text style={styles.feelsLike}>Feels like {Math.round(weather.main.feels_like)}°C</Text>
//                   </View>
//                 </View>
//                 <Text style={styles.forecast}>
//                   The skies will be {weather.weather[0].description || 'partly cloudy'}. The low will be{' '}
//                   {Math.round(weather.main.temp_min)}°C.
//                 </Text>
//                 <View style={styles.detailsContainer}>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Air quality</Text>
//                     <Text style={styles.detailValue}>{97}</Text> {/* Placeholder */}
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Wind</Text>
//                     <Text style={styles.detailValue}>{weather.wind.speed} km/h {weather.wind.deg ? '↘' : '↓'}</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Humidity</Text>
//                     <Text style={styles.detailValue}>{weather.main.humidity}%</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Visibility</Text>
//                     <Text style={styles.detailValue}>{weather.visibility / 1000} km</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Pressure</Text>
//                     <Text style={styles.detailValue}>{weather.main.pressure} mb</Text>
//                   </View>
//                   <View style={styles.detailItem}>
//                     <Text style={styles.detailLabel}>Dew point</Text>
//                     <Text style={styles.detailValue}>{Math.round(weather.main.temp - ((100 - weather.main.humidity) / 5))}°C</Text>
//                   </View>
//                 </View>
//                 <Pressable style={[styles.button, { marginTop: 20 }]} onPress={() => setModalVisible(false)}>
//                   <Text style={styles.buttonText}>Close</Text>
//                 </Pressable>
//               </>
//             ) : (
//               <Text style={styles.text}>No data.</Text>
//             )}
//           </View>
//         </View>
//       </Modal>
//     </ImageBackground>
//   );
// }

// const styles = StyleSheet.create({
//   background: {
//     flex: 1,
//     width: '100%',
//     height: '100%',
//   },
//   container: {
//     flex: 1,
//     alignItems: 'center',
//     justifyContent: 'flex-start',
//     paddingHorizontal: 16,
//     paddingTop: 60,
//     paddingBottom: 30,
//   },
//   title: {
//     fontSize: 40,
//     fontWeight: '700',
//     color: '#f5f5f9ff',
//     marginBottom: 24,
//     letterSpacing: 0.5,
//     textAlign: 'center',
//     textShadowColor: '#000',
//     textShadowOffset: { width: 1, height: 1 },
//     textShadowRadius: 2,
//   },
//   card: {
//     backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white for readability
//     borderRadius: 18,
//     padding: 24,
//     width: '100%',
//     maxWidth: 370,
//     alignItems: 'center',
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.10,
//     shadowRadius: 8,
//     elevation: 4,
//     marginBottom: 24,
//   },
//   label: {
//     fontSize: 16,
//     color: '#4f8cff',
//     fontWeight: '600',
//     marginBottom: 6,
//     alignSelf: 'flex-start',
//     marginLeft: 4,
//   },
//   pickerWrapper: {
//     width: '100%',
//     borderRadius: 12,
//     borderWidth: 1,
//     borderColor: '#e0e0e0',
//     overflow: 'hidden',
//     marginBottom: 16,
//     backgroundColor: '#f4f4f4',
//   },
//   picker: {
//     width: '100%',
//     height: 48,
//     backgroundColor: 'transparent',
//   },
//   pickerItem: {
//     fontSize: 18,
//     color: '#22223b',
//     height: 48,
//   },
//   button: {
//     backgroundColor: '#4f8cff',
//     borderRadius: 12,
//     paddingVertical: 12,
//     paddingHorizontal: 32,
//     marginTop: 10,
//     marginBottom: 10,
//     alignItems: 'center',
//     width: '100%',
//     maxWidth: 350,
//     alignSelf: 'center',
//     shadowColor: '#4f8cff',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 4,
//     elevation: 2,
//   },
//   buttonText: {
//     color: '#fff',
//     fontWeight: '600',
//     fontSize: 18,
//     letterSpacing: 0.5,
//   },
//   text: {
//     fontSize: 18,
//     color: '#22223b',
//     marginVertical: 4,
//     textAlign: 'center',
//   },
//   error: {
//     color: '#e63946',
//     marginTop: 10,
//     fontSize: 16,
//     textAlign: 'center',
//   },
//   modalTitle: {
//     fontSize: 18,
//     color: '#fff',
//     fontWeight: '600',
//     marginBottom: 4,
//     textAlign: 'center',
//   },
//   time: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 10,
//   },
//   weatherHeader: {
//     flexDirection: 'row',
//     alignItems: 'center',
//     justifyContent: 'space-between',
//     marginBottom: 10,
//   },
//   temp: {
//     fontSize: 48,
//     color: '#fff',
//     fontWeight: '700',
//   },
//   conditionContainer: {
//     alignItems: 'flex-end',
//   },
//   condition: {
//     fontSize: 20,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   feelsLike: {
//     fontSize: 14,
//     color: '#fff',
//     opacity: 0.8,
//   },
//   forecast: {
//     fontSize: 14,
//     color: '#fff',
//     textAlign: 'center',
//     marginBottom: 20,
//   },
//   detailsContainer: {
//     flexDirection: 'row',
//     flexWrap: 'wrap',
//     justifyContent: 'space-between',
//   },
//   detailItem: {
//     width: '48%',
//     marginBottom: 10,
//   },
//   detailLabel: {
//     fontSize: 12,
//     color: '#fff',
//     opacity: 0.7,
//   },
//   detailValue: {
//     fontSize: 16,
//     color: '#fff',
//     fontWeight: '500',
//   },
//   modalBackground: {
//     flex: 1,
//     backgroundColor: 'rgba(0,0,0,0.5)',
//     alignItems: 'center',
//     justifyContent: 'center',
//   },
//   modalContainer: {
//     backgroundColor: '#1e2a44',
//     padding: 20,
//     borderRadius: 12,
//     alignItems: 'center',
//     width: '90%',
//     maxWidth: 350,
//     shadowColor: '#000',
//     shadowOffset: { width: 0, height: 2 },
//     shadowOpacity: 0.15,
//     shadowRadius: 8,
//     elevation: 6,
//   },
// });

import React, { useState } from 'react';
import { StyleSheet, Text, View, ActivityIndicator, Pressable, Platform, Modal, ImageBackground, Image } from 'react-native';
import { Picker } from '@react-native-picker/picker';

// Assuming the image is saved as 'sky_background.jpg' in the 'assets' folder
const backgroundImage = require('./assets/sky_background.jpg');
// Assuming the logo is saved as 'weather_app_logo.jpeg' in the 'assets' folder
const logoImage = require('./assets/weather_app_logo.jpeg');

export default function App() {
  const [country, setCountry] = useState('IN');
  const [city, setCity] = useState('Delhi');
  const [weather, setWeather] = useState(null);
  const [loading, setLoading] = useState(false);
  const [errorMsg, setErrorMsg] = useState(null);
  const [modalVisible, setModalVisible] = useState(false);

  // Example country-city data
  const countryCityData = {
    IN: ['Delhi', 'Mumbai', 'Bangalore'],
    US: ['New York', 'Los Angeles', 'Chicago'],
    GB: ['London', 'Manchester', 'Birmingham'],
  };

  // Replace with your OpenWeatherMap API key
  const API_KEY = '341c94518eb682ca2e66c329ce33ffa1';

  const fetchWeather = async () => {
    setLoading(true);
    setErrorMsg(null);
    setWeather(null);
    setModalVisible(true);
    try {
      const url = `https://api.openweathermap.org/data/2.5/weather?q=${city},${country}&appid=${API_KEY}&units=metric`;
      const response = await fetch(url);
      const data = await response.json();
      if (response.ok) {
        setWeather(data);
      } else {
        setErrorMsg('Failed to fetch weather data');
      }
    } catch (error) {
      setErrorMsg('Error fetching weather data');
    }
    setLoading(false);
  };

  return (
    <ImageBackground source={backgroundImage} style={styles.background}>
      <View style={styles.container}>
        <Image source={logoImage} style={styles.logo} />
        <Text style={styles.title}>Weather App</Text>
        <View style={styles.card}>
          <Text style={styles.label}>Select Country</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={country}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue) => {
                setCountry(itemValue);
                setCity(countryCityData[itemValue][0]);
              }}
              mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
            >
              <Picker.Item label="India" value="IN" />
              <Picker.Item label="United States" value="US" />
              <Picker.Item label="United Kingdom" value="GB" />
            </Picker>
          </View>
          <Text style={styles.label}>Select City</Text>
          <View style={styles.pickerWrapper}>
            <Picker
              selectedValue={city}
              style={styles.picker}
              itemStyle={styles.pickerItem}
              onValueChange={(itemValue) => setCity(itemValue)}
              mode={Platform.OS === 'ios' ? 'dialog' : 'dropdown'}
            >
              {countryCityData[country].map((cityName) => (
                <Picker.Item key={cityName} label={cityName} value={cityName} />
              ))}
            </Picker>
          </View>
          <Pressable style={styles.button} onPress={fetchWeather}>
            <Text style={styles.buttonText}>Get Weather</Text>
          </Pressable>
        </View>
      </View>
      <Modal
        visible={modalVisible}
        transparent={true}
        animationType="slide"
        onRequestClose={() => setModalVisible(false)}
      >
        <View style={styles.modalBackground}>
          <View style={styles.modalContainer}>
            {loading ? (
              <>
                <ActivityIndicator size="large" color="#4f8cff" />
                <Text style={styles.text}>Loading...</Text>
              </>

            ) : errorMsg ? (
              <Text style={styles.error}>{errorMsg}</Text>
            ) : weather ? (
              <>
                <Text style={styles.modalTitle}>Current weather</Text>
                <Text style={styles.time}>
                  {weather.dt
                    ? new Date(weather.dt * 1000).toLocaleTimeString('en-IN', { hour: '2-digit', minute: '2-digit', hour12: true })
                    : '12:25 AM'}
                </Text>
                <View style={styles.weatherHeader}>
                  <Text style={styles.temp}>{Math.round(weather.main.temp)}°C</Text>
                  <View style={styles.conditionContainer}>
                    <Text style={styles.condition}>{weather.weather[0].description || 'Partly cloudy'}</Text>
                    <Text style={styles.feelsLike}>Feels like {Math.round(weather.main.feels_like)}°C</Text>
                  </View>
                </View>
                <Text style={styles.forecast}>
                  {`The skies will be ${weather.weather[0]?.description || 'partly cloudy'}. The low will be ${Math.round(weather.main?.temp_min)}°C.`}
                </Text>
                <View style={styles.detailsContainer}>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Air quality</Text>
                    <Text style={styles.detailValue}>{97}</Text> {/* Placeholder */}
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Wind</Text>
                    <Text style={styles.detailValue}>
                    {weather.wind?.speed ? `${weather.wind.speed} km/h ${weather.wind.deg ? '↘' : '↓'}` : 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Humidity</Text>
                    <Text style={styles.detailValue}>{weather.main.humidity}%</Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Visibility</Text>
                    <Text style={styles.detailValue}>
                      {weather.visibility ? `${(weather.visibility / 1000).toFixed(1)} km` : 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Pressure</Text>
                    <Text style={styles.detailValue}>
                      {weather.main?.pressure ? `${weather.main.pressure} mb` : 'N/A'}
                    </Text>
                  </View>
                  <View style={styles.detailItem}>
                    <Text style={styles.detailLabel}>Dew point</Text>
                    <Text style={styles.detailValue}>
                      {weather.main?.temp && weather.main?.humidity
                        ? `${Math.round(weather.main.temp - ((100 - weather.main.humidity) / 5))}°C`
                        : 'N/A'}
                    </Text>
                  </View>
                </View>
                <Pressable style={[styles.button, { marginTop: 20 }]} onPress={() => setModalVisible(false)}>
                  <Text style={styles.buttonText}>Close</Text>
                </Pressable>
              </>
            ) : (
              <Text style={styles.text}>No data.</Text>
            )}
          </View>
        </View>
      </Modal>
    </ImageBackground>
  );
}

const styles = StyleSheet.create({
  background: {
    flex: 1,
    width: '100%',
    height: '100%',
  },
  container: {
    flex: 1,
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingHorizontal: 16,
    paddingTop: 60,
    paddingBottom: 30,
  },
  logo: {
    width: 100, // Adjust size as needed
    height: 100, // Adjust size as needed
    marginBottom: 10, // Space between logo and title
    resizeMode: 'contain', // Ensures the logo scales properly
    borderRadius: 50, // Makes the image fully rounded
    overflow: 'hidden',
  },
  title: {
    fontSize: 40,
    fontWeight: '700',
    color: '#fafafaff',
    marginBottom: 24,
    letterSpacing: 0.5,
    textAlign: 'center',
    textShadowColor: '#000',
    textShadowOffset: { width: 1, height: 1 },
    textShadowRadius: 2,
  },
  card: {
    backgroundColor: 'rgba(255, 255, 255, 0.9)', // Slightly transparent white for readability
    borderRadius: 18,
    padding: 24,
    width: '100%',
    maxWidth: 370,
    alignItems: 'center',
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.10,
    shadowRadius: 8,
    elevation: 4,
    marginBottom: 24,
  },
  label: {
    fontSize: 16,
    color: '#4f8cff',
    fontWeight: '600',
    marginBottom: 6,
    alignSelf: 'flex-start',
    marginLeft: 4,
  },
  pickerWrapper: {
    width: '100%',
    borderRadius: 12,
    borderWidth: 1,
    borderColor: '#e0e0e0',
    overflow: 'hidden',
    marginBottom: 16,
    backgroundColor: '#f4f4f4',
  },
  picker: {
    width: '100%',
    height: 48,
    backgroundColor: 'transparent',
  },
  pickerItem: {
    fontSize: 18,
    color: '#22223b',
    height: 48,
  },
  button: {
    backgroundColor: '#4f8cff',
    borderRadius: 12,
    paddingVertical: 12,
    paddingHorizontal: 32,
    marginTop: 10,
    marginBottom: 10,
    alignItems: 'center',
    width: '100%',
    maxWidth: 350,
    alignSelf: 'center',
    shadowColor: '#4f8cff',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 4,
    elevation: 2,
  },
  buttonText: {
    color: '#fff',
    fontWeight: '600',
    fontSize: 18,
    letterSpacing: 0.5,
  },
  text: {
    fontSize: 18,
    color: '#22223b',
    marginVertical: 4,
    textAlign: 'center',
  },
  error: {
    color: '#e63946',
    marginTop: 10,
    fontSize: 16,
    textAlign: 'center',
  },
  modalTitle: {
    fontSize: 18,
    color: '#fff',
    fontWeight: '600',
    marginBottom: 4,
    textAlign: 'center',
  },
  time: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 10,
  },
  weatherHeader: {
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    marginBottom: 10,
  },
  temp: {
    fontSize: 48,
    color: '#fff',
    fontWeight: '700',
  },
  conditionContainer: {
    alignItems: 'flex-end',
  },
  condition: {
    fontSize: 20,
    color: '#fff',
    fontWeight: '500',
  },
  feelsLike: {
    fontSize: 14,
    color: '#fff',
    opacity: 0.8,
  },
  forecast: {
    fontSize: 14,
    color: '#fff',
    textAlign: 'center',
    marginBottom: 20,
  },
  detailsContainer: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
  },
  detailItem: {
    width: '48%',
    marginBottom: 10,
  },
  detailLabel: {
    fontSize: 12,
    color: '#fff',
    opacity: 0.7,
  },
  detailValue: {
    fontSize: 16,
    color: '#fff',
    fontWeight: '500',
  },
  modalBackground: {
    flex: 1,
    backgroundColor: 'rgba(0,0,0,0.5)',
    alignItems: 'center',
    justifyContent: 'center',
  },
  modalContainer: {
    backgroundColor: '#1e2a44',
    padding: 20,
    borderRadius: 12,
    alignItems: 'center',
    width: '90%',
    maxWidth: 350,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.15,
    shadowRadius: 8,
    elevation: 6,
  },
});
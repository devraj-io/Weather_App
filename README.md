# Weather App

A beautiful React Native weather app that allows users to select a country and city, fetches real-time weather data from OpenWeatherMap, and displays it in a stylish modal with a custom background and logo.

## Features

- Select country and city from dropdowns
- Fetches current weather data (temperature, humidity, wind, etc.)
- Displays weather details in a modal popup
- Attractive background image and app logo
- Responsive and modern UI
- Error handling and loading indicators

## Getting Started

### Prerequisites

- Node.js & npm
- Expo CLI (`npm install -g expo-cli`)
- OpenWeatherMap API key (get one for free at [openweathermap.org](https://openweathermap.org/api))

### Installation

1. Clone the repository or copy the project files.
2. Install dependencies:

   ```powershell
   npm install
   ```

3. Place your OpenWeatherMap API key in `App.js` (replace the value of `API_KEY`).

### Running the App

Start the development server:

```powershell
npx expo start
```

Scan the QR code with the Expo Go app on your phone, or run on an emulator.

## Project Structure

```
day5_project/
  App.js
  app.json
  index.js
  package.json
  assets/
    adaptive-icon.png
    favicon.png
    icon.png
    sky_background.jpg
    splash-icon.png
    weather_app_logo.jpeg
  Components/
    GlobalInputContext.js
```

## Customization

- **Background Image:** Replace `assets/sky_background.jpg` with your preferred image.
- **Logo:** Replace `assets/weather_app_logo.jpeg` with your own logo.
- **Cities/Countries:** Edit the `countryCityData` object in `App.js` to add more options.

## Dependencies

- [React Native](https://reactnative.dev/)
- [Expo](https://expo.dev/)
- [@react-native-picker/picker](https://github.com/react-native-picker/picker)

## License

This project is for educational purposes.

---

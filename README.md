# Module5-CapstoneProject

This project consists of an Express server for fetching Open Graph data and a React Native app for displaying the data.

## Prerequisites

- **Node.js**: Make sure you have Node.js installed (version 18 recommended).
- **npm**: Ensure you have npm (Node Package Manager) installed.

## Setup

### 1. Setting Up the Express Server

1. **Navigate to the Project Directory:**

   ```sh
   cd Module5-CapstoneProject
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Run the Express Server:**

   ```sh
   npm run start
   ```

   The Express server should now be running at http://localhost:3000.

### 2. Setting Up the React Native App

1. **Navigate to the React Native App Directory:**

   ```sh
   cd CapstoneProjApp
   ```

2. **Install Dependencies:**

   ```sh
   npm install
   ```

3. **Start Expo:**

   ```sh
    npx expo start
   ```

   Expo will start and provide you with a QR code. You can scan this QR code using the Expo Go app on your mobile device to view the React Native app.

## Project Structure

- Module5-CapstoneProject/
  - server.js: Contains the Express server setup.
  - CapstoneProjApp/: Contains the React Native app.

## Endpoint

- Open Graph Data Endpoint:
- URL: http://localhost:3000/url
- Query Parameter: ogUrl
- Example: http://localhost:3000/url?ogUrl=https://github.com/

## Example API Call

In the React Native app, the API call is made to the Express server to fetch Open Graph data. Here's a sample function:

```javascript
const callApi = async () => {
  try {
    const response = await axios.get(
      "http://YOUR_IP_ADDRESS:3000/url?ogUrl=https://github.com/"
    );
    setResult(response.data);
    console.log("Data fetched: ", response.data);
  } catch (error) {
    console.error("Error fetching data:", error);
  }
};
```

- Replace YOUR_IP_ADDRESS with the IP address of your machine when running the React Native app on a physical device or emulator.
- To check the IP address of your Mac:
  ```
  ipconfig getifaddr en0
  ```
- Ensure that the Express server is running before making API calls from the React Native app.

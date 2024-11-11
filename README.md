# React Native Project Setup and API Integration Guide

## Prerequisites

[Node.js](https://nodejs.org/en) installed
[Expo CLI](https://expo.dev) (installed via npx)

## Installation

1. Install Node.js
   Download and install Node.js from Node.js Downloads.

2. Set Up React Native Project with Expo
   Run the following command to create your React Native project using Expo:

```bash
npx create-expo-app@latest
```

For additional setup information, visit the [React Native Environment Setup](https://reactnative.dev/docs/environment-setup)

3. Run the Project
   To run the project in your browser:

```bash
npm run web
```

Alternatively, you can run it on an Android device:

1.  Install the Expo Go app on your Android device.
2.  Link it manually or scan the QR code displayed in your terminal.

## Project Structure

This project uses file-based routing, with two main folders:

- `auth/` for authentication-related screens
- `admin/` for admin screens, protected by an access token wrapper in `helper/protectAdmin.tsx`.

### Dynamic Routing

Example: `app/auth/forgotPassword/[token].tsx` for password reset routes.

## Internal Page Navigation

React Navigation is used for internal linking between screens.

```bash
import { Link, useNavigation } from "@react-navigation/native";
```

- Tabs are located in `app(tabs)/_layout.tsx`.
- Update or switch tabs from this file as needed.

## Styling with Tailwind CSS

For styling, this project uses `twrnc` for Tailwind CSS utilities in JavaScript.

```bash
npm i twrnc
```

To use Tailwind styles:

```javaScript
import tw from 'twrnc';

style={tw`w-full h-full`}
```

## Protecting Admin Routes

### 1\. Set Up Axios for API Calls

- Use `helper/protectAdmin.tsx` to guard admin routes based on `accessToken`.
# react-native-project

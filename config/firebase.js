import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database"; // Importa o módulo do Realtime Database

const firebaseConfig = {
  apiKey: "AIzaSyDo13NNqFbRPsNAXTxqBKOVTZP9edlG6vk",
  authDomain: "library-fox.firebaseapp.com",
  databaseURL: "https://library-fox-default-rtdb.firebaseio.com",
  projectId: "library-fox",
  storageBucket: "library-fox.firebasestorage.app",
  messagingSenderId: "208336099953",
  appId: "1:208336099953:web:f08d5767aba1241a1359d0",
  measurementId: "G-RGPF1QH5SG"
};

// Inicializa o Firebase
const app = initializeApp(firebaseConfig);

// Inicializa o Realtime Database
const database = getDatabase(app);

export { app, database };

// Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyCVP8zaUj2iDrooLbRQNypHqB8QNTLhGDE",
    authDomain: "attendance-fe1c8.firebaseapp.com",
    projectId: "attendance-fe1c8",
    storageBucket: "attendance-fe1c8.appspot.com",
    messagingSenderId: "903463376704",
    appId: "1:903463376704:web:d004c563d56aa286df8ca5",
    measurementId: "G-YY5GQZPSRK"
};

// DeepSeek API configuration
const deepSeekConfig = {
    apiKey: "sk-1e875b67c74948a193c3e84cd65d1b92",
    endpoint: "https://api.deepseek.com/v1",
    models: {
        plusPoints: "points-calculator-v1",
        anomalyDetection: "anomaly-detector-v1",
        privacyCheck: "privacy-validator-v1"
    }
};

// Other third-party API configurations
const thirdPartyConfig = {
    qrCode: {
        library: "https://cdn.jsdelivr.net/npm/qrcode@1.5.1/build/qrcode.min.js"
    },
    location: {
        mozillaLocationService: {
            endpoint: "https://location.services.mozilla.com/v1/geolocate",
            apiKey: ""
        }
    }
};

// App configuration
const appConfig = {
    version: "1.0.0",
    maxSections: {
        teacher: 9,
        student: 9
    },
    maxStudentsPerSection: 50,
    maxPlusPoints: 60,
    avatarChangeCooldown: 24 * 60 * 60 * 1000, // 24 hours in milliseconds
    displayNameChangeCooldown: 30 * 24 * 60 * 60 * 1000, // 30 days in milliseconds
    defaultCheckInRadius: 10, // meters
    sessionDurations: [15, 30, 45, 60, 90, 120], // minutes
    radiusOptions: {
        "NearSnap": 5,
        "NearStandard": 10,
        "NearFlex": 20,
        "NearMax": 50
    }
};
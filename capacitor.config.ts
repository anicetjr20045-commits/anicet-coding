import { CapacitorConfig } from "@capacitor/cli";

const config: CapacitorConfig = {
  appId: "com.atelier.anicetcoding",
  appName: "Anicet Coding",
  webDir: "out",
  server: {
    androidScheme: "https",
  },
  plugins: {
    SplashScreen: {
      launchShowDuration: 1500,
      backgroundColor: "#050608",
      showSpinner: false,
    },
  },
};

export default config;

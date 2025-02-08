import { StyleSheet, View } from "react-native";

// This is a shim for web and Android where the tab bar is generally opaque.
export default function TabBarBackground() {
  return <View style={styles.TabBarBackground}></View>;
}

export function useBottomTabOverflow() {
  return 0;
}

const styles = StyleSheet.create({
  TabBarBackground: {
    backgroundColor: "black",
  },
});

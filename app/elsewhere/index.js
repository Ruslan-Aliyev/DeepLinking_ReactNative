import { StyleSheet, Text, View } from "react-native";
import {useLocalSearchParams} from 'expo-router';
import * as Linking from 'expo-linking';

export default function Page() {
  const url = Linking.useURL();  
  const params = useLocalSearchParams();  
  console.log({url});
  console.log({params});

  return (
    <View style={styles.container}>
      <View style={styles.main}>
        <Text>Elsewhere</Text>
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: "center",
    padding: 24,
  },
  main: {
    flex: 1,
    justifyContent: "center",
    maxWidth: 960,
    marginHorizontal: "auto",
  },
  title: {
    fontSize: 64,
    fontWeight: "bold",
  },
  subtitle: {
    fontSize: 36,
    color: "#38434D",
  },
});

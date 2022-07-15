import * as WebBrowser from 'expo-web-browser';
import { StyleSheet } from 'react-native';

import { LinkText } from './StyledText';
import { Text, View } from './Themed';

export default function AboutUsInfo({ path }: { path: string }) {
  return (
    <View>
      <View style={styles.container}>
        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          We love Facebook's ReactJS, open-source projects, and developing apps for the web. Whether you are a seasoned veteran or a newcomer to React, join us to learn more about why React is gaining traction among developers around the world.
        </Text>

        <Text
          style={styles.text}
          lightColor="rgba(0,0,0,0.8)"
          darkColor="rgba(255,255,255,0.8)"
        >
          Come for the free food and drink, stay for the great conversation and learning! Hosted by{' '}
          <LinkText onPress={handlePressTEALink}>Text-Em-All</LinkText> who created the popular open-source project <LinkText onPress={handlePressMUILink}>Material-UI</LinkText> and who use ReactJS every day.
        </Text>
      </View>
    </View>
  );
}

function handlePressTEALink() {
  WebBrowser.openBrowserAsync(
    'https://www.text-em-all.com/'
  );
}

function handlePressMUILink() {
  WebBrowser.openBrowserAsync(
    'https://www.mui.com/'
  );
}

const styles = StyleSheet.create({
  container: {
    alignItems: 'center',
    marginHorizontal: 48,
  },
  text: {
    fontSize: 17,
    lineHeight: 24,
    marginBottom: 16,
    textAlign: 'center',
  },
});

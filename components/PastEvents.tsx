import { ScrollView, StyleSheet } from 'react-native';

import { eventList } from '../constants/events';
import { Text, View } from './Themed';

export default function PastEvents({ path }: { path: string }) {
  return (
    <ScrollView style={styles.root}>
      {eventList.map((event) => {
        const {
          date,
          speaker1,
          speaker2,
          topic1,
          topic2,
          venue,
        } = event;

        return (
          <View key={date} style={styles.listItem}>
            <Text
              darkColor="rgba(255,255,255,0.8)"
              style={styles.dateText}
            >
              {date}
            </Text>

            <View>
              <View>
                <Text darkColor="rgba(255,255,255,0.8)">{venue}</Text>
              </View>
              <View style={styles.speakerContainer}>
                {speaker1 ? <Text darkColor="rgba(255,255,255,0.8)">{speaker1}</Text> : null}
                <Text darkColor="rgba(255,255,255,0.8)">"{topic1}"</Text>
              </View>
              {speaker2 && topic2 ? (
                <View style={styles.speakerContainer}>
                  {speaker1 ? <Text darkColor="rgba(255,255,255,0.8)">{speaker2}</Text> : null}
                  <Text darkColor="rgba(255,255,255,0.8)">"{topic2}"</Text>
                </View>
                ) : null}
            </View>
          </View>
        );
      })}
    </ScrollView>
  );
}

const styles = StyleSheet.create({
  dateText: {
    fontWeight: 'bold',
  },
  listItem: {
    borderBottomColor: 'hotpink',
    borderBottomWidth: 1,
    marginVertical: 8,
    paddingHorizontal: 8,
    paddingVertical: 12,
    width: '100%',
  },
  root: {
    backgroundColor: 'rgba(1,0,1,0.8)',
    flex: 1,
    width: '100%',
  },
  speakerContainer: {
    marginLeft: 16,
    marginTop: 8,
  },
});

import { Text, View, FlatList, StyleSheet } from 'react-native';

import { colors } from '../utils/colors';
import { fontSizes, spacing } from '../utils/sizes';

export const FocusHistory = ({ history }) => {
  if (!history || !history.length)
    return (
      <Text style={styles.title}>We haven't focused on anything yet!</Text>
    );

  const renderItem = ({ item }) => <Text style={styles.item}>- {item}</Text>;

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Things we've focused on:</Text>
      <FlatList
        data={history}
        renderItem={renderItem}
        // keyExtractor={}
      />
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: spacing.md,
  },
  item: {
    fontSize: spacing.md,
    color: colors.white,
    paddingTop: spacing.sm,
  },
  title: {
    color: colors.white,
    fontSize: fontSizes.md,
    padding: spacing.md,
    fontWeight: 'bold',
  },
});

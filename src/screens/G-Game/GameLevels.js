import {useRoute} from '@react-navigation/native';
import React from 'react';
import {ActivityIndicator, StyleSheet, View, Dimensions} from 'react-native';
import EasyLevel from '../../components/G-Game/easyLevel';
import HardLevel from '../../components/G-Game/hardLevel';
import NomarlLevel from '../../components/G-Game/nomarlLevel';
import UseGetdata from '../../hooks/UseContinents';
const height = Dimensions.get('window').height;
const width = Dimensions.get('window').width;
const GameLevels = () => {
  const route = useRoute();
  const {item} = route.params;
  const API = 'levels';
  const {data, isLoading, isSuccess} = UseGetdata(API);
  return (
    <View style={styles.con}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess && (
        <View style={styles.level}>
          <View>
            {data.data
              .filter(level => level.id === 1)
              .map(level => (
                <EasyLevel level={level} key={item.id} item={item} />
              ))}
          </View>
          <View>
            {data.data
              .filter(level => level.id === 2)
              .map(level => (
                <NomarlLevel level={level} key={item.id} />
              ))}
          </View>
          <View>
            {data.data
              .filter(level => level.id === 3)
              .map(level => (
                <HardLevel level={level} key={item.id} />
              ))}
          </View>
        </View>
      )}
    </View>
  );
};

export default GameLevels;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#FFFFFF',
  },
  level: {
    width: width,
    height: (height * 2.6) / 3,
    display: 'flex',
    flexDirection: 'column',
    justifyContent: 'space-between',
    paddingTop: '3%',
  },
});

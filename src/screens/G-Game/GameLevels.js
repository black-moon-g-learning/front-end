import React from 'react';
import {ActivityIndicator, StyleSheet, View} from 'react-native';
import UseGameLevels from '../../hooks/UseGameLevel';
import EasyLevel from './easyLevel';
import NomarlLevel from './nomarlLevel';
import HardLevel from './hardLevel';
const GameLevels = () => {
  const {data, isLoading, isSuccess} = UseGameLevels([]);
  return (
    <View style={styles.con}>
      {isLoading && <ActivityIndicator color="#00ff00" size="large" />}
      {isSuccess && (
        <>
          {data.data
            .filter(item => item.id === 1)
            .map(item => (
              <EasyLevel item={item} key={item.id} />
            ))}
          {data.data
            .filter(item => item.id === 2)
            .map(item => (
              <NomarlLevel item={item} key={item.id} />
            ))}
          {data.data
            .filter(item => item.id === 3)
            .map(item => (
              <HardLevel item={item} key={item.id} />
            ))}
        </>
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
});

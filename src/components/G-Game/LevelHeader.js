import React from 'react';
import {StyleSheet, Text, View, Image} from 'react-native';

const LevelHeader = () => {
  // React.useEffect(() => {
  //   // Lấy giá trị điểm từ Async Storage khi màn hình được hiển thị
  //   async function myScore() {
  //     try {
  //       const value = await AsyncStorage.getItem('score');
  //       if (value !== null) {
  //         setScore(value);
  //       }
  //     } catch (e) {
  //       // xử lý lỗi nếu có
  //     }
  //   }

  //   myScore();
  // }, []);
  return (
    <View style={styles.container}>
      <Text style={styles.title}>G-GAME</Text>
      <View>
        <Image source={require('../../assets/images/reward.png')} />
      </View>
    </View>
  );
};

export default LevelHeader;

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignItems: 'center',
    width: '90%',
  },
  title: {
    marginLeft: '20%',
    color: '#000000',
    fontWeight: '700',
    lineHeight: 20,
    fontSize: 28,
    fontFamily: 'Poppins-Bold',
    textAlign: 'center',
    paddingTop: 20,
  },
  scorebgd: {
    backgroundColor: '#FFD500',
    borderRadius: 100,
    width: 60,
    height: 60,
    marginTop: 3,
  },
  score: {
    textAlign: 'center',
    fontSize: 20,
    fontWeight: '700',
    lineHeight: 20,
    fontFamily: 'Poppins-Bold',
    color: '#000000',
    paddingTop: 20,
  },
});

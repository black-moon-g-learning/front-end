import {useState} from 'react';
import CircularPicker from 'react-native-circular-picker';
import {StyleSheet, Text, TouchableOpacity, View, Image} from 'react-native';

const Learnpercent = () => {
  const [price, setPrice] = useState(0);
  const handleChange = v => setPrice((v * 1).toFixed(0));

  return (
    <View>
      <CircularPicker
        backgroundColor={'#BCCCBF'}
        strokeWidth={7}
        size={70}
        steps={[0, 25, 50, 75, 100]}
        gradients={{
          0: ['rgb(255, 97, 99)', 'rgb(247, 129, 119)'],
          25: ['rgb(255, 204, 0)', 'rgb(255, 214, 10)'],
          50: ['rgb(52, 199, 89)', 'rgb(48, 209, 88)'],
          75: ['rgb(0, 122, 255)', 'rgb(10, 132, 255)'],
          100: ['rgb(255, 97, 99)', 'rgb(247, 129, 119)'],
        }}
        onChange={handleChange}>
        <>
          <Text
            style={{
              textAlign: 'center',
              fontSize: 12,
              marginBottom: 0,
              fontWeight: 'bold',
            }}>
            {price} %
          </Text>
        </>
      </CircularPicker>
    </View>
  );
};
export default Learnpercent;

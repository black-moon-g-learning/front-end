import {useState} from 'react';
import {Keyboard, StyleSheet} from 'react-native';
import {
  SuccessMessage,
  ValidatetionMessage,
} from '../components/Contribution/ValidatetionMess';
import axios from 'axios';
import {useMutation} from 'react-query';
import {Continents_URL} from '@env';
import ImagePicker from 'react-native-image-crop-picker';

const useCreateContribution = () => {
  const [contribution, onChangeContribution] = useState({
    title: '',
    country: '',
    desc: '',
    img: {
      uri: '',
      name: '',
      type: '',
    },
    owner_id: '',
  });
  const ValidateContribution = () => {
    Keyboard.dismiss();
    let isValid = true;
    if (
      !contribution.img.uri ||
      !contribution.desc ||
      !contribution.country ||
      !contribution.title
    ) {
      ValidatetionMessage();
      isValid = false;
    }
    if (isValid) {
      handleCreateContribution(contribution);
      SuccessMessage();
      onChangeContribution({
        title: '',
        country: '',
        desc: '',
        img: {
          uri: '',
          name: '',
          type: '',
        },
        owner_id: '',
      });
    }
  };
  const handleImage = async () => {
    try {
      const imageResult = await ImagePicker.openPicker({
        width: 300,
        height: 400,
        cropping: true,
      });

      if (imageResult) {
        let localUri = imageResult.path;
        let filename = localUri.split('/').pop();
        let match = /\.(\w+)$/.exec(filename);
        let type = match ? `image/${match[1]}` : 'image';
        onChangeContribution({
          ...contribution,
          img: {uri: localUri, name: filename, type},
        });
      }
    } catch (error) {}
  };
  const handleCreateContribution = Contribution => {
    var data = new FormData();
    data.append('title', Contribution.title);
    data.append('country', Contribution.country);
    data.append('description', Contribution.desc);
    data.append('owner_id', 1);
    data.append('image', Contribution.img);
    mutationContribution.mutate(data);
  };
  const mutationContribution = useMutation(
    ['mutation-post'],
    newContribution => {
      return axios.post(`${Continents_URL}/information`, newContribution, {
        headers: {'Content-Type': 'multipart/form-data'},
      });
    },
    {
      onSuccess: () => {
        console.log('Success');
      },
    },
  );
  return {
    contribution,
    onChangeContribution,
    ValidateContribution,
    handleImage,
  };
};
export default useCreateContribution;

const styles = StyleSheet.create({});

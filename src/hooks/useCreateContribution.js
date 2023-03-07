import {Continents_URL} from '@env';
import {useState} from 'react';
import {Keyboard} from 'react-native';
import ImagePicker from 'react-native-image-crop-picker';
import {useMutation} from 'react-query';
import axiosRequest from '../axios';
import {
  SuccessMessage,
  ValidatetionMessage,
} from '../components/Contribution/ValidatetionMess';

const useCreateContribution = () => {
  const [contribution, onChangeContribution] = useState({
    title: '',
    country_id: null,
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
      !contribution.country_id ||
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
        country_id: '',
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
    data.append('country_id', Contribution.country_id);
    data.append('description', Contribution.desc);
    data.append('owner_id', 1);
    data.append('image', Contribution.img);
    mutationContribution.mutate(data);
  };
  const mutationContribution = useMutation(
    ['mutation-post'],
    newContribution => {
      return axiosRequest.post(
        `${Continents_URL}/information`,
        newContribution,
        {
          headers: {'Content-Type': 'multipart/form-data'},
        },
      );
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

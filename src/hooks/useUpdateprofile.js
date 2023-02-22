// import {Continents_URL} from '@env';
// import axios from 'axios';
// import {useState} from 'react';
// import {Keyboard} from 'react-native';
// import ImagePicker from 'react-native-image-crop-picker';
// import {useMutation, useQuery} from 'react-query';
// import axiosRequest from '../axios';
// import {
//   SuccessMessage,
//   ValidatetionMessage,
// } from '../components/Contribution/ValidatetionMess';

// const getProfile = async () => {
//   const {data} = await axiosRequest.get(`${Continents_URL}/profile`);
//   return data;
// };
// export const useProfile = () => useQuery('profile', getProfile);

// const useUpdateProfile = () => {
//   const data = useProfile();
//   console.log('dta=> ', data);

//   const [profile, onChangeProfile] = useState({
//     name: data.first_name,
//     age: data.age,
//     email: data.email,
//     img: {
//       uri: data.image,
//       name: '',
//       type: '',
//     },
//     phone: data.phone,
//     gender: data.gender,
//   });

//   const ValidateContribution = () => {
//     Keyboard.dismiss();
//     let isValid = true;
//     if (
//       !profile.img.uri ||
//       !profile.name ||
//       !profile.age ||
//       !profile.email ||
//       !profile.phone ||
//       !profile.gender
//     ) {
//       ValidatetionMessage();
//       isValid = false;
//     }
//     if (isValid) {
//       handleUpdateProfile(profile);
//       SuccessMessage();
//       onChangeProfile({
//         name: '',
//         age: '',
//         email: '',
//         img: {
//           uri: '',
//           name: '',
//           type: '',
//         },
//         phone: '',
//         gender: '',
//       });
//     }
//   };

//   const handleImage = async () => {
//     try {
//       const imageResult = await ImagePicker.openPicker({
//         width: 300,
//         height: 400,
//         cropping: true,
//       });

//       if (imageResult) {
//         let localUri = imageResult.path;
//         let filename = localUri.split('/').pop();
//         let match = /\.(\w+)$/.exec(filename);
//         let type = match ? `image/${match[1]}` : 'image';
//         onChangeProfile({
//           ...profile,
//           img: {uri: localUri, name: filename, type},
//         });
//       }
//     } catch (error) {}
//   };
//   const handleUpdateProfile = Profile => {
//     var data = new FormData();
//     data.append('title', Profile.name);
//     data.append('country', Profile.age);
//     data.append('description', Profile.email);
//     data.append('image', Profile.img);
//     data.append('image', Profile.phone);
//     data.append('image', Profile.gender);
//     mutationProfile.mutate(data);
//   };
//   const mutationProfile = useMutation(
//     ['mutation-post'],
//     newProfile => {
//       return axios.post(`${Continents_URL}/profile`, newProfile, {
//         headers: {'Content-Type': 'multipart/form-data'},
//       });
//     },
//     {
//       onSuccess: () => {
//         console.log('Success');
//       },
//     },
//   );

//   return {
//     profile,
//     onChangeProfile,
//     ValidateContribution,
//     handleImage,
//   };
// };
// export default useUpdateProfile;

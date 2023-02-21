import {useQueryClient} from 'react-query';
import {useState} from 'react';

export const UseItems = () => {
  const queryClient = useQueryClient();
  const [items, setItems] = useState([]);

  const addItem = newItem => {
    setItems(newItem);
    queryClient.setQueryData('items', items);
  };
  return {
    items,
    addItem,
  };
};

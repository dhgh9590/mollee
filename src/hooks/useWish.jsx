import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { addWish, getWish, removeWish } from '../constants/firebase';
import { addUser } from '../context/user';

export default function useCart() {
  const { user } = useContext(addUser);
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['wish', (user && user.uid) || ''], () => getWish(user && user.uid), {
    enabled: (user && !!user.uid) || false,
  });

  const addWishs = useMutation(product => addWish(user.uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['wish', user.uid]);
    },
  });

  const removeItem = useMutation(id => removeWish(user.uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['wish', user.uid]);
    },
  });

  return { cartQuery, addWishs, removeItem };
}

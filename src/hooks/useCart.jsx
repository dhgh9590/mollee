import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { useContext } from 'react';
import { addOrUpdateToCart, getCart, removeFromCart } from '../constants/firebase';
import { addUser } from '../context/user';

export default function useCart() {
  const { user } = useContext(addUser);
  const queryClient = useQueryClient();

  const cartQuery = useQuery(['carts', (user && user.uid) || ''], () => getCart(user && user.uid), {
    enabled: (user && !!user.uid) || false,
  });

  const addOrUpdateItem = useMutation(product => addOrUpdateToCart(user.uid, product), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', user.uid]);
    },
  });

  const removeItem = useMutation(id => removeFromCart(user.uid, id), {
    onSuccess: () => {
      queryClient.invalidateQueries(['carts', user.uid]);
    },
  });

  return { cartQuery, addOrUpdateItem, removeItem };
}

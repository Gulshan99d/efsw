import { createContext } from 'react';

export const DataContext = createContext({
  dbUser: null,
  products: [],
  categories: [],
  isLoading: true,
  reload: () => {},
});
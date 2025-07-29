
import { useContext } from 'react';
import { DataContext } from '../components/DataContext';

export const useData = () => useContext(DataContext);

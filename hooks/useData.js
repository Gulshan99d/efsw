
import { useContext } from 'react';
import { DataContext } from '../components/DataContext';

const useData = () => useContext(DataContext);

export default useData;

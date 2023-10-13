import { useContext } from 'react';
import { Authorize } from '../context/Authorize';

export function useAuth() {
    return useContext(Authorize);
}
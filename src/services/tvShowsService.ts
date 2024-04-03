import axiosClient from './axios';
import type { Show } from '../types/types';

export const fetchShowsByPage = async (page: number): Promise<Show[]> => {
  try {
    const response = await axiosClient.get(`/shows?page=${page}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching shows by page:', error);
    return [];
  }
};

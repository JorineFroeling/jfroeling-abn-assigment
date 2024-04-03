import axiosClient from './axios';
import type { Show } from '../types/types';

export const fetchShowDetailsById = async (showId: number): Promise<Show | null> => {
  try {
    const response = await axiosClient.get(`/shows/${showId}`);
    return response.data;
  } catch (error) {
    console.error('Error fetching show details:', error);
    return null;
  }
};

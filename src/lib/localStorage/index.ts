import { StoredData, defaultStoredData } from '../types/storedData';

const STORAGE_KEY = 'app';

export { defaultStoredData };

export const writeStoredData = (data: StoredData): void => {
  if (typeof window !== 'undefined') {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(data));
    } catch (error) {
      console.error('Failed to write to localStorage:', error);
    }
  }
};

export const getStoredData = (): StoredData => {
  if (typeof window === 'undefined') {
    return defaultStoredData;
  }
  
  try {
    const stored = localStorage.getItem(STORAGE_KEY);
    if (stored) {
      const parsed = JSON.parse(stored);
      // Merge with defaults to handle any missing fields
      return { ...defaultStoredData, ...parsed };
    }
  } catch (error) {
    console.error('Failed to read from localStorage:', error);
  }
  
  return defaultStoredData;
};

// lib/storage.ts

const STORAGE_KEY = 'videoHistory';

export const getVideoHistory = (): string[] => {
    const history = localStorage.getItem(STORAGE_KEY);
    return history ? JSON.parse(history) : [];
};

export const addToVideoHistory = (videoId: string): void => {
    const history = getVideoHistory();
    if (!history.includes(videoId)) {
        history.push(videoId);
        localStorage.setItem(STORAGE_KEY, JSON.stringify(history));
    }
};

export const clearVideoHistory = (): void => {
    localStorage.removeItem(STORAGE_KEY);
};
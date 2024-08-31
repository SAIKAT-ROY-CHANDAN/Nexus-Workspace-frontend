/* eslint-disable @typescript-eslint/no-explicit-any */
// Utility functions
export const timeMinutes = (time: any) => {
    const [hours, minutes] = time.split(':').map(Number);
    return hours * 60 + minutes;
};

export const minutesToTime = (minutes: any) => {
    const hours = Math.floor(minutes / 60).toString().padStart(2, '0');
    const mins = (minutes % 60).toString().padStart(2, '0');
    return `${hours}:${mins}`;
};


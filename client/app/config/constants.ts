
const useRemote = true;

export const BASE_LOCAL_URL  =  'http://localhost:3003';
export const BASE_LOCAL_API_URL =  'http://localhost:8080';
export const BASE_REMOTE_URL = 'https://szdev.cc';
export const BASE_REMIX_API_URL = useRemote ? BASE_REMOTE_URL : BASE_LOCAL_URL;

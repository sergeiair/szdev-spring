
const useRemote = true;
const remoteIP = '18.199.52.234';

export const BASE_LOCAL_URL  = useRemote ? `http://${remoteIP}:3003` : 'http://localhost:3003';
export const BASE_API_URL = useRemote ? `http://${remoteIP}:8080` : 'http://localhost:8080';


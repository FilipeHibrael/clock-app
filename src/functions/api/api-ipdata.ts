export const API_URL = 'https://api.ipdata.co?api-key=';

export function IPDATA_GET() {
  return { url: API_URL + process.env.IPDATA_APIKEY };
}

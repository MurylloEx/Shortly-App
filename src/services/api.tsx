import axios from 'axios';

export const ApiBaseUrl: string = 'https://cutt.ly/api';

export const Client = axios.create({
  baseURL: ApiBaseUrl,
  params: {
    key: '6791ff0789f5275cf2a54076c04f7b3cf6977'
  }
});

export async function shortUrl(url: string, alias: string){
  try{
    const data = (await Client.get<any>('/api.php', {
      params: { short: url, name: alias }
    })).data;
    if (data?.url?.status != 7)
      throw new Error();
    return data;
  } 
  catch(e){
    return false;
  }
}
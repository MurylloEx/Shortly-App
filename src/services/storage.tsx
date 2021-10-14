import AsyncStorage from "@react-native-async-storage/async-storage";

export async function getLinks(){
  return JSON.parse(await AsyncStorage.getItem('@shortly/links') || '[]');
}

export async function saveLink(title: string, originalUrl: string, shortenUrl: string){
  let links = await getLinks();
  links.push({ title, originalUrl, shortenUrl });
  await AsyncStorage.setItem('@shortly/links', JSON.stringify(links));
}

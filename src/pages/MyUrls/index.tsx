import Clipboard from 'expo-clipboard';
import { Alert, RefreshControl } from 'react-native';
import React, { Fragment, useEffect, useState } from 'react';
import { Feather } from '@expo/vector-icons'; 

import { Loading, Render, ShortenItem } from '../../components';
import { getLinks } from '../../services/storage';
import { Center, Links, Message } from './styles';

export default function MyUrls() {
  
  const [shortenLinks, setShortenLinks] = useState([]);
  const [isLoading, setIsLoading] = useState(true);
  const [isRefreshing, setIsRefreshing] = useState(false);
  const [renderTrigger, setRenderTrigger] = useState(0);

  function pageLoader(){
    let isActive = true;
  
    async function getShortenLinks(){
      let links = await getLinks();
      if (isActive){
        setIsRefreshing(false);
        setIsLoading(false);
        setShortenLinks(links);
      }
    }
  
    if (isActive){
      getShortenLinks();
    }
  
    return () => {
      isActive = false;
    }
  }

  useEffect(pageLoader, []);
  useEffect(pageLoader, [renderTrigger]);

  function refreshPage(){
    setIsRefreshing(true);
    setRenderTrigger(renderTrigger+1);
  }

  function onCopyShortenUrl(content: string){
    Clipboard.setString(content);
    Alert.alert("Link copiado!", "Seu link foi copiado para a área de transferência.");
  }

  return (
    <Fragment>
      <Render if={!isLoading}>
        <Render if={shortenLinks.length > 0}>
          <Links 
            refreshing={isRefreshing}
            refreshControl={<RefreshControl refreshing={isRefreshing} onRefresh={refreshPage} />}
            data={shortenLinks}
            renderItem={({item}) => (
              <ShortenItem
                title={Object(item).title}
                originalUrl={Object(item).originalUrl}
                shortenUrl={Object(item).shortenUrl}
                onCopyUrl={() => onCopyShortenUrl(Object(item).shortenUrl)}
              />
            )}
            keyExtractor={(item) => String(Object(item).shortenUrl)}
          />
        </Render>
        <Render if={shortenLinks.length == 0}>
          <Center>
            <Feather name="frown" size={48} color="black" />
            <Message>Você precisa encurtar algum link para que ele apareça aqui!</Message>
          </Center>
        </Render>
      </Render>
      <Render if={isLoading}>
        <Loading />
      </Render>
    </Fragment>
  );
}

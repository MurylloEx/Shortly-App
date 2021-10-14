import Clipboard from 'expo-clipboard';
import { Alert, Keyboard } from 'react-native';
import React, { Fragment, useState } from 'react';

import { shortUrl } from '../../services/api';
import { saveLink } from '../../services/storage';
import { randomAlias } from '../../services/random';
import { validateUrl } from '../../services/validation';
import { KeyboardViewBehavior } from '../../config/behaviors';
import { Input, Logo, Button, Render, Link, ShortenItem, Loading } from '../../components';
import { Container, Message, OverlayPanel, SafeKeyboardView, Scrollable } from './styles';

export default function Home() {

  const [url, setUrl] = useState('');
  const [alias, setAlias] = useState('');
  const [title, setTitle] = useState('');
  const [shortenUrl, setShortenUrl] = useState('');

  const [isLoading, setIsLoading] = useState(false);
  const [isCustomUrl, setIsCustomUrl] = useState(false);
  const [isShowingResult, setIsShowingResult] = useState(false);

  async function onShortUrl(){
    try{
      if (!validateUrl(url))
        throw new Error();

      setIsLoading(true);
      const data = await shortUrl(url, isCustomUrl ? alias : randomAlias());
      setIsLoading(false);

      if (!!data){
        await saveLink(
          data.url.title, 
          data.url.fullLink, 
          data.url.shortLink);

        setTitle(data.url.title);
        setShortenUrl(data.url.shortLink);
        setIsShowingResult(true);

        return;
      }

      throw new Error();
    } catch(e){

      setIsLoading(false);
      Alert.alert(
        "Erro ao encurtar seu link",
        "Pedimos desculpa mas não foi possível encurtar seu link pois ele não era válido. " +
        "Verifique e tente novamente.");
    }
  }

  function onClearFields(){
    setUrl('');
    setAlias('');
    setShortenUrl('');
    setIsLoading(false);
    setIsCustomUrl(false);
    setIsShowingResult(false);
  }

  function onCopyShortenUrl(){
    Clipboard.setString(shortenUrl);
    Alert.alert("Link copiado!", "Seu link foi copiado para a área de transferência.");
  }

  return (
    <Fragment>

      <Render if={!isLoading}>
        <Render if={!isShowingResult}>
          <SafeKeyboardView behavior={KeyboardViewBehavior}>

            <Scrollable>
              <OverlayPanel onPress={Keyboard.dismiss}>
                <Container>
                  <Logo />
                  <Input
                    placeholder="Sua URL"
                    onTextChange={setUrl}
                  />
                  <Render if={!isCustomUrl && !isLoading}>
                    <Link message="Personalizar meu link" onPress={ () => setIsCustomUrl(true) } />
                  </Render>
                  <Render if={isCustomUrl && !isLoading}>
                    <Input
                      placeholder="Nome personalizado"
                      onTextChange={setAlias}
                    />
                    <Link message="Gerar qualquer link aleatório" onPress={ () => setIsCustomUrl(false) } />
                  </Render>
                  <Button text="Encurtar" onPress={onShortUrl} />
                </Container>
              </OverlayPanel>
            </Scrollable>

          </SafeKeyboardView>
        </Render>

        <Render if={isShowingResult}>
          <Container>
            <Logo />
            <Message>Parabéns! Sua URL foi encurtada e já está disponível:</Message>
            <ShortenItem 
              title={title} 
              originalUrl={url} 
              shortenUrl={shortenUrl} 
              onCopyUrl={onCopyShortenUrl}
            />
            <Link message="Encurtar outro link" onPress={onClearFields} />
          </Container>
        </Render>
      </Render>

      <Render if={isLoading}>
        <Loading />
      </Render>

    </Fragment>
  );

}

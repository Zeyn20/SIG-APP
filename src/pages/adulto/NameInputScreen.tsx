import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton } from '@ionic/react';
import './css/NameInputScreen.css';
import NameInputCard from '../../components/NameInputCard'

const NameInputScreen: React.FC = () => {
  return (
    <IonPage>
      <IonHeader className="transparent-header">
      <IonToolbar className='transparent-toolbar'>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Regresar</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent className="name-input-screen">
        <div className="name-input-screen__card-container">
          <NameInputCard
          title='¿Cúal es tu nombre?'
          placeholder='Ingrese su nombre aquí'
          imageSrc='../public/img/osito1.png'
          color='light'
          >
          </NameInputCard>
          <IonButton 
          color='light'
          className="name-input-screen__button" 
          expand="block"
          routerLink='/home/password'
          >
            Continuar
            </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default NameInputScreen;

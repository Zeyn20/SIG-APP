import React from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonButtons, IonBackButton, IonButton } from '@ionic/react';
import './css/NameInputScreen2.css';
import NameInputCard from '../../components/NameInputCard'

const NameInputScreen2: React.FC = () => {
  return (
    <IonPage>
      <IonContent class='main-screen2'>
      <IonHeader className="transparent-header2">
      <IonToolbar className='transparent-toolbar2'>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/"></IonBackButton>
        </IonButtons>
        <IonTitle>Regresar</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent className="name-input-screen2">
        <div className="name-input-screen2__card-container">
          <NameInputCard
          title='¿Cúal es tu nombre?'
          placeholder='Ingrese su nombre aquí'
          imageSrc='../public/img/osito2.png'
          color='light'
          >
          </NameInputCard>
          <IonButton 
          color='light'
          className="name-input-screen2__button" 
          expand="block"
          routerLink='/home/password2'
          >
            Continuar
            </IonButton>
        </div>
      </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default NameInputScreen2;

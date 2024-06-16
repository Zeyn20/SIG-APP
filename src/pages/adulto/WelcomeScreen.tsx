import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './css/WelcomeScreen.css';
import WelcomeCard from '../../components/WelcomeCard';

const WelcomeScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="welcome-screen">
        <div className="welcome-screen__card-container">
          <WelcomeCard 
          title='Hola, soy Mr.Osito y te acompañaré a partir de ahora en tu aprendizaje' 
          imageSrc='../public/img/osito1.png'
          color='light'>
          </WelcomeCard>
          <IonButton 
          color='light' 
          className="welcome-screen__button" 
          expand="block"
          routerLink='/home/nameinput'
          >
            Continuar
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen;

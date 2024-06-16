import React from 'react';
import { IonPage, IonContent, IonButton } from '@ionic/react';
import './css/WelcomeScreen2.css';
import WelcomeCard from '../../components/WelcomeCard';

const WelcomeScreen2: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="welcome-screen2">
        <div className="welcome-screen2__card-container">
          <WelcomeCard 
          title='Hola, soy Osito jr. y te acompañaré a partir de ahora en tu aprendizaje' 
          imageSrc='../public/img/osito2.png'
          color='light'>
          </WelcomeCard>
          <IonButton 
          color='light' 
          className="welcome-screen2__button" 
          expand="block"
          routerLink='/home/nameinput2'
          >
            Continuar
          </IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default WelcomeScreen2;

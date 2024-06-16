import React from 'react';
import './css/CardHome.css'
import { IonButton } from '@ionic/react';

const CardHome: React.FC = () => {

  return (
    <div className="welcome-page">
      <h1 className="welcome-page__title">Hola, es tu primera vez?</h1>
      <div className="welcome-page__buttons">
        <IonButton 
        color="light" 
        className='button-container__button' 
        expand="block"
        routerLink="/home/selection"
        >Si</IonButton>
        <IonButton 
        color="light" 
        className='button-container__button' 
        expand="block"
        >No</IonButton>
      </div>
      <div className="welcome-page__images">
        <img src="../public/img/osito1.png" alt="Bear 1" className="welcome-page__image" />
        <img src="../public/img/osito2.png" alt="Bear 2" className="welcome-page__image" />
      </div>
    </div>
  );
};

export default CardHome;
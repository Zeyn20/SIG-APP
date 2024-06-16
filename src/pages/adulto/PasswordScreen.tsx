import React, { useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonButtons, IonBackButton, IonButton } from '@ionic/react';
import './css/PasswordScreen.css';
import PasswordCard from '../../components/PasswordCard';

const PasswordScreen: React.FC = () => {
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [errorMessage, setErrorMessage] = useState('');

  const handleContinue = () => {
    if (password.length < 8) {
      setErrorMessage('Tu contraseña es muy corta, deberías utilizar al menos 8 caracteres');
    } else if (password !== confirmPassword) {
      setErrorMessage('Las contraseñas no coinciden');
    } else {
      setErrorMessage('');
      // Lógica para continuar
    }
  };

  return (
    <IonPage>
      <IonHeader className="transparent-header">
        <IonToolbar className="transparent-toolbar">
          <IonButtons slot="start">
            <IonBackButton text="Regresar" defaultHref="/" />
          </IonButtons>
        </IonToolbar>
      </IonHeader>
      <IonContent className="password-screen">
      <div className="password-screen__card-container">
          <PasswordCard
          color='light'
          password={password}
          confirmPassword={confirmPassword}
          setPassword={setPassword}
          setConfirmPassword={setConfirmPassword}
          errorMessage={errorMessage}
          imgSrc='../../../public/img/osito1.png'
          >
          </PasswordCard>
          <IonButton 
          color='light'
          className="password-screen__button" 
          expand="block" 
          onClick={handleContinue}
          routerLink='/modulos'
          >Continuar</IonButton>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default PasswordScreen;

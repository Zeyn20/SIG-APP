import React from 'react';
import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonInput, IonImg, IonText } from '@ionic/react';
import './css/PasswordCard.css';

export interface PasswordCardProps {
  password: string
  confirmPassword: string
  errorMessage: string
  setPassword: (value: string) => void
  setConfirmPassword: (value: string) => void
  color?: string
  imgSrc: string
}

const PasswordCard: React.FC<PasswordCardProps> = ({
  password,
  confirmPassword,
  errorMessage,
  setPassword,
  setConfirmPassword,
  color = 'primary',
  imgSrc
}) => {
  return (
    <IonCard className="password-card" color={color}>
      <IonCardHeader>
        <IonCardTitle className="password-card__title">Crea tu contraseña</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="password-card__content">
        <IonInput
          className="password-card__input"
          type="password"
          placeholder="************"
          value={password}
          onIonChange={(e) => setPassword(e.detail.value!)}
        />
        <IonCardTitle className="password-card__title">Confirma la contraseña</IonCardTitle>
        <IonInput
          className="password-card__input"
          type="password"
          placeholder="************"
          value={confirmPassword}
          onIonChange={(e) => setConfirmPassword(e.detail.value!)}
        />
        {errorMessage && (
          <div className="password-card__error">
            <IonImg className="password-card__error-image" src={imgSrc} />
            <IonText className="password-card__error-text">{errorMessage}</IonText>
          </div>
        )}
      </IonCardContent>
    </IonCard>
  );
};

export default PasswordCard;

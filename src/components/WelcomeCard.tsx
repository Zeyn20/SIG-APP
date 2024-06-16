import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg } from '@ionic/react';
import React from 'react';
import './css/WelcomeCard.css';

interface WelcomeCardProps {
  title: string
  imageSrc: string
  children?: React.ReactNode
  color?: string
}

const WelcomeCard: React.FC<WelcomeCardProps> = ({ title, imageSrc, children, color='primary' }) => {

  return (
    <IonCard className="welcome-card" color={color}>
      <IonCardHeader>
        <IonCardTitle className="welcome-card__title">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="welcome-card__content">
        <IonImg className="welcome-card__image" src={imageSrc} />
        {children}
      </IonCardContent>
    </IonCard>
  );
};

export default WelcomeCard;
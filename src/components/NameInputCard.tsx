import { IonCard, IonCardContent, IonCardHeader, IonCardTitle, IonImg, IonInput } from '@ionic/react';
import React from 'react';
import './css/NameInputCard.css'

interface NameInputCardProps {
  title: string
  placeholder: string
  imageSrc: string
  color?: string
}

const NameInputCard: React.FC<NameInputCardProps> = ({title, placeholder, imageSrc, color='primary'}) => {

  return (
    <IonCard className="name-card" color={color}>
      <IonCardHeader>
        <IonCardTitle className="name-card__title">{title}</IonCardTitle>
      </IonCardHeader>
      <IonCardContent className="name-card__content">
        <IonInput className="name-card__input" placeholder={placeholder} />
        <IonImg className="name-card__image" src={imageSrc} />
      </IonCardContent>
    </IonCard>
  );
};

export default NameInputCard;
import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import React from 'react';
import './css/SelectionCard.css'

interface SelectionCardProps {
  title: string
  subtitle?: string
  imageSrc: string
  children?: React.ReactNode
  color?: string
  route?: string
}

const SelectionCard: React.FC<SelectionCardProps> = ({title, subtitle, imageSrc, children, color='primary', route}) => {

  return (
  <IonCard
  color={color}
  button 
  className="selection-card"
  routerLink={route}
  >
    <IonCardHeader>
      <IonCardTitle className="selection-card__title">{title}</IonCardTitle>
      <IonCardSubtitle>{subtitle}</IonCardSubtitle>
    </IonCardHeader>
    <IonCardContent className="selection-card__content">
      <IonImg className="selection-card__image" src={imageSrc} />
      {children}
    </IonCardContent>
  </IonCard>
  );
};

export default SelectionCard;
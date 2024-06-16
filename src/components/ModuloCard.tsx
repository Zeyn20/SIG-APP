import { IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle, IonImg } from '@ionic/react';
import React from 'react';

interface ModuloCardProps {
  title: string
  subtitle: string
  descripcion: string
  route: string
  srcImg?: string
  alt?: string
}

const ModuloCard: React.FC<ModuloCardProps> = ({title, subtitle, descripcion, route, srcImg, alt}) => {

  return (
    <IonCard button routerLink={route}>
      <IonImg src={srcImg} alt={alt}/>
      <IonCardHeader>
        <IonCardTitle>{title}</IonCardTitle>
        <IonCardSubtitle>{subtitle}</IonCardSubtitle>
      </IonCardHeader>

      <IonCardContent>{descripcion}</IonCardContent>
    </IonCard>
  );
};

export default ModuloCard;
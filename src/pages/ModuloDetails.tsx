// ModuloDetalle.tsx

import React, { useRef, useState } from 'react';
import { IonPage, IonContent, IonHeader, IonToolbar, IonTitle, IonCard, IonCardContent, IonButtons, IonBackButton, IonImg, IonButton, IonModal, IonItem, IonInput } from '@ionic/react';
import { RouteComponentProps } from 'react-router';
import { OverlayEventDetail } from '@ionic/react/dist/types/components/react-component-lib/interfaces';

interface RouteParams {
  id: string;
}

interface Modulo {
  id: number;
  head: string;
  title: string;
  subtitle: string;
  descripcion: string;
  img: string;
  alt: string;
}

const modules: Modulo[] = [
  {
    id: 1,
    head: 'Seguridad de la información',
    title: 'IPS/IDS',
    subtitle: '¿Qué es un IDS?',
    descripcion: ' Un IDS o “sistema de detección de intrusiones” es un software especialmente diseñado para brindar protección a una red o a un sistema contra el tráfico malicioso. A menudo, cualquier actividad que parezca peligrosa se informa a un administrador.',
    img: '../public/img/ips-ids.jpg',
    alt: 'ips-ids'
  },
  {
    id: 2,
    head: 'Seguridad de la información',
    title: 'Firewalls',
    subtitle: '¿Qué es un firewall?',
    descripcion: 'Los firewalls pueden considerarse fronteras o puertas que administran el flujo de la actividad web que se permite o prohíbe en una red privada. El término proviene del concepto de paredes físicas que actúan como barreras para ralentizar la propagación del fuego hasta que los servicios de emergencia pueden extinguirlo. En comparación, los firewalls de seguridad de red sirven para la administración del tráfico web y normalmente están destinados a ralentizar la propagación de las amenazas web.',
    img: '../public/img/firewall.png',
    alt: 'firewall',
  },
  // Agrega más módulos según sea necesario
];


const ModuloDetails: React.FC<RouteComponentProps<RouteParams>> = ({ match }) => {
  const { id } = match.params;
  const modulo = modules.find(modulo => modulo.id === parseInt(id, 10));
  const [isOpen, setIsOpen] = useState(false);

  if (!modulo) {
    return <div>Módulo no encontrado</div>;
  }

  return (
    <IonPage>
      <IonHeader>
      <IonToolbar>
        <IonButtons slot="start">
          <IonBackButton defaultHref="/modulos"></IonBackButton>
        </IonButtons>
        <IonTitle>{modulo.head}</IonTitle>
      </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonCard>
          <IonCardContent>
            <h1>{modulo.title}</h1>
            <h2>{modulo.subtitle}</h2>
            <p>{modulo.descripcion}</p>
            <IonImg src={modulo.img} alt={modulo.alt}/>
          </IonCardContent>
        </IonCard>
        <IonButton
        onClick={() => setIsOpen(true)}
        color="light" 
        expand="block"
        >QUIZ</IonButton>
        <IonModal isOpen={isOpen}>
          <IonHeader>
            <IonToolbar>
              <IonTitle>Quiz</IonTitle>
              <IonButtons slot="end">
                <IonButton onClick={() => setIsOpen(false)}>Close</IonButton>
              </IonButtons>
            </IonToolbar>
          </IonHeader>
          <IonContent className="ion-padding">
            <h1>SE SUPONE QUE VA EL QUIZ</h1>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Magni illum quidem recusandae ducimus quos
              reprehenderit. Veniam, molestias quos, dolorum consequuntur nisi deserunt omnis id illo sit cum qui.
              Eaque, dicta.
            </p>
          </IonContent>
        </IonModal>
      </IonContent>
    </IonPage>
  );
};

export default ModuloDetails;
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react';
import React from 'react';
import ModuloCard from '../components/ModuloCard';

const Modulos: React.FC = () => {

  const modules = [
    {
      id: 1,
      title: 'Seguridad de la informacion',
      subtitle: 'IPS/IDS',
      descripcion: 'Heres a small text description for the card content. Nothing more, nothing less.',
      route: '/modulos/1',
      src: '../public/img/ips-ids.jpg',
      alt: 'ips-ids'
    },
    {
      id: 2,
      title: 'Seguridad de la informacion',
      subtitle: 'Firewalls',
      descripcion: 'Heres a small text description for the card content. Nothing more, nothing less.',
      route: '/modulos/2',
      src: '../public/img/firewall.png',
      alt: 'firewall'
    }
    // Agrega más objetos según sea necesario
  ];

  return (
    <IonPage>
      <IonContent className="ion-padding">
        <h1>MODULOS</h1>
        {/* Mapea el array de módulos y renderiza cada ModuloCard */}
        {modules.map((modulo) => (
          <ModuloCard
            key={modulo.id} // Utiliza el campo id como key
            title={modulo.title}
            subtitle={modulo.subtitle}
            descripcion={modulo.descripcion}
            route={modulo.route}
            srcImg={modulo.src}
            alt={modulo.alt}
          />
        ))}
      </IonContent>
    </IonPage>
  );
};

export default Modulos;
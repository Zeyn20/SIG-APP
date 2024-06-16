import React from 'react';
import { IonPage, IonContent} from '@ionic/react';
import './css/SelectionScreen.css';
import SelectionCard from '../components/SelectionCard'

const SelectionScreen: React.FC = () => {
  return (
    <IonPage>
      <IonContent className="selection-screen">
        <h1 className="selection-screen__title">Selecciona</h1>
        <div className="selection-screen__card-container">
          <SelectionCard
          title='Soy un adulto'
          imageSrc='../public/img/osito1.png'
          color='light'
          route='/home/welcome'
          >
          </SelectionCard>

          <SelectionCard
          title='Soy un joven'
          subtitle='(Soy un adulto pero me considero joven)'
          imageSrc='../public/img/osito2.png'
          color='favorite'
          route='/home/welcome2'
          >
          </SelectionCard>
        </div>
      </IonContent>
    </IonPage>
  );
};

export default SelectionScreen;
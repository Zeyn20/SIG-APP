import { IonContent, IonPage } from '@ionic/react';
import './css/Home.css';
import CardHome from '../components/CardHome';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonContent fullscreen>
        <CardHome />
      </IonContent>
    </IonPage>
  );
};

export default Home;
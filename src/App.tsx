import { Redirect, Route } from 'react-router-dom';
import { IonApp, IonIcon, IonLabel, IonRouterOutlet, IonTabBar, IonTabButton, IonTabs, setupIonicReact } from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import { playCircle, radio, library, search } from 'ionicons/icons';
import Home from './pages/Home';
import SelectionScreen from './pages/SelectionScreen';
import WelcomeScreen from './pages/adulto/WelcomeScreen';
import NameInputScreen from './pages/adulto/NameInputScreen';
import PasswordScreen from './pages/adulto/PasswordScreen';
import WelcomeScreen2 from './pages/joven/WelcomeScreen2';
import NameInputScreen2 from './pages/joven/NameInputScreen2';
import PasswordScreen2 from './pages/joven/PasswordScreen2';
import Modulos from './pages/Modulos';
import ModuloDetails from './pages/ModuloDetails';

/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/**
 * Ionic Dark Mode
 * -----------------------------------------------------
 * For more info, please see:
 * https://ionicframework.com/docs/theming/dark-mode
 */

/* import '@ionic/react/css/palettes/dark.always.css'; */
/* import '@ionic/react/css/palettes/dark.class.css'; */
import '@ionic/react/css/palettes/dark.system.css';

/* Theme variables */
import './theme/variables.css';


setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonReactRouter>
      <IonTabs>
      <IonRouterOutlet>
      <Route exact path="/home" component={Home}/>
        <Route exact path="/home/selection" component={SelectionScreen} />
        <Route exact path="/home/welcome" component={WelcomeScreen}/>
        <Route exact path="/home/welcome2" component={WelcomeScreen2}/>
        <Route exact path="/home/nameinput" component={NameInputScreen}/>
        <Route exact path="/home/nameinput2" component={NameInputScreen2}/>
        <Route exact path="/home/password" component={PasswordScreen}/>
        <Route exact path="/home/password2" component={PasswordScreen2}/>
        <Route exact path="/modulos" component={Modulos}/>
        <Route exact path="/modulos/:id" component={ModuloDetails}/>
        <Route exact path="/">
          <Redirect to="/home" />
        </Route>
      </IonRouterOutlet>
      <IonTabBar slot="bottom">
          <IonTabButton tab="modulos" href="/modulos">
            <IonIcon icon={playCircle} />
            <IonLabel>Modulos</IonLabel>
          </IonTabButton>

          <IonTabButton tab="games" href="/radio">
            <IonIcon icon={radio} />
            <IonLabel>Games</IonLabel>
          </IonTabButton>

          <IonTabButton tab="actividades" href="/library">
            <IonIcon icon={library} />
            <IonLabel>Actividades</IonLabel>
          </IonTabButton>

          <IonTabButton tab="Perfil" href="/search">
            <IonIcon icon={search} />
            <IonLabel>Perfil</IonLabel>
          </IonTabButton>
        </IonTabBar>
      </IonTabs>
    </IonReactRouter>
  </IonApp>
);

export default App;

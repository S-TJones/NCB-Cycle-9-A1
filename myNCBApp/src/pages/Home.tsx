import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Home.css';

const Home: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Blank</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Blank</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonRouterLink routerLink="/about">Go to About</IonRouterLink>
        <IonRouterLink routerLink="/products">Go to Products</IonRouterLink>

        The world is your oyster.
        <p>
          If you get lost, the{' '}<a href="https://ionicframework.com/docs/" target="_blank" rel="noopener noreferrer">docs</a>{' '} will be your guide.
        </p>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Home;

import { IonContent, IonHeader, IonPage, IonRouterLink, IonTitle, IonToolbar } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

/* Image variables */
import jones from '../assets/images/jones.jpg';

const About: React.FC = () => {
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

        <img src={jones} alt="It's me" />
        <h2>Shemar Jones</h2>
        <p>Team Name</p>
        <p>
            Shemar Jones is a Software Engineering
            student and he is thrilled to work in teams
            and to have an opportunity to work at NCB.
            Regarding Shemar's non-academic interests
            and likes, he enjoys watching movies and
            TV shows and playing video games. He is
            always interested in learning about new
            places and people's experiences there.
        </p>
        
        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default About;

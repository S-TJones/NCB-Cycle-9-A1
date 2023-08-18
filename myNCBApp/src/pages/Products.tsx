import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonBadge, IonLabel, IonCheckbox, IonNote } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

const Products: React.FC = () => {
  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Products</IonTitle>
        </IonToolbar>
      </IonHeader>

      <IonContent fullscreen>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Products</IonTitle>
          </IonToolbar>
        </IonHeader>

        <IonList>
            <IonItem>
                <IonCheckbox slot="start" />
                <IonLabel>
                    <h1>Create Idea</h1>
                    <IonNote>Run Idea by Yannick</IonNote>
                </IonLabel>
                <IonBadge color="success">5 Days</IonBadge>
            </IonItem>
        </IonList>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Products;

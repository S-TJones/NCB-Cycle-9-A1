import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonBadge, IonLabel, IonCheckbox, IonNote, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
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

        <IonCard>
            <img src="pencil-pack.jpg" alt="Product 1" />
            <IonCardHeader>
                <IonCardSubtitle>Stationary</IonCardSubtitle>
                <IonCardTitle>Pack of Pencils 1</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img src="small-speaker.jpg" alt="Product 2" />
            <IonCardHeader>
                <IonCardSubtitle>Tech</IonCardSubtitle>
                <IonCardTitle>Small Speaker</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img src="thumb-drives.jpg" alt="Product 3" />
            <IonCardHeader>
                <IonCardSubtitle>Tech</IonCardSubtitle>
                <IonCardTitle>Thumb Drive</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img src="water-bottle-mira.jpg" alt="Product 4" />
            <IonCardHeader>
                <IonCardSubtitle>Bottles</IonCardSubtitle>
                <IonCardTitle>Water Bottle</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>

        <ExploreContainer />
      </IonContent>
    </IonPage>
  );
};

export default Products;

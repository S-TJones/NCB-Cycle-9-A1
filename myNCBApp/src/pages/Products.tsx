import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonBadge, IonLabel, IonCheckbox, IonNote, IonCard, IonCardContent, IonCardHeader, IonCardSubtitle, IonCardTitle } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';

/* Image variables */
import pencil_pack from '../assets/images/pencil_pack.jpg';
import small_speaker from '../assets/images/small_speaker.jpg';
import thumb_drives from '../assets/images/thumb_drives.jpg';
import water_bottle_mira from '../assets/images/water_bottle_mira.jpg';

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
            <img src={pencil_pack} alt="Product 1" />
            <IonCardHeader>
                <IonCardSubtitle>Stationary</IonCardSubtitle>
                <IonCardTitle>Pack of Pencils 1</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img src={small_speaker} alt="Product 2" />
            <IonCardHeader>
                <IonCardSubtitle>Tech</IonCardSubtitle>
                <IonCardTitle>Small Speaker</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img src={thumb_drives} alt="Product 3" />
            <IonCardHeader>
                <IonCardSubtitle>Tech</IonCardSubtitle>
                <IonCardTitle>Thumb Drive</IonCardTitle>
            </IonCardHeader>
            <IonCardContent>
                Price: $X.XX
            </IonCardContent>
        </IonCard>
        <IonCard>
            <img src={water_bottle_mira} alt="Product 4" />
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

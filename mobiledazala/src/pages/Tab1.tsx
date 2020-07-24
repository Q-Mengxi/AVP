import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonLabel } from '@ionic/react'; // TODO: fixme 
import './Tab1.css';

const Tab1: React.FC = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Welcome to Dazala”</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Welcome to Dazala”</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="center">
          {/* TODO: fixme, but you might not need the curly brackets */}
          <IonLabel>Welcome to Dazala!</IonLabel>
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

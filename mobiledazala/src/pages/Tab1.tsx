import React from 'react';
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar } from '@ionic/react'; // TODO: fixme 
import './Tab1.css';

const Tab1: React.FC = () => {
  return (  
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 1</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 1</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonContent class="center">
          {/* TODO: fixme, but you might not need the curly brackets */}
        </IonContent>
      </IonContent>
    </IonPage>
  );
};

export default Tab1;

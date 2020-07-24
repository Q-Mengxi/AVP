import React from 'react';
import { useState, useEffect } from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonItem, IonLabel, IonLoading, IonList } from '@ionic/react';
import ExploreContainer from '../components/ExploreContainer';
import './Tab3.css';
import { RouteComponentProps } from 'react-router';


interface CartItem {
    id: string
    name?: string
    description?: string
    price?: number
    qty:number
}
interface Dictionary<T> {
    [Key: string]: T;
}

type Cart = Dictionary<CartItem>

const Tab3: React.FC<ChatPageProps> = ({match}) => {

  const [messages, setMessages] = useState<Message[]>([]);

  const [showLoading, setShowLoading] = useState<boolean>(true);
  
  const fetchMessages = async () => {
    fetch(`https://localhost:5001/api/message/get/${match.params.id}`)
      .then(res => res.json()).then(setMessages).finally(() => setShowLoading(false))
  }

  useEffect(() => {
    fetchMessages()
  }, [])

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle>Tab 3</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent>
        <IonHeader collapse="condense">
          <IonToolbar>
            <IonTitle size="large">Tab 3</IonTitle>
          </IonToolbar>
        </IonHeader>
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
        />
        <IonList>
          {messages.map((item, index) => (
            <IonItem key={index}>
              <IonLabel>
                <h1>{item.text}</h1>
                <p>{item.userId}</p>
                <p>{item.createdAt}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab3;
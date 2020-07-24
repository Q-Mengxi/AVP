import React from 'react';
import { useState, useEffect } from "react";
import {
  IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonList, IonItem, IonLabel, IonLoading,
  IonButton
} from '@ionic/react';
import useLocalStorage from '../components/LocalStorage'
import './Tab2.css';

interface Product {
  id : string
  name : string 
  description : string
  price  : number
}

const Tab2: React.FC = () => {
  const [products, setProducts] = useState<Product[]>([]);
  const [showLoading, setShowLoading] = useState<boolean>(true);

  const fetchProducts = async () => {
    fetch(`"https://localhost:5001/api/product/all"`)
      .then(res => res.json()).then(setProducts).finally(() => setShowLoading(false))
  };

  useEffect(() => {
    fetchProducts()
  }, [])

  const makeLink = (products: Product) => { return "/tab3/" + products.id }

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar>
          <IonTitle class="tab-pos">Tab 2</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent className="ion-padding">
        <IonLoading
          isOpen={showLoading}
          onDidDismiss={() => setShowLoading(false)}
          message={'Loading...'}
        />
        <IonList>
          {products.map((item, index) => (
            <IonItem key={index} routerLink={item.id}>
              <IonLabel>
                <h1>{item.name}</h1>
                <p>{item.description}</p>
                <p>{item.price}</p>
              </IonLabel>
            </IonItem>
          ))}
        </IonList>
      </IonContent>
    </IonPage>
  );
};

export default Tab2;
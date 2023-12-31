import {
  IonButton,
  IonCheckbox,
  IonContent,
  IonHeader,
  IonInput,
  IonItem,
  IonLabel,
  IonList,
  IonPage,
  IonSelect,
  IonSelectOption,
  IonTitle,
  IonToolbar,
  useIonToast
} from "@ionic/react";
import React from "react";
import { caretDownSharp } from "ionicons/icons";

import ExploreContainer from "../components/ExploreContainer";
import "./Home.css";

const Home: React.FC = () => {
  const [present] = useIonToast();
  const placeOrder = () => {
    present({
      color: "dark",
      position: "bottom",
      message: "Order Placed!",
      duration: 2000
    });
  };
  const toppings: string[] = [
    "Pepperoni",
    "Sausage",
    "Extra Cheese",
    "Bell Peppers",
    "Onions",
    "Mushroom",
    "Pineapple",
    "Black Olives"
  ];

  const displayToppings = () => {
    return toppings.map((top) => {
      return (
        <IonItem key={top}>
          <IonCheckbox justify="space-between">{top}</IonCheckbox>
        </IonItem>
      );
    });
  };

  return (
    <IonPage>
      <IonHeader>
        <IonToolbar color="success">
          <IonTitle id="title">Order Details</IonTitle>
        </IonToolbar>
      </IonHeader>
      <IonContent fullscreen>
        <h1>Enter your order details</h1>

        <IonItem>
          <IonInput
            label="Name"
            labelPlacement="floating"
            placeholder="Enter name"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonInput
            label="Phone number"
            labelPlacement="floating"
            placeholder="Enter phone number"
          ></IonInput>
        </IonItem>
        <IonItem>
          <IonSelect
            label="Pizza Size"
            className="always-flip"
            toggleIcon={caretDownSharp}
            interface="popover"
            placeholder="Select size"
          >
            <IonSelectOption value="Small">Small</IonSelectOption>
            <IonSelectOption value="Medium">Medium</IonSelectOption>
            <IonSelectOption value="Large">Large</IonSelectOption>
            <IonSelectOption value="Extra Large">Extra Large</IonSelectOption>
          </IonSelect>
        </IonItem>

        <IonList>
          <IonItem>
            <h2>Select Toppings</h2>
          </IonItem>
          {displayToppings()}
        </IonList>
        <IonButton
          shape="round"
          expand="block"
          color={"success"}
          onClick={placeOrder}
        >
          PLACE ORDER
        </IonButton>
      </IonContent>
    </IonPage>
  );
};

export default Home;

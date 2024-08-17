<template>
  <ion-page>
    <ion-header>
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Places</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content>
      <ion-card>
        <ion-card-header>
          <ion-card-title>Coming soon...</ion-card-title>
          <ion-card-subtitle>Places will be live soon</ion-card-subtitle>
        </ion-card-header>
        <ion-card-content>
          <p>
            Places is a feature that will contain landmarks in the Sissala area, including 360 panoramas giving you a tunnel vision back home in an immersive way.
          </p>
        </ion-card-content>
      </ion-card>

      <place-card-component
          v-for="(place,index) in places"
          :key="index"
          :place="place"
          :index="index"
      ></place-card-component>


    </ion-content>

  </ion-page>
</template>
<script lang="ts">
import {IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonContent,IonCard,IonCardContent,IonCardTitle,IonCardSubtitle} from "@ionic/vue";
import {defineComponent} from 'vue'
import PlaceCardComponent from "@/Components/PlaceCardComponent.vue";

export default defineComponent({
  name: "PlacesPage",
  components: {PlaceCardComponent, IonButtons, IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent,IonCard,IonCardContent,IonCardTitle,IonCardSubtitle},
  data() {
    return {
      places: [

        {
          name: "Great Fingers Volleyball Court",
          by: "Yusif Katulie",
          location: {
            town: "Tumu",
            region: "Upper West Region",
            district: "Sissala East Municipal"
          },
          panaromaURL: '/assets/places/place2.jpg',
          featuredPhoto: "/assets/places/place2.jpg",
          description: "Sample place"
        }

      ]
    }
  }
})
</script>

<style scoped>

</style>
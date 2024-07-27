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
import {IonPage, IonHeader, IonToolbar, IonTitle, IonBackButton, IonButtons, IonContent} from "@ionic/vue";
import {defineComponent} from 'vue'
import PlaceCardComponent from "@/Components/PlaceCardComponent.vue";

export default defineComponent({
  name: "PlacesPage",
  components: {PlaceCardComponent, IonButtons, IonBackButton, IonPage, IonHeader, IonToolbar, IonTitle, IonContent},
  data() {
    return {
      places: [

        {
          name: "Iconic Brain Multimedia",
          by: "Harun Kuri",
          location: {
            town: "Tumu",
            region: "Upper West Region",
            district: "Sissala East Municipal"
          },
          panaromaURL: '/assets/places/place1.jpg',
          featuredPhoto: "/assets/places/place1.jpg",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        , {
          name: "Great Fingers Volleyball Court",
          by: "Yusif Katulie",
          location: {
            town: "Tumu",
            region: "Upper West Region",
            district: "Sissala East Municipal"
          },
          panaromaURL: '/assets/places/place2.jpg',
          featuredPhoto: "/assets/places/place2.jpg",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }
        , {
          name: "Tumu Chief Palace",
          by: "Harun Kuri",
          location: {
            town: "Tumu",
            region: "Upper West Region",
            district: "Sissala East Municipal"
          },
          panaromaURL: '/assets/places/place3.jpg',
          featuredPhoto: "/assets/places/place3.jpg",
          description: "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book. It has survived not only five centuries, but also the leap into electronic typesetting, remaining essentially unchanged. It was popularised in the 1960s with the release of Letraset sheets containing Lorem Ipsum passages, and more recently with desktop publishing software like Aldus PageMaker including versions of Lorem Ipsum."
        }

      ]
    }
  }
})
</script>

<style scoped>

</style>
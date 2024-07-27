<template>
  <span>

  <ion-card :id="'open-details-modal-'+index" class="ion-margin" style="--box-shadow: none" mode="ios">
    <img alt="Silhouette of mountains" :src="place.featuredPhoto"/>
    <ion-card-header>
      <ion-card-title>{{ place.name }}</ion-card-title>

      <ion-card-subtitle>
        <ion-icon size="x-small" :icon="locationOutline"></ion-icon>
        {{ place.location.town }}
      </ion-card-subtitle>

    </ion-card-header>
    <ion-card-content>
      <p class="detail-text">
        {{ place.description }}
      </p>
      <p class="ion-margin-top" style="margin-top: 20px">By: {{place.by}}</p>
    </ion-card-content>


  </ion-card >
    <ion-modal ref="modal" :trigger="'open-details-modal-'+index" :initial-breakpoint="0.5" :breakpoints="[0, 0.25, 0.5, 0.75,0.8,1]">
      <ion-content>

     <place-preview-component :place="place"></place-preview-component>
      </ion-content>

    </ion-modal>
  </span>

</template>

<script lang="ts">
import {IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonIcon,IonModal,IonContent} from "@ionic/vue";
import {locationOutline} from "ionicons/icons";
import {defineComponent} from 'vue'
import PlacePreviewComponent from "@/Components/PlacePreviewComponent.vue";

export default defineComponent({
  props: {
    place: {
      type: Object
    },
    index:{
      type:Number
    }
  },
  name: "PlaceCardComponent",
  components: {
    PlacePreviewComponent,
    IonCard, IonCardTitle, IonCardHeader, IonCardSubtitle, IonIcon,IonModal,IonContent
  },
  data() {
    return {
      locationOutline
    }
  }
})
</script>

<style>
.detail-text {
  font-size: 18px !important;
  text-align: justify;
  white-space: auto;
  overflow: hidden;
  text-overflow: ellipsis;
  height: 100px;

}
ion-card{
  box-shadow: none!important;
}
</style>
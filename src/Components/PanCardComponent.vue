
<template>
<ion-content>
  <ion-card>
    <ion-card-content>
      <ion-button @click="testPana"  size="large" expand="block" shape="round">Test Pana</ion-button>
      <div id="viewer" style="width: 100%; height: 50vw;"></div>
    </ion-card-content>
  </ion-card>
</ion-content>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonContent,IonCard,IonCardContent,IonButton} from "@ionic/vue";
import { Viewer } from '@photo-sphere-viewer/core';
import  "@photo-sphere-viewer/core/index.css";

export default defineComponent({
  components: {
    IonContent, IonCard, IonCardContent, IonButton
  },
  methods: {
    testPana() {

      const viewer = new Viewer({
        container: <HTMLElement>document.querySelector('#viewer'),
        panorama: '/assets/places/place1.jpg',
        caption: "Iconic brain multimedia",
        description: "It is a place in tumu for tech related solutions such as printing and other multi media works ",
        navbar: []
      });


    }
  },
  name: "PanCardComponent"
})
</script>

<style scoped>

</style>
<template>
<ion-card>
  <div ref="viewer" style="width: 100%; height: 80vw; border-radius: 15px!important;"></div>
  <ion-card-header>

  <ion-card-title>
    {{place.name}}
  </ion-card-title>
  <ion-card-subtitle>

    {{ place.location.town }}

  </ion-card-subtitle>
  </ion-card-header>

  <ion-card-content>
    <p class="details-container">{{place.description}}</p>
  </ion-card-content>
</ion-card>
</template>

<script lang="ts">
import {defineComponent} from 'vue'
import {IonCard,IonCardContent,IonCardTitle,IonCardSubtitle,IonCardHeader} from "@ionic/vue";
import { Viewer } from '@photo-sphere-viewer/core';
import  "@photo-sphere-viewer/core/index.css";
export default defineComponent({
  name: "PlacePreviewComponent",
  components:{IonCard,IonCardContent,IonCardTitle,IonCardSubtitle,IonCardHeader},
  props:{
    place:{
      type:Object
    }
  },

  computed:{
    viewerConfig(){
      return{
        container:  this.$refs.viewer,
        panorama: this.place?.panaromaURL ?? "",
        caption: this.place?.name ?? "",
        description: "It is a place in tumu for tech related solutions such as printing and other multi media works ",
        navbar:["fullscreen"]
      }
    }

  },
  methods:{
    renderViewer(){
      const viewer = new Viewer(this.viewerConfig);

    }
  },
  mounted() {
    this.renderViewer();
  }
})
</script>

<style>
.details-container{
  font-size: 18px!important;
  text-align: justify;
  line-height: 1.7em!important;

}

</style>
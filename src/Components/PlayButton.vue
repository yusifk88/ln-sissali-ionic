<template>
  <ion-button expand="block" fill="clear">
    <ion-icon :ios="playOutline" :name="playOutline" :md="playOutline" slot="icon-only"></ion-icon>
  </ion-button>

</template>

<script>
import {IonButton,IonIcon} from "@ionic/vue";
import {playOutline} from "ionicons/icons"
export default {
  name: "PlayButton",
  components:{IonButton,IonIcon},
  setup(){
    return{
      playOutline
    }
  }
}
</script>

<style scoped>

</style>
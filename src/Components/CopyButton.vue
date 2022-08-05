<template>
  <ion-button @click="CopyNow" expand="block" fill="clear">
    <ion-icon slot="icon-only" :md="copyOutline" :ios="copyOutline" :name="copyOutline"></ion-icon>
  </ion-button>
</template>

<script>
import {IonButton,IonIcon} from "@ionic/vue";
import {star,copyOutline} from "ionicons/icons";
import { Clipboard } from '@awesome-cordova-plugins/clipboard';
import {Toast} from "@awesome-cordova-plugins/toast";
export default {
  props:['contents'],
  name: "CopyButton",
  components:{IonButton,IonIcon},

  methods:{
    CopyNow(){

      Clipboard.copy(this.contents);

      Toast.show("Copied, you can now paste anywhere!","long","bottom").subscribe();


    }
  },
  setup(){
    return{
      star,
      copyOutline
    }
  }
}
</script>

<style scoped>

</style>
<template>
  <ion-button @click="playSound()" expand="block" fill="clear">
    <ion-icon :ios="playOutline" :name="playOutline" :md="playOutline" slot="icon-only"></ion-icon>
  </ion-button>

  <audio id="player"></audio>

</template>

<script>
import {IonButton, IonIcon} from "@ionic/vue";
import {playOutline} from "ionicons/icons"

export default {
  props: {
    category: {
      type: String
    },
    word:{
      type:String
    }
  },
  name: "PlayButton",
  components: {IonButton, IonIcon},
  data() {
    return {
      playOutline,

    }
  },
  methods:{
    playSound() {

      if (this.category) {
        const URL = "/assets/audio/"+this.category.replaceAll(" ","")+"/"+this.word.replace("?","")
            .replaceAll("!","")
            .replaceAll("'","")
            .replaceAll(".","")
            .replaceAll(".","")
            .replaceAll(",","")
            .replace(/\s/g, "")+".mp3";
       console.log(URL);

        const player = document.getElementById("player");
        player.src = URL;
        player.valume = 0.3;
        player.play();
      }

    }
  }

}
</script>

<style scoped>

</style>
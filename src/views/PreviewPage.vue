<template>
  <ion-page>

    <ion-header mode="ios" :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title v-if="selectedItem">{{selectedItem.title}}</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large" v-if="selectedItem">{{selectedItem.title}}</ion-title>
        </ion-toolbar>
      </ion-header>

      <div v-if="selectedItem && selectedItem.items"  id="container">

        <ion-accordion-group>
          <ion-accordion v-for="(item,i) in selectedItem.items" :key="i" :value="'item_'+i">
            <ion-item slot="header">
              <ion-label>{{item.english}}</ion-label>
            </ion-item>
            <div style="color: #2e86ab !important;" class="ion-padding" slot="content">
             <h2>{{item.sissali}}</h2>
              <ion-row>
                <ion-col size="6">
                  <play-button :word="item.english" :category="selectedItem.title.toLowerCase()" ></play-button>
                </ion-col>
                  <ion-col size="6">

                    <copy-button :contents="item.sissali"></copy-button>
                </ion-col>

              </ion-row>
            </div>
          </ion-accordion>

        </ion-accordion-group>

      </div>
    </ion-content>
  </ion-page>
</template>

<script lang="ts">
import {defineComponent} from 'vue';
import {
  IonButtons,
  IonContent,
  IonHeader,
  IonPage,
  IonTitle,
  IonToolbar,
  IonBackButton,
   IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonRow,
    IonCol
} from '@ionic/vue';
import CopyButton from "@/Components/CopyButton.vue";
import PlayButton from "@/Components/PlayButton.vue";

export default defineComponent({
  name: 'PreviewPage',
  components: {
    PlayButton,
    CopyButton,
    IonButtons,
    IonContent,
    IonHeader,
    IonBackButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonAccordionGroup,
    IonAccordion,
    IonItem,
    IonLabel,
    IonRow,
    IonCol,



  },

  data(){
    return{
      items:[],
      menuItems:[],
      cat:null
    }
  },
  computed:{

    selectedItem(){
      // eslint-disable-next-line @typescript-eslint/no-var-requires
      const categories = require("../assets/categories.json");
      return categories.find((item: { tag: string | string[]; })=>item.tag===this.$route.params.cat);

    }
  },


});
</script>

<style scoped>
#container {
 max-height: 100vh;
}

#container strong {
  font-size: 20px;
  line-height: 26px;
}

#container p {
  font-size: 16px;
  line-height: 22px;
  color: #8c8c8c;
  margin: 0;
}

#container a {
  text-decoration: none;
}
</style>

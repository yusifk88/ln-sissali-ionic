<template>
  <ion-page>

    <ion-header mode="ios" :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button color="primary" defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>Search</ion-title>

      </ion-toolbar>
      <ion-toolbar>
        <ion-searchbar @ionClear="cleared" debounce="800" v-model="keyword" @ionChange="doSearch" :autofocus="true"
                       placeholder="Search..." mode="ios" cancelButtonIcon="backButtonIcon" :animated="true"
                       autocomplete="search"></ion-searchbar>

      </ion-toolbar>

    </ion-header>

    <ion-content :fullscreen="true">

      <div id="container">

        <ion-accordion-group>

          <RecycleScroller
              class="scroller"
              :items="filteredLst"
              :item-size="100"
              key-field="english"
              v-slot="{ item }"
          >
            <ion-accordion color="light" :key="i" :value="'item_'+i">
              <ion-item slot="header">
                <ion-label>{{ item.english }}</ion-label>
              </ion-item>
              <div style="color: #2e86ab !important;" class="ion-padding" slot="content">
                <h2>{{ item.sissali }}</h2>
                <ion-row>
                  <ion-col size="6">
                    <play-button></play-button>
                  </ion-col>
                  <ion-col size="6">

                    <copy-button :contents="item.sissali"></copy-button>
                  </ion-col>

                </ion-row>
              </div>
            </ion-accordion>

          </RecycleScroller>
        </ion-accordion-group>


      </div>
    </ion-content>
  </ion-page>
</template>

<script>
import {
  IonAccordion,
  IonAccordionGroup,
  IonBackButton,
  IonButtons,
  IonCol,
  IonContent,
  IonHeader,
  IonItem,
  IonLabel,
  IonPage,
  IonRow,
  IonSearchbar,
  IonTitle,
  IonToolbar
} from '@ionic/vue';

import PlayButton from "../Components/PlayButton";
import CopyButton from "../Components/CopyButton";

export default {
  name: "SearchPage",
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonBackButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonSearchbar,
    IonItem,
    IonLabel,
    IonAccordionGroup,
    IonAccordion,
    IonRow,
    IonCol,
    PlayButton,
    CopyButton,


  },
  data() {
    return {
      allList: require("../assets/all.json"),
      keyword: "",
      filtered: []
    }
  },
  computed: {

    filteredLst() {

      if (!this.keyword) {

        return this.allList;
      }

      return this.allList.filter(item => {
        return item.english.toLowerCase().includes(this.keyword);
      })

    }
  },
  methods: {
    cleared() {
      this.filtered = this.getAll;

    },
    doSearch() {
      this.filtered = this.getAll.filter(item => item.english.toLowerCase().includes(this.keyword.toLowerCase()));
    }

  },
  mounted() {
    this.filtered = this.getAll;
  }
}
</script>

<style scoped>
.scroller {
  height: 100%;
}
</style>
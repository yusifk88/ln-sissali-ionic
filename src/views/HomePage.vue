<template>
  <ion-page>
    <ion-header mode="ios" :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-menu-button color="primary"></ion-menu-button>
        </ion-buttons>
        <ion-title>LN Sisaali</ion-title>
<!--        <ion-buttons slot="end">-->
<!--          <ion-button color="primary" router-link="/search">-->
<!--            <ion-icon :ios="searchOutline" :md="searchOutline" :name="searchOutline" slot="icon-only"></ion-icon>-->
<!--          </ion-button>-->
<!--        </ion-buttons>-->
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">LN Sissali</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
        <ion-icon style="display: block;" md="accessibility-outline" ios="accessibility-outline" name="accessibility-outline"></ion-icon>

        <ion-row>
          <ion-col size="4" v-for="menu in menus" :key="menu.title">

            <ion-card  mode="ios" @click="getRoute(menu.route)" style="margin: 0; box-shadow: none !important; border-radius: 15px;" :router-link="menu.route">
              <ion-card-content  class="ion-text-center ion-color-tertiary" style="padding: 8px !important;">
                <img style="height: 60px;" :src="menu.icon">
                <ion-card-header style="color: #2e86ab !important; margin: 0 !important; padding: 0 !important;">
                  {{menu.title}}
                </ion-card-header>
              </ion-card-content>
            </ion-card>

          </ion-col>
        </ion-row>
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
  IonMenuButton,
  IonPage,
  IonTitle,
  IonToolbar,
  IonRow,
  IonCol,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,
} from '@ionic/vue';
import {accessibilityOutline,searchOutline} from 'ionicons/icons';

export default defineComponent({
  name: 'FolderPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonMenuButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonRow,
    IonCol,
    IonIcon,
    IonCard,
    IonCardContent,
    IonCardHeader,

  },
  data() {
    return {
      accessibilityOutline,
      searchOutline,
      menus: [
        {
          title: "Greetings",
          icon: "/icons/handshake.png",
          route: "/view/greetings"
        },
        {
          title: "Converse",
          icon: "/icons/chat.png",
          route: "/view/conversation"
        },
        {
          title: "Numbers",
          icon: "/icons/numbers.png",
          route: "/view/numbers"
        },
        {
          title: "Time & Date",
          icon: "/icons/clock.png",
          route: "/view/timedate"
        },
        {
          title: "Directions",
          icon: "/icons/map.png",
          route: "/view/direction"
        },
        {
          title: "Transport",
          icon: "/icons/bus.png",
          route: "/view/transportation"
        },
        {
          title: "Hospitality",
          icon: "/icons/house.png",
          route: "/view/accommodation"
        },
        {
          title: "Eating Out",
          icon: "/icons/cutlery.png",
          route: "/view/eating"
        },
        {
          title: "Shopping",
          icon: "/icons/shopping.png",
          route: "/view/shopping"
        },
        {
          title: "Colours",
          icon: "/icons/colors.png",
          route: "/view/colors"
        },
        // {
        //   title:"Cities/Capitals",
        //   icon:"/icons/city.png",
        //   route:"/view/cities"
        // },

        {
          title: "Culture",
          icon: "/icons/gallery.png",
          route: "/view/culture"
        },
        {
          title: "Family",
          icon: "/icons/family.png",
          route: "/view/family"
        },
        // {
        //   title:"Dating",
        //   icon:"/icons/dating.png",
        //   route:"/view/dating"
        // },
        // {
        //   title:"Emergency",
        //   icon:"/icons/alert.png",
        //   route:"/view/emergency"
        // },
        // {
        //   title:"Feeling Sick",
        //   icon:"/icons/sick.png",
        //   route:"/view/feelingsick"
        // }

      ]

    }
  },
  methods:{
    getRoute(route=""){
      this.$router.push(route);
    }
  }
});
</script>

<style scoped>
#container{
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

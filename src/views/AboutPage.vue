<template>
  <ion-page>

    <ion-header collapse="fade" :translucent="true">
      <ion-toolbar>
        <ion-buttons slot="start">
          <ion-back-button defaultHref="/"></ion-back-button>
        </ion-buttons>
        <ion-title>About LN Sisaali</ion-title>
      </ion-toolbar>
    </ion-header>

    <ion-content :fullscreen="true">
      <ion-header collapse="condense">
        <ion-toolbar>
          <ion-title size="large">About LN Sissali</ion-title>
        </ion-toolbar>
      </ion-header>

      <div id="container">
       <ion-card mode="ios" style="box-shadow: none !important; border-radius: 15px;">
         <ion-card-title>

         </ion-card-title>
         <ion-card-content>
           "Ln Sissali" pronounced learn Sissali is a community-sourced project meant to simplify the learning curve of the Sissili
           dialect, the aim of this project is to make it easier to lookup words in English and find their Sissali equivalents.

         </ion-card-content>
       </ion-card>

             <ion-card mode="ios" style="box-shadow: none !important; border-radius: 15px;">
               <ion-card-header>
                 <ion-card-title>
                   What it is.
                 </ion-card-title>
               </ion-card-header>

         <ion-card-content>
           Ln Sissali is meant to be your guide to what an everyday word or phrase may mean in Sissali, it is also meant to help complete non-speakers
           easily make up conversations with native speakers.
         </ion-card-content>
       </ion-card>

             <ion-card mode="ios" style="box-shadow: none !important; border-radius: 15px;">
               <ion-card-header>
                 <ion-card-title>
                   What it is NOT.
                 </ion-card-title>
               </ion-card-header>

         <ion-card-content>
           LN Sissali is not meant to be your go-to source for academic validations, we are committed to increasing it's accuracy but
           as a community we do not recommend it as an academically certified source for the language/dialect.
         </ion-card-content>
       </ion-card>

        <ion-item>
          <ion-label>
            Team

          </ion-label>
        </ion-item>
             <ion-card style="box-shadow: none !important; border-radius: 15px;" v-for="person in people" :key="person.photo_url" mode="ios">
               <img :alt="person.name" :src="person.photo_url">
               <ion-card-header>
                 <ion-card-title>
                  {{person.name}}
                 </ion-card-title>
                 <ion-card-subtitle>{{person.title}}</ion-card-subtitle>
               </ion-card-header>

         <ion-card-content>
           Profession:{{person.profession}}
         </ion-card-content>
       </ion-card>


        <ion-item>
          <ion-label>
           Other Contributors
          </ion-label>
        </ion-item>
             <ion-card style="box-shadow: none !important; border-radius: 15px;" v-for="person in others" :key="person.name" mode="ios">
               <ion-card-header>
                 <ion-card-subtitle>
                  {{person.name}}
                 </ion-card-subtitle>
               </ion-card-header>

       </ion-card>



        <ion-item>
          <ion-label>
            References
          </ion-label>
        </ion-item>

        <ion-item v-for="ref in referenceMeterials" :key="ref.name">
          <ion-label>{{ref.name}}</ion-label>
          <ion-label>By {{ref.author}}</ion-label>
        </ion-item>
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
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonItem,
    IonLabel
} from '@ionic/vue';

export default defineComponent({
  name: 'AboutPage',
  components: {
    IonButtons,
    IonContent,
    IonHeader,
    IonBackButton,
    IonPage,
    IonTitle,
    IonToolbar,
    IonCard,
    IonCardContent,
    IonCardTitle,
    IonCardHeader,
    IonCardSubtitle,
    IonItem,
    IonLabel

  },
  setup(){
    return{
      people:[
        {
          name:"Haruna Kuri",
          title:"Project coordinator",
          profession:"Professional Teacher",
          photo_url:"/assets/people/kuri.jpeg"
        },
        {
          name:"Hillia Fuseini Abey",
          title:"Translator",
          profession:"Multimedia Artist",
          photo_url:"/assets/people/abey.jpeg"

        },  {
          name:"Emanuela Lieku",
          title:"Translator",
          profession:"Fashion designer",
          photo_url:"/assets/people/ema.jpeg"

        },
        {
          name:"Yusif katulie",
          title:"Developer",
          profession:"Senior software engineer",
          photo_url:"/assets/people/yusif.jpeg"

        },

      ],
      others:[
        {
          name:"Sanda Kodimah"
        }
      ],
      referenceMeterials:[
        {
          name:"Sissali Dictionary",
          author:"Hon. Moses Luri"
        }
      ]
    }
  }
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

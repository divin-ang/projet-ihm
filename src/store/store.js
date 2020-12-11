import Vue from 'vue'
import Vuex from 'vuex'


Vue.use(Vuex)
let t =[
  {nom:'emile',prenom:"Sauna",photo:"./../assets/profils/selfPicture.png"},
  {nom:'Esther',prenom:"Simon",photo:"./../assets/profils/selfPicture.png"},
  {nom:'Fiona',prenom:"Rani",photo:"./../assets/profils/selfPicture.png"},
  {nom:'William',prenom:"Tony",photo:"./../assets/profils/selfPicture.png"},
 
]


export const store = new Vuex.Store({
  


    state: {
        t:t,
        email: '',
        resultat:t,
        password:'',
        first_name:'',
        last_name:'',
        post:'',
        keyword:'',
        membres:[],
        connections:0,
        photoUrl:'',
      
        description:'',
        choisie:'sauna divin'
      },
      mutations: {
        nom(state, last_name) {
          state.last_name= last_name
          
        },
        connection(state,connections){
          state.connections =connections
        },

        prenom(state,first_name){
            state.first_name=first_name
           
           

        },
        upload(state,photoUrl){
          state.photoUrl=photoUrl
        },
        decrire(state,description){
          state.description=description
         
         

      },
      trierResultat(state,keyword){
         state.keyword=keyword
      },choix(state,choisie){
        state.choisie= choisie
      },
      recuperEmail(state,email){
        state.email=email
      },
      recuperPass(state,password){
        state.password=password
      }

      },
      getters: {
        first_name : state => state.first_name,
        last_name : state => state.last_name,
        description : state => state.description,
        resultat: state =>state.resultat,
        keyword:state=>state.keyword,
        connections:state=>state.connections,
        choisie :state=>state.choisie,
        password :state=>state.password,
        email:state=>state.email,
        photoUrl:state=>state.photoUrl
        
      }
})

 
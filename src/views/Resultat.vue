<template>
    <div  id="dive">
    <div id="profil"><Profil /></div>
    <div    >
     <p class="pp"><button  class="bb"  id="sauna" @click="ajout">   Sauna emile    <img src="./../assets/profils/selfPicture.png" alt="" >
       </button> <button class="enregister" @click="increaseconnection" id="bsa">Connect</button></p> 
      <hr id="hsa"> 
      <p class="pp"><button  class="bb"   id="ruffin" @click="ajout">   Ruffin Daniella   <img src="./../assets/profils/selfPicture.png" alt="" >
       </button> <button class="enregister" id="bru" @click="increaseconnection">Connect</button></p>
      <hr id="hru">
      <p class="pp"><button  class="bb" id="laurent"  @click="ajout">   Laurent Panny <img src="./../assets/profils/selfPicture.png" alt="" >
       </button> <button class="enregister" @click="increaseconnection" id="bla">Connect</button></p> 
       
       <hr id="hla"/>
      

    </div>
       
  
         
    
    
    </div>

</template>


<script>
import Profil from './Profil.vue'
export default {
  components:{
   Profil,
  },
  data(){
      let t =this.$store.getters.resultat
      let tableau=[]
      for(let i =0;i<t.length;i++){
          if(t[i].nom.includes(this.$store.getters.keyword)){
              tableau[i]=t[i];
          }
      }
      return {
          result:tableau,
          keyword: this.$store.getters.keyword,
          }
  },methods:{
     ajout(){
       let doc = document.getElementsByTagName("enregistrer") ;
       doc.textContent = "Sent"
      
        
         //
     },increaseconnection(){
         this.$store.state.connections=this.$store.state.connections+1;
           let doc = document.getElementById("resulat") ;
        
             doc.style.display="none"
     },
     choix:function(event){
        this.$store.commit('', event.target.value)
    },
     connection:function(event){
        this.$store.commit('', event.target.value)
    }
         


      
  }
}
</script>
<style>

#profil{
  height: 300px;
  width: 400px;
  background-color:white;
  display: none;
}
.enregister{
  border-color: #047BA6;
  border:solid 0.3px;
  color:#047BA6;
  width: 100px;
  height:40px;
  border-radius: 10px;
  margin-left:2em;
  background-color: white;

}
.bb{
  width:150px;
  height:60px;
margin-right: 18em;
background-color: white;
}
#resultat{
  z-index: 7;
}
</style>
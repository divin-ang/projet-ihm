<template>
    
    <div>
    <div id="whole">
    <img src="./../assets/lin2.png" alt="" id="lin2">
    <P id="make">Make the most of your professional life</P>
    <div id="container">
     <div class="df">
        <label for="first_name">First name</label> <br>
     
        <input type="text" name="first_name" class="theinput" @input="prenom" >
      
      </div>
       <div class="df">
         <label for="last_name" id="l">Last name</label><br>
      
        <input type="text" name="last_name" class="theinput" @input="nom">
    
       </div>

        <div class="df"  id="sub">
        
        <button type="submit" id="submit"><router-link to="/signup-suite/job" id="continue" > Continue</router-link> </button>
    
       </div>
     
    
    </div>
   
     
 
    </div>
    <footUn/>
    </div>
   
</template>
<style scoped>
 #container{

    background-color: white;
     margin:0 auto;
     width: 450px;
     height: 256px;
    
 }
 #whole{
     background-color: #047BA6;
     height:600px;
 }
 input{
     width: 25em;
     height: 2em;
 }
 .df{
     padding-top: 2em;
     text-align: left;
     margin-left: 2em;
     

 }
   #submit{
       width: 25.7em;
        height: 3em;
         background-color: #047BA6;
         border: none;
          margin-left: -0.2em;

   }
   #make{
     color: white;
     font-family:  Arial, sans-serif;
     font-size: 2em;
  
 }
 #continue{
     text-decoration: none;
     color: white;
     font-size: 1.3em;
     font-family: Arial, Helvetica, sans-serif;
     width: inherit;
     height: inherit;
 }
   
</style>

<script>
 // ce composant contient le formulaire de la page  d'inscription Inscription2.vue
    
import FootUn from './FootUn.vue'
export default {
    components:{
        FootUn
      
    },
    methods: {
    prenom: function(event) {
      this.$store.commit('prenom', event.target.value)
    },
    nom:function(event){
        this.$store.commit('nom', event.target.value)
    }
    
     
}}
</script>
<template>
    
    <div>
    <div id="whole">
    <img src="./../assets/lin2.png" alt="" id="lin2">
    <P id="make">Make the most of your professional life</P>
    <div id="container">
    
    <div id="theform">
    
      
    <br>
      <label for="email">Email</label>
     <br>
      <input type="email" id="email" class="theinput" @input="recupererEmail" >
       <br>
     <label for="password">Password (6 or more characters)</label>
      <br>
       <input type="password" id="passeword" class="theinput" @input="recupererPass">
     
      
     
      </div>
      <div id="accept_rules">
       <p>By clicking Agree & Join, you agree to the LinkedIn
      <router-link to="/user_agreement"> User Agreement</router-link>,<router-link to="/privacy_policy"> Privacy Policy</router-link>, and 
      <router-link to="/cookiesPolicy"> Cookies Policy.</router-link> </p>
    
      </div>
     
       <button id="agree" type="submit"> <router-link to="/signup-suite" >Agree & join</router-link></button>
         <p>  Or</p>
         <button id="facebook"><strong id="f">f</strong> Continue with Facebook</button>
    
    </div>
    
    
    </div>
   <FootUn id="rien" />

    </div>
   
</template>
<style scoped>
 #container{

    background-color: white;
     margin:0 auto;
     width: 400px;
     height: 22em;
    
 }
 #rien {
  
 }
 #whole{
     background-color: #047BA6;
     height:43em;
 }
 #make{
     color: white;
     font-family:  Arial, sans-serif;
     font-size: 2em;
  
 }
 #lin2{
     margin-top: 1em;
     background-color: transparent;
     vertical-align : middle;
 }
 .theinput{
     height: 30px;
     width: 350px;
    margin-left: 1.3em;
 }
 label{
     margin-top: 1em;
 }
 #agree,#facebook{
     width: 350px;
      height: 40px;
       border: none;
       color: white;
       font-family: Arial, Helvetica, sans-serif;
       font-size: 1em;
 }
 #agree{
    background-color:  #047BA6;
   
 }
 #facebook{
     background-color: #3A5696;
 }
 #f{
     font-size: 2em;
     font-family: sans-serif;
     margin-right:0.7em ;
 }
 .theform{
    
 }
</style>

<script>
 // ce composant contient le formulaire de la page  d'inscription Form.vue
    
import FootUn from './FootUn.vue'
    
//import io from 'socket.io-client'
export default {
    components:{
        FootUn
    },
    methods:{
         
          recupererEmail: function() {
       
        //socket.emit("emailId",document.getElementById("email").value)

    },
    recupererPass:function(){
       
       // socket.emit("passId",document.getElementById("password").value)
        
    },
    
    
    }
}
</script>
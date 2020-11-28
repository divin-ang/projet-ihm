<template>
<div>
    <img src="./../assets/lin4.png" alt="" id="lin2">
    <h1 id="welcome">Welcome back</h1>
    <h3 id="dont">Don't miss your next opportunity. Sign in to stay updated on your professional world.</h3>
     <form action="http://localhost:3000" method="post">
     <div>
    
      <div class="pass">
      <input type="email" id="email" name="email" placeholder="Email">
      </div>
     
     <div class="pass">
      <input type="password" id="password" name="password" placeholder="Password" >
        <button id="show">Show</button>
     </div>

     <div class="pass" id="submi">
     <button id="sign"> <input type="submit" value="Sign in"></button>
      
     
     </div>
    
       <p>New to Linkendin ?  <router-link to="/signup" id="join"> Join now</router-link></p>
    
    </div>
      
   
   <FootUn  id="footun"/>

     
     </form>
    
  
</div>

</template>


<style scoped>
   #lin2{
      
       width: 8em;
       
   }
   #show{
       border: none;
       width: 20%;
       height:99%;
       background-color: white;
   }
   #sign{
       width:   90px;
       padding:9px;
       background: #0A66C2;
       border:none;
       color :white;
       text-decoration: none;
    font-size:  17px;
   }
   #email,#submit{
       
       border: none;
       width: 99%;
       height: 100%;
   }
   #password{
      
       border: none;
       width :23em;
       height:99%;
       position: relative;
       left :0px;
        
   }
   .pass{
       border-style: solid ;
       width: 25em;
       height: 3em;
       margin-top: 2em;
       margin-left: 33em;
    

   }
   #submi{
       border-radius: 20px;
       background-color: #0A66C2;
       border: none;
       
   }
   #submit{

       height: 80%;
       width: 96%;
       background-color:#0A66C2;
       border: none;
       margin-top: 0.3em;
       color: white;
       font-family: Arial, Helvetica, sans-serif;
       font-size: 17px;
   }
   #join{
       text-decoration: none;
   }
   #welcome{
       color: black;
       font-size: 22px;
       font-family: Arial, Helvetica, sans-serif;
   }
   #dont{
       color:#777;
       font-size: 15px;
       font-family: Arial, Helvetica, sans-serif;
   }
   

</style>
<script>
 // ce composant contient le formulaire de la page  d'authentificatin FormLogin.vue

import FootUn from './FootUn.vue'
export default {
    components:{
        FootUn
    },
    props:{
        pseudo:{},
        nom:{}
    },
    methods:{
       identite:()=>{
           
       }
    }
}
</script>
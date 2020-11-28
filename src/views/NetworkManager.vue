<template>
    
    <div id="containier">
       <div id="presentation">
         <div id="photo">
       
         </div> 
           <p id="name"> {{$store.getters.first_name}} {{$store.getters.last_name}}</p>
         <p id="pres" >Manage your network  </p> 
        <router-link to="/signup-suite" class="conn"> Connections   0 </router-link><br>
        <router-link to="/signup-suite" class="conn">    Contacts   0</router-link>
        <router-link to="/signup-suite" class="conn">  Pages   0 <br>   Grow your network</router-link><br>
        <router-link to="/signup-suite" class="conn">  Groupes  0</router-link>
        <router-link to="/signup-suite" class="conn">  Newsletter</router-link>
         
         
         <hr class="ligne"> 
         
         
        
         
         <hr>

       </div>
    
    
     </div>
</template>
<style>
     #presentation{
         width: 14em;
         height: 27em;
         background-color: white;
         border:solid 1px;
         border-color: #a4b4b4;
         border-radius: 10px;
     }
     #photo{
            background-color:#a4b4b4;
            width: 14em;
            height: 3em;
            border-radius: 8px;
     }
     .conn{
         text-align: left;
     }
</style>
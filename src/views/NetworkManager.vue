<template>
    
    <div id="containier">
       <div id="presentation">
         <div id="photo">
       
         </div> 
           <p id="name"> {{$store.getters.first_name}} {{$store.getters.last_name}}</p>
         <p id="pres" >Manage your network  </p> 
         <p id="cnet">   <router-link to="/network" class="conn"> Connections </router-link><br></p>
      <p></p>
      <p id="ccon">  <router-link to="/network" class="conn">    Contacts   0</router-link></p>
     
       <p id="cg" >  <router-link to="/development" class="conn">  Newsletter</router-link></p> 
       
       
         
         
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
     #cnet{
       margin-right: 5em;
     }
     #ccon{
         margin-right: 6em;
     }
     #cg{
       padding-right: 6em;
     }
</style>
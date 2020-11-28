<template>
    
    <div id="containier">
       <div id="presentation">
         <div id="photo">
            <img src="./../assets/profils/selfPicture.png" alt="" id="ph">
         </div> 
           <p id="name">{{$store.getters.first_name}} {{$store.getters.last_name}}</p>
         <p id="pres" >
          {{$store.getters.description}}
            {{$store.getters.keyword}}
         
         </p> 
         <hr class="ligne"> 
         <router-link to="/signup-suite" class="conn"> Connections{{$store.getters.connections}}  <br>   Grow your network</router-link><br>
        <router-link to="/signup-suite" class="conn">    Who viwed your profile    0</router-link>
         
        
         
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
     #ph{
       padding-top: 8px;
     }
     .conn{
         text-align: left;
     }
</style>
<script>
export default {
  
}
</script>
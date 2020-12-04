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
         <p id="c">
          <router-link to="/network" class="conn" id="c"> Connections      {{$store.getters.connections}}    </router-link>
         </p>
         <p id="g"> <router-link to="/network" class="conn" id="w"> Grow your network </router-link></p>
        
         <p id="w">
         <router-link to="/network" class="conn" id="w"> Who viwed your    profile    0</router-link>
         </p>
         
         
         
        
         
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
         text-decoration: none;
         padding-top: 2em;
         color: black;
       

     }
     #c{
       margin-right: 3.5em;
     }
     #g{
       margin-right: 4em;
     }
     #w{
       margin-right: 1.2em;
     }
     
</style>
<script>
export default {
  
}
</script>
<template>
    
    <div id="container">
   
        <Menue id="menu" />
             <div class="press-post">
             <NetworkManager id="pres" />
               </div>
               <div id="j">
                   <Pending />
               </div>
          
    
    </div>
</template>
<style>
#j{
    
   
      float: right;
      margin-right:38.7em;
      

}
.press-post{

  float: left;
    
    
}
 #container{
     background-color: yellowgreen;
 }

</style>
<script>
import Menue from './Menue.vue'


import NetworkManager from './NetworkManager.vue'
import Pending from './Pending.vue'

export default {
    components:{
        Menue,
      
        
        NetworkManager,
        Pending
    }
}
</script>
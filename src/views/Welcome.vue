<template>
    
    <div id="container"   class="u">
     <div id="coller">
     <Menue id="menu"  class="u"/></div>
        
             <div class="press-post">
             <Presentation id="pres" />
               </div>
               <div id="j">
              
                   <Post />
                    
                   
                  

               </div>
           <div id="chat">
            
              <Finish />
            </div>
    
    </div>
</template>
<style>
#j{
    
   
      float: right;
      margin-right:38.7em;
      

}
#container{
    margin-bottom: 10em;
}

#chat{
    
    float: right;
    padding-top: 10em;
    position: fixed;
    margin-left:60em;
  
    
   
 
}

#ch{
      border: solid;
      background-color:white;
       height: 300px;
       width: 250px;
       border-color:#ddd;
}#coller{
    padding-top: -100em;
}
.press-post{

  float: left;
    margin-top: 10em;
            
    
}


</style>
<script>
import Menue from './Menue.vue'
import Presentation from './Presentation.vue'
import Post from './Post.vue'

import Finish from './Finish.vue'


export default {
    components:{
        Menue,
        Presentation,
        Post,
        Finish,
        
   
    },
    methods:{
        
    }
}
</script>
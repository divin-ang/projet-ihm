<template>
    
    <div id="footUn">
    <nav>

     <div id='foot-routes'>
          <img src="./../assets/lin3.png">
     </div>
     
     <router-link to="/about" class="i">About</router-link>
     <router-link to="/about" class="i">User Agreement</router-link>
         <router-link to="/about" class="i">Privacy Policy</router-link>
           <router-link to="/about" class="i">Cookie Policy</router-link>
             <router-link to="/about" class="i">Copyright Policy</router-link>
              <router-link to="/about" class="i">Brand Policy</router-link>
               <router-link to="/about" class="i">Copyright Policy</router-link>
                <router-link to="/about" class="i">Guest controls</router-link>
                <router-link to="/about" class="i">commuty Guideness</router-link>
          

    
    
      
            <select name="Langages" id="" class="i" >
              <option value="">Langues</option>
               <option value="english">English</option>
                <option value="espagnol">Espagnol</option>
                 <option value="chinois">français</option>
              </select>
        
    
    
    </nav>
    
    </div>

</template>
<script>
export default {
    // ce composant constitu le pied de page de la page d'inscription Form.vue
    // il est  utilisé dans le composant Form.vue
    
}
</script>
<style  scoped>
#footun{
    background-color: white;
   
  
    
}
.i{
 text-decoration: none;
 font-size: 12px;
 margin-left: 10px;
 color: #666;
  text-align: left;
}
.i:hover{
    text-decoration: underline;
}
#foot-routes{
    
      margin-left: auto;
      float: left;
      
       
}
img{
    position:left;
}
</style>
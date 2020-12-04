<template>
    
    <div id="tout">
     
     <div id="main">
     <button id="post" v-on:click="afficherFormulaire"> <img src="./../assets/pen.png"> start a post
     </button>
     <div id="photos" >
     <img   src="./../assets/photos.png">
          
 
      
         
     </div>
     <hr > 
     
    
     
      <div id="fil">
      
      <iframe class="" width="480" height="315" src="https://www.youtube.com/embed/zJMtaS_ABv0" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      
      <img  class="videos" width="480" src="./../assets/photofil.png" alt="">
      <iframe  class="videos" width="480" height="315" src="https://www.youtube.com/embed/yFRpZAepVxM" frameborder="0" allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
      </div>
    </div>
     
    
      
    <div id="thePost" @dblclick="finPost">
     <label for="post">Create a post</label>
      <p id="nom">name</p>
     <textarea @input="poster"  name="post" id="post-text" placeholder="What do you want to talk about ?" > </textarea>
     <button type="submit"  id="bouton-post"  @click="finPost" >post </button>
      
        </div>


       
    </div>
   

</template>

<style>
   #main{
        width: 30em;
        height: 100em;
        border: solid 1px;
          border-radius: 10px;
          position: absolute;
          margin-top: 10em;
          margin-left: -30em;
          z-index: 0;
    }
   
    #photos{
        padding-top: 5em;
        height: 0.0000001%;
      
       
    }
    button{
         border: none;
         width: 80px;
         margin-left: 2em;
    }
    #thePost{
        display: none;
        width: 28em;
        height: 25em;
        border:solid 3px;
        z-index: 4;
        position: relative;
        border-color: #EEE;
        margin-left: -23em;
        margin-top: 5em;
        background-color: white;
    }
    #post{
        width: 31em;
        height: 3.7em;
        border-radius: 10px;
        margin-top: 2em;
        border: none;
       
    }
    #bouton-post{

        margin-left: 23em;
        margin-top: 10em;
        width: 6em;
        height: 2em;
        border-radius: 10px;
        border:none;
       


    }#hr{
        margin-bottom: 4em;
    }
    
    #menu{
        position: fixed;
        z-index: 7;
        width: 1500px;
        margin-right:10em ;
     
        
    }
    #post-text{
         width: 31em;
        height: 3.7em;
        border-radius: 10px;
    }
    #fil{
       width: 30em;
        height: 100%;
       position: absolute;
       
        z-index: 1;
    }
    hr{
        margin-top: 3em;
    }
    .videos{
        padding-top: 2em;

    }
</style>
<script>
 import Profil from './Profil.vue'
export default {
    component:{
        Profil,
    },
    methods:{
      
      

        
        afficherFormulaire(){
       
       
       document.getElementById("thePost").style.display='block';

       document.getElementById("menu").style.zIndex="1";
       document.getElementById("pres").style.zIndex="1"
        
         document.getElementById("thePost").style.zIndex="2";
   
      

    
    
    document.getElementById("thePost").style.backgroundColor="white"
        

   
   


},
  poster(){
      let bouton = document.getElementById("bouton-post");
      
     
        
         
          bouton.style.backgroundColor='#047BA6'
          bouton.style.color="white"
            
      

      
    
  },
      finPost(){
          document.getElementById("thePost").style.display='none';
          console.log("rien")
         
        
     
        
      }

    }
}
</script>
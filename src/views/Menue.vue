<template>
    
    <div id="containe" @dblclick="annuler" class="u">
        <nav id="nav"> 
       
        
      
          <div class="nav-item">
         
         
           <th id="kos"><img id="" src="./../assets/lin6.png" alt="" >  
          <button id="chercher">🔍 </button>  <input type="text" id="rechercher" @click="afficherResultat" @dblclick="augmenter"  @input="diminuer" placeholder="search" ></th>
          
         
           <Resultat id="resultat"/>
         </div>
               
                <router-link to="/welcome"    class="routes"><img id="ih" src="./../assets/home.png" alt=""></router-link>
                 
                <router-link   to="/network" class="routes"><img id="in" src="./../assets/network.png"  alt=""></router-link>
                 <router-link to="/development"  class="routes"><img id="ij"  src="./../assets/job.png"></router-link>
                   <router-link to="/development"   class="routes"><img  id="inot" src="./../assets/notification.png"></router-link>

                




        </nav>
            
           </div>
        
          
           
        
        
    
  
</template>

<style >
   
     .nav-item{
         display: inline;
         margin-right: 4em;
  
         
        
        
     }


     
     #nav{
        
         z-index: 19;
         height: 60px;
        background-color:#ffe;
         height: 40px;
         margin-top: 1.3em;
           
        
         
       
        
        
     }
     .routes{
          margin-right: 3em;
          border: none;
          background-color: white;
         
         
     }#ih,#in,#inot,#ij{
         width: 70px;
         height: 45px;
         margin-top: 0.2em;
         margin-right: 0;
         
     }
     #chercher{
         margin-right: 0em;
          background-color:#eee;
          width: 2em;
         height: 2.8em;
         
     }
     #lin{
      
          margin-right: 30em;
          background-color:white;
          
          padding-top: -3em;
          
     }
     #resultat{
    display: none;
        width: 36em;
        height: 30em;
        border:solid 3px;
        z-index: 8;
        position: fixed;
        border-color: #EEE;
      
        margin-top: 1em;
        background-color: white;

}
     #rechercher{
         border:none;
        
         width: 20em;
         height: 2.6em;
        
        margin-right: 20em;
         background-color:#eee;
        
       
     }
    
</style>
<script>
import Resultat from './Resultat.vue'
export default {
    methods: {
    resulter: function(event) {
      this.$store.commit('resulter', event.target.value)
    },
    diminuer(){
        
   //////////////////////////////////////////////////////////////////:// 
        
     
                   
            
               
        
        //////////////////////////////////////////
        
    let ruffin = document.getElementById("ruffin");
let laurent =  document.getElementById("laurent");
       let sauna =  document.getElementById("sauna");
       let ran =  document.getElementById("ran");

        let text = document.getElementById("rechercher")
        if(!ruffin.textContent.toLowerCase().includes(text.value.toLowerCase())){
          ruffin.textContent=""
          document.getElementById("hru").style.display="none"
          document.getElementById("bru").style.display="none"

        }
        if(ruffin.textContent==""&& "Ruffin Daniella".toLowerCase().includes(text.value.toLowerCase()) ){
            ruffin.textContent="Ruffin Daniella"
            document.getElementById("bru").style.display="inline"
             document.getElementById("hru").style.display="inline"
          

        }
        if(!sauna.textContent.toLowerCase().includes(text.value.toLowerCase())){
           sauna.textContent=""
          document.getElementById("hsa").style.display="none"
          document.getElementById("bsa").style.display="none"

        }

         if(sauna.textContent==""&& "Sauna emile".toLowerCase().includes(text.value.toLowerCase()) ){
            sauna.textContent="Sauna emile "
            document.getElementById("bsa").style.display="inline"
             document.getElementById("hsa").style.display="inline"
          

        }
        if(!laurent.textContent.toLowerCase().includes(text.value.toLowerCase())){
             laurent.textContent=""
          document.getElementById("hla").style.display="none"
          document.getElementById("bla").style.display="none"
        }
          if(laurent.textContent==""&& "Laurent Panny".toLowerCase().includes(text.value.toLowerCase()) ){
            laurent.textContent="Laurent Panny"
            document.getElementById("bla").style.display="inline"
             document.getElementById("hla").style.display="inline"
          

        }
          if(!ran.textContent.toLowerCase().includes(text.value.toLowerCase())){
             ran.textContent=""
          document.getElementById("bra").style.display="none"
        
        }
       
          
        
    
        
    },augmenter(){
           let result = this.$store.getters.resultat;
         let lesr = document.getElementsByClassName('pp')
         let rec= document.getElementById("recherche").value
       console.log(result)
        for(let i=0;i<result.length;i++){
             rec= document.getElementById("recherche").value
             console.log(result[i].prenom+' '+result[i].nom)
            if((result[i].prenom+' '+result[i].nom).toLowerCase().includes(rec)){
                   let present =false
               
                 for(let j=0;j<lesr.length;j++){
                     
                    if((result[j].prenom+' '+result[j].nom).toLowerCase()
                    ===lesr[j].textContent.toLowerCase()){
                        present =true;

                    }
                 }
                 if(present==false){
                 let p =document.createElement("p")
                 p.setAttribute("class","pp")
                   p.textContent=result[i].prenom+" "+result[i].nom;
                   document.getElementById("ppdiv").appendChild(p);
                
               
                 }
               
                   
            }
               
        }

    },
    annuler(){
         let doc = document.getElementById("resultat");
         doc.style.display='none'
         document.getElementById("tout").style.display="block"
        
          document.body.style.backgroundColor="white"
           
        
             document.getElementById("presentation").style.zIndex='1'
           
    

    },
    afficherResultat(){
         let doc = document.getElementById("resultat");
          document.getElementById("tout").style.display="none"
         doc.style.display='block'
         
        
         
         
        
         
           
           
        
             document.getElementById("presentation").style.zIndex='1'
         
    

        },
        trierResultat(){
            this.$store.commit('trierResultat', event.target.value)
        },
        resultatInter(){
             this.$store.commit('resultatInter', event.target.value)

        }
    },
    components:{
        Resultat
    }
    
}
</script>
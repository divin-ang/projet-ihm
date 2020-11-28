<template>
    
    <div id="containe" @dblclick="annuler" class="u">
        <nav id="nav"> 
       
        
      
          <div class="nav-item">
          
          <img id="lin" src="./../assets/lin6.png" alt="" >
          <button id="chercher">🔍 </button>
          <input type="text" id="recherche" @click="afficherResultat" @dblclick="augmenter"  @input="diminuer" >
           <Resultat id="resultat"/>
         </div>
               
                <router-link to="/welcome"    class="routes"><img id="ih" src="./../assets/home.png" alt=""></router-link>
                 
                <router-link   to="/network" class="routes"><img id="in" src="./../assets/network.png"  alt=""></router-link>
                 <router-link to="/signup-suite"  class="routes"><img id="ij"  src="./../assets/job.png"></router-link>
                   <router-link to="/signup-suite"   class="routes"><img  id="inot" src="./../assets/notification.png"></router-link>

                




        </nav>
            
           </div>
        
          
           
        
        
    
  
</template>

<style >
   
     .nav-item{
         display: inline;
         margin-right: 15em;
        
        
     }
     #nav{
         background-color:#eee;
         z-index: 7;
         height: 60px;
         
        
        
     }
     .routes{
          margin-right: 3em;
          border: none;
          background-color: white;
         
         
     }#ih,#in,#inot,#ij{
         width: 70px;
         height: 50px;
         
     }
     #chercher{
         margin-right: 0em;
          background-color:white;
          width: 2em;
         height: 2.8em;
     }
     #lin{
      
          margin-right: 10em;
          background-color:white;
          
         padding-top: -3em;
          
     }
     #resultat{
    display: none;
        width: 26em;
        height: 25em;
        border:solid 3px;
        z-index: 8;
        position: fixed;
        border-color: #EEE;
        margin-left: 13em;
        margin-top: 1em;
        background-color: white;

}
     #recherche{
         border:none;
         background-color:white;
         width: 20em;
         height: 2.6em;
        
       
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
        
        let resultat = document.getElementsByClassName("pp");
        let rech = document.getElementById("recherche")
       let t=[]
        let r = rech.value.toLowerCase()
        for(let i=0;i<resultat.length;i++){
            if(! resultat[i].textContent.toLowerCase().includes(r)){
                t[i]=resultat[i].textContent
                  resultat[i].textContent='';
                   
            }
               
        }
        //////////////////////////////////////////
        
    let liste = this.$store.state.resultat;
    let present = false;
    for (let i =0;i<liste.length;i++){
        if(liste[i].prenom+' '+liste[i].nom.toLowerCase()
        .includes(document.getElementById("recherche").value)
        ){
            for(let j=0;j< document.getElementsByClassName("pp").length;j++){
                if(document.getElementsByClassName("pp")[j].textContent.includes(liste[i].prenom)){
                    present = true;
                }
            }
          if(!present){
               let p =document.createElement("p")
               let img=document.createElement("img")
                img.setAttribute("src","./../assets/profils/selfPicture.png ")
                 p.setAttribute("class","pp")
                   p.textContent=liste[i].prenom+" "+liste[i].nom;
                 
                   document.getElementById("ppdiv").appendChild(p);

          }
        }
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
<template>
    <div  id="dive">
     <div id="cansel">
      <p>Do you want to cansel your invitation ?</p>
      <button id="yes" @click="yes">Yes</button> <button id="no" @click="no">No</button>
     </div>
    <div  id="supp">
     <p class="pp"><button  class="bb"  >  Sauna emile    <img src="./../assets/profils/selfPicture.png" alt="" >
       </button> <button id="en1" @click="ajout" >Connect</button></p> 
      <hr>
       <p class="pp"><button  class="bb"   >  Maurine Dan  <img src="./../assets/profils/selfPicture.png" alt="" >
       </button> <button id="en2"  @click="ajout1" >Connect</button></p> 
      <hr>
    
    
      <p class="pp"><button  class="bb"  >   Sandra kaz   <img src="./../assets/profils/selfPicture.png" alt="" >
       </button> <button id="en3"  @click="ajout2">Connect</button></p> 
      <hr>
    
    
    </div>
       
  
         
    
    
    </div>

</template>


<script>

export default {
  components:{
  
  },
  data(){
      let t =this.$store.getters.resultat
      let tableau=[]
      for(let i =0;i<t.length;i++){
          if(t[i].nom.includes(this.$store.getters.keyword)){
              tableau[i]=t[i];
          }
      }
      return {
          result:tableau,
          keyword: this.$store.getters.keyword,
          }
  },methods:{
     ajout(){
      if( document.getElementById("en1").textContent=="Sent")
           document.getElementById("en1").textContent="Connect"
      else
       document.getElementById("en1").textContent="Sent"

        
         //
     },ajout1(){
        if( document.getElementById("en2").textContent=="Sent"){
         let doc = document.getElementById("cansel");
         let doc2 = document.getElementById("supp")
         doc2.style.display="none"
         document.body.style.backgroundColor="#222"
         doc.style.backgroundColor="white"
         document.getElementById("presentation").style.filter='brightness(10%)'
         document.getElementById("nav").style.filter='brightness(10%)'
          doc.style.display="block"

          document.getElementById("en2").textContent="Connect"
        }
           
          else
         document.getElementById("en2").textContent="Sent"
     },ajout2(){
        if( document.getElementById("en3").textContent=="Sent")
             document.getElementById("en3").textContent="Connect"
        else
        document.getElementById("en3").textContent="Sent"
     },no(){
        
         let doc = document.getElementById("cansel");
         let doc2 = document.getElementById("supp")
          document.body.style.backgroundColor=""
        
         document.getElementById("presentation").style.filter='brightness(100%)'
         document.getElementById("nav").style.filter='brightness(100%)'
         doc2.style.display="block"
          doc.style.display="none"
          document.getElementById("en2").textContent="Sent"

     },yes(){
       
         let doc = document.getElementById("cansel");
         let doc2 = document.getElementById("supp")
          document.body.style.backgroundColor=""
        
         document.getElementById("presentation").style.filter='brightness(100%)'
         document.getElementById("nav").style.filter='brightness(100%)'
         doc2.style.display="block"
          doc.style.display="none"
          document.getElementById("en2").textContent="Connect"

     },
     choix:function(event){
        this.$store.commit('', event.target.value)
    },
     connection:function(event){
        this.$store.commit('', event.target.value)
    }
         


      
  }
}
</script>
<style>

#profil{
  height: 300px;
  width: 400px;
  background-color:white;
  display: none;
}
.connect,#en1,#en2,#en3,#en4,#yes,#no{
  border-color: #047BA6;
  border:solid 0.3px;
  color:#047BA6;
  width: 100px;
  height:40px;
  border-radius: 10px;
  margin-left:2em;
  background-color: white;

}
.bb{
  width:150px;
  height:60px;
margin-right: 18em;
background-color: white;
}
#resultat{
  z-index: 7;
}
#cansel{
  width: 350px;
  height: 150px;
  z-index: 12;
  display: none;
  margin-top: 7em;
  border:solid;
  border-color: blanchedalmond;
}

</style>
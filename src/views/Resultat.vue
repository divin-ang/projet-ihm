<template>
    <div>
    <div v-for="item in result" :key="item.nom" id="ppdiv">
      <p class="pp" @click="ajout">  {{ item.prenom}}      {{item.nom}}    <img src="./../assets/profils/selfPicture.png" alt="">
      </p>
    
    </div>
       
  
         
    
    
    </div>

</template>


<script>

export default {
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
          this.$store.state.connections=this.$store.state.connections+1;
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
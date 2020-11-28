<template>
    
    <div id="whole">
          <div id="lin4">
          <img src="./../assets/lin4.png" alt="" >
          </div>
         
         <div id="your">
             <h1>
             Your profile helps you discover the <br> right people and opportunities

             </h1>
              <div class="inp">
              <label for=""> Most recent job title</label><br>
             <input type="text" name="job" id="job" required><br>
              </div>
              <div class="inp">
               <label for="job_list">Employment type</label><br>
              <select name="job_list" id="" class="job_list" aria-placeholder="select one" >
              <option value="">Select one</option>
               <option value="internship">internship</option>
                <option value="freelance">Freelance</option>
                 <option value="webDevelopper">web developper</option>
                 <option value="teacher">teacher</option>
              </select>

              
              </div>
             
            
             <div>
             <div class="inp">
             <label for="company">Most recent company</label><br>
              <input type="text" name="company" id="company" required><br>
              </div>
              <div class="inp">
               <label for="industrie">Employment type</label><br>
              <select name="industrie" id="" class="industrie" aria-placeholder="select one" >
              <option value="">Select one</option>
               <option value="animation" >annimation</option>
                <option value="computer science">computer science</option>
                 <option value="agriculture">agriculture</option>
                 <option value="communication">communication</option>
              </select><br>
              </div >
               <div class="inp">
                   <label for="industrie">Description</label><br>
                   <textarea name="description" id="description" cols="54" rows="6" @input="decrire"></textarea>
               </div>
             <div id="contdiv">
               <button type="submit"   id="submit"><router-link to="/welcome" id="continue">Continue </router-link> </button>
    
             
             </div>

            
             
             </div>
         </div>
    
    </div>
</template>
<style scoped>
#whole{
    position: absolute;
}
#lin4{
    position: relative;
    left: 100px;
    width: 130px;
}
#your{
   margin-left: 7em;
  
}
.inp{
    padding-top: 1.5em;
    font-size: 13px;
    
}
input{
    width: 30em;
    height: 2em;
}
select{
     width: 30em;
    height: 2.4em;
}
#continue{
    padding-top: 2em;
    text-decoration: none;
   
}
#contdiv{
    padding-top: 2em;
     
}
</style>


<script>
export default {
     methods: {
    decrire: function(event) {
      this.$store.commit('decrire', event.target.value)
    }
     }
}
</script>
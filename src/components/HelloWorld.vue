<template>
  
  <div>
  <nav>
  <img src="./../assets/lin.png" alt="">
  <div id="join-sign">
    <router-link to="/signup"><button class="js">Join now</button></router-link> 
    <router-link to="/login"> <button class="js">Sign in</button></router-link>
    
  </div>
   
  </nav>
  <div id="covid-info">
    <h1 id="help">Help and ressources during the COVID-19 outbreak</h1>
  </div>
  <div id="partie1">
    <p id="text">Welcome to your <br> professional community</p>
  </div>

   <div id="partie2">
   
  <img src="./../assets/imageA.png" alt="">
  
  </div>
  
  
  </div>
</template>

<style  scoped>

 #join-sign{
    float: right;
       
 }
 .js{
     border: none;
     margin-left: 2em;
     margin-right:3em;
     height: 3em;
     width: 8em;
     background-color: transparent;
 }
#covid-info{
  background-color: gray;
 
  
  

}
#partie1{
 
  height: 900px;
  float: left;
}
#text{
    font-size: 3em;
    margin-left: 2em;
    color:#047BA6;
}
#partie2{
 
  height: 900px;
  float:right;
}
#help{
  padding-top:10px;
  padding-bottom: 10px;
}

</style>
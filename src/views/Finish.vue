<template>
    

    <div id="containier">
       <div id="present" >
         <div >
            <img src="./../assets/profils/selfPicture.png" alt="" class="ph">
            <img src="./../assets/jobss.png" alt="" class="ph">
             <p id="name">{{$store.getters.first_name}}, get candidates now</p>
             <button id="fpost">Finish your post</button>
         </div> 
          
       
         
       
       
        
     

       </div>
    
    
     </div>
</template>
<style scoped>
#present{
       width: 14em;
        
         background-color: white;
         border:solid 1px;
         border-color: #a4b4b4;
         border-radius: 10px;
         margin-right: 9em;
         height: 260px;
         width: 300px;
}
#fpost{
    width: 150px;
    border: solid;
    border-color:#047BA6 ;
    color: #047BA6;
    border-radius: 10px;
    height: 40px;
}
.ph{
    width: 80px;
    padding-top:3em;
    margin-right: 1.3em;
    height: 6em;
}
</style>

<template>
    
    <div id="">
       <button id="btnImg"><img src="./../assets/profils/selfPicture.png" alt="" ></button>
     <p style="font-size:2em;"> Sauna Emile</p>
    
    </div>
</template>
<script>
export default {
    data(){
        return {
            nom:this.$store.state.choisie
        }
    }
}
</script>
<style>
#btnImg{
    margin-top:4em;
    width: 9em;
    heigth:4em;
}

 </style>
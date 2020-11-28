<template>
    
    <div>
     <p>{{nom}}</p>
    
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
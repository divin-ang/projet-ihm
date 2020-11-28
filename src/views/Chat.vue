}
JavaScript
<template>
  <div>
     
   </div>
</template>
<script>

export default {
  components: {
  
  },
  data(){
    return {
      participants: [
        {
          name: 'divin',
          id: 1
        },
        {
          name: '',
          id: 2
        }
      ],
      myself: {
        name: '',
        id: 3
      },
      messages: [
        {
          content: 'received messages', 
          myself: false,
          participantId: 1,
          timestamp: { year: 2019, month: 3, day: 5, hour: 20, minute: 10, second: 3, millisecond: 123 }
        },
        {
          content: 'sent messages', 
          myself: true,
          participantId: 3,
          timestamp: { year: 2019, month: 4, day: 5, hour: 19, minute: 10, second: 3, millisecond:123 }
        },
        {
          content: 'other received messages', 
          myself: false,
          participantId: 2,
          timestamp: { year: 2019, month: 5, day: 5, hour: 10, minute: 10, second: 3, millisecond: 123 }
        }
      ],
      chatTitle: 'Le chat',
      placeholder: 'send your message',
      colors:{
        header:{
          bg: 'white',
          text: '#fff'
        },
        message:{
          myself: {
            bg: '#fff',
            text: '#bdb8b8'
          },
          others: {
            bg: '#fb4141',
            text: '#fff'
          }
        },
        submitIcon: '#b91010'
      },
      borderStyle: {
        topLeft: "10px",
        topRight: "10px",
        bottomLeft: "10px",
        bottomRight: "10px",
      },
      hideCloseButton: false,
      submitIconSize: 20,
      closeButtonIconSize: "20px"
    }
  },
  methods: {
    onType: function (event){
      console.log(event)
    },
    onMessageSubmit: function(message){
     console.log(message)
    }
  }}
</script>
<style lang="scss">


</style>
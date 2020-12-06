<template>
  
  <div id="c">
  <h1 class="headline">Vue.js Chat Box</h1>


  <section ref="chatArea" class="chat-area">
   
   
  </section>

  <section class="chat-inputs">

    <form>
      <label for="person1-input">Bob</label>
      <input v-model="bobMessage" id="person1-input" type="text" placeholder="Type your message">
      <button type="submit">Send</button>
    </form>
<button >Clear All</button>
    <form id="person2-form">
      <label for="person2-input">You</label>
      <input v-model="youMessage" id="person2-input" type="text" placeholder="Type your message">
      <button type="submit">Send</button>
    </form>
  </section>

  
  </div>
</template>
<style>

#c {
  font-family: sans-serif;
  font-weight: 100;
background:gray;  
width: 400px;
}
.headline {
  text-align: center;
  font-weight: 100;
  color: white;
}
.chat-area {
/*   border: 1px solid #ccc; */
  background: white;
  height: 50vh;
  padding: 1em;
  overflow: auto;
  max-width: 350px;
  margin: 0 auto 2em auto;
  box-shadow: 2px 2px 5px 2px rgba(0, 0, 0, 0.3)
}
.message {
  width: 45%;
  border-radius: 10px;
  padding: .5em;
/*   margin-bottom: .5em; */
  font-size: .8em;
}
.message-out {
  background: #407FFF;
  color: white;
  margin-left: 50%;
}
.message-in {
  background: #F1F0F0;
  color: black;
}
.chat-inputs {
  display: flex;
  justify-content: space-between;
}
#person1-input {
  padding: .5em;
}
#person2-input {
  padding: .5em;  
}

</style>
<script>
export default {

  data() {
    return {bobMessage: '',
    youMessage: '',
    messages: [
      {
        body: 'Welcome to the chat, I\'m Bob!',
        author: 'bob'
      },
      {
        body: 'Thank you Bob',
        author: 'you'
      },
      {
        body: 'You\'re most welcome',
        author: 'bob'
      }
    ]}
  },
  methods: {
    
  }

}
</script>>
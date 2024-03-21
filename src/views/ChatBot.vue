<template>
  <div class="title">
    <h1>Ask Beyond Bot</h1>
  </div>
  <main class="mainContainer">
    <div class="messagesContainer">
      <div class="messageBox">
        <template v-for="(message, index) in messages" :key="index">
          <div
            :class="
              message.from == 'user' ? 'messageFromUser' : 'messageFromOpenAI'
            "
          >
            <div
              :class="
                message.from == 'user'
                  ? 'userMessageWrapper'
                  : 'openAIMessageWrapper'
              "
            >
              <div
                :class="
                  message.from == 'user'
                    ? 'userMessageContent'
                    : 'openAIMessageContent'
                "
              >
                {{ message.data }}
              </div>
            </div>
          </div>
        </template>
      </div>

      <div class="inputContainer">
        <input
          v-model="currentInput"
          type="text"
          class="messageInput"
          placeholder="Ask away..."
        />
        <button @click="sendMessage(currentInput)" class="askButton">
          Ask
        </button>
      </div>
    </div>
  </main>
</template>

<script>
import axios from "redaxios";

export default {
  name: "ChatBot",
  data() {
    return {
      currentInput: "",
      messages: [],
    };
  },
  methods: {
    async sendMessage(message) {
      this.messages.push({
        from: "user",
        data: message,
      });
      await axios
        .post("https://chatbot-backend-04h8.onrender.com/chatbot", {
          userInput: message,
        })
        .then((response) => {
          this.messages.push({
            from: "openAI",
            data: response.data.data,
          });
        });
    },
  },
};
</script>

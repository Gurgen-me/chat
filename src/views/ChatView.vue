<template>
    <v-container class="fill-height d-flex flex-column">
        <v-row class="fill-height pb-14 chatBox" align="end">
            <v-col>
                <template v-for="item in chat" :key="index">
                    <MsgItem :item="(item as ChatMessage)" />
                </template>
            </v-col>
        </v-row>
        <v-row no-gutters fixed>
            <v-col>
                <InputMsg @add="send" />
            </v-col>
        </v-row>
    </v-container>
</template>
<script lang="ts">
import { defineComponent } from 'vue'
import MsgItem from '@/components/Chat/MsgItem.vue';
import ChatMessage from '@/components/Chat/ChatMessageInterface'
import InputMsg from '@/components/Chat/InputMsg.vue';


export default defineComponent({
    components: {
        MsgItem,
        InputMsg,
    },
    data() {
        return {
            chat: [
                { id: 1, msg: "Привет", from: "Rahiv", time: "" }
            ] as Array<ChatMessage>
        }
    },
    methods: {

        send: function (inputMsg: string) {
            let date = new Date();
            this.chat.push({
                id: Date.now(),
                msg: inputMsg,
                from: "user",
                time: date.getHours() + ':' + date.getMinutes()
            })

            this.testReply();
        },
        testReply: function () {
            let date = new Date();
            this.chat.push({
                id: Date.now(),
                msg: "Test message",
                from: "Tester",
                time: date.getHours() + ':' + date.getMinutes()
            })
        },
    },

})
</script>
<style>
.v-container.fill-height {
    align-items: normal;
    display: flex;
    flex-wrap: nowrap;
}

.chatBox {
    overflow: auto;
    max-height: 85vh;
}

.chatBox::-webkit-scrollbar {
    width: 10px;
    background-color: #f9f9fd;
}

.chatBox::-webkit-scrollbar-thumb {
    border-radius: 10px;
    background-color: #18aaaa;
}

.chatBox::-webkit-scrollbar-track {
    -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.2);
    border-radius: 10px;
    background-color: #f9f9fd;
}
</style>
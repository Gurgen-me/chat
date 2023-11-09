<template lang="">
    <v-card>
      <v-tabs
        v-model="tab"
        color="deep-purple-accent-4"
        align-tabs="center"
      >
        <v-tab :value="1">Активные</v-tab>
        <v-tab :value="2">Архив</v-tab>
      </v-tabs>
  
      <v-window v-model="tab">
          <v-window-item value="1">
              <v-row>
                  <template v-for="ticket in tickets" :key="ticket.id">
                      <v-col v-show="ticket.status == 'Created' || ticket.status == 'Working'">
                          <TicketCard :ticket="ticket" />
                      </v-col>
                  </template>
              </v-row>
          </v-window-item>
          <v-window-item value="2">
              <v-row>
                  <template v-for="ticket in tickets" :key="ticket.id">
                      <v-col v-show="ticket.status == 'Done'" >
                          <TicketCard :ticket="ticket" />
                      </v-col>
                  </template>
              </v-row>
          </v-window-item>
      </v-window>
  
    </v-card>
    </template>
<script lang="ts">
import { defineComponent } from 'vue'
import TicketCard from '@/components/Home/TicketCard.vue'
export default defineComponent({
    components: {
        TicketCard,
    },
    data() {

        return {
            userType: '' as String,
            tab: null,
            tickets: [
                {
                    id: 1,
                    summary: "Stuck keyboard",
                    content: "My keyboard is stuck!!!",
                    priority: "MED",
                    status: "Working",
                    create_date: "2023-10-24T13:11:20.000Z",
                    update_date: "2023-10-24T14:16:34.000Z",
                },
                {
                    id: 2,
                    summary: "Dead PC",
                    content: "My pc is DEAD!",
                    priority: "HIGH",
                    status: "Created",
                    create_date: "2023-10-24T13:11:20.000Z",
                    update_date: "2023-10-24T14:16:34.000Z",
                },
                {
                    id: 3,
                    summary: "Lags in program",
                    content: "Some programs lags in VS CODE",
                    priority: "LOW",
                    status: "Done",
                    create_date: "2023-10-24T13:11:20.000Z",
                    update_date: "2023-10-24T14:16:34.000Z",
                },
                {
                    id: 4,
                    summary: "Broken mouse",
                    content: "I think my mouse is broken",
                    priority: "MED",
                    status: "Done",
                    create_date: "2023-10-24T13:11:20.000Z",
                    update_date: "2023-10-24T14:16:34.000Z",
                },
                {
                    id: 5,
                    summary: "Frozen PC",
                    content: "My pc is frozen!!!",
                    priority: "LOW",
                    status: "Done",
                    create_date: "2023-10-24T13:11:20.000Z",
                    update_date: "2023-10-24T14:16:34.000Z",
                },
                {
                    id: 6,
                    summary: "Frozen PC",
                    content: "My pc is frozen!!!",
                    priority: "LOW",
                    status: "Created",
                    create_date: "2023-10-24T13:11:20.000Z",
                    update_date: "2023-10-24T14:16:34.000Z",
                },
            ],
        }
    },

    mounted() {
        this.userType = localStorage.getItem('userType') ?? 'user'
    },

});
</script>
<style></style>
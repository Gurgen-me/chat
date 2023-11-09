<template lang="">
    <v-dialog
            v-model="dialog"
            width="auto"
            persistent
          >
            <v-card>
              <v-card-text>
                <v-table>
                  <thead>
                    <tr>
                      <th class="text-left">
                        id
                      </th>
                      <th>{{ ticket.id }}</th>
                    </tr>
                    <tr>
                      <th class="text-left">
                        summary
                      </th>
                      <th>{{ ticket.summary }}</th>
                    </tr>
                    <tr>
                      <th class="text-left">
                        content
                      </th>
                      <th>{{ ticket.content }}</th>
                    </tr>
                    <tr>
                      <th class="text-left">
                        priority
                      </th>
                      <th>{{ ticket.priority }}</th>
                    </tr>
                    <tr>
                      <th class="text-left">
                        status
                      </th>
                      <th>
                        <v-select
                        label="Select"
                        v-model="ticket.status"
                        :items="['Created', 'Working', 'Done']"
                        
                        variant="underlined"
                      ></v-select>
                    </th>
                    </tr>
                    <tr>
                      <th class="text-left">
                        create_date
                      </th>
                      <th>{{ ticket.create_date }}</th>
                    </tr>
                    <tr>
                      <th class="text-left">
                        update_date
                      </th>
                      <th>{{ ticket.update_date }}</th>
                    </tr>
                      
                  
         
                  </thead>
    
                </v-table>
                <v-textarea clearable label="Ответ пользователю" auto-grow></v-textarea>
              </v-card-text>
              <v-card-actions>
                <v-btn color="green-darken-1"  @click="close">Save</v-btn>
                <v-btn color="red-darken-1"  @click="close">Close</v-btn>
              </v-card-actions>
            </v-card>
          </v-dialog>
      </template>
    <script lang="ts">
    import { defineComponent } from "vue";
    
    export default defineComponent({
      name: "TicketPopup",
      props: {
        dialog: {
          type: Boolean,
          required: true
        },
        ticket: {
          type: Object,
          default: {}
        },
      },
      data() {
        return {
    
        }
      },
      mounted() {
    
      },
      methods: {
        close() {
          this.$emit("close");
        },
      },
    });
    </script>
    <style></style>
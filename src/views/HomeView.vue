<template>
    <AdminHomeView v-if="userType == 'admin'" />
    <UserHomeView v-if="userType == 'user'" />
</template>

<script lang="ts">
import { defineComponent } from 'vue'

import AdminHomeView from './Home/AdminHomeView.vue';
import UserHomeView from './Home/UserHomeView.vue';

export default defineComponent({
    components: {
        AdminHomeView,
        UserHomeView
    },
    data() {
        return {
            userType: '' as String,
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

})
</script>
<style></style>
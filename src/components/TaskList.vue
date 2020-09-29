<template>
    <div>
        <b-card v-for="task in tasks"
            v-bind:key="task.id"
            style="min-width: 20rem; min-height: 2rem;"
            class="mb-2"
        >
            <TaskListItem v-bind:task="task"/>
        </b-card>
    </div>
</template>

<script>

import TaskListItem from '@/components/TaskListItem'

export default {
    name: "TaskList",
    props: ['tasks'],
    components: {
        TaskListItem
    }    
}
</script>
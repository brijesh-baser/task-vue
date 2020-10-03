<template>
    <div>
        <TaskHome header-text="Today's Task" headerTextVariant="text-dark" :tasks="tasks"/>
    </div>
</template>

<script>
import TaskHome from '@/components/TaskHome'

export default {
    name: "TodayTask",
    components: {
        TaskHome
    },
    data() {
        return {
            tasks: []
        }
    },
    created() {
    this.$http
          .get('http://34.66.181.179:8081/api/_today/tasks?query=task.active:true&sort=task.id,desc', {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          }).then(response => {
            console.log(response.data);
            this.tasks = response.data;
          });
  },
}
</script>
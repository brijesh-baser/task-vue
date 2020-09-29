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
          .get('http://172.20.10.8:8081/api/_today/tasks?query=task.active:true&sort=task.id,desc', {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          }).then(response => {
            console.log(response.data);
            this.tasks = response.data;
          });
  },
}
</script>
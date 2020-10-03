<template>
    <div>
        <TaskHome header-text="All Task" headerTextVariant="text-primary" :tasks="tasks"/>
    </div>
</template>

<script>
import TaskHome from '@/components/TaskHome'

export default {
    name: "AllTask",
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
          .get('http://34.66.181.179:8081/api/_all/tasks?query=active:true&sort=id,desc', {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          }).then(response => {
            console.log(response.data);
            this.tasks = response.data;
          });
  },
}
</script>
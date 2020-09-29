<template>
    <div>
        <TaskHome header-text="Completed Task" headerTextVariant="text-success" :tasks="tasks"/>
    </div>
</template>

<script>
import TaskHome from '@/components/TaskHome'

export default {
    name: "CompletedTask",
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
          .get('http://172.20.10.8:8081/api/_completed/tasks?query=active:true&sort=id,desc', {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + 'eyJhbGciOiJIUzUxMiJ9.eyJzdWIiOiJhZG1pbiIsImF1dGgiOiJST0xFX0FETUlOLFJPTEVfVVNFUiIsImV4cCI6MTYwMTQ1MzM3OH0.voj3nyfHauSqFGIccf4MArgEMwS183NSf7AfiSweKKYThj_O4XiywxViK83_Kg4wbkmTGvhjzQQKT1dP6N0gLw' }
          }).then(response => {
            console.log(response.data);
            this.tasks = response.data;
          });
  },
}
</script>
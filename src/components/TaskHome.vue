<template>
  <div class="container mb-4">
    <div class="row px-4 pt-4">
      <div class="col-2 p-0">
        <Drawer/>
      </div>
      <div class="col-8 p-0">
        <TaskListHeader :title="headerText" :text-variant="headerTextVariant"/>
      </div>
    </div>
    <div class="row px-4 pt-2">
      <TaskList v-bind:tasks="tasks"/>
    </div>
    <b-button variant="dark" :style="{borderRadius: '50%', position: 'fixed', bottom: '20px', right: '30px'}"
    @click="launchAddTaskPage()">
      <font-awesome-icon icon="plus" :style="{color: 'white', fontSize: '36px'}"></font-awesome-icon>
    </b-button>
  </div>
</template>


<script>
import Drawer from '@/components/Drawer'
import TaskListHeader from '@/components/TaskListHeader'
import TaskList from '@/components/TaskList'

export default {
  name: "TaskHome",
  props: ["tasks", "headerText", "headerTextVariant"],
  components: {
    Drawer,
    TaskListHeader,
    TaskList
  },
  
  methods: {
    launchAddTaskPage: function() {
      this.$router.push('/task/new');
    }
  }
};
</script>

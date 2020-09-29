<template>
  <div>
    <font-awesome-icon icon="align-left" class="menu-icon" v-b-toggle.sidebar-backdrop/>
    <b-sidebar
      id="sidebar-backdrop"
      title="Task Manager"
      backdrop-variant="dark"
      backdrop
      shadow
      no-header-close = false
    >
      <div class="px-3 py-2">
        <b-nav vertical>
          <router-link to="/today-task" class="pt-2"><span class="nav-link text-dark">Today's Task</span></router-link>
          <router-link to="/pending-task" class="pt-2"><span class="nav-link text-warning">Pending Task</span></router-link>
          <router-link to="/completed-task" class="pt-2"><span class="nav-link text-success">Completed Task</span></router-link>
          <router-link to="/all-task" class="pt-2"><span class="nav-link text-primary">All Task</span></router-link>
          <router-link to="/task-to-be-start" class="pt-2"><span class="nav-link text-secondary">Task to be start</span></router-link>
          <router-link to="/logout" class="pt-2"><span class="nav-link text-danger">Logout</span></router-link>
        </b-nav>
      </div>
    </b-sidebar>
  </div>
</template>


<script>
// @ is an alias to /src

export default {
  name: "Drawer"
};
</script>
<style scoped>
.menu-icon {
  color: black;
  font-size: 32px;
}
.nav-link {
  font-size: 18px;
  font-weight: 600;
}
</style>
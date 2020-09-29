<template>
    <div>
        <b-card-text @click="editTask()">
            <div class="row">
                <div class="col-12">
                    <span class="p-0" :class="getTitleTextColor()" style="font-size:20px; font-weight:600">{{task.name}}</span>
                </div>
            </div>
            <div class="row">
                <div class="col-12">
                    {{task.remarks}}
                </div>
            </div>
            <div class="row mt-1 d-flex">
                <div class="col-4 pr-0">
                    <b-badge variant="light">{{task.createdDate.toString().substring(0,10)}}</b-badge>
                </div>
                <!--<div class="col-4 text-left">
                    <b-badge :variant="getPriorityVarient()">{{task.priority}}</b-badge>
                </div> -->
                <div class="col-8 text-right">
                    <b-badge :variant="getStatusVarient()">{{task.status}}</b-badge>
                </div>
            </div>
        </b-card-text>
    </div>
</template>

<script>
export default {
    name: "TaskListItem",
    props: ['task'],
    methods: {
        getTitleTextColor: function() {
            if(this.task.priority == 'URGENT') {
                return 'text-primary'
            } else {
                return 'text-secondary'
            }
        },
        getStatusVarient: function() {
            if(this.task.status == 'DONE') {
                return 'success'
            } else if(this.task.status == 'IN_PROGRESS') {
                return 'warning'
            } else if(this.task.status == 'NOT_STARTED') {
                return 'secondary'
            }
            return 'primary'
        },
        getPriorityVarient: function() {
            if(this.task.priority == 'URGENT') {
                return 'danger'
            } else {
                return 'secondary'
            }
        },
        editTask() {
            this.$router.push('/task/' + this.task.id);
        }
    }
}
</script>

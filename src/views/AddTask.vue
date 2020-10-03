<template>
    <div>
        <TaskHeader title="Create Task"/>
        <div class="container pt-2">
            <b-form>
                <b-form-group id="input-group-1" label="Task:" v-if="!edit">
                    <b-form-textarea
                        id="textarea-rows"
                        rows="2"
                        max-rows="8"
                        v-model="task.name"
                        style="font-size:20px; font-weight:500"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group id="input-group-1" label="Priority:">
                    <b-form-radio-group
                        id="btn-radios-1"
                        v-model="task.priority"
                        :options="priorityList"
                        buttons
                        name="radios-btn-default"
                        :button-variant="getPriorityRadioButtonVarient()"
                    ></b-form-radio-group>
                </b-form-group>
                <!-- <b-form-group id="input-group-1" label="Status:">
                    <b-form-radio-group
                        id="btn-radios-2"
                        v-model="task.status"
                        :options="statusList"
                        buttons
                        name="radios-btn-default"
                        :button-variant="getStatusRadioButtonVarient()"
                    ></b-form-radio-group>
                </b-form-group> -->
                <!-- <b-form-group id="input-group-1" label="Start date:">
                    <b-form-datepicker
                        id="datepicker-dateformat1"
                        :date-format-options="{ year: 'numeric', month: 'short', day: '2-digit', weekday: 'short' }"
                        locale="en"
                        v-model="task.startDate"
                        >
                    </b-form-datepicker>
                </b-form-group> -->
                <b-form-group id="input-group-1" label="Remarks:">
                    <b-form-textarea
                        id="textarea-rows"
                        rows="4"
                        max-rows="8"
                        v-model="task.remarks"
                    ></b-form-textarea>
                </b-form-group>
                <b-form-group id="input-group-1">
                    <b-button variant="dark" class="w-100 py-2" @click="save()">Create</b-button>
                </b-form-group>
            </b-form>
        </div>
    </div>
</template>

<script>
import TaskHeader from '@/components/TaskHeader'

export default {
    name: "AddTask",
    components: {
        TaskHeader,
    },
    data() {
        return {
            task: {
                name: "",
                priority: "NORMAL",
                startDate: '2020-09-15',
                remarks:'',
                status: 'NOT_STARTED'
            },
            priorityList: [
                { value: 'NORMAL', text: 'Normal' },
                { value: 'URGENT', text: 'Urgent' }
            ],
            statusList: [
                { value: 'NOT_STARTED', text: 'Not Started' },
                { value: 'IN_PROGRESS', text: 'In Progress' },
                { value: 'DONE', text: 'Done' }
            ]
        }
    },
    methods: {
        save: async function () {
            await this.$http.post('http://34.66.181.179:8081/api/tasks', JSON.stringify(this.task), 
            {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          });
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        getPriorityRadioButtonVarient: function() {
            if(this.task.priority == 'URGENT') {
                return 'outline-primary';
            } else {
                return 'outline-secondary';
            }
        },
        getStatusRadioButtonVarient: function() {
            if(this.task.status == 'NOT_STARTED') {
                return 'outline-secondary';
            } else if(this.task.status == 'IN_PROGRESS') {
                return 'outline-warning';
            } else if(this.task.status == 'DONE') {
                return 'outline-success';
            }
            return 'outline-primary';
        }
    }
}
</script>
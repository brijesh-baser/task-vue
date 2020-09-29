<template>
    <div v-if="task">
        <TaskHeader :title="task.name" :subTitle="task.createdDate"/>
        <div class="pt-3">
            <div class="container">
                <b-form>
                    <b-form-group>
                        <b-form-checkbox v-model="isTodayTask" name="check-button" button 
                        :button-variant="isTodayTask ? 'danger' : 'secondary'">
                            <span v-if="isTodayTask" @click="removeFromTodayTask()">Remove from Today's task</span>
                            <span v-if="!isTodayTask" @click="addToTodayTask()">Add to Today's task</span>
                        </b-form-checkbox>
                    </b-form-group>
                    
                    <b-form-group id="input-group-1" label="Status:">
                        <b-form-radio-group
                            id="btn-radios-2"
                            v-model="task.status"
                            :options="statusList"
                            buttons
                            name="radios-btn-default"
                            :button-variant="getStatusRadioButtonVarient()"
                            @change="updateStatus($event)"
                        ></b-form-radio-group>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="active:">
                        <b-form-checkbox v-model="task.active" name="check-button" size="lg" switch @change="updateActive($event)"></b-form-checkbox>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Priority:">
                        <b-form-radio-group
                            id="btn-radios-1"
                            v-model="task.priority"
                            :options="priorityList"
                            buttons
                            name="radios-btn-default"
                            :button-variant="getPriorityRadioButtonVarient()"
                            @change="updatePriority($event)"
                        ></b-form-radio-group>
                    </b-form-group>
                    <b-form-group id="input-group-1" label="Remarks:">
                        <b-form-textarea
                            id="textarea-rows"
                            rows="4"
                            max-rows="8"
                            v-model="task.remarks"
                            @blur="save()"
                        ></b-form-textarea>
                    </b-form-group>
                    <!-- <b-form-group id="input-group-1">
                        <b-button variant="primary" class="w-100 py-2" @click="save()">Update</b-button>
                    </b-form-group> -->
                </b-form>
            </div>
        </div>
    </div>
</template>

<script>
import TaskHeader from '@/components/TaskHeader'

export default {
    name: "EditTask",
    components: {
        TaskHeader,
    },
    created() {
        this.$http
          .get('http://172.20.10.8:8081/api/tasks/' +this.$route.params.id, {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          }).then(response => {
            console.log(response.data);
            this.task = response.data;
            this.syncTodayTask();
        });
    },
    data() {
        return {
            isTodayTask: false,
            task: {},
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
            await this.$http.put('http://172.20.10.8:8081/api/tasks', JSON.stringify(this.task), 
            {
                // Attach the JWT header
                headers: { Authorization: 'Bearer ' + localStorage.token }
            })
        },
        updateStatus: async function (event) {
            this.task.status = event;
            await this.$http.put('http://172.20.10.8:8081/api/tasks', JSON.stringify(this.task), 
            {
                // Attach the JWT header
                headers: { Authorization: 'Bearer ' + localStorage.token }
            })
        },
        updatePriority: async function (event) {
            this.task.priority = event;
            await this.$http.put('http://172.20.10.8:8081/api/tasks', JSON.stringify(this.task), 
            {
                // Attach the JWT header
                headers: { Authorization: 'Bearer ' + localStorage.token }
            })
        },
        updateActive: async function (event) {
            this.task.active = event;
            await this.$http.put('http://172.20.10.8:8081/api/tasks', JSON.stringify(this.task), 
            {
                // Attach the JWT header
                headers: { Authorization: 'Bearer ' + localStorage.token }
            })
        },
        addToTodayTask: async function() {
            await this.$http.post('http://172.20.10.8:8081/api/add-today-task/' + this.task.id, {},
            {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          })
        },
        removeFromTodayTask: async function() {
            await this.$http.post('http://172.20.10.8:8081/api/remove-today-task/' + this.task.id, {},
            {
            // Attach the JWT header
            headers: { Authorization: 'Bearer ' + localStorage.token }
          })
        },
        syncTodayTask() {
            this.$http
            .get('http://172.20.10.8:8081/api/is-today-task/' + this.task.id, {
                // Attach the JWT header
                headers: { Authorization: 'Bearer ' + localStorage.token }
            }).then(response => {
                console.log(response.data);
                this.isTodayTask = response.data['is-today-task'];
            });
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
<template>
    <div>
        <div class="container bg-dark">
            <div class="row py-3 align-items-center">
                <div class="col-2">
                    <font-awesome-icon icon="long-arrow-alt-left" :style="{color: 'white', fontSize: '22px'}" @click="goBack()"></font-awesome-icon>
                </div>
                <div class="col-10 pl-0">
                    <div class="container p-0">
                        <div class="row">
                            <span class="text-white" style="font-weight:600" :style="{fontSize: getTitleFontSize()}">{{title}}</span>
                        </div>
                        <div class="row" v-if="subTitle">
                            <span class="text-white" style="font-size:14px">{{subTitle}}</span>
                        </div>
                    </div>
                </div>
                <!-- <div class="col-2">
                    <font-awesome-icon icon="check" :style="{color: 'green', fontSize: '22px'}" @click="save()"></font-awesome-icon>
                </div> -->
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: "TaskHeader",
    props: ['title', 'subTitle'],
    methods: {
        goBack: function () {
            window.history.length > 1 ? this.$router.go(-1) : this.$router.push('/')
        },
        getTitleFontSize: function() {
            return this.title && this.title.length > 30 ? '18px' : '20px';
        }
    }
}
</script>
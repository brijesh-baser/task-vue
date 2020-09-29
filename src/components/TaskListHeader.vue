<template>
    <div>
        <span :class="textVariant" style="font-size:28px; font-weight:600">{{ title }}</span>
    </div>
</template>

<script>
export default {
    name: 'TaskListHeader',
    props: ['title', 'textVariant'],
}
</script>

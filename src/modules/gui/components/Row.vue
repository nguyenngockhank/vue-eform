<template>
<el-row :gutter="30">
    <Control v-for="controlData in children" 
                :key="controlData.id" v-bind="controlData" />
</el-row>
</template>

<script>
import Control from './Control';

export default {
    components: { Control },
    props: [
        'children',
        'id',
    ],
}
</script>
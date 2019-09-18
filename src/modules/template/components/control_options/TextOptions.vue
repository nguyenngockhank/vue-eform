<template>
<div>    
    <h3>Text Options</h3>

    <el-row :gutter="20">
        <el-col span="10">
            <el-checkbox v-model="options.is_multiline"  >Multi line</el-checkbox>
        </el-col>
    </el-row>


</div>
</template>

<script>
import optionMixin from '$template/utils/controlOptionMixin';

export default {
    mixins: [ optionMixin ],
}
</script>
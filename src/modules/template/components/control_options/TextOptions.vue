<template>
<div>    
    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Input Options</h3></el-divider>

    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
            Input Type 

            <select v-model="options.input_type" class="form-control form-control-sm" >
                <option v-for="item in inputTypeOptions" :key="item.value" :value="item.value" >{{ item.label }}</option>
            </select>
        </div>
    </div>

</div>
</template>

<script>
import optionMixin from '$template/utils/controlOptionMixin';

export default {
    mixins: [ optionMixin ],
    computed: {
        inputTypeOptions() {
            return [
                { value: 'text', label: 'Text' },
                { value: 'number', label: 'Number' },
                { value: 'email', label: 'Email' },
                { value: 'date', label: 'Date' },
            ];
        }
    },
}
</script>
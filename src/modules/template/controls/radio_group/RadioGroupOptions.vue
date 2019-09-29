<template>
<div>    
    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Radio Group Options</h3></el-divider>

    <TableDataSource v-model="options.values" />
    
     <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
            Layout
            <select v-model="options.layout" class="form-control form-control-sm" >
                <option v-for="item in layoutOptions" 
                    :key="item.value" :value="item.value" >
                    {{ item.label }}
                </option>
            </select>
        </div>
    </div>
</div>
</template>

<script>
import optionMixin from '$template/mixins/controlOptionMixin';
import TableDataSource from '$template/components/common/TableDataSource';

export default {
    mixins: [ optionMixin ],
    components: { TableDataSource },
    props: ['extra'],
    computed: {
        layoutOptions() {
            return [
                { value: 'stack', label: 'Stack' },
                { value: 'inline', label: 'Inline' },
            ]
        }
    }
}
</script>
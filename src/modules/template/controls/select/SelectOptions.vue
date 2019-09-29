<template>
<div>    
    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Select Options</h3></el-divider>

    <TableDataSource v-model="options.values" />
    
</div>
</template>

<script>
import optionMixin from '$template/mixins/controlOptionMixin';
import TableDataSource from '$template/components/common/TableDataSource';

export default {
    mixins: [ optionMixin ],
    components: { TableDataSource },
    props: ['extra'],
}
</script>
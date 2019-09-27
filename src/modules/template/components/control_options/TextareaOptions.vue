<template>
<div>    
    <el-divider content-position="left"><h3><i class="el-icon-star-on" />  Textarea Options</h3></el-divider>

    <div class="row">
        <div class="col-sm-12 col-md-6 col-lg-4">
            <input type="number" v-model="options.rows" class="form-control">
        </div>
    </div>

</div>
</template>

<script>
import optionMixin from '$template/mixins/controlOptionMixin';

export default {
    mixins: [ optionMixin ],
}
</script>
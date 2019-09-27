<template>
<div>    
    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Select Options</h3></el-divider>

    <div class="row">
        <div class="col-sm-12 col-md-12 col-lg-12">
            <div class="row mb-10">
                <div class="col-sm-5"><label>Value</label></div>
                <div class="col-sm-5">Label</div>
                 <div class="col-sm-2">
                    <button class="el-button el-button--default el-button--mini" @click="addValueRow">Add</button>
                </div>
            </div>

            <div v-for="(item, index) in options.values" :key="index" class="row mb-10">
                <div class="col-sm-5">
                    <input v-model="item.value" @input="inputValue(item, $event)" placeholder="value" class="form-control form-control-sm" />
                </div>
                <div class="col-sm-5">
                    <input  v-model="item.label" placeholder="label" class="form-control form-control-sm"   />
                </div>
                <div class="col-sm-2">
                    <button @click="removeValueRow(item)" class="el-button el-button--default el-button--mini">Remove</button>
                </div>
            </div>
            <!-- {{ options }} -->
        </div>
    </div><!-- END OPTIONS -->
</div>
</template>

<script>
import optionMixin from '$template/mixins/controlOptionMixin';

export default {
    mixins: [ optionMixin ],
    props: ['extra'],
    methods: {
        inputValue(item, $event) {
            if (item.value.indexOf(item.label) === 0) {
                item.label = item.value;
            }
        },
        addValueRow(){
            const values = this.options.values;
            values.push({ value: '', label: '' })
        },
        removeValueRow(item) {
            const values = this.options.values;
            this.options.values = values.filter( (i) => i !== item );
        }
    }
}
</script>
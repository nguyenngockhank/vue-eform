<template>
<table class="table table-bordered">
    <tr>
        <th>Value</th>
        <th>Label</th>
        <th>
            <button class="el-button el-button--default el-button--mini" @click="addValueRow">Add</button>
        </th>
    </tr>
    <tr v-if="!value || !value.length">
        <td span="3">No records!</td>
    </tr>

    <tr v-for="(item, index) in value" :key="index">
        <td>
            <input v-model="item.value" 
                @input="inputValue(item, $event)" 
                class="form-control form-control-sm" />
        </td>
        <td>
            <input v-model="item.label" 
               class="form-control form-control-sm"   />
        </td>
        <td>
            <button @click="removeValueRow(item)" class="el-button el-button--default el-button--mini">Remove</button>
        </td>
    </tr>
</table>
</template>

<script>
export default {
    props: ['value'],
    methods: {
        inputValue(item, $event) {
            if (item.value.indexOf(item.label) === 0) {
                item.label = item.value;
            }
        },
        addValueRow(prepend = false){
            const values = this.value;
            if ( prepend ) {
                this.$emit('input', [{ value: '', label: '' }].concat(values));
            } else {
                this.$emit('input', values.concat([{ value: '', label: '' }]));
            }
        },
        removeValueRow(item) {
            const values = this.value;
            this.$emit('input', values.filter( (i) => i !== item ) );
        }
    }
}
</script>
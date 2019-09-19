<template>
<div class="dialog-input-options">
    <h3>Essential Info</h3>
    <el-row :gutter="20">
        <el-col span="10">
            Type
            <el-input placeholder="type" disabled="" v-model="sub_type" ></el-input>
        </el-col>

        <el-col span="10">
            Name
            <el-input placeholder="Name"  v-model="name" ></el-input>
        </el-col>
    </el-row>
    <!-- end Essential-->

    <h3>Layout</h3>
    <el-row :gutter="20">
        <el-col span="10">
            <el-checkbox v-model="span.responsive">Responsive</el-checkbox>
        </el-col>
    </el-row>

    <el-row :gutter="10" v-if="!span.responsive">
        <el-col span="5">
            <el-input-number size="mini" v-model="span.value"></el-input-number>
        </el-col>
    </el-row>

    <el-row :gutter="4" v-if="span.responsive">
        <el-col span="5">
            <div>xl</div>
            <el-input-number size="mini" v-model="span.xl"></el-input-number>
        </el-col>

        <el-col span="5">
            <div>lg</div>
            <el-input-number size="mini" v-model="span.lg"></el-input-number>
        </el-col>

        <el-col span="5">
            <div>md</div>
            <el-input-number size="mini" v-model="span.md"></el-input-number>
        </el-col>

        <el-col span="5">
            <div>sm</div>
            <el-input-number size="mini" v-model="span.sm"></el-input-number>
        </el-col>

        <el-col span="5">
            <div>xs</div>
            <el-input-number size="mini" v-model="span.xs"></el-input-number>
        </el-col>
    </el-row>
    <!-- end layout -->


    <h3>Label</h3>
    <el-row gutter="20">
        <el-col span="10">
            <div>Text</div>
            <el-input placeholder="Label Text"  v-model="label.text" ></el-input>
        </el-col>

        <el-col span="8">
             <div>Position</div>
            <el-select v-model="label.position" placeholder="Select label position">
                <el-option
                    v-for="item in labelPositionOptions"
                    :key="item.value"
                    :label="item.label"
                    :value="item.value">
                </el-option>
            </el-select>
        </el-col>
    </el-row>

    <el-row gutter="20">
        <el-col span="4">
             <div>&nbsp;</div>
            <el-checkbox border v-model="label.bold">Bold</el-checkbox>
        </el-col>
        <el-col span="4">
             <div>&nbsp;</div>
            <el-checkbox border v-model="label.italic">Italic</el-checkbox>
        </el-col>
         <el-col span="4">
              <div>&nbsp;</div>
            <el-checkbox border v-model="label.underline">Underline</el-checkbox>
        </el-col>
    </el-row>
    <!-- end label -->

    <slot name="extra" :extra="extra" :id="id"></slot>

</div>
</template>

<script>
import { plainObject } from 'utils/objectHelpers';

export default {
    data(){
        return {
            id: '',
            name: '',
            sub_type: '',
            span: {
                responsive: true,
                value: 4,
                xs: 4,
                sm: 4,
                md: 4,
                lg: 4,
                xl: 4,
            },
            label: {
                text: 'Text Label',
                position: 'left', // top, right?
                bold: false,
                underline: false,
                italic: false,
            },
            extra: { },
        }
    }, 
    computed: {
        labelPositionOptions() {
            return [
                { value: 'left', label: 'Left' },
                { value: 'top', label: 'Top' },
                { value: 'placeholder', label: 'Placeholder' },
            ];
        }
    },
    methods: {
        stateToControlAttr() {
            return plainObject({
                id: this.id,
                name: this.name, 
                label: this.label,
                styles: {
                    span: this.span
                }, 
            });
        },
        controlAttrToState( controlInfo ) {
            const { id, rowId, name, sub_type, label, styles, extra } = controlInfo;

            const { span } = styles; 

            this.span = span;
            this.label = label;
            this.name = controlInfo.name || controlInfo.id;
            this.extra = extra; 

            // no use now, just for passing to slot 
            this.id = id;
            this.sub_type = controlInfo.sub_type;
        },
        getValue() {
            return this.stateToControlAttr();
        },
    }
}
</script>

<style scoped>

</style>
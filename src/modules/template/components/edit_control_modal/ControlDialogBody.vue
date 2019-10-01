<template>
<div class="container">
    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Essential Info</h3></el-divider>
    <div class="row">
        <div class="col-lg-4">
            Sub Type
            <input type="text" disabled class="form-control form-control-sm" v-model="sub_type">
        </div><!-- end type -->

        <div class="col-lg-4">
            Name
            <input type="text" class="form-control form-control-sm" v-model="name">
        </div><!-- end name -->

        <div class="col-lg-4">
            Placeholder
            <input type="text" class="form-control form-control-sm" v-model="placeholder">
        </div><!-- end name -->
        
    </div>
    <!-- end Essential-->

    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Label</h3></el-divider>
   

    <div v-show="true">

        <div class="row" >
            <div class="col-lg-4">
                Text
                <input type="text" class="form-control form-control-sm" v-model="label.text">
            </div><!-- end type -->

            <div class="col-lg-4">
                Layout
                <select v-model="label.position" class="form-control form-control-sm" >
                    <option v-for="item in labelPositionOptions"  :key="item.value" :value="item.value" >{{ item.label }}</option>
                </select>
            </div><!-- end name -->

            <div class="col-lg-4" v-show="label.position == 'left' ">
                Width (per control)
                <input type="number" max="11" min="1" class="form-control form-control-sm" v-model.number="label.width">
            </div><!-- end name -->
        </div>

        <el-divider>Styles</el-divider>

        <FormCheck  v-model="label.bold" id="label_bold" label="Bold" :inline="true" />
        <FormCheck  v-model="label.italic" id="label_italic" label="Italic" :inline="true" />
        <FormCheck  v-model="label.underline" id="label_underline" label="Underline" :inline="true" />
        <!-- Color in future =)) -->
    </div>
    <!-- end label -->




    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Layout</h3></el-divider>
    <div class="row mb-10">
        <div class="col-sm-12">
            <div class="form-check" >
                <input v-model="span.responsive" class="form-check-input" type="checkbox" id="layout_responsive">
                <label class="form-check-label" for="layout_responsive">
                    Responsive (12 columns per Row)
                </label>
            </div><!-- end span.reponsive -->
        </div><!-- end .col-xs-12 -->
    </div><!-- end .row -->

    <div class="row" v-show="!span.responsive">
        <SizeGroupInput title="Fixed" v-model.number="span.fixed" />
    </div><!-- end span.fixed -->


    <el-divider content-position="left"><h3><i class="el-icon-star-on" /> Validation</h3></el-divider>

    <div class="row mb-10">
        <div class="col-sm-12">
            <div class="form-check" >
                <input v-model="validate.required" class="form-check-input" type="checkbox" id="val_control_required">
                <label class="form-check-label" for="val_control_required">
                    Required
                </label>
            </div><!-- end span.reponsive -->
        </div><!-- end .col-xs-12 -->
    </div><!-- end .row -->


    <div class="row" v-show="span.responsive">
        <SizeGroupInput title="xl" v-model.number="span.xl" />
        <SizeGroupInput title="lg" v-model.number="span.lg" />
        <SizeGroupInput title="md" v-model.number="span.md" />
        <SizeGroupInput title="sm" v-model.number="span.sm" />
    </div><!-- end span.xl -->
    <!-- end Layout-->


    <slot name="extra" :extra="extra" :id="id"></slot>

</div>
</template>

<script>
import SizeGroupInput from './SizeGroupInput';
import FormCheck from './FormCheck';
import { plainObject } from 'utils/objectHelpers';

export default {
    components: {
        SizeGroupInput, FormCheck
    },
    data(){
        return {
            id: '',
            name: '',
            placeholder: '',
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
            validate: { },
            extra: { },
        }
    }, 
    computed: {
        labelPositionOptions() {
            return [
                { value: 'left', label: 'Left' },
                { value: 'top', label: 'Top' },
            ];
        }
    },
    methods: {
        stateToControlAttr() {
            return plainObject({
                id: this.id,
                name: this.name, 
                label: this.label,
                placeholder: this.placeholder,
                validate: this.validate,
                styles: {
                    span: this.span
                }, 
            });
        },
        controlAttrToState( controlInfo ) {
            const { id, rowId, name, sub_type, placeholder, label, styles, validate, extra } = controlInfo;

            const { span } = styles; 

            this.span = span;
            this.label = label;
            this.placeholder = placeholder;
            this.name = controlInfo.name || controlInfo.id;
            this.extra = extra; 
            this.validate = validate; 

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
<template>
<div class="col-sm-12 col-md-6 col-lg-4 col-xl-3">
    <div class="input-group input-group-sm mb-2">
        <div class="input-group-prepend">
            <div class="input-group-text">{{ title }}</div>
        </div>
        <input type="number" class="form-control" max="12" min="1"
                :value="value" @input="$emit('input', $event.target.value)" />
    </div><!-- end span.fixed  -->
</div><!-- end .col-xs-12 -->
</template>

<script>
export default {
    props: [
        'title', 'value'
    ], 
}
</script>

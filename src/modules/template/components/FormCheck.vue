<template>
<div class="form-check" :class="{ 'form-check-inline': !!inline }" >
    <input v-model="label.hide" :id="id" :value="value"  
       @change="$emit('input', $event.target.checked)" 
       class="form-check-input" type="checkbox">
    <label class="form-check-label" :for="id">
        {{ label }}
    </label>
</div><!-- end span.reponsive -->
</template>

<script>
export default {
    props: [
        'value', 'id', 'label', 'inline'
    ]
}
</script>
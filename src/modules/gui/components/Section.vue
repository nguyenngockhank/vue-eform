<template>
<div class="eform-section">
    Section {{ id }}
</div>
</template>

<script>


export default {
    props: [
        'children',
        'id',
    ],
    data() {
        return {
            sectionData: {},
        }
    },
}
</script>
<template>
<div class="eform-section">
    <Row v-for="rowData in children" 
                :key="rowData.id" :eform-store="eformStore" v-bind="rowData" />
</div>
</template>

<script>
import Row from './Row';

export default {
    components: { Row },
    props: [
        'eformStore',
        'children',
        'id',
    ],
}
</script>
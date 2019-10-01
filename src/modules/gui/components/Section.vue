<template>
<div class="eform-section">
    <Row v-for="rowData in children" 
                :key="rowData.id" :eformStore="eformStore" :errorStore="errorStore" v-bind="rowData" />
</div>
</template>

<script>
import Row from './Row';

export default {
    components: { Row },
    props: [
        'eformStore',
        'errorStore',
        'children',
        'id',
    ],
}
</script>
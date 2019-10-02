<template>
<div class="eform-section">
    <Row v-for="rowData in children" 
                :key="rowData.id"  :eform="eform" v-bind="rowData" />
</div>
</template>

<script>
import Row from './Row';

export default {
    components: { Row },
    props: [
        'eform',
        'children',
        'id',
    ],
}
</script>
<template>
<div>    
    <h3>Number Options</h3>
</div>
</template>

<script>
export default {
    created(){
        // console.log(this.$attrs)
    },
    methods: {
        getValue() {
            return {
                a: 123123, 
                b: 123123, 
            }
        }
    }
}
</script>
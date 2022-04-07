<template>
    <div>
        <h2> count number of times when button clicked</h2>
        <button @click="counter++">count</button>
        <p>Button clicked {{counter}} times!</p>
    </div>

</template>
<script>
export default{
    name:"CountAa",
    data(){
        return{
            counter:0
        }

    }
}
</script>

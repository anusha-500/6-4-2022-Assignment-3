<template>
    <div>
        <h1>this is for storing multiple lines of data in textarea</h1>
        <span>multiline text area</span>
        <p style="white-space: pre-line;">{{ textdata }}</p>
	<textarea v-model="textdata" placeholder="add multiple lines" required></textarea>
        </div>
</template>
<script>
export default{
    name:"DataAA",
    data(){
        return{
            textdata:" "
        }
    }
}
</script>

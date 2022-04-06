<template>
    <div>
        <head>Assignment-3</head>
        <h1>Question-10</h1>
        <p>This is errors Handling</p>
        <button @click="handle()">catch</button>
    </div>
</template>
<script>
export default{
    name:"Q10DD",
    data(){
        return{

        }
    },
methods:{
handle() {
try{
this.count = this.count * 5;
console.log("printing count",this.count);
}
catch{console.log("Error caught")}
}
}
}

</script>

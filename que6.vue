<template>
    <div id=demo>
        <h1>Question-6</h1>
        <p>using ref to get data from child to parent</p>
       <p>name: {{name}}</p>
       <p> mailid:{{mailid}}</p>
       <p>password:{{password}}</p>
       <p>phone no:{{number}}</p>
       <p>Gender:{{gender}}</p>
        </div>
</template>
<script>
export default{
    name:'question6AA',
    props:{
        name:String,
        mailid:String,
        password:String,
        number:{default:"1234567890"},
        gender:{default:"female"},

    },
}
</script>
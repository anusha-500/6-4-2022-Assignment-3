<template>
    <div>
        <v-container fluid>
            <h1>{{TimeStamp}}</h1>
        </v-container>
        <h2>Displaying current time using timestamp in vue</h2>
        </div>
</template>
<script lang="ts">
export default{
    name:"TimeStamp",
    data(){
        return{
        get TimeStamp(){ 
         const today = new Date()
            const time = today.getHours() + ":" + today.getMinutes() + ":" + today.getSeconds()
            const TimeStamp =time
            return TimeStamp;
        }

        }
    },
    methods:{
       func(){
        setTimeout(this.TimeStamp,5000)
       }
    }
}
</script>


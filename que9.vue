<template>
<div>
    <h1>Question-9</h1>
<b-form @submit="onSubmit" @reset="onReset" v-if="show">
<b-form-group id="input-group-1" label="enter name:" label-for="input-1">
<b-form-input
id="input-1"
v-model="form.name"
placeholder="Enter name"
required
></b-form-input>
</b-form-group>
<b-form-group
id="input-group-2"
label="enter email"
label-for="input-2"
>
<b-form-input
id="input-2"
v-model="form.email"
type="email"
placeholder="Enter email"
required
></b-form-input>
</b-form-group>
<b-form-group id="input-group-3" label="enter age" label-for="input-3">
<b-form-input
id="input-3"
v-model="form.age"
placeholder="Enter Age"
required
></b-form-input>
</b-form-group>
<b-form-group id="input-group-4" label="enter contact" label-for="input-4">
<b-form-input
id="input-4"
v-model="form.contact"
placeholder="Enter contact"
required
></b-form-input>
</b-form-group>
<b-button type="submit" variant="primary">Save</b-button>
</b-form>
<b-card class="mt-3" header="Form Data Result">
<pre class="m-0">{{ form }}</pre>
</b-card>
<p id='id'></p>
</div>
</template>
<script>
export default {
name:"queS9",
data() {
return {
form: {
name: '',
email: '',
age:'',
contact:''
},
show: true
}
},
methods: {
onSubmit(event) {
event.preventDefault()
document.getElementById('id').innerHTML=(JSON.stringify(this.form))
},
onReset(event) {
event.preventDefault()
this.form.email = ''
this.form.name = ''
this.form.age=''
this.form.contact=''
this.show = false
this.$nextTick(() => {
this.show = true
})
}
}
}
</script>

 
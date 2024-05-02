<script setup lang="ts">
import { reactive } from 'vue';


const form = reactive({
    name: 'Johnny'
})
</script>
<template>
<el-text tag="h1" size="large">Привет форма!</el-text>
<el-form :model="form">
    <slot></slot>
</el-form>
</template>

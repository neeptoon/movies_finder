<script setup lang="ts">

type Props = {
    label: string,
    value: string
}

const props = withDefaults(defineProps<Props>(), {
  label: 'hello',
  value: 'Johnny'
})




</script>
<template>
    <el-form-item :label="label">
    </el-form-item>
</template>

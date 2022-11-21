<script setup>
import { ElInput } from 'element-plus'
import { ref } from 'vue'
const value = ref('')
</script>
<script>
export default {
    name: 'my-ui-input'
}
</script>

<template>
    <el-input v-model="value" />
</template>
  
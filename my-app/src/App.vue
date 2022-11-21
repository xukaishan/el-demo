<template>
  <el-form
    ref="ruleFormRef"
    :model="ruleForm"
    :rules="rules"
    label-width="320px"
    class="demo-ruleForm"
    :size="formSize"
    status-icon
  >
    <el-form-item label="" prop="">
      <div>When the first of el-input loses focus, the rules validation is valid;&nbsp;</div>
      <div>When the second of my-ui-input loses focus, the rules validation is failure</div>
    </el-form-item>
    <el-form-item label="let me blur el-input" prop="name">
      <el-input v-model="ruleForm.name" />
    </el-form-item>
    <el-form-item label="let me blur my-ui-input" prop="des">
      <my-ui-input v-model="ruleForm.name" />
    </el-form-item>
  </el-form>
</template>

<script setup>
import {ElForm, ElInput, ElFormItem} from 'element-plus'
import MyUiInput from 'my-ui-lib'
import { reactive, ref } from 'vue'
const formSize = ref('default')
const ruleFormRef = ref()
const ruleForm = reactive({
  name: '',
})

const rules = reactive({
  name: [
    { required: true, message: 'Please input Activity name', trigger: 'blur' },
  ],
  des: [
    { required: true, message: 'Please input des', trigger: 'blur' },
  ],
})
</script>

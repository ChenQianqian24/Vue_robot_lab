<template>
  <div class="administrativeForm">
    <el-form
      :model="ruleForm"
      :rules="rules"
      ref="ruleForm"
      label-width="100px"
      class="demo-ruleForm"
    >
      <el-form-item label="机构名称" prop="sectionName">
        <el-input v-model="ruleForm.sectionName"></el-input>
      </el-form-item>
      <el-form-item label="机构描述" prop="sectionDescription">
        <el-input
          type="textarea"
          v-model="ruleForm.sectionDescription"
        ></el-input>
      </el-form-item>

      <ul class="duty">
        <li v-for="item in ruleForm.duty" :key="item.id">
          <el-form-item :label="item.id">
            <el-input v-model="item.name"></el-input>
          </el-form-item>
        </li>
      </ul>

      <el-form-item>
        <el-button type="primary" @click="submitForm('ruleForm')"
          >立即创建</el-button
        >
        <el-button @click="resetForm('ruleForm')">重置</el-button>
        <el-button @click="addForm">新增职务</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
import { date } from '../../public/createData'
export default {
  name: 'AdministrativeRegistration',
  data() {
    return {
      ruleForm: {
        sectionName: '',
        sectionDescription: '',
        duty: [
          { id: '职务1', name: '' },
          { id: '职务2', name: '' }
        ]
      },
      rules: {
        sectionName: [
          { required: true, message: '请输入机构名称', trigger: 'blur' },
          { min: 3, max: 5, message: '长度在 3 到 5 个字符', trigger: 'blur' }
        ],
        sectionDescription: [{ required: true, message: '请输入机构描述信息' }]
      },
      initialid: 3
    }
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        if (valid) {
          alert('submit!')

          let arr = this.ruleForm.duty

          for (var i = 1; i <= 7; i++) {
            if (arr[i - 1]) {
              this.ruleForm['L' + i] = arr[i - 1].name
              continue
            } else {
              this.ruleForm['L' + i] = null
            }
          }
          this.ruleForm.creatSectionTime = date()
          delete this.ruleForm.duty
          window.console.log(this.ruleForm)

          this.$axios
            .post('', this.ruleForm)
            .then(res => {
              window.console.log(res)
            })
            .catch(err => {
              window.console.log(err)
            })
        } else {
          window.console.log('error submit!!')
          return false
        }
      })
    },
    resetForm(formName) {
      this.$refs[formName].resetFields()
    },
    addForm() {
      let newid = '职务' + this.initialid
      let newDuty = { id: newid, name: '' }
      this.ruleForm.duty.push(newDuty)
      ++this.initialid
    }
  }
}
</script>

<style scoped>
.administrativeForm {
  width: 500px;
  height: 500px;
}
.duty {
  padding: 0 0 22px 0;
}
</style>

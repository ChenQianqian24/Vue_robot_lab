<template>
  <div class="UserRegistration">
    <el-form
      label-width="100px"
      class="demo-ruleForm"
      :rules="rules"
      :model="inputs"
      ref="inputs"
    >
      <el-form-item label="姓名" prop="name">
        <el-input v-model="inputs.name" placeholder="请输入姓名"></el-input>
      </el-form-item>
      <el-form-item label="密码" prop="psw">
        <el-input v-model="inputs.psw" type="password"></el-input>
      </el-form-item>
      <el-form-item label="性别">
        <el-radio label="男" v-model="inputs.radio">男</el-radio>
        <el-radio label="女" v-model="inputs.radio">女</el-radio>
      </el-form-item>
      <el-form-item label="机构">
        <el-select
          v-model="inputs.value1"
          placeholder="请选择"
          @change="memory"
        >
          <el-option
            v-for="item in inputs.options1"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item label="职位">
        <el-select v-model="inputs.value2" placeholder="请选择">
          <el-option
            v-for="item in inputs.options2"
            :key="item.value"
            :label="item.label"
            :value="item.value"
          >
          </el-option>
        </el-select>
      </el-form-item>
      <el-form-item>
        <el-button type="primary" @click="submitForm('inputs')">提交</el-button>
        <el-button @click="resetForm('inputs')">重置</el-button>
      </el-form-item>
    </el-form>
  </div>
</template>

<script>
export default {
  name: 'UserRegistration',
  data() {
    return {
      inputs: {
        name: '',
        psw: '',
        radio: '女',
        options1: [],
        options2: [],
        value1: '',
        value2: ''
      },

      rules: {
        name: [
          {
            required: true,
            min: 2,
            max: 5,
            message: '长度在 2 到 5 个字符',
            trigger: 'blur'
          }
        ],
        psw: [
          {
            required: true,
            min: 6,
            max: 12,
            message: '长度在 6 到 12 个字符',
            trigger: 'blur'
          }
        ]
      }
    }
  },
  created() {
    this.$axios
      .get('')
      .then(res => {
        let that = this
        window.console.log(res.data)
        let redata = res.data
        //{sectionID:1, sectionName:'教务处', L1:'校长', L2:'主任', L3:null;},
        //{sectionID:2, sectionName:'财务处',},
        redata.forEach(function(val, index) {
          let addOption1 = {}
          addOption1.value = index + 1
          addOption1.label = val.sectionName
          that.inputs.options1.push(addOption1)
        })
      })
      .catch(err => {
        window.console.log(err)
      })
  },
  methods: {
    submitForm(formName) {
      this.$refs[formName].validate(valid => {
        this.inputs.value1 = this.inputs.options1[
          Number(this.inputs.value1)
        ].label
        this.inputs.value2 = this.inputs.options2[
          Number(this.inputs.value2)
        ].label
        delete this.inputs.options1
        delete this.inputs.options2
        window.console.log(this.inputs)
        if (valid) {
          alert('submit!')
          this.$axios
            .post('', this.inputs)
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
    resetForm() {
      //测试用
      let that = this
      let redata = [
        {
          sectionID: 1,
          sectionName: '教务处',
          L1: '校长',
          L2: '主任',
          L3: null
        },
        { sectionID: 2, sectionName: '财务处' }
      ]
      redata.forEach(function(val, index) {
        let addOption1 = {}
        addOption1.value = index
        addOption1.label = val.sectionName
        that.inputs.options1.push(addOption1)
      })
      //   this.$refs[formName].resetFields()
    },
    memory(value) {
      let that = this
      this.inputs.options2 = []

      let redata = [
        {
          sectionID: 1,
          sectionName: '教务处',
          L1: '校长',
          L2: '主任',
          L3: null
        },
        { sectionID: 2, sectionName: '财务处' }
      ]

      const obj = redata[value]
      for (var i = 0; i < 8; i++) {
        let addOption2 = {}
        addOption2.value = i - 1
        addOption2.label = obj['L' + i]
        if (addOption2.label != null) {
          that.inputs.options2.push(addOption2)
        }
      }
    }
  }
}
</script>

<style scoped>
.UserRegistration {
  width: 500px;
  height: 800px;
}
</style>

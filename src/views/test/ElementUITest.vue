<template>
  <div id="test">
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="showIndexList">
          <el-submenu :index="m.index" v-for="m in menuList" :key="m.key">
            <template slot="title"><i :class="m.menuType"></i>{{m.navName}}</template>
            <el-menu-item-group v-for=" t in m.childList" :key="t.title">
              <template slot="title">{{t.title}}
              </template>
              <el-menu-item :index="option.route" v-for="option in t.options" :key="option.index" @click="changerouter(option.route)">{{option.name}}</el-menu-item>
          
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>
      <!-- <Content/> -->
       <el-container>
         <router-view/>
        </el-container>
    </el-container>
  </div>
</template>

<script>
import { test,menu,saveRow } from "network/test";
import Content from './Content.vue'
export default {
  name: "ElementUITest",
  components:{
    Content
  },
  data() {
   

    return {
      templateClassMenuType:['el-icon-menu','el-icon-setting','el-icon-setting','el-icon-setting'],
      tableData: null,
      menuList: null,
      result: null,
       showIndexList:null,
       title:"",
       dialogVisible:false,
        currentRow:{},
        totalSize:0,
        currentPage:1,
        pageSize:15,
        param:{},
        disabled:true,
        state:null,
        rules: {
                    name: [{required: true, message: '请输入用户名', trigger: 'blur'}],
                    gender: [{required: true, message: '请输入性别', trigger: 'blur'}],
                    birthday: [{required: true, message: '请输入出生日期', trigger: 'blur'}],
                    idCard: [{required: true, message: '请输入身份证号码', trigger: 'blur'}, {
                        pattern: /(^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$)|(^[1-9]\d{5}\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{2}$)/,
                        message: '身份证号码格式不正确',
                        trigger: 'blur'
                    }],
                    wedlock: [{required: true, message: '请输入婚姻状况', trigger: 'blur'}],
                    nationId: [{required: true, message: '请输入您组', trigger: 'blur'}],
                    nativePlace: [{required: true, message: '请输入籍贯', trigger: 'blur'}],
                    politicId: [{required: true, message: '请输入政治面貌', trigger: 'blur'}],
                    email: [{required: true, message: '请输入邮箱地址', trigger: 'blur'}, {
                        type: 'email',
                        message: '邮箱格式不正确',
                        trigger: 'blur'
                    }],
                    phone: [{required: true, message: '请输入电话号码', trigger: 'blur'}],
                    address: [{required: true, message: '请输入员工地址', trigger: 'blur'}],
                    departmentId: [{required: true, message: '请输入部门名称', trigger: 'blur'}],
                    jobLevelId: [{required: true, message: '请输入职称', trigger: 'blur'}],
                    posId: [{required: true, message: '请输入职位', trigger: 'blur'}],
                    engageForm: [{required: true, message: '请输入聘用形式', trigger: 'blur'}],
                    tiptopDegree: [{required: true, message: '请输入学历', trigger: 'blur'}],
                    specialty: [{required: true, message: '请输入专业', trigger: 'blur'}],
                    school: [{required: true, message: '请输入毕业院校', trigger: 'blur'}],
                    beginDate: [{required: true, message: '请输入入职日期', trigger: 'blur'}],
                    workState: [{required: true, message: '请输入工作状态', trigger: 'blur'}],
                    workID: [{required: true, message: '请输入工号', trigger: 'blur'}],
                    contractTerm: [{required: true, message: '请输入合同期限', trigger: 'blur'}],
                    conversionTime: [{required: true, message: '请输入转正日期', trigger: 'blur'}],
                    notworkDate: [{required: true, message: '请输入离职日期', trigger: 'blur'}],
                    beginContract: [{required: true, message: '请输入合同起始日期', trigger: 'blur'}],
                    endContract: [{required: true, message: '请输入合同结束日期', trigger: 'blur'}],
                    workAge: [{required: true, message: '请输入工龄', trigger: 'blur'}],
                }
    };
  },
  mounted: function () {
    
    this.tableDatas();
    this.menus();
  },
  watch: {
    tableData: function (val, oldVal) {
      console.log("watch val" + val);
      console.log(oldVal);
    },
  },

  methods: {
    changerouter(route){
      this.$router.push(route)
    },
    saveData(){
    saveRow(this.currentRow).then((res) => {
      console.log(res)
        this.state = res.status;
       
      });
       if(this.state === 0){
          alert('保存成功');
        }
      this.dialogVisible=false;
    },
     handleSizeChange(val) {
        this.pageSize = val;
        this.tableDatas()
      },
     
    tableDatas() {
      console.log("achive tableData");
      this.param.currentPage = this.currentPage;
      this.param.pageSize = this.pageSize
      console.log('page'+this.param.currentPage+',size:'+this.param.pageSize)
      test(this.param).then((res) => {
        this.result = res;
        this.tableData = res.obj.data;
        this.totalSize = res.obj.totalSize;
      });
      console.log('tableData'+this.tableData)
    },
     menus() {
      console.log("menus tableData");
      menu().then((res) => {
        this.result = res;
        console.log(res.obj);
        console.log(res.obj.showIndex)
        this.menuList = res.obj.list;
        this.showIndexList = res.obj.showIndex;
      });
    },
    setCurrent(row) {
      this.$refs.singleTable.setCurrentRow(row);
    },
    handleCurrentChange(val) {
      console.log('handleCurrentChange val:'+val)
      console.log('handleCurrentChange currentrow'+this.currentRow)
      if(val !== null){
        console.log('ssssddddd')
        this.currentRow = val
      }
      
    },
     handleCurrentChangePage(val) {
      this.currentPage = val
       this.tableDatas()
    },
    handleClick(row,disable) {
     this.dialogVisible = true;
     this.title = "这个人的详细信息";
     //调用具体的这条明细数据
     this.disabled=disable
    },
    test() {
      test().then((res) => {
        this.result = res;
      });
    },
  },
};
</script>

<style>
.el-header {
  background-color: #b3c0d1;
  color: #333;
  line-height: 60px;
}

.el-aside {
  color: #333;
}
</style>
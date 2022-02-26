<template>
  <div>
    <el-container style="height: 700px; border: 1px solid #eee">
      <el-aside width="200px" style="background-color: rgb(238, 241, 246)">
        <el-menu :default-openeds="showIndexList">
          <el-submenu :index="m.index" v-for="m in menuList" :key="m.key">
            <template slot="title"><i :class="m.menuType"></i>{{m.navName}}</template>
            <el-menu-item-group v-for=" t in m.childList" :key="t.title">
              <template slot="title">{{t.title}}
              </template>
              <el-menu-item index="1-1" v-for="option in t.options" :key="option.index">{{option}}</el-menu-item>
          
            </el-menu-item-group>
          </el-submenu>
        </el-menu>
      </el-aside>

      <el-container>
        <el-header style="text-align: right; font-size: 12px">
          <el-dropdown>
            <i class="el-icon-setting" style="margin-right: 15px"></i>
            <el-dropdown-menu slot="dropdown">
              <el-dropdown-item @click="test">查看</el-dropdown-item>
              <el-dropdown-item>新增</el-dropdown-item>
              <el-dropdown-item>删除</el-dropdown-item>
            </el-dropdown-menu>
          </el-dropdown>
          <span>王小虎</span>
        </el-header>
        <el-main>
          <el-table
            :data="tableData"
            height="550"
            border
            style="width: 100%"
            highlight-current-row
            ref="singleTable"
            @current-change="handleCurrentChange"
          >
            <el-table-column type="selection" width="55" fixed="" >
            </el-table-column>
            <el-table-column type="index" width="50" label="序号" fixed=""> </el-table-column>
            <el-table-column prop="date" label="日期" width="140">
            </el-table-column>
            <el-table-column prop="name" label="姓名" width="120" fixed>
            </el-table-column>
            <el-table-column prop="address" label="地址"> </el-table-column>
            <el-table-column fixed="right" label="操作" width="100">
              <template slot-scope="scope">
                <el-button
                  @click="handleClick(scope.row)"
                  type="text"
                  size="small"
                  >查看</el-button
                >
                <el-button type="text" size="small" @click="editClick(scope.row)">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
    
        <el-dialog
                :title="title"
                :visible.sync="dialogVisible"
                width="80%">
        <el-form :model="currentRow"  ref="empForm">
            <el-row>
              <el-col :span="6">
                            <el-form-item label="姓名:" prop="name">
                                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="currentRow.name"
                                          placeholder="请输入员工姓名"></el-input>
                            </el-form-item>
                        </el-col>
                        <!-- <el-col :span="6">
                            <el-form-item label="姓名:" prop="name">
                                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="currentRow.name"
                                          placeholder="请输入员工姓名"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="姓名:" prop="name">
                                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="currentRow.name"
                                          placeholder="请输入员工姓名"></el-input>
                            </el-form-item> -->
                        <!-- </el-col> -->
            </el-row>
          </el-form>
        </el-dialog>
        <el-dialog :title="title"
                :visible.sync="dialogVisibleEdit"
                width="80%">
        <div>
          <el-form :model="currentRow" :rules="rules" ref="empForm">
            <el-row>
              <el-col :span="6">  
                            <el-form-item label="姓名:" prop="name">
                                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="currentRow.name"
                                          placeholder="请输入员工姓名"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="姓名:" prop="name">
                                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="currentRow.name"
                                          placeholder="请输入员工姓名"></el-input>
                            </el-form-item>
                        </el-col>
                        <el-col :span="6">
                            <el-form-item label="姓名:" prop="name">
                                <el-input size="mini" style="width: 150px" prefix-icon="el-icon-edit" v-model="currentRow.name"
                                          placeholder="请输入员工姓名"></el-input>
                            </el-form-item>
                       </el-col> 
            </el-row>
          </el-form>
        </div>
        </el-dialog>
     <div class="block">
    
  </div>
  <div class="block">
    <el-pagination
      @size-change="handleSizeChange"
      @current-change="handleCurrentChange"
      :current-page="currentPage"
      :page-sizes="[15, 30, 50, 100]"
      :page-size="pageSize"
      layout="total, sizes, prev, pager, next, jumper"
      :total="totalSize">
    </el-pagination>
  </div>
      </el-container>
    </el-container>
   
  </div>
</template>

<script>
import { test,menu } from "network/test";
export default {
  name: "ElementUITest",
  data() {

    return {
      templateClassMenuType:['el-icon-menu','el-icon-setting','el-icon-setting','el-icon-setting'],
      tableData: null,
      menuList: null,
      result: null,
       showIndexList:null,
       title:"",
       dialogVisible:false,
       dialogVisibleEdit:false,
        currentRow:{},
        totalSize:0,
        currentPage:1,
        pageSize:15,
        param:{},
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
     handleSizeChange(val) {
        console.log(val);
      },
     
    tableDatas() {
      console.log("achive tableData");
      this.param.currentPage = this.currentPage;
      this.param.pageSize = this.pageSize
      test(this.param).then((res) => {
        this.result = res;
        this.tableData = res.obj.data;
        this.totalSize = res.obj.totalSize;
      });
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
      console.log('val'+val)
      this.currentPage = val;
      this.tableDatas();
      this.currentRow = val;
    },
    handleClick() {
     this.dialogVisible = true;
     this.title = "这个人的详细信息";
     //调用具体的这条明细数据
    },
     editClick() {
     this.dialogVisibleEdit = true;
     this.title = "这个人的详细信息编辑";
     //调用具体的这条明细数据
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
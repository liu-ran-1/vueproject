<template>
  <div>
    <el-container style="height: 800px; border: 1px solid #eee">
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
            height="600"
            border
            style="width: 100%"
            highlight-current-row
            ref="singleTable"
            @current-change="handleCurrentChange"
          >
            <el-table-column type="selection" width="55" fixed="">
            </el-table-column>
            <el-table-column type="index" width="50"> </el-table-column>
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
                <el-button type="text" size="small">编辑</el-button>
              </template>
            </el-table-column>
          </el-table>
        </el-main>
      </el-container>
    </el-container>
    <div style="margin-top: 20px">
      <el-button @click="setCurrent(tableData[1])">选中第二行</el-button>
      <el-button @click="setCurrent()">取消选择</el-button>
      <i class="el-icon-caret-left"></i>
      <i class="el-icon-caret-right"></i>
    </div>
  </div>
</template>

<script>
import { test,menu } from "network/test";
export default {
  name: "ElementUITest",
  data() {
    const item = {
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
    };
    const NaviList = {
      naviName: "",
      date: "2016-05-02",
      name: "王小虎",
      address: "上海市普陀区金沙江路 1518 弄",
      menuItem: {},
    };

    return {
      templateClassMenuType:['el-icon-menu','el-icon-setting','el-icon-setting','el-icon-setting'],
      tableData: null,
      menuList: null,
      currentRow: null,
      result: null,
       showIndexList:null
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
    tableDatas() {
      console.log("achive tableData");
      test().then((res) => {
        this.result = res;
        console.log(res.obj);
        this.tableData = res.obj;
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
      this.currentRow = val;
    },
    handleClick() {
      console.log("ssss");
      this.tableData.push(this.tableData[0]);
      this.test();
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
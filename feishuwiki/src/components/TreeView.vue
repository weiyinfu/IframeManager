<template>
  <div class="Book">
    <split-pane :min-percent="10" :default-percent="20" split="vertical">
      <template v-slot:paneL>
        <div class="left">
          <h1>{{ book.title }}</h1>
          <el-tree :data="book.content" draggable node-key="id" @node-drag-end="handleDragEnd" @node-click="clickNode">
            <template #default="{ node, data }">
              <div class="custom-tree-node">
                <span>{{ node.label }}</span>
                <span class="operation" v-if="book.editable">
                  <el-popover title="操作" :width="200" trigger="hover">
                    <template #reference>
                      More
                    </template>
                    <a @click.stop="append(data)"> 添加</a>
                    <a style="margin-left: 8px" @click.stop="remove(node, data)"> 删除 </a>
                    <a style="margin-left: 8px" @click.stop="edit(node, data)"> 编辑 </a>
                  </el-popover>
                </span>
              </div>
            </template>
          </el-tree>
        </div>
      </template>
      <template v-slot:paneR>
        <iframe ref="view"></iframe>
      </template>
    </split-pane>
  </div>
  <!-- 编辑item对话框 -->
  <el-dialog v-model="editDialog.visible" title="编辑">
    <el-form :model="editDialog">
      <el-form-item label="标题" label-width="140px">
        <el-input v-model="editDialog.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="URL" label-width="140px">
        <el-input v-model="editDialog.url"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="editDialog.visible = false">取消</el-button>
        <el-button type="primary" @click="editDialog.onConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>

  <!-- 新增item对话框 -->
  <el-dialog v-model="addDialog.visible" title="新增">
    <el-form :model="addDialog">
      <el-form-item label="标题" label-width="140px">
        <el-input v-model="addDialog.name" autocomplete="off" />
      </el-form-item>
      <el-form-item label="URL" label-width="140px">
        <el-input v-model="addDialog.url"></el-input>
      </el-form-item>
    </el-form>
    <template #footer>
      <span class="dialog-footer">
        <el-button @click="addDialog.visible = false">取消</el-button>
        <el-button type="primary" @click="addDialog.onConfirm">确定</el-button>
      </span>
    </template>
  </el-dialog>
</template>
<script setup lang="ts">
import type Node from 'element-plus/es/components/tree/src/model/node';
import { onMounted, reactive, ref } from "vue";
import { useRoute, useRouter } from "vue-router";
import SplitPane from "vue3-splitpane";
import * as api from "../api";
const components = [SplitPane];

interface TreeNode {
  id: number
  label: string
  children?: TreeNode[]
  url?: string
}

const route = useRoute();
const router = useRouter();
const view = ref(null);
const editDialog = reactive({
  name: '',
  url: '',
  visible: false,
  onConfirm: () => {
  },
})
const book = reactive({
  title: '',
  content: [],
  editable: false,
})
const addDialog = reactive({
  name: '',
  url: '',
  visible: false,
  onConfirm: () => {
  }
})
let id = 10000;

function append(data: TreeNode) {
  addDialog.visible = true;
  addDialog.name = '';
  addDialog.url = '';
  addDialog.onConfirm = () => {
    const newChild = { id: addDialog.url, url: addDialog.url, label: addDialog.name }
    if (!data.children) {
      data.children = []
    }
    data.children.push(newChild)
    book.content = [...book.content]
    addDialog.visible = false;
  }

}

function edit(node: Node, data: TreeNode) {
  editDialog.visible = true;
  editDialog.name = data.label;
  editDialog.url = data.url || '';
  editDialog.onConfirm = () => {
    data.label = editDialog.name;
    data.url = editDialog.url;
    editDialog.visible = false;
  }
}

const remove = (node: Node, data: TreeNode) => {
  const parent = node.parent
  const children: TreeNode[] = parent.data.children || parent.data
  const index = children.findIndex((d) => d.id === data.id)
  children.splice(index, 1)
  book.content = [...book.content]
}

function handleDragEnd() {
  console.log("drag end")
}

onMounted(() => {
  console.log(view);
  console.log(location)
  api.getBook(route.query.book).then(resp => {
    console.log('book')
    console.log(resp.data);
    book.title = resp.data.data.title;
    book.content = resp.data.data.pages;
    document.title = book.title;
  });
  if (route.query.url) {
    view._value.src = route.query.url;
  }
})
const clickNode = (node: TreeNode) => {
  console.log(node)
  console.log(view);
  if (node.url) {
    view._value.src = node.url;
    router.push({ path: route.path, query: { ...route.query, url: node.url } })
    console.log(route.query)
  }
}

</script>
<style lang="less">
.Book {
  height: 100%;

  .splitter-pane {
    height: 100%;
    overflow: auto;
    //scrollbar-color: black red;

    &.splitter-paneR {
      overflow: hidden;
    }

    iframe {
      width: 100%;
      height: 100%;
      border-width: 0;
      margin: 0;
      padding: 0;
    }
  }
}

.black-tree {
  @text-color: rgb(235, 235, 235);
  background: black;
  color: @text-color;

  .el-tree,
  .el-tree-node,
  .el-tree-node__content,
  .el-tree-node__content :focus {
    background: black;
    color: @text-color;
  }

  .el-tree-node__content:hover,
  .is-current .el-tree-node__content {
    background: #444444 !important;
    color: @text-color;
  }
}

.left {
  padding: 10px;


  .custom-tree-node {
    display: flex;
    width: 100%;
    flex-direction: row;
    justify-content: space-between;
    min-height: 23px;


    .operation {
      display: none;
      cursor: pointer;
    }

    &:hover .operation {
      display: unset;
    }
  }

  .work {
    cursor: pointer;
    display: flex;
  }
}
</style>
<template>
  <div class="container d-flex flex-row">
    <Backlog @taskDetail="taskDetail"></Backlog>
    <Todo @taskDetail="taskDetail"></Todo>
    <Doing @taskDetail="taskDetail"></Doing>
    <Done @taskDetail="taskDetail"></Done>

    <DetailModal :specificTaskDetail="specificTaskDetail"></DetailModal>
  </div>
</template>

<script>
import Backlog from '@/components/Backlog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'
import DetailModal from '@/components/DetailModal'

import db from '@/firebase'

export default {
  data () {
    return {
      specificTaskDetail: ''
    }
  },
  firebase: {
    root: db.ref(),
    tasks: db.ref().child('tasks')
  },
  methods: {
    taskDetail (payload) {
      console.log(payload)
      this.specificTaskDetail = payload
    }
  },
  components: {
    Backlog,
    Todo,
    Doing,
    Done,
    DetailModal
  }
}
</script>

<style lang="css">
</style>

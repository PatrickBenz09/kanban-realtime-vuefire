<template>
  <div class="p-3">
    <div class="card mb-3" style="max-width: 20rem;">
      <div class="card-header text-white bg-warning">To-Do</div>
      <div class="card-body">
        <!-- <h4 class="card-title">Danger card title</h4>
        <p class="card-text">blablablabla</p> -->
        <div v-for="todo in todos" class="card mb-3" style="max-width: 20rem;">
          <div class="card-header bg-dark text-white">{{ todo.title }}</div>
          <div class="card-body">
            <p class="card-text">Point: {{ todo.point }}</p>
            <p class="card-text">Assigned To: {{ todo.assign }}</p>
          </div>
          <button @click="todoDetail(todo)" class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#detailModal">Detail</button>
        </div>
      <div class="card-footer text-muted">

      </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase'

export default {
  firebase: {
    tasks: db.ref('tasks')
  },
  computed: {
    todos () {
      return this.tasks.filter(task => {
        return task.status === 1
      })
    }
  },
  methods: {
    todoDetail (todo) {
      this.$emit('taskDetail', todo)
    }
  }
}
</script>

<style lang="css">
</style>

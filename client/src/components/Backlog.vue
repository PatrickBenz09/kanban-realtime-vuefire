<template>
  <div class="p-3">
    <div class="card mb-3" style="max-width: 20rem;">
      <div class="card-header text-white bg-danger">Backlog</div>
      <div class="card-body">
        <!-- <h4 class="card-title">Danger card title</h4>
        <p class="card-text">blablablabla</p> -->
        <div v-for="backlog in backlogs" class="card mb-3" style="max-width: 20rem;">
          <div class="card-header bg-dark text-white">{{ backlog.title }}</div>
          <div class="card-body">
            <p class="card-text">Point: {{ backlog.point }}</p>
            <p class="card-text">Assigned To: {{ backlog.assign }}</p>
          </div>
          <button @click="backlogDetail(backlog)" class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#detailModal">Detail</button>
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
    backlogs () {
      return this.tasks.filter(task => {
        return task.status === 0
      })
    }
  },
  methods: {
    backlogDetail (backlog) {
      this.$emit('taskDetail', backlog)
    }
  }
}
</script>

<style lang="css">
</style>

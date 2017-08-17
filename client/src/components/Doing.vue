<template>
  <div class="p-3">
    <div class="card mb-3" style="max-width: 20rem;">
      <div class="card-header text-white bg-primary">Doing</div>
      <div class="card-body">
        <!-- <h4 class="card-title">Danger card title</h4>
        <p class="card-text">blablablabla</p> -->
        <div v-for="doing in doingTasks" class="card mb-3" style="max-width: 20rem;">
          <div class="card-header bg-dark text-white">{{ doing.title }}</div>
          <div class="card-body">
            <p class="card-text">Point: {{ doing.point }}</p>
            <p class="card-text">Assigned To: {{ doing.assign }}</p>
          </div>
          <button @click="doingDetail(doing)" class="btn btn-outline-success my-2 my-sm-0" type="button" data-toggle="modal" data-target="#detailModal">Detail</button>
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
    doingTasks () {
      return this.tasks.filter(task => {
        return task.status === 2
      })
    }
  },
  methods: {
    doingDetail (doing) {
      this.$emit('taskDetail', doing)
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="">
    <div class="modal fade" id="newTask" tabindex="-1" role="dialog" aria-labelledby="newTask" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">Add New Task</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <form>
              <div class="form-group">
                <label for="title">Title</label>
                <input v-model="taskForm.title" type="text" class="form-control" id="title" placeholder="Task Title">
              </div>
              <div class="form-group">
                <label for="description">Description</label>
                <textarea v-model="taskForm.description" class="form-control" id="description" rows="3"></textarea>
              </div>
              <div class="form-group">
                <label for="point">Point</label>
                <input v-model="taskForm.point" type="number" class="form-control" id="point" placeholder="Title Point">
              </div>
              <div class="form-group">
                <label for="assign">Assign To</label>
                <input v-model="taskForm.assign" type="text" class="form-control" id="assign" placeholder="Assign To">
              </div>
            </form>
          </div>
          <div class="modal-footer">
            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>
            <button @click="addTask" type="button" class="btn btn-primary" data-dismiss="modal">Save changes</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase'

// let tasksRef = db.ref().child('tasks')

export default {
  data () {
    return {
      taskForm: {
        title: '',
        description: '',
        point: 0,
        assign: '',
        status: 0
      }
    }
  },
  firebase: {
    root: db.ref(),
    tasks: db.ref('tasks')
  },
  methods: {
    addTask () {
      // tasksRef.push(this.taskForm)
      // tasksRef.orderByKey().limitToLast(2).on('value', function (snap) {
      //   console.log(snap.val())
      // })
      this.$firebaseRefs.tasks.push(this.taskForm)
    }
  }
}
</script>

<style lang="css">
</style>

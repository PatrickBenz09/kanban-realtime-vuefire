<template>
  <div class="">
    <div class="modal fade" id="detailModal" tabindex="-1" role="dialog" aria-labelledby="detailModal" aria-hidden="true">
      <div class="modal-dialog" role="document">
        <div class="modal-content">
          <div class="modal-header">
            <h5 class="modal-title" id="exampleModalLabel">{{ specificTaskDetail.title }}'s Detail</h5>
            <button type="button" class="close" data-dismiss="modal" aria-label="Close">
              <span aria-hidden="true">&times;</span>
            </button>
          </div>
          <div class="modal-body">
            <p>
              <b>Assigned To: </b> <br>
              {{ specificTaskDetail.assign }}
            </p>
            <p>
              <b>Description: </b> <br>
              {{ specificTaskDetail.description }}
            </p>
            <p>
              <b>Point: </b> <br>
              {{ specificTaskDetail.point }}
            </p>
          </div>
          <div class="modal-footer">
            <button @click="deleteTask" class="btn btn-danger mr-auto" type="button" name="button" data-dismiss="modal">Delete</button>

            <button v-if="specificTaskDetail.status === 1" @click="previousStateToBacklog" type="button" class="btn btn-primary" data-dismiss="modal">Backlog</button>
            <button v-if="specificTaskDetail.status === 2" @click="previousStateToToDo" type="button" class="btn btn-primary" data-dismiss="modal">To-Do</button>
            <button v-if="specificTaskDetail.status === 3" @click="previousStateToDoing" type="button" class="btn btn-primary" data-dismiss="modal">Doing</button>

            <button type="button" class="btn btn-secondary" data-dismiss="modal">Close</button>

            <button v-if="specificTaskDetail.status === 0" @click="nextStateToToDo" type="button" class="btn btn-primary" data-dismiss="modal">To-Do</button>
            <button v-if="specificTaskDetail.status === 1" @click="nextStateToDoing" type="button" class="btn btn-primary" data-dismiss="modal">Doing</button>
            <button v-if="specificTaskDetail.status === 2" @click="nextStateToDone" type="button" class="btn btn-primary" data-dismiss="modal">Done</button>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import db from '@/firebase'

export default {
  props: ['specificTaskDetail'],
  firebase: {
    tasks: db.ref('tasks')
  },
  methods: {
    nextStateToToDo () {
      this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).child('status').set(1)
    },
    nextStateToDoing () {
      this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).child('status').set(2)
    },
    nextStateToDone () {
      this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).child('status').set(3)
    },
    previousStateToBacklog () {
      this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).child('status').set(0)
    },
    previousStateToToDo () {
      this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).child('status').set(1)
    },
    previousStateToDoing () {
      this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).child('status').set(2)
    },
    deleteTask () {
      if (window.confirm(`Delete ${this.specificTaskDetail.title} ?`)) {
        this.$firebaseRefs.tasks.child(this.specificTaskDetail['.key']).remove()
      }
    }
  }
}
</script>

<style lang="css">
</style>

<template>
  <div class="container d-flex flex-row">
    <Backlog></Backlog>
    <Todo></Todo>
    <Doing></Doing>
    <Done></Done>
  </div>
</template>

<script>
import Backlog from '@/components/Backlog'
import Todo from '@/components/Todo'
import Doing from '@/components/Doing'
import Done from '@/components/Done'

export default {
  components: {
    Backlog,
    Todo,
    Doing,
    Done
  }
}
</script>

<style lang="css">
</style>

<template>
  <button class='Button__edit' @click="edit"><font-awesome-icon icon='user-edit' /></button>
</template>
<script>
  export default {
    methods: {
      edit() {
        this.$emit('edit')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .Button__edit {
    border: none;
    width: 100%;
    height: 100%;
    font-size: 1.2rem;
    background: rgb(21, 221, 21);
    color: #fff;
    border: 2px solid rgb(21, 221, 21);
    border-radius: 5px;
    transition: .3s;
    &:hover {
      cursor: pointer;
      background: #fff;
      color: rgb(21, 221, 21);
      border: 2px solid rgb(21, 221, 21);
    }
  }
</style>
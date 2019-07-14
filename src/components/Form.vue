<template>
  <div class="Form-Backdrop">
    <form class="Form">
      <label class='Form-Label' for='name'>Name</label>
      <input class='Form-Input' type='text' name='name' v-model="user.name"/>
      <label class='Form-Label' for='street'>Street</label>
      <input class='Form-Input' type='text' name='street' v-model="user.address.street"/>
      <label class='Form-Label' for='suite'>Suite</label>
      <input class='Form-Input' type='text' name='suite' v-model="user.address.suite"/>
      <label class='Form-Label' for='suite'>City</label>
      <input class='Form-Input' type='text' name='suite' v-model="user.address.city"/>
      <label class='Form-Label' for='phone'>Phone</label>
      <input class='Form-Input' type='text' name='phone' v-model="user.phone"/>
      <label class='Form-Label' for='email'>Email</label>
      <input class='Form-Input' type='email' name='email' v-model="user.email"/>
      <button class='Form-Button__submit' @click.prevent="submit">Submit</button>
    </form>
  </div>
</template>
<script>
  export default {
    props: ['user'],
    methods: {
      submit() {
        this.$emit('submit')
      }
    }
  }
</script>
<style lang="scss" scoped>
  .Form-Backdrop {
      position: fixed;
      top: 0;
      bottom: 0;
      left: 0;
      right: 0;
      background-color: rgba(0, 0, 0, 0.3);
      display: flex;
      justify-content: center;
      align-items: center;
    }

    .Form {
      background: #FFFFFF;
      box-shadow: 2px 2px 20px 1px;
      text-align: center;
      overflow-x: auto;
      display: flex;
      flex-direction: column;
      align-items: center;
      width: 60%;
      .Form-Label {
        font-size: 1.5rem;
        font-size: bold;
        text-transform: uppercase;
        margin: 5px 0;
      }
      .Form-Input {
        width: 50%;
        font-size: 1.2rem;
        border: none;
        border-bottom: 2px solid #000;
        margin: 0 0 5px 0;
      }
      .Form-Button__submit {
        width: 33%;
        margin: 15px 0;
        font-size: 2rem;
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
  }
</style>
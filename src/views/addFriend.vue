<template>
    <div>
      <div class="nav-title">Add &nbsp&nbsp friends</div>
      <van-form @submit="onSubmit" style="margin: 15px">
        <van-cell-group inset>
          <van-field
              v-model="name"
              name="name"
              label="name"
              placeholder="input friend name"
              :rules="[{ required: true, message: 'please input name' }]"
          />
          <van-field
              v-model="email"
              type="password"
              name="email"
              label="email"
              placeholder="email"
              :rules="[{ required: true, message: 'please input email' }]"
          />
          <van-field
              v-model="phone"
              type="password"
              name="email"
              label="phone"
              placeholder="phone"
              :rules="[{ required: true, message: 'please input phone' }]"
          />
        </van-cell-group>
        <div style="margin: 16px;">
          <van-button round block type="primary" native-type="submit">
            upload
          </van-button>
        </div>
      </van-form>
    </div>

</template>

<script>
export default {
  name: "addFriend",
  data() {
    return {
      name:'',
      email:'',
      phone: ''
    }
  },
  methods: {
    onSubmit() {
      console.log(789)
    }
  }
}
</script>

<style scoped>
.nav-title {
  padding: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  font: italic 1.7em Georgia, serif;
}
</style>

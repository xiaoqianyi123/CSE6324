<template>
  <div class='login'>
    <div class="loginText">
      <span>Login</span>
    </div>
    <form>
      <div class="lable">
        <span>Please enter your email*</span>
        <input type="text" v-model.lazy='phoneNumber'  />
      </div>
      <div class="lable">
        <span>Please enter your password*</span>
        <input type="password" v-model.lazy="password" />
      </div>
      <div class="code">
        <div class="lable">
          <span>Validation code*</span>
          <input type="text" v-model.lazy="codeKey" />
        </div>
        <div class="codeImg" @click="handleChangeCode()">
          <span>{{this.random}}</span>
        </div>
      </div>
<!--      <div class='remberPw'>-->
<!--        &lt;!&ndash; <van-checkbox v-model="checked" shape="square" icon-size="18px" @click="handleRemeber()">Remember password</van-checkbox> &ndash;&gt;-->
<!--        <span style="color:blue" @click="handleForget()">Forget password?</span>-->
<!--      </div>-->
      <div class="loginIN">
        <button @click="loginNow()">Login</button>
      </div>
    </form>
    <div class='Noaccount'>
      <span>Don't have an account yet?</span>
      <span @click="handleRegister()" class="reger">Registration</span>
    </div>
    <!-- <div class="otherLogin">
        <div class="otherway">Other login methods</div>
    </div> -->
  </div>
</template>
<script>
import Vue from 'vue'
import { mapMutations, mapState } from 'vuex'
import { Checkbox, Toast } from 'vant'
Vue.use(Checkbox).use(Toast)
export default {
  data () {
    return {
      apList: [
        {
          account: 'feerie6@gmail.com',
          password: '001125',
        },
        {
          account: 'massfi@gamil.com',
          password: 'M109A3'
        },
        {
          account: 'BurgerKing@bk.com',
          password: 'Ilikebg111'
        }
      ],
      checked: false,
      phoneNumber: '',
      password: '',
      codeKey: '',
      random: Math.random().toString(36).substr(2, 4),
      a: false,
      b: false
    }
  },
  computed: {
    ...mapState('login', ['namePassword'])
  },
  methods: {
    ...mapMutations('login', ['setToken', 'setNamePassword']),
    PhNb () {
      var reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
      if (reg.test(this.phoneNumber)) {
        this.a = true
      } else {
        Toast.fail('invalid email format')
        this.a = false
      }
    },
    code () {
      if (this.codeKey === this.random) {
        this.b = true
      } else {
        this.b = false
        Toast.fail('Verification code error')
      }
    },
    handleRegister () {
      this.$router.push('/signup')
    },
    handleChangeCode () {
      this.random = Math.random().toString(36).substr(2, 4)
    },
    handleForget () {
    },
    handleRemeber () {
    },
    loginNow () {
      let reg_email =  /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
      if(reg_email.test(this.phoneNumber)) {
        this.code()
      }
      else {
        Toast.fail('invalid email format')
      }

      if(reg_email.test(this.phoneNumber) && this.b) {
        let ifSuccess = false
        this.apList.forEach(item => {
          if(item.account == this.phoneNumber && item.password == this.password) {
            console.log('sep')
            Toast.success('login success')
            ifSuccess = true
            this.$router.push('/Index')
          }
        })
        if(ifSuccess) {
          return
        }
        Toast.fail('Password or mailbox error')
      }
      console.log(this.phoneNumber,this.password,this.codeKey)

    }
  }
}
</script>
<style lang="scss" scoped>
  .login{
    box-sizing: border-box;
    padding: 1.2rem .8rem .8rem;
    .loginText{
      font: 900 2rem "";
      margin-bottom: .8rem;
    }
    .code{
      display: flex;
      justify-content: flex-start;
    }
    .lable{
      flex: 3;
      margin-bottom: .5rem;
      font-size: .6rem;
      color: #4b4b4b;
      line-height: .8rem;
      span{
        font-weight: 700;
        display: block;
        margin-bottom: .5rem;
      }
      input{
        box-sizing: border-box;
        width: 100%;
        background: #fff;
        font-weight: 400;
        padding: .6rem;
        border-radius: .2rem;
        border: .5px solid #dfdfdf;
        margin: 0;
      }
    }
    .codeImg{
      flex: 1;
      background: url(https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1583428769002&di=b0d2f90134ef72a0e248c790eb0ee2f4&imgtype=0&src=http%3A%2F%2F5b0988e595225.cdn.sohucs.com%2Fimages%2F20170919%2F4a396e47d2c94abda851d0e4778bc889.jpeg) no-repeat;
      margin-left: 0.5rem;
      height: 2.3rem;
      margin-top: 1.2rem;
      line-height: 2.3rem;
      text-align: center;
      span{
        font-size: 2rem;
      }
    }
    .remberPw{
      display: flex;
      justify-content: space-between;
      margin-top: .75rem;
      font-size: 0.6rem;
    }
    .loginIN{
      button{
        width: 100%;
        height: 2.5rem;
        background: #1088f2;
        color: white;
        border: 0;
        border-radius: .2rem;
        margin-top: 2rem;
      }
    }
    .Noaccount{
      text-align: center;
      margin-top: .4rem;
      color: #707473;
      font-size: 0.6rem;
      .reger{
        color: #1088f2;
      }
    }
    .otherLogin{
      height: 8rem;
      line-height: 1.5rem;
      color: #707473;
      font-size: .7rem;
      text-align: center;
      margin-top: 2rem;
      .otherway{
        height: 6rem;
        line-height: 6rem;
      }
    }
  }
</style>

<template>
  <div class='login'>
    <div class="loginText">
      <span>Registration</span>
    </div>
    <div class="pro">
      <a>
        <span :class="isShowA" @click="handleA()">Personal</span>
      </a>
      <!-- <a>
        <span :class="isShowB" @click="handleB()">公司</span>
      </a> -->
    </div>
    <form>
<!--      <div class="lable">-->
<!--        <span>Please enter your name*</span>-->
<!--        <input type="text" v-model.lazy="name" @change="PhNb"/>-->
<!--      </div>-->
      <div class="lable">
        <span>Please enter your email*</span>
        <input type="text" v-model.lazy="email" />
      </div>
      <!-- <div class="code">
        <div class="lable">
          <span>Validation code*</span>
          <input type="text" v-model.lazy="codeKey" @change="code" />
        </div>
        <div class="codeImg" @click="handleChangeCode()">
          <span>{{this.random}}</span>
        </div>
      </div> -->
      <!-- <div class='phoneN'>
        <div class="lable">
          <span>请输入手机验证码*</span>
          <input type="text" v-model.lazy="phoneCode" @change="pCode" />
        </div>
        <div class="setNum">
          <button class='setN' @click="setPcode()">发送验证码</button>
        </div>
      </div> -->
      <div class="enter">
        <div class="lable">
          <span>Please enter your password*</span>
          <input type="password" v-model.lazy="password" />
        </div>
      </div>
      <div class="lable">
        <span>Please enter your password again*</span>
        <input type="password" v-model.lazy="passwordAgin" />
      </div>
      <div class="identity">
        <div style="font-size: 0.6rem; color: #4b4b4b; line-height: 0.8rem;font-weight: bold">Please choose your identity*</div>
        <div style="display: flex;align-items: center;margin-top: 5px;height: 30px">
          <input type="radio" value="1" v-model="identity0">
          <div style="font-size: 0.6rem; color: #4b4b4b; line-height: 0.8rem;font-weight: bold;margin-right: 10px;">Regular</div>
          <input type="radio" value="2" v-model="identity0">
          <div style="font-size: 0.6rem; color: #4b4b4b; line-height: 0.8rem;font-weight: bold">Coordinator</div>
        </div>
      </div>

      <!-- <div class='remberPw'>
        <div>
          <van-checkbox v-model="checked"  shape="square" icon-size="18px" style="margin-bottom:15px" @click="handleRemeber()">
              I agree
            <span>terms of use</span>
              and
            <span>privacy policy</span>
          </van-checkbox>
        </div>
      </div> -->

      <div class='Noaccount' style="text-align: left">
        <span>Forget your account?</span>
        <span @click="findPs" class="login">click here</span>
      </div>

      <div class="loginIN">
        <button @click="handleSin()">Registration</button>
      </div>
    </form>
    <div class='Noaccount'>
      <span>Already have an account?</span>
      <span @click="handleLogin()" class="login">Login</span>
    </div>
  </div>
</template>
<script>
import Vue from 'vue'
import { Checkbox, CheckboxGroup, Toast } from 'vant'
Vue.use(Checkbox).use(CheckboxGroup).use(Toast)
export default {
  data () {
    return {
      sameAccount: ['feerie6@gmail.com'],
      identity0: '',
      email: '',
      checked: false,
      checkedT: false,
      phoneNumber: '',
      password: '',
      passwordAgin: '',
      phoneCode: '',
      messageCode: '',
      codeKey: '',
      isDisabled: true,
      random: Math.random().toString(36).substr(2, 4),
      a: false,
      b: false,
      c: false,
      d: false,
      e: false,
      isShowA: {
        active: true
      },
      isShowB: {
        active: false
      }
    }
  },
  methods: {
    findPs () {
      this.$router.push('/FindPs')
    },
    PhNb () {
      var reg = /^[a-zA-Z0-9]+([-_.][A-Za-zd]+)*@([a-zA-Z0-9]+[-.])+[A-Za-zd]{2,5}$/
      if (reg.test(this.email)) {
        this.a = true
        // var temp = this.namePassword.some((val) => {
        //   return val.userName === this.phoneNumber
        // })
        // if (temp) {
        //   Toast.fail('该手机号已注册')
        //   this.a = false
        // } else {
        //   this.a = true
        //   console.log(this.a)
        // }
      } else {
        Toast.fail('invalid email format')
        this.a = false
      }
    },
    Pass () {
      // 至少8个字符，至少1个大写字母，1个小写字母和1个数字：
      var reg = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/
      if (reg.test(this.password)) {
        this.b = true
        console.log(this.b)
      } else {
        Toast.fail('invalid password')
        this.b = false
        console.log(this.b)
      }
    },
    passAgin () {
      if (this.passwordAgin === this.password) {
        this.c = true
      } else {
        Toast.fail('2 input inconsistent')
        this.c = false
      }
    },
    code () {
      if (this.codeKey === this.random) {
        this.d = true
      } else {
        Toast.fail('Verification code error')
        this.d = false
      }
    },
    pCode () {
      if ((this.phoneCode * 1) === this.messageCode) {
        this.e = true
      } else {
        Toast.fail('Mobile phone verification code error')
        this.e = false
      }
    },
    handleSin () {
      console.log(this.email)
      console.log(this.sameAccount[0])
      this.PhNb()
      if (this.a) {
        this.Pass()
        if (this.a && this.b) {
          this.passAgin()
          if (this.a && this.b && this.c) {
            if (!this.identity0) {
              Toast.fail('please choose identity')
              return
            }
            let p = true
            this.sameAccount.forEach(item => {
              if (item == this.email) {
                Toast.fail('this email has been register')
                p = false
              }
            })
            if (p) {
              Toast.success('registration success')
              this.$router.push('/Index')
            }
          }
        }
      }
    },
    handleLogin () {
      this.$router.push('/login')
    },
    handleChangeCode () {
      this.random = Math.random().toString(36).substr(2, 4)
    },
    handleRemeber () {
    },
    setPcode () {
      this.$axios({
        url: `http://39.99.182.33/api/users/sendCode?tel=${this.phoneNumber}`,
        method: 'get'
      }).then(res => {
        console.log(res)
        if (res.data.code === '10001') {
          Toast.fail(res.data.message)
        } else if (res.data.code === '10004') {
          Toast.success(res.data.message)
          this.messageCode = res.data.data
        } else if (res.data.code === '10005') {
          Toast.fail(res.data.message)
        }
      })
    },
    handleA () {
      this.isShowA.active = true
      this.isShowB.active = false
    },
    handleB () {
      this.isShowA.active = false
      this.isShowB.active = true
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
    .pro{
      height: 2rem;
      line-height: 2rem;
      margin-bottom: 1rem;
      display: flex;
      justify-content: flex-start;
      a{
        margin-right: 1.6rem;
        font-weight: 700;
      }
      .active{
        color: #1088f2;
      }
      .active::after{
        content: "";
        display: block;
        width: 1.8rem;
        height: .1rem;
        margin-top: .2rem;
        background-color: #1088f2;
      }

    }
    .code{
      display: flex;
      justify-content: flex-start;
      margin-bottom: 0.6rem;
    }
    .enter{
      margin-bottom: 0.6rem;
    }
    .phoneN{
      display: flex;
      justify-content: space-between;
      margin-bottom: 0.6rem;
      .lable{
        flex: 2;
      }
      .setNum{
          flex: 1;
          position: relative;
        .setN{
          color: white;
          width: 100%;
          position: absolute;
          top:1.1rem;
          left: 0.5rem;
          right: 0;
          height: 2.3rem;
          background: #1088f2;
          border: 0;
          border-radius: 0.2rem;

        }
      }

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
      .login{
        color: #1088f2;
      }
    }
    .remberPw{
      display: flex;
      justify-content: flex-start;
      margin-top: .75rem;
      font-size: 0.6rem;
      .checkbox{
        width: 1.2rem;
        height: 1.2rem;
        background: none;
        vertical-align: middle;
      }
      span{
        color: #1088f2;
      }
    }
  }
</style>

<template>
<div style="padding: 15px">
  <div class="friend-name" style="font: italic 2em Georgia, serif;" >
    Friend Louis
  </div>
  <div class="friend-info">
    <div>name:&emsp;&emsp;&emsp;&emsp;&emsp;&emsp;Louis</div>
    <div>email:&emsp;&emsp;feerie6@gmail.com</div>
    <div>description:&emsp;&emsp;is my best friend</div>
  </div>
  <div class="record-title">
    Text
  </div>
  <div class="record-text" v-for="(item,index) in [1,2,3]" :key="item">
    Once upon a time there was an old mother pig who had three little pigs and not enough food to feed them. So when they were old enough, she sent them out into the world to seek their fortunes.
    <div style="text-align: right">2022/01/21</div>
  </div>
  <div class="record-text">
    <van-field  v-model="text"  type="textarea" style="background: #EB7347;font-size: 1.2rem; font-family: Lucida Grande" />
  </div>
  <van-button type="primary" block color="#EB7347" class="record-text" style="margin-top: 10px;border-radius: 5px;padding: 0px" @click="addText">
    add text
  </van-button>

  <div class="record-title">picture</div>
  <div class="image-list">
    <van-uploader v-model="imageList" multiple preview-size="120"/>
<!--    <van-image-->
<!--        width="120"-->
<!--        height="120"-->
<!--        src="https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg"-->
<!--        radius="6"-->
<!--        v-for="item in [1,2,3]"-->
<!--        style="margin-right: 10px"-->
<!--    />-->
  </div>
  <div></div>
<!--  <div class="record-title">video</div>-->
<!--  <div class="image-list">-->
<!--    <van-uploader v-model="videoList" multiple preview-size="120" accept="video/*"/>-->
<!--  </div>-->
  <div></div>
</div>
</template>

<script>
export default {
  name: "friendDetail",
  data () {
    return {
      text:'',
      show: false,
      imageList:[{
        url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
        isImage: true
      },
        {
          url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          isImage: true
        },
        {
          url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          isImage: true
        },
        {
          url: 'https://fastly.jsdelivr.net/npm/@vant/assets/cat.jpeg',
          isImage: true
        }
      ],
      videoList:[
        {
          url: 'http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4'
        }

      ]
    }
  },
  methods: {
    addText() {
      this.show = true
    }
  }

}
</script>

<style scoped>
  .friend-name {
    text-align: center;
  }
  .record-title {
    margin-top: 10px;
    font: italic 1.7em Georgia, serif;
  }
  .record-text {
    font-family: "Lucida Grande";
    font-size: 1.2rem;
    background: #EB7347;
    border-radius: 5px;
    padding:10px;
    margin-top: 10px;
    box-shadow: 2px 2px 2px #888888;
    text-indent: 1em;
    word-break: break-all
  }
  .record-picture {
    border-radius: 5px;
  }
  .text-add {
    text-align: center;
  }
  .image-list {
    margin-top: 15px;
    margin-bottom: 15px;
    display: flex;
    flex-wrap: nowrap;
  }
  .friend-info {
    font-family: "Lucida Grande";
    font-size: 1.2rem;
    background: #EB7347;
    border-radius: 5px;
    padding:10px;
    margin-top: 10px;
    box-shadow: 2px 2px 2px #888888;
    word-break: break-all
  }
</style>

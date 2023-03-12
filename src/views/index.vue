<template>
  <div>
    <!-- 首頁大圖 -->
    <div class="imgDiv">
      <div class="imgDiv2">
        <div class="d-flex flex-column align-items-end imgDiv3">
          <p>保證選用最新鮮的水果、蔬菜，24H內送達</p>
          <button class="imgDivButton">立即下單</button>
        </div>
      </div>
    </div>
    <!-- 小農產品 -->
    <div class="sn d-flex justify-content-center">
      <div class="sn1 d-flex justify-content-center">
        <div class="sn1-dd d-flex flex-column">
          <div
            class="d-flex justify-content-center"
            style="margin-bottom: 16px"
          >
            <h2>小農產品</h2>
          </div>
          <div class="row">
            <div class="col sn-height col-md-4">
              <div class="sn-col-4-d setAfter">
                <a href="" class="sn-a1">
                  <img src="../assets/小農產品橘子.jpg" alt="" />
                  <div id="Fruits" class="sn-a-d d-flex flex-column justify-content-center align-items-center" 
                  @mouseenter="change1e" 
                  @mouseleave="change1l" 
                  :style="{'opacity':change1}">
                    <h3>Fruits</h3>
                    <h3>新鮮水果</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="col font sn-height c0l-md-8">
              炎炎夏日，最需要好吃的水果來消暑，選用當季水果，產地直送，無農藥噴灑，健康的首選。
            </div>
          </div>
          <div class="row VegetablesRow">
            <div class="col font sn-height c0l-md-8">
              無農藥使用，選用當季蔬菜，合理的價格，買的安心，吃的放心。
            </div>
            <div class="col sn-height col-md-4">
              <div class="sn-col-4-d">
                <a href="" class="sn-a2">
                  <img src="../assets/菠菜.jpg" alt="" />
                  <div id="Vegetables" class="sn-a-d d-flex flex-column justify-content-center align-items-center" 
                  @mouseenter="change1e" 
                  @mouseleave="change1l" 
                  :style="{'opacity':change2}">
                    <h3>Vegetables</h3>
                    <h3>當季蔬菜</h3>
                  </div>
                </a>
              </div>
            </div>
          </div>
          <div class="row JuiceRow">
            <div class="col sn-height col-md-4">
              <div class="sn-col-4-d">
                <a href="" class="sn-a3">
                  <img src="../assets/果汁.jpg" alt="" />
                  <div id="Juice" class="sn-a-d d-flex flex-column justify-content-center align-items-center" 
                  @mouseenter="change1e" 
                  @mouseleave="change1l" 
                  :style="{'opacity':change3}">
                    <h3>Juice</h3>
                    <h3>清涼果汁</h3>
                  </div>
                </a>
              </div>
            </div>
            <div class="col font sn-height c0l-md-8">
              炎炎夏日，需要清涼的果汁來消暑，絕不添加人工色素，可放心食用。
            </div>
          </div>
        </div>
      </div>
    </div>
    <!-- 熱銷商品 -->
      <div class="hotDiv ">
        <div class="d-flex justify-content-center">
          <h2>熱銷商品</h2>
        </div>
        <!-- slidesPerView:一次顯示幾個輪播頁 
             spaceBetween:輪播頁的間隔距離
             slidesPerGroup:每次滑動時移動幾個輪播頁
        -->
        <swiper
          :loop="true"
          :slidesPerView="swipernum"
          :spaceBetween="10"
          :slidesPerGroup="1"
          :pagination="{
            //表示可以點擊分頁器到達指定輪播頁
            clickable: true,
            //產生分頁器
            dynamicBullets: true,    
          }"
          :autoplay="{
            delay: 2500,
            //向左滑動
            reverseDirection:true
          }"
          :modules="modules"
          v-if="dataImg"
        >
          <swiperSlide v-for="val,index in dataImg" :key="index">
            <div class="swiper-div">
              <div class="swiper-div-d">
                <img :src="val.img" alt="" />
              </div>
              <div class="d-flex flex-column card-d">
                <div class="d-flex justify-content-between">
                  <div style="font-size:20px; color:#00796b">{{val.pname}}</div>
                  <div class="card-d-d-d2 align-self-start" style="font-size:12px">{{val.type}}</div>
                </div>
                <div style="text-decoration:line-through;">原價 {{val.price}} 元</div>
                <div style="font-size:20px">網路價 {{val.webpeice}} 元</div>
              </div>
            </div>
          </swiperSlide>
        </swiper>
      </div>
      <div class="backTop" id="up">
      <a href="javascript:window.scrollTo(0,0)" class="backTopa"><img src="../assets/箭頭.png" alt=""></a>
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});
const windowWidth = ref(window.innerWidth);
// 根據對應寬度調整字體大小
const fontSize = ref("");
const divBig = ref("");
const smallno = ref("");
const swipernum = ref(4)
// 根據螢幕改變
watchEffect(() => {
  if (windowWidth.value > 1200) {
    fontSize.value = "35px";
    divBig.value = "1110px";
    smallno.value = "1140px";
    swipernum.value =4;
  }
  if (windowWidth.value < 1200 && windowWidth.value > 997) {
    fontSize.value = "25px";
    divBig.value = "930px";
    smallno.value = "960px";
    swipernum.value =3;
  } else if (windowWidth.value < 996 && windowWidth.value > 769) {
    fontSize.value = "20px";
    divBig.value = "690px";
    smallno.value = "720px";
    swipernum.value =2;
  } else if (windowWidth.value < 768 && windowWidth.value > 576) {
    fontSize.value = "20px";
    divBig.value = "510px";
    smallno.value = "540px";
    swipernum.value =1;
  } else if (windowWidth.value < 575) {
    fontSize.value = "18px";
    swipernum.value =1;
  }
});
// 調整輪播========================================
import { Swiper, SwiperSlide } from "swiper/vue";
import { Autoplay, Pagination } from "swiper";
import "swiper/css";
import "swiper/css/pagination";
import img0 from '../assets/小農產品橘子.jpg'
import img1 from '../assets/蘋果.jpg'
import img2 from '../assets/草莓.jpg'
import img3 from '../assets/葡萄.jpg'
import img4 from '../assets/高麗菜.jpg'
import img5 from '../assets/番茄.jpg'
const modules = [Pagination,Autoplay];
const dataImg = 
[
  {img:img0,
   type:'水果',
   price:'1090',
   webpeice:'999',
   pname:'帝王柑',
   },
  {img:img1,
   type:'水果',
   price:'450',
   webpeice:'399',
   pname:'富士蘋果',
   },
  {img:img2,
   type:'水果',
   price:'550',
   webpeice:'454',
   pname:'麝香草莓',
   },
  {img:img3,
   type:'水果',
   price:'789',
   webpeice:'666',
   pname:'巨峰葡萄',
   },
  {img:img4,
   type:'蔬菜',
   price:'429',
   webpeice:'390',
   pname:'高山高麗菜',
   },
  {img:img5,
   type:'蔬菜',
   price:'699',
   webpeice:'666',
   pname:'多汁牛番茄',}

    ] 
// ===============================================
//改變小農產品hover================================
const change1 = ref(0);
const change2 = ref(0);
const change3 = ref(0);
//移入時判斷是哪個id顯示文字
const change1e = (event)=>{
  switch (event.target.id) {
    case 'Fruits':
      change1.value=1
      break;
    case 'Vegetables':
      change2.value=1
      break;
    case 'Juice':
      change3.value=1
    break;
  }
}
//移出時判斷是哪個id隱藏文字
const change1l = (event)=>{
  switch (event.target.id) {
    case 'Fruits':
      change1.value=0
      break;
    case 'Vegetables':
      change2.value=0
      break;
    case 'Juice':
      change3.value=0
    break;
  }
}
// ==============================================
// 監聽Y軸滾輪===============================================
  window.addEventListener("scroll", function () {
    // 判斷滾輪位置
    var stop = document.body.scrollTop + document.documentElement.scrollTop;
    const box = document.querySelector('.backTop');
    const box1 = document.querySelector('.VegetablesRow');
    const box2 = document.querySelector('.JuiceRow');
    if (stop > 100) {
      // 回到頂端按鈕顯示
      box.classList.add('hide');
      box1.classList.add('hide');
      }
    else {
      // 回到頂端按鈕隱藏
      box.classList.remove('hide');
      box1.classList.remove('hide');
      box2.classList.remove('hide');
      }
    if (stop > 250) {
      // 回到頂端按鈕顯示
      box2.classList.add('hide');
      }
      else {
      // 回到頂端按鈕隱藏
      box2.classList.remove('hide');
      }
  });
// =========================================================
</script>

<style>
.imgDiv {
  width: 100vw;
  height: 60vh;
  padding: 0px 10px;
  background-image: url(https://images.unsplash.com/photo-1582287104445-6754664dbdb2?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8MzMwfHxvcmFuZ2V8ZW58MHx8MHx8&auto=format&fit=crop&w=500&q=60);
  background-size: cover;
  /* 圖片位置調整 */
  background-position: -400px center;
  /* 圖片不重複 */
  background-repeat: no-repeat;
  display: flex;
  justify-content: center;
}
.imgDiv2 {
  width: v-bind(divBig);
  height: 100%;
  display: flex;
  justify-content: end;
  align-items: center;
}
p {
  font-size: v-bind(fontSize);
}
.font {
  font-size: 16px;
}
.imgDivButton {
  position: relative;
  width: 90px;
  height: 38px;
  border: 1px solid green;
  background-color: transparent;
  box-sizing: border-box;
  border-radius: 5px;
  color: green;
}
.imgDivButton:hover {
  background-color: green;
  color: rgb(255, 255, 255);
}
.imgDivButton:active {
  box-shadow: 0px 0px 1px 3px #00ad99;
  background-color: green;
  color: white;
}
.sn {
  width: 100vw;
}
.sn1 {
  width: v-bind(smallno);
}
.sn1-dd {
  width: 80%;
}
.sn-col-4-d {
  position: relative;
  display: flex;
  justify-content: center;
  align-items: center;
  padding: 10px;
  border: 1px solid #dee2e6;
  border-radius: 5px;
  box-sizing: border-box;
  max-width: 100%;
  min-width: 30px;
  aspect-ratio: 1;
  /* 維持比例1/1 */
}
.sn-a-d{
  width: 100%;
  height: 100%;
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
  color: white;
  background-color: rgb(99, 99, 99,0.4);
}
.sn-a1, 
.sn-a2, 
.sn-a3 {
  width: 100%;
  aspect-ratio: 1;

}

.sn-a1 > img, 
.sn-a2 > img,
.sn-a3 > img{ 
  width: 100%;
  max-width: 230px;
  aspect-ratio: 1;
  object-fit: cover;
}
.sn-height {
  max-height: 250px;
  display: flex;
  justify-content: center;
  align-items: center;
}
.imgWidth {
  display: block;
  width: 50vw;
  height: 20vh;
  object-fit: cover;
}
.ss {
  width: 50px;
  height: 100px;
  background-color: red;
}
.swiper-div {
  height: 340px;
}
.swiper-div-d {
  width: 100%;
  height: 60%;
}
.swiper-div-d > img {
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-d-d-d2 {
  background-color: #6c757d;
  color: white;
  border-radius: 5px;
  width: 33px;
  text-align: center;
}
.card-d {
  padding: 10px;
  box-sizing: border-box;
  border: 1px solid black;
}
.hotDiv{
  width: 100vw;
  padding: 0px 10%;
  margin-top:60px ;
}
.swiper{
    --swiper-theme-color: #ff6600;/* 设置Swiper风格 */
    --swiper-navigation-color: #00ff33;/* 单独设置按钮颜色 */
    --swiper-navigation-size: 30px;/* 设置按钮大小 */
  }
  .backTop{
    position: fixed;
    bottom: 20px;
    right: 20px;
    z-index: 999;
    width: 60px;
    height: 60px;
    background-color: white;
    border: 1px solid #9e9e9e;
    box-sizing: border-box;
    border-radius: 30px;
    box-shadow: 0px 4px 18px rgb(180 180 180 / 75%);
    transform: translateY(200%);
    opacity: 0;
    transition: transform 1s ease-out,opacity 1s ease-out;
}
.VegetablesRow{
  position: relative;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 1s ease-out,opacity 1s ease-out;
}
.JuiceRow{
  position: relative;
  transform: translateY(100%);
  opacity: 0;
  transition: transform 1s ease-out,opacity 1s ease-out;

}
.hide {
  transform: translateY(0%);
  opacity: 1;
}
.backTopa{
  width: 100%;
  height: 100%;
  text-decoration:none;
  display: flex;
  justify-content: center;
  align-items: center;
  color: white;
  position: relative;
}
.backTopa>img{
  width: 30%;
  height: 30%;
}
.backTopa:hover{
  text-decoration:none;
  color: white;
}

</style>
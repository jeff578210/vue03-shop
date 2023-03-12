<template>
  <div class="footer d-flex justify-content-center">
    <div class="footer-d">
        <div class="row">
            <div class="d-flex justify-content-between" style="padding:15px">
                <div> NUTRITION</div>
                <div class="d-flex">
                    <div class="footer-d-d">
                    <a href=""><img :src="imgfb" alt="" class="a-img1"></a>
                    </div>
                    <div class="footer-d-d">
                        <a href=""><img :src="imgig" alt="" class="a-img1"></a> 
                    </div>
                    <div class="footer-d-d">
                        <a href=""><img :src="imgli" alt="" class="a-img1"></a>
                    </div>
                </div>

            </div>
        </div>
        <div class="footer-span"></div>
    參考網站:https://brook110413.github.io/vue-fruitstore/#/
    </div>
  </div>
</template>

<script setup>
import { ref, onMounted, watchEffect } from "vue";
import { useRouter, RouterLink } from "vue-router";
const cooliesvalue = ref("");
const changeHurberger = ref(false);
onMounted(() => {
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
});
const navbarWidth = ref("1140px");
const windowWidth = ref(window.innerWidth);
watchEffect(() => {
  if (windowWidth.value > 1200) {
    navbarWidth.value = "1140px";
  }
  if (windowWidth.value < 1200 && windowWidth.value > 997) {
    navbarWidth.value = "960px";
  } else if (windowWidth.value < 996 && windowWidth.value > 769) {
    navbarWidth.value = "720px";
  } else if (windowWidth.value < 768 && windowWidth.value > 576) {
    navbarWidth.value = "540px";
  } else if (windowWidth.value < 575) {
    navbarWidth.value = "525px";
  }
});
import imgfb from '../assets/facebook.svg'
import imgig from '../assets/instagram.svg'
import imgli from '../assets/line.svg'
</script>

<style>
.footer {
  width: 100vw;
  height: 10vh;
  background-color: green;
  color: white;
}
.footer-d{
    width: v-bind(navbarWidth);
    height: 100%;
}
.a-img1{
    width: 30px;
    height: 30px;
    object-fit: cover;
    
}
.footer-d-d{
    margin: 0px 5px;
    background-color: transparent;
}
.footer-span{
    width: 100%;
    height: 1px;
    background-color: white;
    border-top: 1px solid white;
}
</style>
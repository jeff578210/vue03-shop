<template>
  <div>
    <div class="a d-flex justify-content-center">
      <div class="b d-flex">
        <div>
          <routerLink to="/" class="navNUTRITION">NUTRITION</routerLink>
        </div>
        <div v-if="windowWidth > 996">
          <routerLink to="/Product/all" class="navbutton"
            >所有商品</routerLink
          >
          <routerLink to="/Product/fruit" class="navbutton">現摘水果</routerLink>
          <routerLink to="/Product/vegetable" class="navbutton">當季蔬菜</routerLink>
          <routerLink to="/Product/juice" class="navbutton"
            >濃縮果汁</routerLink
          >
        </div>
        <div class="mlAuto d-flex">
          <div class="navicon">
            <a href="/favorite">
              <img src="../assets/heart (1).svg" alt="" />
            </a>
          </div>
          <div class="navicon">
            <img src="../assets/cart-fill.svg" alt="" />
          </div>
        </div>
      </div>
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
const navbarWidth = ref('1140px');
const windowWidth = ref(window.innerWidth);
watchEffect(() => {
  if(windowWidth.value > 1200){
    navbarWidth.value ='1140px';
  }if (windowWidth.value < 1200 && windowWidth.value > 997) {
    navbarWidth.value ='960px';
  }else if(windowWidth.value < 996 && windowWidth.value > 769) {
    navbarWidth.value = '720px';
  }else if(windowWidth.value < 768 && windowWidth.value > 576) {
    navbarWidth.value = '540px';
  }else if(windowWidth.value < 575) {
    navbarWidth.value = '525px';
  }
});
</script>

<style>
.mlAuto {
  margin-left: auto;
}
.a {
  position: fixed;
  background: hsla(0, 0%, 100%, 0.87);
  box-shadow: 0px 4px 18px rgba(180, 180, 180, 0.75);
  width: 100vw;
  height: 56px;
  margin: 0;
  align-items: center;
  z-index: 2;
  top:0;
}
.b {
  width: v-bind(navbarWidth);
  height: 40px;
  align-items: center;
}
.navbutton {
  padding: 10px;
  text-decoration: none;
  outline: none;
  color: black;
}
.navbutton:hover {
  color: black;
}
.navNUTRITION {
  padding: 10px;
  text-decoration: none;
  outline: none;
  color: black;
}
.navNUTRITION:hover {
  color: black;
}
.navicon {
  padding: 10px;
}
.navicon>img {
  width: 20px;
  height: 20px;
}
</style>
<template>
<div class="d-flex justify-content-center">
  <div class="container fruit-d">
    <div class="row rowWidth" v-if="Fruits">
      <div class="col-md-4 col-12` col-sm-6 col-lg-3 d-flex flex-column" v-for="val,index in Fruits" :key="index">
        <a href="" class="a-type col3border">
          <div class="card-d ">
            <div class="card-d-a" @click.prevent="setlocalStorege" >
              <img v-if="!val.favorite" src="../../assets/愛心.svg" alt="" :id="val.pname">
              <img v-if="val.favorite" src="../../assets/實心愛心.svg" alt="" :id="val.pname">
            </div>
            <img :src="val.img" alt="" id="cardimg">
          </div>
          <div class="card-dd d-flex flex-column">
            <div class="d-flex justify-content-between">
              <div style="font-size:20px;color:#00796b">{{val.pname}}</div>
              <div class="card-dd-type align-self-start" style="font-size:12px">{{val.type}}</div>
            </div>
            <div style="text-decoration:line-through;color:black">原價 {{val.price}} 元</div>
                  <div style="font-size:20px ;color:black">網路價 {{val.webpeice}} 元</div>
          </div>
          <div class="card-footer">
            <div style="color:white">加入購物車</div>
          </div>
        </a>
      </div>
    </div>
  </div>
</div>
</template>

<script setup>
// 監聽螢幕寬度=====================================
import { ref, onMounted, watchEffect } from "vue";
import { useRouter, RouterLink } from "vue-router";
const cooliesvalue = ref("");
const changeHurberger = ref(false);
onMounted(() => {
  // 監聽螢幕縮放
  window.addEventListener("resize", function () {
    windowWidth.value = window.innerWidth;
  });
  // ===========================================
  // 如果沒有localStorage就建立一個
  if(!localStorage.getItem('favorite')){
    localStorage.setItem('favorite', []);
  }else{
    arrfavorite.value = JSON.parse(localStorage.getItem('favorite'))
  }
  // ===========================================
});
const navbarWidth = ref('1140px');
const windowWidth = ref(window.innerWidth);
const aa = ref(false)
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
// ==================================================
// ==================pinia引入Fruits
import {usegetFruitsStore} from '../../stores/getFruits.js' 
import {storeToRefs} from 'pinia'
const getFruitsStore = usegetFruitsStore();
const {Fruits} = storeToRefs(getFruitsStore)
// ==================================================
// 點擊愛心加入收藏使用localStorage紀錄===================================
const addFavorite = ref(false);
const arrfavorite = ref([]);
const setlocalStorege =(event)=>{
  addFavorite.value = !addFavorite.value
  // 在陣列中尋找有沒有傳入的id有:回傳index(索引值) 沒有:回傳-1
  const index = arrfavorite.value.indexOf(event.target.id);
  if(index==-1){
    // 如果沒找到就push到陣列中
    arrfavorite.value.push(event.target.id);
    // 轉成字串才能存到localStorage
    localStorage.setItem('favorite', JSON.stringify(arrfavorite.value));
    // console.log(Fruits.value);
    setFavorite(Fruits, event.target.id);
  }else{
    arrfavorite.value.splice(index, 1);
    localStorage.setItem('favorite',JSON.stringify(arrfavorite.value));
    setFavorite2(Fruits, event.target.id); 
  }
}
// ====================================================
function setFavorite(Fruits, X) {
  // 將選擇品項的最愛填滿
  Fruits.value.forEach(function(fruit) {
    if (fruit.pname === X) {
      fruit.favorite = true;
    }
  });
}
function setFavorite2(Fruits, X) {
  // 將選擇品項的最愛變成空心
  Fruits.value.forEach(function(fruit) {
    if (fruit.pname === X) {
      fruit.favorite = false;
    }
  });
}

// ===================================================

</script>


<style scoped>
.fruit-d{
  margin: 80px 0 0 0 ;
}
.card-d{
  width: 100%;
  height: 200px;
  overflow: hidden;
  position: relative;
}
.card-d-a{
  position: absolute;
  top: 3px;
  right: 4px;
  z-index: 999;
}
.card-d-a>img{
  width: 25px;
  height: 25px;
  filter: brightness(0) invert(1);
  z-index: 99;
}
#cardimg{
  width: 100%;
  height: 100%;
  object-fit: cover;
}
.card-dd{
  padding: 15px;
}
.card-dd-type{
background-color: #6c757d;
  color: white;
  border-radius: 5px;
  width: 33px;
  text-align: center;
}
.card-footer{
  width: 100%;
  height: 38px;
  background-color: green;
  display: flex;
  justify-content: center;
  align-items: center;
}
a{
  text-decoration: none;
  outline: none;
  color: none;
}
a:hover{
  color: none;
}
.col3border{
  border: 1px solid black;
  box-sizing: border-box;
  border-radius: 5px;
  margin: 10px 10px 20px 10px ;
  padding: 0;
  box-shadow: 0px 4px 0px rgba(180, 180, 180, 0.75);
  transition:all 0.5s ease-out ;
}
.col3border img{
  transition:all 0.5s ease-out ;
}
.col3border:hover{
  box-shadow: 0px 4px 80px rgba(180, 180, 180, 0.75);
}
.col3border:hover img{
  box-shadow: 0px 4px 80px rgba(180, 180, 180, 0.75);
  transform: scale(1.05,1.05);
}



</style>
import { defineStore } from "pinia";
import { ref } from 'vue';
import img1 from '../assets/櫻桃.jpg'
import img2 from '../assets/香蕉.jpg'
import img3 from '../assets/小農產品橘子.jpg'
import img4 from '../assets/蘋果.jpg'
import img5 from '../assets/西瓜.jpg'
import img6 from '../assets/鳳梨.jpg'
import img7 from '../assets/芒果.jpg'
import img8 from '../assets/水蜜桃.jpg'
import img9 from '../assets/草莓.jpg'
import img10 from '../assets/葡萄.jpg'
export const usegetFruitsStore =defineStore("getFruits",()=>{
    const Fruits =ref([
        {img:img1,
            type:'水果',
            price:'799',
            webpeice:'759',
            pname:'加州櫻桃',
            favorite:false
        },
        {img:img2,
            type:'水果',
            price:'299',
            webpeice:'199',
            pname:'玫瑰蕉',
            favorite:false
        },
        {img:img3,
            type:'水果',
            price:'1090',
            webpeice:'999',
            pname:'帝王柑',
            favorite:false
        },
        {img:img4,
            type:'水果',
            price:'450',
            webpeice:'399',
            pname:'富士蘋果',
            favorite:false
        },
        {img:img5,
            type:'水果',
            price:'599',
            webpeice:'499',
            pname:'小玉西瓜',
            favorite:false
        },
        {img:img6,
            type:'水果',
            price:'199',
            webpeice:'129',
            pname:'黃金鳳梨',
            favorite:false
        },
        {img:img7,
            type:'水果',
            price:'290',
            webpeice:'259',
            pname:'愛文芒果',
            favorite:false
        },
        {img:img8,
            type:'水果',
            price:'999',
            webpeice:'888',
            pname:'拉拉山水蜜桃',
            favorite:false
        },
        {img:img9,
            type:'水果',
            price:'550',
            webpeice:'454',
            pname:'豐香草莓',
            favorite:false
        },
        {img:img10,
            type:'水果',
            price:'789',
            webpeice:'666',
            pname:'巨峰葡萄',
            favorite:false
        },
    ])
    const vegetable =ref([
        {img:img1,
            type:'蔬菜',
            price:'799',
            webpeice:'759',
            pname:'加州櫻桃',
        },
        
    ])
    return {
        Fruits,

    }
})

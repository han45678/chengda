// const caseName = "TEST"
const caseName = "成大之森"
export default {
   // caseid: "1d2db7f2-157b-4a33-acbc-f4abfde91846",
   caseid: "5050ed58-93cf-4a7b-ab71-4d9802ed8878",
   //case_code: "csl",
    address1: "接待中心",//按鈕區的--- 如空白會只呈現地址
    address2: "",//map點下確認的--- 如空白會顯示"導航地址"
    address: "臺南市北區北門路二段132號",
    googleSrc: "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d58754.77636119704!2d120.17386955659586!3d23.01740015403479!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x346e76f3b575de43%3A0xa197e2a79ab337e5!2zNzA05Y-w54Gj55yB5YyX5Yy65YyX6ZaA6Lev5LqM5q61MTMy6Jmf!5e0!3m2!1szh-TW!2stw!4v1769258756961!5m2!1szh-TW!2stw",
    googleLink: "https://maps.app.goo.gl/cNVU4WAJEgS89ZdSA",
    phone: "06-2370888",
    fbLink: "https://www.facebook.com/ForestofAspiration/",
    fbMessage: "https://m.me/ForestofAspiration/",
    // line: "https://lin.ee/FTYKISC",
    caseName: caseName,
    houseInfos: [
      /*   */
      ["投資建設", "中德建設股份有限公司"],
      ["建築規劃", "陳朝雄．A8聯合建築師事務所"],
      ["公設設計", "袁世賢．呈境室內裝修設計"],
      ["園藝景觀", "徐世萃．大漢景觀工程設計"],
      ["建照號碼", "（114）南工造字第00169號"],
      ["建築行銷", "得邦廣告股份有限公司"],
    ],
    gtmCode: ["GTM-KGPCM5TH"], // 可放置多個
    recaptcha_site_key_v2: "6Lep-78UAAAAAMaZLtddpvpixEb8cqu7v7758gLz", //主1
    // recaptcha_site_key_v2: "6LfGUjEaAAAAANYvhZQx5imGm23pRt0V-rOvkpNC", //主2
    //recaptcha_site_key_v2: "6LdbrqAmAAAAAPj2D_6cBbflea1livK9Uud4FGmN", //主3
    recaptcha_site_key: "6Lck-L8UAAAAABxfvNA1NJuBrdl3iLFc3GkudC8s", // recaptcha v3
    recaptcha_user_token: "6Lck-L8UAAAAAIcvenwGDl8_Q1tKbrEYsKuriePa",
    order: {
        title: "我要預約",
        //subTitle: "敬獻菁英的專屬品味｜2-3房｜高感精工宅"
    },
    // 控制固定板的新欄位
    // room_type: ["兩房","三房"],
    selectFields: {
          room_type: {
        title: "需求房型",
        hold: "請選擇房型",
        option: ["兩房", "三房"],
        bypass:false,　
      },

        /*
      budget: {
        title: "購屋預算",
        hold: "請選擇區間",
        option: ["1000萬-1500萬", "1501萬-2000萬", "2001萬以上"],
        bypass:false, //必填開啟使用1000萬-1500萬、1501萬-2000萬、2001萬以上
      },
      use_type: {
        title: "使用用途",
        hold: "請選擇用途",
        option: ["自住", "投資", "租賃"]
      },
    */
},

    navList: [
        /*
        {
            name: "雙核心地段",
            target: ".s3",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "交通中軸",
            target: ".s4",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "水岸生活",
            target: ".s5",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "菁英學區",
            target: ".s6",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "安心品牌",
            target: ".s7",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "電梯店墅",
            target: ".s8",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "嚴選建材",
            target: ".s9",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "傳家首席",
            target: ".s10",
            offset: "-60",
            offsetmo: "0",
        },{
            name: "立即來電",
            target: ".contact-info",
            offset: "",
            type: 'btn'
        },
        {
              name: "地圖導航",
              target: ".gmap",
              offset: "",
              type: "btn",
        }
        ,{
            name: "立即預約",
            target: ".order",
            offset: "",
            type: 'btn'
        },
    */
    ],
}
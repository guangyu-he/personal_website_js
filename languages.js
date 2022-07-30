var lan_str;
var lan_cn = {
    title_str: "何广宇的个人网站",
    education: "毕业于北京邮电大学<br> 现就读于柏林洪堡大学",

    li_me: "关于我",
    li_hobbies: "兴趣和爱好",
    li_sharing: "分享自己",
    li_contact: "如何联系",

    subtitle_page: "——爱电脑的物理学生",

    li_hobby1: "服务器运营和维护",
    li_hobby2: "喜爱各种球类运动",
    li_hobby3: "两只猫咪的铲屎官",
    li_hobby4: "沉迷编程无法自拔",
    li_hobby5: "主业其实是光科学",
    li_hobby6: "热爱各类数码产品",

    li_sharing1: "个人博客",
    li_sharing1_text: "分享自己关于爱好的内容",
    li_sharing2: "图片分享",
    li_sharing2_text: "分享朋友和自己的摄影作品",
    li_sharing3: "自编JS小游戏",
    li_sharing3_text: "自编JS卡牌网页文字游戏",
    li_sharing4: "北京邮电大学",
    li_sharing4_text: "本科学校：北京邮电大学，应用物理专业",
    li_sharing5: "柏林洪堡大学",
    li_sharing5_text: "硕士学校：柏林洪堡大学，光学专业",
    li_sharing6: "亚洲美食在柏林",
    li_sharing6_text: "分享柏林的各种亚洲餐馆。",


};
var lan_en = {
    title_str: "Guangyu He's Personal Website",
    education: "Graduated from Beijing University of Posts and Telecommunications<br> Studying in Humboldt University of Berlin",

    li_me: "About Me",
    li_hobbies: "Interests&Hobbies",
    li_sharing: "Sharing My Things",
    li_contact: "Contact Me",

    subtitle_page: "——A Physic Student Who Loves Computer",

    li_hobby1: "Running and Maintaining Servers",
    li_hobby2: "Love Ball Games",
    li_hobby3: "Living with two lovely cats",
    li_hobby4: "Enthusiastic about programming",
    li_hobby5: "Specialized in optical sciences",
    li_hobby6: "Interested in consumer electronics",

    li_sharing1: "Personal Blog",
    li_sharing1_text: "Sharing my ideas.",
    li_sharing2: "Gallery",
    li_sharing2_text: "Sharing photographs",
    li_sharing3: "JS Website Games",
    li_sharing3_text: "A collection with several small website text games, written based on Javascript. Simple but intersting. Only Chinese so far.",
    li_sharing4: "BUPT",
    li_sharing4_text: "My Bachlor School: Beijing University of Posts and Telecommunications, Major: Applied Physics",
    li_sharing5: "HU Berlin",
    li_sharing5_text: "My Master School: Humboldt University of Berlin, Major: Optical Sciences",
    li_sharing6: "Asian Food in Berlin",
    li_sharing6_text: "Sharing various of asian restaurants in Berlin",
};

var localStorage = window.localStorage;
var lang = localStorage.getItem("lang");
if (lang == null || lang == "") {
    lang = navigator.language;
} else {
}
console.log(lang);

function lan(lan_switch) {
    if (lan_switch == "zh-CN") {
        lan_str = lan_cn;
        lang = "zh-CN";
        localStorage.setItem("lang", lang);
        /*document.getElementById("lan_switch_en").innerHTML = "<em>English</em>";
        document.getElementById("lan_switch_cn").innerHTML = "<b>Chinese</b>";*/
        lan_dis();
    } else {
        lan_str = lan_en;
        lang = "en-US";
        localStorage.setItem("lang", lang);
        /*document.getElementById("lan_switch_en").innerHTML = "<b>English</b>";
        document.getElementById("lan_switch_cn").innerHTML = "<em>Chinese</em>";*/
        lan_dis();
    }
}

document.getElementById('version').innerHTML = "Last Edit：2022.04.18";

function lan_dis() {
    window.scrollTo(0, 0);
    document.getElementById('title_str').innerHTML = lan_str.title_str;
    document.getElementById('title_page').innerHTML = lan_str.title_str;
    document.getElementById('education_str').innerHTML = lan_str.education;
    document.getElementById('li_me').innerHTML = lan_str.li_me;
    document.getElementById('li_hobbies').innerHTML = lan_str.li_hobbies;
    document.getElementById('li_sharing').innerHTML = lan_str.li_sharing;
    document.getElementById('li_contact').innerHTML = lan_str.li_contact;
    document.getElementById('subtitle_page').innerHTML = lan_str.subtitle_page;
    document.getElementById('title_hobbies').innerHTML = lan_str.li_hobbies;
    document.getElementById('li_hobby1').innerHTML = lan_str.li_hobby1;
    document.getElementById('li_hobby2').innerHTML = lan_str.li_hobby2;
    document.getElementById('li_hobby3').innerHTML = lan_str.li_hobby3;
    document.getElementById('li_hobby4').innerHTML = lan_str.li_hobby4;
    document.getElementById('li_hobby5').innerHTML = lan_str.li_hobby5;
    document.getElementById('li_hobby6').innerHTML = lan_str.li_hobby6;
    document.getElementById('title_sharing').innerHTML = lan_str.li_sharing;
    document.getElementById('title_str').innerHTML = lan_str.title_str;
    document.getElementById('title_str').innerHTML = lan_str.title_str;
    document.getElementById('li_sharing1').innerHTML = lan_str.li_sharing1;
    document.getElementById('li_sharing2').innerHTML = lan_str.li_sharing2;
    document.getElementById('li_sharing3').innerHTML = lan_str.li_sharing3;
    document.getElementById('li_sharing4').innerHTML = lan_str.li_sharing4;
    document.getElementById('li_sharing5').innerHTML = lan_str.li_sharing5;
    document.getElementById('li_sharing6').innerHTML = lan_str.li_sharing6;
    document.getElementById('li_sharing1_text').innerHTML = lan_str.li_sharing1_text;
    document.getElementById('li_sharing2_text').innerHTML = lan_str.li_sharing2_text;
    document.getElementById('li_sharing3_text').innerHTML = lan_str.li_sharing3_text;
    document.getElementById('li_sharing4_text').innerHTML = lan_str.li_sharing4_text;
    document.getElementById('li_sharing5_text').innerHTML = lan_str.li_sharing5_text;
    document.getElementById('li_sharing6_text').innerHTML = lan_str.li_sharing6_text;
    document.getElementById('title_contact').innerHTML = lan_str.li_contact;
} 
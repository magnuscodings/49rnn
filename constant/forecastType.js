const shengxiao = ['鼠', '牛', '虎', '兔', '龙', '蛇', '马', '羊', '猴', '鸡', '狗', '猪']
export const position = ['正一', '正二', '正三', '正四', '正五', '正六', '特码']
const numberList = () => {
    let list = []
    for (let i = 1; i <= 49; i++) {
        let v = i
        if (i < 10) {
            v = '0' + i
        }
        list.push(v)
    }
    return list

}

export const tabsList = [{
        id: 1,
        name: "特肖",
        img: require("../assets/taoliao/gsgl-tb1.png"),
        actImg: require("../assets/taoliao/gsgl-icon1.png"),
        list: shengxiao,
        max: 9,
        min: 1,
        tips: '推荐的资料是按推荐的位置进行结算'
    },
    {
        id: 2,
        name: "特码",
        img: require("../assets/taoliao/gsgl-tb2.png"),
        actImg: require("../assets/taoliao/gsgl-icon2.png"),
        list: numberList(),
        max: 36,
        min: 1,
        tips: '推荐的资料是按推荐的位置进行结算'
    },
    {
        id: 3,
        name: "单双",
        min: 1,
        img: require("../assets/taoliao/gsgl-tb3.png"),
        actImg: require("../assets/taoliao/gsgl-icon3.png"),
        list: ['单', '双'],
        max: 1,
        position: position,
        tips: '推荐的资料是按推荐的位置进行结算'
    },
    {
        id: 4,
        name: "一肖",
        img: require("../assets/taoliao/gsgl-tb4.png"),
        actImg: require("../assets/taoliao/gsgl-icon4.png"),
        list: shengxiao,
        max: 1,
        tips: '推荐的资料与所有开奖号码中任意号码的生肖属性相符，即中'
    }
];


export const typeList = [
    ...tabsList,
    {
        id: 5,
        name: "大小",
        img: require("../assets/taoliao/gsgl-tb5.png"),
        actImg: require("../assets/taoliao/gsgl-icon5.png"),
        list: ['大', '小'],
        max: 1,
        position: position,
        tips: '推荐的资料是按推荐的位置进行结算'
    },
    {
        id: 6,
        name: "波色",
        img: require("../assets/taoliao/gsgl-tb6.png"),
        actImg: require("../assets/taoliao/gsgl-icon6.png"),
        list: ['红', '蓝', '绿'],
        max: 2,
        position: position,
        tips: '推荐的资料是按推荐的位置进行结算'
    },
    {
        id: 7,
        name: "连肖",
        img: require("../assets/taoliao/gsgl-tb7.png"),
        actImg: require("../assets/taoliao/gsgl-icon7.png"),
        list: shengxiao,
        max: 5,
        tips: '推荐的资料与所有开奖号码中任意号码的2个生肖属性完全相符，即中'
    },
    {
        id: 8,
        name: "杀特肖",
        img: require("../assets/taoliao/gsgl-tb8.png"),
        actImg: require("../assets/taoliao/gsgl-icon8.png"),
        list: shengxiao,
        max: 6,
        tips: '推荐的生肖开奖时全部在特码位置未出现，即中'
    },
    {
        id: 9,
        name: "一尾",
        img: require("../assets/taoliao/gsgl-tb9.png"),
        actImg: require("../assets/taoliao/gsgl-icon9.png"),
        list: ['0尾', '1尾', '2尾', '3尾', '4尾', '5尾', '6尾', '7尾', '8尾', '9尾'],
        max: 1,
        tips: '推荐的资料与所有开奖号码中任意号码的尾数属性相符，即中'
    },
    {
        id: 10,
        name: "杀肖",
        img: require("../assets/taoliao/gsgl-tb10.png"),
        actImg: require("../assets/taoliao/gsgl-icon10.png"),
        list: shengxiao,
        max: 3,
        tips: '推荐的生肖开奖时全部未出现，即中'
    },
    {
        id: 11,
        name: "杀特尾",
        img: require("../assets/taoliao/gsgl-tb11.png"),
        actImg: require("../assets/taoliao/gsgl-icon11.png"),
        list: ['0尾', '1尾', '2尾', '3尾', '4尾', '5尾', '6尾', '7尾', '8尾', '9尾'],
        max: 3,
        tips: '推荐的尾数开奖时全部在特码位置未出现，即中'
    },
    {
        id: 12,
        name: "杀尾",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['0尾', '1尾', '2尾', '3尾', '4尾', '5尾', '6尾', '7尾', '8尾', '9尾'],
        max: 3,
        tips: '推荐的尾数开奖时全部未出现，即中'
    },
    {
        id: 13,
        name: "不中",
        img: require("../assets/taoliao/gsgl-tb13.png"),
        actImg: require("../assets/taoliao/gsgl-icon13.png"),
        // list: ['五不中', '六不中', '七不中', '八不中'],
        list: ['01', '02', '03', '04', '05', '06', '07', '08', '09', '10',
            '11', '12', '13', '14', '15', '16', '17', '18', '19', '20',
            '21', '22', '23', '24', '25', '26', '27', '28', '29', '30',
            '31', '32', '33', '34', '35', '36', '37', '38', '39', '40',
            '41', '42', '43', '44', '45', '46', '47', '48', '49',
        ],
        max: 8,
        min: 5,
        tips: '推荐的号码开奖时全部未出现，即中'
    },
    {
        id: 14,
        name: "天地生肖",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['天肖', '地肖'],
        max: 1,
        tips: '中奖规则若选天肖开出天肖其中一个即中奖'
    },
    {
        id: 15,
        name: "家禽野兽",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['家禽', '野兽'],
        max: 1,
        tips: '中奖规则若选野兽开出野兽其中一个即中奖'
    },
    {
        id: 16,
        name: "左右生肖",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['左肖', '右肖'],
        max: 1,
        tips: '中奖规则若选右肖开出右肖其中一个即中奖'
    },
    {
        id: 17,
        name: "杀一头",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['0头', '1头', '2头', '3头', '4头'],
        max: 1,
        tips: '中奖规则若选0头开出1-9的其中一个即中奖'
    },
    {
        id: 18,
        name: "稳禁一段",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['1段', '2段', '3段', '4段', '5段', '6段', '7段'],
        max: 1,
        tips: '中奖规则若杀一段，一段特码没开即中'
    },
    {
        id: 19,
        name: "合数单双",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['合单', '合双'],
        max: 1,
        tips: '中奖规则若选合数双开出合数双其中一个即中奖'
    },
    {
        id: 20,
        name: "杀一合",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['1合', '2合', '3合', '4合', '5合', '6合', '7合', '8合', '9合', '10合', '11合', '12合', '13合'],
        max: 1,
        tips: '中奖规则若杀01合，01合特码没开即中'
    },
    {
        id: 21,
        name: "三行中特",
        img: require("../assets/taoliao/gsgl-tb12.png"),
        actImg: require("../assets/taoliao/gsgl-icon12.png"),
        list: ['金', '木', '水', '火', '土'],
        max: 3,
        min: 3,
        tips: '中奖规则选其中三个行开出选中范围即中奖'
    },
];
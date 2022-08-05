/*
category:game,tool,book
*/
export enum Category {
    game = "game",
    tool = "tool",
    book = "book",
    program = "program",
    copy = "copy",//是否原创
    private = "private",//隐私的应用
}

export class Work {
    name: string = "";
    url: string = "";
    img: string = "";
    desc: string = "";
    category: Category[] = [];
}

export const works: Work[] = [
    {
        name: "华容道",
        url: "https://weiyinfu.cn/huarongdao/",
        img: "https://weiyinfu.cn/learnSvg/?text=曹&color=black&background=red",
        desc: "华容道求解器",
        category: [Category.game],
    },
    {
        name: "百棋网",
        url: "https://weiyinfu.cn/BaiQi/static/",
        img: "https://weiyinfu.cn/learnSvg/?text=棋&color=white&background=purple",
        desc: "各种各样的棋类小游戏",
        category: [Category.game],
    },
    {
        name: "pastebin",
        url: "https://weiyinfu.cn/pastebin/",
        img: "https://weiyinfu.cn/learnSvg/?text=贴&color=white&background=black",
        desc: "代码粘贴板",
        category: [Category.tool],
    }, {
        name: "电子书阅读器",
        url: "https://weiyinfu.cn/Reader/index.html#/",
        img: "https://weiyinfu.cn/learnSvg/?text=R&color=white&background=orange",
        desc: "电子书阅读器",
        category: [Category.book],
    },
    {
        name: "拼图",
        url: "https://weiyinfu.cn/pintu/index.html",
        img: "https://weiyinfu.cn/learnSvg/?text=6&color=white&background=brown",
        desc: "拼图小游戏，可以设置拼图大小，可以使用计算机自动求解",
        category: [Category.game],
    },
    {
        name: "象牙塔集",
        url: "https://weiyinfu.cn/IvoryTower/poem/index.html",
        img: "https://weiyinfu.cn/learnSvg/?text=诗&color=white&background=red",
        desc: "象牙塔集，我在学校写的诗",
        category: [Category.book],
    },{
        name: "魔方求解器",
        url: "https://weiyinfu.cn/RubikSolver/",
        img: "https://weiyinfu.cn/learnSvg/?text=魔&color=red&background=black",
        desc: "二阶三阶魔方求解器",
        category: [Category.tool],
    }, {
        name: "达芬奇密码",
        url: "https://weiyinfu.cn/Majiang/dist/index.html#/DavinceCode",
        img: "https://weiyinfu.cn/learnSvg/?text=达&color=red",
        desc: "达芬奇密码",
        category: [Category.game],
    }, {
        name: "麻将",
        url: "https://weiyinfu.cn/Majiang/dist/index.html#/Majiang",
        img: "https://weiyinfu.cn/learnSvg/?text=🀅&color=green&background=white",
        desc: "麻将",
        category: [Category.game],
    },
    {
        name: "佛经",
        url: "https://weiyinfu.cn/BuddhistScripture/book/",
        img: "https://weiyinfu.cn/learnSvg/?text=佛&background=3b2e2a&color=white",
        desc: "佛经",
        category: [Category.book],
    },
    {
        name: "Unicode",
        url: "https://weiyinfu.cn/Unicode/index.html",
        img: "https://weiyinfu.cn/learnSvg/?text=码&background=purple&color=white",
        desc: "Unicode",
        category: [Category.book, Category.program],
    },
    {
        name: "日语五十音",
        url: "https://weiyinfu.cn/WuShiYin/",
        img: "https://weiyinfu.cn/learnSvg/?text=あ&background=b1781d&color=white",
        desc: "日语五十音",
        category: [Category.book],
    },

    {
        name: "毛泽东选集",
        url: "https://weiyinfu.cn/MaoZeDongAnthology/",
        img: "https://weiyinfu.cn/learnSvg/?text=☭&background=red&color=white",
        desc: "毛泽东选集",
        category: [Category.book],
    },
    {
        name: "推箱子",
        url: "https://weiyinfu.cn/Sokoban/index.html#/",
        img: "https://weiyinfu.cn/learnSvg/?text=推&background=black&color=yellow",
        desc: "推箱子",
        category: [Category.game],
    }, {
        name: "fu库文档",
        url: "https://weiyinfu.cn/fu/",
        img: "https://weiyinfu.cn/learnSvg/?text=福&background=white&color=black",
        desc: "fu",
        category: [Category.book, Category.program, Category.private],
    }, {
        name: "狼人杀发牌器",
        url: "https://weiyinfu.cn/Werewolf/front/",
        img: "https://weiyinfu.cn/learnSvg/?text=🐺&background=white&color=black",
        desc: "狼人杀发牌器",
        category: [Category.game]
    }
]

export class Paper {
    name: string = "";
    url: string = "";
}

export const papers: Paper[] = [
    {
        name: "[智能系统学报]动态规划求解中国象棋状态总数",
        url: "http://tis.hrbeu.edu.cn/oa/DArticle.aspx?type=view&id=201803008"
    }
]

export class RelatedLink {
    name: string = "";
    url: string = "";
    img: string = "";
}

export const links: RelatedLink[] = [
    {
        name: "Github",
        url: "https://weiyinfu.github.io",
        img: "./img/github.jpg"
    },
]


export function filterWorks(black: Category[], white: Category) {
    //默认隐藏的应用
    return works.filter(work => {
        let valid = false;
        for (let cate of work.category) {
            if (black.indexOf(cate) !== -1) {
                return false;
            }
            if (white.indexOf(cate) !== -1) {
                valid = true;
            }
        }
        return valid;
    })
}
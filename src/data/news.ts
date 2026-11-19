export type NewsCategory = "市场数据" | "政策法规" | "行业观点" | "科学研究" | "产品动态";

export type NewsBlock = { type: "h2" | "h3" | "p"; text: string } | { type: "ul"; items: string[] };

export type NewsArticle = {
  id: string;
  category: NewsCategory;
  sourceChannel: "DATA" | "REGULATION" | "PRODUCT" | "INTERVIEW" | "COMPANY";
  sourcePath: string;
  title: string;
  enTitle: string;
  summary: string;
  imageUrl: string;
  publishedAt: string;
  shortDate: string;
  fullDate: string;
  timestamp: number;
  views: number;
  author: string;
  sourceUrl: string;
  designTag: string | null;
  designOnly: boolean;
  blocks: NewsBlock[];
};

// Public industry news snapshot sourced from 2Firsts (en.2firsts.com / www.2firsts.com & cn.2firsts.com)
// Category mapping:
// - 市场数据 <- DATA (/news/data)
// - 政策法规 <- REGULATION (/news/list/regulation)
// - 产品动态 <- PRODUCT (/news/list/product)
// - 行业观点 <- INTERVIEW + COMPANY (/news/interview + /news/list/company)
// - 科学研究 <- science/clinical/ingredient stories from PRODUCT / REGULATION / INTERVIEW
export const newsArticles: NewsArticle[] = [
  {
    id: "2f-36825",
    category: "市场数据",
    sourceChannel: "DATA",
    sourcePath: "/news/data",
    title:
      "英国零售研究机构IGD：便利店烟草及电子烟销售下降10.6%，份额15.4%仅高于酒类的15.1%，2027年或失去第一大品类地位",
    enTitle:
      "DATA｜UK Retail Research Group IGD Says Convenience Tobacco and Vape Sales Fell 10.6%, With 15.4% Market Share Versus Alcohol's 15.1%; Top Rank at Risk in 2027",
    summary:
      "英国零售行业研究机构IGD发布的数据显示，2026年上半年英国便利店渠道烟草及电子烟合并类别销售额同比下降10.6%，成为拖累整体销售表现的主要商品类别。同期便利店市场销售额下降1.2%，剔除烟草及电子烟后，其余类别合计增长0.7%。IGD数据显示，2026年烟草及电子烟占便利店销售额的15.4%，酒类占15.1%；若当前趋势持续，酒类最快可能在2027年成为便利店销售额最大的商品类别。IGD预计，英国便利店市场将从2026年的486亿英镑增长至2031年的549亿英镑，年复合增长率为2.5%；剔除烟草及电子烟后，预测增长率为3.4%。",
    imageUrl: "https://static.2firsts.com/uploads/20261111/2fb0bc37a4a08d999f6f44f1f86c5855.png",
    publishedAt: "2026-11-11",
    shortDate: "11月11日",
    fullDate: "2026年11月11日",
    timestamp: 1794389818,
    views: 212,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/datauk-retail-research-group-igd-says-convenience-tobacco-and-vape-sales-fell-106-with-154-market-share-versus-alcohols-151-top-rank-at-risk-in-2027",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "IGD数据显示，2026年上半年英国便利店烟草及电子烟合并类别销售额同比下降10.6%，同期便利店整体销售额下降1.2%；剔除两类商品后，其他类别合计增长0.7%。",
          "2026年烟草及电子烟占便利店销售额的15.4%，酒类占15.1%。IGD预计，酒类最快可能于2027年超过烟草及电子烟，成为该渠道销售额最大的商品类别。",
          "IGD预测英国便利店市场从2026年的486亿英镑增长至2031年的549亿英镑，年复合增长率2.5%；大型连锁便利店经营者的预测增长率为3.9%。",
          "Talysis独立研究显示，截至2026年1月4日的52周内，受访渠道电子烟销售额同比下降12.7%，销量下降20.8%，烟草及吸烟替代产品合并类别销售额下降8%。",
          "英国于2025年6月1日禁止销售一次性电子烟。Talysis指出，可重复使用设备、预填充烟弹及大容量套装的销售结构变化，正在影响便利店购买频次和商品管理。",
        ],
      },
      {
        type: "p",
        text: "英国零售行业研究机构IGD最新数据显示，2026年上半年英国便利店渠道烟草及电子烟合并类别销售额同比下降10.6%，成为拖累该渠道整体销售表现的主要商品类别。同期便利店市场总销售额下降1.2%，但剔除烟草及电子烟后，其余类别合计增长0.7%。",
      },
      {
        type: "p",
        text: "IGD同时披露，2026年烟草及电子烟占英国便利店销售额的15.4%，与酒类15.1%的份额仅相差0.3个百分点。如果当前趋势持续，酒类最快可能在2027年超过烟草及电子烟，成为英国便利店按销售额计算的最大商品类别。",
      },
      {
        type: "p",
        text: "相关数据来自IGD于9月30日发布的《英国便利店市场2026—2031》（The UK Convenience Market 2026–2031）研究。英国零售行业媒体于11月5日起报道其主要结果，《The Grocer》于11月10日进一步报道。",
      },
      {
        type: "h2",
        text: "烟草及电子烟销售下降10.6%，酒类份额接近最大商品类别",
      },
      {
        type: "p",
        text: "IGD数据显示，2026年上半年英国便利店渠道销售额同比下降1.2%。",
      },
      {
        type: "p",
        text: "烟草及电子烟合并类别销售额下降10.6%，是同期拖累便利店整体表现的主要因素。剔除该类别后，其余商品类别合计销售额增长0.7%。",
      },
      {
        type: "p",
        text: "IGD洞察经理Patrick Mitchell-Fox表示，2026年上半年是近年来英国便利店市场表现的低点。",
      },
      {
        type: "p",
        text: "在IGD统计的17个商品类别中，有11个类别实现销售增长，但仅5个类别的增幅超过2%。",
      },
      {
        type: "p",
        text: "其中，软饮料销售额同比增加9900万英镑，成为同期绝对销售额增量最大的类别；冷藏食品销售额增加6400万英镑。",
      },
      {
        type: "p",
        text: "烟草长期是英国便利店的重要销售类别，尤其对独立便利店及加盟零售网络具有较高的商业重要性。",
      },
      {
        type: "p",
        text: "IGD的2026年市场份额数据显示，烟草及电子烟合并类别占便利店销售额的15.4%，酒类占15.1%。",
      },
      {
        type: "p",
        text: "两者仅相差0.3个百分点。",
      },
      {
        type: "p",
        text: "IGD预计，如果当前销售趋势持续，酒类最快可能于2027年超过烟草及电子烟，成为便利店渠道按销售额计算的最大商品类别。",
      },
      {
        type: "p",
        text: "这一预测仅涉及商品类别的销售额排名。",
      },
      {
        type: "p",
        text: "IGD统计的烟草及电子烟属于合并类别，其公开材料尚未分别披露传统烟草和电子烟在2026年上半年的销售额变化、销量变化及各自对10.6%降幅的贡献。",
      },
      {
        type: "h2",
        text: "便利店市场2031年预计达549亿英镑，大型连锁经营者增长更快",
      },
    ],
  },
  {
    id: "2f-36817",
    category: "市场数据",
    sourceChannel: "DATA",
    sourcePath: "/news/data",
    title: "日本加热烟草十年研究：使用率从0.1%升至14.9%，卷烟转化之外的用户增长路径扩大",
    enTitle:
      "Japan's Heated Tobacco Use Rises From 0.1% to 14.9% Over a Decade as Growth Extends Beyond Cigarette Switching",
    summary:
      "发表于《柳叶刀·区域健康—西太平洋》的一项日本十年研究显示，2015—2025年，加热烟草使用率从0.1%升至14.9%，但2018年后增长明显放缓。研究发现，传统卷烟使用者转向加热烟草仍是重要增长来源，而来自此前非当前使用者的增长贡献有所扩大。2025年，日本HTP使用者中约56%同时使用传统卷烟。另据日本行业统计，2025财年加热烟草销量达734亿支，已接近传统卷烟的782亿支。",
    imageUrl: "https://static.2firsts.com/uploads/20261110/8fb367b041035453171746b7662b49f5.png",
    publishedAt: "2026-11-10",
    shortDate: "11月10日",
    fullDate: "2026年11月10日",
    timestamp: 1794300979,
    views: 203,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/japans-heated-tobacco-use-rises-from-01-to-149-over-a-decade-as-growth-extends-beyond-cigarette-switching",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "日本18—69岁调查人群的HTP加权使用率从2015年的0.1%升至2025年的14.9%，2018年后年均增幅明显放缓。",
          "2025年，仅使用HTP者占6.5%，同时使用HTP与传统卷烟者占8.4%，双重使用者占HTP使用人群约56%。",
          "研究模型显示，2019—2025年，来自此前非当前使用者的平均年度增长贡献达到1.40个百分点，高于2016—2018年的0.34个百分点；从卷烟转入HTP使用的贡献仍然重要。",
          "日本2025财年加热烟草销量达到734亿支，相当于同期传统卷烟销量的93.9%。",
        ],
      },
      {
        type: "p",
        text: "日本加热烟草产品（Heated Tobacco Products，HTPs）使用率在过去十年间从0.1%升至14.9%，但其增长来源已超出传统卷烟消费者向加热烟草转换的单一路径。",
      },
      {
        type: "p",
        text: "2026年9月25日在线发表于《柳叶刀·区域健康—西太平洋》（The Lancet Regional Health – Western Pacific）的一项研究发现，2018年之后，日本HTP使用率增长明显放缓，但传统卷烟使用者转入HTP使用、既有HTP使用状态的持续，以及此前非当前使用者重新进入HTP使用，共同影响了市场变化。其中，来自此前非当前使用者的增长贡献明显提高。",
      },
      {
        type: "p",
        text: "与此同时，卷烟与HTP双重使用仍然普遍。2025年，研究样本中约56%的当前HTP使用者同时使用传统卷烟。",
      },
      {
        type: "p",
        text: "研究由Satomi Odani和Takahiro Tabuchi开展，利用日本社会与新型烟草互联网调查（Japan Society and New Tobacco Internet Survey，JASTIS）2015—2025年的数据，结合重复横断面调查、纵向用户追踪与统计模型，分析HTP使用趋势及不同用户状态之间的转移。",
      },
      {
        type: "h2",
        text: "十年使用率升至14.9%，2018年后增长放缓",
      },
      {
        type: "p",
        text: "研究显示，日本HTP加权使用率从2015年的0.1%升至2018年的7.5%，2019年进一步达到10.6%，2025年升至14.9%。",
      },
      {
        type: "p",
        text: "按年龄与性别标准化后的趋势模型，2015—2018年，HTP使用率平均每年增加3.33个百分点；2019—2025年，平均年度增幅降至0.92个百分点。",
      },
      {
        type: "p",
        text: "不同人群之间存在明显差异。2025年，男性HTP使用率为22.2%，女性为7.7%；18—54岁人群的使用率介于14.7%至18.0%，55—69岁人群则为9.4%。",
      },
      {
        type: "p",
        text: "按照卷烟使用史划分，2025年当前卷烟使用者的HTP使用率达到43.7%，既往卷烟使用者为18.4%，从未使用过传统卷烟者为1.4%。",
      },
      {
        type: "p",
        text: "研究分析了18—69岁成年人161,583条年度调查观测记录，并对连续参与调查的受访者进行纵向分析，以估算不同烟草使用状态之间的年度变化。",
      },
      {
        type: "h2",
        text: "超过半数HTP使用者仍同时使用传统卷烟",
      },
      {
        type: "p",
        text: "研究将受访者划分为五种状态：从未使用卷烟或HTP、此前使用但当前均未使用、仅使用卷烟、仅使用HTP，以及同时使用卷烟与HTP。",
      },
      {
        type: "p",
        text: "2025年，研究样本中仅使用传统卷烟者占10.9%，仅使用HTP者占6.5%，同时使用两类产品者占8.4%。",
      },
      {
        type: "p",
        text: "按照上述比例计算，双重使用者约占全部当前HTP使用者的56%。",
      },
      {
        type: "p",
        text: "纵向分析显示，2019—2025年，原本仅使用传统卷烟的人群，下一年转为仅使用HTP的模型估计概率为2.7%，转为同时使用卷烟与HTP的概率为11.0%。",
      },
      {
        type: "p",
        text: "同期，64.4%仍仅使用卷烟，22.0%转为当前两类产品均未使用。",
      },
    ],
  },
  {
    id: "2f-36745",
    category: "市场数据",
    sourceChannel: "DATA",
    sourcePath: "/news/data",
    title: "中国电子烟相关产品出口2026年Q3增长4.5%，对英增长21.6%抵消对美下滑",
    enTitle:
      "China’s Vape-Related Exports Rose 4.5% in Q3 2026 as 21.6% Growth in Shipments to the UK Offset a Decline in Shipments to the US",
    summary:
      "2026年第三季度，中国电子烟及相关产品出口额达到28.59亿美元，同比增长4.5%。英国成为最大的单一市场增量来源，对英出口增长21.6%，增加8,188万美元；美国出口下降5.2%，减少5,358万美元。季度末增长明显放缓，9月全球出口同比下降6.3%，其中对美出口下降37.8%。产品方面，含尼古丁电子烟产品贡献了季度净增量的82%以上，电子烟设备出口基本持平。2026年1—9月累计出口78.18亿美元，同比增长4.0%。",
    imageUrl: "https://static.2firsts.com/uploads/20261026/2f3563c8236bee6f1710f71e64814bc0.png",
    publishedAt: "2026-10-26",
    shortDate: "10月26日",
    fullDate: "2026年10月26日",
    timestamp: 1792984964,
    views: 562,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/chinas-vape-related-exports-rose-45-in-q3-2026-as-216-growth-in-shipments-to-the-uk-offset-a-decline-in-shipments-to-the-us",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "全球出口： 2026年Q3出口28.59亿美元，同比增长4.5%；9月同比下降6.3%，环比下降15.0%。",
          "市场分化： 英国Q3出口同比增加8,188万美元，成为最大单一市场增量来源；美国减少5,358万美元，9月对美出口同比下降37.8%。",
          "产品结构： 含尼古丁电子烟产品出口增长5.6%，贡献全球季度净增量的82.4%；电子烟设备增长0.9%。",
          "前三季度： 1—9月累计出口78.18亿美元，同比增长4.0%；英国出口增长9.4%，美国下降1.6%。",
        ],
      },
      {
        type: "p",
        text: "根据中国海关出口数据，2026年第三季度，中国电子烟及相关产品出口额达到28.59亿美元，较2025年同期增长4.5%。英国成为最大的单一市场增量来源，对英出口同比增加8,188万美元；美国则减少5,358万美元。",
      },
      {
        type: "p",
        text: "2Firsts统计的产品涵盖电子烟设备（HS85434000）、含尼古丁电子烟产品（HS24041200）及尼古丁替代物（HS24041990）。其中，含尼古丁电子烟产品包括预注液烟弹、烟油，以及符合相应归类条件的含液电子烟产品等。",
      },
      {
        type: "p",
        text: "第三季度出口增长主要集中在7月。中国相关产品当月出口10.47亿美元，同比增长16.5%；8月降至9.79亿美元，同比增长3.3%；9月进一步回落至8.33亿美元，同比下降6.3%，环比下降15.0%。",
      },
      {
        type: "p",
        text: "季度出口总额同比增加1.24亿美元，但美国市场的回落削弱了全球增长。韩国、阿联酋及其他目的地的增长则部分抵消了美国和部分欧洲市场的下降。",
      },
      {
        type: "h2",
        text: "英国成为最大增量来源，美国9月出口下降37.8%",
      },
      {
        type: "p",
        text: "第三季度，中国对英国电子烟相关产品出口额达到4.62亿美元，同比增长21.6%，增加8,188万美元，相当于全球季度出口净增量的约66%。",
      },
      {
        type: "p",
        text: "英国增长集中在8月和9月。8月对英出口同比增长51.4%，达到1.77亿美元；9月同比增长37.4%，达到1.24亿美元，但较8月环比下降约30%。",
      },
      {
        type: "p",
        text: "美国同期出口额为9.84亿美元，同比下降5.2%。美国仍是中国电子烟相关产品最大的单一出口目的地，但其全球份额由2025年第三季度的38.0%降至34.4%。",
      },
      {
        type: "p",
        text: "美国市场在季度内部经历明显逆转。",
      },
      {
        type: "p",
        text: "7月对美出口4.04亿美元，同比增长53.5%；8月降至3.39亿美元，同比下降12.4%；9月进一步降至2.41亿美元，同比下降37.8%。",
      },
      {
        type: "p",
        text: "两个月内，对美出口额减少约1.63亿美元，降幅达到40.4%。",
      },
      {
        type: "p",
        text: "9月美国出口同比减少约1.46亿美元，超过同期全球出口净减少的5,593万美元。美国以外市场的增长抵消了部分降幅。",
      },
      {
        type: "p",
        text: "从整个季度看，韩国和阿联酋分别增加约3,746万美元和3,227万美元，印度尼西亚、加拿大也分别增加约2,270万美元和1,835万美元。",
      },
      {
        type: "h2",
        text: "含尼古丁电子烟产品推动增长，设备出口基本持平",
      },
      {
        type: "p",
        text: "第三季度，含尼古丁电子烟产品出口额达到19.26亿美元，同比增长5.6%，增加约1.02亿美元，贡献全球出口净增量的82.4%。",
      },
      {
        type: "p",
        text: "电子烟设备出口额为8.88亿美元，同比增长0.9%，增加约771万美元。",
      },
    ],
  },
  {
    id: "2f-36711",
    category: "市场数据",
    sourceChannel: "DATA",
    sourcePath: "/news/data",
    title: "英国ONS最新数据：电子烟用户54%为既往吸烟者、26%同时吸卷烟、20%从未规律吸烟",
    enTitle:
      "Latest UK ONS Data: 54% of Vapers Are Former Cigarette Smokers, 26% Also Smoke and 20% Never Smoked Regularly",
    summary:
      "英国国家统计局（ONS）2025年数据显示，2Firsts根据加权人口数据估算，大不列颠地区电子烟用户中约54%为既往卷烟吸烟者，26%仍同时吸卷烟，20%从未规律吸过卷烟。既往卷烟吸烟者中的当前电子烟用户约81%每天使用电子烟，而双重使用者中这一比例约为50%。2025年，33.8%的当前卷烟吸烟者同时使用电子烟，高于2014年的10.6%。从未规律吸过卷烟者的电子烟使用人数约110万，使用率为2.9%，2014年仅为0.2%。数据呈现英国电子烟消费群体在吸烟经历、使用频率及长期变化方面的结构性差异。",
    imageUrl: "https://static.2firsts.com/uploads/20261014/2b933114505ec9608d6d1f8e61fc4207.png",
    publishedAt: "2026-10-14",
    shortDate: "10月14日",
    fullDate: "2026年10月14日",
    timestamp: 1791962698,
    views: 308,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/latest-uk-ons-data-54-of-vapers-are-former-cigarette-smokers-26-also-smoke-and-20-never-smoked-regularly",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "电子烟用户以既往吸烟者为主体： 2Firsts根据ONS加权数据估算，2025年约54%的电子烟用户为既往卷烟吸烟者，26%仍在吸卷烟，20%从未规律吸过卷烟。",
          "不同群体使用频率差异明显： 既往卷烟吸烟者中的当前电子烟用户约81%每天使用，而仍吸卷烟的电子烟用户中约50%每天使用。",
          "卷烟与电子烟双重使用率长期上升： 当前卷烟吸烟者中，33.8%同时使用电子烟，2014年这一比例为10.6%。",
          "从未规律吸烟者使用规模超过百万： 2025年约110万人使用电子烟，群体内使用率为2.9%，高于2014年的0.2%；2023年以来的年度使用率则基本稳定。",
        ],
      },
      {
        type: "p",
        text: "英国国家统计局（Office for National Statistics，ONS）于2026年10月6日发布的最新统计数据显示，2025年，大不列颠地区电子烟使用者中，既往卷烟吸烟者占据最大比例，仍在吸卷烟的双重使用者约占四分之一，从未规律吸过卷烟的人群约占五分之一。",
      },
      {
        type: "p",
        text: "2Firsts根据ONS《英国成年人吸烟习惯：2025年》（Adult smoking habits in the UK: 2025）及其原始数据计算，约54%的当前电子烟用户为既往卷烟吸烟者，26%同时使用卷烟和电子烟，20%从未规律吸过卷烟。",
      },
      {
        type: "p",
        text: "三类群体的电子烟使用频率存在明显差异。在已经停止吸卷烟、目前使用电子烟的人群中，约81%每天使用电子烟；在仍然吸卷烟的电子烟用户中，每日使用者约占50%。",
      },
      {
        type: "p",
        text: "ONS调查还显示，2025年有33.8%的当前卷烟吸烟者同时使用电子烟。与此同时，约110万从未规律吸过卷烟的成年人也在使用电子烟。",
      },
      {
        type: "p",
        text: "这些数据来自ONS意见与生活方式调查（Opinions and Lifestyle Survey，OPN），统计范围为英格兰、苏格兰和威尔士16岁及以上成年人，不包括北爱尔兰。",
      },
      {
        type: "h2",
        text: "既往吸烟者占电子烟用户约54%，双重使用者占26%",
      },
      {
        type: "p",
        text: "ONS原始数据按照受访者的卷烟吸烟经历，将成年人口分为当前卷烟吸烟者、既往卷烟吸烟者，以及从未规律吸过卷烟者。",
      },
      {
        type: "p",
        text: "2025年，三个群体的电子烟使用率分别为33.8%、20.7%和2.9%。",
      },
      {
        type: "p",
        text: "由于各群体的人口基数不同，内部使用率并不能直接反映其在全部电子烟用户中的占比。",
      },
      {
        type: "p",
        text: "ONS加权人口数据显示，2025年大不列颠地区约有421万当前卷烟吸烟者、1,403万既往卷烟吸烟者，以及3,636万从未规律吸过卷烟的成年人。",
      },
      {
        type: "p",
        text: "2Firsts将各群体加权人口规模与对应电子烟使用率结合计算，估算出英国电子烟用户的内部构成：",
      },
      {
        type: "p",
        text: "注：以上为2Firsts依据ONS Table 9加权人口基数和公布的四舍五入后使用率计算的近似值。ONS公布的2025年电子烟使用人数约为540万。",
      },
      {
        type: "p",
        text: "既往卷烟吸烟者是电子烟用户中规模最大的群体。尽管只有20.7%的既往卷烟吸烟者当前使用电子烟，但该群体人口基数较大，贡献了全部电子烟使用者的半数以上。",
      },
      {
        type: "p",
        text: "当前卷烟吸烟者中的电子烟使用率最高，达到33.8%，但这一群体占电子烟用户总量的比例约为26%。",
      },
      {
        type: "p",
        text: "从未规律吸过卷烟者的电子烟使用率只有2.9%，不过该群体人口规模约为3,636万人，因此仍贡献了约五分之一的当前电子烟用户。",
      },
      {
        type: "p",
        text: "上述三类群体代表不同的卷烟吸烟经历。",
      },
    ],
  },
  {
    id: "2f-36709",
    category: "市场数据",
    sourceChannel: "DATA",
    sourcePath: "/news/data",
    title:
      "英国ONS（国家统计局）最新数据：电子烟使用率2025年微降至9.9%、增长趋稳，此前一年首次超越卷烟",
    enTitle:
      "Latest UK ONS Data: Vaping Rate Edges Down to 9.9% in 2025, a Year After Overtaking Cigarette Smoking",
    summary:
      "英国国家统计局（ONS）2025年数据显示，大不列颠地区电子烟使用率为9.9%，较2024年的10.0%基本持平，使用人数连续第二年维持约540万。此前，电子烟使用率从2020年的6.4%升至2024年的10.0%，并于2024年首次超过卷烟吸烟率。2025年卷烟吸烟率继续降至8.7%，两者差距扩大至1.2个百分点。同期，每日电子烟使用率从6.7%降至6.5%，25至34岁人群使用率则由12.9%升至16.4%。数据表明，英国电子烟使用率在多年增长后趋于稳定，但不同使用频率和年龄群体的变化并不一致。",
    imageUrl: "https://static.2firsts.com/uploads/20261014/f013eb7ebfa033ef6fba43b96a7717ec.png",
    publishedAt: "2026-10-14",
    shortDate: "10月14日",
    fullDate: "2026年10月14日",
    timestamp: 1791944118,
    views: 373,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/latest-uk-ons-data-vaping-rate-edges-down-to-99-in-2025-a-year-after-overtaking-cigarette-smoking",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "电子烟用户增长趋稳： 2025年，大不列颠地区约540万成年人使用电子烟，使用率为9.9%，低于2024年的10.0%，结束了2020年以来连续四年的使用率上升趋势。",
          "超越卷烟后出现增长放缓： 2024年电子烟使用率首次超过卷烟吸烟率，分别为10.0%和9.1%；2025年两项指标分别为9.9%和8.7%，差距扩大至1.2个百分点，主要由于卷烟吸烟率继续下降。",
          "使用频率出现分化： 每日电子烟使用率由2024年的6.7%降至2025年的6.5%，偶尔使用率从3.3%微升至3.4%，曾经使用但目前未使用的比例升至7.2%。",
          "年龄群体变化不一致： 25至34岁人群电子烟使用率从12.9%升至16.4%，取代16至24岁成为使用率最高的年龄组；其他年龄组使用率均下降。",
        ],
      },
      {
        type: "p",
        text: "英国国家统计局（Office for National Statistics，ONS）于2026年10月6日发布的《英国成年人吸烟习惯：2025年》（Adult smoking habits in the UK: 2025）显示，2025年大不列颠地区16岁及以上成年人电子烟使用率为9.9%，较2024年的10.0%基本持平，使用人数连续第二年维持约540万。",
      },
      {
        type: "p",
        text: "这一变化发生在英国电子烟使用率首次超过卷烟吸烟率之后。根据ONS的意见与生活方式调查（Opinions and Lifestyle Survey，OPN），2024年电子烟使用率达到10.0%，首次高于卷烟吸烟率9.1%。2025年，电子烟使用率微降至9.9%，卷烟吸烟率则继续下降至8.7%，两者差距由0.9个百分点扩大至1.2个百分点。",
      },
      {
        type: "p",
        text: "2Firsts对ONS发布的2014年至2025年原始数据进行分析发现，英国电子烟使用率从2020年的6.4%连续上升至2024年的10.0%，但2025年未延续增长。与此同时，每日与偶尔使用电子烟的人群、不同年龄群体以及不同吸烟经历群体呈现不同变化。",
      },
      {
        type: "p",
        text: "ONS数据反映的是电子烟与卷烟的使用人数及人口比例，不包括销售额或产品消费量。电子烟使用者与卷烟吸烟者也并非互斥群体，因此电子烟使用率超过卷烟吸烟率，并不意味着卷烟消费已被完全替代。",
      },
      {
        type: "h2",
        text: "电子烟2024年首次超越卷烟，2025年使用率趋稳而卷烟继续下降",
      },
      {
        type: "p",
        text: "英国电子烟与卷烟使用率的变化在2024年出现交叉。",
      },
      {
        type: "p",
        text: "ONS的OPN数据显示，2023年，大不列颠地区电子烟使用率为9.7%，仍低于卷烟吸烟率10.5%。2024年，电子烟使用率上升至10.0%，卷烟吸烟率下降至9.1%，电子烟首次在这一调查中超过卷烟。",
      },
      {
        type: "p",
        text: "2025年，两项指标继续保持这一相对位置，但变化方向不同：电子烟使用率从10.0%微降至9.9%，卷烟吸烟率则从9.1%进一步降至8.7%。",
      },
      {
        type: "p",
        text: "由此，电子烟与卷烟使用率之间的差距从2024年的0.9个百分点扩大至2025年的1.2个百分点。差距扩大并非源于电子烟使用率继续上升，而是由于卷烟吸烟率下降幅度更大。",
      },
      {
        type: "p",
        text: "2014年，大不列颠地区成年人卷烟吸烟率为18.8%，电子烟使用率仅为3.7%，两者相差15.1个百分点。到2020年，卷烟吸烟率降至14.5%，电子烟使用率升至6.4%，差距收窄至8.1个百分点。",
      },
      {
        type: "p",
        text: "2023年，两者差距进一步缩小至0.8个百分点，并在2024年发生交叉。",
      },
      {
        type: "p",
        text: "2025年，约540万成年人使用电子烟，而当前卷烟吸烟者约480万人，电子烟使用人数比卷烟吸烟者多约60万人。两个数值均为ONS经过四舍五入的估计。",
      },
      {
        type: "p",
        text: "从人口使用比例看，电子烟已经连续两年超过卷烟，但这种变化并不意味着英国卷烟吸烟人数的下降全部转化为了电子烟用户增长。",
      },
      {
        type: "p",
        text: "ONS调查同时显示，相当比例的当前卷烟吸烟者仍使用电子烟。2025年，33.8%的当前卷烟吸烟者报告每日或偶尔使用电子烟，较2024年的32.8%略有上升。",
      },
      {
        type: "p",
        text: "因此，电子烟使用人数超过卷烟吸烟者，是两类产品使用普及率之间的交叉，而非两个完全独立消费群体之间的替代。",
      },
      {
        type: "h2",
        text: "2020至2024年电子烟使用率连续上升3.6个百分点，2025年微降至9.9%",
      },
    ],
  },
  {
    id: "2f-36707",
    category: "市场数据",
    sourceChannel: "DATA",
    sourcePath: "/news/data",
    title: "英国国家统计局数据：25至34岁女性电子烟使用率达18.3%，同龄男性为14.4%",
    enTitle:
      "UK ONS Data: Vaping Rate Among Women Aged 25–34 Reaches 18.3%, Compared With 14.4% for Men",
    summary:
      "英国国家统计局（ONS）2025年数据显示，25至34岁女性电子烟使用率达到18.3%，高于2024年的13.7%和2020年的8.3%，创2014年开始统计以来最高水平。同期，同龄男性使用率为14.4%，16岁及以上女性总体使用率为9.6%。25至34岁也取代16至24岁，成为电子烟使用率最高的年龄群体。尽管大不列颠地区电子烟使用人数连续第二年维持约540万，不同年龄及性别人群的使用趋势仍存在差异。",
    imageUrl: "https://static.2firsts.com/uploads/20261013/58b408a72d6c8152c5a17c2065f79396.png",
    publishedAt: "2026-10-13",
    shortDate: "10月13日",
    fullDate: "2026年10月13日",
    timestamp: 1791887564,
    views: 345,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/uk-ons-data-vaping-rate-among-women-aged-2534-reaches-183-compared-with-144-for-men",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "女性使用率创序列新高： 2025年，大不列颠地区25至34岁女性电子烟使用率达到18.3%，较2024年上升4.6个百分点，较2020年上升10.0个百分点，为2014年以来最高点估计。",
          "年龄结构发生变化： 25至34岁人群整体电子烟使用率达到16.4%，高于16至24岁人群的12.9%，取代后者成为使用率最高的年龄群体。",
          "性别差异呈现年龄分化： 2025年，16岁及以上女性电子烟使用率为9.6%，略低于男性的10.2%；但25至34岁女性的使用率点估计为18.3%，高于同龄男性的14.4%。",
          "总体用户规模基本稳定： 2025年，大不列颠地区约540万成年人使用电子烟，总体使用率为9.9%，与2024年的10.0%接近。ONS数据反映了人群使用行为变化，而非销量或销售额。",
        ],
      },
      {
        type: "p",
        text: "英国国家统计局（Office for National Statistics，ONS）于2026年10月6日发布的《英国成年人吸烟习惯：2025年》（Adult smoking habits in the UK: 2025）显示，2025年，大不列颠地区25至34岁女性的电子烟使用率达到18.3%，较2024年的13.7%上升4.6个百分点，较2020年的8.3%上升10.0个百分点。",
      },
      {
        type: "p",
        text: "这一比例创下ONS自2014年开始统计电子烟使用情况以来，该年龄及性别群体的最高水平，也是2025年所有年龄及性别分组中最高的使用率点估计。",
      },
      {
        type: "p",
        text: "同期，25至34岁男性的电子烟使用率为14.4%，16岁及以上女性总体使用率为9.6%，男性总体使用率为10.2%。",
      },
      {
        type: "p",
        text: "2Firsts对ONS同步发布的2014至2025年原始统计数据进行梳理发现，英国电子烟总体使用率在2025年基本稳定，但不同年龄与性别群体呈现不同变化。25至34岁女性的长期使用率上升，与16至24岁群体近年来的使用率回落形成对比。",
      },
      {
        type: "p",
        text: "上述数据来自ONS的意见与生活方式调查（Opinions and Lifestyle Survey，OPN），统计范围为英格兰、苏格兰和威尔士16岁及以上人口，不包括北爱尔兰。电子烟使用率包括每日使用和偶尔使用电子烟的人群。",
      },
      {
        type: "h2",
        text: "25至34岁女性电子烟使用率从2014年的5.4%升至2025年的18.3%",
      },
      {
        type: "p",
        text: "ONS原始数据集Table 8显示，2014年，25至34岁女性电子烟使用率为5.4%。2025年，这一比例达到18.3%，12年间上升12.9个百分点。",
      },
      {
        type: "p",
        text: "这一变化并非逐年持续增长。",
      },
      {
        type: "p",
        text: "2014年至2018年，该年龄组女性电子烟使用率主要在4.7%至5.7%之间波动。2019年升至10.5%，2020年回落至8.3%。",
      },
      {
        type: "p",
        text: "此后，使用率从2021年的8.4%逐步上升至2022年的9.7%、2023年的10.4%、2024年的13.7%，并在2025年达到18.3%。",
      },
      {
        type: "p",
        text: "2025年的18.3%较2020年提高10.0个百分点，相当于该年龄组电子烟使用率在五年间增加约1.2倍。这一变化描述的是人群内部的使用比例，而非电子烟销量或市场收入增长。",
      },
      {
        type: "p",
        text: "2025年，该年龄组女性电子烟使用率的95%置信区间为14.4%至22.2%，2024年的置信区间为10.6%至16.7%。两年的点估计相差4.6个百分点，但根据公开区间进行的独立样本近似检验，尚不能确认这一年度差异达到通常采用的5%统计显著性水平。",
      },
      {
        type: "p",
        text: "相比单一年度变化，2020年至2025年的连续数据提供了更完整的长期观察窗口。ONS调查方法在2020年前后也发生了变化，包括调查频率及电子烟使用状态的分类口径。ONS认为当前电子烟用户总体指标可以跨期比较，但提醒使用者谨慎解释时间序列变化。",
      },
      {
        type: "h2",
        text: "女性总体电子烟使用率略低于男性，但25至34岁女性达到所有年龄性别分组最高水平",
      },
      {
        type: "p",
        text: "ONS数据显示，2025年，大不列颠地区16岁及以上男性电子烟使用率为10.2%，女性为9.6%。两者较2024年分别上升0.1个百分点和下降0.4个百分点。",
      },
      {
        type: "p",
        text: "在25至34岁年龄组中，情况则有所不同。",
      },
    ],
  },
  {
    id: "2f-36851",
    category: "政策法规",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title: "新西兰最大电子烟零售商Shosha遭广告调查：“海外网站展示、本土发货”模式引监管套利疑云",
    enTitle:
      "New Zealand's Largest Vape Retailer Shosha Faces Advertising Probe Over Offshore Website and Local Fulfilment",
    summary:
      "新西兰卫生部正在重新审查电子烟连锁零售商Shosha旗下国际网站Shosha Global的运营情况。新西兰广播电台（RNZ）11月13日报道，奥克兰大学研究人员发现，该网站在展示电子烟产品图片的同时，允许消费者查询新西兰实体门店库存，并向本土地址配送商品，测试订单的物流文件显示货物从奥克兰发出。Shosha此前表示，国际网站面向海外客户，并于2025年7月与境外实体建立商业合作。Shosha在新西兰经营超过125家门店。研究人员认为相关营销活动可能绕过当地广告限制，但监管部门尚未公布最终违法认定。",
    imageUrl: "https://static.2firsts.com/uploads/20261117/d71346fa57def4df1a8bdb2f5a3758ee.png",
    publishedAt: "2026-11-17",
    shortDate: "11月17日",
    fullDate: "2026年11月17日",
    timestamp: 1794906436,
    views: 47,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/new-zealands-largest-vape-retailer-shosha-faces-advertising-probe-over-offshore-website-and-local-fulfilment",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "新西兰卫生部正在重新评估Shosha Global网站是否涉及违反电子烟广告规定；此前曾认为该网站在美国注册和托管，且不向新西兰配送受监管产品。",
          "奥克兰大学研究人员通过Shosha Global下单，商品三天内送达新西兰地址，物流文件显示从奥克兰发货。",
          "研究人员分析了2025年6月至2026年5月的67条Instagram帖文，发现多项具有新西兰市场特征的产品展示内容。",
          "Shosha拥有超过125家新西兰实体门店，经营电子烟进口、分销和零售业务，并称2025年7月建立海外商业合作。",
          "新西兰2025年6月17日起限制电子烟网站图片展示及相关促销活动；卫生部尚未公布针对Shosha Global的最终处罚决定。",
        ],
      },
      {
        type: "p",
        text: "新西兰卫生部正在重新审查电子烟连锁零售商Shosha运营的国际网站Shosha Global。研究人员发现，该网站在展示电子烟产品图片的同时，仍可向新西兰地址配送商品，且测试订单从奥克兰发出，引发对其是否违反本国电子烟广告限制的争议。",
      },
      {
        type: "p",
        text: "据新西兰广播电台（Radio New Zealand，RNZ）11月13日报道，奥克兰大学研究人员通过Shosha Global进行多次测试购买，订单在三天内送达新西兰地址。物流文件显示，商品直接从奥克兰发出。网站提供的实体门店库存查询功能也仅列出新西兰门店。",
      },
      {
        type: "p",
        text: "Shosha在新西兰经营超过125家实体门店。公司表示，Shosha Global是面向国际消费者的电商业务，并于2025年7月与一家未具名境外实体建立商业合作。",
      },
      {
        type: "p",
        text: "新西兰卫生部表示，正在重新评估此前对该网站的判断。研究人员认为网站可能被用于绕过当地电子烟广告规定，但监管机构尚未作出最终违法认定。",
      },
      {
        type: "h2",
        text: "本土网站撤除产品图片后，Shosha Global仍向新西兰客户配送",
      },
      {
        type: "p",
        text: "2025年6月，新西兰准备实施新的电子烟广告和零售展示限制。",
      },
      {
        type: "p",
        text: "RNZ取得的邮件显示，Shosha在规定生效约一周前通知本土客户，其新西兰网站shosha.co.nz将按新规移除电子烟产品图片，同时引导客户访问提供完整产品展示的shosha.com国际网站。",
      },
      {
        type: "p",
        text: "时任副卫生部长Casey Costello将该国际网站提交卫生部调查。",
      },
      {
        type: "p",
        text: "卫生部此前认为，shosha.com在美国注册及托管，不向新西兰配送受监管产品，因此当时未认定其构成违规经营。",
      },
      {
        type: "p",
        text: "奥克兰大学公共卫生研究人员Lucy Hardie与同事随后对网站开展调查。",
      },
      {
        type: "p",
        text: "研究人员发现，shosha.com不仅保留电子烟产品图片，还设有门店库存查询功能，而其中显示的门店均位于新西兰。",
      },
      {
        type: "p",
        text: "研究团队通过网站进行了多次测试购买。商品在三天内送达新西兰地址，相关物流文件显示货物从奥克兰发出。",
      },
      {
        type: "p",
        text: "针对新证据，卫生部发言人告诉RNZ，官员正在审查是否需要改变此前对shosha.com的判断。",
      },
      {
        type: "p",
        text: "卫生部同时表示，新西兰法律适用于在当地可以访问的网站，但对于在海外注册的企业，调查和执法存在实际及司法管辖方面的困难。",
      },
      {
        type: "h2",
        text: "67条社交媒体帖文出现新西兰警示标签及本土文化元素",
      },
      {
        type: "p",
        text: "研究人员还分析了与Shosha Global网站关联的Instagram账号shosha.global。",
      },
    ],
  },
  {
    id: "2f-36847",
    category: "政策法规",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title:
      "英国电子烟税改重塑经营成本：VPZ拟投150万英镑、Totally Wicked取得三类税务资质，VSL如何应对批发压力？",
    enTitle:
      "UK Vape Tax Reshapes Costs: VPZ's £1.5 Million Plan, Totally Wicked's Three HMRC Approvals and VSL's Wholesale Challenge",
    summary:
      "英国2026年10月1日起对电子烟烟油征收每10毫升2.20英镑的消费税，并实施税标制度，推动制造、仓储和分销企业调整经营安排。英国电子烟零售商VPZ据报道拟投资最多150万英镑升级生产及税标系统，此前已公布增加第五条生产线、建设保税仓库及新增40家门店的计划。另一家制造与零售企业Totally Wicked表示，已获得英国制造、暂缓缴税仓储和海外制造商英国代表三类运营批准。批发分销企业Vape Supplier Limited（VSL）则在年度报告中披露，库存转换、税务仓储及利润率压力成为其经营风险。三家企业的不同选择反映出英国电子烟税改对供应链和渠道竞争的影响。",
    imageUrl: "https://static.2firsts.com/uploads/20261116/a63f109ff3fac83bee5c56066c1582ea.png",
    publishedAt: "2026-11-16",
    shortDate: "11月16日",
    fullDate: "2026年11月16日",
    timestamp: 1794818232,
    views: 95,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/uk-vape-tax-reshapes-costs-vpzs-15-million-plan-totally-wickeds-three-hmrc-approvals-and-vsls-wholesale-challenge",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "英国电子烟消费税已于2026年10月1日生效，税率为每10毫升烟油2.20英镑；2027年4月1日起，英国将禁止销售不符合税标规定的电子烟产品。",
          "VPZ据报道拟投资最多150万英镑升级生产与税标系统，此前已公布第五条生产线、保税仓库和40家新店计划。",
          "Totally Wicked披露已取得制造、暂缓缴税仓储及海外制造商英国代表三类HMRC运营批准。",
          "VSL在年度报告中披露，其专业电子烟店、大型零售及批发客户、独立便利店与加油站零售商三类渠道收入贡献大致相当。",
          "新税制增加企业对库存、税务及产品流转的管理要求，但制造与零售一体化是否具有成本优势仍缺乏税改后的经营数据支持。",
        ],
      },
      {
        type: "p",
        text: "英国电子烟消费税正式实施后，专业零售商、制造商和批发企业开始围绕生产、仓储及库存管理调整经营安排。英国电子烟零售商VPZ据报道拟投入最多150万英镑升级生产与税标系统；竞争企业Totally Wicked披露已取得三类税务运营批准；批发分销企业Vape Supplier Limited（VSL）则将旧库存转换和利润率压力列为经营风险。",
      },
      {
        type: "p",
        text: "英国自2026年10月1日起对电子烟烟油征收每10毫升2.20英镑消费税，并实施配套税标制度。随着2027年零售端过渡期限临近，覆盖制造、批发和零售多个环节的企业，与主要依赖外部供应商的经销商，面临不同的资本投入和库存管理安排。",
      },
      {
        type: "h2",
        text: "VPZ规划150万英镑投资，Totally Wicked取得三类税务运营资质",
      },
      {
        type: "p",
        text: "英国包装行业媒体《Packaging News》11月13日报道，专业电子烟零售商VPZ拟投资最多150万英镑，用于生产及电子烟消费税标系统。",
      },
      {
        type: "p",
        text: "VPZ同时经营英国本土烟油制造和专业电子烟零售业务。其关联企业Absolute E-juice在爱丁堡生产包括Self Juice在内的自有品牌烟油。",
      },
      {
        type: "p",
        text: "今年2月2日，VPZ曾公布一项数百万英镑投资计划，涉及在英国生产设施增加第五条生产线、于爱丁堡总部建立保税仓库，以及2026年新增40家门店。",
      },
      {
        type: "p",
        text: "目前尚未确认11月报道中的150万英镑是否包含在此前投资计划内，也未获得相关设备投产及新增产能的具体数据。",
      },
      {
        type: "p",
        text: "另一家英国电子烟企业Totally Wicked同样覆盖制造和零售，但其业务还包括电子烟设备进口、批发以及面向大型零售商和便利店的分销。",
      },
      {
        type: "p",
        text: "Totally Wicked在企业LinkedIn账号披露，已取得英国税务海关总署（HM Revenue & Customs，HMRC）批准的三类运营资格：",
      },
      {
        type: "p",
        text: "英国电子烟产品制造商资格（Approved Manufacturer）；",
      },
      {
        type: "p",
        text: "暂缓缴税仓储资格（Approved Storage Warehouse Facilities — Duty Suspension）；",
      },
      {
        type: "p",
        text: "海外制造商英国代表资格（Approved UK Representative for Overseas Manufacturers）。",
      },
      {
        type: "p",
        text: "其中，海外制造商英国代表资格允许获批企业根据规定代表境外制造商采购和管理英国电子烟税标。",
      },
      {
        type: "p",
        text: "英国规定，在境外生产过程中贴附英国税标的制造商，需要由获得HMRC批准的英国代表办理相关税标事务，并承担规定的管理责任。",
      },
      {
        type: "p",
        text: "Totally Wicked因此具备了为境外制造商提供相关税标管理服务的资格。不过，公司尚未披露由此获得的第三方客户数量或收入。",
      },
      {
        type: "p",
        text: "零售方面，Totally Wicked此前披露拥有超过150家品牌门店，同时通过独立零售商、大型连锁及便利店渠道销售产品。公司近期还公布了纽卡斯尔市中心一家新店开业。",
      },
    ],
  },
  {
    id: "2f-36845",
    category: "政策法规",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title: "澳大利亚非法烟草市场五年增长或迎转折：规模估算最多降25%，80%烟草税削减方案引争议",
    enTitle:
      "Australia's Illicit Tobacco Market May Have Turned After Five Years of Growth, With Estimates Showing Up to 25% Decline Amid Tax-Cut Debate",
    summary:
      "澳大利亚政府2026年11月15日公布的最新估算显示，该国非法烟草市场规模可能在连续五年增长后首次下降，从此前的5,972吨降至4,453—5,893吨。政府将市场变化归因于加强边境查缉和跨机构执法。澳大利亚边境执法局在2025—26财年查获超过2,300吨非法烟草及1,320万件非法电子烟产品，2026—27财年首季又查获约730吨非法烟草。与此同时，澳大利亚统计局此前估计，2025年约80%的尼古丁消费量来自非法来源。市场规模估算、消费调查与执法查获数据采用不同统计方法。",
    imageUrl: "https://static.2firsts.com/uploads/20261116/944eb653716a73d99c949abafa6a5b15.png",
    publishedAt: "2026-11-16",
    shortDate: "11月16日",
    fullDate: "2026年11月16日",
    timestamp: 1794809453,
    views: 111,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/australias-illicit-tobacco-market-may-have-turned-after-five-years-of-growth-with-estimates-showing-up-to-25-decline-amid-tax-cut-debate",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "澳大利亚非法烟草市场最新规模估计为4,453—5,893吨，低于此前5,972吨的估算峰值，可能结束连续五年的增长。",
          "2025—26财年，澳大利亚边境执法局查获超过2,300吨非法烟草及1,320万件非法电子烟产品。",
          "2026—27财年首季，边境部门又查获约730吨非法烟草；跨机构联合执法已促成约1,300家门店关闭。",
          "澳大利亚政府坚持加强执法，反对党则提出大幅削减烟草消费税及调整电子烟、尼古丁袋监管的方案。",
        ],
      },
      {
        type: "p",
        text: "据澳大利亚广播公司（ABC）11月15日报道，澳大利亚政府公布的最新估算显示，该国非法烟草市场规模可能在连续五年增长后首次下降。非法烟草和电子烟专员（Illicit Tobacco and E-cigarette Commissioner，ITEC）的数据显示，非法烟草市场规模从此前的5,972吨降至5,893吨，较低估算值为4,453吨。",
      },
      {
        type: "p",
        text: "此前五年，澳大利亚非法烟草市场估计年均增长22.6%。按此次公布的估算数值计算，市场规模较此前峰值下降约1.3%至25.4%。",
      },
      {
        type: "p",
        text: "澳大利亚政府将这一变化归因于加强边境查缉、国内零售执法及联邦与州政府之间的合作。海关事务助理部长朱利安·希尔（Julian Hill）表示，政府加大执法投入以及旨在减少烟草需求的公共卫生措施，正在扭转非法烟草市场此前的增长趋势。",
      },
      {
        type: "h2",
        text: "非法烟草市场估计降至4,453—5,893吨",
      },
      {
        type: "p",
        text: "澳大利亚非法烟草和电子烟专员办公室此次使用了更多数据来源，包括澳大利亚健康与福利研究所（Australian Institute of Health and Welfare，AIHW）的定期调查数据。",
      },
      {
        type: "p",
        text: "政府认为，新增数据有助于缩小市场估算区间。",
      },
      {
        type: "p",
        text: "澳大利亚非法烟草市场的具体规模仍依赖模型估算。此次两个估算值相差1,440吨。",
      },
      {
        type: "p",
        text: "澳大利亚统计局（Australian Bureau of Statistics，ABS）于2026年6月发布的实验性研究提供了另一组市场数据。",
      },
      {
        type: "p",
        text: "该研究综合废水尼古丁代谢物监测、消费者调查和行政资料，估计2017年至2025年澳大利亚尼古丁消费总量增长近40%，其中来自非法来源的消费量占比从12%升至80%。",
      },
      {
        type: "p",
        text: "澳大利亚统计局的研究涵盖非法卷烟、散装烟草、电子烟及其他尼古丁产品；本次ITEC公布的吨位数据则针对非法烟草市场。",
      },
      {
        type: "h2",
        text: "全年查获1,320万件非法电子烟，首季再查获730吨烟草",
      },
      {
        type: "p",
        text: "澳大利亚边境执法局（Australian Border Force，ABF）2026年7月公布，2025—26财年，该机构在边境及国内执法环节合计查获超过2,300吨非法烟草。",
      },
      {
        type: "p",
        text: "其中，在边境查获超过22亿支非法卷烟及586.7吨散装烟草，合计超过2,259.4吨非法烟草，涉及估计超过47亿澳元的未缴烟草税费，不包括商品及服务税。",
      },
      {
        type: "p",
        text: "同期，边境执法局查获超过1,320万件非法电子烟产品，同比增长112%。",
      },
      {
        type: "p",
        text: "进入2026—27财年后，澳大利亚边境执法部门在7月至9月又查获约730吨非法烟草。",
      },
      {
        type: "p",
        text: "国内执法方面，由澳大利亚边境执法局牵头的全国联合打击小组（National Disruption Group，NDG）汇集31个联邦、州和领地机构。",
      },
    ],
  },
  {
    id: "2f-36843",
    category: "政策法规",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title:
      "加拿大因儿童防护包装不合规召回近2.5万支GTMBAR电子烟：品牌关联深圳及天木电子科技有限公司，进口及分销商为LK Vape",
    enTitle:
      "Canada Recalls Nearly 25,000 GTMBAR Vapes Over Child-Resistant Packaging Violations; Brand Linked to Shenzhen GTM Bar, with LK Vape as Importer and Distributor",
    summary:
      "加拿大卫生部于2026年11月13日宣布召回中国制造的GTMBAR 45K一次性电子烟，涉及2024年12月至2026年10月期间在加拿大销售的24,950支产品。涉事产品采用20毫升组合式烟油设计，尼古丁浓度为20 mg/mL。加拿大卫生部认定，产品不符合电子烟包装法规的儿童防护要求。截至11月12日，企业尚未收到相关事故或伤害报告。加拿大进口商及分销商为LK Vape，GTMBAR品牌的英国注册商标持有人为中国深圳企业及天木。",
    imageUrl: "https://static.2firsts.com/uploads/20261116/20bf8b3e39b7bdc639344c173747bb3c.jpg",
    publishedAt: "2026-11-16",
    shortDate: "11月16日",
    fullDate: "2026年11月16日",
    timestamp: 1794794608,
    views: 194,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/canada-recalls-nearly-25000-gtmbar-vapes-over-child-resistant-packaging-violations-brand-linked-to-shenzhen-gtm-bar-with-lk-vape-as-importer-and-distributor",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "加拿大卫生部召回GTMBAR 45K一次性电子烟，企业报告两款涉事产品累计销售24,950支。",
          "产品采用20毫升组合式烟油设计，包括1.75毫升机身烟油及18.25毫升独立预填充容器。",
          "召回涉及儿童防护包装不合规。截至2026年11月12日，企业尚未收到相关事故或伤害报告。",
          "加拿大进口商及分销商为LK Vape；GTMBAR英国注册商标持有人为深圳市及天木电子科技有限公司。",
        ],
      },
      {
        type: "p",
        text: "据加拿大卫生部（Health Canada）于2026年11月13日发布的召回公告，电子烟品牌GTMBAR旗下GTMBAR 45K一次性电子烟因儿童防护包装不符合规定，在加拿大被召回。涉事产品产自中国，2024年12月至2026年10月期间在加拿大累计售出24,950支。",
      },
      {
        type: "p",
        text: "召回涉及Flavourless和Flavourless North两个版本。加拿大卫生部认定，相关产品不符合《电子烟产品标签和包装条例》（Vaping Products Labelling and Packaging Regulations）的包装要求。本次召回依据《加拿大消费品安全法》（Canada Consumer Product Safety Act）实施。",
      },
      {
        type: "h2",
        text: "两款GTMBAR 45K被召回，产品总烟油容量20毫升",
      },
      {
        type: "p",
        text: "GTMBAR 45K是一款配备USB-C充电接口的一次性电子烟。设备内含1.75毫升烟油，另配有18.25毫升独立预填充烟油容器，总烟油容量为20毫升，尼古丁浓度为20 mg/mL。",
      },
      {
        type: "p",
        text: "加拿大卫生部公布的召回产品信息如下：",
      },
      {
        type: "p",
        text: "据进口商报告，两款涉事产品于2024年12月至2026年10月期间在加拿大累计售出24,950支。",
      },
      {
        type: "h2",
        text: "儿童防护包装不符合规定，尚未收到相关伤害报告",
      },
      {
        type: "p",
        text: "加拿大卫生部指出，含尼古丁电子烟液如果被意外摄入，可能引发中毒。缺乏适当儿童防护措施的产品包装可能增加儿童接触尼古丁的风险，造成严重疾病、伤害甚至死亡。",
      },
      {
        type: "p",
        text: "此次GTMBAR 45K召回涉及产品包装不符合相关监管要求。加拿大卫生部未披露具体不合规的包装部件。",
      },
      {
        type: "p",
        text: "截至2026年11月12日，负责召回的企业尚未收到加拿大境内与涉事产品有关的事故或伤害报告。",
      },
      {
        type: "p",
        text: "加拿大卫生部要求消费者立即停止使用被召回产品，将其放置在儿童无法接触的位置，并按照当地危险废物处置规定进行处理。",
      },
      {
        type: "p",
        text: "根据《加拿大消费品安全法》，被召回产品不得在加拿大重新分销、销售或赠送。",
      },
      {
        type: "h2",
        text: "加拿大进口商为LK Vape，GTMBAR英国商标持有人为深圳及天木",
      },
      {
        type: "p",
        text: "加拿大卫生部召回公告显示，涉事产品的进口商及分销商均为Cigarettes électroniques LK Vape Inc.（LK Vape），该企业位于加拿大魁北克省布兰维尔（Blainville），经营电子烟及相关产品的销售和分销业务。",
      },
      {
        type: "p",
        text: "消费者可通过电话+1 450-434-8813（分机101）或电子邮箱info@lkvape.ca联系LK Vape，了解召回事宜。",
      },
      {
        type: "p",
        text: "公开商标资料显示，中国深圳企业深圳市及天木电子科技有限公司（Shenzhen GTM bar Electronic Technology Co., Ltd.）为GTMBAR英国注册商标持有人。",
      },
    ],
  },
  {
    id: "2f-36839",
    category: "政策法规",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title:
      "俄罗斯17个地区通过电子烟禁售决定、另39地推进立法：圣彼得堡逾3,000个销售网点面临2027年禁令",
    enTitle:
      "Russia's Vape Ban Decisions Reach 17 Regions With 39 More Considering Laws, Putting Over 3,000 St. Petersburg Retail Outlets in Focus",
    summary:
      "俄罗斯电子烟零售禁令正向更多地区扩展。国家杜马主席维亚切斯拉夫·沃洛金11月7日表示，已有17个地区通过电子烟禁售相关决定，另有39个地区正在推进立法。11月12日，列宁格勒州和卡累利阿共和国的地方议会分别通过电子烟零售禁令，拟于2027年3月1日实施。此前一天，圣彼得堡立法议会以50票赞成通过五年禁令草案一读，当地615家专业电子烟门店和约2,400家兼营网点将面临产品销售限制。根据2026年6月颁布的第186-FZ号联邦法律，各地区可在2027年3月至2032年3月期间实施电子尼古丁输送系统及相关烟液零售禁令，相关规定同时限制持牌供应商向禁售地区的零售网点供货。",
    imageUrl: "https://static.2firsts.com/uploads/20261113/8ff38c2b4edf335d117b0d4e6c0667d1.png",
    publishedAt: "2026-11-13",
    shortDate: "11月13日",
    fullDate: "2026年11月13日",
    timestamp: 1794554561,
    views: 269,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/russias-vape-ban-decisions-reach-17-regions-with-39-more-considering-laws-putting-over-3000-st-petersburg-retail-outlets-in-focus",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "截至11月7日，俄罗斯已有17个地区通过电子烟禁售相关决定，另有39个地区推进立法；地方禁令主要拟于2027年3月起实施。",
          "11月12日，列宁格勒州以43票赞成通过五年禁售法律，卡累利阿共和国同日通过类似法律；马里埃尔共和国已于11月10日完成立法。",
          "圣彼得堡11月11日以50票赞成通过禁令草案一读，当地有615家专业电子烟门店，以及约2,400家兼营电子烟的零售网点。",
          "联邦第186-FZ号法律除允许地方禁售外，还限制持牌企业向禁售地区的零售网点供应电子烟及相关烟液，违规可能导致相关许可证被撤销。",
        ],
      },
      {
        type: "p",
        text: "俄罗斯电子烟零售禁令正向更多地区扩展。11月12日，列宁格勒州（Leningrad Oblast）和卡累利阿共和国（Republic of Karelia）分别通过禁止零售电子烟及相关烟液的法律，拟于2027年3月1日实施。此前一天，圣彼得堡立法议会一读通过类似禁令草案，当地逾3,000个销售电子烟的零售网点可能受到影响。",
      },
      {
        type: "p",
        text: "俄罗斯国家杜马（State Duma）主席维亚切斯拉夫·沃洛金（Vyacheslav Volodin）11月7日披露，全国已有17个地区通过电子烟零售禁令相关决定，另有39个地区正在制定或审议类似法律。",
      },
      {
        type: "p",
        text: "上述数字为11月7日的统计，不包含此后尚未核实是否重复计算的地方新进展。根据俄罗斯2026年6月颁布的第186-FZ号联邦法律，各地区可从2027年3月1日起，在最长五年的期限内实施相关零售禁令。",
      },
      {
        type: "h2",
        text: "圣彼得堡一读通过禁令，逾3,000个电子烟销售网点面临调整",
      },
      {
        type: "p",
        text: "11月11日，圣彼得堡立法议会以50票赞成、无人反对的结果，一读通过禁止零售电子尼古丁输送系统（Electronic Nicotine Delivery Systems，ENDS）及相关烟液的法案。",
      },
      {
        type: "p",
        text: "草案拟将禁令实施期限设定为2027年3月1日至2032年3月1日。",
      },
      {
        type: "p",
        text: "法案由圣彼得堡立法议会预算财政委员会及社会政策与卫生委员会提出。负责介绍法案的议员丹尼斯·切特尔博克（Denis Chetyrbok）表示，措施旨在降低电子烟产品的可获得性，尤其是限制未成年人和年轻人接触电子烟。",
      },
      {
        type: "p",
        text: "与现有禁止向未成年人销售的规定不同，拟议禁令将适用于所有年龄的消费者。",
      },
      {
        type: "p",
        text: "根据圣彼得堡工业政策、创新与贸易委员会数据，当地有615家专业电子烟销售门店，约占全市商业网点总数的0.6%。",
      },
      {
        type: "p",
        text: "切特尔博克还表示，另有超过2,400家零售机构兼营电子烟与其他商品，主要包括传统烟草产品。",
      },
      {
        type: "p",
        text: "如果法案最终通过，专业电子烟门店可能需要转型或停止经营，兼营零售商则需要调整产品组合，但仍可继续销售不在禁令范围内的商品。",
      },
      {
        type: "p",
        text: "法案提出者估计，禁令可能令当地财政每年减少数千万卢布收入。该数字属于立法者估算，并非已经发生的财政损失。",
      },
      {
        type: "p",
        text: "圣彼得堡计划于11月18日继续审议相关法案。截至11月13日，该市禁令仍处于立法审议阶段，尚未完成最终通过程序。",
      },
      {
        type: "h2",
        text: "列宁格勒州与卡累利阿通过禁令，地区之间推进政策协调",
      },
      {
        type: "p",
        text: "11月12日，毗邻圣彼得堡的列宁格勒州立法议会在一次会议中完成三读，以43票赞成一致通过电子烟零售禁令法律。",
      },
      {
        type: "p",
        text: "根据通过的文本，列宁格勒州将在2027年3月1日至2032年3月1日期间禁止零售电子尼古丁输送系统及相关烟液，违规行为将受到相应行政处罚。",
      },
    ],
  },
  {
    id: "2f-36819",
    category: "政策法规",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title: "欧盟烟草税改革未达成协议：26国支持折中方案，马耳他仍未同意",
    enTitle:
      "EU Tobacco Tax Reform Stalls as Malta Withholds Support Despite Backing From 26 States",
    summary:
      "欧盟27国财政部长于2026年11月9日举行的经济与财政事务理事会（ECOFIN）会议上，未能就烟草消费税改革达成协议。爱尔兰轮值主席国的折中方案获得26个成员国支持，但马耳他仍未同意，导致需要一致支持的改革未能形成理事会一般立场。改革拟提高传统烟草最低消费税，并将电子烟烟油、加热烟草和尼古丁袋纳入欧盟共同最低税收框架。会议期间，芬兰和爱沙尼亚接受进一步妥协；轮值主席国还提出将尼古丁袋纳入税制与确定具体税率分开处理。另一项折中安排拟允许符合条件的10个成员国将部分传统烟草产品税率调整过渡期延长至2036年。爱尔兰计划于12月继续磋商。",
    imageUrl: "https://static.2firsts.com/uploads/20261111/ca0402d9bba8ebbb1b6e72e52e429547.png",
    publishedAt: "2026-11-11",
    shortDate: "11月11日",
    fullDate: "2026年11月11日",
    timestamp: 1794363686,
    views: 166,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/eu-tobacco-tax-reform-stalls-as-malta-withholds-support-despite-backing-from-26-states",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "欧盟11月9日未能就烟草税改革形成理事会一般立场。26国支持爱尔兰轮值主席国的折中方案，马耳他成为最后未同意的成员国。",
          "马耳他反对拟议最低税额、定期税率调整及购买力调整机制，认为当前方案未充分考虑本国经济条件和税收自主权。",
          "芬兰及爱沙尼亚接受进一步妥协。爱沙尼亚获得的折中安排涉及在指令下一次修订前暂停欧盟最低税额自动调整。",
          "尼古丁袋税率谈判出现新方案：拟先确定其纳入欧盟共同消费税框架，具体最低税率留待后续决定。",
          "最新折中方案还拟允许符合条件的10个成员国将卷烟及手卷烟税率调整过渡期延长至2036年。爱尔兰计划12月继续谈判。",
        ],
      },
      {
        type: "p",
        text: "欧盟27国财政部长11月9日在布鲁塞尔举行的经济与财政事务理事会（Economic and Financial Affairs Council，ECOFIN）会议上，未能就烟草消费税改革达成协议。爱尔兰轮值主席国提出的折中方案获得26个成员国支持，但马耳他仍无法接受当前文本，导致需要一致同意的改革未能形成理事会一般立场。",
      },
      {
        type: "p",
        text: "改革拟提高传统烟草最低消费税，并将电子烟烟油、加热烟草及尼古丁袋纳入欧盟共同最低税收框架。",
      },
      {
        type: "p",
        text: "爱尔兰副总理兼财政部长西蒙·哈里斯（Simon Harris）在会后表示，26国支持标志着谈判取得重大进展。爱尔兰将继续与马耳他磋商，争取12月达成协议，但不打算重新开启整套谈判。",
      },
      {
        type: "h2",
        text: "26国支持、马耳他未同意：税率调整机制仍存分歧",
      },
      {
        type: "p",
        text: "欧盟理事会11月9日公布的会议结果确认，绝大多数成员国支持爱尔兰轮值主席国提交的烟草税改革折中方案，但一个成员国最终表示无法接受，因此会议未能达成一致。",
      },
      {
        type: "p",
        text: "哈里斯在会后新闻发布会上确认，27个成员国中已有26国支持，马耳他是唯一尚未同意的国家。",
      },
      {
        type: "p",
        text: "马耳他财政部长克莱德·卡鲁阿纳（Clyde Caruana）在会议上表示，马耳他支持烟草税改革的总体目标，但此前提出的担忧仍未得到解决。",
      },
      {
        type: "p",
        text: "据EUobserver和马耳他媒体MaltaToday报道，马耳他的主要异议集中在三个方面：拟议最低消费税高于其现行国内水平、欧盟最低税额定期调整机制，以及根据成员国购买力和价格水平调整最低税负的安排。",
      },
      {
        type: "p",
        text: "卡鲁阿纳认为，尽管最新方案对尼古丁袋税率作出调整，整体最低税额仍可能对马耳他产生不成比例的经济影响。",
      },
      {
        type: "p",
        text: "马耳他还认为，相关税额调整机制未为成员国根据国内经济状况制定税收政策保留充分灵活性。",
      },
      {
        type: "p",
        text: "在11月9日会议早期阶段，芬兰和爱沙尼亚也对折中方案持保留意见。",
      },
      {
        type: "p",
        text: "芬兰此前认为尼古丁袋最低税率偏低，希望对该类产品设置更高税负。爱沙尼亚则反对无需再次获得成员国一致同意即可自动调整欧盟最低税率的机制。",
      },
      {
        type: "p",
        text: "根据EUobserver及Eunews的会后报道，爱沙尼亚最终接受了爱尔兰提出的进一步妥协安排：在指令下一次修订之前，暂停欧盟最低税率的自动调整。下一次修订的具体时间尚未确定。",
      },
      {
        type: "p",
        text: "芬兰也在谈判后接受整体折中方案，使马耳他成为唯一未同意当前文本的成员国。",
      },
      {
        type: "p",
        text: "根据《欧盟运行条约》第113条，相关消费税协调立法需要欧盟理事会一致同意。因此，即使26国支持，也不足以形成理事会一般立场。",
      },
      {
        type: "h2",
        text: "尼古丁袋税率拟后续决定，10国传统烟草过渡期或延至2036年",
      },
    ],
  },
  {
    id: "2f-36835",
    category: "行业观点",
    sourceChannel: "COMPANY",
    sourcePath: "/news/list/company",
    title:
      "日本烟草收购尼古丁袋品牌CLEW，16万家门店的卷烟渠道能否助其在美国与PMI、BAT争夺市场份额？",
    enTitle:
      "Special Report｜Japan Tobacco Buys CLEW: Can Its 160,000-Store Cigarette Network Help It Vie for U.S. Nicotine Pouch Share Against PMI and BAT?",
    summary:
      "日本烟草集团（JT Group）于2026年11月12日宣布，已从Nevcore Innovations Inc.收购尼古丁袋品牌CLEW的美国资产，包括商标、知识产权、产品配方及上市前烟草产品申请（PMTA），交易金额未披露。CLEW目前在美国13个州的部分零售网点销售，并立即纳入JTI LIGGETT品牌组合。此次交易距离JT以约24亿美元收购美国卷烟企业Vector Group约两年。JTI LIGGETT现有卷烟品牌覆盖全美超过16万家门店。2026年10月，JTI LIGGETT展台工作人员曾向2Firsts表示，公司当时尚未在美国推出尼古丁袋产品。CLEW虽曾宣布其PMTA申请获得FDA受理，但尚未进入FDA已授权尼古丁袋产品名单。JT未披露CLEW的渠道扩张计划。",
    imageUrl: "https://static.2firsts.com/uploads/20261112/8bef31ab46910590962be21f50b14ad2.png",
    publishedAt: "2026-11-12",
    shortDate: "11月12日",
    fullDate: "2026年11月12日",
    timestamp: 1794481556,
    views: 2443,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/japan-tobacco-buys-clew-can-its-160000-store-cigarette-network-help-it-vie-for-us-nicotine-pouch-share-against-pmi-and-bat",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "收购交易： JT于11月10日收购CLEW美国品牌资产，涵盖商标、知识产权、产品配方及PMTA申请，交易金额未披露。",
          "美国业务： JT于2024年10月完成约24亿美元的Vector Group收购；JTI LIGGETT目前称其品牌覆盖超过16万家美国零售门店，卷烟市场份额超过8%。",
          "品类扩张： 2026年10月NACS Show期间，JTI LIGGETT工作人员向2Firsts表示，公司当时尚未在美国推出尼古丁袋产品。",
          "监管状态： CLEW的PMTA曾于2024年由Nevcore宣布获FDA受理，但品牌未出现在FDA截至11月12日公布的67款获授权尼古丁袋产品名单中。",
          "后续计划： CLEW目前在美国13个州部分网点销售，JT尚未公布其进入JTI LIGGETT现有零售网络的计划。",
        ],
      },
      {
        type: "p",
        text: "2Firsts 2026年11月12日",
      },
      {
        type: "p",
        text: "日本烟草集团（JT Group）11月12日宣布，已从美国Nevcore Innovations Inc.收购尼古丁袋品牌CLEW的美国相关资产，将这一已在美国13个州部分零售网点销售的品牌纳入JTI LIGGETT产品组合。交易涵盖品牌商标、知识产权、产品配方及上市前烟草产品申请（PMTA），收购金额未披露。",
      },
      {
        type: "p",
        text: "此次交易距离JT以约24亿美元收购美国卷烟企业Vector Group约两年。通过此前的收购，JT扩大了在美国传统卷烟市场的规模及分销网络。JTI LIGGETT目前称，其卷烟品牌覆盖全美超过16万家零售门店，市场份额超过8%。",
      },
      {
        type: "p",
        text: "2026年10月，2Firsts在拉斯维加斯NACS Show采访JTI LIGGETT展台工作人员时，对方表示公司当时尚未在美国推出尼古丁袋产品。一个多月后，JT宣布收购拥有现有产品、部分零售渠道及PMTA申请的CLEW品牌资产。",
      },
      {
        type: "p",
        text: "JT尚未公布CLEW进入其现有美国零售网络的计划或时间表。",
      },
      {
        type: "h2",
        text: "JT收购CLEW美国资产，品牌立即纳入JTI LIGGETT",
      },
      {
        type: "p",
        text: "根据JT公告，交易于2026年11月10日完成，收购范围仅涉及CLEW的美国资产，包括商标、知识产权、产品配方及一项PMTA申请。",
      },
      {
        type: "p",
        text: "公告未披露交易是否涉及生产设施、库存、零售合同或其他经营资产。",
      },
      {
        type: "p",
        text: "CLEW此前由美国新型尼古丁产品企业Nevcore Innovations Inc.持有，提供不含烟草叶的湿润型尼古丁袋，涵盖不同口味和尼古丁强度。",
      },
      {
        type: "p",
        text: "JT表示，CLEW目前已在美国13个州的部分零售网点销售，但没有公布具体州份名单、门店数量、销售额或销量。",
      },
      {
        type: "p",
        text: "交易完成后，CLEW立即纳入JTI LIGGETT品牌组合。",
      },
      {
        type: "p",
        text: "JTI美洲区总裁Idil Yasa将此次收购与集团此前收购Vector Group时提出的美国业务战略联系起来。",
      },
      {
        type: "p",
        text: "她表示，收购CLEW将使JTI进入美国尼古丁袋市场，补充其现有卷烟业务，并有望在中长期提高美国市场对JT集团的贡献，支持以美元计价的持续现金流。",
      },
      {
        type: "p",
        text: "JT表示，交易资金来自集团现有现金，预计不会对2026财年合并业绩产生重大影响。公司没有披露交易对价或CLEW的财务表现。",
      },
      {
        type: "h2",
        text: "继24亿美元Vector收购后，JTI将尼古丁袋纳入美国业务组合",
      },
      {
        type: "p",
        text: "2024年8月，日本烟草宣布计划以每股15美元的价格收购美国卷烟企业Vector Group，股权收购金额约24亿美元。",
      },
    ],
  },
  {
    id: "2f-36827",
    category: "行业观点",
    sourceChannel: "INTERVIEW",
    sourcePath: "/news/interview",
    title: "资本如何重新定价全球烟草产业——2Firsts专访建银国际证券研究主管陈亚雷",
    enTitle: "How Investors Are Repricing the Global Tobacco Industry as Nicotine Markets Shift",
    summary:
      "全球烟草产业的增长逻辑和资本估值正在发生哪些变化？2Firsts专访建银国际证券研究主管陈亚雷。他预计，未来几年全球尼古丁袋市场年增速可能达到30%至50%，高于雾化电子烟和加热烟草。报道分析监管执法、市场份额变化及新商业模式如何影响企业估值，并结合纽约New Approaches Summit的讨论，探讨跨国烟草巨头与中国企业的竞争优势、盈利前景及行业并购趋势。",
    imageUrl: "https://static.2firsts.com/uploads/20261111/e962b156762c487eb038a71ee5c611ca.png",
    publishedAt: "2026-11-11",
    shortDate: "11月11日",
    fullDate: "2026年11月11日",
    timestamp: 1794402047,
    views: 327,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/how-investors-are-repricing-the-global-tobacco-industry-as-nicotine-markets-shift",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "p",
        text: "封面图由AI生成。",
      },
      {
        type: "p",
        text: "声明： 本文仅供产业及学术研究参考，不构成任何投资建议。",
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "p",
        text: "● 尼古丁袋增长： 建银国际证券研究主管陈亚雷预计，未来几年全球尼古丁袋市场年增速可能达到30%至50%，高于雾化电子烟和加热烟草。",
      },
      {
        type: "p",
        text: "● 监管与市场竞争： 美国针对不合规电子烟的执法如果持续，可能改善合规企业的竞争环境，但市场需求未必自动转向合法产品。",
      },
      {
        type: "p",
        text: "● 资本市场估值： 烟草公司的增长前景、盈利能力和现金储备影响其估值。建银国际采用不同估值方法分析PMI、BAT、思摩尔及雾芯科技等企业。",
      },
      {
        type: "p",
        text: "● 中外企业竞争： 国际烟草巨头在全球渠道、品牌和监管经验方面具有优势，中国企业则在技术制造、供应链及灵活经营模式方面形成竞争力。",
      },
      {
        type: "p",
        text: "● 未来投资观察： 美国雾化电子烟市场、尼古丁袋监管及行业并购是陈亚雷重点关注的方向；NAS会议亦讨论了烟草企业盈利能力与股东参与对投资决策的影响。",
      },
      {
        type: "p",
        text: "随着雾化电子烟、加热烟草和尼古丁袋的发展，全球烟草产业的增长来源和竞争格局正在变化。建银国际证券研究主管陈亚雷在接受2Firsts专访时预计，未来几年全球尼古丁袋市场的年增长率可能达到30%至50%，明显高于雾化电子烟和加热烟草。他同时认为，主要市场的监管执法变化、无烟产品的增长及盈利能力，正在影响资本市场对烟草公司长期价值的判断。",
      },
      {
        type: "p",
        text: "为进一步理解全球烟草和尼古丁产业的投资逻辑，2Firsts专访了建银国际证券（CCB International Securities）研究主管Charlie Chen（陈亚雷）。2026年5月，陈亚雷所在团队发布《减害科技：烟草行业投资新焦点》，研究不同新型烟草产品的增长前景，以及传统跨国烟草公司与新兴企业的投资逻辑。",
      },
      {
        type: "p",
        text: "2Firsts于9月25日在纽约参加了New Approaches Summit（NAS）。会议专门设置资本议题，来自证券研究、资产管理和风险投资机构的与会者讨论了新型尼古丁产品的发展如何影响烟草公司的增长、盈利、估值和资本配置。",
      },
      {
        type: "p",
        text: "杰富瑞（Jefferies）全球烟草股票研究分析师Andrei Andon-Ionita在会上表示，随着新型尼古丁产品规模扩大，过去几年投资者对烟草行业的兴趣有所增加。传统卷烟销量下降，已经越来越难以单独解释这一产业的长期发展前景。",
      },
      {
        type: "h2",
        text: "监管与执法正在改变烟草市场的竞争格局",
      },
      {
        type: "p",
        text: "回顾5月研究报告，陈亚雷认为，最值得关注的变化之一，是全球主要市场，特别是美国，对新型烟草产品的监管和执法态度正在发生转变。",
      },
      {
        type: "p",
        text: "“过去资本市场对新型烟草的理解，一直存在一种‘不管就乱，一管就死’的看法。”陈亚雷说。",
      },
      {
        type: "p",
        text: "在缺乏监管的阶段，新型烟草市场容易出现无序竞争。但监管规则建立之后，如果执法未能同步跟上，不合规企业仍可能通过违规产品和非正规销售渠道参与竞争，而遵守规则的企业却受到更多限制。",
      },
      {
        type: "p",
        text: "这种矛盾在雾化电子烟市场表现得较为明显。部分不合规产品能够以丰富的口味参与市场竞争，而合法经营企业在产品开发、营销及市场准入方面受到严格约束。陈亚雷认为，监管与执法之间的不匹配，使部分合规企业长期处于不利竞争地位。",
      },
      {
        type: "p",
        text: "他特别关注美国市场近期的执法变化。在他看来，美国针对不合规电子烟产品的执法力度如果能够持续，可能改善合法企业面临的竞争环境，也可能改变资本市场对相关企业增长前景的判断。",
      },
    ],
  },
  {
    id: "2f-36829",
    category: "行业观点",
    sourceChannel: "COMPANY",
    sourcePath: "/news/list/company",
    title: "菲莫国际增长预测6.2%、英美烟草仅3.9%：摩根大通为何仍更看好BAT？",
    enTitle:
      "Why Does JPMorgan Favor BAT Over Philip Morris Despite Forecasting Slower Growth of 3.9% Versus 6.2%?",
    summary:
      "摩根大通（J.P. Morgan）于2026年11月恢复对英美烟草（BAT）、菲莫国际（PMI）和帝国品牌（Imperial Brands）的股票研究覆盖，分别给予增持、中性和中性评级。该机构预测，2027年BAT可比销售额增长3.9%，低于PMI的6.2%，但两家公司2027年预期市盈率分别约为11倍和21倍。摩根大通看好BAT在美国尼古丁袋和电子烟市场的增长潜力。BAT半年报显示，2026年上半年美国现代口含尼古丁业务收入按固定汇率计算增长220%，销量份额升至29.8%；PMI同期继续扩大ZYN产品组合，并在第三季度恢复美国出货量增长。帝国品牌则预计新型烟草及尼古丁产品占集团销售额的4%至5%，同时通过收购和股票回购推进资本配置。",
    imageUrl: "https://static.2firsts.com/uploads/20261112/0faf3e1a96f6655c56b8902fe73a0e50.png",
    publishedAt: "2026-11-12",
    shortDate: "11月12日",
    fullDate: "2026年11月12日",
    timestamp: 1794454276,
    views: 202,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/why-does-jpmorgan-favor-bat-over-philip-morris-despite-forecasting-slower-growth-of-39-versus-62",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "摩根大通恢复覆盖BAT、PMI和帝国品牌，分别给予增持、中性和中性评级，目标价为53英镑、200美元和32英镑。",
          "摩根大通预测2027年BAT和PMI可比销售额分别增长3.9%和6.2%，预期市盈率约为11倍和21倍。",
          "BAT上半年美国现代口含尼古丁收入按固定汇率增长220%，销量增长188%，美国类别销量份额达到29.8%。",
          "PMI第三季度美国ZYN出货量同比增长4.2%至32亿袋；FDA于2026年分别对ZYN和VELO部分产品作出新的监管授权决定。",
          "帝国品牌2026年收购Black Buffalo及Helwit，并宣布2027财年实施15亿英镑股票回购。",
        ],
      },
      {
        type: "p",
        text: "2Firsts｜2026年11月12日",
      },
      {
        type: "p",
        text: "摩根大通（J.P. Morgan）恢复对三家跨国烟草公司的股票研究覆盖，给予英美烟草集团（British American Tobacco，BAT）“增持”（Overweight）评级，菲莫国际（Philip Morris International，PMI）和帝国品牌（Imperial Brands）均获“中性”（Neutral）评级。",
      },
      {
        type: "p",
        text: "摩根大通给予BAT的目标价为每股53英镑，PMI为200美元，帝国品牌为32英镑。该机构预计，2027年PMI可比销售额增长6.2%，高于BAT的3.9%，但BAT的2027年预期市盈率约为11倍，明显低于PMI的21倍。",
      },
      {
        type: "p",
        text: "摩根大通将美国尼古丁袋和电子烟市场的份额增长、现金流前景及估值差异列为看好BAT的重要依据。该机构同时提示，PMI在美国尼古丁袋市场面临竞争压力，其俄罗斯业务敞口也可能影响估值。",
      },
      {
        type: "h2",
        text: "BAT增长预测3.9%，预期市盈率仅为PMI约一半",
      },
      {
        type: "p",
        text: "摩根大通预计，BAT有望恢复每年3%至5%的固定汇率销售额增长，并预测其2027年可比销售额增长3.9%，调整后每股收益达到389便士，较市场一致预期高约1%。",
      },
      {
        type: "p",
        text: "PMI的2027年可比销售额增长预测为6.2%，略低于市场一致预期的6.5%，但仍明显高于BAT。",
      },
      {
        type: "p",
        text: "在估值方面，摩根大通预计BAT的2027年市盈率约为11倍，PMI约21倍，帝国品牌约8倍。该机构估计BAT自由现金流收益率约为9%，潜在总回报率达到14%或以上。",
      },
      {
        type: "p",
        text: "摩根大通同时预计，BAT净债务与EBITDA之比将在2026年底降至约2.4倍，处于公司设定的2至2.5倍目标区间。其股票回购规模预计从2026年的13亿英镑逐步增加至2030年的约20亿英镑。",
      },
      {
        type: "p",
        text: "对于PMI，摩根大通预计其杠杆水平到2026年底可能降至约2倍，为未来恢复股票回购创造条件。",
      },
      {
        type: "p",
        text: "三家公司中，帝国品牌的增长预期相对较低。摩根大通预计其2027年烟草及新型产品业务按固定汇率计算的销售额增长约1.9%。该指标与BAT、PMI的可比销售额增长预测采用不同统计口径。",
      },
      {
        type: "p",
        text: "摩根大通此次恢复覆盖，给予BAT的评级高于另外两家公司。相关预测及目标价属于证券研究判断，并非企业已实现的经营结果。",
      },
      {
        type: "h2",
        text: "BAT美国口含尼古丁收入增长220%，VELO份额接近30%",
      },
      {
        type: "p",
        text: "美国现代口含尼古丁市场是摩根大通看好BAT的重要依据。",
      },
      {
        type: "p",
        text: "根据BAT于2026年7月30日公布的半年报，2026年上半年集团现代口含尼古丁业务收入按固定汇率计算增长65.9%，销量增长57.5%。",
      },
      {
        type: "p",
        text: "其中，美国现代口含尼古丁业务收入按固定汇率增长220%，按报告汇率增长209%，销量增长188%。BAT表示，增长由VELO Plus和Grizzly Modern Oral共同推动。",
      },
    ],
  },
  {
    id: "2f-36849",
    category: "行业观点",
    sourceChannel: "COMPANY",
    sourcePath: "/news/list/company",
    title: "菲莫国际拟再投7100万美元扩建菲律宾无烟产品工厂：BLENDS烟支已投产，基地产品出口18个市场",
    enTitle:
      "PMI Plans $71 Million Philippine Smoke-Free Expansion: BLENDS Production Established, Batangas Plant Exports to 18 Markets",
    summary:
      "菲莫国际（Philip Morris International，PMI）计划追加约45亿菲律宾比索（约7100万美元），扩建其位于菲律宾八打雁省塔瑙安市的现有无烟产品制造设施，扩建预计于2027年完成，新增产能将供应菲律宾本土及海外市场。PMI于2024年4月启用当地加热烟草烟支制造设施，生产用于BONDS by IQOS设备的BLENDS烟支。菲律宾媒体此前报道，该基地产品已出口至亚洲和欧洲18个市场。PMI称，自2010年以来已在菲律宾累计投资超过20亿美元。此次扩产延续了菲律宾在PMI国际制造及供应链网络中的生产和出口职能。",
    imageUrl: "https://static.2firsts.com/uploads/20261116/195c1a481fb2d1f1cb465e177a9f68fa.png",
    publishedAt: "2026-11-16",
    shortDate: "11月16日",
    fullDate: "2026年11月16日",
    timestamp: 1794825991,
    views: 75,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/pmi-plans-71-million-philippine-smoke-free-expansion-blends-production-established-batangas-plant-exports-to-18-markets",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "PMI计划追加约45亿菲律宾比索（约7100万美元），扩建菲律宾八打雁省现有无烟产品制造设施，预计2027年完成。",
          "该制造基地于2024年4月启用加热烟草烟支生产设施，已确认生产BONDS by IQOS配套的BLENDS烟支。",
          "八打雁工厂产品已出口至亚洲和欧洲18个市场，但公司未披露这些市场对应的完整产品清单。",
          "PMI称自2010年以来在菲律宾累计投资超过20亿美元，当地关联企业PMFTC拥有逾5000名员工。",
          "PMI尚未公布此次扩建的新增产量、生产线数量及不同出口市场的产能分配。",
        ],
      },
      {
        type: "p",
        text: "菲莫国际（Philip Morris International，PMI）计划追加约45亿菲律宾比索（约7100万美元），扩建其位于菲律宾八打雁省塔瑙安市（Tanauan, Batangas）的现有无烟产品制造设施，扩建预计于2027年完成，新增产能将同时面向菲律宾本土及出口市场。",
      },
      {
        type: "p",
        text: "PMI东亚、东南亚、太平洋及全球旅游零售业务区域总裁Vassilis Gkatzelis于11月10日在马尼拉举行的Technovation活动期间介绍了上述计划。",
      },
      {
        type: "p",
        text: "此次扩产依托PMI已在菲律宾建立的加热烟草生产及国际供货业务。2024年投产的八打雁工厂已生产BONDS by IQOS配套的BLENDS烟支，工厂产品目前已出口至亚洲和欧洲18个市场。",
      },
      {
        type: "h2",
        text: "八打雁工厂拟追加45亿比索投资，扩建预计2027年完成",
      },
      {
        type: "p",
        text: "据菲律宾媒体报道，PMI将通过当地关联企业PMFTC Inc.扩充八打雁现有无烟产品制造能力，预计新增投资约45亿比索。",
      },
      {
        type: "p",
        text: "新增产能将满足菲律宾国内需求，并支持产品向海外市场供货。",
      },
      {
        type: "p",
        text: "Gkatzelis表示，菲律宾同时承担PMI本土市场、制造及出口业务职能。公司在规划生产和库存时，会考虑供应链中断、天气变化和地缘政治等风险。",
      },
      {
        type: "p",
        text: "PMI尚未公布此次扩产的新增生产线数量、预计年产量、设备供应商及具体投产安排，也未披露45亿比索在不同项目之间的分配。",
      },
      {
        type: "p",
        text: "公司表示，自2010年以来已在菲律宾累计投资超过20亿美元，涉及制造、无烟产品及数字化业务。",
      },
      {
        type: "h2",
        text: "2024年投产BLENDS烟支，工厂产品已出口18个市场",
      },
      {
        type: "p",
        text: "PMI与其菲律宾关联企业PMFTC于2024年4月15日在八打雁省塔瑙安市启用无烟产品制造设施。",
      },
      {
        type: "p",
        text: "菲律宾农业部当时确认，新生产线将制造专门用于无烟产品的加热烟草烟支。当地媒体进一步报道，该生产设施制造用于BONDS by IQOS设备的BLENDS烟支。",
      },
      {
        type: "p",
        text: "BONDS是PMI经营的加热烟草产品平台，使用BLENDS消耗品；IQOS ILUMA则使用TEREA烟支，两者分别拥有各自的产品体系。",
      },
      {
        type: "p",
        text: "2026年10月，菲律宾商业媒体Context.ph报道，PMI八打雁无烟产品工厂已向亚洲和欧洲18个市场出口产品。",
      },
      {
        type: "p",
        text: "该报道未列明18个市场的全部名称，也未确认出口产品是否全部为BLENDS烟支。",
      },
      {
        type: "p",
        text: "PMFTC首席财务官Dominique Thollon此前在菲律宾Arangkada商业论坛表示，公司计划继续在当地投资，但菲律宾在与其他亚洲制造基地竞争时面临行政程序、监管确定性和基础设施方面的挑战。",
      },
    ],
  },
  {
    id: "2f-36841",
    category: "行业观点",
    sourceChannel: "COMPANY",
    sourcePath: "/news/list/company",
    title: "AIR第三季度营收增长11%，新型产品业务前九个月收入仅210万美元；美国电子烟布局等待FDA审查",
    enTitle:
      "AIR Q3 Sales Rise 11%, but New Products Generate Just $2.1 Million in Nine Months as U.S. Vape Push Awaits FDA Review",
    summary:
      "全球水烟烟膏及新型尼古丁产品企业AIR Global PLC（NASDAQ：AIIR）公布2026年第三季度业绩，收入同比增长11.1%至9,980万美元，调整后EBITDA增长7.7%至3,090万美元。前九个月收入增长6.0%至3.067亿美元，但受上市相关费用等因素影响，录得7,420万美元净亏损。公司新增长品类（NGC）前九个月收入仅210万美元，调整后EBITDA亏损1,080万美元。AIR维持2026年收入增长4%—6%的指引，同时下调资本开支预算，并将年底预期净杠杆率从2.1倍上调至2.5倍。公司已为Crown Switch电子烟提交美国PMTA，未来新业务收入及盈利贡献仍取决于监管审查和商业化进展。",
    imageUrl: "https://static.2firsts.com/uploads/20261113/f18b95b9ada8b66d52d4fc0258965efb.png",
    publishedAt: "2026-11-13",
    shortDate: "11月13日",
    fullDate: "2026年11月13日",
    timestamp: 1794559960,
    views: 170,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/air-q3-sales-rise-11-but-new-products-generate-just-21-million-in-nine-months-as-us-vape-push-awaits-fda-review",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "季度业绩： 第三季度收入同比增长11.1%至9,980万美元，调整后EBITDA增长7.7%至3,090万美元，净利润增长13.8%至760万美元。",
          "前九个月业绩： 收入达3.067亿美元，同比增长6.0%；受上市相关费用等因素影响，由上年同期净盈利3,870万美元转为净亏损7,420万美元。",
          "新增长品类： 前九个月收入210万美元，同比下降2.6%；调整后EBITDA亏损1,080万美元，较上年同期1,320万美元亏损收窄。",
          "经营区域： 第三季度美洲水烟业务收入增长25.6%，中东、非洲及亚洲增长9.4%，欧洲增长4.9%。",
          "资本与业务展望： 维持全年收入增长4%—6%的指引，下调2026年资本开支预期，并将年底预期净杠杆率上调至约2.5倍；Crown Switch美国PMTA已提交，尚未取得营销授权。",
        ],
      },
      {
        type: "p",
        text: "以Al Fakher品牌水烟烟膏为核心业务的AIR Global PLC（NASDAQ：AIIR，以下简称“AIR”）于11月12日公布2026年第三季度及前九个月业绩。公司第三季度营收同比增长11.1%至9,980万美元，调整后息税折旧摊销前利润（Adjusted EBITDA）同比增长7.7%至3,090万美元，主要受水烟烟膏业务出货恢复及价格、产品组合改善推动。",
      },
      {
        type: "p",
        text: "2026年前九个月，AIR营收同比增长6.0%至3.067亿美元，但受上市及业务合并相关费用等因素影响，由上年同期净盈利3,870万美元转为净亏损7,420万美元。",
      },
      {
        type: "p",
        text: "与此同时，公司正在发展的电子烟、尼古丁袋及其他吸入产品业务仍处于投入阶段。新增长品类（New Growth Categories，NGC）前九个月收入为210万美元，调整后EBITDA亏损1,080万美元。",
      },
      {
        type: "p",
        text: "AIR维持2026年营收增长4%—6%的全年指引，但将资本开支预期下调至1,100万—1,400万美元，并把年底预期净债务与调整后EBITDA之比从此前约2.1倍上调至约2.5倍。",
      },
      {
        type: "h2",
        text: "第三季度收入增长11.1%，前九个月净亏损7,420万美元",
      },
      {
        type: "p",
        text: "AIR第三季度收入从2025年同期的8,980万美元增长至9,980万美元。",
      },
      {
        type: "p",
        text: "公司表示，调味水烟烟膏（Flavored Shisha Molasses，FSM）出货量同比增长5.8%，价格及产品组合变化带来约5.0%的正向贡献，推动季度收入增长。",
      },
      {
        type: "p",
        text: "第三季度毛利润同比增长9.8%至5,320万美元，但毛利率从54.0%降至53.3%。",
      },
      {
        type: "p",
        text: "销售成本同比增长12.7%至4,660万美元，AIR将其归因于物流、原材料及制造网络调整成本增加。",
      },
      {
        type: "p",
        text: "同期净利润同比增长13.8%至760万美元，调整后EBITDA增长7.7%至3,090万美元，调整后EBITDA利润率从31.9%降至31.0%。",
      },
      {
        type: "p",
        text: "前九个月，AIR收入达到3.067亿美元，同比增长6.0%，但FSM出货量同比下降4.6%。价格和产品组合带来11.1%的正向贡献，抵消了销量下降的影响。",
      },
      {
        type: "p",
        text: "公司前九个月毛利润同比增长4.6%至1.70亿美元，毛利率从56.2%降至55.4%。",
      },
      {
        type: "p",
        text: "按照国际财务报告准则（IFRS），AIR前九个月净亏损7,420万美元，上年同期为净盈利3,870万美元。同期调整后EBITDA增长2.3%至1.027亿美元。",
      },
      {
        type: "p",
        text: "AIR披露，前九个月业绩受到多项上市及业务合并相关费用影响。其中，业务合并交易产生约4,770万美元相关费用，公司另确认约4,820万美元与业务合并时发行权益工具有关的非现金会计费用。",
      },
      {
        type: "p",
        text: "同期，调整后EBITDA调节表还列示约1,410万美元股份支付费用、1,050万美元上市公司准备费用、430万美元地区供应链中断相关异常成本，以及约340万美元美国PMTA申请相关监管费用。",
      },
      {
        type: "p",
        text: "这些项目在财务报表及非IFRS指标调节表中分别列示，不同于直接的现金支出汇总。",
      },
    ],
  },
  {
    id: "2f-36821",
    category: "行业观点",
    sourceChannel: "COMPANY",
    sourcePath: "/news/list/company",
    title:
      "电子烟制造商Ispire扩大马来西亚制造业务、洽谈东南亚OEM合作：季度营收2750万美元，同步发展尼古丁袋及美国年龄验证技术",
    enTitle:
      "Vape Manufacturer Ispire Expands Malaysia Operations, Negotiates Southeast Asia OEM Deal as Nicotine Pouch and US Age-Gating Businesses Develop",
    summary:
      "美国上市电子烟技术及制造企业Ispire Technology于2026年11月9日公布2027财年第一季度业绩，季度营收2750万美元，同比下降9.3%，环比增长3.2%；毛利率回升至16.2%，净亏损640万美元，高于上年同期的330万美元。公司表示，欧洲电子烟监管变化及经销商订单减少影响销售，正扩大马来西亚制造业务，并与一家东南亚电子烟品牌洽谈OEM/ODM合作，预计2027年1月公布结果。公司估计，马来西亚制造的产品出口美国，相较中国制造具有约25%的关税优势。不过，Ispire仍向董事长控制的深圳易佳特科技有限公司采购产品，截至9月底有5200万美元非流动关联方应付款。此外，公司通过与中国金城医药相关方合作设立的金霧健康有限公司发展尼古丁袋业务，并持有美国年龄验证技术企业Ike Tech Inc. 40%股权。相关FDA申请仍在审查中。",
    imageUrl: "https://static.2firsts.com/uploads/20261111/9c57a1b576ed6b2c3ed3c5e4bbd4c3bd.png",
    publishedAt: "2026-11-11",
    shortDate: "11月11日",
    fullDate: "2026年11月11日",
    timestamp: 1794377966,
    views: 265,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/vape-manufacturer-ispire-expands-malaysia-operations-negotiates-southeast-asia-oem-deal-as-nicotine-pouch-and-us-age-gating-businesses-develop",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "Ispire 2027财年第一季度营收2750万美元，同比下降9.3%；净亏损640万美元，高于上年同期的330万美元，毛利率环比回升至16.2%。",
          "公司扩大马来西亚电子烟及尼古丁袋制造业务，称对美出口具有约25%的关税优势；东南亚OEM/ODM合作尚未签约。",
          "Ispire本季度向董事长控制的深圳易佳特采购约1913万美元产品，截至9月底仍有5200万美元非流动关联方应付款。",
          "Ispire通过旗下香港公司持有金霧健康有限公司49%股权，与金城医药相关方合作发展尼古丁袋业务，目前财务贡献较小。",
          "Ispire持有Ike Tech Inc. 40%股权，计划与Charlie's Holdings开展PACHA电子烟年龄验证试点；相关PMTA仍未获得FDA营销授权。",
        ],
      },
      {
        type: "p",
        text: "美国上市电子烟技术及制造企业Ispire Technology Inc.（纳斯达克代码：ISPR）11月9日公布，截至2026年9月30日的2027财年第一季度营收为2750万美元，同比下降9.3%，净亏损扩大至640万美元。公司表示，欧洲电子烟监管变化导致经销商采购减少，正扩大马来西亚制造业务，并寻求通过东南亚OEM/ODM合作、尼古丁袋及美国年龄验证技术拓展业务。",
      },
      {
        type: "p",
        text: "Ispire表示，马来西亚制造的电子烟产品出口美国，相较中国制造具有约25%的关税优势。公司正与一家东南亚电子烟品牌洽谈OEM/ODM合作，预计2027年1月公布结果。",
      },
      {
        type: "p",
        text: "与此同时，Ispire仍依赖董事长控制的中国关联方制造商。其最新美国证券交易委员会（SEC）文件显示，截至9月30日，公司对深圳易佳特科技有限公司（Shenzhen Yi Jia Technology Co., Ltd.，以下简称“深圳易佳特”）仍有5200万美元非流动关联方应付款，以及约2305万美元流动应付账款。",
      },
      {
        type: "h2",
        text: "Ispire营收同比下降9.3%，净亏损扩大至640万美元",
      },
      {
        type: "p",
        text: "Ispire 2027财年第一季度营收2750万美元，低于上年同期的3040万美元，但较2026财年第四季度的2670万美元增长3.2%。",
      },
      {
        type: "p",
        text: "公司首席财务官Jie Yu在11月9日业绩电话会上表示，同比营收下降主要来自欧洲市场。",
      },
      {
        type: "p",
        text: "部分欧洲国家实施一次性电子烟禁令及调整电子烟消费税后，经销商减少采购或推迟订单，并更加谨慎地管理库存。",
      },
      {
        type: "p",
        text: "公司还表示，产品价格竞争影响了毛利率表现。",
      },
      {
        type: "p",
        text: "季度主要财务数据如下：",
      },
      {
        type: "p",
        text: "Ispire表示，上一季度毛利率受到库存减值及产品退货相关费用影响，因此本季度毛利率环比明显回升。",
      },
      {
        type: "p",
        text: "不过，与上年同期相比，公司营收和毛利润均下降，净亏损扩大。",
      },
      {
        type: "p",
        text: "本季度经营费用约1060万美元，同比增长35.2%，主要受信用损失费用上升影响。剔除信用损失费用后，经营费用约590万美元，同比下降3.7%。",
      },
      {
        type: "p",
        text: "公司本季度计提信用损失费用约480万美元，高于上年同期的180万美元。",
      },
      {
        type: "p",
        text: "截至9月30日，Ispire净应收账款约1349万美元，较2025财年的峰值下降约80%。公司将这一变化归因于货款回收、信用损失准备增加，以及客户信用和付款条件调整。",
      },
      {
        type: "p",
        text: "财务状况方面，截至9月底，Ispire总资产约5282万美元，总负债约8767万美元，股东权益为负3485万美元。",
      },
      {
        type: "p",
        text: "同期流动资产约3425万美元，流动负债约3383万美元，营运资金约42万美元，低于6月底的约80万美元。",
      },
    ],
  },
  {
    id: "2f-36807",
    category: "科学研究",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title: "欧盟委员会向2Firsts确认：拟议心血管健康检查涵盖电子烟及无烟尼古丁产品使用",
    enTitle:
      "EU Commission Clarifies Vaping, Smokeless Nicotine Use in Proposed Cardiovascular Checks",
    summary:
      "欧盟委员会向2Firsts确认，拟议的心血管健康检查将吸烟、电子烟及无烟尼古丁产品使用纳入患者病史评估，成员国可根据医疗体系增加检查项目。欧委会同时指出，JRC针对电子烟、加热烟草和尼古丁袋的研究已用于欧盟烟草立法评估。",
    imageUrl: "https://static.2firsts.com/uploads/20261109/b3cdff5ada40c6e88607b78d6ced18b9.png",
    publishedAt: "2026-11-09",
    shortDate: "11月09日",
    fullDate: "2026年11月9日",
    timestamp: 1794189118,
    views: 298,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/eu-commission-clarifies-vaping-smokeless-nicotine-use-in-proposed-cardiovascular-checks",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "p",
        text: "封面图：欧盟委员会关于心血管健康检查的《理事会建议》提案文件截图。｜来源：欧盟委员会 / EUR-Lex",
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "p",
        text: "欧盟确认： 欧盟委员会向2Firsts表示，拟议的心血管健康检查将把吸烟、电子烟使用及无烟尼古丁产品使用纳入患者病史评估。",
      },
      {
        type: "p",
        text: "成员国空间： 提案在欧盟层面列出关键指标，同时成员国可根据本国医疗体系及患者病史安排进一步检查。",
      },
      {
        type: "p",
        text: "烟草立法评估： 欧委会同时提及JRC针对电子烟、加热烟草产品和尼古丁袋的研究，并表示该研究已用于欧盟烟草立法评估。",
      },
      {
        type: "p",
        text: "欧盟委员会在回复2Firsts问询时澄清，其拟议的心血管健康检查将吸烟、电子烟使用以及无烟尼古丁产品使用纳入患者病史评估范围。",
      },
      {
        type: "p",
        text: "此前，欧盟委员会发布的配套问答在介绍35至64岁成年人健康检查时，仅笼统提及评估“生活方式因素”（lifestyle factors）。2Firsts随后就烟草及尼古丁产品是否包含在内向欧盟委员会寻求进一步澄清。",
      },
      {
        type: "p",
        text: "欧盟委员会在书面回复中指向拟议《理事会建议》及其附件。附件明确提出，心血管健康检查的病史评估应涵盖饮食、身体活动、呼吸功能、吸烟、电子烟使用、无烟尼古丁产品使用以及饮酒情况。",
      },
      {
        type: "h2",
        text: "成员国可根据医疗体系增加检查项目",
      },
      {
        type: "p",
        text: "欧盟委员会向2Firsts表示，该提案列出了应予考虑的关键指标，同时各成员国可根据本国医疗体系安排进一步的检查。",
      },
      {
        type: "p",
        text: "欧委会补充称，进一步评估还可能取决于患者个人的病史和健康状况。",
      },
      {
        type: "p",
        text: "该提案是欧盟 Safe Hearts Plan 的组成部分之一。该计划涵盖心血管疾病预防、早期发现和治疗，同时也将更新烟草控制法律框架列为旗舰行动之一。",
      },
      {
        type: "h2",
        text: "JRC新型产品研究已用于欧盟烟草立法评估",
      },
      {
        type: "p",
        text: "在同一份回复中，欧盟委员会还向2Firsts提供了其联合研究中心（JRC）一项有关电子烟、加热烟草产品和尼古丁袋的研究。",
      },
      {
        type: "p",
        text: "欧盟委员会表示，这项JRC研究已经用于欧盟烟草立法评估。研究内容包括上述三类产品相关的健康影响，以及与初次吸烟和戒烟有关的证据。",
      },
      {
        type: "p",
        text: "2Firsts将继续跟踪欧盟有关烟草和尼古丁产品的监管进展。",
      },
      {
        type: "p",
        text: "[card_095326_card]",
      },
      {
        type: "p",
        text: "[card_095358_card]",
      },
    ],
  },
  {
    id: "2f-36833",
    category: "科学研究",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title:
      "俄罗斯国家杜马通过烟草及尼古丁产品成分披露法案：部分有害成分信息不再受商业秘密保护，拟2027年生效",
    enTitle:
      "Russia's State Duma Passes Tobacco and Nicotine Ingredient Disclosure Bill, Targeting 2027 End to Trade-Secret Protection for Certain Harmful Ingredient Data",
    summary:
      "俄罗斯国家杜马于2026年11月11日以414票赞成、零票反对通过一项法律修正案，拟禁止企业将烟草及含尼古丁产品中特定有害成分的存在情况及种类数量信息列为商业秘密。相关成分包括可能增强尼古丁依赖，以及具有毒性、致癌性、致突变性或生殖毒性的物质，并涵盖在加热或阴燃过程中可能产生上述危害性质的成分。法案将修改俄罗斯第98-FZ号《商业秘密法》第5条，拟于2027年1月1日生效。该法案已完成国家杜马三读程序，仍需履行后续立法程序。",
    imageUrl: "https://static.2firsts.com/uploads/20261112/0c1cad983b997fbb6165d11cd785b0ce.png",
    publishedAt: "2026-11-12",
    shortDate: "11月12日",
    fullDate: "2026年11月12日",
    timestamp: 1794479003,
    views: 134,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/russias-state-duma-passes-tobacco-and-nicotine-ingredient-disclosure-bill-targeting-2027-end-to-trade-secret-protection-for-certain-harmful-ingredient-data",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "俄罗斯国家杜马11月11日以414票赞成、零票反对通过第1286415-8号法案，修改烟草及含尼古丁产品成分信息的商业秘密保护规定。",
          "特定有害成分的存在情况及种类数量信息，将被排除在商业秘密保护范围之外。",
          "法案涉及可能增强尼古丁依赖，以及具有毒性、致癌性、致突变性或生殖毒性的成分，包括加热或阴燃后可能产生相关危害性质的物质。",
          "法案拟于2027年1月1日生效，较原计划提前两个月，尚需完成后续立法程序。",
        ],
      },
      {
        type: "p",
        text: "俄罗斯国家杜马（State Duma）于11月11日通过一项法律修正案，拟禁止烟草及含尼古丁产品经营者将部分有害成分信息列为商业秘密。法案拟于2027年1月1日生效，涉及俄罗斯法律规定范围内的烟草制品及含尼古丁产品，包括相关电子烟产品。",
      },
      {
        type: "p",
        text: "根据国家杜马立法记录，第1286415-8号法案在三读表决中获得414票赞成、零票反对、零票弃权，另有36名议员未参加投票。",
      },
      {
        type: "p",
        text: "该法案拟修改俄罗斯2004年7月29日第98-FZ号《商业秘密法》第5条，将特定有害成分的存在情况及种类数量信息，纳入不得作为商业秘密保护的范围。",
      },
      {
        type: "p",
        text: "相关成分包括可能增强尼古丁依赖，以及具有毒性、致癌性、致突变性或生殖毒性的物质，也包括在加热或阴燃过程中可能产生上述危害性质的成分。",
      },
      {
        type: "h2",
        text: "国家杜马通过修正案，限制有害成分信息的商业秘密保护",
      },
      {
        type: "p",
        text: "第1286415-8号法案由俄罗斯联邦政府于2026年7月10日提交国家杜马，并于10月1日通过一读。",
      },
      {
        type: "p",
        text: "11月11日，国家杜马在二读和三读中通过法案，完成该院的立法审议程序。",
      },
      {
        type: "p",
        text: "俄罗斯《商业秘密法》第5条列明了不得作为商业秘密保护的信息类别。此次修正案拟将烟草及含尼古丁产品中特定有害成分的信息加入其中。",
      },
      {
        type: "p",
        text: "法案针对的成分包括可能增强尼古丁依赖，或产生毒性、致癌、致突变及生殖毒性作用的物质。对于加热或阴燃过程中可能获得上述危害性质的成分，相关信息也被纳入规定范围。",
      },
      {
        type: "p",
        text: "俄罗斯政府在提案说明中表示，现行商业秘密保护制度使部分与产品健康风险有关的成分资料无法向公众公开，限制了消费者获取相关信息。",
      },
      {
        type: "p",
        text: "国家杜马主席维亚切斯拉夫·沃洛金（Vyacheslav Volodin）在法案通过后表示，有关烟草及电子烟有害成分的信息不应受到商业秘密保护。",
      },
      {
        type: "p",
        text: "此次修正案针对的是特定成分是否存在及其种类数量等信息，而非要求企业公开所有产品配方、生产工艺或每种化学物质的具体浓度。",
      },
      {
        type: "h2",
        text: "拟于2027年1月生效，涉及烟草及尼古丁产品制造商信息保护",
      },
      {
        type: "p",
        text: "法案最初拟于2027年3月1日生效。在国家杜马审议过程中，实施日期被提前至2027年1月1日。",
      },
      {
        type: "p",
        text: "按照俄罗斯的立法程序，该法案在国家杜马通过后，仍需经过联邦委员会审议、总统签署及正式公布等程序。",
      },
      {
        type: "p",
        text: "法案涉及烟草制品及含尼古丁产品。对于电子烟及其他新型尼古丁产品制造商，修正案将改变符合规定的有害成分信息能否受到商业秘密保护的法律条件。",
      },
    ],
  },
  {
    id: "2f-36815",
    category: "科学研究",
    sourceChannel: "INTERVIEW",
    sourcePath: "/news/interview",
    title: "日本成瘾医学专家白坂知彦：减害治疗不一定以完全戒断为目标｜2Firsts专访",
    enTitle:
      "Japanese Addiction Psychiatrist Says Complete Abstinence Is Not Always the Goal of Harm Reduction | 2Firsts Interview",
    summary:
      "日本成瘾精神科医生白坂知彦在马尼拉接受2Firsts专访时表示，在减害治疗模式下，完全戒断并非始终是治疗目标，患者的生活质量和个人需求同样重要。他谈及日本加热烟草产品的转换趋势、精神疾病患者面临的戒烟困难，以及在菲律宾参与成瘾治疗项目的经验。他主张以支持而非惩罚帮助成瘾者，并质疑以恐惧为主的健康警示能否有效回应人们持续吸烟的原因。",
    imageUrl: "https://static.2firsts.com/uploads/20261110/6bc68c7db7a701a50800c0f97e48969a.png",
    publishedAt: "2026-11-10",
    shortDate: "11月10日",
    fullDate: "2026年11月10日",
    timestamp: 1794293279,
    views: 183,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/japanese-addiction-psychiatrist-says-complete-abstinence-is-not-always-the-goal-of-harm-reduction--2firsts-interview",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "p",
        text: "封面图：日本成瘾精神科医生、琴似白坂精神心理诊所院长白坂知彦（Tomohiro Shirasaka）博士出席2026年11月10日在菲律宾马尼拉举行的Technovation活动。（图：2Firsts摄）",
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "p",
        text: "● 减害治疗目标： 日本成瘾精神科医生白坂知彦认为，完全戒断并非始终是治疗目标，患者的生活质量和个人需求同样重要。",
      },
      {
        type: "p",
        text: "● 日本加热烟草转换： 白坂知彦认为，许多吸烟者正在尝试从传统卷烟转向加热烟草产品，但这一过程仍需要时间。",
      },
      {
        type: "p",
        text: "● 戒烟与精神健康： 对于患有精神疾病的吸烟者，优先治疗基础精神疾病，可能有助于他们进一步尝试戒烟。",
      },
      {
        type: "p",
        text: "● 支持而非惩罚： 结合菲律宾成瘾治疗项目经验，白坂知彦主张通过理解和支持帮助成瘾者，而非惩罚或排斥。",
      },
      {
        type: "p",
        text: "● 健康警示方式： 白坂知彦质疑以恐惧为主的图形健康警示，认为关注吸烟者心理需求的支持性信息可能更有效。",
      },
      {
        type: "p",
        text: "马尼拉，2026年11月10日",
      },
      {
        type: "p",
        text: "2026年11月10日，菲莫国际（Philip Morris International，PMI）在菲律宾马尼拉举办Technovation活动，围绕烟草减害、科学研究及无烟产品创新等议题展开讨论。",
      },
      {
        type: "p",
        text: "活动期间，2Firsts现场专访了日本成瘾精神科医生白坂知彦（Tomohiro Shirasaka）博士。他表示，在减害治疗模式下，完全戒断并不一定是治疗目标，改善患者的生活质量、理解其个人处境，同样是治疗中需要考虑的重要因素。",
      },
      {
        type: "p",
        text: "白坂知彦（Tomohiro Shirasaka）博士是日本精神科医生、成瘾医学专家，现任日本北海道札幌市琴似白坂精神心理诊所（Kotoni Shirasaka Mental Clinic）院长，并兼任北海道医疗大学及冈山大学兼职讲师。采访还涉及日本加热烟草产品的转换趋势、精神疾病患者的戒烟问题，以及他参与菲律宾成瘾治疗项目的经历。",
      },
      {
        type: "h2",
        text: "完全戒断并非减害治疗的必然目标",
      },
      {
        type: "p",
        text: "对于已经停止吸卷烟、但仍通过非燃烧产品继续使用尼古丁的人群，成瘾医学应如何评价这一结果？",
      },
      {
        type: "p",
        text: "白坂知彦表示，治疗目标需要考虑患者的具体情况。",
      },
      {
        type: "p",
        text: "“从我们的角度来看，在减害模式下，完全停止使用并不一定是治疗目标。”（“For us, under a harm-reduction approach, complete cessation is not necessarily the treatment goal.”）",
      },
      {
        type: "p",
        text: "他进一步表示：“最重要的是改善生活质量。”（“The most important thing is to improve quality of life.”）",
      },
      {
        type: "p",
        text: "在他看来，从减害治疗的角度出发，持续使用尼古丁不一定是首先需要解决的问题。改善患者的生活状况，有时可以比立即实现完全戒断更为优先。",
      },
      {
        type: "p",
        text: "白坂知彦介绍，在自己的临床实践中，他经常首先询问患者：“你希望自己成为什么样的人？”（“What do you want to be?”）",
      },
    ],
  },
  {
    id: "2f-36785",
    category: "科学研究",
    sourceChannel: "REGULATION",
    sourcePath: "/news/list/regulation",
    title: "韩国烟草五年计划未纳入6-甲基尼古丁，海关已加强进口监管，尼古丁类似物溶液进口量下降83%",
    enTitle:
      "South Korea's Tobacco Plan Excludes 6-Methyl Nicotine as Customs Tightens Import Controls and Analog Liquid Imports Fall 83%",
    summary:
      "韩国政府10月29日公布《烟草危害管理基本计划（2027—2031年）》，拟扩大电子烟及加热烟草有害成分检测，但6-甲基尼古丁等尼古丁类似物未被纳入。韩国4月24日已将合成尼古丁纳入烟草监管，6月抽检发现12款宣称无尼古丁的产品含6-甲基尼古丁。韩国海关9月数据显示，2026年前八个月尼古丁类似物溶液进口量从1—4月的12吨降至5—8月的2吨，降幅83.3%；截至9月20日，全年累计进口约15吨，其中99.99%来自中国。海关已加强进口成分检测及供应链文件审查，食品医药品安全处预计年内完成尼古丁类似物危害性研究。",
    imageUrl: "https://static.2firsts.com/uploads/20261104/f3b9956fb1f62612019006694c689a9a.png",
    publishedAt: "2026-11-04",
    shortDate: "11月04日",
    fullDate: "2026年11月4日",
    timestamp: 1793774256,
    views: 212,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/south-koreas-tobacco-plan-excludes-6-methyl-nicotine-as-customs-tightens-import-controls-and-analog-liquid-imports-fall-83",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "韩国公布首个2027—2031年烟草危害管理计划，拟将液态电子烟检测项目从20种增加至约30种，但6-甲基尼古丁等尼古丁类似物未纳入计划。",
          "韩国4月24日将合成尼古丁纳入烟草定义。6月对105款宣称无尼古丁的液态吸入产品开展调查，发现13款含尼古丁、12款含6-甲基尼古丁。",
          "韩国海关数据显示，2026年1—4月尼古丁类似物溶液进口量为12吨，5—8月降至2吨，下降83.3%；截至9月20日，全年累计进口约15吨，中国来源占99.99%。",
          "韩国海关已实施通关前成分检测和供应链文件审查，并调查涉嫌虚报成分及逃避烟草税的进口行为。食品医药品安全处预计2026年年底前完成尼古丁类似物危害性研究。",
        ],
      },
      {
        type: "p",
        text: "韩国保健福祉部（Ministry of Health and Welfare，MOHW）与食品医药品安全处（Ministry of Food and Drug Safety，MFDS）于10月29日公布首个《烟草危害管理基本计划（2027—2031年）》，拟扩大电子烟、加热烟草等产品的有害成分检测，并加强制造商和进口商的信息披露要求，但6-甲基尼古丁（6-methyl nicotine）等尼古丁类似物未被纳入计划。",
      },
      {
        type: "p",
        text: "此前，韩国已于4月24日将合成尼古丁纳入烟草监管，并在6月的产品抽检中发现12款宣称不含尼古丁的液态吸入产品含有6-甲基尼古丁。",
      },
      {
        type: "p",
        text: "韩国关税厅（Korea Customs Service，KCS）9月23日公布的数据显示，2026年1—4月尼古丁类似物溶液进口量为12吨，5—8月降至2吨，下降83.3%。海关已加强通关前成分检测、供应链文件审查及涉嫌逃税行为调查。",
      },
      {
        type: "p",
        text: "韩国食品医药品安全处表示，正在开展尼古丁类似物危害性研究，预计2026年年底前取得结果，并将与有关政府部门讨论后续管理措施。",
      },
      {
        type: "h2",
        text: "五年计划扩大电子烟检测，6-甲基尼古丁仍未纳入",
      },
      {
        type: "p",
        text: "韩国10月29日公布的《第一次烟草危害管理基本计划》是依据2025年11月实施的《烟草危害管理法》（Tobacco Harm Management Act）制定的首个五年规划。",
      },
      {
        type: "p",
        text: "计划覆盖2027年至2031年，主要涉及烟草有害成分检测、企业信息披露、分析技术开发及相关监管政策。",
      },
      {
        type: "p",
        text: "根据韩国政府公布的安排，传统卷烟和加热烟草的检测成分将从2025年的44种扩大至2030年的约50种；液态电子烟的检测成分则从20种增加至约30种。",
      },
      {
        type: "p",
        text: "此前未纳入检测范围的无烟烟草、雪茄和水烟等产品，也将逐步纳入管理。",
      },
      {
        type: "p",
        text: "制造商和进口商的信息披露要求将进一步扩大。除有害成分检测结果、原料及添加剂名称外，企业还需提交相关成分的使用目的。政府计划通过不定期现场检查核查提交资料的准确性。",
      },
      {
        type: "p",
        text: "对于新上市烟草产品，政府拟将检测申请期限从销售次年上半年缩短至上市后一个月内，最长提前约17个月。",
      },
      {
        type: "p",
        text: "韩国还计划研究薄荷、果味等添加剂的使用情况及潜在危害，并评估逐步限制特定成分的措施。目前尚未公布具体禁止成分清单或实施日期。",
      },
      {
        type: "p",
        text: "但这一监管计划仍未覆盖尼古丁类似物。",
      },
      {
        type: "p",
        text: "据韩国Newsis通讯社10月29日报道，食品医药品安全处官员解释称，《烟草危害管理法》的适用对象与《烟草事业法》（Tobacco Business Act）中的烟草定义相衔接，因此无尼古丁产品及尼古丁类似物产品不属于此次五年计划的管理范围。",
      },
      {
        type: "p",
        text: "韩国食品医药品安全处正在研究尼古丁类似物的毒性，预计2026年年底前取得研究结果，并将与财政、环境等相关部门讨论后续监管措施。",
      },
      {
        type: "h2",
        text: "合成尼古丁4月纳入监管，6月抽检发现12款产品含6-甲基尼古丁",
      },
    ],
  },
  {
    id: "2f-36751",
    category: "科学研究",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title:
      "KUMI SCENIC 50K采用尼古丁与6-甲基尼古丁双配方，6-MN版本进入美国多州目录，路易斯安那州标注FDA豁免",
    enTitle:
      "Product | KUMI SCENIC 50K Offers Nicotine and 6-Methyl Nicotine Versions as 6-MN Products Appear in Multiple U.S. State Directories, With Louisiana Listing FDA Exemption",
    summary:
      "2026年10月美国州级电子烟目录显示，KUMI 6 SCENIC 50K已进入路易斯安那州及内布拉斯加州目录，其中路易斯安那州将20条相关产品记录标注为“FDA EXEMPTION”（FDA豁免）。KUMI SCENIC系列同时提供传统尼古丁盐与6-甲基尼古丁（6-MN）配方版本，两者均标称22mL容量、最高50,000口。美国批发商2025年8月的记录显示，两款产品建议零售价均为19.99美元。6-MN版本还使用NoNic6及“Nicotine-Free”等相关商业表述。",
    imageUrl: "https://static.2firsts.com/uploads/20261027/c6d3eec0c71375bc64c298aa6f6814af.jpg",
    publishedAt: "2026-10-27",
    shortDate: "10月27日",
    fullDate: "2026年10月27日",
    timestamp: 1793067728,
    views: 464,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--kumi-scenic-50k-offers-nicotine-and-6-methyl-nicotine-versions-as-6-mn-products-appear-in-multiple-us-state-directories-with-louisiana-listing-fda-exemption",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "ul",
        items: [
          "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
          "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
          "未成年人严禁访问和阅读本文内容。",
        ],
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "ul",
        items: [
          "2Firsts核查的美国州目录显示，KUMI 6 SCENIC已进入路易斯安那州及内布拉斯加州，两州各有20条相关产品记录。",
          "路易斯安那州2026年10月目录将Blue Nine LLC名下20条KUMI SIX SCENIC记录列为“FDA EXEMPTION”，相关产品最早于2025年9月进入该州目录。",
          "KUMI SCENIC 50K提供传统5%尼古丁盐与NoNic6两种配方版本，均标称22mL烟油容量及最高50,000口。",
          "美国批发商Midwest Goods于2025年8月28日同时列出两款产品，建议零售价均为19.99美元。",
          "部分渠道以“Nicotine-Free”描述NoNic6版本，该名称用于区分传统尼古丁与6-甲基尼古丁等尼古丁类似物成分。",
        ],
      },
      {
        type: "p",
        text: "2Firsts核查美国州级电子烟产品目录发现，采用6-甲基尼古丁（6-methylnicotine，6-MN）相关配方的KUMI 6 SCENIC 50K，已进入路易斯安那州及内布拉斯加州目录。其中，路易斯安那州2026年10月目录将Blue Nine LLC申报的20条KUMI SIX SCENIC产品记录标注为“FDA EXEMPTION”（FDA豁免）。",
      },
      {
        type: "p",
        text: "KUMI SCENIC 50K系列另有传统尼古丁盐版本。两款产品均标称22mL烟油容量、最高50,000口。美国电子烟批发商Midwest Goods于2025年8月28日的库存记录已同时列出两种版本，建议零售价均为19.99美元。",
      },
      {
        type: "h2",
        text: "6-MN版SCENIC进入美国多州目录，路易斯安那州标注FDA豁免",
      },
      {
        type: "p",
        text: "根据2Firsts核查的州级电子烟产品目录，KUMI 6 SCENIC已进入路易斯安那州和内布拉斯加州，两州分别收录20条相关产品记录。",
      },
      {
        type: "p",
        text: "路易斯安那州2026年10月目录中，Blue Nine LLC名下20条KUMI SIX SCENIC记录被列为“FDA EXEMPTION”。该州目录还收录由VR Products I LLC申报的10条KUMI SCENIC记录，其标注为“UNDER REVIEW BY FDA”（FDA审查中）。",
      },
      {
        type: "p",
        text: "内布拉斯加州目录分别收录20条KUMI 6 SCENIC及20条传统KUMI SCENIC记录，登记主体均为VR Products I LLC。",
      },
      {
        type: "p",
        text: "路易斯安那州历史目录显示，Blue Nine LLC名下部分KUMI SIX SCENIC产品早在2025年9月5日就已列名。2026年10月最新目录继续显示相关产品及其FDA豁免分类。传统KUMI SCENIC的部分记录则于2026年6月进入该州目录。",
      },
      {
        type: "p",
        text: "美国多个州的电子烟产品目录与联邦上市前烟草产品申请（PMTA）制度相联系。部分目录的历史申请准入条件涉及2016年8月8日及2020年9月9日两个时间节点。",
      },
      {
        type: "p",
        text: "路易斯安那州另设特殊列名条款，允许主管机关在制造商提供符合条件的FDA正式豁免依据后，将相关产品纳入目录。该州使用的“FDA EXEMPTION”属于目录分类字段。",
      },
      {
        type: "p",
        text: "不同州的目录字段并不完全相同。路易斯安那州明确公开了KUMI SIX SCENIC的豁免分类，内布拉斯加州则提供了同系列产品在另一州列名的记录。两州还出现了部分相同产品UPC由不同企业登记的情况。",
      },
      {
        type: "h2",
        text: "22mL、50,000口同平台，提供传统尼古丁与NoNic6版本",
      },
      {
        type: "p",
        text: "KUMI SCENIC系列包含传统尼古丁盐版本KUMI SCENIC 50K，以及使用NoNic6配方的KUMI 6 SCENIC 50K。",
      },
      {
        type: "p",
        text: "根据KUMI官网，6 SCENIC采用可视化储液结构，由7mL预注液与15mL储液仓组成，总标称容量22mL。设备搭载850mAh可充电电池、数字显示屏、三重网状雾化芯及USB-C充电接口，品牌宣称最高可使用50,000口。",
      },
      {
        type: "p",
        text: "美国零售商Vape City USA将传统SCENIC标为5%尼古丁盐产品，将6 SCENIC列为5% SFN配方产品。该零售商介绍，两款产品采用相同硬件设计，并提供相近的口味组合。",
      },
    ],
  },
  {
    id: "2f-36589",
    category: "科学研究",
    sourceChannel: "INTERVIEW",
    sourcePath: "/news/interview",
    title: "尼古丁能被替代吗？6-甲基尼古丁相关产品已入市，关键人体证据仍缺位",
    enTitle:
      "Special Report | Can Nicotine Be Replaced? 6-MN Is Already on the Market While Key Human Evidence Is Still Missing",
    summary:
      "6-甲基尼古丁等类尼古丁物质已开始进入电子烟和口含袋市场，但关键人体证据仍然有限。最新Nixodine-S研究提供了新的非临床数据，显示其在细胞毒性和受体活性方面与尼古丁存在差异，而其他独立研究则呈现出更复杂的毒理学图景。随着相关供应链活动增长、FDA寻求更明确的监管权限，产业正面临一个更大的问题：类尼古丁物质需要建立怎样的证据，才能真正成为可信的尼古丁替代物？",
    imageUrl: "https://static.2firsts.com/uploads/20260923/e20449d091590edd536ec88425de6602.png",
    publishedAt: "2026-09-22",
    shortDate: "09月22日",
    fullDate: "2026年9月22日",
    timestamp: 1790113246,
    views: 648,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/special-report--can-nicotine-be-replaced-6-mn-is-already-on-the-market-while-key-human-evidence-is-still-missing",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "ul",
        items: [
          "新增非临床证据： 2026年发表于 Toxicology Reports 的研究显示，含(S)-6-甲基尼古丁的Nixodine-S在细胞毒性和受体激活方面与尼古丁呈现不同特征，但尚未证明其具有人体安全性、更低成瘾潜力或更低疾病风险。",
          "市场跑在人体证据前面： 含6-MN的电子烟和口含袋产品已经进入市场，但人体药代动力学、滥用潜力以及最终产品毒理学等关键证据仍然有限。",
          "科学图景尚未统一： 独立研究已经从细胞、电子烟液扩展到气溶胶和三维人体呼吸道模型，不同实验得出了不同毒理学结果，显示6-MN分子、配方原料与最终产品不能被视为同一研究对象。",
          "供应链开始增长： 2Firsts数据显示，2026年上半年，中国尼古丁替代产品相关海关类别全球出口额约8750万美元，同比增长65.2%；但该类别不能直接等同于6-MN出口。",
          "监管面临新考验： FDA正寻求获得对尼古丁类似物更明确的法定监管权限，而相关科学和产业讨论也开始聚焦成分身份、标签、非临床研究、人体证据和最终产品评价等要求。",
        ],
      },
      {
        type: "p",
        text: "一项关于 Nixodine-S的新研究，为一个正日益影响烟草和尼古丁产业的问题增加了新数据：尼古丁本身能否被替代？",
      },
      {
        type: "p",
        text: "这项研究于8月发表在 Toxicology Reports。Nixodine-S是一种含(S)-6-甲基尼古丁（(S)-6-methylnicotine，(S)-6-MN）的配方浓缩原料。研究发现，在一个体外细胞实验中，Nixodine-S在尼古丁已经表现出细胞毒性的测试条件下未诱发细胞毒性，同时，其在多种烟碱型乙酰胆碱受体（nicotinic acetylcholine receptors, nAChRs）上的激活特征也与尼古丁存在差异。",
      },
      {
        type: "p",
        text: "该研究没有开展人体试验，也没有证明Nixodine-S能够降低成瘾、疾病或其他长期健康风险。",
      },
      {
        type: "p",
        text: "与此同时，含6-甲基尼古丁（6-methylnicotine, 6-MN）的电子烟和口含袋产品已经出现在美国市场。6-MN属于尼古丁类似物（nicotine analogues，下文简称“类尼古丁物质”）。独立研究已经发现，部分在美销售产品的标签标示与实际检测到的类尼古丁成分之间存在明显差异。美国食品药品监督管理局（FDA）也已提出立法建议，希望国会赋予其对尼古丁类似物更明确的监管权限。",
      },
      {
        type: "p",
        text: "Bonguard Naturals联合创始人兼首席执行官、Nixodine-S论文共同作者Rick Avila认为，目前距离将这些物质真正视为尼古丁替代物，仍缺少关键证据。",
      },
      {
        type: "p",
        text: "Avila在接受2Firsts书面采访时表示：“在这些证据建立之前，所谓‘尼古丁替代物’仍然只是一个假设。”",
      },
      {
        type: "p",
        text: "“Until that exists, ‘alternative to nicotine’ is a hypothesis.”",
      },
      {
        type: "p",
        text: "他所指的证据包括人体药代动力学（pharmacokinetics, PK）、人体滥用潜力（abuse liability）以及最终产品研究。",
      },
      {
        type: "p",
        text: "多年来，烟草和尼古丁产品的创新更多集中在如何递送尼古丁——去除燃烧、开发加热和雾化技术、改变产品形态，或调整尼古丁配方。",
      },
      {
        type: "p",
        text: "类尼古丁物质带来另一条路径：改变具有药理活性的分子本身。",
      },
      {
        type: "p",
        text: "6-MN在化学结构上与尼古丁相似，其吡啶环6号位多了一个甲基。Nixodine-S则更加具体：它是一种含(S)-6-MN的配方浓缩原料，设计用于在电子烟或口含产品生产中按体积替代尼古丁。",
      },
      {
        type: "p",
        text: "因此，Nixodine-S并不等同于纯6-MN，其实验结果也不能直接套用于其他含6-MN的商业配方。",
      },
      {
        type: "p",
        text: "Nixodine-S的开发方式，是理解这项新研究的关键。",
      },
      {
        type: "p",
        text: "论文引用的历史烟草行业实验显示，在小鼠静脉注射急性毒性试验中，(S)-6-MN的急性毒性高于尼古丁。开发团队此前进行的专有大鼠研究也得出了类似结果。",
      },
      {
        type: "p",
        text: "研究人员据此调整了Nixodine-S中(S)-6-MN的浓度，而不是简单按照与尼古丁相同的浓度使用纯6-MN。",
      },
      {
        type: "p",
        text: "在BALB/c 3T3细胞进行的中性红摄取（Neutral Red Uptake, NRU）实验中，尼古丁表现出细胞毒性，半数抑制浓度（IC50）为961.8微克/毫升。在相对应的等体积测试浓度下，Nixodine-S未表现出细胞毒性。",
      },
    ],
  },
  {
    id: "2f-36837",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title: "AIR为Crown Switch提交美国PMTA：Greentank芯片雾化技术能否成为其合规与市场竞争筹码？",
    enTitle:
      "Product｜AIR Files U.S. PMTA for Crown Switch. Can Greentank's Chip Technology Deliver a Compliance and Competitive Advantage?",
    summary:
      "AIR Global PLC（NASDAQ：AIIR）于2026年11月5日宣布，已向美国食品药品监督管理局（FDA）提交Crown Switch可充电换弹式电子烟的上市前烟草产品申请（PMTA）。该产品于2025年11月在德国上市，采用加拿大雾化技术公司Greentank的Quantum Chip芯片式雾化系统。德国零售版本采用2mL预填充烟弹、18mg/mL尼古丁浓度，并提供六款口味。AIR为美国市场开发的测试版本采用5%尼古丁配方，公司此前披露了相关气溶胶测试结果。2026年7月，AIR向Greentank投资2,000万美元；截至9月底，公司还累计产生约341万美元与美国PMTA准备及提交有关的监管费用。Crown Switch已进入美国申请流程，但尚未获得FDA营销授权。",
    imageUrl: "https://static.2firsts.com/uploads/20261113/13af29a807798ed615dade0a65a982aa.jpeg",
    publishedAt: "2026-11-13",
    shortDate: "11月13日",
    fullDate: "2026年11月13日",
    timestamp: 1794548938,
    views: 222,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/air-files-us-pmta-for-crown-switch-can-greentanks-chip-technology-deliver-a-compliance-and-competitive-advantage",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "p",
        text: "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
      },
      {
        type: "p",
        text: "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
      },
      {
        type: "p",
        text: "未成年人严禁访问和阅读本文内容。",
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "ul",
        items: [
          "美国监管申请： AIR于11月5日宣布为Crown Switch提交PMTA，申请资料涉及雾化技术、气溶胶化学、毒理学、临床研究、消费者行为及制造质量控制。",
          "产品架构： Crown Switch采用Greentank的Quantum Chip芯片式雾化技术，搭配可充电主机及封闭式预填充烟弹。德国市场版本为每枚2mL、18mg/mL尼古丁浓度，提供六款口味。",
          "测试数据： AIR披露的美国市场测试项目涉及两款5%尼古丁配方，在4.5W和5.5W功率下检测特定有害及潜在有害成分。",
          "资金投入： AIR于2026年7月投资Greentank 2,000万美元，并在前三季度累计产生约341万美元的美国PMTA相关监管费用。FDA尚未授予Crown Switch营销授权。",
        ],
      },
      {
        type: "p",
        text: "根据AIR Global PLC（以下简称“AIR”）11月5日发布的公告及提交美国证券交易委员会（SEC）的文件，该公司已向美国食品药品监督管理局（FDA）提交Crown Switch可充电换弹式电子烟的上市前烟草产品申请（Premarket Tobacco Product Application，PMTA）。",
      },
      {
        type: "p",
        text: "Crown Switch于2025年11月在德国推出，采用加拿大雾化技术企业Greentank Innovations开发的Quantum Chip芯片式雾化技术。AIR于2026年7月向Greentank投资2,000万美元，并披露了Crown Switch美国测试版本的初步气溶胶研究结果。",
      },
      {
        type: "p",
        text: "11月12日，AIR在第三季度财报中进一步披露，公司2026年前九个月产生约341万美元与美国PMTA准备和提交有关的监管费用。此次申请涉及一款已在欧洲商业化、使用芯片式雾化系统的换弹产品，但美国市场具体申请SKU及未来上市时间尚未公布。",
      },
      {
        type: "h2",
        text: "Crown Switch提交美国PMTA，申请涵盖雾化系统、临床及消费者研究",
      },
      {
        type: "p",
        text: "AIR于11月5日宣布，已就Crown Switch可充电换弹平台向FDA提交PMTA。",
      },
      {
        type: "p",
        text: "公司表示，申请包含产品质量、制造控制、气溶胶化学、毒理学、临床及非临床研究，以及对整体人口健康影响的评估资料。",
      },
      {
        type: "p",
        text: "在临床及非临床研究方面，资料涉及尼古丁药代动力学、滥用责任（abuse liability）等评估。消费者研究则关注成年吸烟者对产品的认知、使用意愿及从可燃卷烟转换使用Crown Switch的可能性。",
      },
      {
        type: "p",
        text: "AIR首席执行官斯图尔特·布拉齐尔（Stuart Brazier）表示，公司希望通过这项申请进入美国受监管的电子烟市场。",
      },
      {
        type: "p",
        text: "公司还介绍，Crown Switch烟弹采用旨在减少漏液及防止重复灌装的封闭结构，产品包装具有儿童防护设计，电池经过相关安全标准测试。上述设计特征已纳入AIR披露的产品及申请资料，但其实际监管评价仍由FDA决定。",
      },
      {
        type: "p",
        text: "截至2026年11月13日，公司公开确认的是已提交PMTA，尚未公布FDA正式接受申请、完成立卷审查或授予营销授权的结果。",
      },
      {
        type: "h2",
        text: "Quantum Chip芯片式雾化系统：德国版采用2mL烟弹、18mg/mL尼古丁浓度",
      },
      {
        type: "p",
        text: "Crown Switch于2025年11月19日在德国上市，是AIR旗下Al Fakher品牌推出的可充电换弹式电子烟平台。",
      },
    ],
  },
  {
    id: "2f-36805",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title:
      "在IQOS ILUMA之外，菲莫国际扩张低价加热烟草平台BONDS：三季度新增7个市场，日本扩区、欧洲及北非相继上市",
    enTitle:
      "Beyond IQOS ILUMA, PMI Expands Lower-Priced BONDS Heated Tobacco Platform: Seven Markets Added in Q3, With Rollouts in Japan, Europe and North Africa",
    summary:
      "菲莫国际（PMI）正在扩大旗下BONDS by IQOS加热烟草平台的国际市场布局。公司2026年第三季度SEC文件显示，BONDS设备及BLENDS烟草棒的在售市场从6月底的8个增至9月底的15个。11月，日本宣布将销售区域从3县扩大至17府县，西班牙和摩洛哥也相继推出BONDS。该平台采用独立于IQOS ILUMA的ROUNDHEAT外部加热技术，设备售价较低。日本市场BONDS设备为2,980日元，比ILUMA i ONE低约25%；BLENDS烟草棒每包570日元。PMI管理层表示，BONDS主要面向尚未转用加热烟草产品的传统卷烟用户。公司目前尚未单独披露该平台的销量和收入。",
    imageUrl: "https://static.2firsts.com/uploads/20261106/5f66feae14e8732918f11547ace7eda7.jpg",
    publishedAt: "2026-11-06",
    shortDate: "11月06日",
    fullDate: "2026年11月6日",
    timestamp: 1793970168,
    views: 332,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/beyond-iqos-iluma-pmi-expands-lower-priced-bonds-heated-tobacco-platform-seven-markets-added-in-q3-with-rollouts-in-japan-europe-and-north-africa",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "PMI向美国SEC提交的文件确认，截至2026年9月底，BONDS及BLENDS已在15个市场销售，较6月底的8个增加7个市场。",
          "日本计划于11月9日将BONDS销售范围从3县扩大至17府县，11月18日起开放指定地区线上销售；西班牙和摩洛哥11月初相继上市。",
          "BONDS在日本的标准设备售价为2,980日元，比IQOS ILUMA i ONE低约25%；BLENDS烟草棒每包570日元，处于当地加热烟草产品的较低价格区间。",
          "BONDS采用ROUNDHEAT外部加热技术及专用烟草棒。部分市场已销售采用新外观及较高续航规格的BONDS 2设备。",
          "PMI管理层将BONDS定位于尚未采用加热烟草产品的卷烟消费者；菲律宾、印尼和马来西亚的产品与渠道安排呈现不同发展路径。",
        ],
      },
      {
        type: "p",
        text: "菲莫国际（Philip Morris International，PMI）正在扩大旗下BONDS by IQOS加热烟草平台的国际销售。公司向美国证券交易委员会（SEC）提交的2026年第三季度报告显示，BONDS设备及BLENDS烟草棒截至9月底已在15个市场销售，较6月底的8个增加7个。进入11月，PMI又宣布扩大日本销售区域，并在西班牙和摩洛哥推出BONDS产品。",
      },
      {
        type: "p",
        text: "PMI管理层在10月21日业绩电话会上表示，BONDS旨在吸引尚未采用加热烟草产品的传统卷烟消费者。该平台采用独立于IQOS ILUMA的ROUNDHEAT外部加热技术，设备售价也相对较低。",
      },
      {
        type: "p",
        text: "根据菲莫日本公司（Philip Morris Japan，PMJ）11月5日的公告，BONDS设备及专用BLENDS烟草棒计划于11月9日起从日本九州3县扩展至17府县销售，11月18日起还将面向指定地区居民开放官方线上购买渠道。",
      },
      {
        type: "h2",
        text: "三季度新增7个市场，日本扩大至17府县，西班牙和摩洛哥相继上市",
      },
      {
        type: "p",
        text: "BONDS于2022年11月在菲律宾首次公开推出，随后进入哥伦比亚等市场。",
      },
      {
        type: "p",
        text: "2026年，PMI扩大了该平台的国际销售范围。公司第二季度Form 10-Q显示，截至6月30日，BONDS设备及BLENDS烟草棒已在8个市场销售；第三季度报告披露，截至9月30日，这一数字增至15个。",
      },
      {
        type: "p",
        text: "两份文件采用相同的产品及市场统计口径。PMI未在相关段落中列出全部市场名单，也未披露各国BONDS设备销量。",
      },
      {
        type: "p",
        text: "日本于2026年7月6日在福冈、佐贺和长崎3县开始有限销售BONDS。根据11月5日公告，销售地区将从11月9日起新增大阪府、中国地方5县、四国4县及九州其他4县，扩大至17府县。",
      },
      {
        type: "p",
        text: "PMI日本公司还计划于11月18日启动官方网上商店销售，购买资格限定于指定销售地区的居民。BONDS目前尚未宣布在日本全国上市。",
      },
      {
        type: "p",
        text: "欧洲方面，PMI于11月3日在西班牙埃斯特雷马杜拉自治区推出BONDS。当地媒体Cadena SER报道，该地区也是PMI在西班牙的烟叶采购区域。",
      },
      {
        type: "p",
        text: "根据公司提供的数据，过去十年PMI在当地采购烟叶累计支出约2.3亿欧元。部分当地烟叶已获得用于PMI相关加热烟草产品的认证，但现有资料没有确认此次上市的BLENDS烟草棒是否使用埃斯特雷马杜拉烟叶。",
      },
      {
        type: "p",
        text: "摩洛哥方面，PMI于11月4日在卡萨布兰卡举行BONDS上市发布活动。当地媒体Le Desk报道，设备发布时售价为200摩洛哥迪拉姆，BLENDS烟草棒每包28迪拉姆。",
      },
      {
        type: "p",
        text: "此前，BONDS已于9月进入科威特市场。马来西亚IQOS官网则于10月开始实施涉及BONDS 2设备的注册、首次购买及推荐奖励活动。",
      },
      {
        type: "p",
        text: "各国采取了不同的市场进入方式。日本先在九州3县试销，再分阶段扩大区域；西班牙首先进入埃斯特雷马杜拉，摩洛哥从卡萨布兰卡展开销售，马来西亚则结合授权零售渠道及用户激励活动推进业务。",
      },
      {
        type: "p",
        text: "截至11月6日，PMI尚未披露包含11月新上市市场的最新全球在售市场总数。",
      },
      {
        type: "h2",
        text: "低价设备与独立烟草棒：BONDS在IQOS ILUMA之外建立另一套加热平台",
      },
    ],
  },
  {
    id: "2f-36787",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title:
      "日本烟草旗下尼古丁袋品牌Nordic Spirit在日本扩至8款：蜜瓜新品上市，三款薄荷产品扩大线下销售",
    enTitle:
      "Product | Japan Tobacco Expands Nordic Spirit Nicotine Pouch Range to Eight SKUs in Japan, Launches Melon Variant and Broadens Mint Retail Distribution",
    summary:
      "日本烟草产业株式会社（JT）于2026年11月2日在日本部分烟草零售店推出Nordic Spirit Rich Melon Medium，并将此前通过CLUB JT网上商店销售的三款薄荷产品扩展至实体零售。此次新增蜜瓜产品使Nordic Spirit日本产品线增至8款。四款产品均为瑞典制造，每罐标准14袋，含税售价500日元。自3月进入日本市场以来，JT已先后通过品牌电商、便利店及烟草零售店扩展Nordic Spirit的产品组合和销售渠道。",
    imageUrl: "https://static.2firsts.com/uploads/20261104/e8f2fd43c38e83d8edaf3a166be78c63.png",
    publishedAt: "2026-11-04",
    shortDate: "11月04日",
    fullDate: "2026年11月4日",
    timestamp: 1793779557,
    views: 235,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--japan-tobacco-expands-nordic-spirit-nicotine-pouch-range-to-eight-skus-in-japan-launches-melon-variant-and-broadens-mint-retail-distribution",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "p",
        text: "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
      },
      {
        type: "p",
        text: "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
      },
      {
        type: "p",
        text: "未成年人严禁访问和阅读本文内容。",
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "p",
        text: "JT于2026年11月2日推出Nordic Spirit Rich Melon Medium，使该品牌在日本公布的产品组合由7款增加至8款。",
      },
      {
        type: "p",
        text: "Rich Melon Medium及另外三款薄荷产品均采用每罐标准14袋的包装，含税售价500日元，强度覆盖Medium、Strong和X-Strong。",
      },
      {
        type: "p",
        text: "Sweet Mint Medium、Sweet Mint Strong及Cool Mint X-Strong已于10月6日在CLUB JT网上商店上市，本次新增部分实体烟草零售店渠道。",
      },
      {
        type: "p",
        text: "Nordic Spirit于3月进入日本市场，7月推出两款新产品，10月新增三款薄荷产品，11月继续扩充口味与零售覆盖。",
      },
      {
        type: "p",
        text: "该品牌采用植物来源纤维基底和烟草来源尼古丁，JT将其归类为现代口含烟草产品（Modern Oral）。",
      },
      {
        type: "p",
        text: "根据日本烟草产业株式会社（Japan Tobacco Inc.，JT）2026年10月19日发布的公告，旗下Nordic Spirit于11月2日起在日本部分烟草零售店销售Rich Melon Medium新品，并将此前已通过CLUB JT网上商店销售的Sweet Mint Medium、Sweet Mint Strong和Cool Mint X-Strong三款产品扩展至实体零售。",
      },
      {
        type: "p",
        text: "Rich Melon Medium使Nordic Spirit在日本推出的产品组合增至8款。这也是JT自2026年3月将该品牌引入日本市场以来，继7月及10月之后的又一次产品线扩充。",
      },
      {
        type: "h2",
        text: "Nordic Spirit扩至8款，Rich Melon Medium售价500日元",
      },
      {
        type: "p",
        text: "此次新增的Nordic Spirit Rich Melon Medium采用蜜瓜风味，刺激强度标注为Medium。",
      },
      {
        type: "p",
        text: "根据JT官方资料，新品在瑞典制造，每罐标准装14袋，含税建议零售价500日元，自11月2日起在日本全国部分烟草零售店销售。",
      },
      {
        type: "p",
        text: "产品具体参数如下：",
      },
      {
        type: "p",
        text: "JT将Medium、Strong和X-Strong等标识用于区分产品的口腔刺激强度，而非直接披露每袋尼古丁含量。",
      },
      {
        type: "p",
        text: "此次新增的Rich Melon Medium属于品牌新的风味SKU。JT没有在10月19日公告中公布该产品的具体尼古丁mg含量、初期出货量或销售预测。",
      },
    ],
  },
  {
    id: "2f-36777",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title: "英美烟草推出VELO WRKS尼古丁袋，一罐双隔舱容纳两种口味，首批3款在瑞典上市",
    enTitle:
      "Product | BAT Launches VELO WRKS Nicotine Pouches in Sweden, Introducing Dual-Compartment Cans With Two Flavours",
    summary:
      "英美烟草（BAT）旗下VELO于2026年11月2日在瑞典推出VELO WRKS尼古丁袋系列，首批3款产品采用Dual Can双隔舱包装，每罐分别容纳两种口味，共20袋、每袋含8mg尼古丁，零售价为52.99瑞典克朗。品牌官方表示，首批Drop 1产品限量75,000罐，计划销售至2027年2月或售完为止。VELO将WRKS定位为用于测试新产品概念的创新平台，并设置消费者反馈问卷。商标记录显示，BAT于2026年3月申请VELO WRKS欧盟商标，注册范围涵盖尼古丁袋、电子烟及加热烟草等第34类商品。",
    imageUrl: "https://static.2firsts.com/uploads/20261103/07bf9f72e1a5163845f4703ac43fba03.png",
    publishedAt: "2026-11-03",
    shortDate: "11月03日",
    fullDate: "2026年11月3日",
    timestamp: 1793693452,
    views: 517,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--bat-launches-velo-wrks-nicotine-pouches-in-sweden-introducing-dual-compartment-cans-with-two-flavours",
    designTag: "结构",
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "ul",
        items: [
          "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
          "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
          "未成年人严禁访问和阅读本文内容。",
        ],
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "ul",
        items: [
          "英美烟草旗下VELO WRKS于2026年11月2日在瑞典上市，采用Dual Can双隔舱设计，每罐包含两种独立口味，每侧各10袋。",
          "首批Drop 1系列包含3款双口味组合，共6种风味；均采用Slim袋型，每袋尼古丁含量8mg，单罐售价52.99瑞典克朗。",
          "品牌官方披露，Drop 1限量75,000罐，通过指定零售商销售，计划供应至2027年2月或售完为止。另有Box版本被零售商标注于11月9日上市。",
          "BAT于2026年3月申请VELO WRKS欧盟商标，并于7月完成注册。品牌官网设有消费者问卷，收集双隔舱设计、风味组合及包装方面的反馈。",
        ],
      },
      {
        type: "p",
        text: "根据英美烟草（British American Tobacco，BAT）旗下VELO瑞典官方网站及零售商Haypp、Snusbolaget公布的信息，VELO于2026年11月2日在瑞典推出VELO WRKS系列尼古丁袋。首批产品命名为Drop 1，包含3款双口味组合，采用Dual Can双隔舱包装，每罐分别容纳两种口味的尼古丁袋。",
      },
      {
        type: "p",
        text: "VELO官方披露，Drop 1为限量产品，计划供应75,000罐，销售期截至2027年2月或售完为止。3款产品均包含20袋尼古丁袋，每袋尼古丁含量8mg，瑞典零售商标注的单罐售价为52.99瑞典克朗。",
      },
      {
        type: "h2",
        text: "Dual Can双隔舱设计：3款产品组合6种风味",
      },
      {
        type: "p",
        text: "VELO WRKS Dual Can将一个包装罐分为两个独立隔舱，每侧分别放置10袋不同口味的尼古丁袋。",
      },
      {
        type: "p",
        text: "根据VELO官方说明，两个隔舱之间采用隔膜分隔，使不同口味的尼古丁袋分别存放。为容纳双隔舱结构，包装取消了常规尼古丁袋罐中用于放置已使用尼古丁袋的独立收纳空间。",
      },
      {
        type: "p",
        text: "首批Drop 1系列包含3款产品，每款将一种相对常见的风味与另一种不同的风味组合在同一包装中。",
      },
      {
        type: "p",
        text: "其中，Tropical Orange / Lemongrass Ginger除了产品名称所列的橙子、柠檬草和生姜，官方风味描述还包含番石榴。",
      },
      {
        type: "p",
        text: "Cardamom Bread / Red Miso则将小豆蔻与香草风味，同品牌描述具有鲜味及轻微咸味的红味噌风味组合在同一罐中。",
      },
      {
        type: "p",
        text: "与将多种风味成分混合在单袋产品中的形式不同，VELO WRKS将两个不同风味分别装入独立隔舱。每罐尼古丁袋总数仍为20袋。",
      },
      {
        type: "h2",
        text: "每袋8mg尼古丁，单罐零售价52.99瑞典克朗",
      },
      {
        type: "p",
        text: "根据Haypp和Snusbolaget的产品资料，首批3款VELO WRKS采用相同的尼古丁规格、袋型与包装数量。",
      },
      {
        type: "p",
        text: "零售商所列配料包括植物纤维、香料、pH调节剂及保湿剂等。",
      },
      {
        type: "p",
        text: "在价格方面，Snusbolaget公布的部分同为8mg规格的VELO产品中，VELO Blueberry Ice的单罐售价为45.99瑞典克朗，而VELO Shift Mango Yuzu为52.99瑞典克朗，与WRKS一致。",
      },
      {
        type: "p",
        text: "因此，WRKS的52.99瑞典克朗定价高于部分常规VELO产品，但与部分其他系列产品持平。现有零售价格不足以认定WRKS相较整个VELO产品组合存在统一的价格溢价。",
      },
    ],
  },
  {
    id: "2f-36769",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title: "OXVA推出XLIM PRO 4电子烟，采用液位检测防干烧技术并配套专用烟弹",
    enTitle:
      "Product | OXVA Introduces XLIM PRO 4 With Liquid-Level Anti-Burn Technology and Dedicated Pods",
    summary:
      "电子烟品牌OXVA于2026年10月推出XLIM PRO 4可注油换弹式电子烟，采用基于烟油液位检测的ABT（Anti-Burn Tech）防干烧技术。当烟油液位过低时，设备可发出补液提醒并停止输出。该功能需要XLIM PRO 4主机与专用XLIM ABT烟弹配合，普通XLIM烟弹虽可兼容，但不支持ABT保护。此前，OXVA已在XLIM Pro 2 DNA上采用与Evolv合作开发的温度控制技术。新品配备1800mAh电池、5—30W输出及0.98英寸高清彩屏。官方商城将设备标价37.90美元，ABT专用替换烟弹标价12.99美元。独立评测显示，ABT能够触发低液位提醒，但不同烟弹的使用寿命存在差异。",
    imageUrl: "https://static.2firsts.com/uploads/20261030/526926dfb12d8999fd524ddc6db8bdd1.png",
    publishedAt: "2026-10-30",
    shortDate: "10月30日",
    fullDate: "2026年10月30日",
    timestamp: 1793354232,
    views: 415,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--oxva-introduces-xlim-pro-4-with-liquid-level-anti-burn-technology-and-dedicated-pods",
    designTag: "工艺",
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "核心概要",
      },
      {
        type: "ul",
        items: [
          "OXVA于2026年10月推出XLIM PRO 4，引入基于烟油液位检测的ABT防干烧技术，可在液位过低时提醒补液并停止设备输出。",
          "与2025年XLIM Pro 2 DNA采用的Evolv DNA温度控制技术不同，ABT主要监测烟弹内的烟油液位，两种方案均旨在减少干烧风险。",
          "ABT保护功能需要XLIM PRO 4主机与XLIM ABT Cartridge UNITECH 3.0专用烟弹配合。设备仍兼容常规XLIM系列烟弹，但普通烟弹无法启用ABT。",
          "Vaping360独立评测确认了ABT低液位提醒和停止输出功能。测试中，0.6Ω ABT烟弹累计使用约60mL烟油，而0.8Ω烟弹在约25mL时出现干烧口感。",
          "XLIM PRO 4配备1800mAh电池、5—30W输出及0.98英寸高清彩屏。官方商城标价37.90美元，ABT专用替换烟弹标价12.99美元。",
        ],
      },
      {
        type: "p",
        text: "2Firsts 2026年10月30日",
      },
      {
        type: "p",
        text: "据电子烟品牌OXVA于2026年10月发布的产品及技术资料，OXVA推出XLIM PRO 4可注油换弹式电子烟，采用基于烟油液位检测的ABT（Anti-Burn Tech）防干烧技术。该系统能够识别烟弹内烟油不足的状态，向用户发出补液提示，并在触发保护条件时停止功率输出，以减少意外干烧风险。",
      },
      {
        type: "p",
        text: "OXVA此前已在XLIM Pro 2 DNA上采用与美国电子烟控制技术企业Evolv合作开发的温度控制方案。新款XLIM PRO 4则使用不同的检测机制，并将ABT功能与专用UNITECH 3.0烟弹结合，同时保留对常规XLIM烟弹的兼容性。",
      },
      {
        type: "p",
        text: "OXVA官方商城将XLIM PRO 4标价37.90美元，另售配套的XLIM ABT Cartridge UNITECH 3.0替换烟弹。",
      },
      {
        type: "h2",
        text: "继温控方案后，OXVA推出液位检测防干烧技术",
      },
      {
        type: "p",
        text: "XLIM PRO 4并非OXVA首款具备防干烧功能的电子烟。",
      },
      {
        type: "p",
        text: "2025年6月，OXVA推出与美国电子烟芯片及控制技术企业Evolv合作开发的XLIM Pro 2 DNA。该产品采用DNA温度控制芯片，配合不锈钢雾化芯，通过监测加热丝电阻随温度发生的变化，调整设备输出，以减少雾化芯过热及干烧风险。",
      },
      {
        type: "p",
        text: "2026年10月推出的XLIM PRO 4采用另一种技术路径。",
      },
      {
        type: "p",
        text: "根据OXVA官方说明，新款设备搭载ABT智能烟油液位检测技术（Smart Liquid-Level Detection），通过识别烟弹内烟油液位过低的状态，发出补液提醒并停止输出。",
      },
      {
        type: "p",
        text: "两种防干烧方案的主要区别如下：",
      },
      {
        type: "p",
        text: "上述两种技术均以减少干烧为目标，但监测对象及保护逻辑不同。",
      },
      {
        type: "p",
        text: "OXVA尚未公开ABT的具体液位检测原理、传感器结构及检测精度，也未提供可用于直接比较两种方案防干烧效果的统一测试数据。",
      },
      {
        type: "h2",
        text: "ABT依赖专用烟弹，仍兼容常规XLIM耗材",
      },
      {
        type: "p",
        text: "XLIM PRO 4的ABT功能需要主机与专用烟弹共同支持。",
      },
      {
        type: "p",
        text: "OXVA配套推出的XLIM ABT Cartridge UNITECH 3.0，将ABT液位检测保护与UNITECH 3.0烟弹技术结合。其中，UNITECH 3.0属于烟弹及雾化技术体系，ABT则负责低液位检测及防干烧保护。",
      },
      {
        type: "p",
        text: "根据OXVA官方说明，XLIM PRO 4可继续使用兼容的常规XLIM系列烟弹，但这些烟弹不具备ABT保护功能。",
      },
    ],
  },
  {
    id: "2f-36767",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title: "思摩尔旗下VAPORESSO推出VAST开放式电子烟，单烟弹集成三种电阻",
    enTitle:
      "Product | SMOORE's VAPORESSO Introduces VAST Refillable Vape With Three Resistances in One Pod",
    summary:
      "思摩尔旗下电子烟品牌VAPORESSO于2026年10月推出VAST可注油开放式电子烟，采用Tri-Core Mesh技术，在单一烟弹内集成0.8Ω、0.6Ω和0.4Ω三种电阻配置，支持不同工作模式及烟油类型。标准版配备10mL烟弹，另有2mL烟弹搭配8mL补液容器的TPD版本。产品搭载1600mAh电池，最大输出功率30W。厂商宣称烟弹支持最多6次补液，雾化芯测试寿命最高15万口。英国MHRA于10月12日公布相关设备申报记录。官方建议零售价25.90美元，直营商城标价35.90美元。",
    imageUrl: "https://static.2firsts.com/uploads/20261030/c622ea1ae10a252f087e7f917c55a74e.png",
    publishedAt: "2026-10-30",
    shortDate: "10月30日",
    fullDate: "2026年10月30日",
    timestamp: 1793348474,
    views: 719,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--smoores-vaporesso-introduces-vast-refillable-vape-with-three-resistances-in-one-pod",
    designTag: null,
    designOnly: false,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "ul",
        items: [
          "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
          "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
          "未成年人严禁访问和阅读本文内容。",
        ],
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "ul",
        items: [
          "思摩尔旗下VAPORESSO推出VAST开放式电子烟，采用Tri-Core Mesh技术，在单一可注油烟弹内集成三种电阻配置。",
          "产品支持0.8Ω ECO、0.6Ω NOR及0.4Ω PWR三种模式，其中ECO面向尼古丁盐烟油，PWR适用于VG含量低于70%的游离碱尼古丁烟油。",
          "标准版采用10mL烟弹，TPD版本采用2mL烟弹与8mL补液容器组合；设备搭载1600mAh电池，最大输出功率30W。",
          "VAPORESSO宣称，CoreGuard涂层可降低金属析出并延长雾化芯寿命，烟弹最多支持6次补液，雾化芯测试寿命最高15万口。",
          "英国MHRA于2026年10月12日公布VAST设备申报记录。官方建议零售价为25.90美元，直营商城标价35.90美元。",
        ],
      },
      {
        type: "p",
        text: "2Firsts 2026年10月30日",
      },
      {
        type: "p",
        text: "据电子烟品牌VAPORESSO官方网站及直营商城信息，思摩尔旗下VAPORESSO于2026年10月推出VAST可注油开放式电子烟。该产品采用Tri-Core Mesh技术，在单一烟弹内集成三种不同电阻配置，用户可通过设备控制功能切换工作模式，无须更换不同阻值的烟弹。",
      },
      {
        type: "p",
        text: "VAST标准版配备10mL可注油烟弹、1600mAh电池，最大输出功率30W。产品同时提供2mL烟弹搭配8mL补液容器的TPD版本。官方建议零售价为25.90美元，品牌直营商城标价为35.90美元。",
      },
      {
        type: "h2",
        text: "单烟弹集成三种电阻，适配不同烟油与输出模式",
      },
      {
        type: "p",
        text: "VAST采用VAPORESSO称为Tri-Core Mesh的雾化技术，在单一可注油烟弹内集成0.8Ω、0.6Ω及0.4Ω三种电阻配置，分别对应ECO、NOR及PWR工作模式。",
      },
      {
        type: "p",
        text: "根据官方产品说明，三种模式具有不同的输出及烟油适配特征：",
      },
      {
        type: "p",
        text: "用户可通过设备控制功能切换三种模式，设备以不同数量的白色指示灯显示当前工作模式，同时支持进气调节。",
      },
      {
        type: "p",
        text: "VAPORESSO将VAST定位为面向口吸式（MTL）使用场景的产品。与通过更换不同阻值烟弹调整输出的设计相比，VAST将三种电阻配置整合至同一耗材。",
      },
      {
        type: "p",
        text: "官方资料未进一步披露三组电阻的具体电路连接方式及切换机制。",
      },
      {
        type: "h2",
        text: "10mL容量与CoreGuard涂层，厂商宣称雾化芯寿命最高15万口",
      },
      {
        type: "p",
        text: "除三电阻结构外，VAST还采用10mL可注油烟弹，并配备快速启动、CoreGuard涂层及SSS 3.0防漏技术。",
      },
      {
        type: "p",
        text: "VAPORESSO宣称，烟弹注油后约1秒即可开始使用，减少传统可注油雾化芯在首次注油后的等待时间。",
      },
      {
        type: "p",
        text: "在雾化芯耐用性方面，VAST采用CoreGuard技术。根据厂商介绍，该技术通过纳米级涂层保护加热丝，减少烟油对加热元件的腐蚀，以改善雾化芯耐用性及工作稳定性。",
      },
      {
        type: "p",
        text: "VAPORESSO在官方产品资料中宣称，相较其测试所采用的对照条件，CoreGuard技术可使金属析出水平降低约32倍，雾化芯寿命延长约3倍。不过，公开产品页面未充分说明上述比较的具体基准及完整测试方法，相关结果尚未获得独立验证。",
      },
    ],
  },
  {
    id: "2f-36739",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title: "菲莫日本携手法国知名音响品牌DEVIALET推出限量版IQOS，售价较常规版高约60%",
    enTitle:
      "Product | Philip Morris Japan Teams Up With Renowned French Audio Brand DEVIALET for Limited-Edition IQOS Priced 60% Above Standard Model",
    summary:
      "菲莫日本（PMJ）与法国音响品牌DEVIALET合作推出限量版加热烟草设备IQOS ILUMA i PRIME Soundsorial Model，已于2026年10月1日在日本上市。产品采用声波纹理、银黑配色及渐变设计，建议零售价为15,980日元（含税），仅在日本4家IQOS官方门店销售。据日本媒体援引公司代表披露，日本市场备货约1,900台。此外，IQOS还推出搭配DEVIALET Gemini II耳机的联名收藏套装，其中440套面向日本市场，通过会员积分抽奖活动提供。",
    imageUrl: "https://static.2firsts.com/uploads/20261023/a083b6bed252e3d0984176dffbcb840c.jpeg",
    publishedAt: "2026-10-23",
    shortDate: "10月23日",
    fullDate: "2026年10月23日",
    timestamp: 1792747946,
    views: 237,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--philip-morris-japan-teams-up-with-renowned-french-audio-brand-devialet-for-limited-edition-iqos-priced-60-above-standard-model",
    designTag: "联名",
    designOnly: true,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "p",
        text: "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
      },
      {
        type: "p",
        text: "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
      },
      {
        type: "p",
        text: "未成年人严禁访问和阅读本文内容。",
      },
      {
        type: "h2",
        text: "要点速览",
      },
      {
        type: "p",
        text: "跨界合作： 菲莫日本与法国音响品牌DEVIALET合作，推出IQOS ILUMA i PRIME Soundsorial Model限量版加热烟草设备。",
      },
      {
        type: "p",
        text: "产品设计： 新款采用声波纹理、金属银色充电盒、黑色包覆外盖及渐变色加热器设计，官方未披露核心加热技术升级。",
      },
      {
        type: "p",
        text: "价格与数量： 日本建议零售价15,980日元（含税），据《Walkerplus》援引企业代表介绍，日本市场备货约1,900台。",
      },
      {
        type: "p",
        text: "销售渠道： 自2026年10月1日起，在东京银座、札幌、名古屋和大阪心斋桥的4家IQOS官方门店限量销售。",
      },
      {
        type: "p",
        text: "联名收藏套装： IQOS另推出搭配DEVIALET Gemini II耳机的Soundsorial Collection，其中440套面向日本市场，通过IQOSPHERE会员积分抽奖提供。",
      },
      {
        type: "p",
        text: "根据菲莫日本（Philip Morris Japan，PMJ）于2026年10月1日发布的官方新闻稿，该公司与法国高端音响品牌DEVIALET（帝瓦雷）合作推出限量版加热烟草设备IQOS ILUMA i PRIME Soundsorial Model，并于当天在日本4家IQOS官方门店开始销售。产品建议零售价为15,980日元（含税），设计以声波纹理为主题，采用银黑配色及渐变色机身。",
      },
      {
        type: "p",
        text: "据日本媒体《Walkerplus》10月8日报道，菲莫日本消费者公关代表Eric Yu表示，日本市场为该联名设备准备了约1,900台，且通过IQOS官方门店单独销售设备的安排仅面向日本市场。",
      },
      {
        type: "h2",
        text: "与法国音响品牌DEVIALET合作，采用声波纹理设计",
      },
      {
        type: "p",
        text: "IQOS ILUMA i PRIME Soundsorial Model限量版加热烟草设备，采用银黑配色及声波纹理设计。（图源：菲莫日本）",
      },
      {
        type: "p",
        text: "此次联名产品以IQOS ILUMA i PRIME为基础，主要调整设备外观设计及包装。",
      },
      {
        type: "p",
        text: "DEVIALET是一家总部位于法国巴黎的音响品牌，产品涵盖扬声器及无线耳机等音频设备。此次合作将声音振动及波纹元素引入加热烟草设备的外观设计。",
      },
      {
        type: "p",
        text: "根据产品资料，Soundsorial Model采用铝银色充电盒，外部包覆盖使用黑色织物材质，并饰有声波纹理。加热器机身采用黑色向银色过渡的渐变设计，包装也加入了相同主题的视觉元素。",
      },
      {
        type: "p",
        text: "该产品延续IQOS ILUMA i PRIME平台。官方此次发布的信息主要涉及外观设计和限量销售安排，未提及加热系统、续航能力或其他核心硬件性能升级。",
      },
    ],
  },
  {
    id: "2f-36681",
    category: "产品动态",
    sourceChannel: "PRODUCT",
    sourcePath: "/news/list/product",
    title: "KT&G在韩国推出lil HYBRID 3.0 Misty Rosé II限量版，两款粉色设计售价8.8万韩元",
    enTitle:
      "Product | KT&G Launches lil HYBRID 3.0 Misty Rosé Edition II in South Korea With Two Pink Finishes at 88,000 Won",
    summary:
      "韩国烟草公司KT&G于2026年9月30日在韩国推出加热烟草设备lil HYBRID 3.0的限量特别版Misty Rosé Edition II，延续2025年11月推出的Misty Rosé Edition系列。新品包括Bloom Rosé和Viva Rosé两款粉色设计，售价均为88,000韩元。两款产品首先通过lil Store线上商城及lil MINIMALIUM旗舰店销售；自10月7日起，Bloom Rosé进一步进入韩国约1,500家lil Station零售网点。此次更新主要涉及外观配色及销售渠道，沿用lil HYBRID 3.0既有的混合加热平台",
    imageUrl: "https://static.2firsts.com/uploads/20261010/1806c46e9786df715f460c71cd8ee482.png",
    publishedAt: "2026-10-10",
    shortDate: "10月10日",
    fullDate: "2026年10月10日",
    timestamp: 1791598697,
    views: 338,
    author: "2Firsts 编辑部",
    sourceUrl:
      "https://www.2firsts.com/news/product--ktg-launches-lil-hybrid-30-misty-ros-edition-ii-in-south-korea-with-two-pink-finishes-at-88000-won",
    designTag: "色彩",
    designOnly: true,
    blocks: [
      {
        type: "h2",
        text: "特别声明",
      },
      {
        type: "ul",
        items: [
          "本文仅用于电子烟/烟草行业内部交流与信息分享，不构成对任何品牌或产品的推荐、认可或宣传。",
          "本文展示的所有图片及视觉素材仅用于客观事实描述和新闻报道，不构成任何产品的商业广告或营销推广。",
          "未成年人严禁访问和阅读本文内容。",
        ],
      },
      {
        type: "h2",
        text: "要点概览",
      },
      {
        type: "ul",
        items: [
          "KT&G于9月30日在韩国推出lil HYBRID 3.0 Misty Rosé Edition II，延续2025年11月发布的同系列特别版。",
          "新品提供Bloom Rosé和Viva Rosé两款粉色设计，售价均为88,000韩元。",
          "两款配色首先在lil Store和lil MINIMALIUM销售；10月7日起，Bloom Rosé进入约1,500家lil Station。",
          "产品沿用lil HYBRID 3.0混合加热系统，支持Standard、Classic和Casual三种运行模式。",
        ],
      },
      {
        type: "p",
        text: "据韩国《Business Report》9月30日报道，韩国烟草公司KT&G当天推出加热烟草设备lil HYBRID 3.0 Misty Rosé Edition II限量特别版，包括Bloom Rosé和Viva Rosé两款粉色设计，售价均为88,000韩元。新品首先通过品牌直营线上商城和旗舰店销售，并于10月7日起将Bloom Rosé的销售渠道扩大至韩国约1,500家lil Station零售网点。",
      },
      {
        type: "p",
        text: "Misty Rosé Edition II是KT&G于2025年11月推出的Misty Rosé Edition后续产品，继续采用lil HYBRID 3.0设备平台。",
      },
      {
        type: "h2",
        text: "两款粉色设计延续2025年Misty Rosé特别版",
      },
      {
        type: "p",
        text: "Misty Rosé Edition II提供两款外观设计：",
      },
      {
        type: "ul",
        items: [
          "Bloom Rosé： 采用较浅、柔和的粉色调。",
          "Viva Rosé： 采用更鲜明、饱和度较高的粉色调。",
        ],
      },
      {
        type: "p",
        text: "两款产品售价均为88,000韩元。",
      },
      {
        type: "p",
        text: "KT&G于2025年11月20日推出首款lil HYBRID 3.0 Misty Rosé Edition，以玫瑰色渐变包装及机身设计为特色。当时产品限量发行20,000台，并通过品牌直营渠道及部分便利店销售。",
      },
      {
        type: "p",
        text: "此次推出的Edition II保留Misty Rosé系列的粉色设计主题，增加Bloom Rosé和Viva Rosé两款配色。",
      },
      {
        type: "h2",
        text: "10月7日起扩大零售覆盖，lil Station仅销售Bloom Rosé",
      },
      {
        type: "p",
        text: "KT&G于9月30日首先通过lil Store线上商城和lil MINIMALIUM旗舰店销售两款新品。",
      },
      {
        type: "p",
        text: "10月7日起，Misty Rosé Edition II进一步进入韩国约1,500家lil Station零售网点，但这些网点仅销售Bloom Rosé。Viva Rosé则继续通过品牌线上商城和旗舰店销售。",
      },
      {
        type: "p",
        text: "这一安排使两款配色在销售渠道上有所区分：Bloom Rosé覆盖品牌直营及更广泛的线下零售网络，Viva Rosé主要通过品牌直营渠道销售。",
      },
      {
        type: "h2",
        text: "沿用lil HYBRID 3.0混合加热系统及三种运行模式",
      },
      {
        type: "p",
        text: "Misty Rosé Edition II基于KT&G现有的lil HYBRID 3.0平台。",
      },
    ],
  },
];

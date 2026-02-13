import { Recipe } from '../types';

export const shioPanRecipe: Recipe = {
  title: "絶品！カリッじゅわ〜な塩ロールパン",
  description: "外はカリッと、中はバターが溶け出してジューシー。お店のような塩パンがお家で作れます。焼きたての香りは格別です！",
  prepTime: "2時間30分",
  cookTime: "15分",
  yields: "8個分",
  ingredients: [
    {
      title: "パン生地",
      items: [
        { name: "強力粉", amount: "200g" },
        { name: "薄力粉", amount: "50g", note: "準強力粉250gでも可" },
        { name: "砂糖", amount: "15g" },
        { name: "塩", amount: "4g" },
        { name: "ドライイースト", amount: "3g" },
        { name: "牛乳（または水）", amount: "170ml", note: "人肌に温める" },
        { name: "無塩バター", amount: "20g", note: "室温に戻す" },
      ]
    },
    {
      title: "フィリング・トッピング",
      items: [
        { name: "有塩バター", amount: "80g", note: "10g×8本にカットして冷やす" },
        { name: "岩塩（トッピング用）", amount: "適量", note: "フルール・ド・セルがおすすめ" },
        { name: "強力粉（打ち粉）", amount: "適量" }
      ]
    }
  ],
  instructions: [
    {
      stepNumber: 1,
      title: "生地を捏ねる",
      description: "ボウルに粉類、砂糖、塩、イーストを入れ、温めた牛乳を加えて混ぜます。まとまってきたら台に出して捏ね、生地がなめらかになってきたらバター(生地用20g)を加えてさらに捏ねます。グルテン膜ができるまでしっかり捏ねましょう。",
      imageSeed: "kneading_dough"
    },
    {
      stepNumber: 2,
      title: "一次発酵",
      description: "表面を張らせるように丸め、ボウルに入れてラップをかけます。35℃〜40℃の暖かい場所で約50〜60分、生地が2倍の大きさになるまで発酵させます。",
      imageSeed: "proofing_dough"
    },
    {
      stepNumber: 3,
      title: "分割・ベンチタイム",
      description: "ガス抜きをして8等分（約55g前後）にし、綺麗な面を出して丸め直します。濡れ布巾をかけて15分ほど休ませます（ベンチタイム）。その間にフィリング用のバターを棒状（約7-8cm）にカットし、冷蔵庫で冷やしておきます。",
      imageSeed: "dividing_dough"
    },
    {
      stepNumber: 4,
      title: "成形（しずく型）",
      description: "生地を再び軽く潰してガスを抜き、片側を転がして「しずく型（円錐形）」にします。これを8個すべて行います。",
      imageSeed: "shaping_teardrop"
    },
    {
      stepNumber: 5,
      title: "成形（伸ばして巻く）",
      description: "しずく型の太い方を手前に置き、麺棒で細長く伸ばします（長さ30cm程度）。手前の広い部分に冷やしておいた棒状バターを置き、芯にしてクルクルと巻いていきます。巻き終わりは下にして天板に並べます。",
      imageSeed: "rolling_croissant"
    },
    {
      stepNumber: 6,
      title: "二次発酵",
      description: "天板に並べた生地に霧吹きをし、35℃で40〜50分ほど発酵させます。一回り大きくなり、ふっくらとすればOKです。",
      imageSeed: "final_proof"
    },
    {
      stepNumber: 7,
      title: "焼成",
      description: "オーブンを230℃に予熱します。発酵が終わった生地に霧吹きをし、岩塩をパラパラとトッピングします。210℃〜220℃に下げたオーブンで12〜15分、こんがりと焼き色がつくまで焼きます。",
      imageSeed: "baking_oven"
    }
  ],
  tips: [
    "フィリングのバターは焼く直前まで溶かさないのがコツです。成形時はバターを冷やしておきましょう。",
    "焼成中にバターが溶け出し、底が揚げ焼き状態になるのが正解です。天板には必ずオーブンシートを敷きましょう。",
    "焼き上がりは非常に熱いバターが流れているので、火傷に注意してください。"
  ]
};
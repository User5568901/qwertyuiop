function omikujishow(){
   	var omikuji = new Array("大吉","中吉","小吉","吉","末吉","凶","大凶");
	//大吉２％,中吉２８％,小吉２０％,吉２５％,末吉１５％,凶９％,大凶１％,	
	var number1 = Math.random();
	var number2 = number1 * 100;
	var number3 = Math.floor(number2);
    var number =0;
    if(number3 >= 98){(number =0+number);}
    else if(number3 >=70){(number =1+number);}
    else if(number3 >=50){(number =2+number);}
    else if(number3 >=25){(number =3+number);}
    else if(number3 >=10){(number =4+number);}
    else if(number3 >=1 ){(number =5+number);}
    else                 {(number =6+number);}
	var message = omikuji[number]; 
	var object  = document.getElementById("omikuji");
    object.innerText = message;
    if (number==0){object.style.color = "#FF0000"}
    else if(number==1){object.style.color = "#FF8901"}
    else if(number==2){object.style.color = "#D28300"}
    else if(number==3){object.style.color = "#00BA71"}
    else if(number==4){object.style.color = "#00C2DE"}
    else if(number==5){object.style.color = "#00418D"}
    else if(number==6){object.style.color = "#5F2879"}
    object.style.fontSize = "100px";
    object.style.webkitTextStroke = "3px #000000";
      var kekka = new Array(
        "新しい風が吹き、全てが順調に進む時期です。\n願い事は叶い、努力が実を結ぶことでしょう。\n新たなチャレンジにも自信を持って挑んでください。\n人間関係も良好で、周囲のサポートを受けやすい時期です。\n積極的に動けばさらに良い運気を引き寄せるでしょう。",
        "全体的に良い流れが来ていますが、急ぎすぎないことが大切です。\n目の前のチャンスをしっかり掴むために、冷静な判断を心がけましょう。\n計画を立てて行動すれば、予想以上の成果が得られます。\n焦らずに、一歩一歩着実に進んでいくことが成功の鍵です。",
        "運気は少しずつ上昇中です。\n大きな成果を期待せず、小さな幸せを見つけることで心が豊かになるでしょう。\n焦らず地道に努力を続ければ、徐々に運が開けていきます。\n小さな成功を積み重ねて、自信をつけていきましょう。",
        "穏やかな幸運が訪れています。\n特に困難なこともなく、順調な日々が続くでしょう。\n目標に向かって地道に努力を続けることで、良い結果を得られるはずです。\n時には周囲のアドバイスにも耳を傾けて、柔軟な対応を心がけましょう。",
        "運気はゆっくりと上向きます。\n大きな成果を望むよりも、小さな成功を喜ぶ心を大切にしてください。\n今は準備の時期です。\n焦らずにじっくりと計画を練り、自分のペースで進んでいきましょう。\n長い目で見ての成功が期待できます。",
        "少し試練の時期ですが、焦らずに行動することが求められます。\n困難に直面しても、落ち着いて対処すれば乗り越えられるでしょう。\n無理をせず、自分を大切にすることが運気回復の鍵です。\n辛い時は周囲の人に頼ることも忘れずに。",
        "厳しい運勢ですが、今こそ自分を見つめ直すチャンスです。\n慎重な行動と冷静な判断が求められます。\n無理に進むよりも、状況を整えることを優先してください。\n少しずつ改善していくことで、未来は必ず良い方向に向かうでしょう。\n辛い時期を乗り越えた後には、大きな成長が待っています。",
);
    var msg = kekka[number];
    var ob = document.getElementById("unsei");
    ob.innerText = msg;
}    
    
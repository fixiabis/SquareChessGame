var prt=["A1","E9","I3","F2","C5"],c=[["palevioletred","crimson"],["lightsteelblue","royalblue"],["mediumseagreen","teal"],["gold","darkorange"],["mediumslateblue","blueviolet"]]
function ExR(){var ct=[0,0];for(i in c){var s=0,t=0;for(n=0;n<2;n++)if(Controls(prt[i]).innerHTML==sbl[n])ct[n]++;for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){var cd=Chr(cd1)+cd2,cl=Controls(cd).style.backgroundColor;if(c[i].indexOf(cl)>-1){s++;if(Controls(cd).innerHTML!=="")t++}}}if(t==s)Clc(i)}if(Turn>2){if(ct[0]==0||ct[1]==4)Cln("X Win.","");if(ct[1]==0||ct[0]==4)Cln("O Win.","")}}
function ExB(){var ts=0;while(true){for(var s in prt){Controls(prt[s]).style.backgroundColor=c[s][1];var cd1=Math.floor(Math.random()*9)+65,cd2=Math.floor(Math.random()*9)+1,cd=Chr(cd1)+cd2,cl=Controls(cd).style.backgroundColor;if(cl=="white"||cl=="lightgray"){var arw=["F","B","R","L"];for(i in arw){if(Controls(Crd(arw[i],cd))){if(c[s].indexOf(Controls(Crd(arw[i],cd)).style.backgroundColor)>-1){Controls(cd).style.backgroundColor=c[s][0];ts++;ck=1;break}}}}}if(ts==76)break}var s=0;while(true){var cd=prt[Math.floor(Math.random()*5)];if(Controls(cd).innerHTML==""){Set(cd);s++}if(s==2)break}}
function Clc(v){for(cd1=65;cd1<74;cd1++){for(cd2=1;cd2<10;cd2++){var cd=Chr(cd1)+cd2,cl=Controls(cd).style.backgroundColor;if(c[i].indexOf(cl)>-1)Controls(cd).innerHTML=""}}}
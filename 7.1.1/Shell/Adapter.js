﻿var ab="FFR;FFL;BBR;BBL;RRF;RRB;LLF;LLB".split(";"),rt="FF;BB;RR;LL;FRFR;FLFL;BRBR;BLBL".split(";")
function Lmt(c,s){var k=0,r=1;Dft.Fcd="";if(!s){s=Sbl[Tn%2];k=ExL(c)}
	if(!Id(c)||Qre(c,"T")!="")return 1;if(k)return k
	if(Tn<2&&Qre(c,"T")=="")return 0
	for(i in ab)if(Id(Crd(c,ab[i])))if(Qre(Crd(c,ab[i]),"T")==s){
			var h=[
				Qre(Crd(c,Mid(ab[i],0,2)),"T"),
				Qre(Crd(c,Mid(ab[i],0,1)),"T"),
				Qre(Crd(c,Mid(ab[i],1,2)),"T"),
				Qre(Crd(c,Mid(ab[i],2,1)),"T"),
			]
			if(
				Instr(s,h[0])>-1&&Instr(s,h[1])>-1||
				Instr(s,h[2])>-1&&Instr(s,h[1])>-1||
				Instr(s,h[2])>-1&&Instr(s,h[3])>-1
			){Dft.Fcd+=Crd(c,ab[i]);r=0}
	}
	for(i in rt)
		if(Id(Crd(c,rt[i])))
			if(Qre(Crd(c,rt[i]),"T")==s&&Instr(s,Qre(Crd(c,Mid(rt[i],0,rt[i].length/2)),"T"))>-1){
		Dft.Fcd+=Crd(c,rt[i]);r=0
	}
	return r
}
function Rul(){var a=0;Scr={O:0,X:0,P:0}
	for(var i=0;i<9;i++){if(a>80)break
		for(cd1=65;cd1<74;cd1++){if(a>80)break
			for(cd2=1;cd2<10;cd2++){if(a>80)break
				var Os=0,Xs=0,c=Chr(cd1)+cd2
				if(!i)Id(c).title=""
				if(Qre(c,"T")!=""||Id(c).title!=""){a++;continue}
				for(n in cd8)if(Id(Crd(c,cd8[n]))){var t=Id(Crd(c,cd8[n])).title
					if(t=="O"+(i-1))Os=1;if(t=="X"+(i-1))Xs=1
				}if(!i){Os=!Lmt(c,"O");Xs=!Lmt(c,"X")}
				if(Os&&Xs){Id(c).title="P"+i;Scr.P++}
				if(Os&&!Xs){Id(c).title="O"+i;Scr.O++}
				if(!Os&&Xs){Id(c).title="X"+i;Scr.X++}
			}
		}
	}
	if(Tn>2)if(Scr.P==0){
		if(Tn%2==0){
			if(Scr.O>Scr.X)Cln("O獲勝")
			else if(Scr.O<Scr.X)Cln("X獲勝")
		}
		if(Scr.O==0&&Scr.X==0)Cln("平手")
		else if(Scr.O==0)Cln("X獲勝")
		else if(Scr.X==0)Cln("O獲勝")
	}ExR()
}
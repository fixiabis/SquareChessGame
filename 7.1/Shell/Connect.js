Dft.Rnd=false
function ExA(){bdR()}
function Lmt(c,s){var k=0;if(!s){s=Sbl[Tn%2];k=ExL(c)}
	if(!Id(c)||Qre(c,"T")!="")return 1;if(k)return k
	if(Tn<2&&Qre(c,"T")=="")return 0
	for(i in cd8)if(Id(Crd(c,cd8[i])))if(Qre(Crd(c,cd8[i]),"T")==s)return 0
	return 1
}
function Rul(){Scr={O:0,X:0,P:0}
	for(var i=0;i<9;i++)for(cd1=65;cd1<74;cd1++){
		for(cd2=1;cd2<10;cd2++){
			var Os=0,Xs=0,c=Chr(cd1)+cd2
			if(!i)Id(c).title=""
			if(Qre(c,"T")!=""||Id(c).title!="")continue
			for(n in cd8)if(Id(Crd(c,cd8[n]))){var t=Id(Crd(c,cd8[n])).title
				if(t=="O"+(i-1))Os=1;if(t=="X"+(i-1))Xs=1
			}if(!i){Os=!Lmt(c,"O");Xs=!Lmt(c,"X")}
			if(Os&&Xs){Id(c).title="P"+i;Scr.P++}
			if(Os&&!Xs){Id(c).title="O"+i;Scr.O++}
			if(!Os&&Xs){Id(c).title="X"+i;Scr.X++}
		}
	}
	if(Scr.P==0&&Tn%2==0){
		if(Scr.O>Scr.X)Cln("O Win")
		else if(Scr.O<Scr.X)Cln("X Win")
		else Cln("Draw")
	}ExR()
}
function bdR(){Dft.Rnd=confirm("First Set fixed? Now is "+Dft.Rnd);if(Tn==0)Cln()}
function crR(){if(!Dft.Rnd)return
	var R=[["E4","E6","D5","F5"],["D4","D6","F4","F6"]]
	for(i in R){var p=Val(Rnd()*4);Set(R[i][p])}
}
function ExB(){crR()}function ExR(){}function ExL(){return 0}
Shl.Ara.Gomoku=[];Dft.Gomoku={Ara:2}
Shl.Rul.Gomoku=function(){var c5=[[Sel("A1:I5"),"B"],[Sel("A1:E9"),"R"],[Sel("A1:E5"),"BR"],[Sel("A5:E9"),"FR"]],chs=[[],[]]
	for(var i=0;i<c5.length;i++){
		for(var j=0;j<c5[i][0].length;j++){
			var ara=Sel(c5[i][0][j]+"~"+Crd(c5[i][0][j],Vct("4"+c5[i][1]))),ln=Qre(ara,"Sym")
			if(ln.indexOf(0)>-1&&ln.indexOf(1)>-1)continue
			var spc=Flt(ln,function(sm){if(sm==2)return 1;return 0})
			for(var k=0;k<2;k++){var s=Flt(ln,function(sm){if(sm==k)return 1;return 0})
				if(s.length==5){Jdg(Sqr.Sym[k]+"獲勝");return ""}if(spc.length+s.length==5)chs[k].push(ara)
			}
		}
	}if(chs[0].length==0&&chs[1].length==0)Jdg("平手");Shl.Ara.Gomoku=chs
}
Shl.Lmt.Gomoku=function(){}
Shl.Mrk.Gomoku=function(){var sym=Tn%2
	if(Dft.Gomoku.Ara==1)sym=(Tn+1)%2
	if(Dft.Gomoku.Ara!=2)for(var i=0;i<Shl.Ara.Gomoku[sym].length;i++){var s=0
		for(var j=0;j<5;j++)if(Qre(Shl.Ara.Gomoku[sym][i][j],"Sym")==2)s++;if(s==5)continue
		for(var j=0;j<Shl.Ara.Gomoku[sym][i].length;j++)if(Qre(Shl.Ara.Gomoku[sym][i][j],"Sym")==2)Qre(Shl.Ara.Gomoku[sym][i][j],"BgC",9)
	}
}
Shl.Brd.Gomoku=function(){}
Shl.Adn.Gomoku=function(){}
Shl.Ckr.Gomoku=function(){return 1}
Shl.Opt.Gomoku=function(){
	Id("OptionMenu").innerHTML+="Gomoku設定:<br>"
	OpS("Gomoku-Ara-0/Gomoku-Ara","r","我方可行區域",Dft.Gomoku.Ara==0)
	OpS("Gomoku-Ara-1/Gomoku-Ara","r","對方可行區域",Dft.Gomoku.Ara==1)
	OpS("Gomoku-Ara-2/Gomoku-Ara","r","隱藏可行區域",Dft.Gomoku.Ara==2)
}
Shl.OpK.Gomoku=function(){
	for(var i=0;i<3;i++)if(Id("Gomoku-Ara-"+i).checked)Dft.Gomoku.Ara=i
}
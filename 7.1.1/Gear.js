var olsvr="https://script.google.com/macros/s/AKfycbzvZ4sL8J0e4cjN4fH_AjWLZr17sqQggkCpS60FLQwoJMgaKw/exec";Dft.Set=1
function Lgn(){var typ="J";if(Id("Jcd").value=="")typ="L"
	$.get(olsvr,
		{Typ:typ,Act:Id("Act").value,Pwd:Id("Pwd").value,Jcd:Id("Jcd").value,Mod:location.search.split("?mode=")[1]},
		function (r){
			if(typ=="L"){
				if(Instr(r,"/'")>-1){var rtn=r.split("/'")
					Dft.Usr="Host";Dft.URw=rtn[0];Dft.Jcd=rtn[1];alert("邀請代碼:"+Dft.Jcd);Ldr()
				}else alert(r)
			}else{
				if(Val(r)==NaN){
					alert(r)
				}else{
					Dft.Usr="Join";Dft.URw=r;Dft.Jcd=Id("Jcd").value;alert("加入成功");Get();Ldr();EnS()
				}
			}
		}
	)
}
function Upl(){if(Tn==0)return;EnS()
	$.get(olsvr,
		{Typ:"S",Jcd:Dft.Jcd,Rw:Dft.URw,Brd:Hst.Brd[Tn]+":"+Tn},
		function (r){
			if(Hst.Brd[Tn]==""&&Dft.Usr=="Host")EnS(1)
			else if(r=="設置完成")Get()
			else alert(r)
		}
	)
}
function Get(){
	$.get(olsvr,
		{Typ:"R",Jcd:Dft.Jcd,Rw:Dft.URw},
		function (r){
			if(r!=""){
				var rtn=r.split(":");console.log(r)
				if(rtn[0]!=""&&rtn[1]>Tn){Rdr(rtn[0]);Tn=Val(rtn[1]);EnS(1);Rul()}
				else Get()
			}else Get()
		}
	)
}
function EnS(v){if(v)Dft.Set=1;else Dft.Set=0}
function Set(c){if(!Dft.Set)return;if(!Lmt(c)){Hst.Crd[Tn+1]=c;Qre(c,"T",Sbl[Tn%2]);Tn++;Wtr();Rul()}}
function Acn(){if(location.hash){Id("Act").value=location.hash.split("#")[1]}}
function Udo(){}
function Rdo(){}
function Gto(){}
function Clr(){}
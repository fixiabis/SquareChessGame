﻿var olsvr="https://script.google.com/macros/s/AKfycbzTiFNUJlqZEchqdAb0pJu8R2KfqDq77iOIeS08pT1bEl6v0YXk/exec"
Dft.System.Oln=1
function Req(Typ){var id="";if(Typ=="J"){id=prompt("輸入id");Dft.Oln.Typ="X"}else Dft.Oln.Typ="O"
	try{
		$.get(olsvr,
			{Typ:Typ,mode:location.search.split("?mode=")[1],id:id},
			function (r){var q=r.split(","),t=q[0];console.log(q)
				if(Typ=="R")t+="id:"+q[2].split(":")[1];alert(t)
				if(q.length>1){Dft.Oln.Row=q[1].split(":")[1]
					if(q.length>2)Dft.Oln.Id=q[2].split(":")[1]
					else Dft.Oln.Id=id
				}
			}
		)
	}catch(e){if(confirm("暫時無法申請，將繼續重試"))Req()}
}
function Upl(cnt){Dft.Set=0
	try{
		$.get(olsvr,
			{Typ:"U",brd:cnt,id:Dft.Oln.Id,row:Dft.Oln.Row},
			function(r){var q=r.split(",");console.log(q);Dft.Oln.Cln=1
				if(q.length>1){Dft.Oln.Row=q[1].split(":")[1];Get()}else alert(r)
			}
		)
	}catch(e){if(confirm("暫時無法上傳，將繼續重試"))Upl(cnt)}
}
function Get(){
	try{
		$.get(olsvr,
			{Typ:"G",id:Dft.Oln.Id,row:Dft.Oln.Row},
			function(r){var q=r.split(",")
				if(q.length>1){Dft.Oln.Row=q[1].split(":")[1]
					var brd=q[2].split("/");brd[0]=brd[0].split(":")[1]
					if(brd[0].length<81&&Dft.Oln.Cln){
						alert(brd[0]);Cln();Dft.Oln.Cln=0
					}else{
						Hst.Brd[brd[1]]=brd[0];Rec(brd[0]);Tn=brd[1];Rul();Dft.Set=1
					}
				}
			}
		)
	}catch(e){if(confirm("暫時無法取得，將繼續重試"))Get()}
}
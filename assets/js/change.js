//200624 Arisa
function changeimg200624(){
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var checkbox = document.getElementById('1c_s');
	var x = document.getElementById('1c');
	  if (checkbox.checked) {
		x.src = 'assets/img/200624/c.png';
	  } else {
	    x.src = 'assets/img/200624/none.png';
	  }
	var checkbox = document.getElementById('1doll_s');
	var x = document.getElementById('1doll');
	  if (checkbox.checked) {
		x.src = 'assets/img/200624/doll.png';
	  } else {
	    x.src = 'assets/img/200624/none.png';
	  } 
	var checkbox = document.getElementById('1sem_s');
	var x = document.getElementById('1sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/200624/sem.png';
	  } else {
	    x.src = 'assets/img/200624/none.png';
	  } 
}

//220803 Keqing
function changeimg220803_1(){
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var x = document.getElementById("1t_s").value;
	document.getElementById("1t").src = x;
	var checkbox = document.getElementById('1rbq_s');
	var x = document.getElementById('1rbq');
	  if (checkbox.checked) {
		x.src = 'assets/img/220803/rbq.png';
	  } else {
	    x.src = 'assets/img/220803/none.png';
	  }
	var checkbox = document.getElementById('1tu_s');
	var x = document.getElementById('1tu');
	  if (checkbox.checked) {
		x.src = 'assets/img/220803/torn_u.png';
	  } else {
	    x.src = 'assets/img/220803/none.png';
	  } 
	var x = document.getElementById("1k_s").value;
	document.getElementById("1k").src = x;
	var x = document.getElementById("1s_s").value;
	document.getElementById("1s").src = x;
	var checkbox = document.getElementById('1rope_s');
	var x = document.getElementById('1rope');
	  if (checkbox.checked) {
		x.src = 'assets/img/220803/rope.png';
	  } else {
	    x.src = 'assets/img/220803/none.png';
	  } 
	var x = document.getElementById("1c1_s").value;
	document.getElementById("1c1").src = x;
	var x = document.getElementById("1c2_s").value;
	document.getElementById("1c2").src = x;
	var x = document.getElementById("1luz_s").value;
	document.getElementById("1luz").src = x;
	var x = document.getElementById("1lut_s").value;
	document.getElementById("1lut").src = x;
	var x = document.getElementById("1lus_s").value;
	document.getElementById("1lus").src = x;
}

function showLumine1() {
			var x = document.getElementsByClassName("lumine1");
			for (var i = 0; i < x.length; i++) {
				if (x[i].style.display === "none") {
					x[i].style.display = "block";
				} else {
					x[i].style.display = "none";
				}
			}
		}

function changeimg220803_2(){
	var x = document.getElementById("2z_s").value;
	document.getElementById("2z").src = x;
	var x = document.getElementById("2t_s").value;
	document.getElementById("2t").src = x;
	var checkbox = document.getElementById('2rbq_s');
	var x = document.getElementById('2rbq');
	  if (checkbox.checked) {
		x.src = 'assets/img/220803/rbq.png';
	  } else {
	    x.src = 'assets/img/220803/none.png';
	  }
	var checkbox = document.getElementById('2tu_s');
	var x = document.getElementById('2tu');
	  if (checkbox.checked) {
		x.src = 'assets/img/220803/torn_u.png';
	  } else {
	    x.src = 'assets/img/220803/none.png';
	  } 
	var x = document.getElementById("2k_s").value;
	document.getElementById("2k").src = x;
	var x = document.getElementById("2c1_s").value;
	document.getElementById("2c1").src = x;
	var checkbox = document.getElementById('2c2_s');
	var x = document.getElementById('2c2');
	  if (checkbox.checked) {
		x.src = 'assets/img/220803/c8_d.png';
	  } else {
	    x.src = 'assets/img/220803/none.png';
	  } 
	  var checkbox = document.getElementById('2sem_s');
	  var x = document.getElementById('2sem');
	    if (checkbox.checked) {
	  	x.src = 'assets/img/220803/sem.png';
	    } else {
	      x.src = 'assets/img/220803/none.png';
	    } 
	var x = document.getElementById("2luz_s").value;
	document.getElementById("2luz").src = x;
	var x = document.getElementById("2lut_s").value;
	document.getElementById("2lut").src = x;
	  var checkbox = document.getElementById('2lusem_s');
	  var x = document.getElementById('2lusem');
	    if (checkbox.checked) {
	  	x.src = 'assets/img/220803/lu_sem.png';
	    } else {
	      x.src = 'assets/img/220803/none.png';
	    } 
}

function showLumine2() {
			var x = document.getElementsByClassName("lumine2");
			for (var i = 0; i < x.length; i++) {
				if (x[i].style.display === "none") {
					x[i].style.display = "block";
				} else {
					x[i].style.display = "none";
				}
			}
		}



//220912 Illya
function changeimg220912_1(){
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var x = document.getElementById("1t_s").value;
	document.getElementById("1t").src = x;
	var checkbox = document.getElementById('1tu_s');
	var x = document.getElementById('1tu');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/torn_u.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  }
	var checkbox = document.getElementById('1td_s');
	var x = document.getElementById('1td');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/torn_d.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  } 
	var x = document.getElementById("1s_s").value;
	document.getElementById("1s").src = x;
	var checkbox = document.getElementById('1sw_s');
	var x = document.getElementById('1sw');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/sw.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  } 
	var checkbox = document.getElementById('1q_s');
	var x = document.getElementById('1q');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/q1.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  } 
	var checkbox = document.getElementById('1tt_s');
	var x = document.getElementById('1tt');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/tt.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  }
	var checkbox = document.getElementById('1sem_s');
	var x = document.getElementById('1sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/sem1.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  } 
	  
}

function changeimg220912_2(){
	var x = document.getElementById("2z_s").value;
	document.getElementById("2z").src = x;
	var x = document.getElementById("2t_s").value;
	document.getElementById("2t").src = x;
	var checkbox = document.getElementById('2tu_s');
	var x = document.getElementById('2tu');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/torn_u.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  }
	var x = document.getElementById("2s_s").value;
	document.getElementById("2s").src = x;
	var checkbox = document.getElementById('2sw_s');
	var x = document.getElementById('2sw');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/sw.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  } 
	var checkbox = document.getElementById('2q_s');
	var x = document.getElementById('2q');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/q2.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  } 
	var checkbox = document.getElementById('2tt_s');
	var x = document.getElementById('2tt');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/tt_d.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  }
	var checkbox = document.getElementById('2sem_s');
	var x = document.getElementById('2sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/sem1.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  }
	var checkbox = document.getElementById('2sem2_s');
	var x = document.getElementById('2sem2');
	  if (checkbox.checked) {
		x.src = 'assets/img/220912/sem2.png';
	  } else {
	    x.src = 'assets/img/220912/none.png';
	  }
}

//221210 Kasumi
function changeimg221210_1(){
	var x = document.getElementById("1bg_s").value;
	document.getElementById("1bg").src = x;
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var x = document.getElementById("1t_s").value;
	document.getElementById("1t").src = x;
	var x = document.getElementById("1r_s").value;
	document.getElementById("1r").src = x;
	var x = document.getElementById("1s_s").value;
	document.getElementById("1s").src = x;
	var x = document.getElementById("1tf_s").value;
	document.getElementById("1tf").src = x;
	var checkbox = document.getElementById('1sc_s');
	var x = document.getElementById('1sc');
	  if (checkbox.checked) {
		x.src = 'assets/img/221210/sc.png';
	  } else {
	    x.src = 'assets/img/221210/none.png';
	  } 
	var checkbox = document.getElementById('1cap_s');
	var x = document.getElementById('1cap');
	  if (checkbox.checked) {
		x.src = 'assets/img/221210/cap.png';
	  } else {
	    x.src = 'assets/img/221210/none.png';
	  } 
}

function changeimg221210_2(){
	var x = document.getElementById("2bg_s").value;
	document.getElementById("2bg").src = x;
	var x = document.getElementById("2z_s").value;
	document.getElementById("2z").src = x;
	var x = document.getElementById("2t_s").value;
	document.getElementById("2t").src = x;
	var x = document.getElementById("2r_s").value;
	document.getElementById("2r").src = x;
	var x = document.getElementById("2s_s").value;
	document.getElementById("2s").src = x;
	var x = document.getElementById("2tf_s").value;
	document.getElementById("2tf").src = x;
	var checkbox = document.getElementById('2sem_s');
	var x = document.getElementById('2sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/221210/sem.png';
	  } else {
	    x.src = 'assets/img/221210/none.png';
	  } 
	var checkbox = document.getElementById('2cap_s');
	var x = document.getElementById('2cap');
	  if (checkbox.checked) {
		x.src = 'assets/img/221210/cap.png';
	  } else {
	    x.src = 'assets/img/221210/none.png';
	  } 
}

//230404 Illya
function changeimg230404_1(){
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var checkbox = document.getElementById('1b_s');
	var x = document.getElementById('1b');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/body2.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  }
	  var x = document.getElementById("1bz_s").value;
	  document.getElementById("1bz").src = x;
	var checkbox = document.getElementById('1r_s');
	var x = document.getElementById('1r');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/r.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  }
	var x = document.getElementById("1s_s").value;
	document.getElementById("1s").src = x;
	var checkbox = document.getElementById('1q_s');
	var x = document.getElementById('1q');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/q1.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  } 
	var checkbox = document.getElementById('1sem_s');
	var x = document.getElementById('1sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/s2.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  } 
}

function changeimg230404_2(){
	var x = document.getElementById("2z_s").value;
	document.getElementById("2z").src = x;
	var checkbox = document.getElementById('2s_s');
	var x = document.getElementById('2s');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/s_o_d.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  }
	var checkbox = document.getElementById('2q_s');
	var x = document.getElementById('2q');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/q2.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  } 
	var checkbox = document.getElementById('2sem_s');
	var x = document.getElementById('2sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/230404/s1.png';
	  } else {
	    x.src = 'assets/img/230404/none.png';
	  }
}


//230507 Barbara
function changeimg230507_1(){
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var x = document.getElementById("1t_s").value;
	document.getElementById("1t").src = x;
	var x = document.getElementById("1k_s").value;
	document.getElementById("1k").src = x;
	var x = document.getElementById("1g_s").value;
	document.getElementById("1g").src = x;
	var x = document.getElementById("1s_s").value;
	document.getElementById("1s").src = x;
}

function changeimg230507_2(){
	var x = document.getElementById("2z_s").value;
	document.getElementById("2z").src = x;
	var x = document.getElementById("2k_s").value;
	document.getElementById("2k").src = x;
	var x = document.getElementById("2g_s").value;
	document.getElementById("2g").src = x;
	var checkbox = document.getElementById('2sem_s');
	var x = document.getElementById('2sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/230507/sem.png';
	  } else {
	    x.src = 'assets/img/230507/none.png';
	  }
}

//230623 Siver Hair Girl
function changeimg230623_1(){
	var x = document.getElementById("1z_s").value;
	document.getElementById("1z").src = x;
	var x = document.getElementById("1t_s").value;
	document.getElementById("1t").src = x;
	var checkbox = document.getElementById('1tu_s');
	var x = document.getElementById('1tu');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/torn_u.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  }
	var checkbox = document.getElementById('1td_s');
	var x = document.getElementById('1td');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/torn_d.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
	var x = document.getElementById("1s_s").value;
	document.getElementById("1s").src = x;
	var checkbox = document.getElementById('1r1_s');
	var x = document.getElementById('1r1');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/r1.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
	var checkbox = document.getElementById('1r2_s');
	var x = document.getElementById('1r2');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/r2.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
	var checkbox = document.getElementById('1drip_s');
	var x = document.getElementById('1drip');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/drip.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
}

function changeimg230623_2(){
	var x = document.getElementById("2z_s").value;
	document.getElementById("2z").src = x;
	var x = document.getElementById("2t_s").value;
	document.getElementById("2t").src = x;
	var checkbox = document.getElementById('2tu_s');
	var x = document.getElementById('2tu');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/torn_u.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  }
	var checkbox = document.getElementById('2td_s');
	var x = document.getElementById('2td');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/torn_d.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
	var x = document.getElementById("2s_s").value;
	document.getElementById("2s").src = x;
	var checkbox = document.getElementById('2r1_s');
	var x = document.getElementById('2r1');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/r1.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
	var checkbox = document.getElementById('2r2_s');
	var x = document.getElementById('2r2');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/r2.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  } 
	var checkbox = document.getElementById('2cd_s');
	var x = document.getElementById('2cd');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/cd.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  }
	var checkbox = document.getElementById('2drip_s');
	var x = document.getElementById('2drip');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/drip.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  }
	var checkbox = document.getElementById('2sem_s');
	var x = document.getElementById('2sem');
	  if (checkbox.checked) {
		x.src = 'assets/img/230623/sem.png';
	  } else {
	    x.src = 'assets/img/230623/none.png';
	  }
}

//240226 Carmine
function changeimg240226(){
	var x = document.getElementById("bs_s").value;
	document.getElementById("bs").src = x;
	var checkbox = document.getElementById('t_s');
	var x = document.getElementById('t');
	  if (checkbox.checked) {
		x.src = 'assets/img/240226/torn.png';
	  } else {
	    x.src = 'assets/img/240226/none.png';
	  }
	var checkbox = document.getElementById('b_s');
	var x = document.getElementById('b');
	  if (checkbox.checked) {
		x.src = 'assets/img/240226/ban.png';
	  } else {
	    x.src = 'assets/img/240226/none.png';
	  } 
	var checkbox = document.getElementById('se_s');
	var x = document.getElementById('se');
	  if (checkbox.checked) {
		x.src = 'assets/img/240226/se.png';
	  } else {
	    x.src = 'assets/img/240226/none.png';
	  } 
}
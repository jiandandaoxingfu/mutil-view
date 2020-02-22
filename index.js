function showKeyName(e) {
	// reference: https://www.cnblogs.com/zzcflying/articles/2660061.html
	var keyName;
	switch (e.keyCode) {
		case 8:
			keyName = "退格";				break;		case 9:
			keyName = "Tab";				break;		case 13:
			keyName = "Enter";				break;		case 16:
			keyName = "Shift";				break;		case 17:
			keyName = "Ctrl";				break;		case 18:
			keyName = "Alt";				break;		case 19:
			keyName = "Pause	Break";		break;		case 20:
			keyName = "Caps Lock";			break;		case 27:
			keyName = "Esc";				break;		case 32:
			keyName = "空格";				break;		case 33:
			keyName = "PageUp";				break;		case 34:
			keyName = "PageDown";			break;		case 35:
			keyName = "End";				break;		case 36:
			keyName = "Home";				break;		case 37:
			keyName = "方向键左";			break;		case 38:
			keyName = "方向键上";			break;		case 39:
			keyName = "方向键右";			break;		case 40:
			keyName = "方向键下";			break;		case 45:
			keyName = "Insert";				break;		case 46:
			keyName = "Delete";				break;		case 91:
			keyName = "左Win";				break;		case 92:
			keyName = "右Win";				break;		case 93:
			keyName = "快捷菜单键";			break;		case 95:
			keyName = "Sleep";				break;		case 96:
			keyName = "小键盘区0";			break;		case 97:
			keyName = "小键盘区1";			break;		case 98:
			keyName = "小键盘区2";			break;		case 99:
			keyName = "小键盘区3";			break;		case 100:
			keyName = "小键盘区4";			break;		case 101:
			keyName = "小键盘区5";			break;		case 102:
			keyName = "小键盘区6";			break;		case 103:
			keyName = "小键盘区7";			break;		case 104:
			keyName = "小键盘区8";			break;		case 105:
			keyName = "小键盘区9";			break;		case 106:
			keyName = "*";					break;		case 107:
			keyName = "+";					break;		case 109:
			keyName = "-";					break;		case 110:
			keyName = ".";					break;		case 111:
			keyName = "/";					break;		case 112:
			keyName = "F1";					break;		case 113:
			keyName = "F2";					break;		case 114:
			keyName = "F3";					break;		case 115:
			keyName = "F4";					break;		case 116:
			keyName = "F5";					break;		case 117:
			keyName = "F6";					break;		case 118:
			keyName = "F7";					break;		case 119:
			keyName = "F8";					break;		case 120:
			keyName = "F9";					break;		case 121:
			keyName = "F10";				break;		case 122:
			keyName = "F11";				break;		case 123:
			keyName = "F12";				break;		case 144:
			keyName = "NumLock";			break;		case 145:
			keyName = "ScrollLock";			break;		case 186:
			keyName = ";";					break;		case 187:
			keyName = "=";					break;		case 188:
			keyName = ",";					break;		case 189:
			keyName = "-";					break;		case 190:
			keyName = ".";					break;		case 191:
			keyName = "/";					break;		case 192:
			keyName = "`";					break;		case 219:
			keyName = "[";					break;		case 220:
			keyName = "\\";					break;		case 221:
			keyName = "]";					break;		case 222:
			keyName = "'";					break;		case 255:
			keyName = "Wake";				break;		default:
			keyName = "" + String.fromCharCode(e.keyCode) + "";	break;	}
	if ((e.shiftKey) && (e.keyCode != 16)) {
		keyName = "Shift + " + keyName;
	}
	if ((e.altKey) && (e.keyCode != 18)) {
		keyName = "Alt + " + keyName;
	}
	if ((e.ctrlKey) && (e.keyCode != 17)) {
		keyName = "Ctrl + " + keyName;
	}
	return keyName;
}

var main, view1, view2, view3, view4;

document.addEventListener('keydown', e => {
	main = document.querySelector('#main');
	view1 = document.querySelector('#view1');
	view2 = document.querySelector('#view2');
	view3 = document.querySelector('#view3');
	view4 = document.querySelector('#view4');
	switch( showKeyName(e) ) {
		case 'Alt + Shift + 1': 
			view_1_1();
			break;
		case 'Alt + Shift + 2':
			view_1_2();
			break;
		case 'Alt + Shift + 3': 
			view_1_3();
			break;
		case 'Alt + Shift + 4':
			view_1_4();
			break;
		case 'Alt + Shift + 5': 
			view_2_2();
			break;
		case 'Alt + Shift + 6':
			view_4_1();
			break;
		case 'Alt + Shift + 7': 
			view_3_1();
			break;
		case 'Alt + Shift + 8': 
			view_2_1();
			break;
		case 'Alt + Shift + 9':
			view_1_1();
			break;
		default:
			break;
	}
})

function display_none(eles) {
	eles.forEach( ele => ele.style.display = 'none' );
}

function display_block(eles) {
	eles.forEach( ele => ele.style.display = 'block' );
}

function view_1_1() {
	display_none([view2, view3, view4]);
	main.setAttribute('class', 'view_1_1');
}

function view_1_2() {
	display_block([view2]);
	display_none([view3, view4]);
	main.setAttribute('class', 'view_1_2');
}

function view_1_3() {
	display_block([view2, view3]);
	display_none([view4]);
	main.setAttribute('class', 'view_1_3');
}

function view_1_4() {
	display_block([view2, view3, view4]);
	main.setAttribute('class', 'view_1_4');
}

function view_2_2() {
	display_block([view2, view3, view4]);
	main.setAttribute('class', 'view_2_2');
}

function view_4_1() {
	display_block([view2, view3, view4]);
	main.setAttribute('class', 'view_4_1');
}

function view_3_1() {
	display_block([view2, view3]);
	display_none([view4]);
	main.setAttribute('class', 'view_3_1');
}

function view_2_1() {
	display_block([view3, view4]);
	display_none([view2]);
	main.setAttribute('class', 'view_2_1');
}

document.addEventListener('click', e => {
	e.preventDefault();
	if( e.target.tagName.toLowerCase() === 'button' ) {
		let action = e.target.innerText;
		if( action === "Go" ) {
			let url = e.target.parentElement.previousElementSibling.value;
			e.target.parentElement.parentElement.style.display = 'none';
			e.target.parentElement.parentElement.parentElement.nextElementSibling.src = url;
		}
	}
})
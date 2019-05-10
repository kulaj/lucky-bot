var CONFIG_SPEED=1
var CONFIG_DEFAULT_BET=0.00000001
var CONFIG_INTELLIGENT_BET=false

function sleep(ms){return new Promise(resolve=>setTimeout(resolve,ms));}
function roll_over(){document.getElementById('rollOver').click()}
function roll_under(){document.getElementById('rollUnder').click()}
function make_roll(){document.getElementById('playBtn').click()}
function is_win(){return document.getElementsByClassName('tbody')[0].firstElementChild.className=='tr win'}
function get_id(){return document.getElementsByClassName('tbody')[0].firstElementChild.id}
function reset_bet_amount(){document.getElementById('betAmount').value=(CONFIG_INTELLIGENT_BET?document.getElementById('balance').value/300000:CONFIG_DEFAULT_BET)}
function double_bet_amount(){document.getElementById('multiplyBet').click()}

reset_bet_amount()
while(true){
	last=get_id()
	if(Math.round(Math.random())){roll_over()}
	else{roll_under()}
	make_roll()
	while(last==get_id()){await sleep(1000/CONFIG_SPEED)}
	if(is_win()){reset_bet_amount()}
	else{double_bet_amount()}
}
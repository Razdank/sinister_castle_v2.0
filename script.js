var bod = document.getElementById('bod');
var bloc = document.getElementById('blocc');
var time = document.getElementById('time');
var menu = document.getElementById('menu');
var information = document.getElementById('information');
var dead = document.getElementById('dead');
var infohero = document.getElementById('infohero');
var infohero2 = document.getElementById('infohero2');
var infohero3 = document.getElementById('infohero3');
var infohero0 = document.getElementById('infohero0');
var battle = document.getElementById('battle');
var heroname = document.getElementById('heroname');
var enemy_name = document.getElementById('enemy_name');
var heroimage = document.getElementById('heroimage');
var enemyimage = document.getElementById('enemyimage');
var attack1 = document.getElementById('attack1');
var attack2 = document.getElementById('attack2');
var attack3 = document.getElementById('attack3');
var attack4 = document.getElementById('attack4');
var attack5 = document.getElementById('attack5');
var attack01 = document.getElementById('attack01');
var attack02 = document.getElementById('attack02');
var attack03 = document.getElementById('attack03');
var attackx = document.getElementById('attackx');
var question = document.getElementById('question');
var question2 = document.getElementById('question2');
var question2_2 = document.getElementById('question2_2');
var attack11 = document.getElementById('attack11');
var attack12 = document.getElementById('attack12');
var attack13 = document.getElementById('attack13');
var question1_1 = document.getElementById('question1_1');
var question3 = document.getElementById('question3');
var question3_3 = document.getElementById('question3_3');
var attack21 = document.getElementById('attack21');
var attack22 = document.getElementById('attack22');
var attack23 = document.getElementById('attack23');
var question1_2 = document.getElementById('question1_2');
var question4 = document.getElementById('question4');
var attack31 = document.getElementById('attack31');
var attack32 = document.getElementById('attack32');
var attack33 = document.getElementById('attack33');
var question1_3 = document.getElementById('question1_3');
var question5 = document.getElementById('question5');
var audio2 = document.getElementById('audio2');
var audio = document.getElementById('audio');
var room = document.getElementById('room');
var over1 = document.getElementById('over1');
var restart = document.getElementById('restart'); //кнопка рестарта
var weaponinformation = document.getElementById('weaponinformation');
var weaponinformation2 = document.getElementById('weaponinformation2');
var mainimg = document.getElementById('mainimg');
var secret = document.getElementById('secret');
var question_save = document.getElementById('question_save');
var question1_1 = document.getElementById('question1_1');
var question_save2 = document.getElementById('question_save2');
var attacksave1 = document.getElementById('attacksave1');
var attacksave2 = document.getElementById('attacksave2');
var attacksave3 = document.getElementById('attacksave3');
var startgameload = document.getElementById('startgameload'); //Загрузка
var recordid = document.getElementById('recordid'); //Сейв
var trade1 = document.getElementById('trade1'); //Торговец
trade1.style.left="-80px";
trade1.style.top="-80px";
trade1.style.display="none"
var dialogWithBuy=document.getElementById('dialogWithBuy');
var shop=document.getElementById('shop');
shop.style.display="none";
audio2.volume = 0.1; // Звук битвы
audio.volume = 0.1; // Звук темы
attackx.style.display="none";
battle.style.display="none"
information.style.display="none";
dead.style.display="none";
var move = false; //Math.floor(Math.random() * (2 - 0)) + 0; от 1 до 0
var current_hero = 0; // Текущий герой
var current_enemy = 0; // Текущий враг
var item_drop = 0; //Предмет на дроп
var relic_drop = 0 //Реликвия на дроп
var disposable_items_drop = 0; //1-разовый предмет на дроп
var weapondrop = 0; //Оружие на дроп
var mimikdrop = 0; //Мимик на дроп
var trade_drop = 0; //Торговец на дроп
var hero = []; // Структура героев
var enemy = []; // Структура врагов
var item = []; //Структура предметов
var relics = []; //Структура реликвий
var disposable_items = []; //Структура 1-разовых предметов 
var weapons = []; //Структура оружия
var nextlevel = 14; //Опыта до нового уровня
var roomnumber = 0; //Комната на старте
var menustart=document.getElementById('menustart');
var next=document.getElementById('next');
var before=document.getElementById('before');
var startgame=document.getElementById('startgame');
var instruct=document.getElementById('instruct');
var itemmax = 5; //макс Предметов на дроп
var relic_max = 5 //макс Реликвий на дроп
var disposable_items_max = 14; //макс 1-разовых предметов на дроп
var weaponmax = 9; //макс оружия на дроп
var ban = 0; //Разданк
var savepoint = document.getElementById('savepoint');
var deadd = false;
var loadif = false;
var disease = false; // Болезнь
var poison = false; // Яд
var blood = false; // Кровотечение
var current_enemy2 = 0; //Для мимика и тд
var instruction = document.getElementById('instruction'); //Окна с инфой
instruction.style.top="110px";
instruction.style.left="420px";
var lore = document.getElementById('lore');
lore.style.top="110px";
lore.style.left="772px";
var about_game = document.getElementById('about_game');
about_game.style.top="216px";
about_game.style.left="420px";
var records = document.getElementById('records');
records.style.top="216px";
records.style.left="772px";
savepoint.style.left="560px";
savepoint.style.top="560px";
var full_information = document.getElementById('full_information');
var closee = document.getElementById('close');
var mapgenerate = 0; //Вид уровня
var key1 = key2 =key3 = key4 = 0; //Передвижение
var noo=0; //Кот
var money=0; //Монеты
var exitBuy=document.getElementById('exitBuy');
var buy1=document.getElementById('buy1');
var buy2=document.getElementById('buy2');
var buy3=document.getElementById('buy3');
var buy3=document.getElementById('buy3');
var nickname_field=document.getElementById('nickname_field');
var nickname_field2=document.getElementById('nickname_field2');
var winornot=document.getElementById('winornot');
var price1=0;
var price2=0;
var price3=0;
var buy1drop=0;
var buy2drop=0;
var buy3drop=0;
var nickname = "";
var maxenemy=26; // Враги
var moneydrop=0; //Монеты за врага
instruction.addEventListener('click', function(){ //Инструкция
	full_information.style.display="block";
	predinstruct.innerHTML='<h1 class="allin2" align="center">Инструкция</h1>';
	instruct.innerHTML='<h3 class="allin2">Движение</h3>В игре \"Зловещий замок\" движение осуществляется посредством нажатия кнопок со стрелочками на клавиатуре: <br> \"←\" - движение влево, <br> \"→\" - движение вправо, <br> \"↑\" - движение вверх, <br> \"↓\" - движение вниз';
	instruct.innerHTML+='<br><br><h3 class="allin2">Меню персонажа</h3> В меню персонажа описаны все текущие характеристики вашего персонажа, количество пройденных комнат, а также показаны взятые предмет, реликвия и оружие. <br> Открывается на клавишу \"Ё\" на клавиатуре. <br> Атаки и лечение варьируются от минимальной до максимальной величины. <br> При слабой атаке персонаж получает 1 дополнительное очко опыта.';
	instruct.innerHTML+='<br><br><h3 class="allin2">Открытие сундуков</h3> Для того, чтобы открыть сундук, нужно к нему подойти и открыть. При открытии сундука сундука у вас будет выбор: взять содержимое или нет. Если у вас имеется предмет, то он будет заменён на предмет из сундука, аналогично с реликвиями и оружием. В сундуке, находящемся в левом верхнем углу экрана находятся только предметы, которые можно взять с собой, а сундуке, находящемся в правом верхнем углу, только одноразовые предметы, в сундуке, находящемся в левом нижнем углу, только реликвии, в сундуке, находящемся в правом нижнем углу, только оружие.';
	instruct.innerHTML+='<br><br><h3 class="allin2">Сохранение</h3> Для того, чтобы сохраниться, нужно подойти к сфере в середине нижней части уровня. При сохранении исчезнут все сундуки и торговец.';
	instruct.innerHTML+='<br><br><h3 class="allin2">Загрузка сохранённой игры</h3> Для того, чтобы загрузить игру, нужно в главном меню нажать кнопку \"Загрузить игру\". Если вы умерли в своём путешествии или начали новую игру, то сохранение удалится.';
	instruct.innerHTML+='<br><br><h3 class="allin2">Бой</h3> Если вы вступите в бой с каким-либо врагом, то появится окно битвы. В левой части окна битвы находятся ваши возможные действия, а в правой части события битвы. Если вас убьют, то вы проиграете.';
	instruct.innerHTML+='<br><br><h3 class="allin2">Торговля</h3> После победы над врагом, вы получаете монеты. В ходе игры вы можете встретить торговца в середине верхней части уровня, у которого вы можете обменять монеты на предметы, оружие и реликвии.';
	instruct.innerHTML+='<br><br><h3 class="allin2">Действия взятых вещей</h3> Предмет, который можно взять с собой, можно использовать только во время боя, при этом ход не будет пропущен. Одноразовый предмет можно использовать только сразу при взятии из сундука. Реликвия действует как пассивный эффект во время боя после хода игрока. В зависимости от взятого оружия ваши атаки могут быть другими.'
	instruct.innerHTML+='<br><br><h3 class="allin2">Сохранение рекорда</h3> Для сохранения рекорда после поражения или прохождения игры, необходимо ввести ваш никнейм, состоящий только из букв латинского алфавита или кириллицы, знаков \" \" или \"_\", также его длина должна быть больше 0 и не превышать 20 символов.'
});
lore.addEventListener('click', function(){//Лор
	full_information.style.display="block";
		predinstruct.innerHTML='<h1 class="allin2" align="center">Предыстория</h1>';
		instruct.innerHTML='<h3 class="allin2">Крестоносец Миколла</h3> Этот бравый муж отправился в крестовый поход на Иерусалим по поручению папы римского Инокетия IV. Уже 2 года он в походе, по поручению командира ваш отряд отправили зачистить от еретиков не отмеченный на картах замок, дабы он служил аванпостом. Но чем ближе отряд продвигался к замку, тем больше они понимали предупреждения местных жителей, чем ближе они приближались к замку тем более неведомых тварей они видели. Зайдя в замок Миколла обнаружил, что из отряда остался только он, крестоносец хотел пойти за подкреплением, но двери за ним закрылись. Теперь ему придётся очищать от еретиков весь замок. Готовы ли вы, взять на себя судьбу крестоносца? Ave Maria!';
		instruct.innerHTML+='<br><br><h3 class="allin2">Огр Турк</h3> Пол своей жизни он провел в пещере, куда постоянно заходили приключенцы со словами \"может хотя бы с него дропнется сокровище стража\", именно после этой фразы Тукр обрёл смысл жизни, в поиске сокровища стража, по совместительству из слов он знал: Тукр, хотеть, сокровище, стража. И так с невероятной мечтой и довольно скудным словарным запасом, он отправился в приключение, обойдя уже 36 замков и съев одного короля, Тукр так и не смог найти свою мечту,хотя у него было и сокровище короля, и золотой Грааль, но всё это было чем то не тем, он себя всегда утешал говоря \"Турк хотеть сокровище стража!\". И вот перед ним встал его 37 замок, идя к его дверям он встретил сильное сопротивление, но продвигался всё дальше и дальше, говоря про себя :\"Турк хотеть сокровище стража\", зайдя в замок он уже чуял, что он близок к цели, хотя это он чувствовал и в предыдущих замках, но здесь это чувство усилилось. Готовы ли вы разделить судьбу этого создания? \"Вы хотеть сокровище стража?\"';
		instruct.innerHTML+='<br><br><h3 class="allin2">Жрец моря Сонгшторм</h3> Этот жрец исповедует веру в моря веря в то что в далёких морях, на самой глубине есть великий город Неолота в которой восседает великий бог Нептулион. И вот после службы, идя домой, он увидел плачащую, израненную девушку, спрося что случилось с ней, он узнал, что в замке, находящемся неподалёка, завелась нечистая сила, которая покалечила девушку. Жрец не мог остаться равнодушным и через день он отправился очистить его. Войдя в владения, на него напал доселе невиданный монстр, что подтверждало слова девушки. Зайдя в замок жрец почти перестал чувствовать, присутствие тех сил что помогали ему, хотел он пойти за подмогой, но слишком поздно он заметил что дверь за ним закрылась, и жрец остался один на один со всей порчей замка. Готовы ли вы разделить судьбу чистосердечного Сонгшторма? \"Вот чёрт?\".';
		instruct.innerHTML+='<br><br><h3 class="allin2">Лорд Райзус</h3> Этот молодой, коррумпированный наместник целой провинции, был понижен указом великого Императора, до губернатора самого крайнего из поселений империи, и всё из-за чего какой то жалкой недостачи в Императорскую казну в 10 тонн золота. Но почему же не посадить нерадивого чиновника, а потому, что сей господин мог делать деньги буквально из воздуха, по слухам он мог выбить деньги даже из мухи пролетающей мимо него, так что такой кадр упускать было нельзя. Добравшись на своё новое место юный лорд, особо не доверяющий слухам обычной черни о зловещем замке, хотел навестить его и познакомиться с хозяином, заручиться поддержкой верхушки этого общества, ну и за одно обложить их налогами. Подойдя к замку, и стряся по ходу с местных неказистых садовников ещё с десяток золотых, лорд обнаружил что замок почти пустовал, но это его не остановило. Зайдя в прихожую за ним тут же захлопнулась дверь \"Вот это технологии!\" удивился он. Впереди в каком то тумане по видимому стоял дворецкий... Готовы ли разделить судьбу жадного чиновники, способны ли вы обложить налогами ужасный замок? \"Денег много не бывает\".';
});
about_game.addEventListener('click', function(){//Об игре
	full_information.style.display="block";
	predinstruct.innerHTML='<h1 class="allin2" align="center">Об игре</h1>';
	instruct.innerHTML="\"Зловещий замок\", версия 1.0. Игру разработали студенты ККМТ из группы П1-16: Семенов Дмитрий, Партанский Илья и Грибков Даниил 12 июня 2019 года.";
	instruct.innerHTML+="<br> ©Семенов Дмитрий, Партанский Илья и Грибков Даниил, 2019.";
});
records.addEventListener('click', function(){//Рекорды
	full_information.style.display="block";
	predinstruct.innerHTML='<h1 class="allin2" align="center">Рекорды</h1>';
	var localrecord = localStorage.getItem('record');
	if (localrecord!=null){
		var splitrecord = localrecord.split('|');
		instruct.innerHTML="";
		var strokinstruct='<table class="table1"><tr><td class="bvm5">Никнейм</td><td class="bvm5">Герой</td><td class="bvm5">Количество пройденных комнат</td></tr>';
		for (var i=0; i<splitrecord.length-1; i++){
			strokinstruct+='<tr>';
			var splitplus=splitrecord[i].split('#');
			for (var j=0; j<splitplus.length; j++){
				strokinstruct+='<td class="bvm4">'+splitplus[j]+'</td>';
			}
			strokinstruct+='</tr>';
		}
		strokinstruct+='</table>';
	instruct.innerHTML=strokinstruct;
	} else {
		instruct.innerHTML="Ещё не сохранено ни одного рекорда.";
	}
});
recordid.addEventListener('click', function(){//Сохранение рекорда
	nickname=nickname_field.value;
	var flag_accept=true;
	if ((nickname.length>=20)||(nickname.length==0)){
		flag_accept=false;} 
	else	
		for (var i=0;i<nickname.length;i++){
		if (!(nickname[i]>='A' && nickname[i]<='Z')&&!(nickname[i]>='a' && nickname[i]<='z') &&!(nickname[i]>='А' && nickname[i]<='п')&&!(nickname[i]>='р' && nickname[i]<='я')&&!(nickname[i]>='0' && nickname[i]<='9')&&(nickname[i]!=' ')&&(nickname[i]!='_')){
			flag_accept=false;
		} 
	}
	if (flag_accept){
	nickname_field2.style.display="none";
	recordid.style.display="none";
	nickname_field.style.display="none";
	var localrecord = localStorage.getItem('record');
	if (localrecord==null){
		localrecord="";
		localrecord+=nickname + "#" + hero[current_hero].name + "#" + roomnumber + "|";
		localStorage.setItem('record', localrecord);
	} else {
		var splitrecord2 = localrecord.split('|');
		if (splitrecord2.length>2){ //Если больше 1 сейва
			var flag=false;
			var i=0;
			if (roomnumber>= +splitrecord2[0].split('#')[2]){ //Если самое большое число
				localrecord=nickname + "#" + hero[current_hero].name + "#" + roomnumber + "|" + localrecord;
			} else if (roomnumber<= +splitrecord2[splitrecord2.length-2].split('#')[2]){ //Если самое маленькое число
				localrecord+=nickname + "#" + hero[current_hero].name + "#" + roomnumber + "|";
			} else {
			localrecord="";
			while ((flag==false)&&(i<splitrecord2.length)){
				if ((roomnumber<= +splitrecord2[i].split('#')[2])&&(roomnumber>= +splitrecord2[i+1].split('#')[2])){
					for (var j=0; j<i+1; j++){
						localrecord+=splitrecord2[j]+"|";
					}
					localrecord+=nickname + "#" + hero[current_hero].name + "#" + roomnumber + "|";
					for (var j=i+1; j<splitrecord2.length-1; j++){
						localrecord+=splitrecord2[j]+"|";
					}
					flag=true;
				}
				i++;
			}
		}
		}
		else { //Если 1 сейв
			if (roomnumber>= +splitrecord2[0].split('#')[2]){ //!
				localrecord=nickname + "#" + hero[current_hero].name + "#" + roomnumber + "|"+localrecord;
			} else {
				localrecord+=nickname + "#" + hero[current_hero].name + "#" + roomnumber + "|";
			}
		}
		localStorage.setItem('record', localrecord);
	}}
	else {//Если ник с ошибкой
		nickname_field2.style.display="block";
	}
});
closee.addEventListener('click', function(){
	full_information.style.display="none";
});
room.innerHTML='<div class="bvm">Количество пройденных комнат: '+roomnumber+'</div>';
next.addEventListener('click',function(){
	current_hero++;
	if (current_hero==4){
		current_hero=0;
	};
	if (current_hero==0){
		bloc.className="blocc";
	} else if (current_hero==1){
		bloc.className="herro11";
	} else if (current_hero==2){
		bloc.className="herro21";
	}else if (current_hero==3){
		bloc.className="herro31";
	}
		infohero0.innerHTML='<div class="bvm3">Герой: '+hero[current_hero].name+'</div><div class="bvm3">Здоровье: '+hero[current_hero].hp+'/'+hero[current_hero].hpm+'</div><div class="bvm3">Слабая атака: '+(hero[current_hero].atc1+weapons[0].atc1)+'-'+(hero[current_hero].atc12+weapons[0].atc12)+'<br>Сильная атака: '+(hero[current_hero].atc2+weapons[0].atc2)+'-'+(hero[current_hero].atc22+weapons[0].atc22)+ '</div><div class="bvm3">Способность: '+hero[current_hero].sposinfo+'<hr color="black">Зарядов особой способности: '+hero[current_hero].spos+'</div><div class="bvm3">Лечение: '+hero[current_hero].heal+'-'+hero[current_hero].heal2+'</div>';
});
before.addEventListener('click', function(){
	current_hero--;
	if (current_hero==-1){
		current_hero=3;
	};
	if (current_hero==0){
		bloc.className="blocc";
	} else if (current_hero==1){
		bloc.className="herro11";
	}else if (current_hero==2){
		bloc.className="herro21";
	}else if (current_hero==3){
		bloc.className="herro31";
	}
			infohero0.innerHTML='<div class="bvm3">Герой: '+hero[current_hero].name+'</div><div class="bvm3">Здоровье: '+hero[current_hero].hp+'/'+hero[current_hero].hpm+'</div><div class="bvm3">Слабая атака: '+(hero[current_hero].atc1+weapons[0].atc1)+'-'+(hero[current_hero].atc12+weapons[0].atc12)+'<br>Сильная атака: '+(hero[current_hero].atc2+weapons[0].atc2)+'-'+(hero[current_hero].atc22+weapons[0].atc22)+ '</div><div class="bvm3">Способность: '+hero[current_hero].sposinfo+'<hr color="black">Зарядов особой способности: '+hero[current_hero].spos+'</div><div class="bvm3">Лечение: '+hero[current_hero].heal+'-'+hero[current_hero].heal2+'</div>';
});
startgame.addEventListener('click', function(){
	audio.play();	
	levelconstruction(1);
	nickname_field.value="";
	audio.currentTime = 0.0;
	audio2.src="au2.wav";
	move=true;
	localStorage.removeItem('save');
	menustart.style.display="none";
	current_enemy = Math.floor(Math.random() * (maxenemy+1 - 0)) + 0; //Выбор случайного текущего врага
	enemyimage.className="";
	if (current_hero==0){
		bloc.className="blocc";
	} else if (current_hero==1){
		bloc.className="herro11";
	} else if (current_hero==2){
		bloc.className="herro21";
	} else if (current_hero==3){
		bloc.className="herro31";
	}
	heroimage.className="";
	menu.style.left="-216px";
	hero[current_hero].atc1 = hero[current_hero].atc1 + weapons[hero[current_hero].weaponid].atc1;
	hero[current_hero].atc12 = hero[current_hero].atc12 + weapons[hero[current_hero].weaponid].atc12;
	hero[current_hero].atc2 = hero[current_hero].atc2 + weapons[hero[current_hero].weaponid].atc2;
	hero[current_hero].atc22 = hero[current_hero].atc22 + weapons[hero[current_hero].weaponid].atc22;
});
//Герои
hero[0] = {
	name: "Крестоносец Миккола",
	hpm: 10,	
	hp: 10,
	atc1:  0,
	atc12: 1,
	atc2: 0,
	atc22: 1,
	heal: 1,
	heal2: 3,
	exp: 0,
	lvl: 0,
	spos: 2, 
	sposinfo: "\"Сокрушающий удар\" - наносит 10 урона противнику в битве",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
hero[1] = {
	name: "Огр Турк",
	hpm: 16,	
	hp: 16,
	atc1:  0,
	atc12: 0,
	atc2: 0,
	atc22: 1,
	heal: 1,
	heal2: 2,
	exp: 0,
	lvl: 0,
	spos: 3, 
	sposinfo: "\"Поедание краба\" - восстанавливает 5 здоровья",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
hero[2] = {
	name: "Жрец моря Сонгшторм",
	hpm: 10,	
	hp: 10,
	atc1:  0,
	atc12: 0,
	atc2: 0,
	atc22: 0,
	heal: 2,
	heal2: 4,
	exp: 0,
	lvl: 0,
	spos: 2, 
	sposinfo: "\"Морская волна\" - полностью восстанавливает здоровье",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
hero[3] = {
	name: "Лорд Райзус",
	hpm: 12,	
	hp: 8,
	atc1:  -1,
	atc12: 2,
	atc2: -2,
	atc22: 3,
	heal: -1,
	heal2: 4,
	exp: 0,
	lvl: 0,
	spos: 4, 
	sposinfo: "\"Обшаривание карманов\" - украсть у врага 8-16 монет",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
//Враги
enemy[0] = {
	name: "Гигантский червь",
	hpm: 4,	
	hp: 4,
	atc1: 1,
	atc12: 2,
	atc2: 2,
	atc22: 3,
	exp: 2
};
enemy[1] = {
	name: "Кабан",
	hpm: 7,	
	hp: 7,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 4,
	exp: 2
};
enemy[2] = {
	name: "Волк",
	hpm: 6,
	hp: 6,
	atc1: 1,
	atc12: 2,
	atc2: 2,
	atc22: 4,
	exp: 2
};
enemy[3] = {
	name: "Оборотень",
	hpm: 10,
	hp: 10,
	atc1: 1,
	atc12: 3,
	atc2: 4,
	atc22: 5,
	exp: 5
};
enemy[4] = {
	name: "Огромный паук",
	hpm: 6,
	hp: 6,
	atc1: 1,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 1
};
enemy[5] = {
	name: "Змея",
	hpm: 5,
	hp: 5,
	atc1: 1,
	atc12: 3,
	atc2: 2,
	atc22: 3,
	exp: 3
};
enemy[6] = {
	name: "Воин",
	hpm: 10,
	hp: 10,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 5,
	exp: 4
};
enemy[7] = {
	name: "Лечащий тотем",
	hpm: 1,
	hp: 1,
	atc1: -1,
	atc12: -1,
	atc2: -1,
	atc22: -1,
	exp: 0
	
};
enemy[8] = {
	name: "Нестабильный тотем",
	hpm: 4,
	hp: 4,
	atc1: 0,
	atc12: 3,
	atc2: 0,
	atc22: 4,
	exp: 1	
	
};
enemy[9] = {
	name: "Тотем смерти",
	hpm: 3,
	hp: 3,
	atc1: 666,
	atc12: 666,
	atc2: 666,
	atc22: 666,
	exp: 0	
};
enemy[10] = {
	name: "Тотем забора силы",
	hpm: 4,
	hp: 4,
	atc1: 0,
	atc12: 0,
	atc2: 1,
	atc22: 1,
	exp: 1	
};
enemy[11] = {
	name: "Турель Теслы",
	hpm: 7,
	hp: 7,
	atc1: 2,
	atc12: 4,
	atc2: 1,
	atc22: 8,
	exp: 4	
};
enemy[12] = {
	name: "Ядовитая слизь",
	hpm: 12,
	hp: 12,
	atc1: 0,
	atc12: 1,
	atc2: 1,
	atc22: 1,
	exp: 3	
};
enemy[13] = {
	name: "Сгусток порчи",
	hpm: 6,
	hp: 6,
	atc1: 0,
	atc12: 5,
	atc2: 1,
	atc22: 8,
	exp: 2	
};
enemy[14] = {
	name: "Живое дерево",
	hpm: 14,
	hp: 14,
	atc1: 1,
	atc12: 3,
	atc2: 1,
	atc22: 4,
	exp: 6	
};
enemy[15] = {
	name: "Кислотная лужа",
	hpm: 12,
	hp: 12,
	atc1: 1,
	atc12: 2,
	atc2: 2,
	atc22: 3,
	exp: 4	
};
enemy[16] = {
	name: "Призрак",
	hpm: 8,
	hp: 8,
	atc1: 0,
	atc12: 2,
	atc2: 1,
	atc22: 3,
	exp: 4	
};
enemy[17] = {
	name: "Копьеносец",
	hpm: 10,
	hp: 10,
	atc1: 0,
	atc12: 4,
	atc2: 2,
	atc22: 3,
	exp: 3	
};
enemy[18] = {
	name: "Древний тотем",
	hpm: 4,
	hp: 4,
	atc1: 0,
	atc12: 0,
	atc2: 0,
	atc22: 0,
	exp: 0	
};
enemy[19] = {
	name: "Заразный металлический шершень",
	hpm: 5,
	hp: 5,
	atc1: 0,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 2	
};
enemy[20] = {
	name: "Шершень",
	hpm: 4,
	hp: 4,
	atc1: 1,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 2	
};
enemy[21] = {
	name: "Электромина",
	hpm: 3,
	hp: 3,
	atc1: 15,
	atc12: 15,
	atc2: 15,
	atc22: 15,
	exp: 0	
};
enemy[22] = {
	name: "Злая книга",
	hpm: 6,
	hp: 6,
	atc1: 0,
	atc12: 3,
	atc2: 1,
	atc22: 4,
	exp: 5	
};
enemy[23] = {
	name: "Гигантский муравейник",
	hpm: 20,
	hp: 20,
	atc1: 0,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 3	
};
enemy[24] = {
	name: "Пулемётная турель",
	hpm: 8,
	hp: 8,
	atc1: 1,
	atc12: 3,
	atc2: 2,
	atc22: 4,
	exp: 4
};
enemy[25] = {
	name: "Ледяной голем",
	hpm: 10,
	hp: 10,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 4,
	exp: 5
};
enemy[26] = {
	name: "Каменный голем",
	hpm: 11,
	hp: 11,
	atc1: 2,
	atc12: 4,
	atc2: 4,
	atc22: 4,
	exp: 6
};
//БОССЫ
enemy[101] = {
	name: "[БОСС] Огненный элементаль",
	hpm: 12,
	hp: 12,
	atc1: 3,
	atc12: 4,
	atc2: 4,
	atc22: 5,
	exp: 6
};
enemy[102] = {
	name: "[БОСС] Циклоп",
	hpm: 14,
	hp: 14,
	atc1: 2,
	atc12: 5,
	atc2: 0,
	atc22: 8,
	exp: 7
};
enemy[103] = {
	name: "[БОСС] Архимаг Гнилос",
	hpm: 18,
	hp: 18,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 4,
	exp: 8
};
enemy[104] = {
	name: "[БОСС] Императорский улей",
	hpm: 50,
	hp: 50,
	atc1: 2,
	atc12: 2,
	atc2: 2,
	atc22: 3,
	exp: 9
};
enemy[105] = {
	name: "[БОСС] Заар",
	hpm: 30,
	hp: 30,
	atc1: 4,
	atc12: 5,
	atc2: 5,
	atc22: 7,
	exp: 10
};
enemy[106] = {
	name: "[БОСС] Невинная душа",
	hpm: 1,
	hp: 1,
	atc1: -1,
	atc12: 0,
	atc2: -1,
	atc22: -1,
	exp: 1
};
enemy[107] = {
	name: "[БОСС] Солнечный змей",
	hpm: 34,
	hp: 34,
	atc1: 4,
	atc12: 5,
	atc2: 7,
	atc22: 8,
	exp: 11
};
enemy[108] = {
	name: "[БОСС] Трэм",
	hpm: 36,
	hp: 36,
	atc1: 3,
	atc12: 5,
	atc2: 3,
	atc22: 10,
	exp: 12
};
enemy[109] = {
	name: "[БОСС] Вестник Смерти",
	hpm: 28,
	hp: 28,
	atc1: 6,
	atc12: 8,
	atc2: 7,
	atc22: 9,
	exp: 13
};
enemy[110] = {
	name: "[БОСС] Смерть",
	hpm: 34,
	hp: 34,
	atc1: 7,
	atc12: 9,
	atc2: 9,
	atc22: 11,
	exp: 14
};
enemy[111] = {
	name: "[БОСС] Сердце замка",
	hpm: 100,
	hp: 100,
	atc1: 4,
	atc12: 5,
	atc2: 5,
	atc22: 6,
	exp: 0
};
//Особые
enemy[112] = {
	name: "Разъярённый Мимик",
	hpm: 15,
	hp: 15,
	atc1: 4,
	atc12: 5,
	atc2: 5,
	atc22: 6,
	exp: 5
}
enemy[113] = {
	name: "Шеф Разданк",
	hpm: 20,
	hp: 20,
	atc1: 4,
	atc12: 6,
	atc2: 6,
	atc22: 8,
	exp: 8
}
enemy[114] = {
	name: "Меттатон",
	hpm: 100,
	hp: 100,
	atc1: 1,
	atc12: 1,
	atc2: 2,
	atc22: 2,
	exp: 0
}
//Предметы
item[0] = { 
	name: "Зелье здоровья", // +5 hp
	svvo: "Восстанавливает 5 здоровья",
    hp: 3,
    hpm: 0,
    atc1: 0,
    atc12: 0,
    atc2: 0,
    atc22: 0,
    heal: 0,
    heal2: 0,
    exp: 0
};
item[1] = { 
	name: "Зелье опыта", // +3 exp
	svvo: "Даёт 3 очка опыта",
    hp: 0,
    hpm: 0,
    atc1: 0,
    atc12: 0,
    atc2: 0,
    atc22: 0,
    heal: 0,
    heal2: 0,
    exp: 3
};
item[2] = { 
	name: "Ломоть хлеба", // +1 хп
	svvo: "Восстанавливает 1 здоровья",
    hp: 1,
    hpm: 0,
    atc1: 0,
    atc12: 0,
    atc2: 0,
    atc22: 0,
    heal: 0,
    heal2: 0,
    exp: 0
};
item[3] = { 
	name: "Бутыль со странной жидкостью", // Смерть
	svvo: "Неизвестный эффект",
    hp: -1000,
    hpm: 0,
    atc1: 0,
    atc12: 0,
    atc2: 0,
    atc22: 0,
    heal: 0,
    heal2: 0,
    exp: 0
};
item[4] = { 
	name: "Лекарство", // Излечение от болезни
	svvo: "Излечение от болезни",
    hp: 0,
    hpm: 0,
    atc1: 0,
    atc12: 0,
    atc2: 0,
    atc22: 0,
    heal: 0,
    heal2: 0,
    exp: 0
};
item[5] = { 
	name: "Конфета", // Ничего
	svvo: "Ничего",
    hp: 0,
    hpm: 0,
    atc1: 0,
    atc12: 0,
    atc2: 0,
    atc22: 0,
    heal: 0,
    heal2: 0,
    exp: 0
};
//Реликвии
relics[0] = {
	name: "Камень жизни",
	svvo: "Восстанавливает вам 1 здоровья каждый ход в битве"
}
relics[1] = {
	name: "Перстень с черепом",
	svvo: "Забирает у вас 1 здоровья каждый ход в битве"
}
relics[2] = {
	name: "Плечевая пушка",
	svvo: "Наносит 1 урона противнику каждый ход в битве"
}
relics[3] = {
	name: "Бьющееся сердце",
	svvo: "Восстанавливает вам 2 здоровья каждый ход в битве"
}
relics[4] = {
	name: "Череп с трещинами",
	svvo: "Забирает у вас 2 здоровья каждый ход в битве"
}
relics[5] = {
	name: "Золотая статуэтка котика",
	svvo: "Ничего не делает, но она милая :3"
}
//1-разовые предметы
disposable_items[0] = {
	name: "Записка",
	svvo: "Можно ненадо..."
}
disposable_items[1] = {
	name: "Ядовитая игла",
	svvo: "=1 хп"
}
disposable_items[2] = {
	name: "Светящаяся сфера",
	svvo: "+5 хп"
}
disposable_items[3] = {
	name: "Загадочный амулет",
	svvo: "+1 ко всем статам или Каратель"
}
disposable_items[4] = {
	name: "Листик с рисунком",
	svvo: "Кто прочитал тот здохнет"
}
disposable_items[5] = {
	name: "Шкатулка",
	svvo: "error/mtt/true"
}
disposable_items[6] = {
	name: "Записка",
	svvo: "MTT... что бы это могло значить?"
}
disposable_items[7] = {
	name: "Записка",
	svvo: "Как оно, на чилле?"
}
disposable_items[8] = {
	name: "Синяя таблетка",
	svvo: "+1 к макс слабой атаке"
}
disposable_items[9] = {
	name: "Фиолетовая таблетка",
	svvo: "+1 к макс сильной атаке"
}
disposable_items[10] = {
	name: "Жёлтая таблетка",
	svvo: "-1 к мин сильной атаке"
}
disposable_items[11] = {
	name: "Красная таблетка",
	svvo: "+1 к макс хп"
}
disposable_items[12] = {
	name: "Чёрная таблетка",
	svvo: "-1 к макс хп"
}
disposable_items[13] = {
	name: "Коричневая таблетка",
	svvo: "-5 к хп"
}
disposable_items[14] = {
	name: "Мясо",
	svvo: "disease true или +1 к хп"
}
//Оружие
weapons[0] = {
	name: "Нет (кулаки)",
	atc1: 1,
	atc12: 2,
	atc2: 1,
	atc22: 3
}
weapons[1] = {
	name: "Бумажный меч",
	atc1: 0,
	atc12: 1,
	atc2: 0,
	atc22: 2,
	svvo: "Нет"
}
weapons[2] = {
	name: "Железный меч",
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 5,
	svvo: "Нет"
}
weapons[3] = {
	name: "Инъектатор",
	atc1: 0,
	atc12: 1,
	atc2: 0,
	atc22: 2,
	svvo: "Восполняет вам здоровье в обьёме нанесённного урона"
}
weapons[4] = {
	name: "Тесак",
	atc1: 1,
	atc12: 3,
	atc2: 1,
	atc22: 4,
	svvo: "Нет"
}
weapons[5] = {
	name: "Прототип плазменной пушки",
	atc1: 1,
	atc12: 3,
	atc2: -4,
	atc22: 8,
	svvo: "Нет"
}
weapons[6] = {
	name: "Арбалет",
	atc1: 1,
	atc12: 2,
	atc2: 0,
	atc22: 7,
	svvo: "Нет"
}
weapons[7] = {
	name: "Стимулятор",
	atc1: -1,
	atc12: 1,
	atc2: -2,
	atc22: 2,
	svvo: "Нет"
}
weapons[8] = {
	name: "Кровяная пушка",
	atc1: 4,
	atc12: 5,
	atc2: 4,
	atc22: 6,
	svvo: "Забирает у вас 2 здоровья при атаке, лечении или использовании особой способности"
}
weapons[9] = {
	name: "Фазовый излучатель",
	atc1: 8,
	atc12: 8,
	atc2: 10,
	atc22: 10,
	svvo: "Наносит урон всем при атаке"
}
bloc.style.left="0px";
bloc.style.top="320px";
menu.style.left="-216px";
menu.style.top="0px";
var prep = "";
function levelconstruction(z){
if (z==1) {mapgenerate = Math.floor(Math.random() * (9+1 - 0)) + 0; };// Вид уровня
prep = document.getElementsByClassName('bloc2'); //Получение координат блоков уровня
for (var i=0; i<prep.length; i++){ //Циклы на удаление
	bod.removeChild(prep[i]);
};
for (var i=0; i<prep.length; i++){
	bod.removeChild(prep[i]);
};
for (var i=0; i<prep.length; i++){
	bod.removeChild(prep[i]);
};
for (var i=0; i<prep.length; i++){
	bod.removeChild(prep[i]);
};
for (var i=0; i<prep.length; i++){
	bod.removeChild(prep[i]);
};
for (var i=0; i<prep.length; i++){
	bod.removeChild(prep[i]);
};
for (var i=0; i<prep.length; i++){
	bod.removeChild(prep[i]);
};
if (mapgenerate==0){ 
var kolvo = 52; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==1){ 
var kolvo = 74; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 560 240 480 240 400 240 160 240 240 240 640 240 720 240 800 240 1040 240 960 240 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 480 480 400 320 400 240 400 160 400 640 480 640 400 720 400 800 400 1040 400 960 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560 1200" // Правая граница (1) 
}
if (mapgenerate==2){ 
var kolvo = 78; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 480 240 160 240 240 240 320 240 320 160 560 240 640 240 720 240 800 240 1040 240 880 240 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 480 480 400 400 400 320 400 240 400 480 320 640 400 640 480 720 400 800 400 880 400 1040 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==3){ 
var kolvo = 75; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 560 240 640 240 720 240 1040 240 960 240 880 240 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 400 400 400 320 400 160 400 480 320 480 240 400 240 320 240 240 240 160 240 320 160 640 480 640 400 720 400 880 400 960 400 1040 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==4){ 
var kolvo = 74; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 480 240 480 160 480 80 160 240 240 240 320 240 640 240 640 160 640 80 1040 240 960 240 880 240 800 240"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 480 480 400 320 400 160 400 240 400 640 480 640 400 1040 400 960 400 880 400 800 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==5){ 
var kolvo = 74; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 560 320 560 240 160 240 240 240 320 240 400 240 720 240 800 240 880 240 960 240 1040 240 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 400 400 400 560 400 640 400 720 400 800 400 880 400 960 400 1040 400 320 400 160 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==6){ 
var kolvo = 68; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 480 320 160 240 240 240 320 240 480 240 560 240 640 240 720 240 800 240 960 240 1040 240 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 400 400 400 320 400 240 400 160 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==7){ 
var kolvo = 66; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 480 240 480 160 480 80 640 80 640 160 640 240 720 240 800 240 880 240"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 480 480 400 640 480 640 400 720 400 800 400 880 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==8){ 
var kolvo = 74; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 160 240 240 240 320 240 400 240 480 240 640 240 720 240 800 240 880 240 960 240 1040 240 480 80 640 80"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 480 400 160 400 240 400 320 400 400 400 640 400 720 400 800 400 880 400 960 400 1040 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1) 
}
if (mapgenerate==9){ 
var kolvo = 68; //Количество блоков уровня
var koordi = "0 0 80 0 160 0 240 0 320 0 400 0 480 0 560 0 640 0 720 0 800 0 880 0 960 0 1040 0 1120 0 1200 0 240 240 320 240 400 240 480 240 480 160 480 80 640 80 640 160 640 240 1040 240"; // Верхняя граница (17)
koordi += " 0 80 0 160 0 240 80 240 80 400 0 400 0 480 0 560 0 640" // Левая граница (8)
koordi += " 80 640 160 640 240 640 320 640 400 640 480 640 560 640 640 640 720 640 800 640 880 640 960 640 1040 640 1120 640 1200 640 640 560 480 560 1040 400 880 400 800 400 720 400 640 400 640 480 480 480 480 400" // Нижняя граница (16)
koordi += " 1200 80 1200 160 1120 240 1200 240 1120 400 1200 400 1200 480 1200 560" // Правая граница (1)
}
var koords = koordi.split(' ');
for (var i=0; i<kolvo; i++){ //Генерация блоков уровня
	var div = document.createElement('div');
	div.classList.add('bloc2');
	bod.appendChild(div);
};
var j = 0;
prep = document.getElementsByClassName('bloc2'); //Получение координат блоков уровня
for (var i=0; i<kolvo; i++){
	prep[i].style.left=koords[j]+"px";
	j++;
	prep[i].style.top=koords[j]+"px";
	j++;
};
};
var localtest = localStorage.getItem('save');
if (localtest!=undefined) loadif = true;
if (loadif == true) startgameload.style.display="block"
else startgameload.style.display="none";
var div2 = document.createElement('div');
div2.classList.add('tp');
bod.appendChild(div2);
div2.style.left="1200px";
div2.style.top="320px";
var div3 = document.createElement('div');
div3.classList.add('defzlo');
bod.appendChild(div3);
div3.style.left="1120px";
div3.style.top="320px";
var items = document.createElement('div'); //Предмет
items.classList.add('items');
bod.appendChild(items);
items.classList.add('items1');
items.style.left="80px";
items.style.top="80px";
items.style.display="none";
item_drop = Math.floor(Math.random() * (12+1 - 0)) + 0; // Шанс спавна предмета
if ((item_drop>=0)&&(item_drop<=itemmax)){
	items.style.display="block";
}
var relicss = document.createElement('div'); //Реликвия
relicss.classList.add('relicss');
bod.appendChild(relicss);
relicss.classList.add('relicss1');
relicss.style.left="80px";
relicss.style.top="560px";
relicss.style.display="none";
relic_drop = Math.floor(Math.random() * (50+1 - 0)) + 0; // Шанс спавна реликвии
if ((relic_drop>=0)&&(relic_drop<=relic_max)){
	relicss.style.display="block";
}
var disposable_item = document.createElement('div'); //Предмет 1-разовый
disposable_item.classList.add('disposable_item');
bod.appendChild(disposable_item);
disposable_item.classList.add('relicss1');
disposable_item.style.left="1120px";
disposable_item.style.top="80px";
disposable_item.style.display="none";
disposable_items_drop = Math.floor(Math.random() * (30+1 - 0)) + 0; // Шанс спавна 1-разового предмета
if ((disposable_items_drop>=0)&&(disposable_items_drop<=disposable_items_max)){ 
	disposable_item.style.display="block";
}
var weapon = document.createElement('div'); //Оружие
weapon.classList.add('weapon');
bod.appendChild(weapon);
weapon.classList.add('weapon');
weapon.style.left="1120px";
weapon.style.top="560px";
weapon.style.display="none";
weapondrop = Math.floor(Math.random() * (32+1 - 1)) + 1; // Шанс спавна оружия
if ((weapondrop>=1)&&(weapondrop<=weaponmax)){ 
	weapon.style.display="block";
}
trade_drop = Math.floor(Math.random() * (5+1 - 0)) + 0; // Шанс спавна торговца
if (trade_drop==0){
	trade1.style.left="560px";
	trade1.style.top="80px";
	trade1.style.display="block";
}
else {
	trade1.style.left="-80px";
	trade1.style.top="-80px";
	trade1.style.display="none";
}
var v = 20; // Скорость
var sizeb = 80; // Размеры блока
var ostvr = 30;
infohero0.innerHTML='<div class="bvm3">Герой: '+hero[current_hero].name+'</div><div class="bvm3">Здоровье: '+hero[current_hero].hp+'/'+hero[current_hero].hpm+'</div><div class="bvm3">Слабая атака: '+(hero[current_hero].atc1+weapons[0].atc1)+'-'+(hero[current_hero].atc12+weapons[0].atc12)+'<br>Сильная атака: '+(hero[current_hero].atc2+weapons[0].atc2)+'-'+(hero[current_hero].atc22+weapons[0].atc22)+ '</div><div class="bvm3">Способность: '+hero[current_hero].sposinfo+'<hr color="black">Зарядов особой способности: '+hero[current_hero].spos+'</div><div class="bvm3">Лечение: '+hero[current_hero].heal+'-'+hero[current_hero].heal2+'</div>';
attack1.addEventListener('click', function(){//Слабая атака
information.style.display="block";
	information.innerHTML="Вы получили "+1+" очков опыта <br>";
	hero[current_hero].exp+=1;
	information.style.display="block";
	boi(hero[current_hero].atc1, hero[current_hero].atc12);
});
attack2.addEventListener('click', function(){//Сильная атака
information.style.display="block";
	information.innerHTML="";
	information.style.display="block";
	boi(hero[current_hero].atc2, hero[current_hero].atc22);
});
attack3.addEventListener('click', function(){ //Хил
information.style.display="block";
	if (hero[current_hero].hp==hero[current_hero].hpm){
		information.style.display="block";
		information.innerHTML="Ваше здоровье полное, лечение невозможно!";
	}
	else {
		var hil = Math.floor(Math.random() * (hero[current_hero].heal2+1 - hero[current_hero].heal)) + hero[current_hero].heal
		hero[current_hero].hp += hil;
		information.innerHTML="Вы вылечили "+hil+" здоровья <br>";
		if (hero[current_hero].hp>hero[current_hero].hpm){
			hero[current_hero].hp=hero[current_hero].hpm;
		}
		boi(0, 0);
	}
});
attack4.addEventListener('click', function(){ //Спец умение
	information.innerHTML="";
	information.style.display="block";
	if (current_hero==0){
			if (hero[current_hero].spos>0) {
				if ((roomnumber%10 != 0)||(roomnumber==0)){
					hero[current_hero].spos--;
					information.innerHTML="Вы использовали вашу особую способность \"Сокрушающий удар\"! <br>";
					boi(10, 10);
				} else information.innerHTML="Нельзя использовать особую способность на боссе! <br>";
			} else information.innerHTML="У вас нет очков особой способности";
	} else if (current_hero==1){// для Турка
		if (hero[current_hero].spos>0) {
				if ((roomnumber%10 != 0)||(roomnumber==0)){
					hero[current_hero].spos--;
					information.innerHTML="Вы использовали вашу особую способность \"Съесть краба\"! <br>";
					hero[current_hero].hp += 5;
					information.innerHTML+="Вы вылечили 5 здоровья <br>";
					if (hero[current_hero].hp>hero[current_hero].hpm){
						hero[current_hero].hp=hero[current_hero].hpm;
					}
					boi(0, 0);
				} else information.innerHTML="Нельзя использовать особую способность на боссе! <br>";
			} else information.innerHTML="У вас нет очков особой способности";
	} else if (current_hero==2){// для хила
		if (hero[current_hero].spos>0) {
				if ((roomnumber%10 != 0)||(roomnumber==0)){
					hero[current_hero].spos--;
					information.innerHTML="Вы использовали вашу особую способность \"Морская волна\"! <br>";
					hero[current_hero].hp=hero[current_hero].hpm;
					information.innerHTML+="Вы полностью восстановили здоровье <br>";
					boi(0, 0);
				} else information.innerHTML="Нельзя использовать особую способность на боссе! <br>";
			} else information.innerHTML="У вас нет очков особой способности";
	} else if (current_hero==3){// для Райзуса
		if (hero[current_hero].spos>0) {
				if ((roomnumber%10 != 0)||(roomnumber==0)){
					hero[current_hero].spos--;
					information.innerHTML="Вы использовали вашу особую способность \"Обшаривание карманов\"! <br>";
					moneydrop=Math.floor(Math.random() * (16+1 - 8)) + 8;
					money+=moneydrop;
					information.innerHTML+="Вы нашли "+moneydrop+" монет <br>";
					boi(0, 0);
				} else information.innerHTML="Нельзя использовать особую способность на боссе! <br>";
			} else information.innerHTML="У вас нет очков особой способности";
	}
});
attack5.addEventListener('click', function(){ //Предметы
	information.style.display="block";
	if (hero[current_hero].predmid != -1){
		information.innerHTML="Вы используете предмет \"" + item[hero[current_hero].predmid].name + "\" <br>";
		if (hero[current_hero].predmid == 0){
			hero[current_hero].hp+=5;
			information.innerHTML+="Вы восстановили 5 здоровья <br>";
		} else if (hero[current_hero].predmid==1){
			hero[current_hero].exp+=3;
			information.innerHTML+="Вы получили 3 очка опыта <br>";
		} else if (hero[current_hero].predmid==2){
			hero[current_hero].hp++;
			information.innerHTML+="Вы восстановили 1 здоровья <br>";
		} else if (hero[current_hero].predmid==3){
			hero[current_hero].hp=0;
			information.innerHTML+="Вы выпили содержимое бутыли и умерли <br>";
			endgame();
		} else if (hero[current_hero].predmid==4){
			disease=false;
			information.innerHTML+="Вы излечились от болезни! <br>";
		} else if (hero[current_hero].predmid==5){
			disease=false;
			information.innerHTML+="Ничего не произошло, но было вкусно! <br>";
		}
		hero[current_hero].predmid=-1;
		if (hero[current_hero].hp>hero[current_hero].hpm){
			hero[current_hero].hp=hero[current_hero].hpm;
		}		
		if (hero[current_hero].hp<0){
			hero[current_hero].hp=0;
			endgame();
		}
		heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		if (hero[current_hero].exp>=nextlevel) {
			hero[current_hero].hpm++;
			hero[current_hero].exp=hero[current_hero].exp-nextlevel;
			hero[current_hero].hp=hero[current_hero].hpm;
			hero[current_hero].lvl++;
			nextlevel+=2;
			information.innerHTML+="Вы получили новый уровень "+hero[current_hero].lvl+"! <br>";
			if (hero[current_hero].lvl%5==0){
			hero[current_hero].hpm++;
			hero[current_hero].hp=hero[current_hero].hpm;
			hero[current_hero].atc1++;
			hero[current_hero].atc12++;
			hero[current_hero].atc2++;
			hero[current_hero].atc22++;
			hero[current_hero].heal++;
			hero[current_hero].heal2++;
			information.innerHTML+="Вы получили 5 уровней, все характеристики повышены на 1 ! <br>";
			}
			heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		}
	}
		else {
			information.innerHTML="У вас нет предмета!";
		}
});
attackx.addEventListener('click', function(){
	attackx.style.display="none";
	end();
});
function boi(a, b){
	if (hero[current_hero].relikid==0){ //Действия реликвий
		hero[current_hero].hp+=1;
		if (hero[current_hero].hp>hero[current_hero].hpm){
			hero[current_hero].hp=hero[current_hero].hpm;
		}
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		information.innerHTML+="\"" + relics[hero[current_hero].relikid].name +"\" восстановил вам 1 здоровья <br>";
		if (hero[current_hero].hp>hero[current_hero].hpm){
            hero[current_hero].hp=hero[current_hero].hpm;
        }
	} else if (hero[current_hero].relikid==1){
		hero[current_hero].hp-=1;
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		information.innerHTML+="\"" + relics[hero[current_hero].relikid].name +"\" забрал у вас 1 здоровья <br>";
	} else if (hero[current_hero].relikid==2){
		enemy[current_enemy].hp--;
		information.innerHTML+="\"" + relics[hero[current_hero].relikid].name +"\" нанесла 1 урона противнику <br>";
		enemy_name.innerHTML = enemy[current_enemy].name + "["+enemy[current_enemy].hp+"/"+enemy[current_enemy].hpm+"]";
	} else if (hero[current_hero].relikid==3){
		hero[current_hero].hp+=2;
		information.innerHTML+="\"" + relics[hero[current_hero].relikid].name +"\" восстановило вам 2 здоровья <br>";
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		if (hero[current_hero].hp>hero[current_hero].hpm){
            hero[current_hero].hp=hero[current_hero].hpm;
        }
	} else if (hero[current_hero].relikid==4){
		hero[current_hero].hp-=2;
		information.innerHTML+="\"" + relics[hero[current_hero].relikid].name +"\" забрал у вас 2 здоровья <br>";
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	} else if (hero[current_hero].relikid==5){
		information.innerHTML+="\"" + relics[hero[current_hero].relikid].name +"\" мило покачивает лапкой :3 <br>";
	}
	if (disease==true){
		hero[current_hero].hp--;
		information.innerHTML+="Вы страдаете от болезни и теряете 1 здоровья <br>";
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	}
	if (blood==true){
		hero[current_hero].hp--;
		information.innerHTML+="Вы страдаете от кровотечения и теряете 1 здоровья <br>";
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	}
	if (poison==true){
		hero[current_hero].hp-=2;
		information.innerHTML+="Вы страдаете от яда и теряете 2 здоровья <br>";
		heroname.innerHTML = hero[current_hero].name + "["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	}
	// Конец действия реликвий
	var ur2 = Math.floor(Math.random() * (b+1 - a)) + a;
	enemy[current_enemy].hp -= ur2;
	if (ur2>0){
	information.innerHTML+="Вы нанесли "+ur2+" урона <br>";
	} else if (ur2==0){
	information.innerHTML+="Вы промахнулись <br>";	
	} else {
		if (enemy[current_enemy].hp>enemy[current_enemy].hpm) enemy[current_enemy].hp=enemy[current_enemy].hpm;
		information.innerHTML+="Вы вылечили противнику "+ur2*-1+" здоровья <br>";
	}
	if (hero[current_hero].weaponid==3){
		hero[current_hero].hp+=ur2;
		if (hero[current_hero].hp>hero[current_hero].hpm){
			hero[current_hero].hp=hero[current_hero].hpm;
		}
		heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]"
		information.innerHTML+="Вы вылечили Инъектатором "+ur2+" здоровья <br>";
	} else if (hero[current_hero].weaponid==8){
		hero[current_hero].hp-=2;
		if (hero[current_hero].hp<0){
			hero[current_hero].hp=0;
			endgame();
		}
		heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]"
		information.innerHTML+="Кровяная пушка забрала у вас 2 здоровья <br>";
	} else if (hero[current_hero].weaponid==9){
		hero[current_hero].hp-=ur2;
		if (hero[current_hero].hp<0){
			hero[current_hero].hp=0;
			endgame();
		}
		heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]"
		information.innerHTML+="Фазовый излучатель нанёс вам "+ur2+" урона <br>";
	}
	if (enemy[current_enemy].hp<0) enemy[current_enemy].hp=0; //Атака врага
	heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	enemy_name.innerHTML = enemy[current_enemy].name + " ["+enemy[current_enemy].hp+"/"+enemy[current_enemy].hpm+"]";
	if (enemy[current_enemy].hp==0){ //Если враг сдох
		deadd=true;
		dead.style.display="inline-block";
		attack1.disabled=true;
		attack2.disabled=true;
		attack3.disabled=true;
		attack4.disabled=true;
		attack5.disabled=true;
		information.innerHTML+="Вы победили противника "+enemy[current_enemy].name+"! <br>";
		if (poison==true){
			poison=false;
			information.innerHTML+="Вы излечиваетесь от воздействия яда! <br>";
		}
		if (blood==true){
			blood=false;
			information.innerHTML+="Вы излечиваетесь от воздействия кровотечения! <br>";
		}
		if ((roomnumber%10==0)&&(roomnumber!=0)) {
			hero[current_hero].spos++;
			information.innerHTML+="Вы получили 1 очко способности за победу над боссом "+enemy[current_enemy].name+"! <br>";
		}
		moneydrop=Math.floor(Math.random() * (10+1 - 1)) + 1;
		money+=moneydrop;
		information.innerHTML+="Вы получили "+moneydrop+" монет <br>";
		var hil = Math.floor(Math.random() * (hero[current_hero].heal2+1 - hero[current_hero].heal)) + hero[current_hero].heal
		hero[current_hero].hp += hil;
		if (hero[current_hero].hp>hero[current_hero].hpm){
			hero[current_hero].hp=hero[current_hero].hpm;
		};
		information.innerHTML+="Вы вылечили "+hil+" здоровья <br>";
		heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		information.innerHTML+="Вы получили "+enemy[current_enemy].exp+" очков опыта <br>";
		hero[current_hero].exp+=enemy[current_enemy].exp;
		attackx.style.display="block";
		if (current_enemy==111) {
			wingame();
		}
	} else {
		var hod = Math.floor(Math.random() * (2)); //Атака нас
		if (hod == 0){ //Если слабая атака врага
			var ur = Math.floor(Math.random() * (enemy[current_enemy].atc12+1 - enemy[current_enemy].atc1)) + enemy[current_enemy].atc1;
			hero[current_hero].hp -= ur;
			heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
			enemy_name.innerHTML = enemy[current_enemy].name + " ["+enemy[current_enemy].hp+"/"+enemy[current_enemy].hpm+"]";
			if (ur>0) {
				information.innerHTML+="Вам нанесли "+ur+" урона <br>";
			} else if (ur==0){
				information.innerHTML+="Враг промахнулся <br>";
			} else {
				information.innerHTML+="Вам вылечили "+ur+" здоровья <br>";
				if (hero[current_hero].hp>hero[current_hero].hpm){
					hero[current_hero].hp=hero[current_hero].hpm;
				}
				heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]"
			}
		} else { //Если сильная атака врага
			var ur = Math.floor(Math.random() * (enemy[current_enemy].atc22+1 - enemy[current_enemy].atc2)) + enemy[current_enemy].atc2;
			hero[current_hero].hp -= ur;
			heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
			enemy_name.innerHTML = enemy[current_enemy].name + " ["+enemy[current_enemy].hp+"/"+enemy[current_enemy].hpm+"]";
			information.innerHTML+="Вам нанесли "+ur+" урона <br>";
		}
		if ((current_enemy==5)||(current_enemy==103)||(current_enemy==4)||(current_enemy==12)||(current_enemy==19)){ // Яд
			if (poison==false){
				poison=true;
				information.innerHTML+="Вас поразил яд! <br>";
			}
		}
		else if ((current_enemy==17)||(current_enemy==19)||(current_enemy==24)){ // Кровотечение
			if (blood==false){
				blood=true;
				information.innerHTML+="Вас поразило кровотечение! <br>";
			}
		}
		else if ((current_enemy==18)||(current_enemy==19)){ // Болезнь
			if (disease==false){
				disease=true;
				information.innerHTML+="Вас поразила болезнь! <br>";
			}
		}
	}
	if (hero[current_hero].exp>=nextlevel) {
			hero[current_hero].hpm++;
			hero[current_hero].exp=hero[current_hero].exp-nextlevel;
			hero[current_hero].hp=hero[current_hero].hpm;
			hero[current_hero].lvl++;
			nextlevel+=2;
			information.innerHTML+="Вы получили новый уровень "+hero[current_hero].lvl+"! <br>";
			if (hero[current_hero].lvl%5==0){
			hero[current_hero].hpm++;
			hero[current_hero].hp=hero[current_hero].hpm;
			hero[current_hero].atc1++;
			hero[current_hero].atc12++;
			hero[current_hero].atc2++;
			hero[current_hero].atc22++;
			hero[current_hero].heal++;
			hero[current_hero].heal2++;
			information.innerHTML+="Вы получили 5 уровней, все характеристики повышены на 1 ! <br>";
			}
			heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
		}
	if (hero[current_hero].hp<=0){ //Если мы сдохли
		hero[current_hero].hp=0;
		endgame();
	}
}
var sheftexture = setInterval(function(){ //Обновление текстур героя и врага
	if (current_hero == 0){
		bloc.className="bloc";
		heroimage.className="heroimage";
		mainimg.className="mainimg heroimage";
	} else if (current_hero == 1) { //тут будет 2 модель
		bloc.className="herro10";
		heroimage.className="heroimage2";
		mainimg.className="mainimg heroimage2";
	} else if (current_hero == 2) { //тут будет 2 модель
		bloc.className="herro20";
		heroimage.className="heroimage3";
		mainimg.className="mainimg heroimage3";
	} else if (current_hero == 3) { //тут будет 2 модель
		bloc.className="herro30";
		heroimage.className="heroimage4";
		mainimg.className="mainimg heroimage4";
	}
	if (current_enemy == 0){ //Для 0 врага
		enemyimage.className="enemyimage00";
	} else if (current_enemy == 1){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage10";
	} else if (current_enemy == 2){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage20";
	} else if (current_enemy == 3){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage30";
	} else if (current_enemy == 4){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage40";
	} else if (current_enemy == 5){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage50";
	} else if (current_enemy == 6){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage60";
	} else if (current_enemy == 101){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage1010";
	} else if (current_enemy == 102){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage1020";
	} else if (current_enemy == 112){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage1120";
	} else if (current_enemy == 113){//Для 1 и т.д. врагов будет дальше
		enemyimage.className="enemyimage1130";
	}
}, 150);
function end(){ //Конец битвы
	move = true;
	enemy[current_enemy].hp=enemy[current_enemy].hpm;
	if ((current_enemy!=112)&&(current_enemy!=113)) {div3.style.display = "none";
	div3.style.left="-100px";
	div3.style.top="-100px";};
	battle.style.display="none";
	information.style.display="none";
	dead.style.display="none";
	savepoint.style.display="none";
	savepoint.style.top="-80px";
	savepoint.style.left="-80px";
	audio2.pause(); //Музыка битвы
	audio2.src="au2.wav";
	audio2.currentTime = 0.0;
	audio.play();
	
	if ((current_enemy==112)||(current_enemy==113)) {
		current_enemy=current_enemy2;
		current_enemy2=0;
	}
};
function endgame(){ //Конец игры
	over.style.display="block";
	over.style.background="#BDBDBD";
	over1.style.background="#BDBDBD";
	winornot.style.background="#BDBDBD";
	over.style.opacity=0.85;
	winornot.innerHTML="ИГРА ОКОНЧЕНА";
	recordid.style.display="block";
	nickname_field.style.display="block";
	nickname_field2.style.background="#BDBDBD";
	localStorage.removeItem('save');
	loadif = false;
	hero[current_hero].hp=0;
	heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	move=false;
	over1.innerHTML='<div class="bvm2">Количество пройденных комнат: '+roomnumber+'</div>'+'<div class="bvm2">Герой: '+hero[current_hero].name+'</div><div class="bvm2">Здоровье: '+hero[current_hero].hp+'/'+hero[current_hero].hpm+'</div><div class="bvm2">Слабая атака: '+hero[current_hero].atc1+'-'+hero[current_hero].atc12+'<br>Сильная атака: '+hero[current_hero].atc2+'-'+hero[current_hero].atc22+ '<br>Зарядов особой способности: '+hero[current_hero].spos+'</div><div class="bvm2">Лечение: '+hero[current_hero].heal+'-'+hero[current_hero].heal2+'</div><div class="bvm2">Опыт: '+hero[current_hero].exp+'/'+nextlevel+'<br>Уровень: '+hero[current_hero].lvl+'</div><div class="bvm2">Монеты: '+money+'</div>';
	audio2.pause()
	audio2.currentTime = 0.0;
	audio2.src="au2.wav";
	audio.pause()
	audio.currentTime = 0.0;
};
function wingame(){ //Конец игры победа
	over.style.display="block";
	over.style.background="green";
	over1.style.background="green";
	winornot.style.background="green";
	over.style.opacity=1;
	winornot.innerHTML="ЗАМОК ПРОЙДЕН!";
	recordid.style.display="block";
	nickname_field.style.display="block";
	nickname_field2.style.background="green";
	heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	move=false;
	over1.innerHTML='<div class="bvm2">Количество пройденных комнат: '+roomnumber+'</div>'+'<div class="bvm2">Герой: '+hero[current_hero].name+'</div><div class="bvm2">Здоровье: '+hero[current_hero].hp+'/'+hero[current_hero].hpm+'</div><div class="bvm2">Слабая атака: '+hero[current_hero].atc1+'-'+hero[current_hero].atc12+'<br>Сильная атака: '+hero[current_hero].atc2+'-'+hero[current_hero].atc22+ '<br>Зарядов особой способности: '+hero[current_hero].spos+'</div><div class="bvm2">Лечение: '+hero[current_hero].heal+'-'+hero[current_hero].heal2+'</div><div class="bvm2">Опыт: '+hero[current_hero].exp+'/'+nextlevel+'<br>Уровень: '+hero[current_hero].lvl+'</div><div class="bvm2">Монеты: '+money+'</div>';
	audio2.pause()
	audio2.currentTime = 0.0;
	audio2.src="au2.wav";
	audio.pause()
	audio.currentTime = 0.0;
};
restart.addEventListener('click', function(){ //Рестарт игры
	over.style.display="none";
	move=true;
	nickname_field2.style.display="none";
	// Приведение всех переменных в начальное значение
	move = true;
	enemy[current_enemy].hp=enemy[current_enemy].hpm;
	div3.style.display = "none";
	div3.style.left="-100px";
	div3.style.top="-100px";
	battle.style.display="none";
	information.style.display="none";
	dead.style.display="none";
	audio.pause()
	audio.currentTime = 0.0;
	audio2.pause();
	audio2.currentTime = 0.0;
	audio2.src="au2.wav";
	attackx.display="none";
	if (loadif == true) startgameload.style.display="block"
	else startgameload.style.display="none";
	roomnumber=0;
	money=0;
	bloc.style.left="0px";
		bloc.style.top="320px";
		div3.style.left="1120px";
		div3.style.top="320px";
		div3.style.display="block";
		room.innerHTML='<div class="bvm">Количество пройденных комнат: '+roomnumber+'</div>';
		item_drop = Math.floor(Math.random() * (12+1 - 0)) + 0; // Шанс спавна предмета
		if ((item_drop>=0)&&(item_drop<=itemmax)){ 
			items.style.left="80px";
			items.style.top="80px";
			items.style.display="block";
		} else {
			items.style.left="-80px";
			items.style.top="-80px";
			items.style.display="none";
		}
		relic_drop = Math.floor(Math.random() * (50+1 - 0)) + 0; // Шанс спавна реликвии
		if ((relic_drop>=0)&&(relic_drop<=relic_max)){ 
			relicss.style.left="80px";
			relicss.style.top="560px";
			relicss.style.display="block";
		} else {
			relicss.style.left="-80px";
			relicss.style.top="-80px";
			relicss.style.display="none";
		}
		disposable_items_drop = Math.floor(Math.random() * (30+1 - 0)) + 0; // Шанс спавна 1-разового предмета
		if ((disposable_items_drop>=0)&&(disposable_items_drop<=disposable_items_max)){ 
			disposable_item.style.left="1120px";
			disposable_item.style.top="80px";
			disposable_item.style.display="block";
		} else {
			disposable_item.style.left="-80px";
			disposable_item.style.top="-80px";
			disposable_item.style.display="none";
		}
		weapondrop = Math.floor(Math.random() * (32+1 - 1)) + 1; // Шанс спавна оружия
		if ((weapondrop>=1)&&(weapondrop<=weaponmax)){ 
			weapon.style.left="1120px";
			weapon.style.top="560px";
			weapon.style.display="block";
		} else {			
			weapon.style.left="-80px";
			weapon.style.top="-80px";
			weapon.style.display="none";
		}
		trade_drop = Math.floor(Math.random() * (5+1 - 0)) + 0; // Шанс спавна торговца
		if (trade_drop==0){
			trade1.style.left="560px";
			trade1.style.top="80px";
			trade1.style.display="block";
		}
		else {
			trade1.style.left="-80px";
			trade1.style.top="-80px";
			trade1.style.display="none";
		}
		current_enemy = Math.floor(Math.random() * (maxenemy+1 - 0)) + 0; //Выбор случайного текущего врага
		enemyimage.className="";
		menustart.style.display="block";
		//герои рестарт
hero[0] = {
	name: "Крестоносец Миккола",
	hpm: 10,	
	hp: 10,
	atc1:  0,
	atc12: 1,
	atc2: 0,
	atc22: 1,
	heal: 1,
	heal2: 3,
	exp: 0,
	lvl: 0,
	spos: 2, 
	sposinfo: "\"Сокрушающий удар\" - наносит 10 урона противнику в битве",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
hero[1] = {
	name: "Огр Турк",
	hpm: 16,	
	hp: 16,
	atc1:  0,
	atc12: 0,
	atc2: 0,
	atc22: 1,
	heal: 1,
	heal2: 2,
	exp: 0,
	lvl: 0,
	spos: 3, 
	sposinfo: "\"Поедание краба\" - восстанавливает 5 здоровья",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
hero[2] = {
	name: "Жрец моря Сонгшторм",
	hpm: 10,	
	hp: 10,
	atc1:  0,
	atc12: 0,
	atc2: 0,
	atc22: 0,
	heal: 2,
	heal2: 4,
	exp: 0,
	lvl: 0,
	spos: 2, 
	sposinfo: "\"Морская волна\" - полностью восстанавливает здоровье",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
hero[3] = {
	name: "Лорд Райзус",
	hpm: 12,	
	hp: 8,
	atc1:  -1,
	atc12: 2,
	atc2: -2,
	atc22: 3,
	heal: -1,
	heal2: 4,
	exp: 0,
	lvl: 0,
	spos: 4, 
	sposinfo: "\"Обшаривание карманов\" - украсть у врага 8-16 монет",
	predmid: -1,
	relikid: -1,
	weaponid: 0
};
//враги рестарт
enemy[0] = {
	name: "Гигантский червь",
	hpm: 4,	
	hp: 4,
	atc1: 1,
	atc12: 2,
	atc2: 2,
	atc22: 3,
	exp: 2
};
enemy[1] = {
	name: "Кабан",
	hpm: 7,	
	hp: 7,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 4,
	exp: 2
};
enemy[2] = {
	name: "Волк",
	hpm: 6,
	hp: 6,
	atc1: 1,
	atc12: 2,
	atc2: 2,
	atc22: 4,
	exp: 2
};
enemy[3] = {
	name: "Оборотень",
	hpm: 10,
	hp: 10,
	atc1: 1,
	atc12: 3,
	atc2: 4,
	atc22: 5,
	exp: 5
};
enemy[4] = {
	name: "Огромный паук",
	hpm: 6,
	hp: 6,
	atc1: 1,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 1
};
enemy[5] = {
	name: "Змея",
	hpm: 5,
	hp: 5,
	atc1: 1,
	atc12: 3,
	atc2: 2,
	atc22: 3,
	exp: 3
};
enemy[6] = {
	name: "Воин",
	hpm: 10,
	hp: 10,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 5,
	exp: 4
};
enemy[7] = {
	name: "Лечащий тотем",
	hpm: 1,
	hp: 1,
	atc1: -1,
	atc12: -1,
	atc2: -1,
	atc22: -1,
	exp: 0
	
};
enemy[8] = {
	name: "Нестабильный тотем",
	hpm: 4,
	hp: 4,
	atc1: 0,
	atc12: 3,
	atc2: 0,
	atc22: 4,
	exp: 1	
	
};
enemy[9] = {
	name: "Тотем смерти",
	hpm: 3,
	hp: 3,
	atc1: 666,
	atc12: 666,
	atc2: 666,
	atc22: 666,
	exp: 0	
};
enemy[10] = {
	name: "Тотем забора силы",
	hpm: 4,
	hp: 4,
	atc1: 0,
	atc12: 0,
	atc2: 1,
	atc22: 1,
	exp: 1	
};
enemy[11] = {
	name: "Турель Теслы",
	hpm: 7,
	hp: 7,
	atc1: 2,
	atc12: 4,
	atc2: 1,
	atc22: 8,
	exp: 4	
};
enemy[12] = {
	name: "Ядовитая слизь",
	hpm: 12,
	hp: 12,
	atc1: 0,
	atc12: 1,
	atc2: 1,
	atc22: 1,
	exp: 3	
};
enemy[13] = {
	name: "Сгусток порчи",
	hpm: 6,
	hp: 6,
	atc1: 0,
	atc12: 5,
	atc2: 1,
	atc22: 8,
	exp: 2	
};
enemy[14] = {
	name: "Живое дерево",
	hpm: 14,
	hp: 14,
	atc1: 1,
	atc12: 3,
	atc2: 1,
	atc22: 4,
	exp: 6	
};
enemy[15] = {
	name: "Кислотная лужа",
	hpm: 12,
	hp: 12,
	atc1: 1,
	atc12: 2,
	atc2: 2,
	atc22: 3,
	exp: 4	
};
enemy[16] = {
	name: "Призрак",
	hpm: 8,
	hp: 8,
	atc1: 0,
	atc12: 2,
	atc2: 1,
	atc22: 3,
	exp: 4	
};
enemy[17] = {
	name: "Копьеносец",
	hpm: 10,
	hp: 10,
	atc1: 0,
	atc12: 4,
	atc2: 2,
	atc22: 3,
	exp: 3	
};
enemy[18] = {
	name: "Древний тотем",
	hpm: 4,
	hp: 4,
	atc1: 0,
	atc12: 0,
	atc2: 0,
	atc22: 0,
	exp: 0	
};
enemy[19] = {
	name: "Заразный металлический шершень",
	hpm: 5,
	hp: 5,
	atc1: 0,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 2	
};
enemy[20] = {
	name: "Шершень",
	hpm: 4,
	hp: 4,
	atc1: 1,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 2	
};
enemy[21] = {
	name: "Электромина",
	hpm: 3,
	hp: 3,
	atc1: 15,
	atc12: 15,
	atc2: 15,
	atc22: 15,
	exp: 0	
};
enemy[22] = {
	name: "Злая книга",
	hpm: 6,
	hp: 6,
	atc1: 0,
	atc12: 3,
	atc2: 1,
	atc22: 4,
	exp: 5	
};
enemy[23] = {
	name: "Гигантский муравейник",
	hpm: 20,
	hp: 20,
	atc1: 0,
	atc12: 1,
	atc2: 1,
	atc22: 2,
	exp: 3	
};
enemy[24] = {
	name: "Пулемётная турель",
	hpm: 8,
	hp: 8,
	atc1: 1,
	atc12: 3,
	atc2: 2,
	atc22: 4,
	exp: 4
};
enemy[25] = {
	name: "Ледяной голем",
	hpm: 10,
	hp: 10,
	atc1: 2,
	atc12: 4,
	atc2: 3,
	atc22: 4,
	exp: 5
};
enemy[26] = {
	name: "Каменный голем",
	hpm: 11,
	hp: 11,
	atc1: 2,
	atc12: 4,
	atc2: 4,
	atc22: 4,
	exp: 6
};
});
function battlelo(){ //Окно битвы
	battle.style.display="inline-block";
	heroname.innerHTML = hero[current_hero].name + " ["+hero[current_hero].hp+"/"+hero[current_hero].hpm+"]";
	enemy_name.innerHTML = enemy[current_enemy].name + " ["+enemy[current_enemy].hp+"/"+enemy[current_enemy].hpm+"]";
};
function question1(){
	items.classList.add('items2');
	items.classList.remove('items1');
	question.style.display="block";
	move = false;
};	
function question11(){
	relicss.classList.add('relicss2');
	relicss.classList.remove('relicss1');
	question1_1.style.display="block";
	move = false;
};	
function question12(){
	disposable_item.classList.add('disposable_item2');
	disposable_item.classList.remove('disposable_item1');
	question1_2.style.display="block";
	move = false;
};
function savewindow(){
	question_save.style.display="block";
	move = false;
}
function appear(po){
	if (po==1){
		questions.innerHTML="Игра сохранена";
		//Сохранение 
		loadif = true;
		var savefile = current_hero + " " + hero[current_hero].hpm + " " + hero[current_hero].hp + " " + hero[current_hero].atc1 + " " + hero[current_hero].atc12 + " " + hero[current_hero].atc2 + " " + hero[current_hero].atc22 + " " + hero[current_hero].heal + " " + hero[current_hero].heal2 + " " + hero[current_hero].exp + " " + hero[current_hero].lvl + " " + hero[current_hero].spos + " " + hero[current_hero].predmid + " " + hero[current_hero].relikid + " " + hero[current_hero].weaponid + " " + item_drop + " " + relic_drop + " " + disposable_items_drop + " " + weapondrop + " " + current_enemy + " " + roomnumber + " " + disease + " " + mapgenerate + " " + money + " ";
		console.log(savefile);
		localStorage.setItem('save', savefile);
		item_drop = 404; // - предмета
		if ((item_drop>=0)&&(item_drop<=itemmax)){ 
			items.style.left="80px";
			items.style.top="80px";
			items.style.display="block";
		} else {
			items.style.left="-80px";
			items.style.top="-80px";
			items.style.display="none";
		}
		relic_drop = 404; // - реликвии
		if ((relic_drop>=0)&&(relic_drop<=relic_max)){ 
			relicss.style.left="80px";
			relicss.style.top="560px";
			relicss.style.display="block";
		} else {
			relicss.style.left="-80px";
			relicss.style.top="-80px";
			relicss.style.display="none";
		}
		disposable_items_drop = 404; // - 1-разового предмета
		if ((disposable_items_drop>=0)&&(disposable_items_drop<=disposable_items_max)){ 
			disposable_item.style.left="1120px";
			disposable_item.style.top="80px";
			disposable_item.style.display="block";
		} else {
			disposable_item.style.left="-80px";
			disposable_item.style.top="-80px";
			disposable_item.style.display="none";
		}
		weapondrop = 404; // - оружия
		if ((weapondrop>=1)&&(weapondrop<=weaponmax)){ 
			weapon.style.left="1120px";
			weapon.style.top="560px";
			weapon.style.display="block";
		} else {			
			weapon.style.left="-80px";
			weapon.style.top="-80px";
			weapon.style.display="none";
		}
		trade_drop=5; // - торговца
		if (trade_drop==0){
			trade1.style.left="560px";
			trade1.style.top="80px";
			trade1.style.display="block";
		}
		else {
			trade1.style.left="-80px";
			trade1.style.top="-80px";
			trade1.style.display="none";
		}
	} else {
		questions.innerHTML="Игра не сохранена";
	}
	savepoint.style.display="none";
	savepoint.style.top="-80px";
	savepoint.style.left="-80px";
};
startgameload.addEventListener('click', function(){ //Загрузка
	var localsave = localStorage.getItem('save');
	console.log(localsave);
	audio.play();
	audio.currentTime = 0.0;
	audio2.src="au2.wav";
	var save = localsave.split(' ');
	current_hero=save[0];
	hero[current_hero].hpm=+save[1];
	hero[current_hero].hp=+save[2];
	hero[current_hero].atc1=+save[3];
	hero[current_hero].atc12=+save[4];
	hero[current_hero].atc2=+save[5];
	hero[current_hero].atc22=+save[6];
	hero[current_hero].heal=+save[7];
	hero[current_hero].heal2=+save[8];
	hero[current_hero].exp=+save[9];
	hero[current_hero].lvl=+save[10];
	hero[current_hero].spos=+save[11];
	hero[current_hero].predmid=+save[12];
	hero[current_hero].relikid=+save[13];
	hero[current_hero].weaponid=+save[14];
	item_drop=itemmax+1;//save[15];
	relic_drop=relic_max+1;//save[16];
	disposable_items_drop=disposable_items_max+1;//save[17];
	weapondrop=weaponmax+1;//save[18];
	current_enemy=+save[19]; 
	roomnumber=+save[20];
	disease=save[21];
	money=+save[22];
	trade_drop=5;//save+

	move=true;
	if ((item_drop>=0)&&(item_drop<=itemmax)){ 
			items.style.left="80px";
			items.style.top="80px";
			items.style.display="block";
		} else {
			items.style.left="-80px";
			items.style.top="-80px";
			items.style.display="none";
		}
		if ((relic_drop>=0)&&(relic_drop<=relic_max)){ 
			relicss.style.left="80px";
			relicss.style.top="560px";
			relicss.style.display="block";
		} else {
			relicss.style.left="-80px";
			relicss.style.top="-80px";
			relicss.style.display="none";
		}
		if ((disposable_items_drop>=0)&&(disposable_items_drop<=disposable_items_max)){ 
			disposable_item.style.left="1120px";
			disposable_item.style.top="80px";
			disposable_item.style.display="block";
		} else {
			disposable_item.style.left="-80px";
			disposable_item.style.top="-80px";
			disposable_item.style.display="none";
		}
		if ((weapondrop>=1)&&(weapondrop<=weaponmax)){ 
			weapon.style.left="1120px";
			weapon.style.top="560px";
			weapon.style.display="block";
		} else {			
			weapon.style.left="-80px";
			weapon.style.top="-80px";
			weapon.style.display="none";
		}
		if (trade_drop==0){
			trade1.style.left="560px";
			trade1.style.top="80px";
			trade1.style.display="block";
		}
		else {
			trade1.style.left="-80px";
			trade1.style.top="-80px";
			trade1.style.display="none";
		}
	mapgenerate=save[22];
	levelconstruction(0);
	menustart.style.display="none";
	if (current_hero==0){
		bloc.className="blocc";
	} else if (current_hero==1){
		bloc.className="herro11";
	} else if (current_hero==2){
		bloc.className="herro21";
	} else if (current_hero==3){
		bloc.className="herro31";
	}
	heroimage.className="";
	menu.style.left="-216px";
});
attacksave1.addEventListener('click', function(){
	question_save.style.display="none";
	question_save2.style.display="block";
	appear(1);
});
attacksave2.addEventListener('click', function(){
	question_save.style.display="none";
	question_save2.style.display="block";
	appear(0);
});
attacksave3.addEventListener('click', function(){
	question_save2.style.display="none";
	move=true;
});
function question13(){
			weapon.classList.add('weapon2');
			weapon.classList.remove('weapon1');
			question1_3.style.display="block";
			move = false;
};
function vzornevz(zn){
	question2_2.style.display="block";
	if (zn==1){
		question2.innerHTML="Вы взяли предмет \""+item[item_drop].name+"\".";
	} else {
		question2.innerHTML="Вы не стали брать предмет \""+item[item_drop].name+"\".";
	}
};
attack01.addEventListener('click', function(){
		items.classList.add('items1');
		items.classList.remove('items2');
		hero[current_hero].predmid=item_drop;
		question.style.display="none";
		vzornevz(1);
});
attack02.addEventListener('click', function(){
	items.classList.add('items1');
	items.classList.remove('items2');
	question.style.display="none";
	vzornevz(0);
});
function vzornevz2(zn){
	question3_3.style.display="block";
	if (zn==1){
		question3.innerHTML="Вы взяли реликвию \""+relics[relic_drop].name+"\".";
	} else {
		question3.innerHTML="Вы не стали брать реликвию \""+relics[relic_drop].name+"\".";
	}
};
function vzornevz3(zn){
	question4_4.style.display="block";
	if (zn==1){
		if (disposable_items_drop==0){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и прочитали её. Там написано: \"" + disposable_items[disposable_items_drop].svvo+ "\".";
		} else if (disposable_items_drop==1){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и случайно укололись ей. Ваше здоровье снижено до 1.";
		hero[current_hero].hp=1;
		} else if (disposable_items_drop==2){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", она растворилась в ваших руках, после чего вам становится немного жарко. Вы восстановили 5 здоровья.";
		hero[current_hero].hp+=5;
		if (hero[current_hero].hp>hero[current_hero].hpm){
			hero[current_hero].hp=hero[current_hero].hpm;
		}
		} else if (disposable_items_drop==3){
			ban = 0;
			ban = Math.floor(Math.random() * (1+1 - 0)) + 0;
			if (ban==1){
				question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", он создал портал, из которого появился Шеф Разданк!";	
			}
			else {
			hero[current_hero].hpm++;
			hero[current_hero].hp=hero[current_hero].hpm;
			hero[current_hero].atc1++;
			hero[current_hero].atc12++;
			hero[current_hero].atc2++;
			hero[current_hero].atc22++;
			hero[current_hero].heal++;
			hero[current_hero].heal2++;
			question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и наполнились решимостью. Все ваши характеристики повышены на 1.";	
			}
		} else if (disposable_items_drop==4){
			noo=1;
			question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и посмотрели на него. Там нарисовано: ";
			secret.style.display="block";
		} else if (disposable_items_drop==5){
			question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", но она оказалась запертой. Вы оставили её и пошли дальше.";
		} else if (disposable_items_drop==6) {
			question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и прочитали её. Там написано: \"" + disposable_items[disposable_items_drop].svvo+ "\".";
		} else if (disposable_items_drop==7) {
			question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и прочитали её. Там написано: \"" + disposable_items[disposable_items_drop].svvo+ "\".";
		} else if (disposable_items_drop==8){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели её. Ваша максимальная слабая атака повышена на 1.";
			hero[current_hero].atc12++;
		} else if (disposable_items_drop==9){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели её. Ваша максимальная сильная атака повышена на 1.";
			hero[current_hero].atc22++;
		} else if (disposable_items_drop==10){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели её. Ваша минимальная сильная атака понижена на 1.";
			hero[current_hero].atc2--;
		} else if (disposable_items_drop==11){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели её. Ваше максимальное здоровье повышено на 1.";
			hero[current_hero].hpm++;
		} else if (disposable_items_drop==12){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели её. Ваше максимальное здоровье понижено на 1.";
			hero[current_hero].hpm--;
			if (hero[current_hero].hp>hero[current_hero].hpm){
				hero[current_hero].hp=hero[current_hero].hpm;
			}
		} else if (disposable_items_drop==13){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели её. Ваше здоровье понижено на 5.";
			hero[current_hero].hp-=5;
			if (hero[current_hero].hp<=0){
				hero[current_hero].hp=0;
				endgame();
			}
		} else if (disposable_items_drop==14){
		question4.innerHTML="Вы взяли предмет \""+disposable_items[disposable_items_drop].name+"\", и съели его.";
		var bolorhp = Math.floor(Math.random() * (1+1 - 0)) + 0;
		if (bolorhp==0){
			disease=true;
			question4.innerHTML+="Оно оказалось гнилым, вы заразились болезнью.";
		} else {
			hero[current_hero].hp++;
			if (hero[current_hero].hp>hero[current_hero].hpm){
				hero[current_hero].hp=hero[current_hero].hpm;
			}
			question4.innerHTML+="Оно оказалось свежим, вы восстановили 1 здоровья.";
		}
		}
	} else {
		noo=0;
		question4.innerHTML="Вы не стали брать предмет \""+disposable_items[disposable_items_drop].name+"\"";
	}
};
function vzornevz4(zn){
	question5_5.style.display="block";	
	if (zn==1){		
			mimikdrop=0;
			mimikdrop = Math.floor(Math.random() * (10+1 - 0)) + 0;
			if ((mimikdrop==1)&&(roomnumber!=0)){
				question5.innerHTML="Упс";
			} else {
			question5.innerHTML="Вы взяли оружие \""+weapons[weapondrop].name+"\" и экипировали его.";
			hero[current_hero].atc1 = hero[current_hero].atc1 - weapons[hero[current_hero].weaponid].atc1;
			hero[current_hero].atc12 = hero[current_hero].atc12 - weapons[hero[current_hero].weaponid].atc12;
			hero[current_hero].atc2 = hero[current_hero].atc2 - weapons[hero[current_hero].weaponid].atc2;
			hero[current_hero].atc22 = hero[current_hero].atc22 - weapons[hero[current_hero].weaponid].atc22;
			hero[current_hero].weaponid=weapondrop;
			hero[current_hero].atc1 = hero[current_hero].atc1 + weapons[hero[current_hero].weaponid].atc1;
			hero[current_hero].atc12 = hero[current_hero].atc12 + weapons[hero[current_hero].weaponid].atc12;
			hero[current_hero].atc2 = hero[current_hero].atc2 + weapons[hero[current_hero].weaponid].atc2;
			hero[current_hero].atc22 = hero[current_hero].atc22 + weapons[hero[current_hero].weaponid].atc22;
			};
	} else {
		question5.innerHTML="Вы не стали брать оружие \""+weapons[weapondrop].name+"\"";
	}
};
attack11.addEventListener('click', function(){
		relicss.classList.add('relicss1');
		relicss.classList.remove('relicss2');
		hero[current_hero].relikid=relic_drop;
		question1_1.style.display="none";
		vzornevz2(1);
});
attack12.addEventListener('click', function(){
	relicss.classList.add('relicss1');
	relicss.classList.remove('relicss2');
	question1_1.style.display="none";
	vzornevz2(0);
});
attack13.addEventListener('click', function(){
	move = true;
	relicss.style.left="-80px";
	relicss.style.top="-80px";
	relicss.style.display="none";
	question3_3.style.display="none";
});
attack03.addEventListener('click', function(){
	move = true;
	items.style.left="-80px";
	items.style.top="-80px";
	items.style.display="none";
	question2_2.style.display="none";
});
attack21.addEventListener('click', function(){
		disposable_item.classList.add('disposable_item1');
		disposable_item.classList.remove('disposable_item2');
		question1_2.style.display="none";
		vzornevz3(1);
});
attack22.addEventListener('click', function(){
	disposable_item.classList.add('disposable_item1');
	disposable_item.classList.remove('disposable_item2');
	question1_2.style.display="none";
	vzornevz3(0);
});
attack23.addEventListener('click', function(){
	move = true;
	disposable_item.style.left="-80px";
	disposable_item.style.top="-80px";
	disposable_item.style.display="none";
	question4_4.style.display="none";
	if ((disposable_items_drop==3)&&(ban==1)){
		enemyimage.className="";
		enemyimage.classList.add('enemyimage1120');
		current_enemy2=current_enemy;
		attack1.disabled=false;
		attack2.disabled=false;
		attack3.disabled=false;
		attack4.disabled=false;
		attack5.disabled=false;
		move = false;
		information.innerHTML="";
		menu.style.left="-216px";
		current_enemy=113;
		audio2.src="au15.wav";
		audio2.play();
		audio.pause();
		battlelo();
		disposable_item.style.left="-80px";
		disposable_item.style.top="-80px";
		disposable_item.style.display="none";
		question4_4.style.display="none";
		ban=0;
	}
	if ((disposable_items_drop==4)&&(noo==1)){
		secret.style.display="none";
		hero[current_hero].hp=0;
		//localStorage.clear();
		localStorage.removeItem('save');
		endgame();
	}
});
attack31.addEventListener('click', function(){
		weapon.classList.add('weapon1');
		weapon.classList.remove('weapon2');
		question1_3.style.display="none";
		vzornevz4(1);
});
attack32.addEventListener('click', function(){
	weapon.classList.add('weapon1');
	weapon.classList.remove('weapon2');
	question1_3.style.display="none";
	vzornevz4(0);
});
attack33.addEventListener('click', function(){
	move = true;
	weapon.style.left="-80px";
	weapon.style.top="-80px";
	weapon.style.display="none";
	question5_5.style.display="none";
	if ((mimikdrop==1)&&(roomnumber!=0)){
			enemyimage.className="";
			enemyimage.classList.add('enemyimage1130');
			current_enemy2=current_enemy;
			attack1.disabled=false;
			attack2.disabled=false;
			attack3.disabled=false;
			attack4.disabled=false;
			attack5.disabled=false;
			move = false;
			information.innerHTML="";
			menu.style.left="-216px";
			current_enemy=112;
			audio2.src="au14.wav";
			audio2.play();
			audio.pause();
			battlelo();
			weapon.style.left="-80px";
			weapon.style.top="-80px";
			weapon.style.display="none";
	};
});
var obnovl = setInterval(function(){
	room.innerHTML='<div class="bvm">Количество пройденных комнат: '+roomnumber+'</div>';
	infohero.innerHTML='<div class="bvm">Герой: '+hero[current_hero].name+'</div><div class="bvm"><div class="hearth"></div>Здоровье: '+hero[current_hero].hp+'/'+hero[current_hero].hpm+'</div><div class="bvm">Слабая атака: '+hero[current_hero].atc1+'-'+hero[current_hero].atc12+'<br>Сильная атака: '+hero[current_hero].atc2+'-'+hero[current_hero].atc22+ '</div><div class="bvm">Способность: '+hero[current_hero].sposinfo+'<hr color="black">Зарядов особой способности: '+hero[current_hero].spos+'</div><div class="bvm">Лечение: '+hero[current_hero].heal+'-'+hero[current_hero].heal2+'</div><div class="bvm">Опыт: '+hero[current_hero].exp+'/'+nextlevel+'<br>Уровень: '+hero[current_hero].lvl+'</div></div><div class="bvm"><div class="coin"></div>Монеты: '+money+'</div>';
	weaponinformation.innerHTML="";
	if (hero[current_hero].weaponid!=0){
		weaponinformation.innerHTML+='Взятое оружие: \"'+weapons[hero[current_hero].weaponid].name+'\"<hr color="black">';
		weaponinformation.innerHTML+='Слабая атака: '+weapons[hero[current_hero].weaponid].atc1+'-'+weapons[hero[current_hero].weaponid].atc12+'<br>Сильная атака: '+weapons[hero[current_hero].weaponid].atc2+'-'+weapons[hero[current_hero].weaponid].atc22+'<br>';
		weaponinformation.innerHTML+='Свойство оружия: '+weapons[hero[current_hero].weaponid].svvo;
	} else {
		weaponinformation.innerHTML+='Взятое оружие: Нет (кулаки)';
	};
	infohero2.innerHTML="";
	if (hero[current_hero].predmid!=-1){
		infohero2.innerHTML+='Взятый предмет: \"'+item[hero[current_hero].predmid].name+'\"<hr color="black">';
		infohero2.innerHTML+='Свойство предмета: '+item[hero[current_hero].predmid].svvo;
	} else {
		infohero2.innerHTML+='Взятый предмет: Нет';
	};
	infohero3.innerHTML="";
	if (hero[current_hero].relikid!=-1){
		infohero3.innerHTML+='Взятая реликвия: \"'+relics[hero[current_hero].relikid].name+'\"<hr color="black">';
		infohero3.innerHTML+='Свойство реликвии: '+relics[hero[current_hero].relikid].svvo;
	} else {
		infohero3.innerHTML+='Взятая реликвия: Нет';
	};
}, 10);
function getChar(e) { //Считывание нажатия клавиш с клавиатуры
	if (e.keyCode == 192){ // Меню
		if (parseInt(menu.style.left)==-216) {
			menu.style.left="0px"
		}
		else menu.style.left="-216px";
	}
	if (move == true){
	if ((parseInt(blocc.style.left)==parseInt(items.style.left))&&(parseInt(blocc.style.top)==parseInt(items.style.top))){ // Предмет
	question1();
	}
	if ((parseInt(blocc.style.left)==parseInt(relicss.style.left))&&(parseInt(blocc.style.top)==parseInt(relicss.style.top))){ // Реликвия
	question11();
	}
	if ((parseInt(blocc.style.left)==parseInt(disposable_item.style.left))&&(parseInt(blocc.style.top)==parseInt(disposable_item.style.top))){ // 1-разовый предмет
	question12();
	}
	if ((parseInt(blocc.style.left)==parseInt(weapon.style.left))&&(parseInt(blocc.style.top)==parseInt(weapon.style.top))){ // Оружие
	question13();
	}
	if ((parseInt(blocc.style.left)==parseInt(savepoint.style.left))&&(parseInt(blocc.style.top)==parseInt(savepoint.style.top))){ // Сохранение
	savewindow();
	}
	if ((parseInt(blocc.style.left)==parseInt(trade1.style.left))&&(parseInt(blocc.style.top)==parseInt(trade1.style.top))){ // Сохранение
	shops();
	}
	if ((parseInt(blocc.style.left)+v==parseInt(div2.style.left))&&(parseInt(blocc.style.top)==parseInt(div2.style.top))){ //Тп на новый уровень
		current_enemy = Math.floor(Math.random() * (maxenemy+1 - 0)) + 0; //Выбор случайного текущего врага
		deadd=false;
		savepoint.style.display="block";
		savepoint.style.left="560px";
		savepoint.style.top="560px";
		bloc.style.left="0px";
		bloc.style.top="320px";
		div3.style.left="1120px";
		div3.style.top="320px";
		div3.style.display="block";
		roomnumber++;
		room.innerHTML='<div class="bvm">Количество пройденных комнат: '+roomnumber+'</div>';
		//Бафф врагов
		if ((roomnumber%15==0)&&(roomnumber!=0)){
			for (var k=0; k<27; k++){
				enemy[k].hpm++;
				enemy[k].hp++;
				enemy[k].atc1++;
				enemy[k].atc12++;
				enemy[k].atc2++;
				enemy[k].atc22++;
			};
		};
		item_drop = Math.floor(Math.random() * (12+1 - 0)) + 0; // Шанс спавна предмета
		if ((item_drop>=0)&&(item_drop<=itemmax)){ 
			items.style.left="80px";
			items.style.top="80px";
			items.style.display="block";
		} else {
			items.style.left="-80px";
			items.style.top="-80px";
			items.style.display="none";
		}
		relic_drop = Math.floor(Math.random() * (50+1 - 0)) + 0; // Шанс спавна реликвии
		if ((relic_drop>=0)&&(relic_drop<=relic_max)){ 
			relicss.style.left="80px";
			relicss.style.top="560px";
			relicss.style.display="block";
		} else {
			relicss.style.left="-80px";
			relicss.style.top="-80px";
			relicss.style.display="none";
		}
		disposable_items_drop = Math.floor(Math.random() * (30+1 - 0)) + 0; // Шанс спавна 1-разового предмета
		if ((disposable_items_drop>=0)&&(disposable_items_drop<=disposable_items_max)){ 
			disposable_item.style.left="1120px";
			disposable_item.style.top="80px";
			disposable_item.style.display="block";
		} else {
			disposable_item.style.left="-80px";
			disposable_item.style.top="-80px";
			disposable_item.style.display="none";
		}
		weapondrop = Math.floor(Math.random() * (32+1 - 1)) + 1; // Шанс спавна оружия
		if ((weapondrop>=1)&&(weapondrop<=weaponmax)){ 
			weapon.style.left="1120px";
			weapon.style.top="560px";
			weapon.style.display="block";
		} else {			
			weapon.style.left="-80px";
			weapon.style.top="-80px";
			weapon.style.display="none";
		}
		trade_drop = Math.floor(Math.random() * (5+1 - 0)) + 0; // Шанс спавна торговца
		if (trade_drop==0){
			trade1.style.left="560px";
			trade1.style.top="80px";
			trade1.style.display="block";
		}
		else {
			trade1.style.left="-80px";
			trade1.style.top="-80px";
			trade1.style.display="none";
		}
		levelconstruction(1);
	}
	if ((parseInt(blocc.style.left)+v==parseInt(div3.style.left))&&(parseInt(blocc.style.top)==parseInt(div3.style.top))){ //Начало битвы
	enemyimage.className="";
	if (current_enemy == 0){ //Обработка текстур для 0 врага
		enemyimage.classList.add('enemyimage00');
	} else if (current_enemy == 1){
		enemyimage.classList.add('enemyimage10');
	} else if (current_enemy == 2){
		enemyimage.classList.add('enemyimage20');
	} else if (current_enemy == 3){
		enemyimage.classList.add('enemyimage30');
	} else if (current_enemy == 4){
		enemyimage.classList.add('enemyimage40');
	} else if (current_enemy == 5){
		enemyimage.classList.add('enemyimage50');
	} else if (current_enemy == 6){ 
		enemyimage.classList.add('enemyimage60');
	} else if (current_enemy == 7){
		enemyimage.classList.add('enemyimage70');
	} else if (current_enemy == 8){
		enemyimage.classList.add('enemyimage80');
	} else if (current_enemy == 9){
		enemyimage.classList.add('enemyimage90');
	} else if (current_enemy == 10){
		enemyimage.classList.add('enemyimage100');
	} else if (current_enemy == 11){
		enemyimage.classList.add('enemyimage110');
	} else if (current_enemy == 12){
		enemyimage.classList.add('enemyimage120');
	} else if (current_enemy == 13){
		enemyimage.classList.add('enemyimage130');
	} else if (current_enemy == 14){
		enemyimage.classList.add('enemyimage140');
	} else if (current_enemy == 15){
		enemyimage.classList.add('enemyimage150');
	} else if (current_enemy == 16){
		enemyimage.classList.add('enemyimage160');
	} else if (current_enemy == 17){
		enemyimage.classList.add('enemyimage170');
	} else if (current_enemy == 18){
		enemyimage.classList.add('enemyimage180');
	} else if (current_enemy == 19){
		enemyimage.classList.add('enemyimage190');
	} else if (current_enemy == 20){
		enemyimage.classList.add('enemyimage200');
	} else if (current_enemy == 21){
		enemyimage.classList.add('enemyimage210');
	} else if (current_enemy == 22){
		enemyimage.classList.add('enemyimage220');
	} else if (current_enemy == 23){
		enemyimage.classList.add('enemyimage230');
	} else if (current_enemy == 24){
		enemyimage.classList.add('enemyimage240');
	} else if (current_enemy == 25){
		enemyimage.classList.add('enemyimage250');
	} else if (current_enemy == 26){
		enemyimage.classList.add('enemyimage260');
	} else if (current_enemy == 190){
		enenemyimage.classList.add('enemyimage1010');
	} else if (current_enemy == 112){
		enenemyimage.classList.add('enemyimage1120');
	} else if (current_enemy == 113){
		enenemyimage.classList.add('enemyimage1130');
	} // Музыка для босса
	if (roomnumber==10){ //На 10 лвле босс
		current_enemy=101;
		enemyimage.classList.add('enemyimage1010');
		audio2.src="au3.wav";
	} else if (roomnumber==20){ //На 20 лвле босс
		current_enemy=102;
		enemyimage.classList.add('enemyimage1020');
		audio2.src="au4.wav";
	} else if (roomnumber==30){ //На 30 лвле босс
		current_enemy=103;
		enemyimage.classList.add('enemyimage1030');
		audio2.src="au5.wav";
	} else if (roomnumber==40){ //На 40 лвле босс
		current_enemy=104;
		enemyimage.classList.add('enemyimage1040');
		audio2.src="au6.wav";
	} else if (roomnumber==50){ //На 50 лвле босс
		current_enemy=105;
		enemyimage.classList.add('enemyimage1050');
		audio2.src="au7.wav";
	} else if (roomnumber==60){ //На 60 лвле босс
		current_enemy=106;
		enemyimage.classList.add('enemyimage1060');
		audio2.src="au8.wav";
	} else if (roomnumber==70){ //На 70 лвле босс
		current_enemy=107;
		enemyimage.classList.add('enemyimage1070');
		audio2.src="au9.wav";
	} else if (roomnumber==80){ //На 80 лвле босс
		current_enemy=108;
		enemyimage.classList.add('enemyimage1080');
		audio2.src="au10.wav";
	} else if (roomnumber==90){ //На 90 лвле босс
		current_enemy=109;
		enemyimage.classList.add('enemyimage1090');
		audio2.src="au11.wav";
	} else if (roomnumber==100){ //На 100 лвле босс
		current_enemy=110;
		enemyimage.classList.add('enemyimage1100');
		audio2.src="au12.wav";
	} else if (roomnumber==110){ //На 110 лвле ласт босс
		current_enemy=111;
		enemyimage.classList.add('enemyimage1110');
		audio2.src="au13.wav";
	}
	if (current_enemy==114){ //Секретный враг без доступа
		enemyimage.classList.add('enemyimage1140');
		audio2.src="au16.wav";
	}
		attack1.disabled=false;
		attack2.disabled=false;
		attack3.disabled=false;
		attack4.disabled=false;
		attack5.disabled=false;
		move = false;
		information.innerHTML="";
		menu.style.left="-216px";
		audio2.play();
		audio.pause();
		battlelo();
	}
	if (e.keyCode == 37){ 
		key1 = 1;
	}else if (e.keyCode == 38){ 
		key2 = 1;
	}else if (e.keyCode == 39){ 
		key3 = 1;
	}else if (e.keyCode == 40){ 
		key4 = 1;
	}
	if ((key1)&&(key2)&&(parseInt(bloc.style.left)>0)) { //Влево вверх
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))) {
			flag = false;
			var lf = parseInt(prep[i].style.left)+sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.left=(parseInt(bloc.style.left)-v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))) { 
			var lf = parseInt(prep[i].style.left)+sizeb;
			blocc.style.left=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.left=lf+"px"; 
	   };
	   if (parseInt(bloc.style.left)<0) bloc.style.left=0+"px";
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb)&&((parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top)))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.top)+sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.top=(parseInt(bloc.style.top)-v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb)&&((parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top)))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.top)+sizeb;
			blocc.style.top=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.top=lf+"px"; 
	   };
	   if (parseInt(bloc.style.top)<0) bloc.style.top=0+"px";
   } else if ((key2)&&(key3)&&(parseInt(bloc.style.top)>0)) { //Вверх вправо
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb)&&((parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top)))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.top)+sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.top=(parseInt(bloc.style.top)-v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb)&&((parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top)))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.top)+sizeb;
			blocc.style.top=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.top=lf+"px"; 
	   };
	   if (parseInt(bloc.style.top)<0) bloc.style.top=0+"px";
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.left)-sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.left=(parseInt(bloc.style.left)+v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.left)-sizeb;
			blocc.style.left=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.left=lf+"px"; 
	   }; 
   } else if ((key3)&&(key4)) { //Вправо вниз
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.left)-sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.left=(parseInt(bloc.style.left)+v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.left)-sizeb;
			blocc.style.left=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.left=lf+"px"; 
	   }; 
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.top)-sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.top=(parseInt(bloc.style.top)+v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.top)-sizeb;
			blocc.style.top=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.top=lf+"px"; 
	   };
   } 
   else if ((key1)&&(key4)&&(parseInt(bloc.style.left)>0)) { //Влево вниз 
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))) {
			flag = false;
			var lf = parseInt(prep[i].style.left)+sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.left=(parseInt(bloc.style.left)-v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))) { 
			var lf = parseInt(prep[i].style.left)+sizeb;
			blocc.style.left=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.left=lf+"px"; 
	   };
	   if (parseInt(bloc.style.left)<0) bloc.style.left=0+"px";
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.top)-sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.top=(parseInt(bloc.style.top)+v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.top)-sizeb;
			blocc.style.top=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.top=lf+"px"; 
	   };
   } else  if ((key1)&&(parseInt(bloc.style.left)>0)) { //Влево
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))) {
			flag = false;
			var lf = parseInt(prep[i].style.left)+sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.left=(parseInt(bloc.style.left)-v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))) { 
			var lf = parseInt(prep[i].style.left)+sizeb;
			blocc.style.left=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.left=lf+"px"; 
	   };
	   if (parseInt(bloc.style.left)<0) bloc.style.left=0+"px";
   } else if ((key2)&&(parseInt(bloc.style.top)>0)) { //Вверх
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb)&&((parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top)))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.top)+sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.top=(parseInt(bloc.style.top)-v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb)&&((parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top)))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.top)+sizeb;
			blocc.style.top=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.top=lf+"px"; 
	   };
	   if (parseInt(bloc.style.top)<0) bloc.style.top=0+"px";
   } else if (key3) { //Вправо 
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.left)-sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.left=(parseInt(bloc.style.left)+v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.left)-sizeb;
			blocc.style.left=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.left=lf+"px"; 
	   }; 
   } else if (key4) { //Вниз 
	   var flag = true;
	   for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) {
			flag = false;
			var lf = parseInt(prep[i].style.top)-sizeb;
		   }
	   }
	   if (flag==true){
			bloc.style.top=(parseInt(bloc.style.top)+v)+"px";
			for (var i=0; i < prep.length; i++){
		   if ((parseInt(blocc.style.left)+sizeb>parseInt(prep[i].style.left))&&(parseInt(blocc.style.top)+sizeb>parseInt(prep[i].style.top))&&((parseInt(blocc.style.top)<parseInt(prep[i].style.top)+sizeb))&&(parseInt(blocc.style.left)<parseInt(prep[i].style.left)+sizeb)) { 
			var lf = parseInt(prep[i].style.top)-sizeb;
			blocc.style.top=lf+"px";
		   }
	   }
	   } else {
		   blocc.style.top=lf+"px"; 
	   };
   } 
	}
}
addEventListener('keydown', getChar);
addEventListener('keyup', function(e){
	if (e.keyCode == 37){ 
		key1 = 0;
	}
	if (e.keyCode == 38){ 
		key2 = 0;
	}
	if (e.keyCode == 39){ 
		key3 = 0;
	}
	if (e.keyCode == 40){ 
		key4 = 0;
	}
})
exitBuy.addEventListener('click', function(){ //Выход из торговли
	trade1.classList.add('trade');
	trade1.classList.remove('trade2');
	shop.style.display="none";
	trade1.style.left="-80px";
	trade1.style.right="-80px";
	trade1.style.display="none";
	move=true;
});
function shops(){ //Торговля
	trade1.classList.add('trade2');
	trade1.classList.remove('trade');
	shop.style.display="block";	
	move=false
	price1=Math.floor(Math.random() * (relic_max+30 - 10)) + 10;
	price2=Math.floor(Math.random() * (relic_max+30 - 10)) + 10;
	price3=Math.floor(Math.random() * (relic_max+30 - 10)) + 10;
	buy1drop=Math.floor(Math.random() * (itemmax+1 - 0)) + 0;
	buy2drop=Math.floor(Math.random() * (weaponmax+1 - 1)) + 1;
	buy3drop=Math.floor(Math.random() * (relic_max+1 - 0)) + 0;
	buy1.value="Купить случайный предмет за "+price1+" монет";
	buy2.value="Купить случайное оружие за "+price2+" монет";
	buy3.value="Купить случайную реликвию за "+price3+" монет";
};	
buy1.addEventListener('click',function(){
	if (money-price1>=0){
	hero[current_hero].predmid=buy1drop;
	money-=price1;
	dialogWithBuy.innerHTML='Надеюсь, предмет \"'+item[buy1drop].name+'\" тебе поможет. Что-нибудь ещё?';
	buy1drop= Math.floor(Math.random() * (itemmax+1 - 0)) + 0;
	price1=Math.floor(Math.random() * (relic_max+30 - 10)) + 10;
	buy1.value="Купить случайный предмет за:"+price1+" монет";
	}else dialogWithBuy.innerHTML='У тебя не хватает денег для покупки!';
});
buy2.addEventListener('click',function(){
	if (money-price2>=0){
	hero[current_hero].atc1 = hero[current_hero].atc1 - weapons[hero[current_hero].weaponid].atc1;
	hero[current_hero].atc12 = hero[current_hero].atc12 - weapons[hero[current_hero].weaponid].atc12;
	hero[current_hero].atc2 = hero[current_hero].atc2 - weapons[hero[current_hero].weaponid].atc2;
	hero[current_hero].atc22 = hero[current_hero].atc22 - weapons[hero[current_hero].weaponid].atc22;
	hero[current_hero].weaponid=buy2drop;
	hero[current_hero].atc1 = hero[current_hero].atc1 + weapons[hero[current_hero].weaponid].atc1;
	hero[current_hero].atc12 = hero[current_hero].atc12 + weapons[hero[current_hero].weaponid].atc12;
	hero[current_hero].atc2 = hero[current_hero].atc2 + weapons[hero[current_hero].weaponid].atc2;
	hero[current_hero].atc22 = hero[current_hero].atc22 + weapons[hero[current_hero].weaponid].atc22;
	money-=price2;
	dialogWithBuy.innerHTML='Надеюсь, оружие \"'+weapons[buy2drop].name+'\" тебе поможет. Что-нибудь ещё?';
	buy2drop= Math.floor(Math.random() * (weaponmax+1 - 1)) + 1;
	price2=Math.floor(Math.random() * (relic_max+30 - 10)) + 10;
	buy2.value="Купить случайное оружие за:"+price2+" монет";
	} else dialogWithBuy.innerHTML='У тебя не хватает денег для покупки!';
});
buy3.addEventListener('click',function(){
	if (money-price3>=0){
	hero[current_hero].relikid=buy3drop;
	dialogWithBuy.innerHTML='Надеюсь, реликвия \"'+relics[buy3drop].name+'\" тебе поможет. Что-нибудь ещё?';
	buy1.innerHTML.value="Купить случайное оружие за:"+	(money-=price3);
	buy3drop= Math.floor(Math.random() * (relic_max+1 - 0)) + 0;
	price3=Math.floor(Math.random() * (relic_max+30 - 10)) + 10;
	buy3.value="Купить случайную реликвию за:"+price3+" монет";
	} else dialogWithBuy.innerHTML='У тебя не хватает денег для покупки!';
});
//
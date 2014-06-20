javascript: (function(){
	var c = prompt('コメントを入力してください','みてるなう');
	if(c == null){
		return0;
	} else {
		if (c!=''){
			c = c + ' / '
		}
		var f = 'https://twitter.com/share?text=' + encodeURIComponent(c + document.title);
		open(f, '_blank', 'width=550,height=400,scrollbars=1');
	};
})()

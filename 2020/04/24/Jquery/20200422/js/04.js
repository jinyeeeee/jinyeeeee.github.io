$(function(){
	//第一个
	var $tr1 = $("table tr:first");
	console.log($tr1[0]);
	//最后一个
	var $tr2 = $("table tr:last");
	console.log($tr2[0]);
	//不是最后一个
	var $tr3 = $("tr:not(:last)");
	console.log($tr3);
	//偶数,从0开始
	var $tr4 = $("table tr:even");
	console.log($tr4[0]);
	var $tr5 = $("table tr:odd");
	console.log($tr5[0]);
	//索引值
	var $tr6 = $("table tr:eq(3)");
	console.log($tr6[0]);
	//索引值
	var $tr7 = $("table tr:gt(3)");
	console.log($tr7[0]);
	//索引值
	var $tr8 = $("table tr:lt(3)");
	console.log($tr8[0]);
	//获取所有的标题标签
	var h = $(":header")[0].innerText;
	console.log(h);
})
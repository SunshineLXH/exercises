/*
* @Author: SunshineLXH
* @Date:   2016-07-07 05:53:48
* @Last Modified by:   SunshineLXH
* @Last Modified time: 2016-07-07 06:12:50
*/

'use strict';

//实现一个依赖注入的“注射器”

var DI = function (dependency) {
	this.dependency = dependency;
};

// should return new function with resolved dependencies
DI.prototype.inject = function (func) {
	//code

	var deps = /^[^(]+\(([^)]+)/.exec(func.toString());

	//构建参数绑定数组
	deps = deps ? deps[1]
				  .split(/\s?,\s?/)
				  .map(function (dep) {
				  	return this.dependency[dep];
				  }.bind(this)) : [];

	//通过apply将依赖参数传入函数
	return function () {
		return func.apply(this, deps);
	};

};


//题目先简单创建了一个依赖注入器的构造函数，主要是在inject函数中编写代码，实现依赖注入。
//评价成功与否的测试如下：

var deps = {
	'dep1': function () {return 'this is dep1';},
	'dep2': function () {return 'this is dep2';},
	'dep3': function () {return 'this is dep3';},
	'dep4': function () {return 'this is dep4';}
};

//新建一个‘注射器’
var di = new DI(deps);

//注射
var myFunc = di.inject(function (dep3, dep1, dep2) {
	return [dep1(), dep2(), dep3()].join('->');
});

//测试
myFunc(); //'this is dep1 -> this is dep2 -> this is dep3'


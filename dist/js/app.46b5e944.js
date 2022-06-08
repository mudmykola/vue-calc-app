(function(){"use strict";var __webpack_modules__={4587:function(__unused_webpack_module,__webpack_exports__,__webpack_require__){var core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__=__webpack_require__(6699),core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0___default=__webpack_require__.n(core_js_modules_es_array_includes_js__WEBPACK_IMPORTED_MODULE_0__);__webpack_exports__["Z"]={name:"CalCulator",props:{msg:String},data(){return{calcValue:"",calcElement:["C","*","/","-",7,8,9,"+",4,5,6,"%",1,2,3,"=",0,"."],oper:null,prevCalcValue:""}},methods:{action(num){isNaN(num)&&"."!==num||(this.calcValue+=num+""),"C"===num&&(this.calcValue=""),"%"===num&&(this.calcValue=this.calcValue/100+""),["/","+","-","*"].includes(num)&&(this.oper=num,this.prevCalcValue=this.calcValue,this.calcValue=""),"="===num&&(this.calcValue=eval(this.prevCalcValue+this.oper+this.calcValue),this.prevCalcValue="",this.oper=null)}}}},3825:function(_,e,r){var c=r(9242),a=r(3396);const u={id:"app"};function n(_,e,r,c,n,t){const i=(0,a.up)("calculator");return(0,a.wg)(),(0,a.iD)("div",u,[(0,a.Wm)(i)])}r(6699);var t=r(7139);const i={class:"p-3",style:{"max-width":"600px",margin:"50px auto",background:"#234"}},o={class:"w-full rounded text-end m-1 p-3 lead font-weight-bold text-white bg-vue-dark"},l={class:"row no-gutters"},p=["onClick"];function s(_,e,r,c,u,n){return(0,a.wg)(),(0,a.iD)("div",i,[(0,a._)("div",o,(0,t.zw)(u.calcValue||0),1),(0,a._)("div",l,[((0,a.wg)(!0),(0,a.iD)(a.HY,null,(0,a.Ko)(u.calcElement,(_=>((0,a.wg)(),(0,a.iD)("div",{class:"col-3",key:_},[(0,a._)("div",{class:(0,t.C_)(["lead text-white text-center m-2 py-4 rounded hover-class bg-vue-dark",{"bg-vue-green":["C","*","/","-","+","%","="].includes(_)}]),onClick:e=>n.action(_)},(0,t.zw)(_),11,p)])))),128))])])}var w=r(4587),b=r(89);const d=(0,b.Z)(w.Z,[["render",s]]);var k=d,f={name:"App",components:{Calculator:k}};const v=(0,b.Z)(f,[["render",n]]);var h=v;(0,c.ri)(h).mount("#app")}},__webpack_module_cache__={};function __webpack_require__(_){var e=__webpack_module_cache__[_];if(void 0!==e)return e.exports;var r=__webpack_module_cache__[_]={exports:{}};return __webpack_modules__[_](r,r.exports,__webpack_require__),r.exports}__webpack_require__.m=__webpack_modules__,function(){var _=[];__webpack_require__.O=function(e,r,c,a){if(!r){var u=1/0;for(o=0;o<_.length;o++){r=_[o][0],c=_[o][1],a=_[o][2];for(var n=!0,t=0;t<r.length;t++)(!1&a||u>=a)&&Object.keys(__webpack_require__.O).every((function(_){return __webpack_require__.O[_](r[t])}))?r.splice(t--,1):(n=!1,a<u&&(u=a));if(n){_.splice(o--,1);var i=c();void 0!==i&&(e=i)}}return e}a=a||0;for(var o=_.length;o>0&&_[o-1][2]>a;o--)_[o]=_[o-1];_[o]=[r,c,a]}}(),function(){__webpack_require__.n=function(_){var e=_&&_.__esModule?function(){return _["default"]}:function(){return _};return __webpack_require__.d(e,{a:e}),e}}(),function(){__webpack_require__.d=function(_,e){for(var r in e)__webpack_require__.o(e,r)&&!__webpack_require__.o(_,r)&&Object.defineProperty(_,r,{enumerable:!0,get:e[r]})}}(),function(){__webpack_require__.g=function(){if("object"===typeof globalThis)return globalThis;try{return this||new Function("return this")()}catch(_){if("object"===typeof window)return window}}()}(),function(){__webpack_require__.o=function(_,e){return Object.prototype.hasOwnProperty.call(_,e)}}(),function(){var _={143:0};__webpack_require__.O.j=function(e){return 0===_[e]};var e=function(e,r){var c,a,u=r[0],n=r[1],t=r[2],i=0;if(u.some((function(e){return 0!==_[e]}))){for(c in n)__webpack_require__.o(n,c)&&(__webpack_require__.m[c]=n[c]);if(t)var o=t(__webpack_require__)}for(e&&e(r);i<u.length;i++)a=u[i],__webpack_require__.o(_,a)&&_[a]&&_[a][0](),_[a]=0;return __webpack_require__.O(o)},r=self["webpackChunkvue_calc_app"]=self["webpackChunkvue_calc_app"]||[];r.forEach(e.bind(null,0)),r.push=e.bind(null,r.push.bind(r))}();var __webpack_exports__=__webpack_require__.O(void 0,[998],(function(){return __webpack_require__(3825)}));__webpack_exports__=__webpack_require__.O(__webpack_exports__)})();
//# sourceMappingURL=app.46b5e944.js.map
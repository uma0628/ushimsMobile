"use strict";angular.module("ushiMoApp",["ngAnimate","ngAria","ngCookies","ngMessages","ngResource","ngRoute","ngSanitize","ngTouch"]).config(["$routeProvider",function(a){a.when("/",{templateUrl:"views/main.html",controller:"MainCtrl",controllerAs:"main"}).when("/about",{templateUrl:"views/about.html",controller:"AboutCtrl",controllerAs:"about"}).when("/header",{templateUrl:"views/header.html",controller:"headerCtrl",controllerAs:"header"}).when("/basic",{templateUrl:"views/basic.html",controller:"BasicCtrl",controllerAs:"basic"}).when("/search",{templateUrl:"views/search.html",controller:"SearchCtrl",controllerAs:"search"}).when("/result",{templateUrl:"views/result.html",controller:"ResultCtrl",controllerAs:"result"}).otherwise({redirectTo:"/"})}]),angular.module("ushiMoApp").controller("MainCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ushiMoApp").controller("AboutCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ushiMoApp").controller("BasicCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ushiMoApp").controller("SearchCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ushiMoApp").controller("ResultCtrl",function(){this.awesomeThings=["HTML5 Boilerplate","AngularJS","Karma"]}),angular.module("ushiMoApp").run(["$templateCache",function(a){a.put("views/about.html","<p>This is the about view.</p>"),a.put("views/basic.html",'<div ng-include="\'views/header.html\'" class="header"></div> <script>$(document).ready(function(){\n    $(\'ul.tabs\').tabs();\n  });</script> <main class="content-main"> <div class="row"> <div class="col s12"> <ul class="tabs"> <li class="tab col s3"><a href="#basic" class="active">基本</a></li> <li class="tab col s3"><a href="#introduct">導入</a></li> <li class="tab col s3"><a href="#tane">種付</a></li> <li class="tab col s3"><a href="#bunben">分娩</a></li> <li class="tab col s3"><a href="#move">移動</a></li> <li class="tab col s3"><a href="#kenon">検温</a></li> <li class="tab col s3"><a href="#tana">棚卸</a></li> <li class="tab col s3"><a href="#measure">測定情報</a></li> </ul> </div> <div id="basic" class="col s12"> <h4>基本情報</h4> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>個体識別番号</td> <td>3333333333</td> </tr> <tr> <td>耳標色・番号</td> <td>ピンク・3</td> </tr> <tr> <td>種別</td> <td>黒毛和種</td> </tr> <tr> <td>名号</td> <td>ままくりえいと</td> </tr> <tr> <td>性別</td> <td>雌</td> </tr> <tr> <td>登録得点</td> <td>0.0</td> </tr> <tr> <td>父牛</td> <td>父牛</td> </tr> <tr> <td>母牛</td> <td>ははうし</td> </tr> <tr> <td>母牛得点</td> <td>0.0</td> </tr> <tr> <td>母牛産次数</td> <td>1</td> </tr> <tr> <td>母の父</td> <td>母の父</td> </tr> <tr> <td>母の祖父</td> <td>母の祖父</td> </tr> <tr> <td>生年月日</td> <td>2013/06/10</td> </tr> <tr> <td>産次数</td> <td>0</td> </tr> </tbody> </table> </div> <div id="introduct" class="col s12"> <h4>繁殖導入情報</h4> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>導入日</td> <td>2013/08/10</td> </tr> <tr> <td>導入区分</td> <td></td> </tr> <tr> <td>市場</td> <td>宮崎中央農業協同組合家畜市場（宮崎中央農協畜産部）</td> </tr> <tr> <td>生産者名</td> <td>生産者名</td> </tr> <tr> <td>生産者住所</td> <td>宮崎</td> </tr> <tr> <td>導入価格</td> <td>700,000</td> </tr> <tr> <td>消費税</td> <td>35,000</td> </tr> <tr> <td>導入諸経費</td> <td>2,000</td> </tr> <tr> <td>導入運賃</td> <td>0</td> </tr> <tr> <td>導入メモ</td> <td>EV子牛購入→繁殖として育てる　繁殖の導入メモです。</td> </tr> </tbody></table> </div> </div> <div id="tane" class="col s12"> <h4>種付情報</h4> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>産次</td> <td>2</td> </tr> <tr> <td>種付順</td> <td>1</td> </tr> <tr> <td>種付年月日</td> <td>2015/06/11</td> </tr> <tr> <td>種雄牛名号</td> <td>種牛一郎</td> </tr> <tr> <td>授精師</td> <td>久理栄人</td> </tr> <tr> <td>分娩予定日</td> <td>2016/03/22</td> </tr> </tbody></table> </div>  <div id="bunben" class="col s12"> <h4>分娩情報</h4> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>産次</td> <td>2</td> </tr> <tr> <td>種付順</td> <td>1</td> </tr> <tr> <td>種付年月日</td> <td>2015/06/11</td> </tr> <tr> <td>種雄牛名号</td> <td>種牛一郎</td> </tr> <tr> <td>授精師</td> <td>久理栄人</td> </tr> <tr> <td>分娩予定日</td> <td>2016/03/22</td> </tr> <tr> <td>分娩日</td> <td></td> </tr> <tr> <td>分娩区分</td> <td></td> </tr> <tr> <td>性別</td> <td></td> </tr> <tr> <td>耳標色</td> <td></td> </tr> <tr> <td>耳標番号</td> <td></td> </tr> <tr> <td>個体識別番号</td> <td></td> </tr> <tr> <td>名号</td> <td></td> </tr> <tr> <td>検温・治療</td> <td> <a class="waves-effect waves-light btn"><i class="material-icons right">description</i>Excel出力</a> </td> </tr> <tr> <td>枝肉成績</td> <td></td> </tr> <tr> <td>備考</td> <td></td> </tr> </tbody> </table> </div> <div id="move" class="col s12"> <h4>移動履歴</h4> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2014/04/10</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>移動先農場</td> <td>繁殖牧場</td> </tr> <tr> <td>移動先牛舎</td> <td>A</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2013/08/10</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>移動先農場</td> <td>子牛牧場</td> </tr> <tr> <td>移動先牛舎</td> <td>子牛牛舎</td> </tr> </tbody> </table> </div> <div id="kenon" class="col s12"> <h4>検温・治療履歴</h4> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015/08/21</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>体温</td> <td>36.1</td> </tr> <tr> <td>削蹄</td> <td></td> </tr> <tr> <td>治療内容</td> <td>完治確認</td> </tr> <tr> <td>備考</td> <td></td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015/08/20</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>体温</td> <td>36.0</td> </tr> <tr> <td>削蹄</td> <td></td> </tr> <tr> <td>治療内容</td> <td>消毒</td> </tr> <tr> <td>備考</td> <td>診察予定</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015/08/19</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>体温</td> <td>36.5</td> </tr> <tr> <td>削蹄</td> <td></td> </tr> <tr> <td>治療内容</td> <td></td> </tr> <tr> <td>備考</td> <td>良好</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015/08/18</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>体温</td> <td>39.0</td> </tr> <tr> <td>削蹄</td> <td>済</td> </tr> <tr> <td>治療内容</td> <td>削蹄中に怪我、消毒</td> </tr> <tr> <td>備考</td> <td>手当</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015/08/17</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>体温</td> <td>36.7</td> </tr> <tr> <td>削蹄</td> <td></td> </tr> <tr> <td>治療内容</td> <td></td> </tr> <tr> <td>備考</td> <td></td> </tr> </tbody> </table> </div> <div id="tana" class="col s12"> <h4>棚卸情報</h4> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td></td> </tr> <tr> <td>肥育日数</td> <td>365</td> </tr> <tr> <td>飼料代</td> <td>0</td> </tr> <tr> <td>経費</td> <td>0</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2015</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td>繁殖牧場</td> </tr> <tr> <td>肥育日数</td> <td>365</td> </tr> <tr> <td>飼料代</td> <td>0</td> </tr> <tr> <td>経費</td> <td>0</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2014</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td></td> </tr> <tr> <td>肥育日数</td> <td>365</td> </tr> <tr> <td>飼料代</td> <td>159,140</td> </tr> <tr> <td>経費</td> <td>15,695</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2014</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td>繁殖牧場</td> </tr> <tr> <td>肥育日数</td> <td>266</td> </tr> <tr> <td>飼料代</td> <td>0</td> </tr> <tr> <td>経費</td> <td>0</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2014</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td>子牛牧場</td> </tr> <tr> <td>肥育日数</td> <td>99</td> </tr> <tr> <td>飼料代</td> <td>0</td> </tr> <tr> <td>経費</td> <td>0</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2013</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td></td> </tr> <tr> <td>肥育日数</td> <td>144</td> </tr> <tr> <td>飼料代</td> <td>64,800</td> </tr> <tr> <td>経費</td> <td>0</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>2013</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td>子牛牧場</td> </tr> <tr> <td>肥育日数</td> <td>144</td> </tr> <tr> <td>飼料代</td> <td>0</td> </tr> <tr> <td>経費</td> <td>0</td> </tr> </tbody> </table> <div class="card-panel teal lighten-2 center-align white-text hoverable card-date"> <h5>合計</h5> </div> <table class="striped highlight z-depth-1"> <tbody> <tr> <td>農場</td> <td>239,635</td> </tr> <tr> <td>飼料代</td> <td>223,940</td> </tr> <tr> <td>経費</td> <td>15,695</td> </tr> </tbody> </table> <h4>出荷情報</h4> <span>出荷情報は登録されていません。</span> </div> <div id="measure" class="col s12"> <h4>測定情報</h4> <table class="striped highlight z-depth-1 responsive-table"> <thead> <th>測定日</th> <th>体重</th> <th>体高</th> <th>第一腰椎位</th> <th>十字部高</th> <th>体長</th> <th>胸囲</th> <th>胴囲</th> <th>管囲</th> <th>胸幅</th> <th>胸深</th> <th>尻長</th> <th>腰角幅</th> <th>寛幅</th> <th>座骨幅</th> <th>BCS</th> <th>備考</th> </thead> <tbody> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td></td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td></td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>5.00</td> <td>テスト</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td></td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td></td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>5.00</td> <td>テスト</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td></td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td></td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>5.00</td> <td>テスト</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td></td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td></td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>5.00</td> <td>テスト</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td></td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td></td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>5.00</td> <td>テスト</td> </tr> <tr> <td>2016/01/12</td> <td>506.0</td> <td>126.4</td> <td></td> <td>127.6</td> <td>157.8</td> <td>182.0</td> <td>213.0</td> <td></td> <td>42.0</td> <td>69.0</td> <td>47.5</td> <td>45.0</td> <td>47.0</td> <td>23.0</td> <td>5.00</td> <td>テスト</td> </tr> </tbody> </table> </div>  </main>'),a.put("views/header.html",'<div class="header"> <nav> <div class="nav-wrapper"> <a href="#" class="brand-logo center"><h5>牛重個体管理システム</h5></a> <ul class="left hide-on-med-and-down"> <li><a href="mobile.html"><i class="material-icons">more_vert</i></a></li> </ul> </div> </nav> </div>'),a.put("views/main.html",'<div class="main"> <div class="login-panel"> <div class="login-title"> <h4>牛重モバイル</h4> </div> <div class="input-field"> <input id="userid" type="text" class="validate"> <label for="userid">ユーザID</label> </div> <div class="input-field"> <input id="password" type="password" class="validate"> <label for="password">パスワード</label> </div> <div class="login-btn"> <a href="/#/search" class="waves-effect waves-light btn"><i class="material-icons right">input</i>ログイン</a> </div> </div> </div>'),a.put("views/result.html",'<script>$(document).ready(function(){\n    $(\'.collapsible\').collapsible({\n      accordion : false // A setting that changes the collapsible behavior to expandable instead of the default accordion style\n    });\n  });</script> <div ng-include="\'views/header.html\'" class="header"></div> <main class="content-main"> <div class="input-field"> <input id="search-text" type="text" class="validate"> <label for="search-text">検索ワード</label> </div> <div class="right-align"> <a href="/#/result" class="waves-effect waves-light btn"><i class="material-icons">search</i></a> </div> <ul class="collapsible" data-collapsible="accordion"> <li> <div class="collapsible-header"><i class="material-icons">info_outline</i>3 3333333333 ままくりえいと 雌</div> <div class="collapsible-body center-align"> <a class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>ダッシュボード</a> <a href="/#/basic" class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>詳細</a> <a class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>体重・BCS推定</a> </div> </li> <li> <div class="collapsible-header"><i class="material-icons">info_outline</i>433 8357594333 やすひら 雌</div> <div class="collapsible-body center-align"> <a class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>ダッシュボード</a> <a href="/#/basic" class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>詳細</a> <a class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>体重・BCS推定</a> </div> </li> <li> <div class="collapsible-header"><i class="material-icons">info_outline</i>755 2535484595 たかもり 雌</div> <div class="collapsible-body center-align"> <a class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>ダッシュボード</a> <a href="/#/basic" class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>詳細</a> <a class="waves-effect waves-light btn result-btn"><i class="material-icons left">cloud</i>体重・BCS推定</a> </div> </li> </ul> </main>'),a.put("views/search.html",'<div ng-include="\'views/header.html\'" class="header"></div> <main class="content-main"> <div class="input-field"> <input id="search-text" type="text" class="validate"> <label for="search-text">検索ワード</label> </div> <div class="right-align"> <a href="/#/result" class="waves-effect waves-light btn"><i class="material-icons">search</i></a> </div> </main>')}]);
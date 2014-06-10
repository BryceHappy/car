<? $this->load->view('includes/header'); ?>
<? $this->load->view('includes/admin_navbar'); ?>
<div class="container">



<form method="post" action="<?=site_url('carlist/index'); ?>" id="form2">
    <script type="text/javascript">
//<![CDATA[
var theForm = document.forms['form2'];
if (!theForm) {
    theForm = document.form2;
}
function __doPostBack(eventTarget, eventArgument) {
    if (!theForm.onsubmit || (theForm.onsubmit() != false)) {
        theForm.__EVENTTARGET.value = eventTarget;
        theForm.__EVENTARGUMENT.value = eventArgument;
        theForm.submit();
    }
}
//]]>
    </script>

    <input type="hidden" name="hidtxt3"/>
    <a id="TOP" name="TOP" class="TOP"></a>
    <div class="mainBody">
        <div class="mainCont">
            <div class="mainCenter1">
                <div class="roomName">
                    <div class="roomNameIn ofh">
                        <div class="name">
                            <b>購車試算</b>
                        </div>
                    </div>
                </div>
                <div class="salesBody">
                    <div class="salesBodyIn">
                        <div class="mainCenter3">
                            <div class="greyBarT1 salesFormulaSelect">
                                <div class="f1">
                                    車款選擇
                                </div>
                                <div class="hr1">
                                </div>
                                <div id="setCarName" class="jSelect fs">
                                    <input type="hidden" value="3">
                                    <a class="name" href="javascript:">TOTOYA - ALTIS</a>
                                    <div class="sub">
<!--                                         -- TOTOYA --
                                        <a key="0" href="javascript:;">ALTIS</a>
                                        <a key="1" href="javascript:;">CAMRY</a>
                                        <a key="2" href="javascript:;">CAMRY HYBRID</a>
                                        <a key="3" href="javascript:;">RAV4</a>
                                        <a key="4" href="javascript:;">VIOS</a>
                                        <a key="5" href="javascript:;">WISH</a>
                                        <a key="6" href="javascript:;">YARIS</a>
                                        -- Luxgen --
                                        <a key="7" href="javascript:;">U6 Trubo</a>
                                        <a key="8" href="javascript:;">U7 Trubo</a>
                                        -- FORD --
                                        <a key="9" href="javascript:;">FOCUS 4D</a>
                                        <a key="10" href="javascript:;">FOCUS 5D</a>
                                        <a key="11" href="javascript:;">ECOSPORT</a>
                                        <a key="12" href="javascript:;">KUGA</a>
                                        -- NISSAN --                                         
                                        <a key="13" href="javascript:;">SENTRA</a>
                                        <a key="13" href="javascript:;">LIVINA</a> -->
                                    </div>
                                </div>
                                <div class="hr1">
                                </div>
                                <div class="f1">
                                    車型選擇
                                </div>
                                <div class="hr1">
                                </div>
                                <div id="setCarLevel" class="jSelect fs">
                                    <input type="hidden">
                                    <a class="name" href="javascript:">---</a>
                                    <div class="sub">
                                    </div>
                                </div>
                            </div>
                            <!--.greyBarT1-->
                            <div class="salesForumlaCar ofh">
                                <div class="img">
                                    <img id="salesImg" src="images/gif.gif" alt=""/>
                                </div>
                                <div class="txt">
                                    <div id="salesName" class="title">
                                    </div>
                                    <div class="price">
                                        <em>建議售價</em><b>NT$ <span id="salesPrice">---</span></b>
                                    </div>
                                    <div class="price">
                                        <em>排氣量</em><b><span id="salesCC">---</span>c.c.</b>
                                    </div>
                                </div>
                            </div>
                            <!--.salesForumlaCar-->
                            <div class="pageTitleT1">
                                <b>賦稅費用</b>
                            </div>
                            <div id="setFormula" class="salesFormulaSwitch">
                                <input id="formFormula" type="hidden" value="0"/>
                                <b>車輛用途：</b><span class="bevelT1 br1"><a href="javascript:;" class="ON" onclick="_gaq.push(['_trackPageview', '/calculator_private.aspx']);">自用</a><span class="hr1"></span><a href="javascript:;" onclick="_gaq.push(['_trackPageview', '/calculator_business.aspx']);">營業用</a></span>
                            </div>
                            <div class="salesFormulaEquation ofh">
                                <div class="f1 br1">
                                    <span class="each">
                                        <b>規費</b>
                                        <i>NT$ <em id="salesRule">1,250</em></i>
                                    </span>
                                    
                                    <span class="each">
                                        <b>牌照稅</b>
                                        <i>NT$ <em id="salesLicense">0</em></i>
                                    </span>
                                    <span class="each">
                                        <b>燃料稅</b>
                                        <i>NT$ <em id="salesFuel">0</em></i>
                                    </span>
                                </div>
                                <div class="f2">
                                    =
                                </div>
                                <div class="f3 br1">
                                    <span class="each">
                                    <b>合計費用</b>
                                    <i class="red">NT$ <em id="salesTotal">1250</em></i>
                                    </span>
                                </div>
                            </div>
                        </div>
                        <!--.mainCenter3-->
                        <div class="pageHr1">
                            <div class="hr1">
                            </div>
                        </div>
                        <div class="mainCenter3">
                            <div class="salesFormulaResult ofh">
                                <div class="eachBox left">
                                    <div class="pageTitleT1">
                                        <b>優惠貸款試算</b>
                                    </div>
                                    <div class="salesFormulaResultBox">
                                        <div id="salesBonusBox" class="salesFormulaResultBoxIn br1">
                                            <div class="cont">
                                                <div class="ofh">
                                                    <b>頭款金額：</b><span>NT$<em id="bonusHead">--</em></span>
                                                </div>
                                                <div class="ofh">
                                                    <b>貸款金額：</b><span>NT$<em id="bonusLoan">--</em></span>
                                                </div>
                                                <div class="ofh">
                                                    <b>貸款利率：</b><span><em id="bonusRate">--</em>%</span>
                                                </div>
                                                <div class="ofh">
                                                    <b>分期月數：</b><span><em id="bonusMonth">--</em>期</span>
                                                </div>
                                                <div class="total">
                                                    <b>月付金額：</b><span>NT$<em id="bonusTotal">---</em></span>
                                                </div>
                                                <div class="txt">
                                                    
                                                </div>
                                            </div>
                                            <div class="cont hide">
                                                <div class="tr">
                                                    很抱歉，此車款本月沒有優惠零利率方案<br/>無法進行優惠貸款試算。
                                                </div>
                                            </div>
                                        </div>
                                        <!--.salesFormulaResultBoxIn-->
                                    </div>
                                    <!--.salesFormulaResultBox-->
                                </div>
                                <!--.eachBox-->
                                <div class="eachBox right">
                                    <div class="pageTitleT1">
                                        <b>一般貸款試算</b>
                                    </div>
                                    <div class="salesFormulaResultBox">
                                        <div id="enterLock" class="salesFormulaResultBoxIn br1">
                                            <div class="cont">
                                                <div class="ofh">
                                                    <b>頭款金額：</b><span><input id="normalHead" type="text" class="bn br1 inputT1 inputBG2 itext1" value="0"/>元</span>
                                                </div>
                                                <div class="ofh">
                                                    <b>貸款金額：</b><span><i id="normalLoan">--</i>元</span>
                                                </div>
                                                <div class="ofh">
                                                    <b>貸款利率：</b><span><input id="normalRate" type="text" class="bn br1 inputT1 inputBG2 itext1" value="0"/>%</span>
                                                </div>
                                                <div class="ofh">
                                                    <b>分期月數：</b><span><input id="normalMonth" type="text" class="bn br1 inputT1 inputBG2 itext1" value="24"/>期</span>
                                                </div>
                                                <div class="btn">
                                                    <a href="javascript:;" id="normalSend" > <button type="button" class="btn btn-primary btn-sm"> 確認試算 </button></a>
                                                </div>
                                                <div class="total">
                                                    <b>月付金額：</b><span>NT$<em id="normalTotal">---</em></span>
                                                </div>
                                            </div>
                                        </div>
                                        <!--.salesFormulaResultBoxIn-->
                                    </div>
                                    <!--.salesFormulaResultBox-->
                                </div>
                                <!--.eachBox-->
                            </div>
                            <!--.salesFormulaResult-->
                        </div>
                        <!--.mainCenter3-->
                    </div>
                    <!--.salesBodyIn-->
                </div>
                <!--.salesBody-->
            </div>
            <!--.mainCont-->
        </div>
        <!--.mainBody-->
    </div>
    <!--.Box-->

</form>

<script src="<?=base_url('js/jquery.js'); ?>"></script>
<script src="<?=base_url('js/jquery.tablesorter.js'); ?>"></script>
<script type="text/javascript" src="<?=base_url('js/j.js'); ?>"></script>
<script type="text/javascript" src="<?=base_url('js/iscroll.js'); ?>"></script>
<script type="text/javascript" src="<?=base_url('js/x.js'); ?>"></script>
<script>
$(document).ready(function(){
  $('#nav-car_list').addClass('active');
  var eachCarLevel = new Array();
(function () {

        var json_str = <?=$datas;?>;
        var count_brand = 0;   
        
        $.each(json_str, function(key, value){          
          $( "div.sub" ).append("--"+key+"--");
          $.each(value, function(k, v){
            var str = "<a key=\""+count_brand+"\" href=\"javascript:;\">"+k+"</a>";
            $( "div.sub" ).append(str);
            var tmp_ary = new Array();
            var p = 0;
            $.each(v, function(kk, vv){
                         tmp_ary[p] = vv;
                         p++;                             
                });
            
            eachCarLevel[count_brand] = tmp_ary;
            count_brand++;
          });

        });


        var carCC =  new Array(1800,2400,3000,3600,4200);
        var carCCprice = new Array(
            new Array(
                {lic:7120,fue:4800},
                {lic:3060,fue:2400}
            ),
            new Array(
                {lic:11230,fue:6210},
                {lic:6480,fue:3083}
            ),
            new Array(
                {lic:15210,fue:7200},
                {lic:9900,fue:3600}
            ),
            new Array(
                {lic:28220,fue:8640},
                {lic:16380,fue:null}
            ),
            new Array(
                {lic:28220,fue:9810},
                {lic:16380,fue:null}
            )
        );
        var salesPrice = $('#salesPrice');
        var salesCC = $('#salesCC');

        var salesImg = $('#salesImg');
        var salesName = $('#salesName');
        var salesRule = $('#salesRule'); //規費 1250
        var salesLicense = $('#salesLicense'); //牌照稅
        var salesFuel = $('#salesFuel'); //燃料稅
        var salesTotal = $('#salesTotal'); //合計費用
        var formFormula = $('#formFormula');
        
        var bonusHead = $('#bonusHead');
        var bonusLoan = $('#bonusLoan');
        var bonusRate = $('#bonusRate');
        var bonusMonth = $('#bonusMonth');
        var bonusTotal = $('#bonusTotal');

        
        var normalHead = $('#normalHead');
        var normalLoan = $('#normalLoan');
        var normalRate = $('#normalRate');
        var normalMonth = $('#normalMonth');
        var normalTotal = $('#normalTotal');
        
        
        var setCarLevelInput = $('#setCarLevel input');
        var carIndex=0;
        var carPrex;
        
        aInputT1($('#setFormula a'), formFormula);
        function aInputT1(d, p) {
            d.each(function (i) {
                $(this).click(function () {
                    d.removeClass('ON').eq(i).addClass('ON');
                    p.val(i);
                    setLicFueFN( ri(setCarLevelInput.val()) );
                });
            });
            $(document).ready(function (){
                d.eq(0).click();
            });
        };
        
        function ri(d){
            return parseFloat(d);
        };
        function ref(d){
            return d.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");
        }
        
        var getPaidRate;
        function getPaid(l,r,m){
            //'月付額(期付金額(結果))=    (總價-頭款) *  利率 *  (1+ 利率)^期數 )  /  ( ( (1+ 利率)^期數 ) -1 )
            if(r==0){
                return Math.round( l*(1+(r/100))/m );
            } else {
                r = r/1200;
                getPaidRate = Math.pow((1+r),m);
                return Math.round( l*getPaidRate*r/(getPaidRate-1) );
            }
            
            /*if(r==0){
                return Math.round(l/m);
            } else{
                return Math.round(( l * r * Math.pow((1+(r/100)),m) ) / ( Math.pow((1+(r/100)),m)-1));
            };*/
            //return Math.round( l*(1+(r/100))/m );
        };


        var lastCheck=0;
        function checkCC(c){
            for(k in carCC){
                if(c < carCC[k]) {
                    lastCheck = k;
                    break;
                };
            }
        }
        var salesBonusBox = $('#salesBonusBox > div');
        function setLicFue(o){
            // alert(o.key);
            checkCC(ri(o.cc));          
            var d = carCCprice[lastCheck][ri(formFormula.val())];
            salesLicense.text(ref(d.lic));            
            salesFuel.text(ref(d.fue));
            salesTotal.text( ref(1250 + d.lic + d.fue));
            
            if(o.offer_rate == '' || o.offer_month ==''){
                salesBonusBox.stop().hide().eq(1).fadeIn(500);
            } else {
                bonusHead.text( ref(ri(o.price)-ri(o.offer_loan)) );
                bonusLoan.text(ref(o.offer_loan));
                bonusRate.text(ref(o.offer_rate));
                bonusMonth.text(ref(o.offer_month));
                bonusTotal.text(  ref(getPaid(ri(o.offer_loan),ri(o.offer_rate),ri(o.offer_month))) );
                salesBonusBox.stop().hide().eq(0).fadeIn(500);
            };
            d=null;
            
        };
        var normalSend = $('#normalSend').click(function (){
            normalTotal.text( ref(getPaid(ri(normalLoanNum),ri(normalRate.val()),ri(normalMonth.val()))));
        });
        normalHead.keyup(runNewNormal);
        var normalLoanNum = 0;
        function runNewNormal(){
            normalLoanNum = eachCarLevel[carIndex][ri(setCarLevelInput.val())].price - ri(normalHead.val());
            normalLoan.text( ref(normalLoanNum));
            
        }
        
        function setLicFueFN(n){
            setLicFue(eachCarLevel[carIndex][n]);
            salesPrice.text( ref(eachCarLevel[carIndex][n].price));
            salesCC.text(eachCarLevel[carIndex][n].cc);
            
        }
        var carNameCheckAr = new Array('86','ALPHARD','INNOVA','PRADO','PREVIA','RAV4');
        function checkCarName(s){
            for(e in carNameCheckAr){
                if(carNameCheckAr[e] == s){
                    $('#setFormula a').hide().eq(0).show().click();
                    break;
                } else {
                    $('#setFormula a').show();
                }
            }
        }
        
        var setCarLevel =$('#setCarLevel').fxSelect({
            onChange: function (r) {
                setLicFueFN(r.index);
                salesImg.attr('src', eachCarLevel[carIndex][r.index].img);
                salesName.text(eachCarLevel[carIndex][r.index].fnam);
                runNewNormal();
                normalSend.click();
                checkCarName(carPrex.replace(' ','').toUpperCase());
            }
        });
        

        
        var setCarLevelDom = $('#setCarLevel .sub');
        var setCarName = $('#setCarName').fxSelect({
            onChange: function (r) {

                carPrex = r.name+' ';
                tempStr='';
                setCarLevelDom.find('*').remove();
                carIndex = r.index;
                // console.log(eachCarLevel[r.value]);
                for(var i=0;i<eachCarLevel[r.value].length;i++){
                    // console.log(eachCarLevel[r.value][i]);
                    // if(eachCarLevel[r.value][i] == 'undefined')
                    //     continue;
                    // else
                    tempStr+='<a key="'+eachCarLevel[r.value][i].key+'" href="javascript:;">'+eachCarLevel[r.value][i].nam+'</a>';
                    // alert(eachCarLevel[r.value][i]);
                    // tempStr+='<a key="'+eachCarLevel[r.value][i].key+'" href="javascript:;">'+eachCarLevel[r.value][i].nam+'</a>';
                };
                setCarLevelDom.html(tempStr);
                setCarLevel.set(0);
                tempStr=null;
            }
        });

        if(getUrlVars()["z"]){
            $(window).load(function (){
                _gaq.push(['_trackPageview', '/SOS1/page1.html']);
            });
            
            for(e in eachCarLevel[1]){
                eachCarLevel[1][e].img="images/gif2.gif";
            };
            setCarName.set(1);
            $('#run1').css({left:$('#salesImg').offset().left+'px',top:$('#salesImg').offset().top+50+'px'});
            setTimeout(function (){
                var car1 = $('#run1');
                var car2 = $('#run2');
                var car3 = $('#run3');
                var car4 = $('#run4');
                var car5 = $('#run5');
                
                car1.animate({left:'1920px'}, 1000, function (){
                    car2.css({left:'auto', right:'-450px', bottom:'-200px'}).animate({right:'1920px', bottom:'600px'}, 1000, function (){
                        car2.remove();
                        car1.css({left:'-500px',top:'100px'}).animate({left:'1920px'}, 1000, function (){
                            car1.remove();
                            setTimeout(function (){
                                car4.show();
                            }, 400);                        
                            car3.css({left:'800px', top:'-310px'}).animate({left:'-1500px', top:'900px'}, 1000, function (){
                                car3.remove();
                                car5.show();
                                $('#mainMenu').append('<img src="images/arrow-stage-1.gif" alt="" class="arrowStage1" />');
                                $('#mainMenu div.menuList > a').eq(0).attr('href', 'showroom_model.aspx?z='+getUrlVars()["z"]);
                            });
                        });
                    });
                });
            }, 1500);
        } else {
            setCarName.set(0);
        }

        $('#enterLock input').keypress(function (e){
            if(e.keyCode == 13){
                e.preventDefault()
                return false;
            }
        });
    } ());

});

</script>
<? $this->load->view('includes/footer'); ?>

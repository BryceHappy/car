(function () {
        var eachCarLevel = new Array(
                new Array(
                            { key: '0',fnam: 'ALTIS 1.8 尊爵', nam: '1.8 尊爵',img:'assets/img/ALTIS.png', price: '766000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '1',fnam: 'ALTIS 1.8Z', nam: '1.8 Z',img:'assets/img/ALTIS.png', price: '769000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '2',fnam: 'ALTIS 1.8 豪華', nam: '1.8 豪華',img:'assets/img/ALTIS.png', price: '726000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '3',fnam: 'ALTIS 1.8 經典', nam: '1.8 經典',img:'assets/img/ALTIS.png', price: '689000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '4',fnam: 'ALTIS 1.8雅緻', nam: '1.8 雅緻',img:'assets/img/ALTIS.png', price: '646000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                ) ,            
                // new Array(
                //             { key: '0',fnam: '86', nam: '86',img:'assets/img/86.png', price: '1229000', cc: '1998', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                //             ,
                //             { key: '1',fnam: '86 LIMITED', nam: 'LIMITED',img:'assets/img/86.png', price: '1269000', cc: '1998', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                //             ,
                //             { key: '2',fnam: '86 GT Aero', nam: 'GT Aero',img:'assets/img/86.png', price: '1299000', cc: '1998', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                // ) ,
                // new Array(
                //             { key: '0',fnam: 'ALPHARD 3.5L', nam: '3.5L',img:'assets/img/ALPHARD.png', price: '2395000', cc: '3456', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                //             ,
                //             { key: '1',fnam: 'ALPHARD 2.4L', nam: '2.4L',img:'assets/img/ALPHARD.png', price: '1999000', cc: '2362', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                // ) ,
                new Array(
                            { key: '0',fnam: 'CAMRY 2.5 G', nam: '2.5 G',img:'assets/img/CAMRY.png', price: '999000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '1',fnam: 'CAMRY 2.5 E', nam: '2.5 E',img:'assets/img/CAMRY.png', price: '939000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '2',fnam: 'CAMRY 2.0 E', nam: '2.0 E',img:'assets/img/CAMRY.png', price: '849000', cc: '1998', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                ) ,
                new Array(
                            { key: '0',fnam: 'CAMRY HYBRID 2.5 Q', nam: '2.5 Q',img:'assets/img/CAMRY_HYBRID.png', price: '1399000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '1',fnam: 'CAMRY HYBRID 2.5 V Opt.', nam: '2.5 V Opt.',img:'assets/img/CAMRY_HYBRID.png', price: '1289000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '2',fnam: 'CAMRY HYBRID 2.5 V', nam: '2.5 V',img:'assets/img/CAMRY_HYBRID.png', price: '1199000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '3',fnam: 'CAMRY HYBRID 2.5 Sportivo', nam: '2.5 Sportivo',img:'assets/img/CAMRY_HYBRID.png', price: '1139000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '4',fnam: 'CAMRY HYBRID 2.5 G Opt.', nam: '2.5 G Opt.',img:'assets/img/CAMRY_HYBRID.png', price: '1099000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '5',fnam: 'CAMRY HYBRID 2.5 G', nam: '2.5 G',img:'assets/img/CAMRY_HYBRID.png', price: '1069000', cc: '2494', offer_loan: '600000', offer_rate: '0', offer_month: '36' } 
                ) ,
                // new Array(
                //             { key: '0',fnam: 'INNOVA 2.0 G─Hi(AT)', nam: '2.0 G─Hi(AT)',img:'assets/img/INNOVA.png', price: '760000', cc: '1998', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                //             ,
                //             { key: '1',fnam: 'INNOVA 2.0 G(AT)', nam: '2.0 G(AT)',img:'assets/img/INNOVA.png', price: '680000', cc: '1998', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                //             ,
                //             { key: '2',fnam: 'INNOVA 2.0 E(AT)', nam: '2.0 E(AT)',img:'assets/img/INNOVA.png', price: '610000', cc: '1998', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                //             ,
                //             { key: '3',fnam: 'INNOVA 2.0 J(AT)', nam: '2.0 J(AT)',img:'assets/img/INNOVA.png', price: '570000', cc: '1998', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                //             ,
                //             { key: '4',fnam: 'INNOVA 2.0 J(MT)', nam: '2.0 J(MT)',img:'assets/img/INNOVA.png', price: '539000', cc: '1998', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                // ) ,
                // new Array(
                //             { key: '0',fnam: 'PRIUS 1.8 G', nam: '1.8 G',img:'assets/img/PRIUS.png', price: '1259000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                //             ,
                //             { key: '1',fnam: 'PRIUS 1.8 E', nam: '1.8 E',img:'assets/img/PRIUS.png', price: '1099000', cc: '1798', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                // ) ,
                // new Array(
                //             { key: '0',fnam: 'PRIUS c 1.5 L', nam: '1.5 L',img:'assets/img/PRIUS.png', price: '869000', cc: '1497', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                // ) ,
                // new Array(
                //             { key: '0',fnam: 'PREVIA 2.4L', nam: '2.4L',img:'assets/img/PREVIA.png', price: '1399000', cc: '2362', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                //             ,
                //             { key: '1',fnam: 'PREVIA 2.4L豪華版', nam: '2.4L豪華版',img:'assets/img/PREVIA.png', price: '1649000', cc: '2362', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                //             ,
                //             { key: '2',fnam: 'PREVIA 3.5L旗艦版', nam: '3.5L旗艦版',img:'assets/img/PREVIA.png', price: '1889000', cc: '3456', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                // ) ,
                // new Array(
                //             { key: '0',fnam: 'PRADO 4.0VX', nam: '4.0VX',img:'assets/img/2013111909102000000000.png', price: '2550000', cc: '3956', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                // ) ,
                new Array(
                            { key: '0',fnam: 'RAV4 2.0 E', nam: '2.0 E',img:'assets/img/RAV4.png', price: '869000', cc: '1987', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '1',fnam: 'RAV4 2.0 E Hi', nam: '2.0 E Hi',img:'assets/img/RAV4.png', price: '929000', cc: '1987', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '2',fnam: 'RAV4 2.5 E', nam: '2.5 E',img:'assets/img/RAV4.png', price: '989000', cc: '2494', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '3',fnam: 'RAV4 2.5 G', nam: '2.5 G',img:'assets/img/RAV4.png', price: '1129000', cc: '2494', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                            ,
                            { key: '4',fnam: 'RAV4 2.5 4WD', nam: '2.5 4WD',img:'assets/img/RAV4.png', price: '1239000', cc: '2494', offer_loan: '300000', offer_rate: '0', offer_month: '24' } 
                ) ,
                new Array(
                            { key: '0',fnam: 'VIOS 1.5經典', nam: '1.5E',img:'assets/img/VIOS.jpg', price: '569000', cc: '', offer_loan: '0', offer_rate: '', offer_month: '' } 
                            ,
                            { key: '1',fnam: 'VIOS 1.5雅緻', nam: '1.5J',img:'assets/img/VIOS.jpg', price: '519000', cc: '', offer_loan: '0', offer_rate: '', offer_month: '' } 
                ) ,
                new Array(
                            { key: '0',fnam: 'WISH 2.0 尊爵', nam: '2.0 尊爵',img:'assets/img/WISH.png', price: '879000', cc: '1987', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '1',fnam: 'WISH 2.0 豪華', nam: '2.0 豪華',img:'assets/img/WISH.png', price: '849000', cc: '1987', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '2',fnam: 'WISH 2.0 經典', nam: '2.0 經典',img:'assets/img/WISH.png', price: '789000', cc: '1987', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '3',fnam: 'WISH 2.0 雅緻', nam: '2.0 雅緻',img:'assets/img/WISH.png', price: '769000', cc: '1987', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                ) ,
                new Array(
                            { key: '0',fnam: 'YARIS 1.5 RS Smart', nam: '1.5 RS Smart',img:'assets/img/YARIS.png', price: '635000', cc: '1497', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '1',fnam: 'YARIS 1.5 RS Leather', nam: '1.5 RS Fabric',img:'assets/img/YARIS.png', price: '585000', cc: '1497', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '2',fnam: 'YARIS 1.5 G Smart', nam: '1.5 G Smart',img:'assets/img/YARIS.png', price: '599000', cc: '1497', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '3',fnam: 'YARIS 1.5 G Leather', nam: '1.5 G Leather',img:'assets/img/YARIS.png', price: '579000', cc: '1497', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '4',fnam: 'YARIS 1.5 E Leather', nam: '1.5 E Leather',img:'assets/img/YARIS.png', price: '549000', cc: '1497', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                            ,
                            { key: '5',fnam: 'YARIS 1.5 E Fabric', nam: '1.5 E Fabric',img:'assets/img/YARIS.png', price: '535000', cc: '1497', offer_loan: '360000', offer_rate: '0', offer_month: '36' } 
                ),
                new Array(
                            { key: '0',fnam: 'U6 Turbo 1.8T 尊貴型', nam: '1.8T 尊貴型',img:'assets/img/U6.jpg', price: '729000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'U6 Turbo 1.8T 豪華型', nam: '1.8T 豪華型',img:'assets/img/U6.jpg', price: '769000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'U6 Turbo 2.0T 極致型', nam: '2.0T 極致型',img:'assets/img/U6.jpg', price: '8199000', cc: '1998', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'U6 Turbo 2.0T 尊爵型', nam: '2.0T 尊爵型',img:'assets/img/U6.jpg', price: '889000', cc: '1998', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '4',fnam: 'U6 Turbo 2.0T 旗艦型', nam: '2.0T 旗艦型',img:'assets/img/U6.jpg', price: '959000', cc: '1998', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'U7 Turbo 豪華型', nam: '豪華型',img:'assets/img/U7.jpg', price: '940000', cc: '2198', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'U7 Turbo 尊爵型', nam: '尊爵型',img:'assets/img/U7.jpg', price: '100000', cc: '2198', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'U7 Turbo 旗艦型', nam: '旗艦型',img:'assets/img/U7.jpg', price: '1125000', cc: '2198', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'U7 Turbo 4WD旗艦型', nam: '4WD旗艦型',img:'assets/img/U7.jpg', price: '1195000', cc: '2198', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'FOCUS 4D 汽油舒適型(2W)', nam: '汽油舒適型(2W)',img:'assets/img/FOCUS4.png', price: '590000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'FOCUS 4D 汽油時尚經典型(3W)', nam: '汽油時尚經典型(3W)',img:'assets/img/FOCUS4.png', price: '659000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'FOCUS 4D 汽油豪華型(4W)', nam: '汽油豪華型(4W)',img:'assets/img/FOCUS4.png', price: '719000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'FOCUS 4D 柴油時尚經典型(5W)', nam: '柴油時尚經典型(5W)',img:'assets/img/FOCUS4.png', price: '799000', cc: '1997', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'FOCUS 5D 汽油時尚型(6W)', nam: '汽油時尚型(6W)',img:'assets/img/FOCUS5.jpg', price: '669000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'FOCUS 5D 汽油時尚經典型(7W)', nam: '汽油時尚經典型(7W)',img:'assets/img/FOCUS5.jpg', price: '729000', cc: '1999', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'FOCUS 5D 汽油運動型(8W)', nam: '汽油運動型(8W)',img:'assets/img/FOCUS5.jpg', price: '759000', cc: '1999', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'FOCUS 5D 柴油頂級運動型(9W)', nam: '柴油頂級運動型(9W)',img:'assets/img/FOCUS5.jpg', price: '899000', cc: '1997', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'ECOSPORT 1.5 都會時尚型', nam: '都會時尚型',img:'assets/img/ECOSPORT.png', price: '699000', cc: '1498', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'ECOSPORT 1.5 都會尊貴型', nam: '都會尊貴型',img:'assets/img/ECOSPORT.png', price: '749000', cc: '1498', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'KUGA 1.6 雅緻型', nam: '雅緻型',img:'assets/img/KUGA.jpg', price: '888000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'KUGA 1.6 時尚型', nam: '時尚型',img:'assets/img/KUGA.jpg', price: '948000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'KUGA 1.6 時尚經典型', nam: '時尚經典型',img:'assets/img/KUGA.jpg', price: '998000', cc: '1596', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'KUGA 2.0 運動型', nam: '運動型',img:'assets/img/KUGA.jpg', price: '1098000', cc: '1998', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' }
                            ,
                            { key: '4',fnam: 'KUGA 2.0 旗艦型', nam: '旗艦型',img:'assets/img/KUGA.jpg', price: '1198000', cc: '1998', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'SENTRA 經典版', nam: '經典版',img:'assets/img/SENTRA.png', price: '645000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'SENTRA 傳奇版', nam: '傳奇版',img:'assets/img/SENTRA.png', price: '679000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'SENTRA 豪華版', nam: '豪華版',img:'assets/img/SENTRA.png', price: '709000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'SENTRA 影音版', nam: '影音版',img:'assets/img/SENTRA.png', price: '735000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' }
                            ,
                            { key: '4',fnam: 'SENTRA 旗艦版', nam: '旗艦版',img:'assets/img/SENTRA.png', price: '765000', cc: '1798', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                ),
                new Array(
                            { key: '0',fnam: 'LIVINA 經典版', nam: '經典版',img:'assets/img/LIVINA.png', price: '575000', cc: '1598', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '1',fnam: 'LIVINA 行家版', nam: '行家版',img:'assets/img/LIVINA.png', price: '599000', cc: '1598', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '2',fnam: 'LIVINA 豪華版', nam: '豪華版',img:'assets/img/LIVINA.png', price: '639000', cc: '1598', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                            ,
                            { key: '3',fnam: 'LIVINA 旗艦版', nam: '旗艦版',img:'assets/img/LIVINA.png', price: '665000', cc: '1598', offer_loan: '400000', offer_rate: '2.9', offer_month: '48' } 
                )
    );

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
                for(var i=0;i<eachCarLevel[r.value].length;i++){
                    tempStr+='<a key="'+eachCarLevel[r.value][i].key+'" href="javascript:;">'+eachCarLevel[r.value][i].nam+'</a>';
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


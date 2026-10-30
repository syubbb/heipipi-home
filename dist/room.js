
(()=>{
const SPR={"belly":"assets/belly.webp","belly0":"assets/belly0.png","belly1":"assets/belly1.png","belly2":"assets/belly2.png","belly3":"assets/belly3.png","belly4":"assets/belly4.png","belly5":"assets/belly5.png","belly6":"assets/belly6.png","belly7":"assets/belly7.png","crouch":"assets/crouch.webp","curl":"assets/curl.webp","eat":"assets/eat.webp","fullwalk0":"assets/fullwalk0.webp","fullwalk1":"assets/fullwalk1.webp","fullwalk2":"assets/fullwalk2.webp","fullwalk3":"assets/fullwalk3.webp","fullwalk4":"assets/fullwalk4.webp","fullwalk5":"assets/fullwalk5.webp","fullwalk6":"assets/fullwalk6.webp","fullwalk7":"assets/fullwalk7.webp","lie":"assets/lie.webp","loaf":"assets/loaf.webp","meow":"assets/meow.webp","rest0":"assets/rest0.webp","rest1":"assets/rest1.webp","rest2":"assets/rest2.webp","rest3":"assets/rest3.webp","sitfront":"assets/sitfront.webp","sitside":"assets/sitside.webp","toast_empty":"assets/toast_empty.webp","toast_seated":"assets/toast_seated.webp","toy_car_0":"assets/toy_car_0.webp","toy_car_1":"assets/toy_car_1.webp","toy_car_2":"assets/toy_car_2.webp","toy_car_3":"assets/toy_car_3.webp","toy_car_4":"assets/toy_car_4.webp","toy_car_5":"assets/toy_car_5.webp","toy_car_6":"assets/toy_car_6.webp","toy_car_7":"assets/toy_car_7.webp","toy_ele_0":"assets/toy_ele_0.webp","toy_ele_1":"assets/toy_ele_1.webp","toy_ele_2":"assets/toy_ele_2.webp","toy_ele_3":"assets/toy_ele_3.webp","toy_ele_4":"assets/toy_ele_4.webp","toy_ele_5":"assets/toy_ele_5.webp","toy_ele_6":"assets/toy_ele_6.webp","toy_ele_7":"assets/toy_ele_7.webp","toy_husky_0":"assets/toy_husky_0.webp","toy_husky_1":"assets/toy_husky_1.webp","toy_husky_2":"assets/toy_husky_2.webp","toy_husky_3":"assets/toy_husky_3.webp","toy_husky_4":"assets/toy_husky_4.webp","toy_husky_5":"assets/toy_husky_5.webp","toy_husky_6":"assets/toy_husky_6.webp","toy_husky_7":"assets/toy_husky_7.webp","toy_kiss_0":"assets/toy_kiss_0.webp","toy_kiss_1":"assets/toy_kiss_1.webp","toy_kiss_2":"assets/toy_kiss_2.webp","toy_kiss_3":"assets/toy_kiss_3.webp","toy_kiss_4":"assets/toy_kiss_4.webp","toy_kiss_5":"assets/toy_kiss_5.webp","toy_kiss_6":"assets/toy_kiss_6.webp","toy_kiss_7":"assets/toy_kiss_7.webp","toy_panda_0":"assets/toy_panda_0.webp","toy_panda_1":"assets/toy_panda_1.webp","toy_panda_2":"assets/toy_panda_2.webp","toy_panda_3":"assets/toy_panda_3.webp","toy_panda_4":"assets/toy_panda_4.webp","toy_panda_5":"assets/toy_panda_5.webp","toy_panda_6":"assets/toy_panda_6.webp","toy_panda_7":"assets/toy_panda_7.webp","vwk0":"assets/vwk0.webp","vwk1":"assets/vwk1.webp","vwk10":"assets/vwk10.webp","vwk11":"assets/vwk11.webp","vwk12":"assets/vwk12.webp","vwk13":"assets/vwk13.webp","vwk14":"assets/vwk14.webp","vwk15":"assets/vwk15.webp","vwk16":"assets/vwk16.webp","vwk17":"assets/vwk17.webp","vwk18":"assets/vwk18.webp","vwk19":"assets/vwk19.webp","vwk2":"assets/vwk2.webp","vwk20":"assets/vwk20.webp","vwk21":"assets/vwk21.webp","vwk22":"assets/vwk22.webp","vwk23":"assets/vwk23.webp","vwk24":"assets/vwk24.webp","vwk25":"assets/vwk25.webp","vwk26":"assets/vwk26.webp","vwk27":"assets/vwk27.webp","vwk28":"assets/vwk28.webp","vwk29":"assets/vwk29.webp","vwk3":"assets/vwk3.webp","vwk30":"assets/vwk30.webp","vwk31":"assets/vwk31.webp","vwk4":"assets/vwk4.webp","vwk5":"assets/vwk5.webp","vwk6":"assets/vwk6.webp","vwk7":"assets/vwk7.webp","vwk8":"assets/vwk8.webp","vwk9":"assets/vwk9.webp","walk_fur":"assets/walk_fur.webp","gif_walk_000":"assets/gif_walk_000.png","gif_walk_001":"assets/gif_walk_001.png","gif_walk_002":"assets/gif_walk_002.png","gif_walk_003":"assets/gif_walk_003.png","gif_walk_004":"assets/gif_walk_004.png","gif_walk_005":"assets/gif_walk_005.png","gif_walk_006":"assets/gif_walk_006.png","gif_walk_007":"assets/gif_walk_007.png","gif_walk_008":"assets/gif_walk_008.png","gif_walk_009":"assets/gif_walk_009.png","gif_walk_010":"assets/gif_walk_010.png","gif_walk_011":"assets/gif_walk_011.png","gif_walk_012":"assets/gif_walk_012.png","gif_walk_013":"assets/gif_walk_013.png","gif_walk_014":"assets/gif_walk_014.png","gif_walk_015":"assets/gif_walk_015.png","gif_walk_016":"assets/gif_walk_016.png","gif_walk_017":"assets/gif_walk_017.png","gif_walk_018":"assets/gif_walk_018.png","gif_walk_019":"assets/gif_walk_019.png","gif_walk_020":"assets/gif_walk_020.png","gif_walk_021":"assets/gif_walk_021.png","gif_walk_022":"assets/gif_walk_022.png","gif_walk_023":"assets/gif_walk_023.png","gif_walk_024":"assets/gif_walk_024.png","gif_walk_025":"assets/gif_walk_025.png","gif_walk_026":"assets/gif_walk_026.png","gif_walk_027":"assets/gif_walk_027.png","gif_walk_028":"assets/gif_walk_028.png","gif_walk_029":"assets/gif_walk_029.png","gif_walk_030":"assets/gif_walk_030.png","gif_walk_031":"assets/gif_walk_031.png","gif_walk_032":"assets/gif_walk_032.png","ye_eat_0":"assets/ye_eat_0.png","ye_eat_1":"assets/ye_eat_1.png","ye_groom_0":"assets/ye_groom_0.png","ye_groom_1":"assets/ye_groom_1.png","ye_lie_0":"assets/ye_lie_0.png","ye_lie_1":"assets/ye_lie_1.png","ye_walk_000":"assets/ye_walk_000.png","ye_walk_001":"assets/ye_walk_001.png","ye_walk_002":"assets/ye_walk_002.png","ye_walk_003":"assets/ye_walk_003.png","ye_walk_004":"assets/ye_walk_004.png","ye_walk_005":"assets/ye_walk_005.png","ye_walk_006":"assets/ye_walk_006.png","ye_walk_007":"assets/ye_walk_007.png","ye_walk_008":"assets/ye_walk_008.png","ye_walk_009":"assets/ye_walk_009.png","ye_walk_010":"assets/ye_walk_010.png","ye_walk_011":"assets/ye_walk_011.png","ye_walk_012":"assets/ye_walk_012.png","ye_walk_013":"assets/ye_walk_013.png","ye_walk_014":"assets/ye_walk_014.png","ye_walk_015":"assets/ye_walk_015.png","ye_walk_016":"assets/ye_walk_016.png","ye_walk_017":"assets/ye_walk_017.png","ye_walk_018":"assets/ye_walk_018.png","ye_walk_019":"assets/ye_walk_019.png","ye_walk_020":"assets/ye_walk_020.png","ye_walk_021":"assets/ye_walk_021.png","ye_walk_022":"assets/ye_walk_022.png","ye_walk_023":"assets/ye_walk_023.png","ye_walk_024":"assets/ye_walk_024.png","ye_walk_025":"assets/ye_walk_025.png","ye_walk_026":"assets/ye_walk_026.png","ye_walk_027":"assets/ye_walk_027.png","ye_walk_028":"assets/ye_walk_028.png","ye_walk_029":"assets/ye_walk_029.png","ye_walk_030":"assets/ye_walk_030.png","ye_walk_031":"assets/ye_walk_031.png","ye_walk_032":"assets/ye_walk_032.png","ye_walk_033":"assets/ye_walk_033.png","ye_walk_034":"assets/ye_walk_034.png","ye_walk_035":"assets/ye_walk_035.png","ye_walk_036":"assets/ye_walk_036.png","ye_walk_037":"assets/ye_walk_037.png","ye_walk_038":"assets/ye_walk_038.png","ye_walk_039":"assets/ye_walk_039.png","ye_walk_040":"assets/ye_walk_040.png","ye_walk_041":"assets/ye_walk_041.png","ye_walk_042":"assets/ye_walk_042.png","ye_walk_043":"assets/ye_walk_043.png","ye_walk_044":"assets/ye_walk_044.png","ye_walk_045":"assets/ye_walk_045.png","ye_walk_046":"assets/ye_walk_046.png","ye_walk_047":"assets/ye_walk_047.png","ye_walk_048":"assets/ye_walk_048.png","ye_walk_049":"assets/ye_walk_049.png","ye_walk_050":"assets/ye_walk_050.png","ye_walk_051":"assets/ye_walk_051.png","ye_walk_052":"assets/ye_walk_052.png","ye_walk_053":"assets/ye_walk_053.png","ye_walk_054":"assets/ye_walk_054.png","ye_walk_055":"assets/ye_walk_055.png","ye_walk_056":"assets/ye_walk_056.png","ye_walk_057":"assets/ye_walk_057.png","ye_walk_058":"assets/ye_walk_058.png","ye_walk_059":"assets/ye_walk_059.png","ye_walk_060":"assets/ye_walk_060.png","ye_walk_061":"assets/ye_walk_061.png","ye_walk_062":"assets/ye_walk_062.png","ye_walk_063":"assets/ye_walk_063.png","ye_walk_064":"assets/ye_walk_064.png","ye_walk_065":"assets/ye_walk_065.png","ye_walk_066":"assets/ye_walk_066.png","ye_walk_067":"assets/ye_walk_067.png","ye_walk_068":"assets/ye_walk_068.png","rabbit_walk_000":"assets/walk-v2/rabbit/000.png","rabbit_walk_001":"assets/walk-v2/rabbit/001.png","rabbit_walk_002":"assets/walk-v2/rabbit/002.png","rabbit_walk_003":"assets/walk-v2/rabbit/003.png","rabbit_walk_004":"assets/walk-v2/rabbit/004.png","rabbit_walk_005":"assets/walk-v2/rabbit/005.png","rabbit_walk_006":"assets/walk-v2/rabbit/006.png","rabbit_walk_007":"assets/walk-v2/rabbit/007.png","rabbit_walk_008":"assets/walk-v2/rabbit/008.png","rabbit_walk_009":"assets/walk-v2/rabbit/009.png","rabbit_walk_010":"assets/walk-v2/rabbit/010.png","rabbit_walk_011":"assets/walk-v2/rabbit/011.png","rabbit_walk_012":"assets/walk-v2/rabbit/012.png","rabbit_walk_013":"assets/walk-v2/rabbit/013.png","rabbit_walk_014":"assets/walk-v2/rabbit/014.png","rabbit_walk_015":"assets/walk-v2/rabbit/015.png","rabbit_walk_016":"assets/walk-v2/rabbit/016.png","rabbit_walk_017":"assets/walk-v2/rabbit/017.png","rabbit_walk_018":"assets/walk-v2/rabbit/018.png","rabbit_walk_019":"assets/walk-v2/rabbit/019.png","rabbit_walk_020":"assets/walk-v2/rabbit/020.png","rabbit_walk_021":"assets/walk-v2/rabbit/021.png","rabbit_walk_022":"assets/walk-v2/rabbit/022.png","rabbit_walk_023":"assets/walk-v2/rabbit/023.png","rabbit_walk_024":"assets/walk-v2/rabbit/024.png","rabbit_walk_025":"assets/walk-v2/rabbit/025.png","rabbit_walk_026":"assets/walk-v2/rabbit/026.png","rabbit_walk_027":"assets/walk-v2/rabbit/027.png","rabbit_walk_028":"assets/walk-v2/rabbit/028.png","rabbit_walk_029":"assets/walk-v2/rabbit/029.png","rabbit_walk_030":"assets/walk-v2/rabbit/030.png","rabbit_walk_031":"assets/walk-v2/rabbit/031.png","rabbit_walk_032":"assets/walk-v2/rabbit/032.png","rabbit_walk_033":"assets/walk-v2/rabbit/033.png","rabbit_walk_034":"assets/walk-v2/rabbit/034.png","rabbit_walk_035":"assets/walk-v2/rabbit/035.png","rabbit_walk_036":"assets/walk-v2/rabbit/036.png","rabbit_walk_037":"assets/walk-v2/rabbit/037.png","rabbit_rest_000":"assets/rabbit_rest_000.png","rabbit_rest_001":"assets/rabbit_rest_001.png","rabbit_rest_002":"assets/rabbit_rest_002.png","rabbit_rest_003":"assets/rabbit_rest_003.png","rabbit_rest_004":"assets/rabbit_rest_004.png","rabbit_rest_005":"assets/rabbit_rest_005.png","rabbit_rest_006":"assets/rabbit_rest_006.png","rabbit_rest_007":"assets/rabbit_rest_007.png","rabbit_rest_008":"assets/rabbit_rest_008.png","rabbit_rest_009":"assets/rabbit_rest_009.png","rabbit_rest_010":"assets/rabbit_rest_010.png","rabbit_rest_011":"assets/rabbit_rest_011.png","rabbit_rest_012":"assets/rabbit_rest_012.png","rabbit_rest_013":"assets/rabbit_rest_013.png","rabbit_rest_014":"assets/rabbit_rest_014.png","rabbit_rest_015":"assets/rabbit_rest_015.png","rabbit_rest_016":"assets/rabbit_rest_016.png","rabbit_rest_017":"assets/rabbit_rest_017.png","rabbit_rest_018":"assets/rabbit_rest_018.png","rabbit_rest_019":"assets/rabbit_rest_019.png","rabbit_rest_020":"assets/rabbit_rest_020.png","rabbit_rest_021":"assets/rabbit_rest_021.png","rabbit_rest_022":"assets/rabbit_rest_022.png","rabbit_rest_023":"assets/rabbit_rest_023.png","rabbit_rest_024":"assets/rabbit_rest_024.png","rabbit_rest_025":"assets/rabbit_rest_025.png","rabbit_rest_026":"assets/rabbit_rest_026.png","rabbit_rest_027":"assets/rabbit_rest_027.png","rabbit_rest_028":"assets/rabbit_rest_028.png","rabbit_rest_029":"assets/rabbit_rest_029.png","rabbit_rest_030":"assets/rabbit_rest_030.png","rabbit_rest_031":"assets/rabbit_rest_031.png","rabbit_rest_032":"assets/rabbit_rest_032.png","rabbit_rest_033":"assets/rabbit_rest_033.png","rabbit_rest_034":"assets/rabbit_rest_034.png","rabbit_rest_035":"assets/rabbit_rest_035.png","rabbit_rest_036":"assets/rabbit_rest_036.png","rabbit_rest_037":"assets/rabbit_rest_037.png","rabbit_rest_038":"assets/rabbit_rest_038.png","rabbit_rest_039":"assets/rabbit_rest_039.png","rabbit_rest_040":"assets/rabbit_rest_040.png","rabbit_rest_041":"assets/rabbit_rest_041.png","socks_walk_000":"assets/walk-v2/socks/000.png","socks_walk_001":"assets/walk-v2/socks/001.png","socks_walk_002":"assets/walk-v2/socks/002.png","socks_walk_003":"assets/walk-v2/socks/003.png","socks_walk_004":"assets/walk-v2/socks/004.png","socks_walk_005":"assets/walk-v2/socks/005.png","socks_walk_006":"assets/walk-v2/socks/006.png","socks_walk_007":"assets/walk-v2/socks/007.png","socks_walk_008":"assets/walk-v2/socks/008.png","socks_walk_009":"assets/walk-v2/socks/009.png","socks_walk_010":"assets/walk-v2/socks/010.png","socks_walk_011":"assets/walk-v2/socks/011.png","socks_walk_012":"assets/walk-v2/socks/012.png","socks_walk_013":"assets/walk-v2/socks/013.png","socks_walk_014":"assets/walk-v2/socks/014.png","socks_walk_015":"assets/walk-v2/socks/015.png","socks_walk_016":"assets/walk-v2/socks/016.png","socks_walk_017":"assets/walk-v2/socks/017.png","socks_walk_018":"assets/walk-v2/socks/018.png","socks_walk_019":"assets/walk-v2/socks/019.png","socks_walk_020":"assets/walk-v2/socks/020.png","socks_walk_021":"assets/walk-v2/socks/021.png","socks_walk_022":"assets/walk-v2/socks/022.png","socks_walk_023":"assets/walk-v2/socks/023.png","socks_walk_024":"assets/walk-v2/socks/024.png","socks_walk_025":"assets/walk-v2/socks/025.png","socks_walk_026":"assets/walk-v2/socks/026.png","socks_walk_027":"assets/walk-v2/socks/027.png","socks_walk_028":"assets/walk-v2/socks/028.png","socks_walk_029":"assets/walk-v2/socks/029.png","socks_walk_030":"assets/walk-v2/socks/030.png","socks_walk_031":"assets/walk-v2/socks/031.png","socks_walk_032":"assets/walk-v2/socks/032.png","socks_walk_033":"assets/walk-v2/socks/033.png","socks_walk_034":"assets/walk-v2/socks/034.png","socks_walk_035":"assets/walk-v2/socks/035.png","socks_walk_036":"assets/walk-v2/socks/036.png","socks_walk_037":"assets/walk-v2/socks/037.png","socks_walk_038":"assets/walk-v2/socks/038.png","socks_walk_039":"assets/walk-v2/socks/039.png","socks_walk_040":"assets/walk-v2/socks/040.png","socks_walk_041":"assets/walk-v2/socks/041.png","socks_walk_042":"assets/walk-v2/socks/042.png","socks_walk_043":"assets/walk-v2/socks/043.png","socks_walk_044":"assets/walk-v2/socks/044.png","socks_walk_045":"assets/walk-v2/socks/045.png","socks_walk_046":"assets/walk-v2/socks/046.png","socks_walk_047":"assets/walk-v2/socks/047.png","socks_walk_048":"assets/walk-v2/socks/048.png","socks_walk_049":"assets/walk-v2/socks/049.png","socks_walk_050":"assets/walk-v2/socks/050.png","socks_walk_051":"assets/walk-v2/socks/051.png","socks_walk_052":"assets/walk-v2/socks/052.png","socks_walk_053":"assets/walk-v2/socks/053.png","socks_walk_054":"assets/walk-v2/socks/054.png","socks_walk_055":"assets/walk-v2/socks/055.png","socks_walk_056":"assets/walk-v2/socks/056.png","socks_walk_057":"assets/walk-v2/socks/057.png","socks_walk_058":"assets/walk-v2/socks/058.png","socks_walk_059":"assets/walk-v2/socks/059.png","socks_walk_060":"assets/walk-v2/socks/060.png","socks_walk_061":"assets/walk-v2/socks/061.png","socks_walk_062":"assets/walk-v2/socks/062.png","socks_walk_063":"assets/walk-v2/socks/063.png","socks_walk_064":"assets/walk-v2/socks/064.png","socks_walk_065":"assets/walk-v2/socks/065.png","socks_walk_066":"assets/walk-v2/socks/066.png","socks_walk_067":"assets/walk-v2/socks/067.png","socks_walk_068":"assets/walk-v2/socks/068.png","socks_walk_069":"assets/walk-v2/socks/069.png","socks_walk_070":"assets/walk-v2/socks/070.png","socks_walk_071":"assets/walk-v2/socks/071.png","socks_walk_072":"assets/walk-v2/socks/072.png","socks_walk_073":"assets/walk-v2/socks/073.png","socks_walk_074":"assets/walk-v2/socks/074.png","socks_walk_075":"assets/walk-v2/socks/075.png","socks_walk_076":"assets/walk-v2/socks/076.png","socks_walk_077":"assets/walk-v2/socks/077.png","socks_walk_078":"assets/walk-v2/socks/078.png","socks_walk_079":"assets/walk-v2/socks/079.png","socks_walk_080":"assets/walk-v2/socks/080.png","socks_walk_081":"assets/walk-v2/socks/081.png","socks_walk_082":"assets/walk-v2/socks/082.png","socks_walk_083":"assets/walk-v2/socks/083.png","socks_walk_084":"assets/walk-v2/socks/084.png","socks_walk_085":"assets/walk-v2/socks/085.png","socks_walk_086":"assets/walk-v2/socks/086.png","socks_walk_087":"assets/walk-v2/socks/087.png","socks_walk_088":"assets/walk-v2/socks/088.png","socks_walk_089":"assets/walk-v2/socks/089.png","socks_walk_090":"assets/walk-v2/socks/090.png","socks_walk_091":"assets/walk-v2/socks/091.png","socks_walk_092":"assets/walk-v2/socks/092.png","socks_walk_093":"assets/walk-v2/socks/093.png","socks_walk_094":"assets/walk-v2/socks/094.png","socks_walk_095":"assets/walk-v2/socks/095.png","socks_walk_096":"assets/walk-v2/socks/096.png","socks_walk_097":"assets/walk-v2/socks/097.png","socks_walk_098":"assets/walk-v2/socks/098.png","socks_walk_099":"assets/walk-v2/socks/099.png","socks_walk_100":"assets/walk-v2/socks/100.png","socks_walk_101":"assets/walk-v2/socks/101.png","socks_walk_102":"assets/walk-v2/socks/102.png","socks_walk_103":"assets/walk-v2/socks/103.png","socks_walk_104":"assets/walk-v2/socks/104.png","socks_walk_105":"assets/walk-v2/socks/105.png","socks_walk_106":"assets/walk-v2/socks/106.png","socks_walk_107":"assets/walk-v2/socks/107.png","socks_walk_108":"assets/walk-v2/socks/108.png","socks_walk_109":"assets/walk-v2/socks/109.png","socks_walk_110":"assets/walk-v2/socks/110.png","socks_walk_111":"assets/walk-v2/socks/111.png","socks_walk_112":"assets/walk-v2/socks/112.png","socks_walk_113":"assets/walk-v2/socks/113.png","socks_walk_114":"assets/walk-v2/socks/114.png","rabbit_walk_038":"assets/walk-v2/rabbit/038.png","rabbit_walk_039":"assets/walk-v2/rabbit/039.png","rabbit_walk_040":"assets/walk-v2/rabbit/040.png","rabbit_walk_041":"assets/walk-v2/rabbit/041.png","rabbit_walk_042":"assets/walk-v2/rabbit/042.png","rabbit_walk_043":"assets/walk-v2/rabbit/043.png","rabbit_walk_044":"assets/walk-v2/rabbit/044.png","rabbit_walk_045":"assets/walk-v2/rabbit/045.png","rabbit_walk_046":"assets/walk-v2/rabbit/046.png","rabbit_walk_047":"assets/walk-v2/rabbit/047.png","rabbit_walk_048":"assets/walk-v2/rabbit/048.png","rabbit_walk_049":"assets/walk-v2/rabbit/049.png","rabbit_walk_050":"assets/walk-v2/rabbit/050.png","rabbit_walk_051":"assets/walk-v2/rabbit/051.png","rabbit_walk_052":"assets/walk-v2/rabbit/052.png","rabbit_walk_053":"assets/walk-v2/rabbit/053.png","rabbit_walk_054":"assets/walk-v2/rabbit/054.png","rabbit_walk_055":"assets/walk-v2/rabbit/055.png","rabbit_walk_056":"assets/walk-v2/rabbit/056.png","rabbit_walk_057":"assets/walk-v2/rabbit/057.png","rabbit_walk_058":"assets/walk-v2/rabbit/058.png","rabbit_walk_059":"assets/walk-v2/rabbit/059.png","rabbit_walk_060":"assets/walk-v2/rabbit/060.png","rabbit_walk_061":"assets/walk-v2/rabbit/061.png","rabbit_walk_062":"assets/walk-v2/rabbit/062.png","rabbit_walk_063":"assets/walk-v2/rabbit/063.png","rabbit_walk_064":"assets/walk-v2/rabbit/064.png","rabbit_walk_065":"assets/walk-v2/rabbit/065.png","rabbit_walk_066":"assets/walk-v2/rabbit/066.png","rabbit_walk_067":"assets/walk-v2/rabbit/067.png","rabbit_walk_068":"assets/walk-v2/rabbit/068.png","rabbit_walk_069":"assets/walk-v2/rabbit/069.png","rabbit_walk_070":"assets/walk-v2/rabbit/070.png","rabbit_walk_071":"assets/walk-v2/rabbit/071.png","rabbit_walk_072":"assets/walk-v2/rabbit/072.png","rabbit_walk_073":"assets/walk-v2/rabbit/073.png","rabbit_walk_074":"assets/walk-v2/rabbit/074.png","rabbit_walk_075":"assets/walk-v2/rabbit/075.png","rabbit_walk_076":"assets/walk-v2/rabbit/076.png","rabbit_walk_077":"assets/walk-v2/rabbit/077.png","rabbit_walk_078":"assets/walk-v2/rabbit/078.png","rabbit_walk_079":"assets/walk-v2/rabbit/079.png","rabbit_walk_080":"assets/walk-v2/rabbit/080.png","rabbit_walk_081":"assets/walk-v2/rabbit/081.png","rabbit_walk_082":"assets/walk-v2/rabbit/082.png","rabbit_walk_083":"assets/walk-v2/rabbit/083.png","rabbit_walk_084":"assets/walk-v2/rabbit/084.png","rabbit_walk_085":"assets/walk-v2/rabbit/085.png","rabbit_walk_086":"assets/walk-v2/rabbit/086.png","rabbit_walk_087":"assets/walk-v2/rabbit/087.png","rabbit_walk_088":"assets/walk-v2/rabbit/088.png","rabbit_walk_089":"assets/walk-v2/rabbit/089.png","rabbit_walk_090":"assets/walk-v2/rabbit/090.png","rabbit_walk_091":"assets/walk-v2/rabbit/091.png","rabbit_walk_092":"assets/walk-v2/rabbit/092.png","rabbit_walk_093":"assets/walk-v2/rabbit/093.png","rabbit_walk_094":"assets/walk-v2/rabbit/094.png","rabbit_walk_095":"assets/walk-v2/rabbit/095.png","rabbit_walk_096":"assets/walk-v2/rabbit/096.png","rabbit_walk_097":"assets/walk-v2/rabbit/097.png","rabbit_walk_098":"assets/walk-v2/rabbit/098.png","rabbit_walk_099":"assets/walk-v2/rabbit/099.png","rabbit_walk_100":"assets/walk-v2/rabbit/100.png","rabbit_walk_101":"assets/walk-v2/rabbit/101.png","rabbit_walk_102":"assets/walk-v2/rabbit/102.png","rabbit_walk_103":"assets/walk-v2/rabbit/103.png","rabbit_walk_104":"assets/walk-v2/rabbit/104.png","rabbit_walk_105":"assets/walk-v2/rabbit/105.png","rabbit_walk_106":"assets/walk-v2/rabbit/106.png","rabbit_walk_107":"assets/walk-v2/rabbit/107.png","rabbit_walk_108":"assets/walk-v2/rabbit/108.png","rabbit_walk_109":"assets/walk-v2/rabbit/109.png","rabbit_walk_110":"assets/walk-v2/rabbit/110.png","rabbit_walk_111":"assets/walk-v2/rabbit/111.png","rabbit_walk_112":"assets/walk-v2/rabbit/112.png","rabbit_walk_113":"assets/walk-v2/rabbit/113.png","rabbit_walk_114":"assets/walk-v2/rabbit/114.png","rabbit_walk_115":"assets/walk-v2/rabbit/115.png","rabbit_walk_116":"assets/walk-v2/rabbit/116.png","rabbit_walk_117":"assets/walk-v2/rabbit/117.png","rabbit_walk_118":"assets/walk-v2/rabbit/118.png","rabbit_walk_119":"assets/walk-v2/rabbit/119.png"};
const CAT_SIZE_METRICS={"crouch": {"area": 48464.75, "cx": 234.755, "cy": 101.01, "x0": 3, "y0": 3, "x1": 433, "y1": 190, "width": 437, "height": 193}, "curl": {"area": 65488.734, "cx": 161.215, "cy": 138.87, "x0": 4, "y0": 4, "x1": 339, "y1": 272, "width": 342, "height": 275}, "lie": {"area": 66164.117, "cx": 289.714, "cy": 168.83, "x0": 3, "y0": 3, "x1": 546, "y1": 276, "width": 549, "height": 279}, "loaf": {"area": 46750.473, "cx": 169.497, "cy": 125.677, "x0": 3, "y0": 3, "x1": 329, "y1": 217, "width": 332, "height": 220}, "meow": {"area": 59788.484, "cx": 244.775, "cy": 148.856, "x0": 4, "y0": 3, "x1": 456, "y1": 289, "width": 459, "height": 292}, "rest0": {"area": 46108.801, "cx": 318.63, "cy": 494.791, "x0": 172, "y0": 304, "x1": 428, "y1": 635, "width": 600, "height": 700}, "rest1": {"area": 52359.879, "cx": 299.326, "cy": 450.052, "x0": 127, "y0": 307, "x1": 472, "y1": 555, "width": 600, "height": 700}, "rest2": {"area": 49903.008, "cx": 291.41, "cy": 455.889, "x0": 135, "y0": 354, "x1": 465, "y1": 555, "width": 600, "height": 700}, "sitfront": {"area": 55591.438, "cx": 124.704, "cy": 211.901, "x0": 3, "y0": 3, "x1": 236, "y1": 375, "width": 239, "height": 378}, "sitside": {"area": 58871.367, "cx": 138.375, "cy": 214.326, "x0": 4, "y0": 3, "x1": 280, "y1": 370, "width": 283, "height": 373}, "video_walk_000": {"area": 58902.523, "cx": 269.341, "cy": 120.958, "x0": 0, "y0": 0, "x1": 493, "y1": 244, "width": 600, "height": 244}, "video_walk_001": {"area": 56484.07, "cx": 275.755, "cy": 119.859, "x0": 0, "y0": 0, "x1": 491, "y1": 244, "width": 600, "height": 244}, "video_walk_002": {"area": 57472.344, "cx": 270.49, "cy": 121.749, "x0": 0, "y0": 0, "x1": 491, "y1": 244, "width": 600, "height": 244}, "video_walk_003": {"area": 60523.07, "cx": 275.159, "cy": 126.957, "x0": 0, "y0": 0, "x1": 490, "y1": 244, "width": 600, "height": 244}, "video_walk_004": {"area": 61267.07, "cx": 272.659, "cy": 127.845, "x0": 0, "y0": 0, "x1": 491, "y1": 244, "width": 600, "height": 244}, "video_walk_005": {"area": 59986.25, "cx": 269.8, "cy": 126.437, "x0": 0, "y0": 1, "x1": 494, "y1": 244, "width": 600, "height": 244}, "video_walk_006": {"area": 56783.164, "cx": 277.567, "cy": 120.535, "x0": 0, "y0": 0, "x1": 496, "y1": 244, "width": 600, "height": 244}, "video_walk_007": {"area": 57997.977, "cx": 270.856, "cy": 121.432, "x0": 0, "y0": 0, "x1": 493, "y1": 244, "width": 600, "height": 244}, "video_walk_008": {"area": 60193.309, "cx": 271.906, "cy": 124.698, "x0": 0, "y0": 0, "x1": 491, "y1": 244, "width": 600, "height": 244}, "video_walk_009": {"area": 62546.902, "cx": 276.381, "cy": 128.235, "x0": 0, "y0": 0, "x1": 514, "y1": 244, "width": 600, "height": 244}, "video_walk_010": {"area": 61605.688, "cx": 272.033, "cy": 127.026, "x0": 0, "y0": 0, "x1": 493, "y1": 244, "width": 600, "height": 244}, "video_walk_011": {"area": 59693.188, "cx": 274.17, "cy": 124.301, "x0": 0, "y0": 4, "x1": 500, "y1": 244, "width": 600, "height": 244}, "video_walk_012": {"area": 56071.352, "cx": 283.029, "cy": 118.481, "x0": 0, "y0": 0, "x1": 500, "y1": 244, "width": 600, "height": 244}, "video_walk_013": {"area": 57121.219, "cx": 273.398, "cy": 119.538, "x0": 0, "y0": 0, "x1": 497, "y1": 244, "width": 600, "height": 244}, "video_walk_014": {"area": 60599.125, "cx": 278.263, "cy": 124.966, "x0": 0, "y0": 0, "x1": 499, "y1": 244, "width": 600, "height": 244}, "video_walk_015": {"area": 62656.359, "cx": 279.607, "cy": 127.321, "x0": 0, "y0": 0, "x1": 505, "y1": 244, "width": 600, "height": 244}, "video_walk_016": {"area": 61731.219, "cx": 274.914, "cy": 126.388, "x0": 0, "y0": 0, "x1": 508, "y1": 244, "width": 600, "height": 244}, "video_walk_017": {"area": 59911.492, "cx": 278.219, "cy": 122.882, "x0": 0, "y0": 2, "x1": 511, "y1": 244, "width": 600, "height": 244}, "video_walk_018": {"area": 59034.984, "cx": 280.176, "cy": 120.386, "x0": 0, "y0": 0, "x1": 510, "y1": 244, "width": 600, "height": 244}, "video_walk_019": {"area": 60780.785, "cx": 276.559, "cy": 122.431, "x0": 0, "y0": 0, "x1": 509, "y1": 244, "width": 600, "height": 244}, "video_walk_020": {"area": 63486.742, "cx": 281.929, "cy": 127.116, "x0": 0, "y0": 0, "x1": 510, "y1": 244, "width": 600, "height": 244}, "video_walk_021": {"area": 63397.492, "cx": 279.529, "cy": 127.664, "x0": 0, "y0": 0, "x1": 513, "y1": 244, "width": 600, "height": 244}, "video_walk_022": {"area": 61545.992, "cx": 279.83, "cy": 125.729, "x0": 0, "y0": 5, "x1": 517, "y1": 244, "width": 600, "height": 244}, "video_walk_023": {"area": 57655.422, "cx": 288.756, "cy": 119.678, "x0": 0, "y0": 0, "x1": 519, "y1": 244, "width": 600, "height": 244}, "video_walk_024": {"area": 58567.062, "cx": 281.898, "cy": 120.843, "x0": 0, "y0": 0, "x1": 516, "y1": 244, "width": 600, "height": 244}, "video_walk_025": {"area": 61518.805, "cx": 286.546, "cy": 126.064, "x0": 0, "y0": 0, "x1": 517, "y1": 244, "width": 600, "height": 244}, "video_walk_026": {"area": 63410.273, "cx": 288.719, "cy": 128.618, "x0": 0, "y0": 0, "x1": 520, "y1": 244, "width": 600, "height": 244}, "video_walk_027": {"area": 62347.234, "cx": 286.183, "cy": 126.858, "x0": 0, "y0": 2, "x1": 525, "y1": 244, "width": 600, "height": 244}, "video_walk_028": {"area": 60602.773, "cx": 289.966, "cy": 122.604, "x0": 0, "y0": 0, "x1": 527, "y1": 244, "width": 600, "height": 244}, "video_walk_029": {"area": 59602.793, "cx": 289.142, "cy": 120.386, "x0": 0, "y0": 0, "x1": 524, "y1": 244, "width": 600, "height": 244}, "video_walk_030": {"area": 62254.289, "cx": 288.836, "cy": 123.857, "x0": 0, "y0": 0, "x1": 523, "y1": 244, "width": 600, "height": 244}, "video_walk_031": {"area": 64459.766, "cx": 292.445, "cy": 127.882, "x0": 0, "y0": 0, "x1": 527, "y1": 244, "width": 600, "height": 244}, "video_walk_032": {"area": 63883.75, "cx": 287.093, "cy": 127.521, "x0": 0, "y0": 0, "x1": 524, "y1": 244, "width": 600, "height": 244}, "video_walk_033": {"area": 62301.473, "cx": 287.27, "cy": 124.8, "x0": 0, "y0": 2, "x1": 527, "y1": 244, "width": 600, "height": 244}, "video_walk_034": {"area": 60961.133, "cx": 288.458, "cy": 122.32, "x0": 0, "y0": 0, "x1": 525, "y1": 244, "width": 600, "height": 244}, "video_walk_035": {"area": 60108.0, "cx": 283.999, "cy": 121.142, "x0": 0, "y0": 0, "x1": 520, "y1": 244, "width": 600, "height": 244}, "video_walk_036": {"area": 62404.715, "cx": 288.246, "cy": 125.95, "x0": 0, "y0": 0, "x1": 522, "y1": 244, "width": 600, "height": 244}, "video_walk_037": {"area": 64146.387, "cx": 290.676, "cy": 128.191, "x0": 0, "y0": 0, "x1": 526, "y1": 244, "width": 600, "height": 244}, "video_walk_038": {"area": 61594.438, "cx": 290.401, "cy": 126.763, "x0": 0, "y0": 5, "x1": 531, "y1": 244, "width": 600, "height": 244}, "video_walk_039": {"area": 59851.609, "cx": 293.984, "cy": 123.122, "x0": 0, "y0": 2, "x1": 533, "y1": 244, "width": 600, "height": 244}, "video_walk_040": {"area": 61398.18, "cx": 287.205, "cy": 123.508, "x0": 0, "y0": 0, "x1": 530, "y1": 244, "width": 600, "height": 244}, "video_walk_041": {"area": 63211.863, "cx": 289.457, "cy": 126.754, "x0": 0, "y0": 0, "x1": 531, "y1": 244, "width": 600, "height": 244}, "video_walk_042": {"area": 65274.168, "cx": 292.287, "cy": 128.818, "x0": 0, "y0": 0, "x1": 532, "y1": 244, "width": 600, "height": 244}, "video_walk_043": {"area": 63238.113, "cx": 290.402, "cy": 127.051, "x0": 0, "y0": 2, "x1": 534, "y1": 244, "width": 600, "height": 244}, "video_walk_044": {"area": 60646.25, "cx": 294.584, "cy": 122.464, "x0": 0, "y0": 0, "x1": 534, "y1": 244, "width": 600, "height": 244}, "video_walk_045": {"area": 62281.117, "cx": 284.694, "cy": 123.168, "x0": 0, "y0": 0, "x1": 530, "y1": 244, "width": 600, "height": 244}, "video_walk_046": {"area": 64544.43, "cx": 286.988, "cy": 126.753, "x0": 0, "y0": 0, "x1": 528, "y1": 244, "width": 600, "height": 244}, "video_walk_047": {"area": 66300.836, "cx": 286.146, "cy": 128.625, "x0": 0, "y0": 0, "x1": 527, "y1": 244, "width": 600, "height": 244}, "video_walk_048": {"area": 63705.074, "cx": 283.771, "cy": 126.883, "x0": 0, "y0": 1, "x1": 527, "y1": 244, "width": 600, "height": 244}, "video_walk_049": {"area": 59372.977, "cx": 293.02, "cy": 120.901, "x0": 0, "y0": 0, "x1": 528, "y1": 244, "width": 600, "height": 244}, "video_walk_050": {"area": 61957.625, "cx": 284.159, "cy": 123.321, "x0": 0, "y0": 0, "x1": 525, "y1": 244, "width": 600, "height": 244}, "video_walk_051": {"area": 63311.754, "cx": 283.863, "cy": 126.112, "x0": 0, "y0": 0, "x1": 524, "y1": 244, "width": 600, "height": 244}, "video_walk_052": {"area": 65982.047, "cx": 286.067, "cy": 129.304, "x0": 0, "y0": 0, "x1": 525, "y1": 244, "width": 600, "height": 244}, "video_walk_053": {"area": 64461.484, "cx": 282.883, "cy": 127.953, "x0": 0, "y0": 0, "x1": 526, "y1": 244, "width": 600, "height": 244}, "video_walk_054": {"area": 60566.191, "cx": 290.127, "cy": 122.102, "x0": 0, "y0": 1, "x1": 527, "y1": 244, "width": 600, "height": 244}, "video_walk_055": {"area": 63366.727, "cx": 282.649, "cy": 123.706, "x0": 0, "y0": 0, "x1": 524, "y1": 244, "width": 600, "height": 244}, "video_walk_056": {"area": 63475.98, "cx": 279.886, "cy": 124.768, "x0": 0, "y0": 0, "x1": 521, "y1": 244, "width": 600, "height": 244}, "video_walk_057": {"area": 66550.531, "cx": 283.966, "cy": 129.095, "x0": 0, "y0": 0, "x1": 521, "y1": 244, "width": 600, "height": 244}, "video_walk_058": {"area": 65050.582, "cx": 280.655, "cy": 127.816, "x0": 0, "y0": 0, "x1": 522, "y1": 244, "width": 600, "height": 244}, "video_walk_059": {"area": 62224.734, "cx": 284.672, "cy": 124.808, "x0": 0, "y0": 2, "x1": 525, "y1": 244, "width": 600, "height": 244}, "video_walk_060": {"area": 61848.828, "cx": 284.306, "cy": 123.264, "x0": 0, "y0": 0, "x1": 523, "y1": 244, "width": 600, "height": 244}, "video_walk_061": {"area": 61257.039, "cx": 278.487, "cy": 122.638, "x0": 0, "y0": 0, "x1": 520, "y1": 244, "width": 600, "height": 244}, "video_walk_062": {"area": 65180.41, "cx": 285.578, "cy": 127.965, "x0": 0, "y0": 0, "x1": 523, "y1": 244, "width": 600, "height": 244}, "video_walk_063": {"area": 65831.719, "cx": 286.511, "cy": 127.738, "x0": 0, "y0": 0, "x1": 526, "y1": 244, "width": 600, "height": 244}, "video_walk_064": {"area": 63375.344, "cx": 288.78, "cy": 125.555, "x0": 0, "y0": 2, "x1": 531, "y1": 244, "width": 600, "height": 244}, "video_walk_065": {"area": 62139.336, "cx": 293.425, "cy": 122.814, "x0": 0, "y0": 0, "x1": 533, "y1": 244, "width": 600, "height": 244}, "video_walk_066": {"area": 62107.688, "cx": 286.719, "cy": 121.863, "x0": 0, "y0": 0, "x1": 532, "y1": 244, "width": 600, "height": 244}, "video_walk_067": {"area": 65145.094, "cx": 292.558, "cy": 127.092, "x0": 0, "y0": 0, "x1": 532, "y1": 244, "width": 600, "height": 244}, "video_walk_068": {"area": 66773.0, "cx": 293.714, "cy": 128.373, "x0": 0, "y0": 0, "x1": 534, "y1": 244, "width": 600, "height": 244}, "video_walk_069": {"area": 64380.109, "cx": 293.245, "cy": 126.218, "x0": 0, "y0": 2, "x1": 536, "y1": 244, "width": 600, "height": 244}, "video_walk_070": {"area": 60199.852, "cx": 301.369, "cy": 120.474, "x0": 0, "y0": 0, "x1": 535, "y1": 244, "width": 600, "height": 244}, "gif_walk_000": {"area": 32250.375, "cx": 290.692, "cy": 129.639, "x0": 73, "y0": 37, "x1": 461, "y1": 226, "width": 600, "height": 244}, "gif_walk_001": {"area": 32532.426, "cx": 288.665, "cy": 129.883, "x0": 71, "y0": 35, "x1": 460, "y1": 228, "width": 600, "height": 244}, "gif_walk_002": {"area": 33399.078, "cx": 289.918, "cy": 131.654, "x0": 70, "y0": 33, "x1": 460, "y1": 228, "width": 600, "height": 244}, "gif_walk_003": {"area": 34516.887, "cx": 293.468, "cy": 133.294, "x0": 70, "y0": 34, "x1": 469, "y1": 228, "width": 600, "height": 244}, "gif_walk_004": {"area": 33255.703, "cx": 292.722, "cy": 132.004, "x0": 75, "y0": 39, "x1": 463, "y1": 229, "width": 600, "height": 244}, "gif_walk_005": {"area": 31745.98, "cx": 294.247, "cy": 128.632, "x0": 74, "y0": 37, "x1": 463, "y1": 228, "width": 600, "height": 244}, "gif_walk_006": {"area": 32893.684, "cx": 286.645, "cy": 129.482, "x0": 69, "y0": 33, "x1": 460, "y1": 228, "width": 600, "height": 244}, "gif_walk_007": {"area": 34088.887, "cx": 287.006, "cy": 131.495, "x0": 63, "y0": 32, "x1": 459, "y1": 228, "width": 600, "height": 244}, "gif_walk_008": {"area": 35059.227, "cx": 287.313, "cy": 132.951, "x0": 63, "y0": 33, "x1": 465, "y1": 228, "width": 600, "height": 244}, "gif_walk_009": {"area": 33671.406, "cx": 286.173, "cy": 131.758, "x0": 64, "y0": 38, "x1": 458, "y1": 228, "width": 600, "height": 244}, "gif_walk_010": {"area": 31318.266, "cx": 291.697, "cy": 127.659, "x0": 66, "y0": 38, "x1": 459, "y1": 228, "width": 600, "height": 244}, "gif_walk_011": {"area": 33091.438, "cx": 285.396, "cy": 130.212, "x0": 63, "y0": 34, "x1": 457, "y1": 229, "width": 600, "height": 244}, "gif_walk_012": {"area": 33888.363, "cx": 284.24, "cy": 131.858, "x0": 58, "y0": 33, "x1": 456, "y1": 229, "width": 600, "height": 244}, "gif_walk_013": {"area": 34564.828, "cx": 285.886, "cy": 133.023, "x0": 58, "y0": 33, "x1": 456, "y1": 229, "width": 600, "height": 244}, "gif_walk_014": {"area": 35179.312, "cx": 286.707, "cy": 133.866, "x0": 58, "y0": 35, "x1": 466, "y1": 230, "width": 600, "height": 244}, "gif_walk_015": {"area": 33742.266, "cx": 286.193, "cy": 132.043, "x0": 62, "y0": 39, "x1": 458, "y1": 229, "width": 600, "height": 244}, "gif_walk_016": {"area": 32521.887, "cx": 287.541, "cy": 129.032, "x0": 64, "y0": 36, "x1": 457, "y1": 229, "width": 600, "height": 244}, "gif_walk_017": {"area": 33108.09, "cx": 281.488, "cy": 128.837, "x0": 60, "y0": 33, "x1": 455, "y1": 228, "width": 600, "height": 244}, "gif_walk_018": {"area": 34556.141, "cx": 282.421, "cy": 132.081, "x0": 57, "y0": 32, "x1": 454, "y1": 228, "width": 600, "height": 244}, "gif_walk_019": {"area": 35387.094, "cx": 283.902, "cy": 133.399, "x0": 58, "y0": 33, "x1": 463, "y1": 228, "width": 600, "height": 244}, "gif_walk_020": {"area": 34063.852, "cx": 283.461, "cy": 132.219, "x0": 59, "y0": 38, "x1": 455, "y1": 228, "width": 600, "height": 244}, "gif_walk_021": {"area": 31794.02, "cx": 289.088, "cy": 128.195, "x0": 62, "y0": 38, "x1": 456, "y1": 228, "width": 600, "height": 244}, "gif_walk_022": {"area": 33461.0, "cx": 283.302, "cy": 130.435, "x0": 60, "y0": 34, "x1": 454, "y1": 228, "width": 600, "height": 244}, "gif_walk_023": {"area": 33754.91, "cx": 282.962, "cy": 131.649, "x0": 58, "y0": 32, "x1": 454, "y1": 229, "width": 600, "height": 244}, "gif_walk_024": {"area": 35337.637, "cx": 287.732, "cy": 133.451, "x0": 59, "y0": 33, "x1": 461, "y1": 229, "width": 600, "height": 244}, "gif_walk_025": {"area": 34599.406, "cx": 288.544, "cy": 132.602, "x0": 63, "y0": 37, "x1": 459, "y1": 229, "width": 600, "height": 244}, "gif_walk_026": {"area": 33518.309, "cx": 290.323, "cy": 131.175, "x0": 67, "y0": 39, "x1": 461, "y1": 229, "width": 600, "height": 244}, "gif_walk_027": {"area": 32795.031, "cx": 292.577, "cy": 129.304, "x0": 68, "y0": 36, "x1": 462, "y1": 228, "width": 600, "height": 244}, "gif_walk_028": {"area": 32944.887, "cx": 287.764, "cy": 128.931, "x0": 66, "y0": 33, "x1": 461, "y1": 228, "width": 600, "height": 244}, "gif_walk_029": {"area": 34575.781, "cx": 291.156, "cy": 132.155, "x0": 65, "y0": 31, "x1": 462, "y1": 229, "width": 600, "height": 244}, "gif_walk_030": {"area": 35435.348, "cx": 293.441, "cy": 133.255, "x0": 67, "y0": 33, "x1": 471, "y1": 229, "width": 600, "height": 244}, "gif_walk_031": {"area": 34015.07, "cx": 293.683, "cy": 131.724, "x0": 71, "y0": 39, "x1": 464, "y1": 229, "width": 600, "height": 244}, "gif_walk_032": {"area": 31608.42, "cx": 299.198, "cy": 127.571, "x0": 73, "y0": 37, "x1": 464, "y1": 228, "width": 600, "height": 244}};
const CAT_TARGET_AREA=5500;
function catSpriteScale(name,fallback){const m=CAT_SIZE_METRICS[name];return m?Math.sqrt(CAT_TARGET_AREA/m.area):fallback;}
// Remove the source floor and white matte contamination only at transparent fur edges.
function cleanWalkPixels(data,width,height,mouth){
  for(let y=Math.floor(height*.79);y<height;y++)for(let x=0;x<width;x++){
    const i=(y*width+x)*4,light=Math.min(data[i],data[i+1],data[i+2]);
    if(light>48)data[i+3]=Math.round(data[i+3]*(1-Math.min(1,(light-48)/36)));
  }
  const original=new Uint8ClampedArray(data);
  for(let y=0;y<height;y++)for(let x=0;x<width;x++){
    // Follow this frame's head and preserve the original eye colors and alpha.
    if(mouth&&x>=mouth.x-12&&x<=mouth.x+4&&y>=mouth.y-32&&y<=mouth.y-12)continue;
    const i=(y*width+x)*4,a=original[i+3];
    const light=(original[i]+original[i+1]+original[i+2])/3;
    if(!a||light<52)continue;
    let boundary=false;
    for(let dy=-3;dy<=3&&!boundary;dy++)for(let dx=-3;dx<=3;dx++){
      const nx=x+dx,ny=y+dy;
      if(nx<0||ny<0||nx>=width||ny>=height||original[(ny*width+nx)*4+3]<24){boundary=true;break;}
    }
    if(!boundary)continue;
    let nearest=-1,distance=Infinity;
    for(let dy=-5;dy<=5;dy++)for(let dx=-5;dx<=5;dx++){
      const nx=x+dx,ny=y+dy,d=dx*dx+dy*dy;
      if(nx<0||ny<0||nx>=width||ny>=height||d>=distance)continue;
      const j=(ny*width+nx)*4,l=(original[j]+original[j+1]+original[j+2])/3;
      if(original[j+3]>220&&l<48){nearest=j;distance=d;}
    }
    if(nearest<0)continue;
    const fur=(original[nearest]+original[nearest+1]+original[nearest+2])/3;
    const coverage=Math.max(0,Math.min(1,(255-light)/(255-fur)));
    data[i+3]=Math.round(a*coverage);
    for(let ch=0;ch<3;ch++)data[i+ch]=original[nearest+ch];
  }
  return data;
}
function cleanWalkGround(im,frame){
  const out=document.createElement('canvas');out.width=im.naturalWidth;out.height=im.naturalHeight;
  const c=out.getContext('2d');c.drawImage(im,0,0);const pixels=c.getImageData(0,0,out.width,out.height);
  cleanWalkPixels(pixels.data,out.width,out.height,WALK_MOUTH_POINTS[frame]);c.putImageData(pixels,0,0);
  out.complete=true;out.naturalWidth=out.width;return out;
}
/* Socks rear sock */
function lowerSocksRearWhite(data,width,height,frame){
 const top=Math.max(0,Math.floor(frame.ground-frame.height*.55)),right=Math.min(width,Math.floor(frame.cx-frame.width*.13)),seen=new Uint8Array(width*height);let largest=[];
 const white=k=>{const i=k*4;return data[i+3]>30&&data[i]>100&&data[i+1]>100&&data[i+2]>90;};
 for(let y=top;y<height;y++)for(let x=0;x<right;x++){
  const start=y*width+x;if(seen[start]||!white(start))continue;
  const part=[start];seen[start]=1;
  for(let j=0;j<part.length;j++){const k=part[j],px=k%width,py=Math.floor(k/width);for(const [nx,ny] of [[px-1,py],[px+1,py],[px,py-1],[px,py+1]]){if(nx<0||nx>=right||ny<top||ny>=height)continue;const n=ny*width+nx;if(!seen[n]&&white(n)){seen[n]=1;part.push(n);}}}
  if(part.length>largest.length)largest=part;
 }
 if(largest.length<8)return data;
 let lo=height,hi=0;for(const k of largest){const y=Math.floor(k/width);lo=Math.min(lo,y);hi=Math.max(hi,y);}
 const cutoff=(lo+hi)/2;
 for(const k of largest){const y=Math.floor(k/width);if(y>=cutoff)continue;const mix=Math.min(1,(cutoff-y)/1.5),i=k*4;for(let ch=0;ch<3;ch++)data[i+ch]=Math.round(data[i+ch]*(1-.88*mix));}
 return data;
}
function correctSocksRearPaw(im,frame){
 const canvas=document.createElement('canvas');canvas.width=im.naturalWidth;canvas.height=im.naturalHeight;const c=canvas.getContext('2d');c.drawImage(im,0,0);const pixels=c.getImageData(0,0,canvas.width,canvas.height);
 lowerSocksRearWhite(pixels.data,canvas.width,canvas.height,frame);c.putImageData(pixels,0,0);canvas.complete=true;canvas.naturalWidth=canvas.width;canvas.naturalHeight=canvas.height;return canvas;
}
/* End Socks rear sock */

/* Dongdong paw colors */
function correctDongdongPawPixels(data,width,height,frame){
 // The walking clip has pale socks absent from Dongdong's reference photographs.
 // Limit the correction to neutral highlights on the lower legs; keep orange fur and alpha.
 const top=Math.max(0,Math.floor(frame.ground-frame.height*.32));
 for(let y=top;y<Math.min(height,frame.ground+2);y++)for(let x=0;x<width;x++){
  const i=(y*width+x)*4,r=data[i],g=data[i+1],b=data[i+2];
  if(!data[i+3]||r<95||g<88||b<65||g/r<.8||b/r<.58)continue;
  const neutral=Math.min(1,Math.max(0,(b/r-.58)/.08)),light=Math.min(1,Math.max(0,(r-85)/35)),mix=neutral*light;
  data[i]=Math.round(r*(1-.62*mix));data[i+1]=Math.round(g*(1-.72*mix));data[i+2]=Math.round(b*(1-.8*mix));
 }
 return data;
}
function correctDongdongPaws(im,frame){
 const canvas=document.createElement('canvas');canvas.width=im.naturalWidth;canvas.height=im.naturalHeight;
 const c=canvas.getContext('2d');c.drawImage(im,0,0);const pixels=c.getImageData(0,0,canvas.width,canvas.height);
 correctDongdongPawPixels(pixels.data,canvas.width,canvas.height,frame);c.putImageData(pixels,0,0);
 canvas.complete=true;canvas.naturalWidth=canvas.width;canvas.naturalHeight=canvas.height;return canvas;
}
/* End Dongdong paw colors */

function walkSpriteScale(){
  const seated=CAT_SIZE_METRICS.sitside;
  const heights=Object.entries(CAT_SIZE_METRICS).filter(([k])=>k.startsWith('gif_walk_')).map(([,m])=>m.y1-m.y0).sort((a,b)=>a-b);
  return seated&&heights.length?catSpriteScale('sitside',.31)*(seated.y1-seated.y0)/heights[Math.floor(heights.length/2)]:.58;
}
const WALK_FIXED_SCALE=walkSpriteScale()*.95;
const WALKING_NPCS={"socks":{"id":"socks","name":"\u5c0f\u896a\u5b50","fps":12,"count":115,"height":157.0,"width":307.0,"frames":{"socks_walk_000":{"cx":216.5,"ground":245,"height":159,"width":305},"socks_walk_001":{"cx":216.5,"ground":246,"height":156,"width":301},"socks_walk_002":{"cx":220.5,"ground":246,"height":153,"width":301},"socks_walk_003":{"cx":220.5,"ground":245,"height":155,"width":301},"socks_walk_004":{"cx":219.5,"ground":243,"height":154,"width":303},"socks_walk_005":{"cx":219.5,"ground":245,"height":156,"width":307},"socks_walk_006":{"cx":219.5,"ground":245,"height":157,"width":307},"socks_walk_007":{"cx":220.5,"ground":245,"height":157,"width":305},"socks_walk_008":{"cx":220.5,"ground":245,"height":154,"width":305},"socks_walk_009":{"cx":221.5,"ground":245,"height":150,"width":307},"socks_walk_010":{"cx":222.5,"ground":246,"height":152,"width":305},"socks_walk_011":{"cx":221.5,"ground":245,"height":153,"width":307},"socks_walk_012":{"cx":219.5,"ground":245,"height":155,"width":307},"socks_walk_013":{"cx":219.0,"ground":245,"height":156,"width":310},"socks_walk_014":{"cx":220.5,"ground":246,"height":157,"width":309},"socks_walk_015":{"cx":220.5,"ground":246,"height":157,"width":309},"socks_walk_016":{"cx":221.5,"ground":246,"height":153,"width":307},"socks_walk_017":{"cx":222.5,"ground":245,"height":150,"width":305},"socks_walk_018":{"cx":222.5,"ground":245,"height":152,"width":305},"socks_walk_019":{"cx":221.5,"ground":244,"height":154,"width":307},"socks_walk_020":{"cx":220.5,"ground":245,"height":156,"width":309},"socks_walk_021":{"cx":221.5,"ground":245,"height":156,"width":311},"socks_walk_022":{"cx":221.5,"ground":245,"height":156,"width":311},"socks_walk_023":{"cx":221.5,"ground":245,"height":155,"width":307},"socks_walk_024":{"cx":222.5,"ground":245,"height":150,"width":309},"socks_walk_025":{"cx":222.5,"ground":245,"height":152,"width":309},"socks_walk_026":{"cx":222.5,"ground":246,"height":154,"width":309},"socks_walk_027":{"cx":221.5,"ground":246,"height":157,"width":311},"socks_walk_028":{"cx":222.5,"ground":245,"height":154,"width":309},"socks_walk_029":{"cx":222.5,"ground":245,"height":150,"width":309},"socks_walk_030":{"cx":223.5,"ground":245,"height":150,"width":307},"socks_walk_031":{"cx":223.5,"ground":245,"height":153,"width":307},"socks_walk_032":{"cx":221.5,"ground":244,"height":153,"width":307},"socks_walk_033":{"cx":217.5,"ground":245,"height":156,"width":307},"socks_walk_034":{"cx":218.5,"ground":245,"height":157,"width":309},"socks_walk_035":{"cx":220.5,"ground":246,"height":157,"width":309},"socks_walk_036":{"cx":219.5,"ground":246,"height":154,"width":307},"socks_walk_037":{"cx":220.5,"ground":246,"height":152,"width":305},"socks_walk_038":{"cx":220.5,"ground":246,"height":155,"width":301},"socks_walk_039":{"cx":214.5,"ground":246,"height":161,"width":297},"socks_walk_040":{"cx":212.5,"ground":246,"height":163,"width":297},"socks_walk_041":{"cx":212.5,"ground":247,"height":165,"width":297},"socks_walk_042":{"cx":220.5,"ground":247,"height":165,"width":309},"socks_walk_043":{"cx":217.5,"ground":247,"height":163,"width":299},"socks_walk_044":{"cx":213.5,"ground":246,"height":158,"width":287},"socks_walk_045":{"cx":215.5,"ground":246,"height":159,"width":287},"socks_walk_046":{"cx":214.5,"ground":246,"height":162,"width":289},"socks_walk_047":{"cx":212.5,"ground":245,"height":163,"width":289},"socks_walk_048":{"cx":210.5,"ground":245,"height":164,"width":293},"socks_walk_049":{"cx":210.5,"ground":245,"height":164,"width":293},"socks_walk_050":{"cx":218.5,"ground":245,"height":163,"width":309},"socks_walk_051":{"cx":218.5,"ground":245,"height":160,"width":305},"socks_walk_052":{"cx":213.5,"ground":245,"height":157,"width":295},"socks_walk_053":{"cx":216.5,"ground":245,"height":157,"width":297},"socks_walk_054":{"cx":216.5,"ground":245,"height":158,"width":301},"socks_walk_055":{"cx":216.5,"ground":245,"height":159,"width":305},"socks_walk_056":{"cx":216.5,"ground":245,"height":160,"width":309},"socks_walk_057":{"cx":217.5,"ground":245,"height":161,"width":307},"socks_walk_058":{"cx":217.5,"ground":245,"height":160,"width":307},"socks_walk_059":{"cx":217.5,"ground":246,"height":158,"width":303},"socks_walk_060":{"cx":219.5,"ground":246,"height":155,"width":303},"socks_walk_061":{"cx":218.5,"ground":246,"height":156,"width":301},"socks_walk_062":{"cx":217.5,"ground":246,"height":157,"width":303},"socks_walk_063":{"cx":217.5,"ground":247,"height":159,"width":311},"socks_walk_064":{"cx":219.5,"ground":247,"height":160,"width":311},"socks_walk_065":{"cx":220.5,"ground":247,"height":159,"width":309},"socks_walk_066":{"cx":220.5,"ground":247,"height":156,"width":309},"socks_walk_067":{"cx":221.5,"ground":247,"height":152,"width":311},"socks_walk_068":{"cx":222.5,"ground":246,"height":153,"width":309},"socks_walk_069":{"cx":221.5,"ground":246,"height":156,"width":311},"socks_walk_070":{"cx":220.5,"ground":246,"height":157,"width":313},"socks_walk_071":{"cx":221.5,"ground":246,"height":158,"width":315},"socks_walk_072":{"cx":223.5,"ground":245,"height":157,"width":315},"socks_walk_073":{"cx":222.5,"ground":245,"height":157,"width":313},"socks_walk_074":{"cx":223.5,"ground":244,"height":152,"width":311},"socks_walk_075":{"cx":225.5,"ground":245,"height":151,"width":311},"socks_walk_076":{"cx":225.5,"ground":245,"height":153,"width":311},"socks_walk_077":{"cx":223.5,"ground":245,"height":155,"width":315},"socks_walk_078":{"cx":222.5,"ground":246,"height":157,"width":317},"socks_walk_079":{"cx":223.5,"ground":246,"height":157,"width":315},"socks_walk_080":{"cx":223.5,"ground":247,"height":157,"width":311},"socks_walk_081":{"cx":222.5,"ground":247,"height":154,"width":309},"socks_walk_082":{"cx":222.5,"ground":247,"height":153,"width":305},"socks_walk_083":{"cx":223.5,"ground":247,"height":156,"width":307},"socks_walk_084":{"cx":221.5,"ground":247,"height":159,"width":307},"socks_walk_085":{"cx":220.5,"ground":247,"height":161,"width":309},"socks_walk_086":{"cx":220.5,"ground":247,"height":161,"width":309},"socks_walk_087":{"cx":220.5,"ground":246,"height":159,"width":305},"socks_walk_088":{"cx":221.5,"ground":246,"height":156,"width":303},"socks_walk_089":{"cx":221.5,"ground":246,"height":155,"width":303},"socks_walk_090":{"cx":221.5,"ground":245,"height":157,"width":303},"socks_walk_091":{"cx":220.5,"ground":245,"height":159,"width":305},"socks_walk_092":{"cx":218.5,"ground":246,"height":161,"width":309},"socks_walk_093":{"cx":219.5,"ground":246,"height":162,"width":307},"socks_walk_094":{"cx":219.5,"ground":246,"height":162,"width":307},"socks_walk_095":{"cx":220.5,"ground":247,"height":160,"width":305},"socks_walk_096":{"cx":221.5,"ground":247,"height":158,"width":307},"socks_walk_097":{"cx":221.5,"ground":247,"height":160,"width":307},"socks_walk_098":{"cx":219.5,"ground":247,"height":163,"width":307},"socks_walk_099":{"cx":216.5,"ground":247,"height":166,"width":309},"socks_walk_100":{"cx":217.0,"ground":247,"height":167,"width":306},"socks_walk_101":{"cx":220.5,"ground":247,"height":167,"width":309},"socks_walk_102":{"cx":218.5,"ground":247,"height":166,"width":301},"socks_walk_103":{"cx":220.5,"ground":247,"height":165,"width":301},"socks_walk_104":{"cx":220.5,"ground":246,"height":169,"width":301},"socks_walk_105":{"cx":219.5,"ground":245,"height":171,"width":299},"socks_walk_106":{"cx":217.5,"ground":245,"height":174,"width":299},"socks_walk_107":{"cx":216.5,"ground":245,"height":175,"width":301},"socks_walk_108":{"cx":217.5,"ground":249,"height":180,"width":303},"socks_walk_109":{"cx":217.5,"ground":249,"height":176,"width":299},"socks_walk_110":{"cx":218.5,"ground":249,"height":176,"width":297},"socks_walk_111":{"cx":219.5,"ground":249,"height":181,"width":295},"socks_walk_112":{"cx":217.5,"ground":249,"height":183,"width":295},"socks_walk_113":{"cx":215.5,"ground":249,"height":184,"width":295},"socks_walk_114":{"cx":219.5,"ground":249,"height":185,"width":307}},"walkOnly":true},"dongdong":{"id":"dongdong","name":"\u6771\u6771","fps":10,"count":75,"height":175.0,"width":329.0,"frames":{"dongdong_walk_000":{"cx":206.0,"ground":246,"height":177,"width":331},"dongdong_walk_001":{"cx":207.5,"ground":247,"height":174,"width":330},"dongdong_walk_002":{"cx":209.0,"ground":247,"height":173,"width":331},"dongdong_walk_003":{"cx":210.0,"ground":247,"height":176,"width":327},"dongdong_walk_004":{"cx":208.0,"ground":247,"height":179,"width":325},"dongdong_walk_005":{"cx":205.5,"ground":247,"height":179,"width":326},"dongdong_walk_006":{"cx":203.5,"ground":247,"height":179,"width":330},"dongdong_walk_007":{"cx":206.0,"ground":248,"height":176,"width":327},"dongdong_walk_008":{"cx":205.0,"ground":248,"height":175,"width":331},"dongdong_walk_009":{"cx":206.0,"ground":248,"height":179,"width":333},"dongdong_walk_010":{"cx":207.5,"ground":248,"height":179,"width":332},"dongdong_walk_011":{"cx":204.5,"ground":248,"height":180,"width":334},"dongdong_walk_012":{"cx":203.0,"ground":248,"height":179,"width":331},"dongdong_walk_013":{"cx":203.0,"ground":248,"height":175,"width":331},"dongdong_walk_014":{"cx":203.5,"ground":247,"height":175,"width":330},"dongdong_walk_015":{"cx":203.5,"ground":247,"height":177,"width":330},"dongdong_walk_016":{"cx":204.5,"ground":246,"height":176,"width":332},"dongdong_walk_017":{"cx":205.0,"ground":246,"height":176,"width":333},"dongdong_walk_018":{"cx":205.5,"ground":246,"height":177,"width":332},"dongdong_walk_019":{"cx":205.5,"ground":248,"height":175,"width":330},"dongdong_walk_020":{"cx":207.0,"ground":248,"height":173,"width":331},"dongdong_walk_021":{"cx":208.0,"ground":248,"height":176,"width":327},"dongdong_walk_022":{"cx":208.5,"ground":248,"height":177,"width":326},"dongdong_walk_023":{"cx":209.0,"ground":248,"height":178,"width":329},"dongdong_walk_024":{"cx":210.0,"ground":248,"height":179,"width":327},"dongdong_walk_025":{"cx":208.0,"ground":248,"height":178,"width":329},"dongdong_walk_026":{"cx":208.5,"ground":248,"height":175,"width":328},"dongdong_walk_027":{"cx":210.0,"ground":248,"height":171,"width":327},"dongdong_walk_028":{"cx":210.0,"ground":248,"height":173,"width":327},"dongdong_walk_029":{"cx":210.5,"ground":247,"height":174,"width":324},"dongdong_walk_030":{"cx":209.5,"ground":246,"height":173,"width":328},"dongdong_walk_031":{"cx":210.0,"ground":246,"height":175,"width":329},"dongdong_walk_032":{"cx":210.0,"ground":246,"height":175,"width":329},"dongdong_walk_033":{"cx":209.0,"ground":246,"height":175,"width":329},"dongdong_walk_034":{"cx":209.5,"ground":248,"height":174,"width":328},"dongdong_walk_035":{"cx":210.5,"ground":248,"height":171,"width":330},"dongdong_walk_036":{"cx":211.0,"ground":248,"height":175,"width":327},"dongdong_walk_037":{"cx":211.0,"ground":248,"height":176,"width":325},"dongdong_walk_038":{"cx":209.0,"ground":248,"height":176,"width":329},"dongdong_walk_039":{"cx":210.0,"ground":248,"height":177,"width":329},"dongdong_walk_040":{"cx":209.5,"ground":247,"height":176,"width":330},"dongdong_walk_041":{"cx":207.5,"ground":247,"height":174,"width":330},"dongdong_walk_042":{"cx":208.5,"ground":247,"height":170,"width":328},"dongdong_walk_043":{"cx":208.0,"ground":247,"height":170,"width":329},"dongdong_walk_044":{"cx":207.5,"ground":247,"height":174,"width":328},"dongdong_walk_045":{"cx":206.5,"ground":246,"height":173,"width":328},"dongdong_walk_046":{"cx":206.5,"ground":246,"height":174,"width":332},"dongdong_walk_047":{"cx":206.5,"ground":246,"height":175,"width":332},"dongdong_walk_048":{"cx":207.0,"ground":248,"height":176,"width":333},"dongdong_walk_049":{"cx":209.5,"ground":248,"height":170,"width":332},"dongdong_walk_050":{"cx":210.0,"ground":248,"height":171,"width":331},"dongdong_walk_051":{"cx":211.0,"ground":248,"height":175,"width":327},"dongdong_walk_052":{"cx":209.5,"ground":248,"height":176,"width":328},"dongdong_walk_053":{"cx":208.5,"ground":248,"height":177,"width":332},"dongdong_walk_054":{"cx":210.5,"ground":248,"height":177,"width":330},"dongdong_walk_055":{"cx":209.5,"ground":248,"height":175,"width":330},"dongdong_walk_056":{"cx":210.5,"ground":248,"height":171,"width":330},"dongdong_walk_057":{"cx":210.0,"ground":247,"height":172,"width":329},"dongdong_walk_058":{"cx":210.0,"ground":247,"height":174,"width":327},"dongdong_walk_059":{"cx":207.5,"ground":247,"height":175,"width":330},"dongdong_walk_060":{"cx":207.5,"ground":247,"height":176,"width":332},"dongdong_walk_061":{"cx":209.0,"ground":247,"height":176,"width":329},"dongdong_walk_062":{"cx":210.0,"ground":248,"height":174,"width":329},"dongdong_walk_063":{"cx":211.0,"ground":248,"height":171,"width":329},"dongdong_walk_064":{"cx":210.5,"ground":248,"height":176,"width":326},"dongdong_walk_065":{"cx":209.5,"ground":248,"height":177,"width":326},"dongdong_walk_066":{"cx":209.0,"ground":248,"height":179,"width":329},"dongdong_walk_067":{"cx":209.5,"ground":248,"height":179,"width":328},"dongdong_walk_068":{"cx":208.5,"ground":248,"height":178,"width":330},"dongdong_walk_069":{"cx":210.5,"ground":248,"height":172,"width":328},"dongdong_walk_070":{"cx":211.5,"ground":247,"height":171,"width":328},"dongdong_walk_071":{"cx":212.5,"ground":247,"height":174,"width":324},"dongdong_walk_072":{"cx":212.0,"ground":246,"height":173,"width":325},"dongdong_walk_073":{"cx":211.5,"ground":247,"height":176,"width":328},"dongdong_walk_074":{"cx":213.0,"ground":247,"height":176,"width":329}},"walkOnly":true}};
Object.assign(SPR,Object.fromEntries(Object.values(WALKING_NPCS).flatMap(meta=>Object.keys(meta.frames).map(key=>[key,SPR[key]||"assets/"+key+".png"]))));
const FLOOR_NPC_ANIMATIONS={"socks":{"prefix":"socks_floor_","count":59,"fps":7.5,"duration":7.866666666666666,"cx":220.0,"ground":282,"width":430,"height":286},"dongdong":{"prefix":"dongdong_floor_","count":100,"fps":10.0,"duration":10.0,"cx":268.0,"ground":239,"width":421,"height":189}};
Object.assign(SPR,Object.fromEntries(Object.values(FLOOR_NPC_ANIMATIONS).flatMap(m=>Array.from({length:m.count},(_,i)=>{const key=m.prefix+String(i).padStart(3,'0');return [key,'assets/'+key+'.png'];}))));
const NEW_COMPANION_ASSETS={"gather":{"socks":{"key":"socks_gather_new","cx":339.0,"ground":663,"scale":0.21875,"left":-26.46875,"right":30.1875},"dongdong":{"key":"dongdong_gather_new","cx":375.5,"ground":648,"scale":0.224,"left":-46.704,"right":29.456}},"clips":{"sit":{"prefix":"socks_sit_","count":20,"fps":11.787610619469026,"cx":250.0,"ground":253,"height":232,"scale":0.5603448275862069},"board":{"prefix":"socks_board_","count":33,"fps":11.787610619469026,"cx":271.5,"ground":258,"height":179,"scale":0.5603448275862069},"pee":{"prefix":"socks_pee_","count":56,"fps":12,"duration":4.666666666666667,"peeStart":0.65,"height":172,"scale":0.5813953488372093,"frames":{"socks_pee_000":{"cx":253.0,"ground":234,"height":155,"width":230},"socks_pee_001":{"cx":269.0,"ground":232,"height":151,"width":242},"socks_pee_002":{"cx":254.0,"ground":234,"height":153,"width":247},"socks_pee_003":{"cx":249.0,"ground":236,"height":156,"width":249},"socks_pee_004":{"cx":249.0,"ground":236,"height":154,"width":248},"socks_pee_005":{"cx":249.0,"ground":236,"height":158,"width":244},"socks_pee_006":{"cx":249.0,"ground":236,"height":161,"width":233},"socks_pee_007":{"cx":249.0,"ground":236,"height":165,"width":222},"socks_pee_008":{"cx":249.0,"ground":235,"height":167,"width":216},"socks_pee_009":{"cx":250.0,"ground":236,"height":170,"width":210},"socks_pee_010":{"cx":249.0,"ground":236,"height":173,"width":204},"socks_pee_011":{"cx":249.5,"ground":236,"height":177,"width":201},"socks_pee_012":{"cx":249.0,"ground":236,"height":179,"width":199},"socks_pee_013":{"cx":249.0,"ground":236,"height":181,"width":196},"socks_pee_014":{"cx":249.0,"ground":236,"height":183,"width":192},"socks_pee_015":{"cx":249.0,"ground":236,"height":185,"width":191},"socks_pee_016":{"cx":249.0,"ground":235,"height":184,"width":191},"socks_pee_017":{"cx":249.0,"ground":236,"height":184,"width":189},"socks_pee_018":{"cx":249.0,"ground":236,"height":184,"width":187},"socks_pee_019":{"cx":249.0,"ground":236,"height":184,"width":186},"socks_pee_020":{"cx":249.0,"ground":236,"height":184,"width":186},"socks_pee_021":{"cx":249.0,"ground":236,"height":184,"width":186},"socks_pee_022":{"cx":249.0,"ground":236,"height":184,"width":186},"socks_pee_023":{"cx":249.0,"ground":236,"height":184,"width":187},"socks_pee_024":{"cx":249.0,"ground":235,"height":183,"width":187},"socks_pee_025":{"cx":249.0,"ground":236,"height":184,"width":187},"socks_pee_026":{"cx":249.0,"ground":236,"height":184,"width":188},"socks_pee_027":{"cx":249.0,"ground":236,"height":184,"width":188},"socks_pee_028":{"cx":249.0,"ground":236,"height":184,"width":189},"socks_pee_029":{"cx":249.0,"ground":236,"height":183,"width":190},"socks_pee_030":{"cx":249.0,"ground":236,"height":183,"width":191},"socks_pee_031":{"cx":249.0,"ground":236,"height":183,"width":191},"socks_pee_032":{"cx":249.0,"ground":235,"height":182,"width":192},"socks_pee_033":{"cx":249.0,"ground":236,"height":184,"width":193},"socks_pee_034":{"cx":249.0,"ground":236,"height":184,"width":193},"socks_pee_035":{"cx":249.0,"ground":236,"height":183,"width":194},"socks_pee_036":{"cx":249.0,"ground":236,"height":184,"width":196},"socks_pee_037":{"cx":249.0,"ground":236,"height":183,"width":197},"socks_pee_038":{"cx":249.0,"ground":236,"height":182,"width":204},"socks_pee_039":{"cx":249.0,"ground":236,"height":179,"width":211},"socks_pee_040":{"cx":248.5,"ground":235,"height":175,"width":217},"socks_pee_041":{"cx":249.0,"ground":236,"height":175,"width":216},"socks_pee_042":{"cx":252.0,"ground":236,"height":175,"width":213},"socks_pee_043":{"cx":254.0,"ground":235,"height":172,"width":208},"socks_pee_044":{"cx":250.0,"ground":243,"height":179,"width":201},"socks_pee_045":{"cx":249.0,"ground":244,"height":176,"width":192},"socks_pee_046":{"cx":249.0,"ground":244,"height":172,"width":181},"socks_pee_047":{"cx":249.0,"ground":244,"height":175,"width":170},"socks_pee_048":{"cx":250.0,"ground":244,"height":177,"width":162},"socks_pee_049":{"cx":249.0,"ground":244,"height":177,"width":156},"socks_pee_050":{"cx":252.0,"ground":244,"height":177,"width":153},"socks_pee_051":{"cx":254.0,"ground":244,"height":177,"width":151},"socks_pee_052":{"cx":257.0,"ground":246,"height":179,"width":144},"socks_pee_053":{"cx":262.0,"ground":245,"height":176,"width":138},"socks_pee_054":{"cx":263.0,"ground":245,"height":175,"width":124},"socks_pee_055":{"cx":264.0,"ground":244,"height":172,"width":120}},"sourceStart":4.25,"sourceEnd":8.875}}};
Object.assign(SPR,Object.fromEntries([...Object.values(NEW_COMPANION_ASSETS.gather).map(m=>[m.key,'assets/'+m.key+'.png']),...Object.values(NEW_COMPANION_ASSETS.clips).flatMap(m=>Array.from({length:m.count},(_,i)=>{const k=m.prefix+String(i).padStart(3,'0');return [k,'assets/'+k+'.png'];}))]));
for(let i=0;i<15;i++)SPR['rabbit_scratch_'+i]='assets/rabbit-scratch/'+String(i).padStart(2,'0')+'.png';
const DONG_TOILET_FRAMES=[{"cx":142,"ground":236},{"cx":142,"ground":236},{"cx":142,"ground":235},{"cx":143,"ground":234},{"cx":144,"ground":232},{"cx":146,"ground":232},{"cx":149,"ground":236},{"cx":150,"ground":244},{"cx":153,"ground":254},{"cx":157,"ground":273},{"cx":163,"ground":296},{"cx":172,"ground":310},{"cx":179,"ground":324},{"cx":190,"ground":334},{"cx":204,"ground":340},{"cx":222,"ground":344},{"cx":242,"ground":346},{"cx":262,"ground":342},{"cx":280,"ground":334},{"cx":277,"ground":284},{"cx":287,"ground":308},{"cx":290,"ground":338},{"cx":288,"ground":340},{"cx":290,"ground":352},{"cx":301,"ground":356},{"cx":311,"ground":356},{"cx":292,"ground":344},{"cx":274,"ground":302},{"cx":286,"ground":298},{"cx":298,"ground":302},{"cx":298,"ground":298},{"cx":299,"ground":300},{"cx":294,"ground":306},{"cx":290,"ground":304},{"cx":284,"ground":306},{"cx":280,"ground":306},{"cx":275,"ground":308},{"cx":270,"ground":312},{"cx":265,"ground":316},{"cx":262,"ground":320},{"cx":259,"ground":322},{"cx":258,"ground":322},{"cx":254,"ground":322},{"cx":252,"ground":322},{"cx":250,"ground":322},{"cx":251,"ground":322},{"cx":251,"ground":322},{"cx":251,"ground":322},{"cx":250,"ground":322},{"cx":250,"ground":322},{"cx":250,"ground":322},{"cx":248,"ground":322},{"cx":248,"ground":322},{"cx":248,"ground":322},{"cx":246,"ground":322},{"cx":246,"ground":322},{"cx":246,"ground":322},{"cx":246,"ground":322},{"cx":246,"ground":322},{"cx":246,"ground":322},{"cx":245,"ground":322},{"cx":245,"ground":320},{"cx":245,"ground":316},{"cx":238,"ground":306},{"cx":231,"ground":300},{"cx":220,"ground":298},{"cx":195,"ground":298},{"cx":179,"ground":304},{"cx":191,"ground":306},{"cx":208,"ground":308},{"cx":222,"ground":308},{"cx":231,"ground":308},{"cx":257,"ground":308},{"cx":279,"ground":306},{"cx":296,"ground":304},{"cx":310,"ground":304},{"cx":312,"ground":304},{"cx":314,"ground":308},{"cx":327,"ground":306},{"cx":339,"ground":302},{"cx":334,"ground":302},{"cx":322,"ground":304},{"cx":322,"ground":304},{"cx":335,"ground":304},{"cx":339,"ground":300},{"cx":329,"ground":300},{"cx":321,"ground":302},{"cx":316,"ground":304},{"cx":324,"ground":302},{"cx":330,"ground":298},{"cx":325,"ground":298},{"cx":315,"ground":300},{"cx":310,"ground":300},{"cx":310,"ground":300},{"cx":322,"ground":298},{"cx":324,"ground":296},{"cx":316,"ground":296},{"cx":317,"ground":296},{"cx":324,"ground":298},{"cx":338,"ground":312},{"cx":349,"ground":330},{"cx":354,"ground":342},{"cx":365,"ground":354},{"cx":352,"ground":354},{"cx":312,"ground":344},{"cx":319,"ground":354},{"cx":315,"ground":350},{"cx":328,"ground":328},{"cx":369,"ground":292},{"cx":362,"ground":288},{"cx":359,"ground":294},{"cx":351,"ground":298},{"cx":341,"ground":300},{"cx":340,"ground":296},{"cx":340,"ground":292},{"cx":331,"ground":286},{"cx":322,"ground":288},{"cx":304,"ground":290},{"cx":297,"ground":286},{"cx":280,"ground":282}];
for(let i=0;i<DONG_TOILET_FRAMES.length;i++)SPR['dong_toilet_'+i]='assets/dong-toilet/'+String(i).padStart(3,'0')+'.webp';
const BLACK_RANDOM_CLIPS={"knead":{"count":100,"fps":10,"duration":10,"cx":208,"ground":382,"width":384,"height":393,"standHeight":372,"path":"assets/black-knead-v2/knead-"},"loaf":{"count":51,"fps":10,"duration":5.1,"cx":259,"ground":304,"width":426,"height":328,"standHeight":314}};
Object.assign(SPR,Object.fromEntries(Object.entries(BLACK_RANDOM_CLIPS).flatMap(([kind,m])=>Array.from({length:m.count},(_,i)=>{const key="black_"+kind+"_"+i;return [key,(m.path||"assets/black-random/"+kind+"-")+String(i).padStart(3,"0")+".webp"];}))));
for(let i=0;i<29;i++)SPR['dong_scratch_'+i]='assets/dong-scratch/'+String(i).padStart(3,'0')+'.webp';
SPR.mat_sleep_prone='assets/mat-sleep-prone-v1.png';
SPR.black_door_gait='assets/litter-walk-black-v1.png';SPR.dong_door_gait='assets/litter-walk-dong-v1.png';
const IMG={};let loaded=0;const total=Object.keys(SPR).length;
for(const k in SPR){const im=new Image();if(k==='mat_sleep_prone'||k.endsWith('_door_gait')){im.fetchPriority='high';im.decoding='async';}im.onload=()=>{if(k.startsWith('gif_walk_'))IMG[k]=cleanWalkGround(im,Number(k.slice(-3)));else if(k.startsWith('socks_walk_'))IMG[k]=correctSocksRearPaw(im,WALKING_NPCS.socks.frames[k]);else if(k.startsWith('dongdong_walk_'))IMG[k]=correctDongdongPaws(im,WALKING_NPCS.dongdong.frames[k]);loaded++;};im.src=SPR[k];IMG[k]=im;}

const W=600,H=1220;let FT=360;
let tvCats=null;
let EX0=0,EW=600,EH=2100,BGS=1.4;const EY0=-320;
const cv=document.getElementById('room'),ctx=cv.getContext('2d');
const hudEl=document.getElementById('hud'),toolsEl=document.getElementById('tools');
const statusEl=document.getElementById('status'),wantEl=document.getElementById('want');
const rand=(a,b)=>a+Math.random()*(b-a),pick=a=>a[Math.floor(Math.random()*a.length)],lerp=(a,b,t)=>a+(b-a)*t;
function rr(c,x,y,w,h,r){c.beginPath();if(c.roundRect)c.roundRect(x,y,w,h,r);else c.rect(x,y,w,h);}

/* ---------- name ---------- */
const nameBtn=document.getElementById('nameBtn');
let catName='黑屁屁';
try{const s=localStorage.getItem('heipipi-name');if(s)catName=s;}catch(e){}
nameBtn.textContent=catName;
nameBtn.onclick=()=>{
  const inp=document.createElement('input');inp.id='nameInput';inp.value=catName;inp.maxLength=8;
  nameBtn.replaceWith(inp);inp.focus();inp.select();
  const done=()=>{catName=inp.value.trim()||'黑屁屁';nameBtn.textContent=catName;inp.replaceWith(nameBtn);
    try{localStorage.setItem('heipipi-name',catName);}catch(e){}};
  inp.onblur=done;inp.onkeydown=e=>{if(e.key==='Enter')inp.blur();};
};
function say(m){statusEl.textContent=m;}

/* ---------- places & obstacles ---------- */
const BOX={x:130,back:268,front:332};
let roomPlan=null;
function ownsTVVisit(a){return typeof tvCats!=='undefined'&&tvCats?.has(a);}
function cancelTVVisit(a){if(typeof tvCats!=='undefined'&&tvCats)tvCats.cancel(a,false);}
function cancelPlayerTVVisits(){if(typeof tvCats!=='undefined'&&tvCats?.isGroupActive())tvCats.cancelAll();else cancelTVVisit(cat);}
function drawTVVisit(c,a){return typeof tvCats!=='undefined'&&tvCats?.draw(c,a);}
function assemblyGoal(a){return a?.gatherSlot||a?.tvVisit?.target||null;}
const BOWL={x:110,y:750},WATER={x:310,y:750},LIT={x:520,back:630,front:688};
const FAVOURITE_MAT={x:BOX.x,y:395,width:176,height:94};
const SUN={x:450,y:285};
const TOAST_CENTER={x:300,y:522};
const TOAST_PAD={"cx":295.0,"cy":397.0,"x0":36,"x1":554,"y0":199,"y1":595};
const TOAST={w:172,x:TOAST_CENTER.x+(300-TOAST_PAD.cx)*172/600,y:TOAST_CENTER.y+(590-TOAST_PAD.cy)*172/600};
const bowl={food:1,water:1};
const OBST=[
  {x0:44,y0:262,x1:216,y1:336,h:60,wall:true},


  {x0:LIT.x-64,y0:LIT.back-4,x1:LIT.x+64,y1:LIT.front+4,h:42},
];
// Use the renderer's furniture layout so artwork and physical footprints agree.
let panoramaFurnitureCache=null;
function panoramaFurniturePenetration(x,y){
 if(typeof document==='undefined'&&!roomPlan)return 0;
 const layout=roomPlan||document.documentElement.getAttribute('data-layout');
 if(!panoramaFurnitureCache||panoramaFurnitureCache.layout!==layout){panoramaFurnitureCache=(roomPlan?roomPlan.obstacles:layout==='desktop'?WindowScene.panoramaLayout(FT).obstacles:[WindowScene.phoneTelevision(FT).footprint]).map(shape=>{
  const points=shape.map(([x,y])=>[x/70,y/18]);
  return {points,left:Math.min(...points.map(p=>p[0]))-1,right:Math.max(...points.map(p=>p[0]))+1,top:Math.min(...points.map(p=>p[1]))-1,bottom:Math.max(...points.map(p=>p[1]))+1};
 });panoramaFurnitureCache.layout=layout;}
 x/=70;y/=18;let penetration=0;
 for(const shape of panoramaFurnitureCache){
  if(x<=shape.left||x>=shape.right||y<=shape.top||y>=shape.bottom)continue;
  let inside=false,distance=Infinity;const p=shape.points;
  for(let i=0,j=p.length-1;i<p.length;j=i++){
   const [ax,ay]=p[j],[bx,by]=p[i],dx=bx-ax,dy=by-ay;
   if((ay>y)!==(by>y)&&x<(bx-ax)*(y-ay)/(by-ay)+ax)inside=!inside;
   const t=Math.max(0,Math.min(1,((x-ax)*dx+(y-ay)*dy)/(dx*dx+dy*dy||1)));
   distance=Math.min(distance,Math.hypot(x-ax-t*dx,y-ay-t*dy));
  }
  penetration=Math.max(penetration,inside?1+distance:Math.max(0,1-distance));
 }
 return penetration;
}
function panoramaFurnitureBlocked(x,y){return panoramaFurniturePenetration(x,y)>1e-7;}
function panoramaFurnitureStepClear(a,b){
 const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)/6));let previous=panoramaFurniturePenetration(a.x,a.y);
 for(let i=1;i<=n;i++){
  const t=i/n,depth=panoramaFurniturePenetration(a.x+(b.x-a.x)*t,a.y+(b.y-a.y)*t);
  if(depth>1e-7&&(previous<=1e-7||depth>=previous-1e-8))return false;
  previous=depth;
 }
 return true;
}
const BOX_IN={x:BOX.x+4,y:305},BOX_OUT={x:BOX.x+4,y:BOX.front+66};
const LIT_IN={x:LIT.x,y:LIT.front-20},LIT_OUT={x:LIT.x-170,y:LIT.back+32};
function litterExitPoint(){return {x:Math.min(GX1-2,LIT.x+155),y:Math.min(GY1-18,LIT.front+65)};}
function litterPortal(){
 const side=roomPlan?.desktop?1:-1;
 return {entry:{x:LIT.x,y:LIT.front},inside:{x:LIT.x,y:LIT.front-38},approach:{x:LIT.x,y:LIT.front+68},
  clear:{x:LIT.x+side*170,y:Math.min(GY1-12,LIT.front+92)},wait:{x:LIT.x+side*180,y:LIT.back+14},halfWidth:(LIT.door||92)/2};
}
function protectedLitterExit(a){return a.facilityCare?.door&&!['queue','travel'].includes(a.facilityCare.phase);}
function requestLitterExit(a){const c=a.facilityCare;if(!c?.door)return false;c.aborted=true;if(!['exitDoor','clearDoor'].includes(c.phase)){c.phase='exitDoor';c.path=[];c.repath=0;c.blocked=0;}a.act=null;a.pose='walk';a.state='walk';return true;}
function deferLitterExit(fn){if(!protectedLitterExit(cat))return false;cat.facilityCare.afterExit=fn;requestLitterExit(cat);return true;}
function doorDestination(c){const p=litterPortal();return c.phase==='queue'?c.waitAt||p.wait:c.phase==='travel'||c.phase==='exitDoor'?p.approach:c.phase==='clearDoor'?p.clear:p.inside;}
function beginLitterDoor(a){
 if(a.facilityCare)return a.facilityCare.kind==='litter';facilitySchedule(a);
 if(typeof tvCats!=='undefined'&&tvCats?.pauseForCare)tvCats.pauseForCare(a);else cancelTVVisit(a);
 releaseScratchBoard(a);const slot=reserveFacility(a,'litter');
 a.facilityCare={kind:'litter',door:true,slot,phase:slot?'travel':'queue',path:[],repath:0,retry:0,blocked:0,travel:0,timer:0};
 a.path=[];a.after=null;a.then=null;a.trafficYield=null;a.yieldResume=null;a.routeQueue=[];a.act=null;a.state='walk';a.pose='walk';a.doorGaitTime=0;return true;
}
function walkDoorRoute(a,c,target,dt,direct=false){
 c.repath-=dt;const speed=a.id==='dongdong'?50:55;
 if(Math.hypot(a.x-target.x,a.y-target.y)<1.5)return true;
 for(const other of [cat,...npcBodies(a)])if(other!==a&&pairDistance(target,other)<1.5)requestNpcYield(other,a,target);
 if(!direct&&c.repath<=0&&(c.blocked>.15||!c.path.length)){c.path=yeFindPath(a.x,a.y,target.x,target.y,a);c.repath=.5;}
 const p=direct?target:c.path[0];if(!p){c.blocked+=dt;a.pose='sit';return false;}
 const dx=p.x-a.x,dy=p.y-a.y,d=Math.hypot(dx,dy),step=Math.min(d,speed*dt),next={x:a.x+dx/(d||1)*step,y:a.y+dy/(d||1)*step};
 const clear=direct?Math.abs(next.x-LIT.x)<litterPortal().halfWidth-18&&npcObstacles(a).every(o=>pairCanStep(a,next,o)):yeCanStep(a,next,a)&&yeLineClear(a,next,a);
 if(clear){a.x=next.x;a.y=next.y;a.z=0;a.state='walk';a.pose='walk';a.act=null;a.speed=speed;if(Math.abs(dx)>.1)a.face=dx<0?-1:1;a.walkTime=(a.walkTime||0)+dt*speed/80;a.doorGaitTime=(a.doorGaitTime||0)+dt*speed/80;c.blocked=0;if(!direct&&d<=step+.01)c.path.shift();}
 else{c.blocked+=dt;a.pose='sit';for(const other of [cat,...npcBodies(a)])if(other!==a)requestNpcYield(other,a,next);}
 return Math.hypot(a.x-target.x,a.y-target.y)<1.5;
}
function advanceLitterDoor(a,dt){
 const c=a.facilityCare,p=litterPortal();if(a.trafficYield&&updateTrafficYield(a,dt))return true;
 if(c.phase==='queue'){
  c.retry-=dt;if(c.retry<=0){c.retry=.5;const slot=reserveFacility(a,'litter');if(slot){c.slot=slot;c.phase='travel';c.path=[];c.repath=0;c.blocked=0;}}
  if(c.phase==='queue'){
   if(!c.waitAt||yeBlocked(c.waitAt.x,c.waitAt.y,false,a))c.waitAt=yeFreePoint(p.wait.x,p.wait.y,a)||{x:a.x,y:a.y};
   const arrived=walkDoorRoute(a,c,c.waitAt,dt);if(arrived){a.state='wait';a.pose='sit';}
   for(const other of [cat,...npcBodies(a)])if(other!==a&&!other.facilityCare&&pairDistance(p.approach,other)<1.5)requestNpcYield(other,a,p.approach);
   return true;
  }
 }
 if(c.phase==='travel'){
  if(walkDoorRoute(a,c,p.approach,dt)){c.phase='enterDoor';c.path=[];c.blocked=0;a.doorGaitTime=0;}return true;
 }
 if(c.phase==='enterDoor'){
  if(walkDoorRoute(a,c,p.inside,dt,true)){c.phase='use';c.timer=a.id==='dongdong'?3:rand(5,8);c.elapsed=0;a.state='litter';a.pose='crouch';a.act=a===cat?'litter':null;}
  a.inside=a.y<LIT.front+2?'litter':null;return true;
 }
 if(c.phase==='use'||c.phase==='scratch'){
  a.x=p.inside.x;a.y=p.inside.y;a.z=0;a.inside='litter';a.state=c.phase==='use'?'litter':'scratch';a.pose=c.phase==='use'?'crouch':'scratch';a.act=a===cat?(c.phase==='use'?'litter':'scratch'):null;c.elapsed=(c.elapsed||0)+dt;c.timer-=dt;
  if(c.phase==='scratch'){c.sandTime=(c.sandTime||0)+dt;if(c.sandTime>.16){c.sandTime=0;puff('sand',LIT.x,LIT.front-30,{vx:rand(-25,25),vy:-45,life:.5});}}
  if(c.timer<=0){if(c.phase==='use'){c.used=true;c.phase='scratch';c.timer=2.4;c.elapsed=0;facilitySchedule(a);a.facilityHistory.scratch=(a.facilityHistory.scratch||0)+1;}else{c.phase='turnDoor';c.timer=.6;c.elapsed=0;}}return true;
 }
 if(c.phase==='turnDoor'){c.timer-=dt;a.act=null;a.pose='sit';if(c.timer<=0){c.phase='exitDoor';a.doorGaitTime=0;}return true;}
 if(c.phase==='exitDoor'){
  if(walkDoorRoute(a,c,p.approach,dt,true)){c.phase='clearDoor';c.path=[];c.repath=0;c.blocked=0;a.inside=null;}
  else a.inside=a.y<LIT.front+2?'litter':null;return true;
 }
 if(c.phase==='clearDoor'&&walkDoorRoute(a,c,p.clear,dt)){
  const after=c.afterExit;if(!c.aborted||c.used)finishFacility(a);else cancelFacility(a,true);a.inside=null;a.z=0;if(a.id==='dongdong')a.toiletDue=facilityClock.time+rand(90,150);if(after)after();
 }return true;
}
const EAT_AT={x:BOWL.x+230,y:BOWL.y},DRINK_AT={x:WATER.x+230,y:WATER.y};
function applyHomeLayout(){
 if(typeof RoomLayout==='undefined')return false;
 const desktop=typeof document!=='undefined'&&document.documentElement.getAttribute('data-layout')==='desktop';
 const previous=roomPlan,next=RoomLayout.create({desktop,left:EX0,width:EW});
 if(previous&&previous.desktop===desktop&&previous.left===EX0&&previous.width===EW)return false;
 if(previous){
  tvCats?.cancelAll();if(typeof gather!=='undefined'&&gather.active)stopGather();
  for(const a of [cat,...npcBodies()]){releaseFacility(a);releaseScratchBoard(a);a.facilityCare=null;a.inside=null;a.matVisit=null;a.sleepChoice=null;a.randomAction=null;a.path=[];a.goal=null;a.walkGoal=null;a.after=null;a.then=null;a.trafficYield=null;a.act=null;a.eyes='open';a.state=a===cat?'idle':'wait';a.pose='sit';a.z=0;a.timer=.5;a.x=next.left+(a.x-previous.left)*next.width/previous.width;}
 }
 roomPlan=next;FT=next.floor;Object.assign(BOX,next.box);Object.assign(FAVOURITE_MAT,next.mat);Object.assign(BOWL,next.bowl);Object.assign(WATER,next.water);Object.assign(LIT,next.litter);Object.assign(SUN,next.lookout);Object.assign(TOAST_CENTER,next.toast);TOAST.w=next.toast.width;TOAST.x=TOAST_CENTER.x+(300-TOAST_PAD.cx)*TOAST.w/600;TOAST.y=TOAST_CENTER.y+(590-TOAST_PAD.cy)*TOAST.w/600;
 Object.assign(BOX_IN,{x:BOX.x+4,y:BOX.front-27});Object.assign(BOX_OUT,{x:BOX.x+4,y:BOX.front+66});Object.assign(LIT_IN,{x:LIT.x,y:LIT.front-20});Object.assign(LIT_OUT,{x:LIT.x,y:LIT.front+68});
 Object.assign(EAT_AT,{x:BOWL.x+230,y:BOWL.y});Object.assign(DRINK_AT,{x:WATER.x+230,y:WATER.y});
 for(const kind of ['eat','drink'])Object.assign(FACILITIES[kind],kind==='eat'?BOWL:WATER);Object.assign(FACILITIES.litter,LIT_OUT);
 OBST.splice(0,OBST.length,{x0:BOX.x-86,x1:BOX.x+86,y0:BOX.back-6,y1:BOX.front+4,h:60,wall:true},{x0:LIT.x-LIT.width/2,x1:LIT.x+LIT.width/2,y0:LIT.back-4,y1:LIT.front+4,h:42});
 GX0=EX0+42;GX1=EX0+EW-42;GY0=FT+24;GY1=next.floorBottom-28;ROWS=Math.floor((GY1-GY0)/CELL)+1;COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;panoramaFurnitureCache=null;grid=new Uint8Array(N);for(let i=0;i<N;i++)grid[i]=blockedPt(gx(i),gy(i))?1:0;
 for(const t of toys){const p=next.toys.find(p=>p.id===t.id);if(p&&!t.carried&&!t.held)Object.assign(t,{x:p.x,y:p.y});}
 return true;
}

/* Shared small bowls: reserve opposing places, and wait when occupied. */
const facilityClock={time:0},facilityReservations=new Map();
const FACILITIES={
 eat:{x:BOWL.x,y:BOWL.y,rx:28,ry:8,capacity:3},
 drink:{x:WATER.x,y:WATER.y,rx:28,ry:12,capacity:3},
 litter:{x:LIT_OUT.x,y:LIT_OUT.y,capacity:1}
};
function facilitySlots(kind,actor=cat){
 const f=FACILITIES[kind];
 if(kind==='litter')return [{x:f.x,y:f.y,index:0,face:1}];
 const profile=feedingProfile(actor,kind,0),center=feedingContact(kind);
 return [{index:0,face:-1,dx:13,dy:0},{index:1,face:1,dx:-13,dy:0},{index:2,face:-1,dx:0,dy:4}].map(p=>{const contact={x:center.x,y:center.y};return {...p,contact,x:Math.max(GX0+2,Math.min(GX1-2,contact.x-p.face*profile.dx)),y:contact.y-profile.dy};});
}
function stationBlocked(x,y,padX=42,padY=12,actor=null,ownKind=null){
 const reserved=ownKind||(actor&&facilityReservations.get(actor)?.kind);
 return ['eat','drink'].some(kind=>{const f=FACILITIES[kind],px=reserved===kind?8:padX,py=reserved===kind?4:padY;return ((x-f.x)/(f.rx+px))**2+((y-f.y)/(f.ry+py))**2<1;});
}
function facilityAccess(kind,slot,actor=cat){if(kind==='litter')return slot;const f=FACILITIES[kind],side=slot.face===1?-1:1,approach={x:f.x+side*164,y:slot.y};return yeBlocked(approach.x,approach.y,false,actor,kind)?slot:approach;}
function releaseFacility(actor){facilityReservations.delete(actor);actor.feedingIntent=null;}
function reserveFacility(actor,kind){
 const old=facilityReservations.get(actor);if(old?.kind===kind)return old.slot;
 releaseFacility(actor);actor.feedingIntent=kind;
 const occupied=[...facilityReservations.values()].filter(r=>r.kind===kind).map(r=>r.slot.index);
 const candidates=facilitySlots(kind,actor).filter(p=>!occupied.includes(p.index)&&!yeBlocked(p.x,p.y,false,actor,kind)&&npcObstacles(actor).every(o=>pairDistance(p,o)>1.05)).sort((a,b)=>{const others=[...facilityReservations.values()].filter(r=>r.kind===kind),used=face=>others.some(r=>r.slot.face===face)?1:0;return used(a.face)-used(b.face)||Math.hypot(a.x-actor.x,a.y-actor.y)-Math.hypot(b.x-actor.x,b.y-actor.y);});
 for(const slot of candidates){const access=facilityAccess(kind,slot,actor),route=yeFindPath(actor.x,actor.y,access.x,access.y,actor);if(!route.length&&Math.hypot(actor.x-access.x,actor.y-access.y)>3)continue;facilityReservations.set(actor,{kind,slot});return slot;}
 actor.feedingIntent=null;return null;
}
function facilitySchedule(actor){
 if(actor.facilityDue)return;
 actor.facilityDue={eat:facilityClock.time+rand(2,9)/(actor===ye?.8:1),drink:facilityClock.time+rand(12,25)/(actor===ye?.8:1)};if(actor===cat)actor.facilityDue.litter=facilityClock.time+rand(32,58);
 actor.facilityHistory={eat:0,drink:0,litter:0};
}
function beginFacility(actor,kind){
 if(actor.walkOnly&&!(actor.id==='dongdong'&&kind==='litter')||actor===rabbit||actor!==cat&&(kind==='litter'&&actor.id!=='dongdong'||actor.trafficYield))return false;
 if(roomPlan&&kind==='litter')return beginLitterDoor(actor);
 if(actor===cat&&kind==='litter')for(const npc of extraNPCs)if(npc.id==='dongdong'&&npc.facilityCare?.kind==='litter'){const out=npc.facilityCare.phase==='travel'?{x:npc.x,y:npc.y}:dongToiletExit(npc);cancelFacility(npc);npc.inside=null;npc.z=0;npc.x=out.x;npc.y=out.y;npc.toiletDue=facilityClock.time+30;}

 facilitySchedule(actor);
 if(actor.facilityCare)return actor.facilityCare.kind===kind;
 const slot=reserveFacility(actor,kind);if(!slot)return false;if(typeof tvCats!=='undefined'&&tvCats?.pauseForCare)tvCats.pauseForCare(actor);else cancelTVVisit(actor);
 const access=facilityAccess(kind,slot,actor),route=yeFindPath(actor.x,actor.y,access.x,access.y,actor);
 actor.facilityCare={kind,slot,access,stage:kind!=='litter',path:route,phase:'travel',repath:0,blocked:0,travel:0,timer:0};
 actor.path=[];actor.after=null;actor.then=null;actor.yieldResume=null;actor.routeQueue=[];actor.act=null;actor.state='walk';actor.goal=slot;
 if(kind==='eat'&&bowl.food<.3)bowl.food=1;
 if(kind==='drink')bowl.water=1;
 actor.icon='curious';actor.iconUntil=actor.time+30;return true;
}
function cancelFacility(actor,force=false){const previous=actor.facilityCare;if(!force&&protectedLitterExit(actor)){requestLitterExit(actor);return false;}if(actor===cat&&!previous?.door&&previous?.kind==='litter'&&previous.phase!=='travel'&&previous.phase!=='depart'&&blockedPt(actor.x,actor.y))actor.inside='litter';actor.facilityCare=null;releaseFacility(actor);actor.act=null;actor.path=[];actor.state=actor===cat?'idle':'wait';actor.pose='sit';actor.timer=rand(.5,2);return true;}
function finishFacility(actor){
 const care=actor.facilityCare;if(!care)return;
 facilitySchedule(actor);actor.facilityHistory[care.kind]++;
 const delay=care.kind==='eat'?rand(38,72):care.kind==='drink'?rand(38,72):rand(75,125);
 actor.facilityDue[care.kind]=facilityClock.time+delay/(actor===ye&&care.kind!=='litter'?.8:1);
 if(actor===cat){if(care.kind==='eat')bump('hunger',35);if(care.kind==='drink')bump('thirst',45);if(care.kind==='litter')bump('potty',100);}
 actor.inside=null;actor.z=0;cancelFacility(actor,true);
}
function sharedMealContact(actor,dt){
 const care=actor.facilityCare;if(!care?.slot?.contact||care.phase!=='use'||care.kind==='litter')return;
 const users=[cat,ye,rabbit,...extraNPCs].filter(a=>a.facilityCare?.kind===care.kind&&a.facilityCare.phase==='use');
 const center=feedingContact(care.kind),dx=users.length>1?(care.slot.index===2?0:care.slot.face===1?-12:12):0;
 const target={x:center.x+dx,y:center.y},f=1-Math.exp(-8*dt);care.slot.contact.x=lerp(care.slot.contact.x,target.x,f);care.slot.contact.y=lerp(care.slot.contact.y,target.y,f);
}
function advanceFacility(actor,dt){
 const c=actor.facilityCare;if(!c)return false;if(c.door)return advanceLitterDoor(actor,dt);if(c.phase==='dongToilet')return advanceDongToilet(actor,dt);sharedMealContact(actor,dt);
 if(c.phase==='scratch'){
  c.timer-=dt;c.sandTime=(c.sandTime||0)+dt;
  if(c.sandTime>=.12){c.sandTime=0;puff('sand',actor.x+actor.face*45,actor.y-10,{vx:-actor.face*rand(25,65),vy:rand(-65,-30),life:.7});}
  if(c.timer<=0){c.phase='exit';c.t=0;c.from={x:actor.x,y:actor.y};actor.inside=null;actor.act=null;}
  return true;
 }

 const target=c.phase==='depart'?c.departure:c.stage?c.access:c.slot;c.repath-=dt;
 if(c.phase==='travel'||c.phase==='depart'){
  c.travel+=dt;
  if(Math.hypot(actor.x-target.x,actor.y-target.y)<3){
   if(c.phase==='depart'){finishFacility(actor);return true;}
   if(c.stage){c.stage=false;c.path=[];c.blocked=0;c.repath=0;return true;}
   actor.face=target.face;actor.path=[];
   if(c.kind==='litter'&&actor.id==='dongdong'){c.phase='dongToilet';c.elapsed=0;c.from={x:actor.x,y:actor.y};c.exit=dongToiletExit(actor);actor.state='litter';return true;}
   if(c.kind==='litter'){c.phase='enter';c.from={x:actor.x,y:actor.y};c.t=0;actor.state='litter';}
   else{c.phase='use';c.timer=c.kind==='eat'?rand(9,15):rand(7,11);actor.state=c.kind;actor.act=actor===cat?c.kind:null;actor.pose='eat';actor.restTime=1.8;actor.face=target.face;}
   return true;
  }
  if(c.repath<=0&&(c.blocked>.2||!c.path.length)){c.path=yeFindPath(actor.x,actor.y,target.x,target.y,actor);c.repath=.9;}
  const waypoint=c.path[0];
  if(waypoint){
   const dx=waypoint.x-actor.x,dy=waypoint.y-actor.y,d=Math.hypot(dx,dy),speed=actor===rabbit?125:actor===cat?95:72,step=Math.min(d,speed*dt);
   const next={x:actor.x+(d?dx/d*step:0),y:actor.y+(d?dy/d*step:0)};
   if(yeCanStep(actor,next,actor)&&yeLineClear(actor,next,actor)){
    actor.x=next.x;actor.y=next.y;if(Math.abs(dx)>.2)actor.face=dx<0?-1:1;actor.state='walk';actor.pose='walk';actor.speed=speed;actor.walkTime=(actor.walkTime||0)+dt*speed/(actor===rabbit?110:62);if(actor===cat)videoWalkTime=advanceVideoWalk(videoWalkTime,dt,speed);c.blocked=0;
    if(d<=step+.01)c.path.shift();
   }else{c.blocked+=dt;actor.pose='sit';if(actor===cat)yeTryYield(target);else if(rabbitCollider&&actor!==rabbit)rabbitTryYield(actor,target);}
  }else c.blocked+=dt;
  if(actor===cat&&c.blocked>0)yeTryYield(target);
  if(c.blocked>5||c.travel>55){facilitySchedule(actor);actor.facilityDue[c.kind]=facilityClock.time+rand(3,7);cancelFacility(actor);}
  return true;
 }
 if(c.phase==='enter'||c.phase==='exit'){
  const destination=c.phase==='enter'?LIT_IN:litterExitPoint();
  actor.face=destination.x>=c.from.x?1:-1;actor.pose='pounce';actor.state='hopFacility';
  const t=Math.min(1,c.t+dt/.65),next={x:lerp(c.from.x,destination.x,t),y:lerp(c.from.y,destination.y,t)};
  for(const other of npcObstacles(actor))if(!pairCanStep(actor,next,other))allowTrafficPass(actor,other);
  c.t=t;actor.x=next.x;actor.y=next.y;actor.z=Math.sin(t*Math.PI)*24;
  if(t>=1){actor.z=0;if(c.phase==='enter'){c.phase='use';c.timer=rand(5,8);actor.inside='litter';actor.state='litter';actor.pose='sit';actor.act=actor===cat?'litter':null;}else{c.phase='depart';c.departure={x:Math.min(GX1-2,LIT.x+185),y:Math.min(GY1-16,LIT.front+100)};c.path=[];c.blocked=0;c.repath=0;actor.state='walk';actor.act=null;}}return true;
 }
 c.timer-=dt;
 actor.icon=c.kind==='litter'?'content':'happy';actor.iconUntil=actor.time+3;
 if(c.kind==='eat'){if(bowl.food<.05)bowl.food=1;bowl.food=Math.max(.01,bowl.food-dt/180);}
 if(c.kind==='drink')bowl.water=Math.max(.5,bowl.water-dt/300);
 if(c.timer<=0){if(c.kind==='litter'){c.phase='scratch';c.timer=2.4;c.sandTime=0;actor.state='scratch';actor.pose='scratch';actor.act=actor===cat?'scratch':null;actor.facilityHistory.scratch=(actor.facilityHistory.scratch||0)+1;if(actor===cat)say('撥撥貓砂，把它蓋好');}else{c.phase='depart';c.departure=yeFreePoint(actor.x,actor.y-110,actor)||c.slot;c.path=[];c.blocked=0;c.repath=0;actor.state='walk';actor.act=null;}}return true;
}
function updateNpcFacilities(actor,dt){
 if(updateTrafficYield(actor,dt))return true;
 if(actor===rabbit){if(actor.state==='scratchPad')return false;if(actor.facilityCare)cancelFacility(actor);if(!npcRestAllowed(actor)&&actor.state!=='walk'){rabbitChooseDestination();return true;}return false;}
 if(actor!==cat&&actor.facilityDue)delete actor.facilityDue.litter;
 facilitySchedule(actor);
 if(!actor.facilityCare&&!actor.yieldResume){
  const due=Object.entries(actor.facilityDue).filter(([,t])=>t<=facilityClock.time).sort((a,b)=>a[1]-b[1]);
  if(due.length){const kind=due[0][0];if(!beginFacility(actor,kind))actor.facilityDue[kind]=facilityClock.time+rand(2,5);}
 }
 if(actor.facilityCare){actor.time+=dt;return advanceFacility(actor,dt);}return false;
}
function playerFacility(kind,msg){
 if(deferLitterExit(()=>playerFacility(kind,msg)))return;
 if(cat.inside){const out=cat.inside==='box'?BOX_OUT:LIT_OUT;cat.inside=null;hopTo(out.x,out.y,()=>playerFacility(kind,msg));return;}
 if(!beginFacility(cat,kind)){const target=facilitySlots(kind,cat)[0];yeTryYield(target);doFor('wait','sit',.4,'正在靠近，等其他貓咪讓路',()=>playerFacility(kind,msg));return;}
 if(msg)say(msg);
}
/* Temporary floor puddles: independent from soft cat-to-cat traffic. */
const floorPuddles=[];
function puddleDistance(p,o){return ((p.x-o.x)/o.rx)**2+((p.y-o.y)/o.ry)**2;}
function puddleBlocked(x,y){return floorPuddles.some(o=>puddleDistance({x,y},o)<1);}
function puddleStepClear(a,b){
 return floorPuddles.every(o=>{
  const x=(a.x-o.x)/o.rx,y=(a.y-o.y)/o.ry,dx=(b.x-a.x)/o.rx,dy=(b.y-a.y)/o.ry;
  const t=Math.max(0,Math.min(1,-(x*dx+y*dy)/(dx*dx+dy*dy||1)));
  return (x+t*dx)**2+(y+t*dy)**2>=1-1e-8;
 });
}
function refreshPuddleGrid(){for(let i=0;i<N;i++)grid[i]=blockedPt(gx(i),gy(i))?1:0;}
function puddleLocation(actor){
 if(actor.id!=='socks'||lift.actor===actor||actor.gatherSlot||actor.trafficYield||floorPuddles.length)return null;
 const p={x:actor.x-actor.face*52,y:actor.y+6,rx:48,ry:24,age:0};
 if(p.x<GX0+p.rx||p.x>GX1-p.rx||p.y<GY0+p.ry||p.y>GY1-p.ry||yeBlocked(p.x,p.y,false,actor)||!npcRestAllowed(p)||Math.abs(p.y-(TOAST_CENTER.y-75))<65)return null;
 if([cat,ye,rabbit,...extraNPCs].some(a=>a!==lift.actor&&(puddleDistance(a,p)<1.1||a.state==='hop'&&!puddleStepCandidate(a,{x:a.hop.x1,y:a.hop.y1},p)||a===cat&&a.cs==='pounce'&&!puddleStepCandidate(a,{x:a.jx1,y:a.jy1},p))))return null;
 return p;
}
function puddleStepCandidate(a,b,p){
 const x=(a.x-p.x)/p.rx,y=(a.y-p.y)/p.ry,dx=(b.x-a.x)/p.rx,dy=(b.y-a.y)/p.ry,t=Math.max(0,Math.min(1,-(x*dx+y*dy)/(dx*dx+dy*dy||1)));
 return (x+t*dx)**2+(y+t*dy)**2>=1.1;
}
function spawnPuddle(actor){
 const p=puddleLocation(actor);if(!p)return false;floorPuddles.push(p);refreshPuddleGrid();
 for(const a of [cat,ye,rabbit,...extraNPCs]){if(a.trafficYield){a.trafficYield.path=[];a.trafficYield.target=null;a.trafficYield.repath=0;}rerouteTraffic(a);}
 return true;
}
function updatePuddles(dt){
 let changed=false;for(let i=floorPuddles.length-1;i>=0;i--){floorPuddles[i].age+=dt;if(floorPuddles[i].age>=20-1e-8){floorPuddles.splice(i,1);changed=true;}}
 if(changed)refreshPuddleGrid();
}
function drawPuddles(c){
 for(const p of floorPuddles){c.save();const grow=Math.min(1,.18+p.age/.55);c.translate(p.x,p.y);c.scale(grow,grow);c.translate(-p.x,-p.y);c.globalAlpha=.68;c.fillStyle='#c5a531';c.beginPath();c.ellipse(p.x,p.y,27,10,0,0,Math.PI*2);c.ellipse(p.x+17,p.y+2,14,6,.12,0,Math.PI*2);c.ellipse(p.x-17,p.y-2,11,6,-.1,0,Math.PI*2);c.fill();c.fillStyle='rgba(255,239,155,.5)';c.beginPath();c.ellipse(p.x-5,p.y-3,11,2,-.1,0,Math.PI*2);c.fill();c.restore();}
}
/* End temporary floor puddles. */

/* Round corrugated cardboard pads, anchored to the visible upper-right floor. */
function scratchBoardLayout(){if(roomPlan)return roomPlan.scratch;const x=Math.min(GX1-169,SUN.x+128);return [{id:0,x,y:298,rx:48,ry:24},{id:1,x,y:378,rx:48,ry:24}];}
function scratchBoardBlocked(x,y,actor=null){return scratchBoardLayout().some(b=>actor?.scratchBoard!==b.id&&((x-b.x)/82)**2+((y-b.y)/36)**2<1);}
function scratchBoardStepClear(a,b,actor){return scratchBoardLayout().every(p=>{
 if(actor?.scratchBoard===p.id)return true;
 const x=(a.x-p.x)/82,y=(a.y-p.y)/36,dx=(b.x-a.x)/82,dy=(b.y-a.y)/36,before=x*x+y*y,after=(x+dx)**2+(y+dy)**2;
 if(before<1)return x*dx+y*dy>=-1e-8&&after>before+1e-8;
 const t=Math.max(0,Math.min(1,-(x*dx+y*dy)/(dx*dx+dy*dy||1)));return (x+t*dx)**2+(y+t*dy)**2>=1-1e-8;
});}
function releaseScratchBoard(actor){actor.scratchBoard=null;actor.scratchGoal=null;}
function beginScratchVisit(actor){
 if(!['socks','dongdong','rabbit'].includes(actor.id)||lift.actor===actor||actor.gatherSlot||actor.trafficYield)return false;
 const busy=[rabbit,...extraNPCs].filter(a=>a!==actor&&a.scratchBoard!=null).map(a=>a.scratchBoard);
 for(const b of scratchBoardLayout()){
  if(busy.includes(b.id))continue;
  actor.scratchBoard=b.id;const side=roomPlan&&b.x>roomPlan.mainAisle.x?-1:1,target={x:b.x+side*68,y:b.y+10,face:-side};
  if(yeBlocked(target.x,target.y,true,actor)){releaseScratchBoard(actor);continue;}
  const path=yeFindPath(actor.x,actor.y,target.x,target.y,actor);
  if(!path.length||Math.hypot(path.at(-1).x-target.x,path.at(-1).y-target.y)>6){releaseScratchBoard(actor);continue;}
  actor.scratchGoal=target;actor.goal=target;actor.path=path;actor.state='walk';actor.speed=80;actor.wait=0;actor.repath=0;return true;
 }
 return false;
}
function drawScratchBoards(c){
 for(const b of scratchBoardLayout()){
  c.save();c.translate(b.x,b.y);c.fillStyle='rgba(50,29,10,.17)';c.beginPath();c.ellipse(2,6,51,25,0,0,Math.PI*2);c.fill();
  c.fillStyle='#a47b47';c.beginPath();c.ellipse(0,4,48,24,0,0,Math.PI*2);c.fill();c.fillStyle='#c7a777';c.beginPath();c.ellipse(0,0,48,24,0,0,Math.PI*2);c.fill();
  c.save();c.scale(1,.5);c.beginPath();c.arc(0,0,45,0,Math.PI*2);c.clip();
  for(let r=2;r<46;r+=2.2){c.strokeStyle=r%3<1?'#aa8757':'#7d694c';c.lineWidth=.75;c.beginPath();c.arc(0,0,r,0,Math.PI*2);c.stroke();for(let a=0;a<Math.PI*2;a+=4/(r+2)){c.beginPath();c.moveTo(Math.cos(a)*r,Math.sin(a)*r);c.lineTo(Math.cos(a+.035)*(r+1.8),Math.sin(a+.035)*(r+1.8));c.stroke();}}
  c.restore();c.strokeStyle='#e0c59b';c.lineWidth=2;c.beginPath();c.ellipse(0,0,47,23.5,0,0,Math.PI*2);c.stroke();c.restore();
 }
}
function updatePuddleReactions(){
 for(const a of [cat,ye,rabbit,...extraNPCs])if(a!==lift.actor&&['walk','yield','chase'].includes(a.state)&&floorPuddles.some(p=>puddleDistance(a,{...p,rx:p.rx+85,ry:p.ry+45})<1))a.disgustUntil=facilityClock.time+1.4;
}
function drawPuddleReactions(c){
 for(const a of [cat,ye,rabbit,...extraNPCs]){
  if(!(a.disgustUntil>facilityClock.time)||a===lift.actor)continue;
  const x=a.x+a.face*55,y=a.y-116;c.save();c.translate(x,y);c.fillStyle='#e7e1a6';c.strokeStyle='#76664b';c.lineWidth=1;c.beginPath();c.arc(0,0,11,0,Math.PI*2);c.fill();c.stroke();
  c.strokeStyle='#66503c';c.lineWidth=1.6;for(const sign of [-1,1]){c.beginPath();c.moveTo(sign*6,-4);c.lineTo(sign*2,-2);c.lineTo(sign*5,0);c.stroke();}c.beginPath();c.moveTo(-4,5);c.quadraticCurveTo(0,1,4,5);c.stroke();
  c.strokeStyle='#a09d69';c.lineWidth=1.3;for(const dx of [-16,16]){c.beginPath();c.moveTo(dx,1);c.bezierCurveTo(dx+4,-3,dx-4,-6,dx,-10);c.stroke();}c.restore();
 }
}
/* End scratch boards. */

/* grid pathfinding */
let GX0=EX0+42,GX1=EX0+EW-42,GY0=238,GY1=H-14;const CELL=12,IX=28,IY=12;
let COLS=Math.floor((GX1-GX0)/CELL)+1,ROWS=Math.floor((GY1-GY0)/CELL)+1;let N=COLS*ROWS;
// Body footprints on the floor; wider horizontally than vertically in this view.
const lift={actor:null,hold:null,timer:null,pointer:null,offset:null,origin:null};
const trafficPasses=[];
const CAT_PAIR={rx:106,ry:26};let npcCollider=null,rabbitCollider=null;const extraNPCs=[];
function pairDistance(a,b){return ((a.x-b.x)/(b.pairRx||CAT_PAIR.rx))**2+((a.y-b.y)/(b.pairRy||CAT_PAIR.ry))**2;}
function pairSegmentDistance(a,b,o){
  const rx=o.pairRx||CAT_PAIR.rx,ry=o.pairRy||CAT_PAIR.ry,x=(a.x-o.x)/rx,y=(a.y-o.y)/ry,dx=(b.x-a.x)/rx,dy=(b.y-a.y)/ry;
  const t=Math.max(0,Math.min(1,-(x*dx+y*dy)/(dx*dx+dy*dy||1)));
  return (x+t*dx)**2+(y+t*dy)**2;
}
function pairCanStep(a,b,o){
  if(!o)return true;const before=pairDistance(a,o),after=pairDistance(b,o);
  if(before<1-1e-7){const outward=(a.x-o.x)*(b.x-a.x)/(o.pairRx||CAT_PAIR.rx)**2+(a.y-o.y)*(b.y-a.y)/(o.pairRy||CAT_PAIR.ry)**2;return outward>=-1e-8&&after>before+1e-8;}
  return pairSegmentDistance(a,b,o)>=1-1e-7;
}
function npcBody(){return npcCollider;}
function npcBodies(except=null){return [npcCollider,rabbitCollider,...extraNPCs].filter(a=>a&&a!==except);}
function pairPassing(a,b){return !roomPlan&&!assemblyGoal(a)&&!assemblyGoal(b)&&trafficPasses.some(p=>p.a===a&&p.b===b||p.a===b&&p.b===a);}
function clearActorTrafficPasses(actor){for(let i=trafficPasses.length-1;i>=0;i--)if(trafficPasses[i].a===actor||trafficPasses[i].b===actor)trafficPasses.splice(i,1);}
function sharedDining(a,b){const ka=a.facilityCare?.kind||a.feedingIntent,kb=b.facilityCare?.kind||b.feedingIntent;return ka&&ka===kb&&ka!=='litter';}
function npcObstacles(actor){
 const bodies=[cat,...npcBodies(actor)].filter(a=>a!==actor&&a!==lift.actor&&!pairPassing(actor,a)&&!sharedDining(actor,a));
 if(!actor?.gatherSlot||Math.hypot(actor.x-actor.gatherSlot.x,actor.y-actor.gatherSlot.y)>80)return bodies;
 // Near their photo slots use the actual narrower pose widths, retaining solid bodies.
 const own=gatherFootprint(actor);return bodies.map(a=>{
  if(!a.gatherSlot||Math.hypot(a.x-a.gatherSlot.x,a.y-a.gatherSlot.y)>80)return a;
  const other=gatherFootprint(a);return {...a,x:a.x+(other.left+other.right-own.left-own.right)/2,pairRx:(own.right-own.left+other.right-other.left)*.425,pairRy:18};
 });
}
function catPairCanStep(a,b){return puddleStepClear(a,b)&&scratchBoardStepClear(a,b,cat)&&npcObstacles(cat).every(o=>pairCanStep(a,b,o));}
function catBlocked(x,y){return blockedPt(x,y)||npcObstacles(cat).some(o=>pairDistance({x,y},o)<1);}
function rectStepClear(a,b,left,right,top,bottom){
 const inside=p=>p.x>left&&p.x<right&&p.y>top&&p.y<bottom;
 if(inside(a)){const depth=p=>Math.min(p.x-left,right-p.x,p.y-top,bottom-p.y);return !inside(b)||depth(b)<depth(a)-1e-8;}
 // Intersect the complete segment with the open rectangle. Endpoint sampling misses tiny
 // corner crossings and can produce a route that slower footsteps cannot actually follow.
 let enter=0,exit=1;
 for(const [start,delta,low,high]of [[a.x,b.x-a.x,left,right],[a.y,b.y-a.y,top,bottom]]){
  if(Math.abs(delta)<1e-12){if(start<=low||start>=high)return true;continue;}
  const t0=(low-start)/delta,t1=(high-start)/delta;enter=Math.max(enter,Math.min(t0,t1));exit=Math.min(exit,Math.max(t0,t1));
  if(enter>=exit-1e-10)return true;
 }
 return false;
}
function stationStepClear(a,b,actor,padX,padY){
 const own=facilityReservations.get(actor)?.kind;
 return ['eat','drink'].every(kind=>{
  const f=FACILITIES[kind],rx=f.rx+(own===kind?8:padX),ry=f.ry+(own===kind?4:padY),x=(a.x-f.x)/rx,y=(a.y-f.y)/ry,dx=(b.x-a.x)/rx,dy=(b.y-a.y)/ry,before=x*x+y*y,after=(x+dx)**2+(y+dy)**2;
  if(before<1)return after>before+1e-8;
  // Use the complete swept segment so shallow tangents cannot fool the route smoother.
  const t=Math.max(0,Math.min(1,-(x*dx+y*dy)/(dx*dx+dy*dy||1)));
  return (x+t*dx)**2+(y+t*dy)**2>=1-1e-7;
 });
}
function catCanStep(a,b){
 if(!panoramaFurnitureStepClear(a,b))return false;
 if(!puddleStepClear(a,b)||!scratchBoardStepClear(a,b,cat)||!stationStepClear(a,b,cat,42,12)||b.x<GX0||b.x>GX1||b.y<GY0||b.y>GY1)return false;
 for(const o of OBST)if(!rectStepClear(a,b,o.x0-IX,o.x1+IX,o.wall?0:o.y0-IY,o.y1+IY))return false;
 return catPairCanStep(a,b);
}
function blockedPt(x,y){
  if(panoramaFurnitureBlocked(x,y))return true;
  if(puddleBlocked(x,y)||scratchBoardBlocked(x,y))return true;
  if(stationBlocked(x,y))return true;
  if(x<GX0||x>GX1||y<GY0||y>GY1)return true;
  for(const o of OBST){const y0=o.wall?0:o.y0-IY;if(x>o.x0-IX&&x<o.x1+IX&&y>y0&&y<o.y1+IY)return true;}
  return false;
}
let grid=new Uint8Array(N);
const gx=i=>GX0+(i%COLS)*CELL,gy=i=>GY0+Math.floor(i/COLS)*CELL;
for(let i=0;i<N;i++)grid[i]=blockedPt(gx(i),gy(i))?1:0;
function cellOf(x,y){const c=Math.round((Math.max(GX0,Math.min(GX1,x))-GX0)/CELL),r=Math.round((Math.max(GY0,Math.min(GY1,y))-GY0)/CELL);return Math.min(ROWS-1,r)*COLS+Math.min(COLS-1,c);}
function nearestFree(i,cells=grid){
  if(!cells[i])return i;const seen=new Uint8Array(N),q=[i];seen[i]=1;
  for(let h=0;h<q.length;h++){const k=q[h];if(!cells[k])return k;const c=k%COLS,r=(k/COLS)|0;
    for(const [dc,dr] of [[1,0],[-1,0],[0,1],[0,-1]]){const nc=c+dc,nr=r+dr;if(nc<0||nr<0||nc>=COLS||nr>=ROWS)continue;const n=nr*COLS+nc;if(!seen[n]){seen[n]=1;q.push(n);}}}
  return i;
}
function freePoint(x,y){x=Math.max(GX0,Math.min(GX1,x));y=Math.max(GY0,Math.min(GY1,y));if(!blockedPt(x,y))return{x,y};const i=nearestFree(cellOf(x,y));return{x:gx(i),y:gy(i)};}
function los(a,b){
  if(!catPairCanStep(a,b))return false;
  const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)/4));
  let prev=a;for(let i=1;i<=n;i++){const t=i/n,p={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};if(!catCanStep(prev,p))return false;prev=p;}return true;
}
function findPath(sx,sy,tx,ty){
  const start={x:sx,y:sy},target={x:tx,y:ty};
  if(!catBlocked(tx,ty)&&los(start,target))return[target];
  const grid=new Uint8Array(N);let s=-1,nearest=Infinity;
  for(let i=0;i<N;i++)grid[i]=catBlocked(gx(i),gy(i))?1:0;
  for(let i=0;i<N;i++){if(grid[i])continue;const d=Math.hypot(gx(i)-sx,gy(i)-sy);if(d<nearest&&los(start,{x:gx(i),y:gy(i)})){s=i;nearest=d;}}
  if(s<0)return[];
  const g0=nearestFree(cellOf(tx,ty),grid);
  const G=new Float32Array(N).fill(1e9),F=new Float32Array(N).fill(1e9),came=new Int32Array(N).fill(-1),closed=new Uint8Array(N),inOpen=new Uint8Array(N);
  const hx=gx(g0),hy=gy(g0),h=i=>Math.hypot(gx(i)-hx,gy(i)-hy)/CELL;
  G[s]=0;F[s]=h(s);const open=[s];inOpen[s]=1;let found=false;
  while(open.length){
    let bi=0;for(let k=1;k<open.length;k++)if(F[open[k]]<F[open[bi]])bi=k;
    const cur=open[bi];open[bi]=open[open.length-1];open.pop();inOpen[cur]=0;
    if(cur===g0){found=true;break;}closed[cur]=1;
    const c=cur%COLS,r=(cur/COLS)|0;
    for(let dr=-1;dr<=1;dr++)for(let dc=-1;dc<=1;dc++){
      if(!dr&&!dc)continue;const nc=c+dc,nr=r+dr;if(nc<0||nr<0||nc>=COLS||nr>=ROWS)continue;
      const n=nr*COLS+nc;if(grid[n]||closed[n])continue;
      if(dr&&dc&&(grid[r*COLS+nc]||grid[nr*COLS+c]))continue;
      const ng=G[cur]+(dr&&dc?1.414:1);
      if(ng<G[n]){G[n]=ng;came[n]=cur;F[n]=ng+h(n);if(!inOpen[n]){open.push(n);inOpen[n]=1;}}
    }
  }
  if(!found)return[];let pts=[];
  for(let k=g0;k!==-1&&k!==s;k=came[k])pts.push({x:gx(k),y:gy(k)});pts.reverse();pts.unshift({x:gx(s),y:gy(s)});
  if(!catBlocked(tx,ty)&&los(pts.at(-1),{x:tx,y:ty}))pts.push({x:tx,y:ty});
  const out=[];let a=start,i=0;
  while(i<pts.length){let j=pts.length-1;while(j>i&&!los(a,pts[j]))j--;if(!los(a,pts[j]))return[];out.push(pts[j]);a=pts[j];i=j+1;}
  return out;
}

/* ---------- static room (prerendered, wider than the room so the screen is always full) ---------- */
const bg=document.createElement('canvas');bg.width=Math.round(EW*BGS);bg.height=Math.round(EH*BGS);
const homeBBackdrop=new Image();homeBBackdrop.onload=()=>paintRoom();homeBBackdrop.src='assets/home-b-room.png';
const homeBSide=new Image();homeBSide.onload=()=>paintRoom();homeBSide.src='assets/home-b-side.png';
const homePanorama=new Image();homePanorama.onload=()=>paintRoom();homePanorama.src='assets/home-panorama-v4.jpg';
const homePlant=new Image();homePlant.onload=()=>paintRoom();homePlant.src='assets/home-plant-v4.webp';
const favouriteMatPhoto=new Image();favouriteMatPhoto.src='assets/favourite-cat-mat.jpg';
const familyFramePhoto=new Image();familyFramePhoto.onload=()=>paintRoom();familyFramePhoto.src='assets/five-cats-family.jpg?v=110';
const desktopTVScreen=WindowScene.televisionScreen(FT),phoneTV=WindowScene.phoneTelevision(FT);
const roomTelevision=window.RoomTV?RoomTV.createPlayer():null;
const boxReference=new Image();boxReference.src='assets/box-reference.jpg';
function desktopPanorama(){return document.documentElement.getAttribute('data-layout')==='desktop'&&homePanorama.complete&&homePanorama.naturalWidth>0;}
const HOME_SCENE_WIDTH=1000,HOME_SCENE_LEFT=(W-HOME_SCENE_WIDTH)/2;
function drawWallPhoto(c){
 if(roomPlan){RoomLayout.drawMemories(c,roomPlan,WindowScene,window.RoomDetail,familyFramePhoto,homeBBackdrop,homePanorama);return;}
 if(!familyFramePhoto.complete||!familyFramePhoto.naturalWidth)return;
 // Draw the full-resolution original after the cached room, at the current camera/DPR resolution.
 c.save();c.imageSmoothingEnabled=true;c.imageSmoothingQuality='high';
 if(desktopPanorama()){const f=WindowScene.wallPhotoGeometry(FT,familyFramePhoto);WindowScene.drawMatchingFrame(c,familyFramePhoto,homeBBackdrop,f.x,f.y,f.width);}
 else if(homeBBackdrop.complete&&homeBBackdrop.naturalWidth){
  const width=149*2/3,height=width*familyFramePhoto.naturalHeight/familyFramePhoto.naturalWidth;
  c.translate(HOME_SCENE_LEFT,0);c.scale(HOME_SCENE_WIDTH/homeBBackdrop.naturalWidth,FT/(homeBBackdrop.naturalHeight*.344));
  WindowScene.drawMatchingFrame(c,familyFramePhoto,homeBBackdrop,407.5-width/2,134.3333333333-height/2,width);
 }
 c.restore();
}
function paintRoom(){
 const b=bg.getContext('2d');b.setTransform(BGS,0,0,BGS,-EX0*BGS,-EY0*BGS);
 b.fillStyle='#eee2ce';b.fillRect(EX0,EY0,EW,EH);
 if(roomPlan){RoomLayout.drawBackdrop(b,roomPlan,homePanorama);for(const f of [BOWL,WATER]){b.fillStyle='#c6bba8';rr(b,f.x-52,f.y-48,104,64,8);b.fill();b.strokeStyle='#e8dfcf';b.lineWidth=2;rr(b,f.x-50,f.y-46,100,60,7);b.stroke();}return;}
 if(desktopPanorama()){b.fillStyle='#e4cbb0';b.fillRect(EX0,EY0,EW,-EY0);WindowScene.panoramaBackdrop(b,homePanorama,{left:EX0,width:EW,floor:FT,height:H,bottom:EY0+EH,plant:homePlant,tabletopArt:homeBBackdrop,furniture:!window.RoomDetail});SUN.x=WindowScene.panoramaLayout(FT).sunX;}else if(homeBBackdrop.complete&&homeBBackdrop.naturalWidth){
  const iw=homeBBackdrop.naturalWidth,ih=homeBBackdrop.naturalHeight,wall=ih*.344;
  // Keep the chosen scenery legible on phones while keeping all existing room coordinates.
  const sceneWidth=HOME_SCENE_WIDTH,left=HOME_SCENE_LEFT;
  if(homeBSide.complete&&homeBSide.naturalWidth){
   const sw=homeBSide.naturalWidth,sh=homeBSide.naturalHeight,wallY=sh*.334;
   b.drawImage(homeBSide,0,0,sw,wallY*.75,EX0,EY0,EW,-EY0);
   b.drawImage(homeBSide,0,sh*.65,sw,sh*.35,EX0,H,EW,EY0+EH-H);
   for(let x=left-sceneWidth;x+sceneWidth>EX0-sceneWidth;x-=sceneWidth){b.drawImage(homeBSide,0,0,sw,wallY,x,0,sceneWidth,FT);b.drawImage(homeBSide,0,wallY,sw,sh-wallY,x,FT,sceneWidth,H-FT);}
   for(let x=left+sceneWidth;x<EX0+EW+sceneWidth;x+=sceneWidth){b.drawImage(homeBSide,0,0,sw,wallY,x,0,sceneWidth,FT);b.drawImage(homeBSide,0,wallY,sw,sh-wallY,x,FT,sceneWidth,H-FT);}
  }
  b.drawImage(homeBBackdrop,0,0,iw,wall,left,0,sceneWidth,FT);
  b.drawImage(homeBBackdrop,0,wall,iw,ih-wall,left,FT,sceneWidth,H-FT);
  b.save();b.translate(left,0);b.scale(sceneWidth/iw,FT/wall);
  if(window.RoomDetail)RoomDetail.restorePhoneBackdrop(b,homeBBackdrop);
  else WindowScene.drawMatchingFrame(b,homeBBackdrop,homeBBackdrop,123,238-68*83/93,68,{source:[362,94,93,83],frameSource:[130,178,57,60],slice:8});
  // Restore bare wall where the original square painting was baked into the phone backdrop.
  WindowScene.restorePhonePhotoWall(b,homeBBackdrop);
  b.restore();
  SUN.x=left+sceneWidth*.586;
 }
 for(const f of [BOWL,WATER]){b.fillStyle='#c6bba8';rr(b,f.x-52,f.y-48,104,64,8);b.fill();b.strokeStyle='#e8dfcf';b.lineWidth=2;rr(b,f.x-50,f.y-46,100,60,7);b.stroke();}
}
paintRoom();

/* ---------- toys ---------- */
const TOYS=[
  {id:'ele',name:'大象寶寶',x:276,y:352,fav:true,size:56},
  {id:'panda',name:'小白',x:320,y:440,size:44},
  {id:'car',name:'黃色小車',x:200,y:520,size:46},
  {id:'husky',name:'哈士奇',x:280,y:590,size:50},
  {id:'kiss',name:'飛吻球',x:400,y:640,size:42},
];
const toys=TOYS;
toys.forEach(t=>Object.assign(t,{z:0,vx:0,vy:0,vz:0,spin:0,rot:0,carried:false,held:false,thrown:false,view:6,roll:0,rolling:false}));
const ROLL=[0,6,2,4,1,7,3,5],REST=[0,0,6,6,2,3,7,1];
function drawToy(c,t,x,y,s=1,rot=0,view){
  const im=IMG['toy_'+t.id+'_'+(view??t.view)];if(!im||!im.complete)return;
  const k=t.size*s/Math.max(im.width,im.height),w=im.width*k,h=im.height*k;
  c.save();c.translate(x,y-h/2);c.rotate(rot);c.drawImage(im,-w/2,-h/2,w,h);c.restore();
}

/* ---------- the cat (sprites from the reference sheet) ---------- */
/* cat sprites drawn from the pose sheets: walk cycle (8 frames) + sit, loaf, lie, curl, eat, crouch, meow */
const META={"sitside": {"w": 283, "h": 373}, "sitfront": {"w": 239, "h": 378}, "loaf": {"w": 332, "h": 220}, "lie": {"w": 549, "h": 279}, "curl": {"w": 342, "h": 275}, "eat": {"w": 488, "h": 245}, "crouch": {"w": 437, "h": 193}, "meow": {"w": 459, "h": 292}, "walk0": {"w": 440, "h": 256, "mouth": [385, 99], "bottom": 247}, "walk1": {"w": 440, "h": 256, "mouth": [389, 98], "bottom": 247}, "walk2": {"w": 440, "h": 256, "mouth": [387, 99], "bottom": 247}, "walk3": {"w": 440, "h": 256, "mouth": [389, 97], "bottom": 247}, "walk4": {"w": 440, "h": 256, "mouth": [392, 97], "bottom": 246}, "walk5": {"w": 440, "h": 256, "mouth": [390, 97], "bottom": 246}, "walk6": {"w": 440, "h": 256, "mouth": [391, 98], "bottom": 246}, "walk7": {"w": 440, "h": 256, "mouth": [385, 97], "bottom": 246}};
const KW=100/241,KP=100/292;   // world units per sheet pixel (walk sheet / pose sheet)
const cat={wiggle:0,x:300,y:560,z:0,face:1,state:'idle',pose:'sit',act:null,timer:2.5,phase:0,carry:null,eyes:'open',
  blink:0,blinkWait:3,time:0,then:null,path:[],speed:70,inside:null,cs:null,askKind:null,meowT:0,meowPop:0,sfxT:0,petTotal:0,targetToy:null};
function spr(c,name,x,y,o={}){
  const im=IMG[name];if(!im||!im.complete)return;
  const normal=!o.k&&cat.pose!=='lick'&&CAT_SIZE_METRICS[name],m=normal?CAT_SIZE_METRICS[name]:null;
  const k=o.k||(m?catSpriteScale(name,KP):KP),ax=o.ax??(m?m.cx:im.width/2),by=o.by??(m?m.y1:im.height);
  c.save();c.translate(x,y);if(o.rot)c.rotate(o.rot);
  c.scale((o.flip?-1:1)*k*(o.sx||1),k*(o.sy||1));if(o.skew)c.transform(1,0,o.skew,1,0,0);
  c.drawImage(im,-ax,-by);c.restore();
}
/* walk: legs cut from one walk frame and swung continuously (lateral-sequence gait) */
/* walk: 24 frames made by bending 黑屁屁's own photo (skeletal skinning, so her fur stays one piece);
   timing from the reference walking video: paws planted 70% of the cycle, footfalls hind → same-side front → other hind → other front.
   Frames advance by distance walked so planted paws never slide. */
const WN=8,WBOB=[0,0,0,0,0,0,0,0],WSTRIDE=120,KW3=96/241,WMOUTH=[410,183];




// Whole-cat frames decoded from the user-approved generated_video.mp4.
const VIDEO_WALK={frames:33,fps:12.5,duration:2.64,scale:.32,anchorX:330,groundY:244,mouthX:520,mouthY:83};
const WALK_MOUTH_POINTS=[{"x": 447, "y": 106, "tilt": 0.0}, {"x": 445, "y": 105, "tilt": 0.0}, {"x": 445, "y": 104, "tilt": 0.0}, {"x": 446, "y": 104, "tilt": 0.0}, {"x": 451, "y": 108, "tilt": 0.0}, {"x": 449, "y": 108, "tilt": 0.0}, {"x": 445, "y": 105, "tilt": 0.0}, {"x": 443, "y": 104, "tilt": 0.0}, {"x": 443, "y": 104, "tilt": 0.0}, {"x": 446, "y": 107, "tilt": 0.0}, {"x": 446, "y": 107, "tilt": 0.0}, {"x": 443, "y": 104, "tilt": 0.0}, {"x": 440, "y": 104, "tilt": 0.0}, {"x": 441, "y": 104, "tilt": 0.0}, {"x": 442, "y": 105, "tilt": 0.0}, {"x": 446, "y": 108, "tilt": 0.0}, {"x": 445, "y": 106, "tilt": 0.0}, {"x": 440, "y": 104, "tilt": 0.0}, {"x": 438, "y": 104, "tilt": 0.0}, {"x": 439, "y": 104, "tilt": 0.0}, {"x": 443, "y": 107, "tilt": 0.0}, {"x": 444, "y": 107, "tilt": 0.0}, {"x": 440, "y": 104, "tilt": 0.0}, {"x": 438, "y": 104, "tilt": 0.0}, {"x": 441, "y": 104, "tilt": 0.0}, {"x": 447, "y": 106, "tilt": 0.0}, {"x": 449, "y": 109, "tilt": 0.0}, {"x": 450, "y": 106, "tilt": 0.0}, {"x": 446, "y": 104, "tilt": 0.0}, {"x": 446, "y": 104, "tilt": 0.0}, {"x": 448, "y": 105, "tilt": 0.0}, {"x": 453, "y": 109, "tilt": 0.0}, {"x": 452, "y": 108, "tilt": 0.0}];
const TOY_GRIP_POINTS={"toy_car_2": {"x": 91, "y": 12, "width": 175, "height": 180}, "toy_ele_2": {"x": 69, "y": 12, "width": 136, "height": 180}, "toy_husky_2": {"x": 56, "y": 10, "width": 180, "height": 156}, "toy_kiss_2": {"x": 51, "y": 12, "width": 105, "height": 180}, "toy_panda_2": {"x": 88, "y": 9, "width": 180, "height": 135}};
let videoWalkTime=0;
function advanceVideoWalk(time,dt,speed){
 const rate=Math.max(.75,Math.min(1.8,(Number.isFinite(speed)?speed:65)/65));
 return ((time+Math.max(0,dt)*rate)%VIDEO_WALK.duration+VIDEO_WALK.duration)%VIDEO_WALK.duration;
}
function videoWalkFrame(time){
 const t=((time%VIDEO_WALK.duration)+VIDEO_WALK.duration)%VIDEO_WALK.duration;
 return Math.min(VIDEO_WALK.frames-1,Math.floor(t*VIDEO_WALK.fps));
}
function drawWalk(c,x,y,flip,ph,carry,o={}){
 let f=o.frame!==undefined?Math.abs(o.frame)%VIDEO_WALK.frames:videoWalkFrame(videoWalkTime);
 let im=IMG['gif_walk_'+String(f).padStart(3,'0')];
 if(!im||!im.complete||!im.naturalWidth){f=0;im=IMG.gif_walk_000;}
 if(!im||!im.complete||!im.naturalWidth)return;
 c.save();c.translate(x,y);if(o.rot)c.rotate(o.rot);
 const frameKey='gif_walk_'+String(f).padStart(3,'0'),m=CAT_SIZE_METRICS[frameKey],scale=WALK_FIXED_SCALE;
 c.scale(flip?-scale:scale,scale);
 c.translate(-(m?m.cx:VIDEO_WALK.anchorX),-(m?m.y1:VIDEO_WALK.groundY));
 c.drawImage(im,0,0);
 if(carry){
  const key='toy_'+carry.id+'_2',ti=IMG[key];
  if(ti&&ti.complete&&ti.naturalWidth){
   const bite=WALK_MOUTH_POINTS[f]||{x:VIDEO_WALK.mouthX,y:VIDEO_WALK.mouthY,tilt:0};
   const grip=TOY_GRIP_POINTS[key]||{x:ti.width/2,y:0};
   const sz=carry.size/scale/Math.max(ti.width,ti.height);
   c.save();c.translate(bite.x,bite.y);c.rotate(bite.tilt||0);
   c.drawImage(ti,-grip.x*sz,-grip.y*sz,ti.width*sz,ti.height*sz);c.restore();
   // Keep the jaw in front of the plush's bite point.
   c.save();c.beginPath();c.rect(bite.x-12,bite.y-14,28,18);c.clip();c.drawImage(im,0,0);c.restore();
  }
 }
 c.restore();
}

/* Eight photographed-style poses; change on actual strokes, with a short crossfade. */

const bellyAnim={pose:0,from:0,changed:-10,active:false,session:-1,lastPose:-1,sessionCount:0,lastStroke:-10,energy:0,impulse:0,strokeDir:1};
const BELLY_NAMES=['翻過來，露出軟軟的肚肚','放鬆地看著你','側躺著，舒服地瞇起眼睛','四腳朝天，呼嚕呼嚕','伸長前腳，伸個懶腰','抬起後腳，輕輕踢踢','抱起前腳，側翻一圈','閉上眼睛，安心讓你摸'];
function beginBellySession(){
 const b=bellyAnim;
 // Shuffle once per round; never repeat the preceding round.
 const options=Array.from({length:8},(_,i)=>i).filter(i=>i!==b.lastPose);
 const p=options[Math.floor(Math.random()*options.length)];
 Object.assign(b,{pose:p,from:p,changed:cat.time-.5,active:true,lastPose:p,lastStroke:-10,energy:0,impulse:0,sessionCount:b.sessionCount+1});
}
function updateBellyAnimation(){
 const b=bellyAnim,k=cat;
 const touchBtn=document.getElementById('bBellyStroke');if(touchBtn)touchBtn.style.display=k.pose==='belly'?'':'none';
 if(k.pose!=='belly'){b.active=false;return;}
 if(!b.active)beginBellySession();
}
function bellyStroke(d){
 const b=bellyAnim;
 if(!b.active)beginBellySession();
 const now=cat.time;
 const remaining=b.energy*Math.exp(-Math.max(0,now-b.lastStroke)*2.8);
 b.energy=Math.min(1,remaining+Math.min(Math.max(d,0),80)/65);
 b.lastStroke=now;b.impulse=now;
}
function drawBelly(c,x,y,flip){
 const b=bellyAnim,k=cat;
 const since=Math.max(0,k.time-b.lastStroke);
 const touch=b.energy*Math.exp(-since*2.8);
 const breath=1+Math.sin(k.time*1.8)*.009;
 // One pose for the entire round; petting adds a small damped wiggle.
 const sway=Math.sin(since*10)*touch;
 const kick=k.wiggle>0?Math.sin(k.time*14)*.014:0;
 c.save();c.translate(x+sway*1.4,y-50+Math.sin(since*13)*touch*.8);
 c.scale(flip?-1:1,1);c.rotate(Math.PI/2+Math.sin(k.time*2)*.007+sway*.018+kick);
 c.scale(.34*breath*(1+touch*.007),.34*(1-touch*.005));
 const im=IMG['belly'+b.pose];if(im&&im.complete)c.drawImage(im,-300,-300);
 c.restore();
}

// Sixteen distinct head/jaw frames; the muzzle is the stationary pivot in the food.
const catMealFrames=new Map(),CAT_MEAL_MOUTH={x:429,y:234};
function catMealPoint(x,y,phase){
 const t=phase*Math.PI*2/16,head=Math.max(0,Math.min(1,(x-330)/65)),weight=head*head*(3-2*head),angle=Math.sin(t)*.07,dx=x-CAT_MEAL_MOUTH.x,dy=y-CAT_MEAL_MOUTH.y;
 const rx=CAT_MEAL_MOUTH.x+Math.cos(angle)*dx-Math.sin(angle)*dy,ry=CAT_MEAL_MOUTH.y+Math.sin(angle)*dx+Math.cos(angle)*dy;
 const jaw=Math.max(0,Math.min(1,(x-385)/40))*Math.max(0,Math.min(1,(y-175)/35));
 return {x:x+(rx-x)*weight,y:y+(ry-y)*weight+dy*Math.sin(t*2)*.045*jaw};
}
function catMealFrame(phase,im){
 if(catMealFrames.has(phase))return catMealFrames.get(phase);
 const out=document.createElement('canvas');out.width=im.naturalWidth;out.height=im.naturalHeight;const c=out.getContext('2d'),cols=24,rows=16,grid=[];
 for(let j=0;j<=rows;j++){const row=[];for(let i=0;i<=cols;i++)row.push(catMealPoint(i*out.width/cols,j*out.height/rows,phase));grid.push(row);}
 for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){const x=i*out.width/cols,y=j*out.height/rows,w=out.width/cols,h=out.height/rows,a={x,y},b={x:x+w,y},d={x,y:y+h},e={x:x+w,y:y+h};feedingTriangle(c,im,[a,b,e],[grid[j][i],grid[j][i+1],grid[j+1][i+1]]);feedingTriangle(c,im,[a,e,d],[grid[j][i],grid[j+1][i+1],grid[j+1][i]]);}
 catMealFrames.set(phase,out);return out;
}
function drawCatMeal(c){
 const im=IMG.eat;if(!im?.complete||!im.naturalWidth)return;
 const phase=Math.floor(cat.time*11)%16,frame=catMealFrame(phase,im),mouth=CAT_MEAL_MOUTH,contact=cat.facilityCare.slot.contact;
 c.save();c.fillStyle='rgba(60,30,8,.22)';c.beginPath();c.ellipse(cat.x,cat.y,60,8,0,0,Math.PI*2);c.fill();c.translate(contact.x,contact.y);c.scale(cat.face<0?-KP:KP,KP);c.drawImage(frame,-mouth.x,-mouth.y);c.restore();
}
function drawCat(c){
 if(roomPlan&&window.DoorGait?.draw(c,cat,IMG.black_door_gait))return;
 if(roomPlan&&['sun','window'].includes(cat.act)&&tvCats?.drawFacing(c,cat,{x:roomPlan.window.x+roomPlan.window.width/2,y:roomPlan.window.y+roomPlan.window.height/2}))return;
 if(drawTVVisit(c,cat))return;
 if(cat.act==='matSleep'&&window.RoomDetail?.drawMatSleeper(c,IMG.mat_sleep_prone,FAVOURITE_MAT,cat.time))return;
 if(drawBlackRandom(c))return;
 if(cat.pose==='eat'&&cat.act==='eat'&&cat.facilityCare?.phase==='use'){drawCatMeal(c);return;}
 if(cat.gatherSlot&&cat.state==='gatherSit'){drawGatherCat(c,cat);return;}
  const k=cat,flip=k.face<0;
  if(k.pose==='toastsit'){drawToastRest(c);return;}
  c.save();
  const shw={belly:80,sit:30,ask:30,look:30,petsit:30,sleep:50,loaf:52,sun:80,eat:60}[k.pose]||48;
  c.fillStyle='rgba(60,30,8,.22)';c.beginPath();c.ellipse(k.x,k.y-(k.pose==='belly'?22:0),shw*(1-Math.min(k.z,150)/300),8,0,0,7);c.fill();
  let x=k.x,y=k.y-k.z;
  if(k.pose==='eat'&&k.facilityCare?.phase==='use'){const contact=k.facilityCare.slot.contact,dr=k.act==='drink',bob=Math.sin(k.time*(dr?11:7));x=contact.x-(flip?-1:1)*63.4;y=contact.y-(dr?-8.3:-1.3)-bob*(dr?1.2:.6);}
  if(k.carry&&!['walk','pounce'].includes(k.pose)){drawWalk(c,x,y,flip,0,k.carry,{still:true});c.restore();return;}
  switch(k.pose){
    case 'walk':drawWalk(c,x,y,flip,k.phase,k.carry);break;
    case 'pounce':drawWalk(c,x,y,flip,0,k.carry,{frame:5,rot:(flip?1:-1)*.2});break;
    case 'ask':case 'look':spr(c,'sitfront',x,y,{flip,sy:1+Math.sin(k.time*3)*.01});break;
    case 'petsit':spr(c,'sitfront',x,y,{flip,rot:Math.sin(k.time*2)*.03});break;
    case 'meow':spr(c,'meow',x,y,{flip});break;
    case 'loaf':spr(c,'loaf',x,y,{flip,sy:1+Math.sin(k.time*1.8)*.012});break;
    case 'sun':spr(c,'lie',x,y,{flip,sy:1+Math.sin(k.time*1.4)*.012});break;
    case 'belly':drawBelly(c,x,y,flip);break;
    case 'sleep':spr(c,'curl',x,y+4,{flip,sy:1+Math.sin(k.time*1.6)*.02});break;
    case 'eat':{const dr=k.act==='drink',bob=Math.sin(k.time*(dr?11:7));
      spr(c,'eat',x,y+(dr?-4.5:2.5)+bob*(dr?1.2:.6),{flip});
      const mx=x+(flip?-1:1)*63.4,my=y+(dr?-8.3:-1.3)+bob*(dr?1.2:.6);
      if(dr&&bob>0){c.fillStyle='#e8798a';c.beginPath();c.ellipse(mx,my+2,2.6,1.6+bob*1.8,0,0,7);c.fill();}
      break;}
    case 'lick':spr(c,'sitfront',x,y,{flip,sy:1.02});break;
    case 'crouch':spr(c,'crouch',x,y,{flip,skew:Math.sin(k.time*26)*.05});break;
    case 'swat':spr(c,'crouch',x,y-Math.abs(Math.sin(k.time*14))*4,{flip});break;
    case 'scratch':drawWalk(c,x,y,flip,0,null,{frame:Math.floor(k.time*8)%2?3:15});break;
    default:spr(c,'sitside',x,y,{flip,sy:1+Math.sin(k.time*2)*.006});
  }
  c.restore();
}

/* ---------- furniture ---------- */

const toastRest={active:false,elapsed:0,slot:0,from:0,pose:0,blend:1,dwell:7,touch:0};
const REST_SEQUENCE=[0,1,2,1];
const REST_HOLDS=[8,1.4,10,1.4];
const REST_MESSAGES=['坐在吐司坐墊中央，背部隨呼吸輕輕起伏','轉頭調整姿勢，舒服地趴下','蜷在吐司坐墊中央，安心地呼吸'];
function beginToastRest(){
 Object.assign(toastRest,{active:true,elapsed:0,slot:0,from:0,pose:0,blend:1,dwell:REST_HOLDS[0],touch:0});
 say(REST_MESSAGES[0]);
}
function changeToastRest(){
 const r=toastRest;if(!r.active||r.blend<1)return;
 r.slot=(r.slot+1)%REST_SEQUENCE.length;r.from=r.pose;r.pose=REST_SEQUENCE[r.slot];r.blend=0;r.dwell=REST_HOLDS[r.slot];
 say(REST_MESSAGES[r.pose]);
}
function updateToastRest(dt){
 const r=toastRest,active=cat.pose==='toastsit';
 const btn=document.getElementById('bRestTurn');if(btn)btn.style.display=active?'':'none';
 if(!active){r.active=false;return;}if(!r.active)beginToastRest();
 r.elapsed+=dt;r.touch*=Math.exp(-dt*3);
 if(r.blend<1)r.blend=Math.min(1,r.blend+dt/1.15);
 else if(!pet.on){r.dwell-=dt;if(r.dwell<=0)changeToastRest();}
}
function restDisplace(x,y,t,pose,touch){
 const cx=300,cy=pose===0?340:440;
 const g=Math.exp(-(((x-cx)/155)**2)-(((y-cy)/150)**2));
 const b=Math.sin(t*2*Math.PI/3.2);
 const tail=Math.max(0,(y-560)/100);
 return {x:x+(x-cx)*g*(.024*b+.008*touch*Math.sin(t*14))+tail*tail*Math.sin(t*1.6)*3,
 y:y-g*(4*b+touch*Math.sin(t*12)*3)};
}
function restTriangle(c,im,src,dst){
 const [p0,p1,p2]=src,[q0,q1,q2]=dst;
 const a=p1.x-p0.x,b=p1.y-p0.y,d=p2.x-p0.x,e=p2.y-p0.y,det=a*e-b*d;
 if(Math.abs(det)<.00001)return;
 const A=((q1.x-q0.x)*e-(q2.x-q0.x)*b)/det;
 const C=((q2.x-q0.x)*a-(q1.x-q0.x)*d)/det;
 const B=((q1.y-q0.y)*e-(q2.y-q0.y)*b)/det;
 const D=((q2.y-q0.y)*a-(q1.y-q0.y)*d)/det;
 c.save();const cx=(q0.x+q1.x+q2.x)/3,cy=(q0.y+q1.y+q2.y)/3;
 const expand=p=>{const d=Math.hypot(p.x-cx,p.y-cy)||1;return{x:p.x+(p.x-cx)/d*1.2,y:p.y+(p.y-cy)/d*1.2};};
 const v=[q0,q1,q2].map(expand);c.beginPath();c.moveTo(v[0].x,v[0].y);c.lineTo(v[1].x,v[1].y);c.lineTo(v[2].x,v[2].y);c.closePath();c.clip();
 c.transform(A,B,C,D,q0.x-A*p0.x-C*p0.y,q0.y-B*p0.x-D*p0.y);c.drawImage(im,0,0,600,700);c.restore();
}
let restMeshCanvas=null;
function drawRestMesh(c,pose,alpha,rot,lower){
 if(![0,1,2].includes(pose))return;
 const im=IMG['rest'+pose];if(!im||!im.complete||!im.naturalWidth||alpha<=0)return;
 const r=toastRest,m=CAT_SIZE_METRICS['rest'+pose],scale=catSpriteScale('rest'+pose,TOAST.w/600);
 c.save();c.globalAlpha=alpha;c.translate(TOAST_CENTER.x,TOAST_CENTER.y+lower);
 c.rotate(rot);c.scale(scale,scale);c.translate(-(m?(m.x0+m.x1)/2:300),-(m?(m.y0+m.y1)/2:440));
 if(!restMeshCanvas){restMeshCanvas=document.createElement('canvas');restMeshCanvas.width=600;restMeshCanvas.height=700;}
 const mc=restMeshCanvas.getContext('2d');mc.clearRect(0,0,600,700);const cols=8,rows=10,grid=[];
 for(let j=0;j<=rows;j++){const row=[];for(let i=0;i<=cols;i++){const x=i*600/cols,y=j*700/rows;row.push(restDisplace(x,y,r.elapsed,pose,r.touch));}grid.push(row);}
 for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){
  const x=i*600/cols,y=j*700/rows,w=600/cols,h=700/rows;
  const a={x,y},b={x:x+w,y},d={x,y:y+h},e={x:x+w,y:y+h};
  restTriangle(mc,im,[a,b,e],[grid[j][i],grid[j][i+1],grid[j+1][i+1]]);
  restTriangle(mc,im,[a,e,d],[grid[j][i],grid[j+1][i+1],grid[j+1][i]]);
 }c.drawImage(restMeshCanvas,0,0);c.restore();
}
function drawToastRest(c){
 const r=toastRest,p=r.blend,t=p*p*(3-2*p);
 if(p<1){
  const lean=.06*Math.sin(Math.PI*p),dip=Math.sin(Math.PI*p)*3;
  drawRestMesh(c,r.from,1-t,lean,dip);
  drawRestMesh(c,r.pose,t,-lean,dip);
 }else drawRestMesh(c,r.pose,1,Math.sin(r.elapsed*1.2)*.002,0);
}

function drawToast(c){
 const im=IMG.toast_empty;if(!im||!im.complete||!im.naturalWidth)return;
 c.save();c.fillStyle='rgba(60,30,8,.17)';c.beginPath();c.ellipse(TOAST.x,TOAST.y-3,80,37,0,0,7);c.fill();
 const s=TOAST.w/600;c.drawImage(im,TOAST.x-300*s,TOAST.y-590*s,600*s,700*s);c.restore();
}
function goToast(msg='走去吐司坐墊休息'){
 moveTo(TOAST_CENTER.x,TOAST_CENTER.y+36,75,()=>{cat.face=1;cat.carry=null;doFor('toast','toastsit',90);beginToastRest();bump('energy',3);},msg);
}
// Draw the original photograph twice with canvas clips. Every printed pixel,
// including Traditional Chinese and English labels, comes from the upload.
function boxPhoto(c,front=false){
 if(!boxReference.complete||!boxReference.naturalWidth)return false;
 c.save();const scale=188/1275;c.translate(BOX.x-94,BOX.front-150);c.scale(scale,scale);c.translate(-90,-24);c.beginPath();
 if(front){
  c.moveTo(99,340);c.lineTo(333,342);c.lineTo(355,752);c.bezierCurveTo(357,807,377,827,423,827);c.lineTo(1035,827);c.bezierCurveTo(1082,827,1105,811,1106,761);c.lineTo(1118,345);c.lineTo(1346,334);c.lineTo(1305,1035);c.lineTo(146,1035);
 }else{
  c.moveTo(99,340);c.lineTo(344,32);c.lineTo(1094,32);c.lineTo(1347,334);c.lineTo(1306,1036);c.lineTo(146,1036);
 }
 c.closePath();c.clip();c.drawImage(boxReference,0,0);c.restore();return true;
}
function boxBack(c){
 c.save();c.fillStyle='rgba(52,31,10,.17)';c.beginPath();c.ellipse(BOX.x,BOX.front+3,92,8,0,0,Math.PI*2);c.fill();c.restore();
 boxPhoto(c);
}
function boxFront(c){boxPhoto(c,true);}
function drawBowl(c){
  const {x,y}=BOWL;
  c.fillStyle='rgba(0,0,0,.15)';c.beginPath();c.ellipse(x,y+2,30,7,0,0,7);c.fill();
  c.fillStyle='#e9e2d6';c.beginPath();c.moveTo(x-28,y-16);c.lineTo(x+28,y-16);c.lineTo(x+22,y);c.lineTo(x-22,y);c.fill();
  c.fillStyle='#f7f3ec';c.beginPath();c.ellipse(x,y-16,28,8,0,0,7);c.fill();
  c.fillStyle='#d7cdbd';c.beginPath();c.ellipse(x,y-16,22,5.5,0,0,7);c.fill();
  if(bowl.food>0){
    const f=bowl.food,hgt=10*f;
    c.fillStyle='#7a4521';c.beginPath();c.ellipse(x,y-16,21*Math.min(1,.4+f),5*Math.min(1,.4+f),0,0,7);c.fill();
    c.beginPath();c.ellipse(x,y-16-hgt*.4,19*Math.sqrt(f),hgt*.75+2,0,Math.PI,0);c.fill();
    const n=Math.ceil(46*f);let sd=3;const r=()=>{sd=(sd*9301+49297)%233280;return sd/233280;};
    for(let i=0;i<n;i++){const a=r()*Math.PI,rr2=r();const px=x+Math.cos(a)*19*Math.sqrt(f)*rr2*1.05,py=y-16-Math.sin(a)*(hgt*.75+2)*rr2*.95+ (r()-.5)*3;
      c.fillStyle=i%3?'#9a5a2c':'#b4733d';c.beginPath();c.ellipse(px,py,2.6,2.1,r()*3,0,7);c.fill();}
  }
  c.fillStyle='#c77d8c';c.font='9px sans-serif';c.textAlign='center';c.fillText('♥',x,y-4);
}
function drawWater(c){
  const {x,y}=WATER;
  c.fillStyle='rgba(0,0,0,.15)';c.beginPath();c.ellipse(x,y+2,30,8,0,0,7);c.fill();
  c.fillStyle='#e8a7a6';c.beginPath();c.moveTo(x-28,y-30);c.quadraticCurveTo(x-32,y,x-18,y);c.lineTo(x+18,y);c.quadraticCurveTo(x+32,y,x+28,y-30);c.fill();
  c.fillStyle='#f1bbb9';c.beginPath();c.ellipse(x,y-30,28,9,0,0,7);c.fill();
  c.fillStyle='#9ccbe0';c.beginPath();c.ellipse(x,y-30,22,6.5,0,0,7);c.fill();
  c.globalAlpha=1;c.fillStyle='#f1bbb9';c.beginPath();c.ellipse(x,y-34,6,3,0,0,7);c.fill();
}
function litterBack(c){
 if(roomPlan){
  const w=LIT.width,x=LIT.x-w/2,y=LIT.back,h=LIT.front-y;
  const back=c.createLinearGradient(x,y-48,x+w,y-48);back.addColorStop(0,'#9eb2c4');back.addColorStop(.6,'#bdcbd6');back.addColorStop(1,'#8fa6bb');c.fillStyle=back;c.fillRect(x,y-48,w,48);
  const sand=c.createLinearGradient(0,y,0,LIT.front);sand.addColorStop(0,'#d9c298');sand.addColorStop(1,'#f0dcaf');c.fillStyle=sand;c.fillRect(x+6,y,w-12,h);
  for(let i=0;i<240;i++){c.fillStyle=['#c0a875','#e8d29f','#a99367'][i%3];c.fillRect(x+9+((i*71)%(w-18)),y+3+((i*31)%(h-6)),1.5,1);}
  for(const side of [-1,1]){const sx=LIT.x+side*w/2;c.fillStyle=side<0?'#a7bacb':'#8fa7bd';c.beginPath();c.moveTo(sx,y-48);c.lineTo(sx-side*7,y-43);c.lineTo(sx-side*7,LIT.front-37);c.lineTo(sx,LIT.front-42);c.closePath();c.fill();c.strokeStyle='#d9e2e9';c.lineWidth=3;c.beginPath();c.moveTo(sx,y-48);c.lineTo(sx,LIT.front-42);c.stroke();}
  c.strokeStyle='#d9e2e9';c.lineWidth=3;c.beginPath();c.moveTo(x,y-48);c.lineTo(x+w,y-48);c.stroke();return;
 }
  const x0=LIT.x-62,x1=LIT.x+62,yb=LIT.back,yf=LIT.front;
  c.fillStyle='#b3c1cd';c.fillRect(x0,yb-44,124,44);
  c.fillStyle='rgba(255,255,255,.18)';c.fillRect(x0,yb-44,124,3);
  c.fillStyle='#e6d6b6';c.fillRect(x0,yb,124,yf-yb);
  c.fillStyle='rgba(150,120,80,.28)';for(let i=0;i<80;i++)c.fillRect(x0+((i*37)%120)+2,yb+((i*13)%(yf-yb)),2,2);
  c.fillStyle='#9fb0bf';
  c.beginPath();c.moveTo(x0,yb-44);c.lineTo(x0+8,yb-40);c.lineTo(x0+8,yf-30);c.lineTo(x0,yf-34);c.fill();
  c.beginPath();c.moveTo(x1,yb-44);c.lineTo(x1-8,yb-40);c.lineTo(x1-8,yf-30);c.lineTo(x1,yf-34);c.fill();
  c.fillStyle='#d1dbe4';c.fillRect(x0-2,yb-46,128,4);
}
function litterFront(c){
 if(roomPlan){
  const w=LIT.width,x0=LIT.x-w/2,x1=LIT.x+w/2,yf=LIT.front,top=yf-42,n0=LIT.x-LIT.door/2,n1=LIT.x+LIT.door/2,lip=yf-7;
  c.fillStyle='rgba(40,32,22,.13)';c.beginPath();c.ellipse(LIT.x,yf+4,w*.49,7,0,0,Math.PI*2);c.fill();const front=c.createLinearGradient(0,top,0,yf);front.addColorStop(0,'#a7bdce');front.addColorStop(1,'#88a1b8');c.fillStyle=front;
  c.beginPath();c.moveTo(x0,top);c.lineTo(n0-5,top);c.quadraticCurveTo(n0,top,n0+4,lip);c.lineTo(n1-4,lip);c.quadraticCurveTo(n1,top,n1+5,top);c.lineTo(x1,top);c.lineTo(x1,yf);c.lineTo(x0,yf);c.closePath();c.fill();
  c.strokeStyle='#dce5ed';c.lineWidth=3;c.beginPath();c.moveTo(x0,top);c.lineTo(n0-5,top);c.quadraticCurveTo(n0,top,n0+4,lip);c.lineTo(n1-4,lip);c.quadraticCurveTo(n1,top,n1+5,top);c.lineTo(x1,top);c.stroke();return;
 }
  const x0=LIT.x-64,x1=LIT.x+64,yf=LIT.front,top=yf-34,lip=yf-20,n0=LIT.x-26,n1=LIT.x+26;
  c.fillStyle='rgba(0,0,0,.16)';c.beginPath();c.ellipse(LIT.x,yf+3,72,7,0,0,7);c.fill();
  c.fillStyle='#8ea3b6';
  c.beginPath();c.moveTo(x0,top);c.lineTo(n0-6,top);c.quadraticCurveTo(n0,top,n0+4,lip);c.lineTo(n1-4,lip);c.quadraticCurveTo(n1,top,n1+6,top);
  c.lineTo(x1,top);c.lineTo(x1,yf);c.lineTo(x0,yf);c.closePath();c.fill();
  c.strokeStyle='#d1dbe4';c.lineWidth=3;
  c.beginPath();c.moveTo(x0,top);c.lineTo(n0-6,top);c.quadraticCurveTo(n0,top,n0+4,lip);c.lineTo(n1-4,lip);c.quadraticCurveTo(n1,top,n1+6,top);c.lineTo(x1,top);c.stroke();
  c.fillStyle='rgba(0,0,0,.1)';c.fillRect(x0,yf-6,128,6);
}
/* her mouth in the front-sitting photo sits at (124,119) of a 239x378 image */
function mouthPos(){return{x:cat.x+(cat.face<0?-1:1)*(124-119.5)*KP,y:cat.y-MOUTH_UP};}
function drawTongue(c){
  const m=mouthPos(),t=(cat.time*2.2)%1,open=t<.5?Math.sin(t/.5*Math.PI):0;
  // slightly parted lips
  c.fillStyle='#0d0a0d';c.beginPath();c.ellipse(m.x,m.y+.3,2.3,.45+open*.9,0,0,7);c.fill();
  if(open<=0)return;
  // tongue reaches down and forward into the paste, tip curling up like a spoon
  const L=1.2+open*5.6,w=1.75;
  c.save();c.translate(m.x,m.y+.6);
  const g=c.createLinearGradient(0,0,0,L);g.addColorStop(0,'#b85d6c');g.addColorStop(1,'#e48c99');
  c.fillStyle=g;c.beginPath();
  c.moveTo(-w*.85,0);c.bezierCurveTo(-w,L*.45,-w*1.05,L*.85,-w*.55,L);
  c.quadraticCurveTo(0,L-1.1*open,w*.55,L);
  c.bezierCurveTo(w*1.05,L*.85,w,L*.45,w*.85,0);c.closePath();c.fill();
  c.strokeStyle='rgba(140,50,64,.55)';c.lineWidth=.35;c.beginPath();c.moveTo(0,.3);c.lineTo(0,L*.7);c.stroke();
  if(open>.6){c.fillStyle='rgba(243,201,154,.9)';c.beginPath();c.ellipse(0,L-.5,.9,.45,0,0,7);c.fill();}
  c.restore();
}
function drawTreat(c){
  const tx=treat.x,ty=treat.y,ca=Math.cos(.55),sa=Math.sin(.55),len=96;
  c.fillStyle='rgba(70,35,10,.15)';c.beginPath();c.ellipse(tx+40,ty+MOUTH_UP+4,46,6,0,0,7);c.fill();
  c.save();c.translate(tx,ty);c.rotate(.55);
  const full=Math.max(0,treat.left);
  c.fillStyle='#d8343b';rr(c,3,-7,len,14,3);c.fill();
  c.fillStyle='#fff6ea';c.fillRect(3,-7,20,14);
  c.fillStyle='#f3c99a';c.fillRect(5,-4,16*full+2,8);
  c.fillStyle='#fff';c.font='700 8px "Noto Sans TC",sans-serif';c.textBaseline='middle';c.fillText('鮪魚泥',34,.5);
  c.fillStyle='#b8282e';c.fillRect(len-6,-8,9,16);
  // hand holding the stick
  c.fillStyle='#f1c7a3';c.beginPath();c.ellipse(len-18,9,20,13,.2,0,7);c.fill();
  c.beginPath();c.ellipse(len-30,-6,9,5,-.3,0,7);c.fill();
  c.strokeStyle='rgba(150,95,70,.45)';c.lineWidth=1;for(let i=0;i<3;i++){c.beginPath();c.moveTo(len-34+i*8,12);c.lineTo(len-30+i*8,20);c.stroke();}
  c.restore();
  if(full>0){c.fillStyle='#ecbf90';c.beginPath();c.ellipse(tx+1.2,ty+.6,1.6+full*1.4,1.2+full*.9,.55,0,7);c.fill();c.fillStyle='rgba(255,240,220,.6)';c.beginPath();c.ellipse(tx+.6,ty,.7,.4,.55,0,7);c.fill();}
}
function drawSun(c){
 const environment=window.RoomOutdoors?RoomOutdoors.state():{strength:1,moonStrength:0,sun:{altitude:.7,azimuth:0}};
 const moonlight=environment.strength<=.18,level=moonlight?environment.moonStrength:environment.strength;
 if(level<=.01||!window.WindowScene)return;
 const p=WindowScene.projectLight(environment,desktopPanorama()?1000:EW,FT);if(desktopPanorama()){const win=WindowScene.panoramaLayout(FT).windows[0].bounds;p.x=win.x+win.width/2;p.width=win.width*.72;}const gap=6,pane=(p.width-gap)/2;
 c.save();c.globalAlpha=level;
 const light=c.createLinearGradient(0,p.y,0,p.y+p.length);light.addColorStop(0,moonlight?'rgba(191,218,255,.45)':'rgba(255,245,202,.5)');light.addColorStop(1,moonlight?'rgba(191,218,255,.05)':'rgba(255,245,202,.07)');c.fillStyle=light;
 for(const x of [-p.width/2,gap/2]){c.beginPath();c.moveTo(p.x+x,p.y);c.lineTo(p.x+x+pane,p.y);c.lineTo(p.x+x+pane+p.shift,p.y+p.length);c.lineTo(p.x+x+p.shift,p.y+p.length);c.closePath();c.fill();}c.restore();
}
function drawWand(c){
  const t=cat.time,fx=wand.x+Math.sin(t*3)*4,fy=wand.y-30+Math.sin(t*5)*3,tipX=wand.x+80,tipY=wand.y-190;
  c.fillStyle='rgba(70,35,10,.18)';c.beginPath();c.ellipse(wand.x,wand.y,14,4,0,0,7);c.fill();
  c.strokeStyle='#7c5a3a';c.lineWidth=4;c.lineCap='round';c.beginPath();c.moveTo(tipX,tipY);c.lineTo(tipX+240,tipY+120);c.stroke();
  c.strokeStyle='rgba(255,255,255,.75)';c.lineWidth=1;c.beginPath();c.moveTo(tipX,tipY);c.quadraticCurveTo(fx+30,fy-80,fx,fy-6);c.stroke();
  c.save();c.translate(fx,fy);c.rotate(Math.sin(t*4)*.3);
  [['#f08fb0',-.5],['#5fc3b5',0],['#f2c94c',.5]].forEach(([col,a])=>{c.save();c.rotate(a);c.fillStyle=col;c.beginPath();c.ellipse(0,10,4.5,15,0,0,7);c.fill();c.restore();});
  c.fillStyle='#d9b23a';c.beginPath();c.arc(0,-4,4,0,7);c.fill();c.restore();
}

/* ---------- particles ---------- */
const parts=[];
function puff(type,x,y,o={}){parts.push({type,x,y,vx:o.vx??rand(-14,14),vy:o.vy??rand(-40,-24),life:o.life??1.5,max:o.life??1.5});}
function heart(c,x,y,s){c.save();c.translate(x,y);c.scale(s,s);c.beginPath();c.moveTo(0,4);c.bezierCurveTo(-7,-1,-4,-7,0,-3);c.bezierCurveTo(4,-7,7,-1,0,4);c.fill();c.restore();}
function drawParts(c){
  for(const p of parts){c.globalAlpha=Math.min(1,p.life/p.max*1.4);
    if(p.type==='heart'){c.fillStyle='#f07b98';heart(c,p.x,p.y,1.3);}
    else if(p.type==='z'){c.fillStyle='#fff6e8';c.font='700 17px "LXGW WenKai TC",serif';c.textAlign='center';c.fillText('z',p.x,p.y);}
    else if(p.type==='sand'){c.fillStyle='#d8c39a';c.fillRect(p.x,p.y,3,3);}
    else if(p.type==='crumb'){c.fillStyle='#8a5328';c.beginPath();c.arc(p.x,p.y,2,0,7);c.fill();}
    else if(p.type==='drop'){c.fillStyle='#8cc6e6';c.beginPath();c.arc(p.x,p.y,2.4,0,7);c.fill();}
    else if(p.type==='spark'){c.fillStyle='#ffe6a3';c.beginPath();c.arc(p.x,p.y,1.8,0,7);c.fill();}
    else if(p.type==='purr'){c.fillStyle='#f6d18a';c.font='15px "LXGW WenKai TC",serif';c.textAlign='center';c.fillText('呼嚕',p.x,p.y);}
  }
  c.globalAlpha=1;
}

/* ---------- sound (synthesised, no files) ---------- */
const SND={"m_chirp":"assets/audio/m_chirp.mp3","m_long1":"assets/audio/m_long1.mp3","m_long2":"assets/audio/m_long2.mp3","m_mid1":"assets/audio/m_mid1.mp3","m_mid2":"assets/audio/m_mid2.mp3","m_mid3":"assets/audio/m_mid3.mp3","m_short1":"assets/audio/m_short1.mp3","m_short2":"assets/audio/m_short2.mp3","m_short3":"assets/audio/m_short3.mp3","purr":"assets/audio/purr.mp3"};const BUF={};
Object.assign(SND,{voice_ye:'assets/audio/ye.wav',voice_rabbit:'assets/audio/rabbit.wav',voice_socks:'assets/audio/socks.wav',voice_dongdong:'assets/audio/dongdong.wav'});
let AC=null,master=null,noiseBuf=null,purrG=null,soundOn=true;
try{soundOn=localStorage.getItem('heipipi-sound')!=='off';}catch(e){}
function b64buf(d){const s=atob(d.split(',')[1]);const a=new Uint8Array(s.length);for(let i=0;i<s.length;i++)a[i]=s.charCodeAt(i);return a.buffer;}
function initAudio(){
  if(AC){if(AC.state==='suspended')AC.resume();startCafeMusic();return;}
  const A=window.AudioContext||window.webkitAudioContext;if(!A)return;
  AC=new A();master=AC.createGain();master.gain.value=soundOn?.85:0;master.connect(AC.destination);
  noiseBuf=AC.createBuffer(1,AC.sampleRate*2,AC.sampleRate);const d=noiseBuf.getChannelData(0);for(let i=0;i<d.length;i++)d[i]=Math.random()*2-1;
  purrG=AC.createGain();purrG.gain.value=0;purrG.connect(master);
  for(const k in SND)loadCatSound(k).then(buffer=>{
   if(k==='purr'&&buffer&&!purrStarted){purrStarted=true;const source=AC.createBufferSource();source.buffer=buffer;source.loop=true;source.loopStart=.3;source.loopEnd=Math.max(.31,buffer.duration-.3);source.connect(purrG);source.start();}
  });
 loadGatherWhistle();startCafeMusic();
}
const cafeMusic={timer:null,next:0,beat:0};
// Warm felt-piano samples: hammer transient, lightly inharmonic strings and natural decay.
const cafePianoSamples=new Map();
function cafePianoSample(midi){
 if(cafePianoSamples.has(midi))return cafePianoSamples.get(midi);
 const rate=22050,length=Math.ceil(rate*3.6),buffer=AC.createBuffer(1,length,rate),data=buffer.getChannelData(0),frequency=440*Math.pow(2,(midi-69)/12);
 const levels=[1,.48,.23,.105,.055,.027],decay=1.9*Math.pow(261.63/frequency,.25);
 let seed=17+midi;for(let i=0;i<length;i++){const t=i/rate,attack=1-Math.exp(-t*500);let sample=0;
  for(let j=0;j<levels.length;j++){const harmonic=j+1,stretch=Math.sqrt(1+.00012*harmonic*harmonic),envelope=Math.exp(-t*(1+j*.72)/decay);sample+=levels[j]*envelope*Math.sin(2*Math.PI*frequency*harmonic*stretch*t);}
  seed=seed*16807%2147483647;const hammer=(seed/2147483647*2-1)*.025*Math.exp(-t*100);
  data[i]=(sample*.43+hammer)*attack*Math.min(1,(3.6-t)/.15);
 }
 cafePianoSamples.set(midi,buffer);return buffer;
}
function cafeNote(midi,time,duration,volume){
 const source=AC.createBufferSource(),gain=AC.createGain();source.buffer=cafePianoSample(midi);
 gain.gain.setValueAtTime(volume*2.2,time);gain.gain.setValueAtTime(volume*2.2,time+duration);gain.gain.exponentialRampToValueAtTime(.0001,time+duration+.65);
 source.connect(gain);gain.connect(master);source.start(time);source.stop(time+Math.min(3.6,duration+.7));source.onended=()=>{source.disconnect();gain.disconnect();};
}
function scheduleCafeMusic(){
 if(!AC||!soundOn||AC.state!=='running'||document.hidden){cafeMusic.next=AC?AC.currentTime+.12:0;return;}
 const beat=60/88,chords=[[48,55,60,64],[41,48,57,60],[43,50,59,62],[48,55,59,64],[50,57,60,65],[43,50,59,62],[41,48,57,60],[48,55,60,64]],melody=[64,67,72,71,69,67,64,62,65,69,72,69,67,65,64,62,64,67,71,72,74,72,69,67,65,69,72,74,72,69,67,64];
 if(cafeMusic.next<AC.currentTime)cafeMusic.next=AC.currentTime+.08;
 while(cafeMusic.next<AC.currentTime+.8){const n=cafeMusic.beat%32,bar=Math.floor(n/4),inBar=n%4,chord=chords[bar],t=cafeMusic.next;
  if(inBar===0||inBar===2)cafeNote(chord[0],t,beat*1.7,.035);
  cafeNote(chord[1+inBar%3]+12,t+.06,beat*1.5,.016);
  cafeNote(melody[n],t+(inBar%2?.06:0),beat*1.4,.028);
  if(inBar===1||inBar===3)cafeNote(chord[2]+12,t+beat*.55,beat*.65,.010);
  cafeMusic.beat++;cafeMusic.next+=beat;
 }
}
function startCafeMusic(){if(!AC||!soundOn)return;if(cafeMusic.timer===null){cafeMusic.next=AC.currentTime+.12;cafeMusic.timer=setInterval(scheduleCafeMusic,250);}scheduleCafeMusic();}
// Recorded physical referee whistle (Rosa-Orenes256, CC0); see ASSET-LICENSES.md.
let gatherWhistleBuffer=null,gatherWhistleLoading=null;
function loadGatherWhistle(){
 if(gatherWhistleBuffer)return Promise.resolve(gatherWhistleBuffer);
 if(!gatherWhistleLoading)gatherWhistleLoading=fetch('assets/gather-whistle.mp3').then(r=>{if(!r.ok)throw Error('Whistle unavailable');return r.arrayBuffer();}).then(data=>AC.decodeAudioData(data)).then(buffer=>{gatherWhistleBuffer=buffer;return buffer;}).catch(error=>{gatherWhistleLoading=null;console.warn(error);return null;});
 return gatherWhistleLoading;
}
function gatherWhistle(){
 if(!AC||!soundOn)return Promise.resolve();
 return loadGatherWhistle().then(buffer=>{if(!buffer||!soundOn)return;
  for(const offset of [0,buffer.duration+.16]){const source=AC.createBufferSource(),gain=AC.createGain();source.buffer=buffer;gain.gain.value=.32;source.connect(gain);gain.connect(master);source.start(AC.currentTime+.01+offset);source.onended=()=>{source.disconnect();gain.disconnect();};}
 });
}

const soundLoads=new Map();let purrStarted=false;
function loadCatSound(name){
 if(BUF[name])return Promise.resolve(BUF[name]);
 if(!AC||!SND[name])return Promise.resolve(null);
 if(soundLoads.has(name))return soundLoads.get(name);
 const context=AC;
 const loading=Promise.resolve().then(async()=>{
  let bytes;if(SND[name].startsWith('data:'))bytes=b64buf(SND[name]);else{const response=await fetch(SND[name]);if(!response.ok)throw Error('Audio HTTP '+response.status);bytes=await response.arrayBuffer();}
  const buffer=await new Promise((resolve,reject)=>{const pending=context.decodeAudioData(bytes,resolve,reject);if(pending?.then)pending.then(resolve,reject);});
  BUF[name]=buffer;return buffer;
 }).catch(error=>{soundLoads.delete(name);console.warn('Cat audio unavailable:',name,error.message);return null;});
 soundLoads.set(name,loading);return loading;
}
function playBuf(name,vol=1,rate=1,hooks=null){
 if(!AC||!soundOn)return Promise.resolve(false);
 const context=AC;
 return loadCatSound(name).then(async buffer=>{
  if(!buffer||!soundOn||document.hidden)return false;
  if(context.state==='suspended')await context.resume();
  const source=context.createBufferSource();source.buffer=buffer;source.playbackRate.value=rate;
  const gain=context.createGain();gain.gain.value=vol;source.connect(gain);gain.connect(master);hooks?.start?.(buffer.duration/rate);source.start();
  source.onended=()=>{source.disconnect();gain.disconnect();hooks?.end?.();};return true;
 });
}
let nextNpcVoiceAt=0;
function npcMeow(actor,requested=false){
 if(!AC||!soundOn||document.hidden||lift.actor===actor)return;
 const id=actor===ye?'ye':actor===rabbit?'rabbit':actor.id;
 if(!SND['voice_'+id]||AC.currentTime<nextNpcVoiceAt)return;
 if(!requested&&['sleep','rest','floorRest','eat','drink','marking'].includes(actor.state))return;
 nextNpcVoiceAt=AC.currentTime+4;actor.nextVoiceAt=AC.currentTime+rand(35,70);
 playBuf('voice_'+id,.42,1);
}
function updateNpcVoices(){
 if(!AC||!soundOn||document.hidden)return;
 for(const actor of [ye,rabbit,...extraNPCs]){
  if(actor.nextVoiceAt==null)actor.nextVoiceAt=AC.currentTime+rand(12,40);
  if(AC.currentTime>=actor.nextVoiceAt){actor.nextVoiceAt=AC.currentTime+rand(35,70);npcMeow(actor);}
 }
}
const MEOWS={short:['m_short1','m_short2','m_short3'],mew:['m_short2','m_short3','m_chirp'],mid:['m_mid1','m_mid2','m_mid3'],long:['m_long1','m_long2'],chirp:['m_chirp']};
function meow(kind='mid',hooks=null){return playBuf(pick(MEOWS[kind]||MEOWS.mid),.9,rand(.97,1.03),hooks);}
function noise(dur,type,freq,vol,q=1){
  if(!AC||!soundOn)return;const t=AC.currentTime+.005;
  const s=AC.createBufferSource();s.buffer=noiseBuf;const f=AC.createBiquadFilter();f.type=type;f.frequency.value=freq;f.Q.value=q;
  const g=AC.createGain();g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);
  s.connect(f);f.connect(g);g.connect(master);s.start(t,Math.random()*1.5);s.stop(t+dur+.02);
}
function tone(f0,f1,dur,vol,type='sine'){
  if(!AC||!soundOn)return;const t=AC.currentTime+.005;const o=AC.createOscillator();o.type=type;
  o.frequency.setValueAtTime(f0,t);o.frequency.exponentialRampToValueAtTime(f1,t+dur);
  const g=AC.createGain();g.gain.setValueAtTime(vol,t);g.gain.exponentialRampToValueAtTime(.001,t+dur);o.connect(g);g.connect(master);o.start(t);o.stop(t+dur+.02);
}
const sfx={
  crunch:()=>{noise(.035,'bandpass',2400,.22,3);setTimeout(()=>noise(.03,'bandpass',3000,.15,3),40);},
  lap:()=>{noise(.045,'bandpass',1400,.16,6);},
  scratch:()=>noise(.11,'bandpass',4200,.14,1.5),
  thud:v=>tone(150,60,.12,Math.min(.5,v)),
  pounce:()=>{tone(180,70,.15,.45);noise(.08,'lowpass',900,.25);},
  breath:()=>{if(!AC||!soundOn)return;const t=AC.currentTime;const s=AC.createBufferSource();s.buffer=noiseBuf;const f=AC.createBiquadFilter();f.type='lowpass';f.frequency.value=420;
    const g=AC.createGain();g.gain.setValueAtTime(0,t);g.gain.linearRampToValueAtTime(.09,t+.7);g.gain.linearRampToValueAtTime(0,t+1.6);s.connect(f);f.connect(g);g.connect(master);s.start(t,Math.random());s.stop(t+1.7);},
};
function popMeow(kind){const token=cat.meowToken=(cat.meowToken||0)+1;cat.meowPop=1.3;return meow(kind,{start:duration=>{if(cat.meowToken===token)cat.meowPop=duration;},end:()=>{if(cat.meowToken===token)cat.meowPop=0;}});}
document.addEventListener('pointerdown',initAudio,{capture:true});

const bSound=document.getElementById('bSound');
function setSound(on){soundOn=on;bSound.setAttribute('aria-pressed',on);bSound.textContent=on?'聲音 開':'聲音 關';
  if(on&&AC)startCafeMusic();
  if(master)master.gain.setTargetAtTime(on?.75:0,AC.currentTime,.05);try{localStorage.setItem('heipipi-sound',on?'on':'off');}catch(e){}}
bSound.onclick=()=>{initAudio();setSound(!soundOn);if(soundOn)popMeow('short');};
setSound(soundOn);

/* ---------- needs ---------- */
const NEEDS=[['hunger','肚子'],['thirst','喝水'],['potty','廁所'],['energy','精神'],['love','撒嬌'],['play','玩耍']];
const needs={hunger:rand(55,80),thirst:rand(60,85),potty:rand(65,90),energy:rand(60,85),love:rand(40,60),play:rand(45,65)};
const DECAY={hunger:.11,thirst:.12,potty:.08,energy:.07,love:.16,play:.13};
const needsEl=document.getElementById('needs');const needUI={};
for(const [k,l] of NEEDS){const d=document.createElement('div');d.className='need';d.innerHTML=`<span>${l}</span><i><b></b></i>`;needsEl.appendChild(d);needUI[k]=d;}
function bump(k,v){needs[k]=Math.max(0,Math.min(100,needs[k]+v));}
const WANT={food:'肚子餓了，想吃飯',love:'想要你摸摸牠',play:'叼著玩具，想找你玩',meow:'只是想找你，喵喵叫'};
function refreshNeeds(){
  for(const [k] of NEEDS){const v=needs[k],d=needUI[k];d.querySelector('b').style.width=v+'%';d.classList.toggle('low',v<45&&v>=25);d.classList.toggle('bad',v<25);}
  let txt='',on=false;
  if(cat.state==='ask'){txt=`${catName}${WANT[cat.askKind]}`;on=true;}
  else{const low=NEEDS.map(([k,l])=>[k,needs[k]]).sort((a,b)=>a[1]-b[1])[0];
    if(low[1]<40){on=true;txt={hunger:'有點餓了',thirst:'有點口渴',potty:'想上廁所',energy:'有點睏了',love:'有點想撒嬌',play:'有點無聊，想玩'}[low[0]];txt=`${catName}${txt}`;}
    else txt=`${catName}現在很滿足`;}
  wantEl.textContent=txt;wantEl.classList.toggle('on',on);
}

/* ---------- behaviour ---------- */
let mode='hand';
const wand={x:420,y:540};
const treat={x:300,y:640,left:0};
let throwOrigin={x:300,y:640};
function toyFree(t){return t&&!t.held&&!t.carried&&!t.thrown;}
function moveTo(x,y,speed,then,msg){
  if(deferLitterExit(()=>moveTo(x,y,speed,then,msg)))return;
  if(cat.state==='hop'){cat.then=()=>moveTo(x,y,speed,then,msg);return;}
  if(msg)say(msg);
  if(cat.inside){const out=cat.inside==='box'?BOX_OUT:LIT_OUT;cat.inside=null;hopTo(out.x,out.y,()=>moveTo(x,y,speed,then));return;}
  x=Math.max(GX0,Math.min(GX1,x));y=Math.max(GY0,Math.min(GY1,y));
  const goal=freePoint(x,y);cat.walkGoal=goal;cat.avoidTimer=0;
  cat.path=findPath(cat.x,cat.y,goal.x,goal.y);cat.state='walk';cat.act=null;cat.speed=speed;cat.then=then||null;cat.eyes='open';
}
function hopTo(x,y,then){const box=Math.hypot(x-BOX_IN.x,y-BOX_IN.y)<2||Math.hypot(cat.x-BOX_IN.x,cat.y-BOX_IN.y)<2;cat.state='hop';cat.act=null;if(!box)cat.face=x>=cat.x?1:-1;cat.hop={x0:cat.x,y0:cat.y,x1:x,y1:y,t:0,box,inside:Math.hypot(x-BOX_IN.x,y-BOX_IN.y)<2?'box':Math.hypot(x-LIT_IN.x,y-LIT_IN.y)<2?'litter':null};cat.then=then||null;cat.pose='pounce';}
function doFor(act,pose,secs,msg,then){cat.state=secs?'timed':'stay';cat.act=act;cat.pose=pose;cat.timer=secs||0;cat.then=then||null;
  cat.eyes=act==='sun'?'half':['sleep','matSleep'].includes(act)?'closed':'open';if(msg)say(msg);}
function dropCarry(){if(!cat.carry)return;const t=cat.carry;t.carried=false;t.inBox=false;const p=freePoint(cat.x+cat.face*44,cat.y+4);t.x=p.x;t.y=p.y;t.z=14;t.vz=0;t.vx=t.vy=0;cat.carry=null;}
function interrupt(){cancelPlayerTVVisits();cat.sleepChoice=null;cat.matVisit=null;cat.randomAction=null;if(lift.actor)endLift();cancelLiftHold();if(gather.active)stopGather();if(cat.facilityCare)cancelFacility(cat);cat.then=null;cat.path=[];cat.walkGoal=null;cat.act=null;cat.eyes='open';cat.cs=null;cat.askKind=null;cat.targetToy=null;pet.on=false;if(cat.state!=='hop'){cat.state='idle';cat.z=0;}dropCarry();}
function randFloor(){return freePoint(rand(GX0+20,GX1-20),rand(380,GY1-16));}
function ownerSpot(){const vx=cam.x+VW/2/cam.s,vy=Math.min(GY1-20,cam.y+(safeBot-20)/cam.s);return freePoint(Math.max(70,Math.min(GX1-20,vx)),vy);}
function enterBox(then){moveTo(BOX_OUT.x,BOX_OUT.y,72,()=>hopTo(BOX_IN.x,BOX_IN.y,()=>{cat.inside='box';cat.face=-1;then();}));}
function enterLitter(then){moveTo(LIT_OUT.x,LIT_OUT.y,72,()=>hopTo(LIT_IN.x,LIT_IN.y,()=>{cat.inside='litter';cat.face=-1;then();}));}

function goEat(msg){playerFacility('eat',msg);}
function goDrink(msg){playerFacility('drink',msg);}
function goLitter(msg){playerFacility('litter',msg);}
function nestSleepToy(){
 const t=cat.carry;if(!t)return null;
 Object.assign(t,{carried:false,held:false,thrown:false,rolling:false,inBox:true,x:BOX.x+34,y:BOX_IN.y-5,z:0,vx:0,vy:0,vz:0,rot:0});cat.carry=null;return t;
}
function goSleep(msg,withToy=true){
 if(!cat.carry&&withToy&&Math.random()<.38){const available=toys.filter(toyFree),fav=available.find(t=>t.fav),t=fav&&Math.random()<.75?fav:pick(available);if(t){fetchToy(t,'sleep');return;}}
 enterBox(()=>{const buddy=nestSleepToy();doFor('sleep','sleep',0,buddy?'把'+buddy.name+'放在身邊，一起在紙箱裡睡著了':'在紙箱裡睡著了');});if(msg)say(msg);
}
function windowViewingSeat(){return roomPlan?{...roomPlan.lookout}:{x:SUN.x,y:FT+45};}
function goSun(msg){const sunny=!window.RoomOutdoors||RoomOutdoors.state().strength>.18;const seat=sunny?SUN:windowViewingSeat();moveTo(seat.x,seat.y,70,()=>{cat.face=-1;const light=!window.RoomOutdoors||RoomOutdoors.state().strength>.18;doFor(light?'sun':'window',light?'sun':'sit',24,light?'窩在陽光裡，暖暖的':'坐在窗邊看看外面');},sunny?'走去窗邊曬太陽':'走去窗邊看風景');}

function fetchToy(t,kind){
  cat.targetToy=t;
  const dir=Math.sign(t.x-cat.x)||1,ap=freePoint(t.x-dir*46,t.y);
  const msg=kind==='sleep'?`去叼${t.name}，一起回紙箱睡覺`:kind==='fetch'?`衝去撿${t.name}`:kind==='bring'?`去叼${t.name}來找你玩`:t.fav?'去找大象寶寶':`去找${t.name}`;
  moveTo(ap.x,ap.y,kind==='fetch'?185:78,()=>{
    cat.targetToy=null;
    if(!toyFree(t)||Math.hypot(t.x-cat.x,t.y-cat.y)>95){if(kind==='sleep')return goSleep(null,false);cat.state='idle';cat.timer=1;say('搆不到，算了');return;}
    cat.face=Math.sign(t.x-cat.x)||cat.face;t.carried=true;t.inBox=false;cat.carry=t;
    if(kind==='sleep'){goSleep('叼著'+t.name+'回紙箱睡覺',false);}
    else if(kind==='fetch'){const p=freePoint(throwOrigin.x,throwOrigin.y);
      moveTo(p.x,p.y,125,()=>{dropCarry();bump('play',18);bump('love',6);popMeow('mew');doFor('proud','proud',2.5,t.fav?'把大象寶寶叼回來給你了':`把${t.name}叼回來給你了`);},`叼著${t.name}跑回來`);}
    else if(kind==='bring'){const p=ownerSpot();moveTo(p.x,p.y,85,()=>{dropCarry();startAsk('play');},`叼著${t.name}走向你`);}
    else carryAround(t.fav?3:2);
  },msg);
}
function carryAround(n){
  const t=cat.carry;if(!t)return;
  if(n<=0){
    if(needs.potty<25||needs.thirst<28||needs.energy>=22&&needs.hunger<35){dropCarry();chooseNext();return;}
    if(Math.random()<.4){goSleep('叼著'+t.name+'回紙箱睡覺',false);return;}
    if(t.fav){const p=freePoint(BOX.x+146,BOX.front+26);moveTo(p.x,p.y,60,()=>{cat.face=-1;dropCarry();doFor('sit','sit',2.5,'把大象寶寶放回紙箱旁邊');},'叼著大象寶寶回家');}
    else{dropCarry();cat.state='idle';cat.timer=1.5;}
    return;
  }
  const p=randFloor();moveTo(p.x,p.y,62,()=>carryAround(n-1),t.fav?'叼著大象寶寶到處走':`叼著${t.name}散步`);
}
function startAsk(kind){cat.state='ask';cat.askKind=kind;cat.pose='ask';cat.timer=22;cat.meowT=.2;cat.eyes='open';
  say({food:'坐在你面前，喵喵叫著討飯',love:'蹭到你旁邊，想要摸摸',play:'把玩具放在你面前，等你丟',meow:'看著你，喵～喵～'}[kind]);}
function ask(kind){
  if(kind==='play'){const t=pick(toys.filter(toyFree));if(t)return fetchToy(t,'bring');}
  const go=()=>{const p=ownerSpot();moveTo(p.x,p.y,92,()=>startAsk(kind),kind==='food'?'餓了，跑來找你':'朝你走過來');};
  if(kind==='food'&&bowl.food<=0){moveTo(EAT_AT.x,EAT_AT.y,85,()=>{cat.face=-1;doFor('stare','sit',2.6,'看著空空的碗，喵——',go);popMeow('long');},'先去看看碗裡有沒有飯');return;}
  go();
}
/* Black cat random actions: user-provided kneading and loaf videos. */
function blackRandomFrame(kind,elapsed){
 const m=BLACK_RANDOM_CLIPS[kind==='loafVideo'?'loaf':kind];
 return kind==='loafVideo'?Math.min(m.count-1,Math.floor(Math.max(0,elapsed)*m.fps)):Math.floor(Math.max(0,elapsed)*m.fps)%m.count;
}
function drawBlackRandom(c){
 const a=cat.randomAction;if(!a||a.started===null||!['knead','loafVideo'].includes(cat.act)||cat.state!=='timed')return false;
 const kind=a.kind==='loafVideo'?'loaf':a.kind,m=BLACK_RANDOM_CLIPS[kind],elapsed=Math.max(0,cat.time-a.started);
 const im=IMG['black_'+kind+'_'+blackRandomFrame(a.kind,elapsed)];if(!im?.complete||!im.naturalWidth)return false;
 const scale=110/m.standHeight,x=cat.x,y=cat.y-(a.kind==='knead'?17:0),breath=a.kind==='loafVideo'&&elapsed>=m.duration?1+Math.sin(elapsed*1.8)*.009:1;
 c.save();c.fillStyle='rgba(60,30,8,.2)';c.beginPath();c.ellipse(x,y-2,a.kind==='knead'?30:43,7,0,0,Math.PI*2);c.fill();
 c.translate(x,y);c.scale(scale,scale*breath);c.drawImage(im,-m.cx,-m.ground);c.restore();return true;
}
function blackLoafSpotSafe(p){
 return p.x>GX0+55&&p.x<GX1-55&&p.y>FT+90&&p.y<GY1-24&&!yeBlocked(p.x,p.y,true,cat)&&npcRestAllowed(p);
}
function goKnead(){
 if(cat.time<(cat.kneadAfter||0))return false;
 cat.randomAction={kind:'knead',started:null};
 moveTo(TOAST_CENTER.x,TOAST_CENTER.y+36,70,()=>{
  if(cat.randomAction?.kind!=='knead')return;
  if(Math.hypot(cat.x-TOAST_CENTER.x,cat.y-TOAST_CENTER.y-36)>4){cat.randomAction=null;return;}
  dropCarry();cat.face=1;cat.randomAction.started=cat.time;cat.kneadAfter=cat.time+rand(35,55);
  doFor('knead','knead',rand(12,18),'在吐司中央，左右前腳交替踩踩按摩',()=>{cat.randomAction=null;doFor('toast','toastsit',rand(8,14));beginToastRest();});
 },'走去吐司中央踩踩');return true;
}
function goMatSleep(manual=false){
 if(!manual&&cat.time<(cat.matAfter||0)||cat.carry||cat.facilityCare||needs.potty<25||needs.thirst<28||needs.hunger<35)return false;
 const target={x:FAVOURITE_MAT.x,y:FAVOURITE_MAT.y+26};
 if(yeBlocked(target.x,target.y,true,cat)||puddleBlocked(target.x,target.y)){
  if(manual){doFor('wait','sit',.6,'等其他貓咪讓路，再去黑貓腳踏墊',()=>goMatSleep(true));return true;}return false;
 }
 const visit={};cat.matVisit=visit;
 moveTo(target.x,target.y,65,()=>{
  if(cat.matVisit!==visit)return;
  if(Math.hypot(cat.x-target.x,cat.y-target.y)>4||puddleBlocked(cat.x,cat.y)){cat.matVisit=null;cat.matAfter=cat.time+15;return;}
  dropCarry();cat.face=1;cat.matAfter=cat.time+rand(90,150);
  doFor('matSleep','sleep',rand(28,45),'趴在最喜歡的黑貓腳踏墊上，閉上眼睛安心睡覺',()=>{cat.matVisit=null;cat.sleepChoice=null;});
 },'走去喜歡的貓咪腳踏墊');return true;
}
function goFloorLoaf(){
 if(cat.time<(cat.loafAfter||0))return false;
 let target=null;for(let i=0;i<32;i++){const p=randFloor();if(blackLoafSpotSafe(p)&&Math.hypot(p.x-cat.x,p.y-cat.y)>65){target=p;break;}}
 if(!target)return false;
 cat.randomAction={kind:'loafVideo',started:null};moveTo(target.x,target.y,65,()=>{
  if(cat.randomAction?.kind!=='loafVideo')return;
  if(!blackLoafSpotSafe(cat)){cat.randomAction=null;cat.timer=.5;return;}
  dropCarry();cat.face=1;cat.randomAction.started=cat.time;cat.loafAfter=cat.time+rand(35,55);
  doFor('loafVideo','loafVideo',rand(14,24),'找了塊舒服的空地，收起前腳母雞蹲',()=>{cat.randomAction=null;});
 },'找個舒服的地方母雞蹲');return true;
}
/* End black cat random actions */
let lastAutonomousChoice=-1;
function variedIdleRoll(){
  const thresholds=[.06,.26,.33,.44,.52,.62,.72,.77,.78,1];
  const bucket=r=>thresholds.findIndex(t=>r<t);
  let r=Math.random();for(let i=0;i<12&&bucket(r)===lastAutonomousChoice;i++)r=Math.random();
  if(bucket(r)===lastAutonomousChoice)r=(r+.37)%1;
  lastAutonomousChoice=bucket(r);return r;
}
function chooseNext(){
  cat.sleepChoice=null;cat.eyes='open';const n=needs;
  if(n.potty<25)return goLitter('想上廁所，自己走去砂盆');
  if(n.thirst<28)return goDrink('口渴了，自己去喝水');
  if(n.energy<22)return goSleep('好睏，走回紙箱');
  if(n.hunger<35)return bowl.food>0?goEat('肚子餓，去吃碗裡的飯'):ask('food');
  if(n.love<32)return ask('love');
  if(n.play<32)return ask('play');
  const r=variedIdleRoll(),ele=toys[0];
  if(r<.06)return ask('meow');
  if(r<.26&&toyFree(ele))return fetchToy(ele,'wander');
  if(r<.33){const t=pick(toys.slice(1).filter(toyFree));if(t)return fetchToy(t,'wander');}
  if(r<.44)return doFor('look','look',rand(2,5),'轉頭看看你');
  if(r<.52)return goSun('走去窗邊曬太陽');
  if(r<.62){if(goKnead())return;return goToast();}
  if(r<.72&&goFloorLoaf())return;
  if(r>=.78&&r<.86&&goMatSleep())return;
  if(r<.77){popMeow('mid');return doFor('meow','meow',rand(1,2.2),'喵～了一聲');}
  if(r<.78)popMeow('short');
  const p=randFloor();moveTo(p.x,p.y,rand(48,85),()=>doFor('look','look',rand(2,5),'停下來，正面看著你'),pick(['在房間裡散步','到處巡邏','走來走去，看看你']));
}
function onToyLanded(t){
  if(mode==='wand')return;
  if(cat.act==='sleep'){say('睡得好熟，耳朵動了一下');return;}
  interrupt();fetchToy(t,'fetch');
}

function followPath(dt){
  const k=cat;k.avoidTimer=Math.max(0,(k.avoidTimer||0)-dt);
  const goal=k.state==='walk'?k.walkGoal:k.path.at(-1);
  if(!k.path.length){
    if(goal&&Math.hypot(k.x-goal.x,k.y-goal.y)>3){
      if(k.avoidTimer<=0){yeTryYield(goal);k.path=findPath(k.x,k.y,goal.x,goal.y);k.avoidTimer=.35;}
      return false;
    }return true;
  }
  const tgt=k.path[0],dx=tgt.x-k.x,dy=tgt.y-k.y,d=Math.hypot(dx,dy);
  const s=Math.min(d,k.speed*dt),next={x:k.x+(d?dx/d*s:0),y:k.y+(d?dy/d*s:0)};
  if(!catCanStep(k,next)||!los(k,next)){
    if(k.avoidTimer<=0){yeTryYield(goal||tgt);k.path=findPath(k.x,k.y,(goal||tgt).x,(goal||tgt).y);k.avoidTimer=.35;}
    k.pose='sit';return false;
  }
  k.x=next.x;k.y=next.y;
  if(d<=s+.01){k.path.shift();if(!k.path.length&&(!goal||Math.hypot(k.x-goal.x,k.y-goal.y)<3))return true;}
  if(Math.abs(dx)>1.5)k.face=dx>0?1:-1;
  k.vdir=dy<-Math.abs(dx)*1.1?'up':dy>Math.abs(dx)*1.1?'down':'side';
  k.phase+=s*Math.PI*2/(WSTRIDE*KW3);k.pose='walk';
  for(const t of toys){if(t===k.targetToy||t.carried||t.held||t.inBox||t.z>0)continue;
    const fx=k.x+k.face*30,tx=t.x-fx,ty=(t.y-k.y)*1.6,td=Math.hypot(tx,ty);
    if(td<40&&td>0&&Math.hypot(t.vx,t.vy)<40){const sp=k.speed>120?260:170;t.vx+=(tx/td*.6+k.face*.6)*sp;t.vy+=ty/td*sp*.4;t.vz=rand(90,170);t.spin=rand(-10,10);sfx.thud(.12);
      if(Math.random()<.5)say(`一腳踢到${t.name}，${t.name}滾了出去`);}}
  return false;
}
const MOUTH_UP=(378-119)*KP*1.02,TIP_DX=1.4,TIP_DY=7.2;
function updateTreat(dt){
  const c=cat,mdx=(c.face<0?-1:1)*(124-119.5)*KP,tgt=freePoint(treat.x-TIP_DX-mdx,treat.y-TIP_DY+MOUTH_UP),d=Math.hypot(tgt.x-c.x,tgt.y-c.y);
  const reach=Math.abs(tgt.x+TIP_DX+mdx-treat.x)<10&&Math.abs(tgt.y-MOUTH_UP+TIP_DY-treat.y)<12;
  c.repath=(c.repath||0)-dt;
  if(d>8){
    if(c.repath<=0||!c.path.length){c.path=findPath(c.x,c.y,tgt.x,tgt.y);c.repath=.4;}
    c.speed=150;if(followPath(dt))c.path=[];c.act=null;
    if(c.cs!=='go'){c.cs='go';say('聞到貓條的味道，跑過來了！');}
  }else if(!reach){c.pose='ask';c.act=null;c.path=[];if(c.cs!=='beg'){c.cs='beg';say('搆不到貓條，抬頭盯著你');popMeow('short');}}
  else{
    c.path=[];const e=Math.min(1,dt*8),next={x:c.x+(tgt.x-c.x)*e,y:c.y+(tgt.y-c.y)*e};
    if(!catCanStep(c,next)){yeTryYield(tgt);return;}c.x=next.x;c.y=next.y;
    c.pose='lick';c.act='lick';
    if(c.cs!=='lick'){c.cs='lick';say('抬著頭舔貓條，舔得好認真');}
    treat.left-=dt/8;bump('hunger',3*dt);bump('love',2.5*dt);
    if(Math.random()<dt*3)puff('heart',c.x+rand(-25,25),c.y-110,{life:1});
    if(treat.left<=0){treat.left=0;c.act=null;c.cs=null;setMode('hand',true);popMeow('chirp');
      say('貓條吃完了，開心地去玩玩具');
      const t=pick(toys.filter(toyFree));if(t)fetchToy(t,'wander');else{c.state='idle';c.timer=1;}}
  }
}
function updateChase(dt){
  const c=cat,dx=wand.x-c.x,dy=wand.y-c.y,d=Math.hypot(dx,dy);
  if(c.cs==='avoidPuddle'){c.speed=175;if(followPath(dt)){c.path=[];c.cs='approach';}return;}
  if(c.cs==='approach'){
    c.repath=(c.repath||0)-dt;
    if(d>110){if(c.repath<=0||!c.path.length){const p=freePoint(wand.x-(Math.sign(dx)||1)*70,wand.y);c.path=findPath(c.x,c.y,p.x,p.y);c.repath=.45;}
      c.speed=175;if(followPath(dt))c.path=[];}
    else{c.cs='crouch';c.ct=rand(.6,1.2);c.pose='crouch';c.face=dx>=0?1:-1;say('屁股扭扭，準備撲！');}
  }else if(c.cs==='crouch'){
    c.pose='crouch';c.face=dx>=0?1:-1;c.ct-=dt;
    if(d>170)c.cs='approach';
    else if(c.ct<=0){c.cs='pounce';c.jt=0;c.jx0=c.x;c.jy0=c.y;const p=freePoint(wand.x-c.face*40,wand.y);c.jx1=p.x;c.jy1=p.y;c.pose='pounce';sfx.pounce();}
  }else if(c.cs==='pounce'){
    const target={x:c.jx1,y:c.jy1};if(!panoramaFurnitureStepClear(c,target)||!puddleStepClear(c,target)||!scratchBoardStepClear(c,target,cat)){c.z=0;c.cs='avoidPuddle';c.path=findPath(c.x,c.y,target.x,target.y);return;}if(!catPairCanStep(c,target)){yeTryYield(target);return;}
    c.jt+=dt/.42;const p=Math.min(1,c.jt);c.x=lerp(c.jx0,c.jx1,p);c.y=lerp(c.jy0,c.jy1,p);c.z=Math.sin(p*Math.PI)*55;c.pose='pounce';
    if(p>=1){c.z=0;c.cs='swat';c.ct=.9;c.pose='swat';bump('play',10);bump('energy',-2);say(pick(['抓到了！','啪！','差一點點～','再來一次！']));
      if(Math.random()<.4)popMeow('chirp');
      for(let i=0;i<8;i++)puff('spark',wand.x,wand.y-30,{vx:rand(-60,60),vy:rand(-70,-10),life:.7});}
  }else if(c.cs==='swat'){c.pose='swat';c.ct-=dt;if(c.ct<=0)c.cs='approach';}
}
function updateCat(dt){
 if(cat.meowPop>0)cat.meowPop=Math.max(0,cat.meowPop-dt);
 if(ownsTVVisit(cat))return;
 if(lift.actor===cat){cat.time+=dt;return;}
 if(cat.trafficYield&&updateTrafficYield(cat,dt))return;
 if(updateGather(cat,dt))return;
  const k=cat;k.time+=dt;updateBellyAnimation();updateToastRest(dt);
  if(k.act==='loafVideo'&&puddleBlocked(k.x,k.y)){interrupt();const p=randFloor();moveTo(p.x,p.y,75,null,'避開地上的尿尿，再換個地方休息');}

  if(k.blink>0)k.blink-=dt;else{k.blinkWait-=dt;if(k.blinkWait<=0){k.blink=.14;k.blinkWait=rand(2,6);}}
  // needs drift
  const sleeping=k.act==='sleep'||k.act==='matSleep';
   if(k.matVisit&&(needs.potty<25||needs.thirst<28||needs.hunger<35||puddleBlocked(k.x,k.y))){interrupt();chooseNext();return;}
  for(const n in DECAY)if(!(sleeping&&n==='energy'))bump(n,-DECAY[n]*dt*(sleeping?.4:1));
  if(sleeping)bump('energy',7*dt);
  if(k.act==='sun')bump('energy',1.2*dt);
  if(k.act==='toast')bump('energy',1.5*dt);
  if(k.act==='eat'){bump('hunger',18*dt);bowl.food=Math.max(0,bowl.food-dt/180);}
  if(k.act==='drink')bump('thirst',22*dt);

  if(k.facilityCare){advanceFacility(k,dt);return;}
  if(mode==='wand'&&k.state==='chase'){updateChase(dt);return;}
  if(mode==='treat'&&k.state==='treat'){updateTreat(dt);}
  switch(k.state){
    case 'walk':if(followPath(dt)){const f=k.then;k.then=null;k.state='idle';k.pose='sit';k.timer=rand(1.5,3.5);f&&f();}break;
    case 'hop':{const h=k.hop,target={x:h.x1,y:h.y1};if(!catPairCanStep(k,target)){yeTryYield(target);if(h.t===0)k.pose='sit';break;}
      h.t+=dt/(h.box?.55:.5);const p=Math.min(1,h.t);k.x=lerp(h.x0,h.x1,p);k.y=lerp(h.y0,h.y1,p);k.z=Math.sin(p*Math.PI)*(h.box?66:48);k.pose='pounce';
      if(p>=1){k.z=0;k.inside=h.inside;k.state='idle';k.pose='sit';k.timer=1;const f=k.then;k.then=null;f&&f();}break;}
    case 'idle':k.timer-=dt;if(k.timer<=0)chooseNext();break;
    case 'timed':k.timer-=dt;if(k.timer<=0){const f=k.then;k.then=null;k.act=null;k.eyes='open';k.state='idle';k.pose=k.inside?'sit':'sit';k.timer=rand(1,2.5);f&&f();}break;
    case 'stay':k.timer+=dt;if(k.act==='sleep'&&needs.energy>=99.5&&k.timer>30){k.act=null;k.eyes='open';k.sleepChoice=null;say('睡飽了，伸個懶腰');popMeow('mew');k.state='idle';k.timer=2;k.pose='sit';}break;
    case 'belly':k.timer-=dt;if(k.wiggle>0){k.wiggle-=dt;if(k.wiggle<=0){k.state='idle';k.timer=1;k.pose='sit';k.eyes='open';say('翻身起來，舔舔毛裝沒事');break;}}
      if(k.timer<=0){k.state='idle';k.timer=1.5;k.pose='sit';k.eyes='open';say('滾一圈起來了');}
      break;
    case 'petted':if(!pet.on){k.timer-=dt;if(k.timer<=0){k.state='idle';k.eyes='open';k.timer=1.5;k.pose=k.pose==='petsit'?'sit':k.pose;}}break;
    case 'ask':k.timer-=dt;k.meowT-=dt;
      if(k.meowT<=0){popMeow(k.askKind==='food'?'long':k.askKind==='meow'?pick(['short','mid','mew']):'mid');k.meowT=rand(3.5,5.5);}
      if(k.askKind==='love'&&Math.random()<dt*.6)puff('heart',k.x+rand(-20,20),k.y-rand(90,120),{life:1.2});
      if(k.timer<=0){k.state='idle';k.timer=3;const kind=k.askKind;k.askKind=null;
        if(kind==='love')bump('love',8);if(kind==='meow')bump('love',4);if(kind==='play')bump('play',6);
        say('等不到你，自己走開了');}
      break;
  }
  // sound + particles of ongoing acts
  const a=k.act;k.sfxT-=dt;
  if(a==='eat'){if(k.sfxT<=0){sfx.crunch();k.sfxT=rand(.22,.38);}if(Math.random()<dt*3)puff('crumb',BOWL.x+rand(-10,10),BOWL.y-20,{vy:-20,life:.6});}
  if(a==='lick'&&k.sfxT<=0){sfx.lap();k.sfxT=rand(.25,.35);}
  if(a==='drink'){if(k.sfxT<=0){sfx.lap();k.sfxT=rand(.26,.32);}if(Math.random()<dt*6)puff('drop',WATER.x+rand(-6,6),WATER.y-32,{vy:rand(-45,-25),life:.5});}
  if(a==='scratch'){if(k.sfxT<=0){sfx.scratch();k.sfxT=.16;}if(Math.random()<dt*14)puff('sand',k.x+rand(-20,20),k.y-14,{vx:rand(-60,60),vy:rand(-70,-30),life:.5});}
  if(a==='sleep'){if(Math.random()<dt*.9)puff('z',k.x+k.face*26,k.y-60,{vx:rand(4,12),vy:-18,life:2.2});if(k.sfxT<=0){sfx.breath();k.sfxT=3.4;}}
  if(a==='sun'&&Math.random()<dt*1.2)puff('spark',rand(395,525),rand(285,385),{vx:rand(-4,4),vy:rand(-10,-4),life:2});
  if(purrG){const want=(k.state==='petted'||(k.state==='belly'&&pet.on&&k.wiggle<=0)||(pet.on&&(a==='sleep'||a==='toast')))?1:(a==='sun'?.25:0);purrG.gain.setTargetAtTime(soundOn?want:0,AC.currentTime,.25);}
}
function updateToys(dt){
  for(const t of toys){
    if(t.held||t.carried||t.inBox)continue;
    if(t.z>0||t.vz!==0){t.vz-=900*dt;t.z+=t.vz*dt;t.rot+=t.spin*dt;
      if(t.z<=0){t.z=0;if(t.vz<-140){sfx.thud(-t.vz/900);t.vz=-t.vz*.38;t.vx*=.7;t.vy*=.7;t.spin*=.5;}else{t.vz=0;}}}
    else t.rot*=Math.pow(.02,dt);
    t.x+=t.vx*dt;t.y+=t.vy*dt;
    if(t.z===0){const f=Math.pow(.04,dt);t.vx*=f;t.vy*=f;}
    if(t.x<GX0){t.x=GX0;t.vx=Math.abs(t.vx)*.5;}if(t.x>GX1){t.x=GX1;t.vx=-Math.abs(t.vx)*.5;}
    if(t.y<244){t.y=244;t.vy=Math.abs(t.vy)*.5;}if(t.y>H-14){t.y=H-14;t.vy=-Math.abs(t.vy)*.5;}
    for(const o of OBST){
      if(t.z>o.h)continue;
      const L=o.x0-16,R=o.x1+16,T=o.wall?0:o.y0-6,B=o.y1+10;
      if(t.x>L&&t.x<R&&t.y>T&&t.y<B){
        const opts=[[t.x-L,'l'],[R-t.x,'r'],[B-t.y,'b']];if(!o.wall)opts.push([t.y-T,'t']);
        const m=opts.sort((a,b)=>a[0]-b[0])[0][1];
        if(m==='l'){t.x=L;t.vx=-Math.abs(t.vx)*.5;}else if(m==='r'){t.x=R;t.vx=Math.abs(t.vx)*.5;}
        else if(m==='b'){t.y=B;t.vy=Math.abs(t.vy)*.5;}else{t.y=T;t.vy=-Math.abs(t.vy)*.5;}
      }
    }
    const sp=Math.hypot(t.vx,t.vy);
    if(t.z>0||t.vz!==0||sp>14){t.rolling=true;t.roll+=sp*dt/(t.size*.3)+Math.abs(t.spin)*dt*.6;t.view=ROLL[Math.floor(t.roll)%8];}
    else if(t.rolling){t.rolling=false;t.view=pick(REST);t.rot=0;t.spin=0;}
    if(t.thrown&&t.z===0&&t.vz===0&&sp<14){t.thrown=false;t.vx=t.vy=0;onToyLanded(t);}
  }
}
function updateParts(dt){
  for(let i=parts.length-1;i>=0;i--){const p=parts[i];p.life-=dt;p.x+=p.vx*dt;p.y+=p.vy*dt;
    if(p.type==='sand'||p.type==='crumb'||p.type==='drop')p.vy+=260*dt;if(p.life<=0)parts.splice(i,1);}
}

/* 爺: autonomous male NPC. Never uses player controls or toy pickup logic. */
const YE_ANIMATION={"walk": {"frames": 69, "fps": 12.0, "duration": 5.75}, "walkHeight": 274.0, "frames": {"ye_walk_000": {"cx": 300.0, "ground": 313, "height": 271, "width": 525}, "ye_walk_001": {"cx": 300.0, "ground": 313, "height": 267, "width": 528}, "ye_walk_002": {"cx": 300.0, "ground": 313, "height": 266, "width": 530}, "ye_walk_003": {"cx": 300.0, "ground": 313, "height": 269, "width": 530}, "ye_walk_004": {"cx": 300.0, "ground": 313, "height": 270, "width": 536}, "ye_walk_005": {"cx": 300.0, "ground": 313, "height": 274, "width": 540}, "ye_walk_006": {"cx": 300.0, "ground": 313, "height": 276, "width": 536}, "ye_walk_007": {"cx": 300.0, "ground": 313, "height": 276, "width": 538}, "ye_walk_008": {"cx": 300.0, "ground": 313, "height": 272, "width": 535}, "ye_walk_009": {"cx": 300.0, "ground": 313, "height": 268, "width": 534}, "ye_walk_010": {"cx": 300.0, "ground": 313, "height": 272, "width": 536}, "ye_walk_011": {"cx": 300.0, "ground": 313, "height": 275, "width": 538}, "ye_walk_012": {"cx": 300.0, "ground": 313, "height": 274, "width": 545}, "ye_walk_013": {"cx": 300.0, "ground": 313, "height": 274, "width": 548}, "ye_walk_014": {"cx": 300.0, "ground": 313, "height": 275, "width": 546}, "ye_walk_015": {"cx": 300.0, "ground": 313, "height": 275, "width": 553}, "ye_walk_016": {"cx": 300.0, "ground": 313, "height": 267, "width": 549}, "ye_walk_017": {"cx": 300.0, "ground": 313, "height": 265, "width": 548}, "ye_walk_018": {"cx": 300.0, "ground": 313, "height": 269, "width": 545}, "ye_walk_019": {"cx": 300.0, "ground": 313, "height": 272, "width": 546}, "ye_walk_020": {"cx": 300.0, "ground": 313, "height": 274, "width": 551}, "ye_walk_021": {"cx": 300.0, "ground": 313, "height": 277, "width": 544}, "ye_walk_022": {"cx": 300.0, "ground": 313, "height": 279, "width": 543}, "ye_walk_023": {"cx": 300.0, "ground": 313, "height": 275, "width": 543}, "ye_walk_024": {"cx": 300.0, "ground": 313, "height": 273, "width": 540}, "ye_walk_025": {"cx": 300.0, "ground": 313, "height": 278, "width": 538}, "ye_walk_026": {"cx": 300.0, "ground": 313, "height": 278, "width": 543}, "ye_walk_027": {"cx": 300.0, "ground": 313, "height": 278, "width": 543}, "ye_walk_028": {"cx": 300.0, "ground": 313, "height": 276, "width": 544}, "ye_walk_029": {"cx": 300.0, "ground": 313, "height": 267, "width": 545}, "ye_walk_030": {"cx": 300.0, "ground": 313, "height": 265, "width": 545}, "ye_walk_031": {"cx": 300.0, "ground": 313, "height": 271, "width": 542}, "ye_walk_032": {"cx": 300.0, "ground": 313, "height": 272, "width": 541}, "ye_walk_033": {"cx": 300.0, "ground": 313, "height": 272, "width": 546}, "ye_walk_034": {"cx": 300.0, "ground": 313, "height": 275, "width": 540}, "ye_walk_035": {"cx": 300.0, "ground": 313, "height": 276, "width": 537}, "ye_walk_036": {"cx": 300.0, "ground": 313, "height": 272, "width": 538}, "ye_walk_037": {"cx": 300.0, "ground": 313, "height": 264, "width": 536}, "ye_walk_038": {"cx": 300.0, "ground": 313, "height": 268, "width": 536}, "ye_walk_039": {"cx": 300.0, "ground": 313, "height": 272, "width": 534}, "ye_walk_040": {"cx": 300.0, "ground": 313, "height": 272, "width": 536}, "ye_walk_041": {"cx": 300.0, "ground": 312, "height": 274, "width": 544}, "ye_walk_042": {"cx": 300.0, "ground": 313, "height": 273, "width": 543}, "ye_walk_043": {"cx": 300.0, "ground": 313, "height": 274, "width": 543}, "ye_walk_044": {"cx": 300.0, "ground": 313, "height": 269, "width": 547}, "ye_walk_045": {"cx": 300.0, "ground": 313, "height": 262, "width": 545}, "ye_walk_046": {"cx": 300.0, "ground": 313, "height": 265, "width": 546}, "ye_walk_047": {"cx": 300.0, "ground": 313, "height": 272, "width": 543}, "ye_walk_048": {"cx": 300.0, "ground": 313, "height": 273, "width": 541}, "ye_walk_049": {"cx": 300.0, "ground": 313, "height": 276, "width": 548}, "ye_walk_050": {"cx": 300.0, "ground": 313, "height": 279, "width": 545}, "ye_walk_051": {"cx": 300.0, "ground": 313, "height": 281, "width": 545}, "ye_walk_052": {"cx": 300.0, "ground": 313, "height": 280, "width": 548}, "ye_walk_053": {"cx": 300.0, "ground": 313, "height": 271, "width": 544}, "ye_walk_054": {"cx": 300.0, "ground": 313, "height": 265, "width": 546}, "ye_walk_055": {"cx": 300.0, "ground": 313, "height": 270, "width": 545}, "ye_walk_056": {"cx": 300.0, "ground": 313, "height": 273, "width": 543}, "ye_walk_057": {"cx": 300.0, "ground": 313, "height": 275, "width": 549}, "ye_walk_058": {"cx": 300.0, "ground": 313, "height": 279, "width": 546}, "ye_walk_059": {"cx": 300.0, "ground": 313, "height": 282, "width": 545}, "ye_walk_060": {"cx": 300.0, "ground": 313, "height": 283, "width": 547}, "ye_walk_061": {"cx": 300.0, "ground": 313, "height": 277, "width": 543}, "ye_walk_062": {"cx": 300.0, "ground": 312, "height": 285, "width": 542}, "ye_walk_063": {"cx": 300.0, "ground": 313, "height": 279, "width": 539}, "ye_walk_064": {"cx": 300.0, "ground": 313, "height": 279, "width": 537}, "ye_walk_065": {"cx": 300.0, "ground": 313, "height": 279, "width": 542}, "ye_walk_066": {"cx": 300.0, "ground": 313, "height": 279, "width": 543}, "ye_walk_067": {"cx": 300.0, "ground": 313, "height": 282, "width": 541}, "ye_walk_068": {"cx": 300.0, "ground": 313, "height": 280, "width": 546}}};
const ye={x:510,y:390,face:-1,state:'wait',path:[],time:0,timer:.6,speed:55,after:null,walkTime:0,wait:0,repath:0,lastSpot:null};
npcCollider=ye;
function yeBlocked(x,y,avoidCat=true,actor=ye,ownKind=null){
  if(panoramaFurnitureBlocked(x,y))return true;
  if(actor?.walkOnly&&(x<EX0+95||x>EX0+EW-95))return true;
  if(puddleBlocked(x,y)||scratchBoardBlocked(x,y,actor))return true;
  if(stationBlocked(x,y,58,18,actor,ownKind))return true;
  if(x<GX0||x>GX1||y<GY0||y>GY1)return true;
  for(const o of OBST){const top=o.wall?0:o.y0-12;if(x>o.x0-38&&x<o.x1+38&&y>top&&y<o.y1+12)return true;}
  if(Math.abs(x-TOAST_CENTER.x)<TOAST.w/2+25&&Math.abs(y-TOAST_CENTER.y)<36)return true;
  for(const t of toys){
    if(t.held||t.carried||t.z>20)continue;
    if(((x-t.x)/(t.size*.42+20))**2+((y-t.y)/(t.size*.2+8))**2<1)return true;
  }
  if(avoidCat&&npcObstacles(actor).some(other=>pairDistance({x,y},other)<1))return true;
  return false;
}
function yeFreePoint(x,y,actor=ye){
  if(!yeBlocked(x,y,true,actor))return{x,y};
  let best=null,dist=Infinity;
  for(let i=0;i<N;i++){const xx=gx(i),yy=gy(i);if(yeBlocked(xx,yy,true,actor))continue;const d=(xx-x)**2+(yy-y)**2;if(d<dist){dist=d;best={x:xx,y:yy};}}
  return best;
}
function yeCanStep(a,b,actor=ye){
  if(!panoramaFurnitureStepClear(a,b))return false;
  if(actor?.walkOnly&&(b.x<EX0+95&&!(a.x<EX0+95&&b.x>a.x)||b.x>EX0+EW-95&&!(a.x>EX0+EW-95&&b.x<a.x)))return false;
  if(!puddleStepClear(a,b)||!scratchBoardStepClear(a,b,actor))return false;
  if(!stationStepClear(a,b,actor,58,18))return false;
  if(b.x<GX0||b.x>GX1||b.y<GY0||b.y>GY1)return false;
  for(const o of OBST){const top=o.wall?0:o.y0-12;if(!rectStepClear(a,b,o.x0-38,o.x1+38,top,o.y1+12))return false;}
  if(!rectStepClear(a,b,TOAST_CENTER.x-TOAST.w/2-25,TOAST_CENTER.x+TOAST.w/2+25,TOAST_CENTER.y-36,TOAST_CENTER.y+36))return false;
  const actors=toys.filter(t=>!t.held&&!t.carried&&t.z<=20).map(t=>({x:t.x,y:t.y,rx:t.size*.42+20,ry:t.size*.2+8}));
  if(!npcObstacles(actor).every(other=>pairCanStep(a,b,other)))return false;
  for(const o of actors){
    const before=((a.x-o.x)/o.rx)**2+((a.y-o.y)/o.ry)**2,after=((b.x-o.x)/o.rx)**2+((b.y-o.y)/o.ry)**2;
    if(after<1&&!(before<1&&after>before+1e-8))return false;
  }
  return true;
}
function yeLineClear(a,b,actor=ye){
  const n=Math.max(1,Math.ceil(Math.hypot(b.x-a.x,b.y-a.y)/3));let prev=a;
  for(let i=1;i<=n;i++){const t=i/n,p={x:a.x+(b.x-a.x)*t,y:a.y+(b.y-a.y)*t};if(!yeCanStep(prev,p,actor))return false;prev=p;}
  return true;
}
// The side-view Socks clip travels sideways or diagonally, never straight up/down.
function companionRouteClear(a,b,actor){return (actor?.id!=='socks'||Math.abs(b.x-a.x)+1e-6>=Math.abs(b.y-a.y)*.6)&&yeLineClear(a,b,actor);}
function yeFindPath(sx,sy,tx,ty,actor=ye){
 const target=yeFreePoint(tx,ty,actor);if(!target)return[];
 const origin={x:sx,y:sy};if(companionRouteClear(origin,target,actor))return[target];
 const cells=new Uint8Array(N);for(let i=0;i<N;i++)cells[i]=yeBlocked(gx(i),gy(i),true,actor)?1:0;
 const home=cellOf(sx,sy),hc=home%COLS,hr=Math.floor(home/COLS);let start=-1;
 for(let radius=0;radius<10&&start<0;radius++){
  const nearby=[];for(let dy=-radius;dy<=radius;dy++)for(let dx=-radius;dx<=radius;dx++){
   if(Math.max(Math.abs(dx),Math.abs(dy))!==radius)continue;const x=hc+dx,y=hr+dy;if(x<0||y<0||x>=COLS||y>=ROWS)continue;const i=y*COLS+x;if(!cells[i])nearby.push(i);
  }
  nearby.sort((a,b)=>Math.hypot(gx(a)-sx,gy(a)-sy)-Math.hypot(gx(b)-sx,gy(b)-sy));
  start=nearby.find(i=>companionRouteClear(origin,{x:gx(i),y:gy(i)},actor))??-1;
 }
 if(start<0)return[];const goal=nearestFree(cellOf(target.x,target.y),cells);
 const cost=new Float32Array(N).fill(Infinity),previous=new Int32Array(N).fill(-1),closed=new Uint8Array(N),heap=[];let endCell=goal;
 const heuristic=i=>Math.hypot(gx(i)-gx(goal),gy(i)-gy(goal))/CELL;
 const push=(i,f)=>{const item={i,f};let k=heap.length;heap.push(item);while(k>0){const p=(k-1)>>1;if(heap[p].f<=f)break;heap[k]=heap[p];k=p;}heap[k]=item;};
 const pop=()=>{const first=heap[0],last=heap.pop();if(heap.length){let k=0;while(k*2+1<heap.length){let n=k*2+1;if(n+1<heap.length&&heap[n+1].f<heap[n].f)n++;if(heap[n].f>=last.f)break;heap[k]=heap[n];k=n;}heap[k]=last;}return first.i;};
 cost[start]=0;push(start,heuristic(start));let found=false;
 while(heap.length){const current=pop();if(closed[current])continue;if(actor.id==='socks'?Math.hypot(gx(current)-target.x,gy(current)-target.y)<100&&companionRouteClear({x:gx(current),y:gy(current)},target,actor):current===goal){endCell=current;found=true;break;}closed[current]=1;const col=current%COLS,row=Math.floor(current/COLS);
  for(let dy=-1;dy<=1;dy++)for(let dx=-1;dx<=1;dx++){
   if(!dx&&!dy||actor.id==='socks'&&dx===0)continue;const x=col+dx,y=row+dy;if(x<0||y<0||x>=COLS||y>=ROWS)continue;const i=y*COLS+x;
   if(cells[i]||closed[i])continue;
   if(!companionRouteClear({x:gx(current),y:gy(current)},{x:gx(i),y:gy(i)},actor))continue;
   const last=previous[current],turnCost=actor.id==='socks'&&last>=0&&Math.sign(gx(current)-gx(last))!==dx?4:0;
   const next=cost[current]+(dx&&dy?Math.SQRT2:1)+turnCost;if(next<cost[i]){cost[i]=next;previous[i]=current;push(i,next+heuristic(i));}
  }
 }
 if(!found)return[];
 const raw=[];for(let i=endCell;i!==start;i=previous[i]){if(i<0)return[];raw.push({x:gx(i),y:gy(i)});}raw.reverse();raw.unshift({x:gx(start),y:gy(start)});
 if(companionRouteClear(raw.at(-1),target,actor))raw.push(target);
 const result=[];let from=origin,index=0;while(index<raw.length){let end=raw.length-1;while(end>index&&!companionRouteClear(from,raw[end],actor))end--;if(!companionRouteClear(from,raw[end],actor))return[];result.push(raw[end]);from=raw[end];index=end+1;}return result;
}

function yeMove(x,y,after,speed=55){
  const p=yeFreePoint(x,y);if(!p)return false;
  const path=yeFindPath(ye.x,ye.y,p.x,p.y);if(!path.length&&Math.hypot(ye.x-p.x,ye.y-p.y)>8)return false;
  ye.path=path;ye.goal=p;ye.after=after;ye.state='walk';ye.speed=speed;ye.repath=0;ye.wait=0;return true;
}
function trafficRank(actor){return actor===cat?0:actor===ye?1:actor===rabbit?2:3+extraNPCs.indexOf(actor);}
function trafficGoal(actor){
 if(actor.trafficYield)return actor.trafficYield.path[0]||null;
 if(actor.facilityCare?.door)return ['use','scratch','turnDoor'].includes(actor.facilityCare.phase)?null:actor.facilityCare.path[0]||doorDestination(actor.facilityCare);
 if(actor===cat&&actor.state==='hop')return {x:actor.hop.x1,y:actor.hop.y1};
 if(actor.facilityCare&&['enter','exit'].includes(actor.facilityCare.phase))return actor.facilityCare.phase==='enter'?LIT_IN:actor.facilityCare.slot;
 const care=actor.facilityCare;if(care&&(care.phase==='travel'||care.phase==='depart'))return care.path[0]||(care.phase==='depart'?care.departure:care.stage?care.access:care.slot);
 if(actor.path?.length&&['walk','chase','treat'].includes(actor.state))return actor.path[0];
 return actor.state==='walk'?(actor.walkGoal||actor.goal):null;
}
function trafficApproach(actor,goal){
 // Look just ahead of the moving body, not along a waypoint across the whole room.
 const dx=goal.x-actor.x,dy=goal.y-actor.y,d=Math.hypot(dx/CAT_PAIR.rx,dy/CAT_PAIR.ry),t=Math.min(1,1.4/(d||1));
 return {x:actor.x+dx*t,y:actor.y+dy*t};
}
function planYield(actor,blocker,goal){
 const offsets=[[0,-80],[0,80],[0,-130],[0,130],[-175,0],[175,0],[-120,-80],[120,-80],[-120,80],[120,80],[-200,-100],[200,-100],[-200,100],[200,100],[0,-190],[0,190]];
 const candidates=offsets.map(([x,y])=>({x:actor.x+x,y:actor.y+y})).filter(p=>!yeBlocked(p.x,p.y,true,actor)&&pairSegmentDistance(blocker,goal,p)>1.22).sort((a,b)=>Math.hypot(a.x-actor.x,a.y-actor.y)-Math.hypot(b.x-actor.x,b.y-actor.y));
 for(const target of candidates){const path=yeFindPath(actor.x,actor.y,target.x,target.y,actor);if(path.length&&Math.hypot(path.at(-1).x-target.x,path.at(-1).y-target.y)<4)return {target,path};}
 return null;
}
function requestNpcYield(actor,blocker,goal){
 const seatedViewer=actor?.tvVisit&&actor.state==='watchTV';
 const doorPriority=blocker?.facilityCare?.door&&['enterDoor','exitDoor','clearDoor'].includes(blocker.facilityCare.phase);
 if(!actor||protectedLitterExit(actor)||actor===cat&&!seatedViewer&&!doorPriority||actor.gatherSlot||!goal||sharedDining(actor,blocker)||!seatedViewer&&!doorPriority&&trafficRank(actor)<=trafficRank(blocker))return false;
 goal=trafficApproach(blocker,goal);
 if(pairSegmentDistance(blocker,goal,actor)>(blocker===cat?1.4:1.03))return false;
 const existing=actor.trafficYield;
 if(existing&&trafficRank(existing.blocker)<trafficRank(blocker))return true;
 if(existing&&existing.blocker===blocker){existing.holdUntil=facilityClock.time+1.4;existing.corridor={x:goal.x,y:goal.y};return true;}
 if(actor.facilityCare?.door){actor.facilityCare.path=[];actor.facilityCare.repath=0;}else if(actor.facilityCare){const kind=actor.facilityCare.kind;cancelFacility(actor);facilitySchedule(actor);actor.facilityDue[kind]=facilityClock.time+8;}
 releaseScratchBoard(actor);actor.after=null;actor.path=[];actor.routeQueue=[];actor.yieldResume=null;actor.act=null;
 actor.trafficYield={blocker,corridor:{x:goal.x,y:goal.y},path:[],target:null,repath:0,holdUntil:facilityClock.time+1.4};actor.state='yield';actor.timer=.1;
 actor.yieldCount=(actor.yieldCount||0)+1;if(blocker===cat)actor.playerYieldCount=(actor.playerYieldCount||0)+1;
 return true;
}
// Current Socks clip has continuous footfalls, including during head turns.
function companionMoveSpeed(actor,requested,urgent=false){return actor.id==='socks'?Math.min(requested,urgent?44:38):requested;}
function companionWalkStep(actor,dt,speed,distance){
 if(actor.id!=='socks')return {step:Math.min(distance,speed*dt)};
 const fps=actor.animation.fps,count=actor.animation.count;let time=actor.walkTime||0,remaining=dt*speed/84,step=0;
 while(remaining>1e-8){
  const frame=Math.floor((time+1e-8)*fps),index=((frame%count)+count)%count;
  const weight=1; // New clip keeps stepping while looking around.
  let span=Math.min(remaining,(frame+1)/fps-time);if(span<1e-8){time=(frame+1)/fps;continue;}
  if(weight&&step+84*weight*span>=distance){span=(distance-step)/(84*weight);step=distance;time+=span;break;}
  step+=84*weight*span;time+=span;remaining-=span;
 }
 return {step,time};
}
function updateTrafficYield(actor,dt){
 const yieldTo=actor.trafficYield;if(!yieldTo)return false;
 actor.time+=dt;yieldTo.repath-=dt;
 yieldTo.elapsed=(yieldTo.elapsed||0)+dt;
 if(yieldTo.elapsed>(actor.tvVisit?12:3.5)){
  allowTrafficPass(actor,yieldTo.blocker);releaseScratchBoard(actor);actor.trafficYield=null;actor.path=[];actor.goal=null;actor.state=actor===cat?'idle':'wait';actor.pose='sit';actor.timer=.2;actor.progressWatch=null;return true;
 }
 const blockerGoal=trafficGoal(yieldTo.blocker)||yieldTo.corridor;
 if(!yieldTo.target&&yieldTo.repath<=0){const plan=planYield(actor,yieldTo.blocker,blockerGoal);yieldTo.repath=.35;if(plan){yieldTo.target=plan.target;yieldTo.path=plan.path;}}
 const point=yieldTo.path[0];
 if(point){
  const dx=point.x-actor.x,dy=point.y-actor.y,d=Math.hypot(dx,dy),speed=companionMoveSpeed(actor,ownsTVVisit(actor)?(actor.id==='socks'?38:55):110,true),motion=companionWalkStep(actor,dt,speed,d),step=motion.step,next={x:actor.x+(d?dx/d*step:0),y:actor.y+(d?dy/d*step:0)};
  if(step===0||yeCanStep(actor,next,actor)&&yeLineClear(actor,next,actor)){actor.x=next.x;actor.y=next.y;if(Math.abs(dx)>.2)actor.face=dx<0?-1:1;actor.state='walk';actor.pose='walk';if(actor.id==='socks')actor.walkTime=motion.time;else actor.walkTime=(actor.walkTime||0)+dt*(ownsTVVisit(actor)?speed/(actor===ye?62:actor===rabbit?110:80):1.5);if(d<=step+.01)yieldTo.path.shift();}
  else{
   for(const other of [ye,rabbit,...extraNPCs])if(other!==actor&&trafficRank(other)>trafficRank(actor))requestNpcYield(other,actor,point);
   if(yieldTo.repath<=0){const plan=planYield(actor,yieldTo.blocker,blockerGoal);yieldTo.repath=.4;if(plan){yieldTo.target=plan.target;yieldTo.path=plan.path;}else{yieldTo.target=null;yieldTo.path=[];}}
  }
 }else{
  actor.state='yield';
  const active=trafficGoal(yieldTo.blocker),blocked=active&&pairSegmentDistance(yieldTo.blocker,active,actor)<1.55;
  if(!blocked&&facilityClock.time>=yieldTo.holdUntil){actor.trafficYield=null;actor.state=actor===cat?'idle':'wait';actor.pose='sit';actor.timer=1.5;actor.path=[];return false;}
  if(blocked&&yieldTo.target){yieldTo.target=null;yieldTo.repath=0;}
 }
 return true;
}
function trafficDestination(actor){
 if(assemblyGoal(actor))return assemblyGoal(actor);
 if(actor.facilityCare?.door)return doorDestination(actor.facilityCare);
 const care=actor.facilityCare;if(care)return care.phase==='depart'?care.departure:care.stage?care.access:care.slot;
 if(actor.trafficYield)return actor.trafficYield.target;
 return actor===cat?actor.walkGoal||actor.path?.at(-1):actor.goal||actor.path?.at(-1);
}
function rerouteTraffic(actor){
 const target=trafficDestination(actor);if(!target||actor.trafficYield||actor.state==='hop')return false;
 const path=actor===cat&&!actor.facilityCare?findPath(actor.x,actor.y,target.x,target.y):yeFindPath(actor.x,actor.y,target.x,target.y,actor);
 if(!path.length||Math.hypot(path.at(-1).x-target.x,path.at(-1).y-target.y)>6)return false;
 if(actor.facilityCare)actor.facilityCare.path=path;else actor.path=path;return true;
}
function allowTrafficPass(actor,other){
 if(roomPlan)return;
 if(assemblyGoal(actor)||assemblyGoal(other))return;
 if(pairPassing(actor,other))return;
 // Only this pair becomes soft after normal routing/yielding has had time to work.
 trafficPasses.push({a:actor,b:other,until:facilityClock.time+2});
 actor.passCount=(actor.passCount||0)+1;
}
function resolveTraffic(){
 const actors=[cat,ye,rabbit,...extraNPCs];
 for(let i=trafficPasses.length-1;i>=0;i--){const p=trafficPasses[i];if(facilityClock.time>p.until&&pairDistance(p.a,p.b)>1.65)trafficPasses.splice(i,1);}
 for(const actor of actors){
  if(actor.gatherSlot){actor.trafficWatch=null;continue;}
  let goal=trafficGoal(actor);if(!goal&&actor.trafficYield)goal=actor.trafficYield.corridor;if(goal)goal=trafficApproach(actor,goal);
  if(!goal){actor.trafficWatch=null;continue;}
  let watch=actor.trafficWatch;if(!watch||Math.hypot(actor.x-watch.x,actor.y-watch.y)>3){watch=actor.trafficWatch={x:actor.x,y:actor.y,since:facilityClock.time,repath:0};}
  let blockers=actors.filter(other=>other!==actor&&!pairPassing(actor,other)&&pairSegmentDistance(actor,goal,other)<1.35);
  if(blockers.length&&facilityClock.time>=watch.repath){watch.repath=facilityClock.time+.4;rerouteTraffic(actor);goal=trafficApproach(actor,trafficGoal(actor)||goal);blockers=actors.filter(other=>other!==actor&&!pairPassing(actor,other)&&pairSegmentDistance(actor,goal,other)<1.35);}
  for(const other of blockers)if(!actor.trafficYield)requestNpcYield(other,actor,goal);
  if(facilityClock.time-watch.since>.35){
   // Include nearby bodies when a yield planner cannot produce its first waypoint.
   const nearby=actors.filter(other=>other!==actor&&pairDistance(actor,other)<2.5);
   for(const other of [...new Set([...blockers,...nearby])])allowTrafficPass(actor,other);
   rerouteTraffic(actor);
   if(actor.trafficYield){actor.trafficYield.target=null;actor.trafficYield.path=[];actor.trafficYield.repath=0;}
   watch.since=facilityClock.time;
  }
 }
}

function yeTryYield(goal){let changed=false;for(const actor of [npcCollider,rabbitCollider,...extraNPCs])if(actor)changed=requestNpcYield(actor,cat,goal)||changed;return changed;}
function yeYieldOnly(goal){return requestNpcYield(ye,cat,goal);}
const YE_ROUTES=[
 {id:0,points:[[500,360],[360,355],[90,390]],action:'groom'},
 {id:1,points:[[90,390],[75,470],[65,610]],action:'lie'},
 {id:2,points:[[65,610],[52,656]],action:'eat'},
 {id:3,points:[[52,656],[60,780],[300,790]],action:'groom'},
 {id:4,points:[[300,790],[550,790]],action:'sleep'},
 {id:5,points:[[550,790],[360,690]],action:'lie'},
 {id:6,points:[[350,625],[500,470],[500,360]],action:'groom'},
 {id:7,points:[[500,470],[350,610],[300,790]],action:'sleep'},
 {id:8,points:[[90,390],[360,355],[500,470]],action:'lie'},
 {id:9,points:[[300,790],[52,656]],action:'eat'}
];
Object.assign(ye,{routeId:-1,routeQueue:[],routeAction:'lie',lastRoute:-1,recentRoutes:[],routeFailures:0,joinCooldown:0,wasBlackEating:false,wasFoodAvailable:false,yieldResume:null,yieldCooldown:0,mealsInRow:0,mealRetryAfter:0});
function yeArrive(){
  let action=ye.routeAction;
  if(!npcRestAllowed(ye)){yeChooseDestination();return;}
  if(action==='eat'&&Math.hypot(ye.x-52,ye.y-656)>55){ye.state='wait';ye.timer=.2;return;}
  if(action==='eat'&&npcObstacles(ye).some(other=>pairDistance({x:ye.x-24,y:ye.y+35},other)<1.03)){
    for(const p of [{x:42,y:656},{x:42,y:634},{x:60,y:626},{x:78,y:620}]){
      if(yeBlocked(p.x,p.y)||npcObstacles(ye).some(other=>pairDistance({x:p.x-24,y:p.y+35},other)<1.03))continue;
      if(yeMove(p.x,p.y,yeArrive,50))return;
    }
    ye.mealRetryAfter=ye.time+5;ye.state='wait';ye.timer=.3;return;
  }
  if(action==='eat'&&bowl.food<.25)bowl.food=1;
  ye.mealsInRow=action==='eat'?ye.mealsInRow+1:0;
  ye.state=action;ye.timer=action==='eat'?rand(7,11):action==='groom'?rand(5,11):action==='sleep'?rand(12,24):rand(7,15);
  ye.icon=action==='sleep'?'sleepy':action==='groom'?'content':'happy';ye.iconUntil=ye.time+ye.timer;
  if(action==='eat')ye.face=1;
}
function yeNextWaypoint(){
  while(ye.routeQueue.length){
    const [x,y]=ye.routeQueue.shift(),p=yeFreePoint(x,y);if(!p)continue;
    if(Math.hypot(p.x-ye.x,p.y-ye.y)<15)continue;
    if(yeMove(p.x,p.y,yeNextWaypoint,rand(48,66))){ye.routeFailures=0;return true;}
  }
  yeArrive();return false;
}
function yeStartRoute(route){
  if(route.action==='eat'){if(!beginFacility(ye,'eat')){ye.state='wait';ye.timer=1;}return;}
  if(route.action==='eat'&&bowl.food<.15)bowl.food=1;
  ye.routeId=route.id;ye.routeQueue=route.points.map(p=>[...p]);ye.routeAction=route.action;ye.after=null;ye.path=[];
  ye.lastRoute=route.id;ye.recentRoutes.push(route.id);if(ye.recentRoutes.length>3)ye.recentRoutes.shift();
  yeNextWaypoint();
}
function npcRestAllowed(p){return [BOWL,WATER].every(f=>((p.x-f.x)/170)**2+((p.y-f.y)/125)**2>1);}
function npcRoamDestination(actor){
 const zones=[];for(let row=0;row<4;row++)for(let col=0;col<4;col++)zones.push({id:row*4+col,x:GX0+(GX1-GX0)*(col+.5)/4,y:GY0+35+(GY1-GY0-65)*(row+.5)/4});
 actor.roamVisited=actor.roamVisited||[];
 actor.roamAvoid=(actor.roamAvoid||[]).filter(p=>p.until>facilityClock.time);
 const fresh=zones.filter(p=>!actor.roamVisited.includes(p.id));
 const revisits=zones.filter(p=>actor.roamVisited.includes(p.id)).sort((a,b)=>actor.roamVisited.indexOf(a.id)-actor.roamVisited.indexOf(b.id));
 // Prefer a different part of the room; recent failures cool down before retry.
 fresh.sort((a,b)=>Math.hypot(b.x-actor.x,b.y-actor.y)-Math.hypot(a.x-actor.x,a.y-actor.y));
 const shortlist=fresh.splice(0,Math.min(4,fresh.length));
 for(let i=shortlist.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[shortlist[i],shortlist[j]]=[shortlist[j],shortlist[i]];}
 for(const p of [...shortlist,...fresh,...revisits]){
  const target=yeFreePoint(p.x+rand(-18,18),p.y+rand(-12,12),actor);if(!target||!npcRestAllowed(target)||Math.hypot(target.x-actor.x,target.y-actor.y)<95||actor.roamAvoid.some(p=>Math.hypot(target.x-p.x,target.y-p.y)<75))continue;
  const path=yeFindPath(actor.x,actor.y,target.x,target.y,actor);if(!path.length||Math.hypot(path.at(-1).x-target.x,path.at(-1).y-target.y)>6)continue;
  actor.roamVisited=actor.roamVisited.filter(id=>id!==p.id);actor.roamVisited.push(p.id);while(actor.roamVisited.length>10)actor.roamVisited.shift();return {target,path};
 }
 return null;
}
function yeChooseDestination(){
 const plan=npcRoamDestination(ye);if(plan){ye.goal=plan.target;ye.path=plan.path;ye.after=yeArrive;ye.routeQueue=[];ye.routeAction=pick(['lie','groom','sleep']);ye.state='walk';ye.speed=rand(55,78);ye.wait=0;ye.repath=0;return;}
 ye.state='wait';ye.timer=.6;
}
function updateYe(dt){
 if(ownsTVVisit(ye))return;
 if(lift.actor===ye){ye.time+=dt;return;}
 if(updateGather(ye,dt))return;
  if(updateNpcFacilities(ye,dt))return;
  ye.time+=dt;ye.joinCooldown=Math.max(0,ye.joinCooldown-dt);ye.yieldCooldown=Math.max(0,ye.yieldCooldown-dt);
  if(ye.state==='yield'){ye.timer-=dt;if(ye.timer<=0){const resume=ye.yieldResume;ye.yieldResume=null;if(resume)resume();else yeChooseDestination();}return;}
  if(ye.time>=ye.iconUntil){ye.icon=pick(['happy','curious','sleepy','content'].filter(m=>m!==ye.icon));ye.iconUntil=ye.time+rand(8,22);}
  if(ye.state==='walk'){
    ye.repath=Math.max(0,ye.repath-dt);
    if(!ye.path.length){const f=ye.after;ye.after=null;ye.state='wait';ye.timer=.2;if(f)f();return;}
    const p=ye.path[0],dx=p.x-ye.x,dy=p.y-ye.y,d=Math.hypot(dx,dy),step=Math.min(d,ye.speed*dt);
    const next={x:ye.x+(d?dx/d*step:0),y:ye.y+(d?dy/d*step:0)};
    if(!yeCanStep(ye,next)||!yeLineClear(ye,next)){
      ye.wait+=dt;
      if(rabbitCollider&&ye.wait>.3)rabbitTryYield(ye,ye.goal||next);
      if(ye.repath<=0&&ye.goal){const path=yeFindPath(ye.x,ye.y,ye.goal.x,ye.goal.y);if(path.length)ye.path=path;ye.repath=.45;}
      return;
    }
    ye.wait=0;ye.x=next.x;ye.y=next.y;if(Math.abs(dx)>.2)ye.face=dx<0?-1:1;ye.walkTime+=dt*(ye.speed/62);
    if(d<=step+.01)ye.path.shift();return;
  }
  if(ye.state==='eat'){
    if(bowl.food<=.01)bowl.food=1;
    bowl.food=Math.max(0,bowl.food-dt/20);
  }
  ye.timer-=dt;if(ye.timer<=0)yeChooseDestination();
}
function drawNpcDigging(c,npc,meta,prefix,scale){
 const baseKey=prefix+'000',base=meta.frames[baseKey],still=IMG[baseKey];
 const frame=Math.floor(npc.time*8)%2?3:15,key=prefix+String(frame).padStart(3,'0'),m=meta.frames[key],moving=IMG[key];
 if(!base||!m||!still?.complete||!still.naturalWidth||!moving?.complete||!moving.naturalWidth)return;
 c.save();c.fillStyle='rgba(60,30,8,.14)';c.beginPath();c.ellipse(npc.x,npc.y,45,6,0,0,Math.PI*2);c.fill();
 c.translate(npc.x,npc.y);c.scale(npc.face<0?-scale:scale,scale);
 const paw={x:base.width*.15,y:-base.height*.35,w:base.width*.45,h:base.height*.35+6};
 // Keep head, body and hind legs steady; only the forepaws sweep sand backward.
 c.save();c.beginPath();c.rect(-still.naturalWidth,-still.naturalHeight,still.naturalWidth*2,still.naturalHeight*2);c.rect(paw.x,paw.y,paw.w,paw.h);c.clip('evenodd');c.drawImage(still,-base.cx,-base.ground);c.restore();
 c.save();c.beginPath();c.rect(paw.x,paw.y,paw.w,paw.h);c.clip();c.drawImage(moving,-m.cx,-m.ground);c.restore();c.restore();
}
const rabbitFeedCache=new Map();
function feedingContact(kind){const f=FACILITIES[kind];return {x:f.x,y:f.y-(kind==='eat'?16:30)};}
function rabbitFeedPoint(x,y,angle){
 const t=Math.max(0,Math.min(1,(x-280)/56)),u=Math.max(0,Math.min(1,(205-y)/44)),w=t*t*(3-2*t)*u*u*(3-2*u),dx=x-296,dy=y-185;
 return {x:x+(296+Math.cos(angle)*dx-Math.sin(angle)*dy-x)*w,y:y+(185+Math.sin(angle)*dx+Math.cos(angle)*dy-y)*w};
}
function feedingProfile(actor,kind,phase=0){
 if(actor===cat)return {dx:63.4,dy:kind==='drink'?-8.3:-1.3};
 if(actor===ye){const frame=phase%2,key='ye_eat_'+frame,mouth=frame?{x:443,y:313}:{x:445,y:305},scale=.43;return {key,mouth,scale,dx:(mouth.x-240)*scale,dy:(mouth.y-350)*scale};}
 const key='rabbit_rest_021',m=RABBIT_ANIMATION.frames[key],angle=.5+.035*Math.sin(phase*Math.PI/4),mouth=rabbitFeedPoint(356,161,angle),scale=rabbitSpriteScale(true,key);
 return {key,mouth,scale,angle,phase:phase%8,dx:(mouth.x-m.cx)*scale,dy:(mouth.y-m.ground)*scale};
}
function rabbitFeedingFrame(profile,im){
 if(rabbitFeedCache.has(profile.phase))return rabbitFeedCache.get(profile.phase);
 const canvas=document.createElement('canvas');canvas.width=im.naturalWidth;canvas.height=im.naturalHeight;const c=canvas.getContext('2d'),cols=20,rows=14,grid=[];
 for(let j=0;j<=rows;j++){const row=[];for(let i=0;i<=cols;i++)row.push(rabbitFeedPoint(i*canvas.width/cols,j*canvas.height/rows,profile.angle));grid.push(row);}
 for(let j=0;j<rows;j++)for(let i=0;i<cols;i++){
  const x=i*canvas.width/cols,y=j*canvas.height/rows,w=canvas.width/cols,h=canvas.height/rows,a={x,y},b={x:x+w,y},d={x,y:y+h},e={x:x+w,y:y+h};
  feedingTriangle(c,im,[a,b,e],[grid[j][i],grid[j][i+1],grid[j+1][i+1]]);feedingTriangle(c,im,[a,e,d],[grid[j][i],grid[j+1][i+1],grid[j+1][i]]);
 }
 rabbitFeedCache.set(profile.phase,canvas);return canvas;
}
function feedingTriangle(c,im,src,dst){
 const [p0,p1,p2]=src,[q0,q1,q2]=dst,a=p1.x-p0.x,b=p1.y-p0.y,d=p2.x-p0.x,e=p2.y-p0.y,det=a*e-b*d;
 if(Math.abs(det)<.00001)return;
 const A=((q1.x-q0.x)*e-(q2.x-q0.x)*b)/det,C=((q2.x-q0.x)*a-(q1.x-q0.x)*d)/det,B=((q1.y-q0.y)*e-(q2.y-q0.y)*b)/det,D=((q2.y-q0.y)*a-(q1.y-q0.y)*d)/det;
 c.save();const cx=(q0.x+q1.x+q2.x)/3,cy=(q0.y+q1.y+q2.y)/3,v=[q0,q1,q2].map(p=>{const r=Math.hypot(p.x-cx,p.y-cy)||1;return{x:p.x+(p.x-cx)/r*.35,y:p.y+(p.y-cy)/r*.35};});
 c.beginPath();c.moveTo(v[0].x,v[0].y);c.lineTo(v[1].x,v[1].y);c.lineTo(v[2].x,v[2].y);c.closePath();c.clip();c.transform(A,B,C,D,q0.x-A*p0.x-C*p0.y,q0.y-B*p0.x-D*p0.y);c.drawImage(im,0,0);c.restore();
}
function drawNpcFeeding(c,actor){
 const kind=actor.state,phase=Math.floor(actor.time*(kind==='drink'?5:3))%8,profile=feedingProfile(actor,kind,phase),im=IMG[profile.key];if(!im?.complete||!im.naturalWidth)return;
 const contact=actor.facilityCare?.slot.contact||feedingContact(kind),sprite=actor===rabbit?rabbitFeedingFrame(profile,im):im;
 c.save();c.fillStyle='rgba(60,30,8,.13)';c.beginPath();c.ellipse(actor.x,actor.y,actor===ye?56:45,6,0,0,Math.PI*2);c.fill();
 // Pin the calibrated muzzle to the food/water surface throughout the animation.
 c.translate(contact.x,contact.y);c.scale(actor.face<0?-profile.scale:profile.scale,profile.scale);c.drawImage(sprite,-profile.mouth.x,-profile.mouth.y);c.restore();
 if(kind==='drink'){const lick=Math.max(0,Math.sin(actor.time*11));if(lick>0){c.save();c.fillStyle='#e8798a';c.beginPath();c.ellipse(contact.x,contact.y+1.2,2,1+lick*2.2,0,0,Math.PI*2);c.fill();c.restore();}}
 drawYeMoodIcon(c,actor);
}

function drawYe(c){
 if(drawTVVisit(c,ye))return;
 if(ye.gatherSlot&&ye.state==='gatherSit'){drawGatherCat(c,ye);return;}
  if(['eat','drink'].includes(ye.state)&&ye.facilityCare?.phase==='use'){drawNpcFeeding(c,ye);return;}
  if(ye.state==='scratch'){drawNpcDigging(c,ye,YE_ANIMATION,'ye_walk_',108/YE_ANIMATION.walkHeight);drawYeMoodIcon(c);return;}
  const walking=ye.state==='walk'||ye.state==='wait'||ye.state==='yield'||ye.state==='lifted';let im,scale,ax,by;
  if(walking){const f=ye.state==='walk'?Math.floor((ye.walkingStill?0:ye.walkTime)*YE_ANIMATION.walk.fps)%YE_ANIMATION.walk.frames:0,key='ye_walk_'+String(f).padStart(3,'0'),m=YE_ANIMATION.frames[key];im=IMG[key];scale=108/YE_ANIMATION.walkHeight;ax=m.cx;by=m.ground;}
  else{const kind=ye.state==='sleep'?'lie':ye.state==='drink'?'eat':ye.state==='litter'?'groom':ye.state,index=ye.state==='sleep'?1:Math.floor(ye.time*(kind==='groom'?1.3:.65))%2;im=IMG['ye_'+kind+'_'+index];scale=.43;ax=240;by=350;}
  if(!im||!im.complete||!im.naturalWidth)return;
  c.save();c.fillStyle='rgba(60,30,8,.14)';c.beginPath();c.ellipse(ye.x,ye.y,56,7,0,0,Math.PI*2);c.fill();
  const breath=walking?1:1+Math.sin(ye.time*1.8)*.009;
  c.translate(ye.x,ye.y-(ye.z||0));c.scale(ye.face<0?-scale:scale,scale*breath);c.drawImage(im,-ax,-by);c.restore();
  drawYeMoodIcon(c);
}

function catMood(npc){
 if(npc.state==='watchTV')return 'content';
 if(npc.disgustUntil>facilityClock.time||npc===cat&&(npc.state==='ask'||npc.meowPop>0))return null;
 if(lift.actor===npc||npc.state==='lifted')return 'surprised';
 if(npc.trafficYield||npc.state==='yield')return 'sheepish';
 if(npc.state==='walk'&&npc.wait>.3)return 'puzzled';
 if(['eat','drink'].includes(npc.state)||npc.facilityCare?.phase==='use'&&npc.facilityCare.kind!=='litter')return 'nom';
 if(['scratch','scratchPad'].includes(npc.state))return 'smug';
 if(['marking','litter'].includes(npc.state))return 'relieved';
 if(npc.state==='gatherSit'||npc.pose==='petsit'||npc.pose==='belly')return 'love';
 if(npc.carry||['chase','treat'].includes(npc.state)||['swat','crouch','proud'].includes(npc.pose))return 'playful';
 if(['sleep','rest','floorRest'].includes(npc.state)||npc.pose==='sleep')return 'sleepy';
 if(['groom','lie'].includes(npc.state)||['loaf','loafVideo','toastsit','sun'].includes(npc.pose))return 'content';
 return npc.icon||'curious';
}
function drawGatherMoodIcons(c){
 for(const actor of [cat,ye,rabbit,...extraNPCs])if(actor.gatherSlot&&actor.state==='gatherSit')drawYeMoodIcon(c,actor,true);
}
function drawYeMoodIcon(c,npc=ye,overlay=false){
 if(npc.state==='watchTV'||ownsTVVisit(npc))return; // Only dedicated black-cat/owner reactions during the whole TV visit.
 const gathered=npc.gatherSlot&&npc.state==='gatherSit';if(gathered&&!overlay)return;
 const mood=catMood(npc);if(!mood)return;
 const resting=['lie','sleep','rest','floorRest'].includes(npc.state)||['loaf','loafVideo','toastsit','sleep','sun','belly'].includes(npc.pose);
 const x=npc.x+(gathered||npc.state==='groom'?0:(npc.face||1)*(npc.iconOffset||80)),height=gathered?177:npc.state==='groom'?150:resting?(npc.restIconHeight||90):(npc.standIconHeight||120),y=npc.y-(npc.z||0)-height+Math.sin(npc.time*1.8)*1.2;
 const soft=['sleepy','content','relieved'].includes(mood),pink=['love','sheepish'].includes(mood);
 c.save();c.translate(x,y);c.lineCap='round';c.lineJoin='round';
 // Draw the expressive cat-face icon directly, without a bubble or speech tail.
 c.fillStyle=pink?'#ffd7cd':soft?'#eadeca':'#ffe0a0';c.strokeStyle='#96704e';c.lineWidth=.9;
 c.beginPath();c.moveTo(-8,-5);c.lineTo(-8.5,-11);c.lineTo(-3.5,-8.5);c.quadraticCurveTo(0,-10,3.5,-8.5);c.lineTo(8.5,-11);c.lineTo(8,-5);c.arc(0,0,10,-.55,Math.PI+.55);c.closePath();c.fill();c.stroke();
 c.fillStyle=pink?'#ed9e9d':'#eab18b';for(const dx of [-6,6]){c.beginPath();c.ellipse(dx,2.8,2.1,1.1,0,0,Math.PI*2);c.fill();}
 c.strokeStyle='#634b3b';c.fillStyle='#634b3b';c.lineWidth=1.35;
 const line=(x1,y1,x2,y2)=>{c.beginPath();c.moveTo(x1,y1);c.lineTo(x2,y2);c.stroke();};
 const curve=(x1,y1,cx,cy,x2,y2)=>{c.beginPath();c.moveTo(x1,y1);c.quadraticCurveTo(cx,cy,x2,y2);c.stroke();};
 const dot=(x,y,r=1.15)=>{c.beginPath();c.arc(x,y,r,0,Math.PI*2);c.fill();};
 if(mood==='love'){
  c.fillStyle='#ce637e';for(const dx of [-3.6,3.6]){c.beginPath();c.moveTo(dx,1);c.bezierCurveTo(dx-5,-2,dx-2.8,-5,dx,-2.8);c.bezierCurveTo(dx+2.8,-5,dx+5,-2,dx,1);c.fill();}
 }else if(mood==='playful'){
  for(const dx of [-3.6,3.6]){line(dx-1.7,0,dx,-2);line(dx,-2,dx+1.7,0);}
 }else if(mood==='sheepish'){
  curve(-5,-1,-3,-3,-1.5,-1);curve(1.5,-1,3,-3,5,-1);
 }else if(mood==='smug'){
  line(-5,-2,-2,-1);line(2,-1,5,-2);
 }else if(soft){
  for(const dx of [-3.6,3.6])curve(dx-1.6,-1,dx,.8,dx+1.6,-1);
 }else if(mood==='puzzled'){
  dot(-3.6,-1);line(2,-1,5,-1);line(-5,-4,-2,-5);line(2,-5,5,-3.8);
 }else{dot(-3.6,-1.4,mood==='surprised'?1.6:1.15);dot(3.6,-1.4,mood==='surprised'?1.6:1.15);}
 c.fillStyle='#634b3b';
 if(['curious','surprised'].includes(mood)){c.beginPath();c.ellipse(0,4,1.5,mood==='surprised'?2.2:1.4,0,0,Math.PI*2);c.stroke();if(mood==='curious')line(-5,-4.5,-2,-5.5);}
 else if(mood==='sleepy')line(-1.5,4,1.5,4);
 else if(mood==='sheepish'||mood==='puzzled')curve(-2.5,4,0,2,2.5,4);
 else if(mood==='nom'||mood==='playful'){
  c.beginPath();c.moveTo(-3.5,2.5);c.quadraticCurveTo(0,8,3.5,2.5);c.closePath();c.fill();c.fillStyle='#df8e96';c.beginPath();c.ellipse(1,4.5,1.8,1.1,-.2,0,Math.PI*2);c.fill();
 }else if(mood==='smug')curve(-2,4,1.5,5.5,4,2.2);
 else curve(-3,2.7,0,6.5,3,2.7);
 if(mood==='sheepish'){c.fillStyle='#8ab9cc';c.beginPath();c.moveTo(9,-8);c.quadraticCurveTo(15,-1,10,0);c.quadraticCurveTo(7,-1,9,-8);c.fill();}
 if(mood==='sleepy'){c.strokeStyle='#947b60';c.lineWidth=1.2;line(9,-12,13,-12);line(13,-12,9,-8);line(9,-8,13,-8);}
 if(mood==='playful'||mood==='smug'){c.strokeStyle='#d29a42';c.lineWidth=1.3;line(12,-10,12,-4);line(9,-7,15,-7);}
 c.restore();
}
function initializeCharacters(){
  let black=null;
  for(let i=0;i<400;i++){const p={x:rand(GX0+33,GX1-33),y:rand(355,H-55)};if(!yeBlocked(p.x,p.y,false)){black=p;break;}}
  if(!black)black=yeFreePoint(480,420);
  Object.assign(cat,{x:black.x,y:black.y,face:pick([-1,1]),state:'timed',pose:pick(['sit','loaf','look']),timer:rand(1.2,5),time:rand(0,15)});
  cat.act=cat.pose==='loaf'?'loaf':'look';videoWalkTime=rand(0,VIDEO_WALK.duration);
  let npc=null;
  for(let i=0;i<400;i++){const p={x:rand(GX0+33,GX1-33),y:rand(355,H-55)};if(!yeBlocked(p.x,p.y)&&Math.hypot(p.x-cat.x,p.y-cat.y)>180){npc=p;break;}}
  if(!npc){let distance=-1;for(let i=0;i<N;i++){const x=gx(i),y=gy(i),d=Math.hypot(x-cat.x,y-cat.y);if(!yeBlocked(x,y)&&d>distance){distance=d;npc={x,y};}}}
  Object.assign(ye,{x:npc.x,y:npc.y,face:pick([-1,1]),state:'wait',path:[],timer:rand(.2,4),time:rand(0,15),walkTime:rand(0,YE_ANIMATION.walk.duration),icon:pick(['happy','curious','sleepy','content'])});
  ye.iconUntil=ye.time+rand(8,22);
}
initializeCharacters();

/* ---------- camera: room fills the screen, 黑屁屁 stays in the clear area ---------- */
let VW=innerWidth,VH=innerHeight,DPR=1,safeTop=0,safeBot=VH;
const cam={x:0,y:0,s:1,zoom:1,zt:1,init:false};
function roomBaseScale(width,height){const desktop=document.documentElement.getAttribute('data-layout')==='desktop';return Math.min(width/(desktop?W:900),height/H,desktop?.65:Infinity);}
function resizeRoomBounds(width,height){
 const scale=roomBaseScale(width,height),visibleWidth=width/scale,left=(W-visibleWidth)/2;
 const desktop=document.documentElement.getAttribute('data-layout')==='desktop',backgroundHeight=desktop?Math.max(2100,Math.ceil(height/scale-EY0+64)):2100;
 // Avoid oversized GPU textures on 4K/ultrawide displays while preserving world scale.
 const rasterScale=desktop?Math.min(1.4,8192/visibleWidth,8192/backgroundHeight,Math.sqrt(16000000/(visibleWidth*backgroundHeight))):1.4;
 const horizontalChanged=Math.abs(left-EX0)>=.05||Math.abs(visibleWidth-EW)>=.05;
 if(!horizontalChanged&&EH===backgroundHeight&&Math.abs(BGS-rasterScale)<1e-6)return;
 EH=backgroundHeight;BGS=rasterScale;
 if(horizontalChanged){EX0=left;EW=visibleWidth;if(!applyHomeLayout()){GX0=EX0+42;GX1=EX0+EW-42;COLS=Math.floor((GX1-GX0)/CELL)+1;N=COLS*ROWS;grid=new Uint8Array(N);for(let i=0;i<N;i++)grid[i]=blockedPt(gx(i),gy(i))?1:0;}}
 bg.width=Math.ceil(EW*BGS);bg.height=Math.ceil(EH*BGS);paintRoom();
 if(!horizontalChanged)return;
 for(const actor of [cat,npcCollider,rabbitCollider,...extraNPCs]){if(actor?.scratchBoard!=null){releaseScratchBoard(actor);actor.path=[];actor.state='wait';actor.timer=.5;}if(!actor||!yeBlocked(actor.x,actor.y,false,actor))continue;const safe=yeFreePoint(Math.max(GX0,Math.min(GX1,actor.x)),actor.y,actor);if(safe){actor.x=safe.x;actor.y=safe.y;actor.path=[];if(actor.facilityCare)cancelFacility(actor);}}
}
function measure(){
  VW=cv.clientWidth;VH=cv.clientHeight;DPR=Math.min(3,window.devicePixelRatio||1);
  cv.width=Math.round(VW*DPR);cv.height=Math.round(VH*DPR);
  const box=cv.getBoundingClientRect(),scale=box.width/VW;safeTop=(hudEl.getBoundingClientRect().bottom-box.top)/scale;safeBot=(toolsEl.getBoundingClientRect().top-box.top)/scale;
  resizeRoomBounds(VW,Math.max(140,safeBot-safeTop));
}
new ResizeObserver(measure).observe(hudEl);new ResizeObserver(measure).observe(toolsEl);
addEventListener('resize',measure);measure();
const cameraSelection={mode:'overview',target:'cat'};
function cameraActors(){return [{id:'cat',name:catName,actor:cat},{id:'ye',name:'爺',actor:ye},{id:'rabbit',name:'小兔子',actor:rabbit},...extraNPCs.map(actor=>({id:actor.id,name:actor.name,actor}))];}
function cameraSubject(){return cameraActors().find(e=>e.id===cameraSelection.target)?.actor||cat;}
function selectCamera(id){
 cameraSelection.mode=id?'close':'overview';if(id)cameraSelection.target=id;cam.zoom=1;
 const close=cameraSelection.mode==='close';cam.zt=close?2.2:1;
 bOverview.setAttribute('aria-pressed',String(!close));cameraPicker.classList.toggle('active',close);
 cameraTarget.value=close?cameraSelection.target:'';if(id&&id!=='cat'){const actor=cameraSubject();npcMeow(actor,true);}
}
function updateCam(dt){
 const f=cam.init?1-Math.exp(-5*dt):1,sh=Math.max(140,safeBot-safeTop),close=cameraSelection.mode==='close';
 const subject=cameraSubject(),padding=0;
 const manual=cameraSelection.mode==='manual',base=roomBaseScale(VW,sh);
  const s=manual?base*cam.zoom:close?Math.max(VW/W,Math.min(sh/290,VW/400)):base;
 const cx=manual?cam.manualX:close?subject.x:W/2;
 const cy=manual?cam.manualY:close?subject.y-(subject.z||0)-(subject===cat&&cat.pose==='belly'?45:60):H/2;
 let x=cx-VW/2/s,y=cy-(safeTop+safeBot)/2/s;
 {const visibleW=VW/s,visibleH=sh/s;x=visibleW<EW?Math.max(EX0,Math.min(EX0+EW-visibleW,x)):EX0+(EW-visibleW)/2;const top=visibleH<H?Math.max(0,Math.min(H-visibleH,cy-visibleH/2)):0;y=top-safeTop/s;}
 if(!manual)cam.zoom=s/base;cam.s=s;cam.x=manual?x:lerp(cam.x,x,f);cam.y=manual?y:lerp(cam.y,y,f);cam.init=true;
}
const bOverview=document.getElementById('bOverview'),cameraTarget=document.getElementById('cameraTarget'),cameraPicker=cameraTarget.closest('label');
bOverview.onclick=()=>selectCamera('');cameraTarget.onchange=()=>selectCamera(cameraTarget.value);
// Select remains data driven, so future NPCs can join the same menu.
function refreshCameraOptions(){
 const selected=cameraTarget.value;
 for(const entry of cameraActors()){let option=Array.from(cameraTarget.options).find(o=>o.value===entry.id);if(!option){option=document.createElement('option');option.value=entry.id;cameraTarget.appendChild(option);}option.textContent=entry.name;}
 cameraTarget.value=selected;
}

/* ---------- rabbit NPC ---------- */
const RABBIT_ANIMATION={"frames":{"rabbit_rest_000":{"cx":217.0,"ground":239,"height":150,"width":399},"rabbit_rest_001":{"cx":216.0,"ground":238,"height":149,"width":397},"rabbit_rest_002":{"cx":216.0,"ground":236,"height":147,"width":397},"rabbit_rest_003":{"cx":217.0,"ground":236,"height":147,"width":395},"rabbit_rest_004":{"cx":216.5,"ground":234,"height":145,"width":396},"rabbit_rest_005":{"cx":216.0,"ground":233,"height":144,"width":397},"rabbit_rest_006":{"cx":216.0,"ground":233,"height":145,"width":397},"rabbit_rest_007":{"cx":215.5,"ground":233,"height":146,"width":398},"rabbit_rest_008":{"cx":214.5,"ground":233,"height":146,"width":398},"rabbit_rest_009":{"cx":214.0,"ground":232,"height":145,"width":399},"rabbit_rest_010":{"cx":213.0,"ground":232,"height":145,"width":399},"rabbit_rest_011":{"cx":212.0,"ground":232,"height":145,"width":399},"rabbit_rest_012":{"cx":211.5,"ground":232,"height":146,"width":398},"rabbit_rest_013":{"cx":211.0,"ground":232,"height":146,"width":399},"rabbit_rest_014":{"cx":210.0,"ground":232,"height":146,"width":399},"rabbit_rest_015":{"cx":209.0,"ground":231,"height":145,"width":399},"rabbit_rest_016":{"cx":208.0,"ground":231,"height":145,"width":399},"rabbit_rest_017":{"cx":207.5,"ground":231,"height":145,"width":398},"rabbit_rest_018":{"cx":207.0,"ground":231,"height":144,"width":397},"rabbit_rest_019":{"cx":208.0,"ground":231,"height":143,"width":395},"rabbit_rest_020":{"cx":209.5,"ground":231,"height":142,"width":390},"rabbit_rest_021":{"cx":210.5,"ground":231,"height":140,"width":388},"rabbit_rest_022":{"cx":211.0,"ground":231,"height":139,"width":385},"rabbit_rest_023":{"cx":212.5,"ground":232,"height":140,"width":384},"rabbit_rest_024":{"cx":211.5,"ground":232,"height":140,"width":382},"rabbit_rest_025":{"cx":213.0,"ground":231,"height":137,"width":389},"rabbit_rest_026":{"cx":216.0,"ground":231,"height":131,"width":395},"rabbit_rest_027":{"cx":220.0,"ground":230,"height":122,"width":399},"rabbit_rest_028":{"cx":223.5,"ground":229,"height":115,"width":400},"rabbit_rest_029":{"cx":225.5,"ground":229,"height":114,"width":402},"rabbit_rest_030":{"cx":225.0,"ground":230,"height":115,"width":403},"rabbit_rest_031":{"cx":223.5,"ground":230,"height":117,"width":404},"rabbit_rest_032":{"cx":220.5,"ground":231,"height":120,"width":404},"rabbit_rest_033":{"cx":218.5,"ground":231,"height":124,"width":404},"rabbit_rest_034":{"cx":216.5,"ground":231,"height":127,"width":404},"rabbit_rest_035":{"cx":215.5,"ground":231,"height":131,"width":404},"rabbit_rest_036":{"cx":214.5,"ground":230,"height":133,"width":404},"rabbit_rest_037":{"cx":213.0,"ground":230,"height":136,"width":401},"rabbit_rest_038":{"cx":211.5,"ground":230,"height":139,"width":398},"rabbit_rest_039":{"cx":212.5,"ground":230,"height":142,"width":400},"rabbit_rest_040":{"cx":215.0,"ground":230,"height":145,"width":405},"rabbit_rest_041":{"cx":215.5,"ground":230,"height":147,"width":408},"rabbit_walk_000":{"cx":237.5,"ground":245,"height":161,"width":259},"rabbit_walk_001":{"cx":234.5,"ground":246,"height":160,"width":261},"rabbit_walk_002":{"cx":242.5,"ground":246,"height":155,"width":249},"rabbit_walk_003":{"cx":247.5,"ground":246,"height":155,"width":243},"rabbit_walk_004":{"cx":247.5,"ground":246,"height":157,"width":243},"rabbit_walk_005":{"cx":245.5,"ground":246,"height":158,"width":243},"rabbit_walk_006":{"cx":243.5,"ground":246,"height":158,"width":251},"rabbit_walk_007":{"cx":240.5,"ground":246,"height":158,"width":261},"rabbit_walk_008":{"cx":237.5,"ground":246,"height":157,"width":267},"rabbit_walk_009":{"cx":241.5,"ground":246,"height":152,"width":259},"rabbit_walk_010":{"cx":248.5,"ground":246,"height":149,"width":245},"rabbit_walk_011":{"cx":248.5,"ground":246,"height":152,"width":245},"rabbit_walk_012":{"cx":245.5,"ground":243,"height":152,"width":247},"rabbit_walk_013":{"cx":245.5,"ground":246,"height":156,"width":247},"rabbit_walk_014":{"cx":242.5,"ground":246,"height":156,"width":257},"rabbit_walk_015":{"cx":238.5,"ground":246,"height":157,"width":265},"rabbit_walk_016":{"cx":239.5,"ground":246,"height":154,"width":263},"rabbit_walk_017":{"cx":249.5,"ground":246,"height":149,"width":247},"rabbit_walk_018":{"cx":251.5,"ground":246,"height":149,"width":247},"rabbit_walk_019":{"cx":250.5,"ground":246,"height":153,"width":245},"rabbit_walk_020":{"cx":247.5,"ground":246,"height":154,"width":251},"rabbit_walk_021":{"cx":244.5,"ground":246,"height":155,"width":261},"rabbit_walk_022":{"cx":241.5,"ground":246,"height":156,"width":271},"rabbit_walk_023":{"cx":238.5,"ground":246,"height":156,"width":273},"rabbit_walk_024":{"cx":246.5,"ground":246,"height":152,"width":257},"rabbit_walk_025":{"cx":253.5,"ground":246,"height":149,"width":247},"rabbit_walk_026":{"cx":252.5,"ground":246,"height":151,"width":249},"rabbit_walk_027":{"cx":251.5,"ground":244,"height":151,"width":247},"rabbit_walk_028":{"cx":248.5,"ground":243,"height":150,"width":253},"rabbit_walk_029":{"cx":245.5,"ground":244,"height":152,"width":263},"rabbit_walk_030":{"cx":240.5,"ground":244,"height":152,"width":273},"rabbit_walk_031":{"cx":241.5,"ground":244,"height":149,"width":267},"rabbit_walk_032":{"cx":252.5,"ground":244,"height":145,"width":249},"rabbit_walk_033":{"cx":252.5,"ground":244,"height":148,"width":249},"rabbit_walk_034":{"cx":251.5,"ground":243,"height":150,"width":247},"rabbit_walk_035":{"cx":247.5,"ground":244,"height":153,"width":247},"rabbit_walk_036":{"cx":243.5,"ground":245,"height":155,"width":251},"rabbit_walk_037":{"cx":240.5,"ground":246,"height":157,"width":261},"rabbit_walk_038":{"cx":237.5,"ground":246,"height":156,"width":263},"rabbit_walk_039":{"cx":246.5,"ground":246,"height":152,"width":249},"rabbit_walk_040":{"cx":249.5,"ground":246,"height":153,"width":243},"rabbit_walk_041":{"cx":247.5,"ground":246,"height":157,"width":239},"rabbit_walk_042":{"cx":244.5,"ground":246,"height":161,"width":237},"rabbit_walk_043":{"cx":239.5,"ground":246,"height":162,"width":243},"rabbit_walk_044":{"cx":236.5,"ground":246,"height":162,"width":257},"rabbit_walk_045":{"cx":237.5,"ground":246,"height":161,"width":259},"rabbit_walk_046":{"cx":241.5,"ground":246,"height":157,"width":231},"rabbit_walk_047":{"cx":242.5,"ground":246,"height":157,"width":229},"rabbit_walk_048":{"cx":242.5,"ground":245,"height":160,"width":229},"rabbit_walk_049":{"cx":240.5,"ground":244,"height":161,"width":229},"rabbit_walk_050":{"cx":238.5,"ground":245,"height":162,"width":233},"rabbit_walk_051":{"cx":234.5,"ground":246,"height":165,"width":241},"rabbit_walk_052":{"cx":235.5,"ground":246,"height":164,"width":259},"rabbit_walk_053":{"cx":235.5,"ground":246,"height":162,"width":259},"rabbit_walk_054":{"cx":239.5,"ground":246,"height":157,"width":235},"rabbit_walk_055":{"cx":243.5,"ground":246,"height":155,"width":239},"rabbit_walk_056":{"cx":243.5,"ground":246,"height":156,"width":239},"rabbit_walk_057":{"cx":242.5,"ground":246,"height":157,"width":241},"rabbit_walk_058":{"cx":240.5,"ground":246,"height":156,"width":249},"rabbit_walk_059":{"cx":236.5,"ground":246,"height":157,"width":257},"rabbit_walk_060":{"cx":233.5,"ground":246,"height":157,"width":267},"rabbit_walk_061":{"cx":233.5,"ground":246,"height":155,"width":263},"rabbit_walk_062":{"cx":245.5,"ground":246,"height":150,"width":243},"rabbit_walk_063":{"cx":247.5,"ground":246,"height":150,"width":243},"rabbit_walk_064":{"cx":248.5,"ground":246,"height":153,"width":245},"rabbit_walk_065":{"cx":247.5,"ground":244,"height":151,"width":247},"rabbit_walk_066":{"cx":245.5,"ground":246,"height":154,"width":255},"rabbit_walk_067":{"cx":242.5,"ground":246,"height":155,"width":265},"rabbit_walk_068":{"cx":240.5,"ground":246,"height":155,"width":269},"rabbit_walk_069":{"cx":244.5,"ground":246,"height":152,"width":261},"rabbit_walk_070":{"cx":251.5,"ground":246,"height":148,"width":247},"rabbit_walk_071":{"cx":252.5,"ground":246,"height":151,"width":249},"rabbit_walk_072":{"cx":251.5,"ground":246,"height":154,"width":247},"rabbit_walk_073":{"cx":248.5,"ground":246,"height":155,"width":253},"rabbit_walk_074":{"cx":244.5,"ground":246,"height":156,"width":265},"rabbit_walk_075":{"cx":240.5,"ground":246,"height":156,"width":273},"rabbit_walk_076":{"cx":240.5,"ground":246,"height":154,"width":273},"rabbit_walk_077":{"cx":251.5,"ground":246,"height":150,"width":251},"rabbit_walk_078":{"cx":253.5,"ground":246,"height":149,"width":247},"rabbit_walk_079":{"cx":252.5,"ground":245,"height":152,"width":249},"rabbit_walk_080":{"cx":251.5,"ground":245,"height":153,"width":251},"rabbit_walk_081":{"cx":247.5,"ground":246,"height":155,"width":259},"rabbit_walk_082":{"cx":243.5,"ground":246,"height":156,"width":267},"rabbit_walk_083":{"cx":242.5,"ground":246,"height":155,"width":269},"rabbit_walk_084":{"cx":250.5,"ground":246,"height":152,"width":249},"rabbit_walk_085":{"cx":253.5,"ground":246,"height":150,"width":247},"rabbit_walk_086":{"cx":252.5,"ground":247,"height":155,"width":245},"rabbit_walk_087":{"cx":249.5,"ground":247,"height":158,"width":247},"rabbit_walk_088":{"cx":246.5,"ground":247,"height":160,"width":257},"rabbit_walk_089":{"cx":242.5,"ground":247,"height":161,"width":265},"rabbit_walk_090":{"cx":240.5,"ground":246,"height":159,"width":265},"rabbit_walk_091":{"cx":250.5,"ground":246,"height":155,"width":241},"rabbit_walk_092":{"cx":251.5,"ground":246,"height":154,"width":243},"rabbit_walk_093":{"cx":250.5,"ground":245,"height":156,"width":241},"rabbit_walk_094":{"cx":249.5,"ground":245,"height":158,"width":243},"rabbit_walk_095":{"cx":245.5,"ground":246,"height":161,"width":251},"rabbit_walk_096":{"cx":241.5,"ground":246,"height":162,"width":259},"rabbit_walk_097":{"cx":241.5,"ground":246,"height":163,"width":267},"rabbit_walk_098":{"cx":244.5,"ground":246,"height":160,"width":249},"rabbit_walk_099":{"cx":250.5,"ground":246,"height":157,"width":241},"rabbit_walk_100":{"cx":250.5,"ground":246,"height":160,"width":241},"rabbit_walk_101":{"cx":248.5,"ground":246,"height":162,"width":241},"rabbit_walk_102":{"cx":244.5,"ground":246,"height":164,"width":249},"rabbit_walk_103":{"cx":239.5,"ground":246,"height":166,"width":259},"rabbit_walk_104":{"cx":235.5,"ground":246,"height":168,"width":267},"rabbit_walk_105":{"cx":233.5,"ground":246,"height":167,"width":271},"rabbit_walk_106":{"cx":238.5,"ground":246,"height":163,"width":261},"rabbit_walk_107":{"cx":250.5,"ground":246,"height":166,"width":241},"rabbit_walk_108":{"cx":248.5,"ground":245,"height":170,"width":241},"rabbit_walk_109":{"cx":245.5,"ground":246,"height":174,"width":239},"rabbit_walk_110":{"cx":243.5,"ground":246,"height":177,"width":239},"rabbit_walk_111":{"cx":239.5,"ground":246,"height":178,"width":247},"rabbit_walk_112":{"cx":238.5,"ground":246,"height":176,"width":261},"rabbit_walk_113":{"cx":236.5,"ground":246,"height":172,"width":257},"rabbit_walk_114":{"cx":246.5,"ground":246,"height":170,"width":241},"rabbit_walk_115":{"cx":247.5,"ground":246,"height":173,"width":239},"rabbit_walk_116":{"cx":246.5,"ground":246,"height":175,"width":237},"rabbit_walk_117":{"cx":244.5,"ground":246,"height":176,"width":237},"rabbit_walk_118":{"cx":242.5,"ground":246,"height":178,"width":245},"rabbit_walk_119":{"cx":240.5,"ground":246,"height":178,"width":257}},"walk":{"frames":120,"fps":12,"duration":10.0,"height":156.0,"width":249.0},"rest":{"frames":42,"fps":12.0,"duration":3.5,"height":143.5,"width":399.0}};
const rabbit={id:'rabbit',scratchDue:facilityClock.time+rand(18,34),scratchTime:0,name:'小兔子',x:500,y:790,face:1,state:'wait',path:[],time:0,timer:1,speed:120,walkTime:0,restTime:0,trips:0,recentSpots:[],wait:0,repath:0,yieldCooldown:0,yieldResume:null,icon:'curious',iconUntil:8,iconOffset:50,standIconHeight:118,restIconHeight:63};
rabbitCollider=rabbit;
const RABBIT_SPOTS=[[90,390],[340,355],[500,365],[500,470],[85,460],[65,610],[320,620],[350,690],[300,790],[550,790]];
function rabbitMove(x,y){
  const p=yeFreePoint(x,y,rabbit);if(!p)return false;
  const path=yeFindPath(rabbit.x,rabbit.y,p.x,p.y,rabbit);if(!path.length||Math.hypot(p.x-rabbit.x,p.y-rabbit.y)<12)return false;
  rabbit.goal=p;rabbit.path=path;rabbit.state='walk';rabbit.speed=rand(105,142);rabbit.wait=0;rabbit.repath=0;rabbit.icon=pick(['happy','curious']);rabbit.iconUntil=rabbit.time+rand(5,10);return true;
}
function rabbitRest(){
  if(!npcRestAllowed(rabbit)){rabbitChooseDestination();return;}
  rabbit.state='rest';rabbit.timer=rand(6,11);rabbit.restTime=0;rabbit.path=[];rabbit.icon=pick(['content','sleepy']);rabbit.iconUntil=rabbit.time+rabbit.timer;rabbit.trips=0;
}
function rabbitChooseDestination(){
 releaseScratchBoard(rabbit);
 const plan=npcRoamDestination(rabbit);if(plan){rabbit.goal=plan.target;rabbit.path=plan.path;rabbit.state='walk';rabbit.speed=rand(105,142);rabbit.wait=0;rabbit.repath=0;return;}
 rabbit.state='wait';rabbit.timer=.6;
}
function rabbitTryYield(blocker,goal){return requestNpcYield(rabbit,blocker,goal);}
function updateRabbit(dt){
 if(ownsTVVisit(rabbit))return;
 if(lift.actor===rabbit){rabbit.time+=dt;return;}
 if(updateGather(rabbit,dt))return;
  if(rabbit.trafficYield&&updateTrafficYield(rabbit,dt))return;
  if(rabbit.state==='scratchPad'){rabbit.time+=dt;rabbit.scratchTime+=dt;rabbit.timer-=dt;if(rabbit.timer<=0){releaseScratchBoard(rabbit);rabbitChooseDestination();}return;}
  if(!rabbit.trafficYield&&!rabbit.yieldResume&&rabbit.scratchBoard==null&&facilityClock.time>=rabbit.scratchDue){rabbit.scratchDue=facilityClock.time+rand(35,65);if(beginScratchVisit(rabbit))return;}
  if(updateNpcFacilities(rabbit,dt))return;
  rabbit.time+=dt;rabbit.yieldCooldown=Math.max(0,rabbit.yieldCooldown-dt);
  if(rabbit.state==='yield'){
    rabbit.timer-=dt;if(rabbit.timer<=0){const resume=rabbit.yieldResume;rabbit.yieldResume=null;if(resume)resume();else rabbitChooseDestination();}return;
  }
  if(rabbit.state==='walk'){
    rabbit.repath=Math.max(0,rabbit.repath-dt);
    if(!rabbit.path.length){
      if(rabbit.yieldResume){rabbit.state='yield';rabbit.timer=.9;return;}
      if(rabbit.scratchBoard!=null){rabbit.state='scratchPad';rabbit.scratchTime=0;rabbit.timer=3;rabbit.face=rabbit.scratchGoal?.face||-1;rabbit.icon='happy';rabbit.iconUntil=rabbit.time+3;return;}
      rabbit.trips++;if(rabbit.trips>=3||Math.random()<.22)rabbitRest();else{rabbit.state='wait';rabbit.timer=rand(.1,.5);}return;
    }
    const p=rabbit.path[0],dx=p.x-rabbit.x,dy=p.y-rabbit.y,d=Math.hypot(dx,dy),step=Math.min(d,rabbit.speed*dt);
    const next={x:rabbit.x+(d?dx/d*step:0),y:rabbit.y+(d?dy/d*step:0)};
    if(!yeCanStep(rabbit,next,rabbit)||!yeLineClear(rabbit,next,rabbit)){
      rabbit.wait+=dt;
      if(rabbit.wait>.35&&!rabbit.yieldResume){const blocker=pairDistance(rabbit,cat)<1.4?cat:ye;const goal=blocker===cat?(cat.state==='walk'?cat.walkGoal||cat:cat):ye.goal||ye;if(rabbitTryYield(blocker,goal))return;}
      if(rabbit.repath<=0&&rabbit.goal){const path=yeFindPath(rabbit.x,rabbit.y,rabbit.goal.x,rabbit.goal.y,rabbit);if(path.length)rabbit.path=path;rabbit.repath=.4;}
      return;
    }
    rabbit.wait=0;rabbit.x=next.x;rabbit.y=next.y;if(Math.abs(dx)>.2)rabbit.face=dx<0?-1:1;rabbit.walkTime+=dt*(rabbit.speed/110);
    if(d<=step+.01)rabbit.path.shift();return;
  }
  if(rabbit.state==='rest')rabbit.restTime+=dt;
  rabbit.timer-=dt;if(rabbit.timer<=0)rabbitChooseDestination();
  if(rabbit.time>=rabbit.iconUntil){rabbit.icon=rabbit.state==='rest'?pick(['content','sleepy']):pick(['happy','curious']);rabbit.iconUntil=rabbit.time+rand(6,12);}
}
// Match head size across clips: head is 43px wide in walk and 70px in rest.
function rabbitSpriteScale(resting,frameKey){
 const walkScale=100/RABBIT_ANIMATION.walk.height;
 const width=RABBIT_ANIMATION.frames[frameKey]?.width||RABBIT_ANIMATION.rest.width;
 return resting?walkScale*RABBIT_ANIMATION.walk.width/width*1.2:walkScale;
}
function drawRabbitScratch(c){
 const im=IMG['rabbit_scratch_'+Math.floor(rabbit.scratchTime*15)%15];
 if(!im?.complete||!im.naturalWidth)return;
 c.save();c.fillStyle='rgba(60,30,8,.13)';c.beginPath();c.ellipse(rabbit.x,rabbit.y,49,5,0,0,Math.PI*2);c.fill();
 c.translate(rabbit.x,rabbit.y-(rabbit.z||0));c.scale(rabbit.face<0?-.36:.36,.36);c.drawImage(im,-237,-224);c.restore();drawYeMoodIcon(c,rabbit);
}
function drawRabbit(c){
 if(drawTVVisit(c,rabbit))return;
 if(rabbit.state==='scratchPad'){drawRabbitScratch(c);return;}
 if(rabbit.gatherSlot&&rabbit.state==='gatherSit'){drawGatherCat(c,rabbit);return;}
  if(['eat','drink'].includes(rabbit.state)&&rabbit.facilityCare?.phase==='use'){drawNpcFeeding(c,rabbit);return;}
  if(rabbit.state==='scratch'){drawNpcDigging(c,rabbit,RABBIT_ANIMATION,'rabbit_walk_',rabbitSpriteScale(false));drawYeMoodIcon(c,rabbit);return;}
  const resting=['rest','eat','drink','litter'].includes(rabbit.state),kind=resting?'rest':'walk',sequence=RABBIT_ANIMATION[kind];
  const frame=resting?Math.min(sequence.frames-1,Math.floor(rabbit.restTime*sequence.fps)):rabbit.state==='walk'&&!rabbit.walkingStill?Math.floor(rabbit.walkTime*sequence.fps)%sequence.frames:0;
  const key='rabbit_'+kind+'_'+String(frame).padStart(3,'0'),m=RABBIT_ANIMATION.frames[key],im=IMG[key];if(!m||!im||!im.complete||!im.naturalWidth)return;
  const scale=rabbitSpriteScale(resting,key);
  c.save();c.fillStyle='rgba(60,30,8,.13)';c.beginPath();c.ellipse(rabbit.x,rabbit.y,resting?48:38,5,0,0,Math.PI*2);c.fill();
  c.translate(rabbit.x,rabbit.y-(rabbit.z||0));c.scale(rabbit.face<0?-scale:scale,scale*(resting?1+Math.sin(rabbit.time*1.8)*.008:1));c.drawImage(im,-m.cx,-m.ground);c.restore();
  drawYeMoodIcon(c,rabbit);
}
function initializeRabbit(){
  let chosen=null;
  for(let i=0;i<500;i++){const p={x:rand(GX0+23,GX1-23),y:rand(365,H-30)};if(!yeBlocked(p.x,p.y,true,rabbit)&&npcObstacles(rabbit).every(o=>pairDistance(p,o)>1.3)){chosen=p;break;}}
  if(!chosen){let best=-1;for(let i=0;i<N;i++){const p={x:gx(i),y:gy(i)};if(yeBlocked(p.x,p.y,true,rabbit))continue;const score=Math.min(...npcObstacles(rabbit).map(o=>pairDistance(p,o)));if(score>best){best=score;chosen=p;}}}
  if(chosen)Object.assign(rabbit,{x:chosen.x,y:chosen.y});rabbit.face=pick([-1,1]);rabbit.timer=rand(.3,1.6);rabbit.time=rand(0,8);rabbit.walkTime=rand(0,RABBIT_ANIMATION.walk.duration);rabbit.icon=pick(['happy','curious']);rabbit.iconUntil=rabbit.time+rand(5,10);
}
initializeRabbit();
refreshCameraOptions();

/* Ground feedback uses room coordinates, below objects, with floor perspective. */
/* Walking-only companions */
function createWalkingNpc(meta){
 const actor={floorAnimation:FLOOR_NPC_ANIMATIONS[meta.id],scratchDue:facilityClock.time+rand(18,34),restTime:0,restDue:facilityClock.time+rand(12,26),peeDue:facilityClock.time+rand(25,45),alias:meta.id==='socks'?'\u5c3f\u5c3f\u8c93':null,id:meta.id,name:meta.name,walkOnly:true,animation:meta,x:GX1-30,y:GY1-25,z:0,face:1,time:0,walkTime:0,state:'wait',pose:'walk',path:[],timer:rand(.5,2),speed:75,wait:0,repath:0,roamVisited:[],icon:'curious',iconUntil:0};
 let best=null,score=-1;
 for(let i=0;i<N;i++){const p={x:gx(i),y:gy(i)};if(p.x<GX0+55||p.x>GX1-55||yeBlocked(p.x,p.y,true,actor))continue;const gap=Math.min(...[cat,ye,rabbit,...extraNPCs].map(a=>pairDistance(p,a)));if(gap>score){best=p;score=gap;}}
 if(best){actor.x=best.x;actor.y=best.y;}
 extraNPCs.push(actor);return actor;
}
function chooseWalkingDestination(actor){
 releaseScratchBoard(actor);
 const plan=npcRoamDestination(actor);
 if(!plan){actor.state='wait';actor.timer=.6;return;}
 actor.goal=plan.target;actor.path=plan.path;actor.state='walk';actor.speed=actor.id==='socks'?rand(28,38):rand(65,95);actor.repath=0;actor.wait=0;
}
function beginFloorRest(actor){
 if(!actor.floorAnimation||lift.actor===actor||actor.gatherSlot||actor.trafficYield||!npcRestAllowed(actor)||yeBlocked(actor.x,actor.y,false,actor))return false;
 actor.state='floorRest';actor.path=[];actor.restTime=0;actor.timer=actor.floorAnimation.duration;actor.restDue=facilityClock.time+actor.timer+rand(30,60);return true;
}
function updateCompanionMood(actor){
 const state=actor.state==='floorRest'?'content':actor.state==='scratchPad'?'happy':actor.state==='marking'?'curious':null;
 if(state){actor.icon=state;actor.iconUntil=actor.time+2;}
 else if(actor.time>=actor.iconUntil){actor.icon=pick(['happy','curious','content']);actor.iconUntil=actor.time+rand(5,10);}
}
function dongToiletExit(actor){
 for(const p of [{x:LIT_IN.x,y:LIT.front+85},{x:LIT_IN.x-30,y:LIT.front+85},{x:LIT_IN.x+30,y:LIT.front+85}]){const safe=yeFreePoint(p.x,p.y,actor);if(safe&&!yeBlocked(safe.x,safe.y,false,actor)&&Math.hypot(safe.x-LIT_IN.x,safe.y-LIT_IN.y)>65)return safe;}
 return yeFreePoint(actor.x,LIT.front+100,actor)||{x:GX0+35,y:GY1-25};
}
// Frames are from Dongdong's own video: jump in, sit, dig, then jump out.
const DONG_TOILET_TIMING={enter:.8,sitEnd:3.8,digEnd:6.8,exitEnd:7.55};
function dongToiletFrame(t){
 const q=DONG_TOILET_TIMING;
 if(t<q.enter)return Math.min(26,Math.floor(8+19*t/q.enter));
 if(t<q.sitEnd)return Math.min(62,Math.floor(27+36*(t-q.enter)/(q.sitEnd-q.enter)));
 if(t<q.digEnd)return Math.min(99,Math.floor(63+37*(t-q.sitEnd)/(q.digEnd-q.sitEnd)));
 return Math.min(111,Math.floor(100+12*Math.max(0,Math.min(1,(t-q.digEnd)/(q.exitEnd-q.digEnd)))));
}
function advanceDongToilet(actor,dt){
 const c=actor.facilityCare;c.elapsed+=dt;const t=c.elapsed,q=DONG_TOILET_TIMING;
 // Offset the body so the reaching paws, rather than the torso, are over the centre of the sand.
 const inside={x:LIT_IN.x,y:LIT_IN.y},digInside={x:LIT_IN.x-40,y:LIT_IN.y};
 if(t<q.enter){const u=Math.min(1,t/q.enter);actor.x=lerp(c.from.x,inside.x,u);actor.y=lerp(c.from.y,inside.y,u);actor.z=Math.sin(u*Math.PI)*38;actor.inside=u>.65?'litter':null;}
 else if(t<q.digEnd){const adjust=Math.max(0,Math.min(1,(t-q.sitEnd)/.45));actor.x=lerp(inside.x,digInside.x,adjust);actor.y=inside.y;actor.z=0;actor.inside='litter';
  if(t>=q.sitEnd){c.sandTime=(c.sandTime||0)+dt;if(c.sandTime>=.16){c.sandTime=0;puff('sand',LIT.x,LIT.back+25,{vx:rand(-24,24),vy:rand(-55,-25),life:.55});}}
 }
 else{const u=Math.max(0,Math.min(1,(t-q.digEnd)/(q.exitEnd-q.digEnd)));actor.x=lerp(digInside.x,c.exit.x,u);actor.y=lerp(digInside.y,c.exit.y,u);actor.z=Math.sin(u*Math.PI)*48;actor.face=c.exit.x>=digInside.x?1:-1;actor.inside=null;for(const other of npcObstacles(actor))if(!pairCanStep(actor,actor,other))allowTrafficPass(actor,other);}
 actor.state='litter';if(t>=q.exitEnd){actor.x=c.exit.x;actor.y=c.exit.y;actor.z=0;actor.inside=null;actor.toiletDue=facilityClock.time+rand(90,150);finishFacility(actor);chooseWalkingDestination(actor);}return true;
}
function drawDongToilet(c,actor){
 const care=actor.facilityCare,t=care.elapsed||0,index=care.door?(care.phase==='scratch'?63+Math.min(36,Math.floor(t/2.4*36)):27+Math.min(35,Math.floor(t/3*35))):dongToiletFrame(t),m=DONG_TOILET_FRAMES[index],im=IMG['dong_toilet_'+index];if(!im?.complete||!im.naturalWidth)return;
 c.save();c.fillStyle='rgba(45,25,10,.15)';c.beginPath();c.ellipse(actor.x,actor.y,30,5,0,0,7);c.fill();c.translate(actor.x,actor.y-actor.z);c.scale(t>=DONG_TOILET_TIMING.digEnd&&actor.face<0?-.33:.33,.33);c.drawImage(im,-m.cx,-m.ground);c.restore();
}
function updateWalkingNpc(actor,dt){
 if(ownsTVVisit(actor))return;
 if(actor.id==='dongdong'){
  if(lift.actor!==actor&&actor.facilityCare){actor.time+=dt;advanceFacility(actor,dt);return;}
  if(actor.toiletDue==null)actor.toiletDue=facilityClock.time+rand(40,75);
  if(lift.actor!==actor&&!actor.gatherSlot&&!actor.trafficYield&&facilityClock.time>=actor.toiletDue){actor.toiletDue=facilityClock.time+rand(8,15);if(beginFacility(actor,'litter'))return;}
 }

 updateCompanionMood(actor);
 if(lift.actor===actor){actor.time+=dt;return;}
 if(updateGather(actor,dt)||updateTrafficYield(actor,dt))return;
 actor.time+=dt;
 if(actor.state==='scratchPad'){actor.scratchTime=(actor.scratchTime||0)+dt;actor.timer-=dt;if(actor.timer<=0){releaseScratchBoard(actor);chooseWalkingDestination(actor);}return;}
 if(actor.state==='floorRest'){actor.restTime+=dt;actor.timer-=dt;if(actor.timer<=0)chooseWalkingDestination(actor);return;}
 if(actor.state==='marking'){const m=NEW_COMPANION_ASSETS.clips.pee;actor.peeTime=(actor.peeTime||0)+dt;actor.timer=Math.max(0,m.duration-actor.peeTime);if(!actor.peeSpawned&&actor.peeTime>=m.peeStart)actor.peeSpawned=spawnPuddle(actor);if(actor.timer<=0){actor.peeDue=facilityClock.time+rand(25,45);chooseWalkingDestination(actor);}return;}
 if(actor.state!=='walk'){
  if(actor.id==='socks'&&facilityClock.time>=actor.peeDue){if(puddleLocation(actor)){actor.state='marking';actor.peeTime=0;actor.peeSpawned=false;actor.timer=NEW_COMPANION_ASSETS.clips.pee.duration;actor.path=[];return;}actor.peeDue=facilityClock.time+rand(4,8);}
  if(facilityClock.time>=actor.scratchDue){actor.scratchDue=facilityClock.time+rand(35,65);if(beginScratchVisit(actor))return;}
  if(facilityClock.time>=actor.restDue&&beginFloorRest(actor))return;
  actor.timer-=dt;if(actor.timer<=0)chooseWalkingDestination(actor);return;
 }
 const goal=actor.goal;if(!goal){actor.state='wait';actor.timer=.3;return;}
 if(Math.hypot(actor.x-goal.x,actor.y-goal.y)<3){actor.path=[];if(actor.scratchBoard!=null){actor.state='scratchPad';actor.scratchTime=0;actor.timer=rand(4,7);actor.face=actor.scratchGoal?.face||-1;}else{actor.state='wait';actor.timer=rand(.8,2);}return;}
 actor.repath-=dt;if(actor.repath<=0&&(!actor.path.length||actor.wait>0)){actor.path=yeFindPath(actor.x,actor.y,goal.x,goal.y,actor);actor.repath=.45;}
 const p=actor.path[0];if(!p){actor.wait+=dt;return;}
 const dx=p.x-actor.x,dy=p.y-actor.y,d=Math.hypot(dx,dy),motion=companionWalkStep(actor,dt,companionMoveSpeed(actor,actor.speed),d),step=motion.step,next={x:actor.x+dx/(d||1)*step,y:actor.y+dy/(d||1)*step};
 if(step>0&&!yeCanStep(actor,next,actor)){actor.wait+=dt;return;}
 actor.x=next.x;actor.y=next.y;actor.wait=0;if(actor.id==='socks')actor.walkTime=motion.time;else actor.walkTime+=dt*actor.speed/80;if(Math.abs(dx)>.2)actor.face=dx<0?-1:1;if(d<=step+.01)actor.path.shift();
}
function drawWalkingNpc(c,actor){
 drawCompanionBody(c,actor);
 if(!(actor.disgustUntil>facilityClock.time))drawYeMoodIcon(c,{...actor,state:actor.state==='floorRest'?'rest':actor.state,standIconHeight:actor.state==='gatherSit'||actor.id==='socks'&&['wait','yield'].includes(actor.state)?155:120,restIconHeight:70,iconOffset:55});
}
function drawCompanionBody(c,actor){
 if(roomPlan&&window.DoorGait?.draw(c,actor,IMG.dong_door_gait))return;
 if(actor.id==='dongdong'&&actor.facilityCare?.door&&['use','scratch','turnDoor'].includes(actor.facilityCare.phase)){drawDongToilet(c,actor);return;}
 if(drawTVVisit(c,actor))return;
 if(actor.id==='dongdong'&&actor.facilityCare?.phase==='dongToilet'){drawDongToilet(c,actor);return;}
 if(actor.id==='socks'&&actor.state==='marking'){
  const m=NEW_COMPANION_ASSETS.clips.pee,index=Math.min(m.count-1,Math.floor((actor.peeTime||0)*m.fps)),key=m.prefix+String(index).padStart(3,'0'),frame=m.frames[key],im=IMG[key];if(!im?.complete||!im.naturalWidth)return;
  c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(actor.x,actor.y,32,6,0,0,Math.PI*2);c.fill();c.translate(actor.x,actor.y);c.scale(actor.face<0?-m.scale:m.scale,m.scale);c.drawImage(im,-frame.cx,-frame.ground);c.restore();return;
 }

 if(actor.gatherSlot&&actor.state==='gatherSit'){const m=NEW_COMPANION_ASSETS.gather[actor.id],im=IMG[m.key];if(!im?.complete||!im.naturalWidth)return;c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(actor.x,actor.y,32,6,0,0,Math.PI*2);c.fill();c.drawImage(im,actor.x-m.cx*m.scale,actor.y-m.ground*m.scale,im.naturalWidth*m.scale,im.naturalHeight*m.scale);c.restore();return;}
 if(actor.id==='socks'&&['wait','yield','scratchPad'].includes(actor.state)){const m=NEW_COMPANION_ASSETS.clips[actor.state==='scratchPad'?'board':'sit'],phase=Math.floor((actor.state==='scratchPad'?(actor.scratchTime||0):actor.time)*m.fps)%(2*m.count-2),index=phase<m.count?phase:2*m.count-2-phase,im=IMG[m.prefix+String(index).padStart(3,'0')];if(!im?.complete||!im.naturalWidth)return;c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(actor.x,actor.y,40,6,0,0,Math.PI*2);c.fill();c.translate(actor.x,actor.y);c.scale(actor.state==='scratchPad'?(actor.face<0?m.scale:-m.scale):actor.face<0?-m.scale:m.scale,m.scale);c.drawImage(im,-m.cx,-m.ground);c.restore();return;}

 if(actor.id==='dongdong'&&actor.state==='scratchPad'){const raw=Math.floor((actor.scratchTime||0)*12),period=56,phase=raw%period,index=phase<29?phase:56-phase,im=IMG['dong_scratch_'+index];if(!im?.complete||!im.naturalWidth)return;c.save();c.fillStyle='rgba(45,25,10,.15)';c.beginPath();c.ellipse(actor.x,actor.y,38,5,0,0,7);c.fill();c.translate(actor.x,actor.y);c.scale(actor.face<0?.26:-.26,.26);c.drawImage(im,-420,-480);c.restore();return;}
 if(actor.state==='scratchPad'){drawNpcDigging(c,actor,actor.animation,actor.id+'_walk_',100/actor.animation.height);return;}
 if(actor.state==='floorRest'&&actor.floorAnimation){
  const m=actor.floorAnimation,index=Math.min(m.count-1,Math.floor(actor.restTime*m.fps)),im=IMG[m.prefix+String(index).padStart(3,'0')];if(!im?.complete||!im.naturalWidth)return;
  const scale=(actor.animation.width*100/actor.animation.height)/m.width;
  c.save();c.fillStyle='rgba(45,25,10,.14)';c.beginPath();c.ellipse(actor.x,actor.y,68,8,0,0,Math.PI*2);c.fill();c.translate(actor.x,actor.y);c.scale(actor.face<0?-scale:scale,scale);c.drawImage(im,-m.cx,-m.ground);c.restore();return;
 }
 const meta=actor.animation,index=actor.state==='walk'&&!actor.walkingStill?Math.floor(actor.walkTime*meta.fps)%meta.count:0,key=meta.id+'_walk_'+String(index).padStart(3,'0'),frame=meta.frames[key],im=IMG[key];if(!im?.complete||!im.naturalWidth)return;
 const scale=100/meta.height;
 c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(actor.x,actor.y,48,6,0,0,Math.PI*2);c.fill();c.translate(actor.x,actor.y-(actor.z||0));c.scale(actor.face<0?-scale:scale,scale);c.drawImage(im,-frame.cx,-frame.ground);c.restore();
}
for(const meta of Object.values(WALKING_NPCS))createWalkingNpc(meta);
refreshCameraOptions();
/* End walking-only companions */


const groundRipples=[];
function addGroundRipple(p){
  if(p.x<0||p.x>W||p.y<FT||p.y>H||blockedPt(p.x,p.y)||hitCat(p)||hitToy(p))return;
  groundRipples.push({x:p.x,y:p.y,age:0});if(groundRipples.length>16)groundRipples.shift();
}
function updateGroundRipples(dt){for(let i=groundRipples.length-1;i>=0;i--){groundRipples[i].age+=dt;if(groundRipples[i].age>.85)groundRipples.splice(i,1);}}
function drawGroundRipples(c){
  c.save();c.beginPath();c.rect(0,FT,W,H-FT);c.clip();
  for(const p of groundRipples){
    const depth=Math.max(0,Math.min(1,(p.y-FT)/(H-FT))),perspective=.65+depth*.55;
    for(let j=0;j<3;j++){
      const t=(p.age-j*.12)/.61;if(t<0||t>1)continue;
      const radius=(5+35*t)*perspective;
      c.strokeStyle='rgba(255,231,175,'+((1-t)*.8)+')';c.lineWidth=1.5*(1-t*.5);
      c.beginPath();c.ellipse(p.x,p.y,radius,radius*(.28+depth*.12),0,0,Math.PI*2);c.stroke();
    }
  }
  c.restore();
}

/* ---------- input ---------- */
const pet={on:false,acc:0,belly:0};
let ptr=null,held=null;
function screenPoint(e){const box=cv.getBoundingClientRect();return {x:(e.clientX-box.left)*VW/box.width,y:(e.clientY-box.top)*VH/box.height};}
function toWorld(e){const p=screenPoint(e);return{x:p.x/cam.s+cam.x,y:p.y/cam.s+cam.y};}
function hitToy(p){return [...toys].filter(t=>!t.carried).sort((a,b)=>b.y-a.y).find(t=>Math.hypot(p.x-t.x,p.y-(t.y-t.size*.45-t.z))<Math.max(30,t.size*.6));}
function hitCat(p){const dx=p.x-cat.x,dy=p.y-(cat.y-cat.z);if(cat.pose==='toastsit')return Math.abs(dx)<85&&dy>-140&&dy<40;if(cat.pose==='belly'||cat.pose==='sun')return Math.abs(dx)<95&&dy>-110&&dy<20;return Math.abs(dx)<60&&dy>-125&&dy<10;}
function startPet(){
  if(cat.state==='hop'){cat.then=()=>{if(ptr)startPet();};return;}
  pet.on=true;pet.acc=0;
  if(cat.pose==='toastsit'){cat.timer=Math.max(cat.timer,20);say('摸摸牠的背，在吐司坐墊上呼嚕呼嚕');bump('love',3);return;}
  if(cat.pose==='belly'||cat.act==='sun'){
    if(cat.pose!=='belly'){interrupt();cat.state='belly';cat.pose='belly';cat.timer=14;}
    pet.on=true;cat.eyes='half';say('摸到軟軟的肚肚了');return;}
  const was=cat.askKind;
  if(cat.act==='sleep'){say('睡夢中呼嚕呼嚕');}
  else{
    interrupt();cat.state='petted';cat.pose='petsit';cat.eyes='closed';
    say(was==='love'?'終於摸到了，開心地呼嚕呼嚕':was==='meow'?'你回應牠了，牠瞇起眼睛':'被摸得好舒服，呼嚕呼嚕');
    if(was==='meow'){bump('love',15);popMeow('mew');}
  }
  pet.on=true;bump('love',3);puff('heart',cat.x+rand(-10,20),cat.y-100);
}
function strokePet(d){
  if(cat.pose==='toastsit'){toastRest.touch=Math.min(1,toastRest.touch+d/80);toastRest.dwell=Math.max(toastRest.dwell,3);cat.timer=Math.max(cat.timer,20);bump('love',d*.05);return;}
  if(cat.pose==='belly'){
    bellyStroke(d);
    pet.acc+=d;pet.belly+=d;bump('love',d*.07);cat.timer=Math.max(cat.timer,5);
    if(pet.acc>28){pet.acc=0;puff('heart',cat.x+rand(-30,30),cat.y-rand(30,55));if(Math.random()<.35)puff('purr',cat.x+rand(-30,30),cat.y-80,{vx:0,vy:-20});}
    if(pet.belly>4200&&cat.wiggle<=0){
      if(Math.random()<.45){cat.wiggle=1.4;pet.belly=0;popMeow('chirp');sfx.pounce();say('抱住你的手，後腳踢踢踢，輕輕咬了一下');}
      else{pet.belly=1400;say('肚肚被摸得好舒服，四腳朝天');}
    }
    return;}
  pet.acc+=d;cat.petTotal+=d;bump('love',d*.05);
  if(pet.acc>34){pet.acc=0;puff('heart',cat.x+rand(-30,30),cat.y-rand(80,110));if(Math.random()<.3)puff('purr',cat.x+rand(-20,20),cat.y-120,{vx:0,vy:-20});}
  if(cat.state==='petted'&&cat.petTotal>900){cat.petTotal=0;say('舒服到眼睛都瞇起來了');popMeow('chirp');}
}
function manualCamera(scale,anchor,world){
 const sh=Math.max(140,safeBot-safeTop),base=Math.min(VW/W,sh/H);cam.zoom=Math.max(1,Math.min(3.5,scale/base));
 const s=base*cam.zoom;cameraSelection.mode='manual';cam.manualX=world.x+(VW/2-anchor.x)/s;cam.manualY=world.y+((safeTop+safeBot)/2-anchor.y)/s;
 bOverview.setAttribute('aria-pressed','false');cameraPicker.classList.remove('active');cameraTarget.value='';updateCam(0);
}
/* Lift controls */
function actorAt(p){return [cat,ye,rabbit,...extraNPCs].filter(a=>{
 const resting=a.state==='floorRest'&&a.floorAnimation,scale=resting?(a.animation.width*100/a.animation.height)/resting.width:0;
 const half=resting?resting.width*scale/2:a.walkOnly?a.animation.width*50/a.animation.height:a===ye?75:65,height=resting?resting.height*scale:a.walkOnly?105:a===ye?150:130;
 return Math.abs(p.x-a.x)<half&&p.y<a.y-(a.z||0)+12&&p.y>a.y-(a.z||0)-height;
}).sort((a,b)=>b.y-a.y)[0]||null;}
function cancelLiftHold(){if(lift.timer!==null)clearTimeout(lift.timer);lift.timer=null;lift.hold=null;}
function beginLift(actor,p,pointer){
 if(protectedLitterExit(actor)){cancelLiftHold();requestLitterExit(actor);say('先從貓砂盆走出來，再抱抱');return;}
 cancelTVVisit(actor);
 cancelLiftHold();stopGather();if(actor===cat)interrupt();else if(actor.facilityCare)cancelFacility(actor);
 releaseScratchBoard(actor);actor.trafficYield=null;actor.trafficWatch=null;actor.yieldResume=null;actor.after=null;actor.then=null;actor.path=[];actor.routeQueue=[];actor.inside=null;actor.act=null;actor.state='lifted';actor.pose='sit';actor.z=58;
 lift.actor=actor;lift.pointer=pointer;lift.offset={x:actor.x-p.x,y:actor.y-p.y};lift.origin={x:actor.x,y:actor.y};releaseGestureInteractions();say('抓起來囉！拖曳後放手，會避開家具和其他貓咪');
}
function moveLift(p){if(!lift.actor)return;lift.actor.x=Math.max(GX0,Math.min(GX1,p.x+lift.offset.x));lift.actor.y=Math.max(GY0,Math.min(GY1,p.y+lift.offset.y));}
function endLift(){
 const a=lift.actor;if(!a)return;
 const safe=yeFreePoint(a.x,a.y,a)||yeFreePoint(lift.origin.x,lift.origin.y,a);if(safe){a.x=safe.x;a.y=safe.y;}
 a.z=0;a.path=[];a.goal=null;a.walkGoal=null;a.state=a===cat?'idle':'wait';a.pose='sit';a.timer=2;a.trafficYield=null;a.trafficWatch=null;if(a.facilityDue){a.facilityDue.eat=Math.max(a.facilityDue.eat||0,facilityClock.time+8);a.facilityDue.drink=Math.max(a.facilityDue.drink||0,facilityClock.time+8);}
 lift.actor=null;lift.pointer=null;lift.offset=null;lift.origin=null;ptr=null;pet.on=false;say('放下來了');
}
cv.addEventListener('pointerdown',e=>{
 if(e.button&&e.button!==0)return;
 if(lift.actor){endLift();return;}
 if(lift.hold){cancelLiftHold();return;}
 const p=toWorld(e),actor=actorAt(p);if(!actor)return;
 lift.hold={event:e,p,actor};lift.timer=setTimeout(()=>{if(lift.hold){const h=lift.hold;beginLift(h.actor,h.p,h.event.pointerId);}},550);
 if(e.pointerType!=='touch'){cv.setPointerCapture(e.pointerId);e.stopImmediatePropagation();}
},{capture:true});
cv.addEventListener('pointermove',e=>{
 if(lift.actor&&lift.pointer===e.pointerId){moveLift(toWorld(e));e.preventDefault();e.stopImmediatePropagation();return;}
 if(lift.hold&&lift.hold.event.pointerId===e.pointerId&&Math.hypot(e.clientX-lift.hold.event.clientX,e.clientY-lift.hold.event.clientY)>4){const h=lift.hold;cancelLiftHold();if(e.pointerType!=='touch')pointerDown(h.event);}
},{capture:true,passive:false});
function finishLiftPointer(e){
 if(lift.actor&&lift.pointer===e.pointerId){endLift();roomTouches.delete(e.pointerId);touchStart=null;touchStarted=false;gestureConsumed=false;e.preventDefault();e.stopImmediatePropagation();return;}
 if(lift.hold&&lift.hold.event.pointerId===e.pointerId){const h=lift.hold;cancelLiftHold();if(e.pointerType!=='touch'){if(e.type!=='pointercancel'){pointerDown(h.event);endPtr();}e.stopImmediatePropagation();}}
}
cv.addEventListener('pointerup',finishLiftPointer,{capture:true,passive:false});cv.addEventListener('pointercancel',finishLiftPointer,{capture:true,passive:false});
/* End lift controls */

const roomTouches=new Map();let roomGesture=null,touchStart=null,touchStarted=false,gestureConsumed=false;
function touchMetrics(){const [a,b]=[...roomTouches.values()];return {x:(a.x+b.x)/2,y:(a.y+b.y)/2,d:Math.max(1,Math.hypot(a.x-b.x,a.y-b.y))};}
function releaseGestureInteractions(){cancelLiftHold();if(held){held.held=false;held.vx=held.vy=held.vz=0;held.z=0;held=null;}pet.on=false;ptr=null;}
cv.addEventListener('pointerdown',e=>{
 if(e.pointerType!=='touch')return;e.preventDefault();e.stopImmediatePropagation();cv.setPointerCapture(e.pointerId);roomTouches.set(e.pointerId,screenPoint(e));
 if(roomTouches.size===1){touchStart=e;touchStarted=false;gestureConsumed=false;}
 if(roomTouches.size>=2){releaseGestureInteractions();gestureConsumed=true;const m=touchMetrics();roomGesture={...m,scale:cam.s,world:{x:cam.x+m.x/cam.s,y:cam.y+m.y/cam.s}};}
},{capture:true,passive:false});
cv.addEventListener('pointermove',e=>{
 if(e.pointerType!=='touch'||!roomTouches.has(e.pointerId))return;e.preventDefault();e.stopImmediatePropagation();roomTouches.set(e.pointerId,screenPoint(e));
 if(roomGesture&&roomTouches.size>=2){const m=touchMetrics();manualCamera(roomGesture.scale*m.d/roomGesture.d,m,roomGesture.world);return;}
 if(gestureConsumed)return;
 if(!touchStarted&&touchStart&&Math.hypot(e.clientX-touchStart.clientX,e.clientY-touchStart.clientY)>4){pointerDown(touchStart);touchStarted=true;}
 if(touchStarted)pointerMove(e);
},{capture:true,passive:false});
function finishRoomTouch(e){
 if(e.pointerType!=='touch'||!roomTouches.has(e.pointerId))return;e.preventDefault();e.stopImmediatePropagation();
 roomTouches.delete(e.pointerId);if(roomTouches.size<2)roomGesture=null;
 else{const m=touchMetrics();roomGesture={...m,scale:cam.s,world:{x:cam.x+m.x/cam.s,y:cam.y+m.y/cam.s}};}
 if(!gestureConsumed&&e.type!=='pointercancel'){if(!touchStarted&&touchStart)pointerDown(touchStart);endPtr();}else releaseGestureInteractions();
 if(!roomTouches.size){touchStart=null;touchStarted=false;gestureConsumed=false;}
}
cv.addEventListener('pointerup',finishRoomTouch,{capture:true,passive:false});cv.addEventListener('pointercancel',finishRoomTouch,{capture:true,passive:false});
cv.addEventListener('wheel',e=>{e.preventDefault();const anchor=screenPoint(e),world={x:cam.x+anchor.x/cam.s,y:cam.y+anchor.y/cam.s};manualCamera(cam.s*Math.exp(-e.deltaY*.0025),anchor,world);},{passive:false});
function pointerDown(e){
  cv.setPointerCapture(e.pointerId);const p=toWorld(e);addGroundRipple(p);
  ptr={start:p,last:p,moved:0,hist:[{...p,t:performance.now()}]};
  if(mode==='wand'){wand.x=Math.max(40,Math.min(GX1,p.x));wand.y=Math.max(250,Math.min(GY1,p.y+20));return;}
  if(mode==='treat'){treat.x=Math.max(60,Math.min(GX1-18,p.x));treat.y=Math.max(160,Math.min(GY1-20,p.y));return;}
  if(mode==='hand'&&hitTelevision(p)){ptr.action='tv';return;}
  const t=hitToy(p);
  if(t){held=t;t.held=true;t.inBox=false;t.thrown=false;t.view=0;t.rot=0;t.rolling=false;t.vx=t.vy=t.vz=0;t.z=18;if(cat.targetToy===t)cat.targetToy=null;return;}
  if(hitCat(p)){startPet();return;}
  if(mode==='hand'&&Math.abs(p.x-TOAST.x)<TOAST.w/2&&Math.abs(p.y-(TOAST.y-30))<53){ptr.action='toast';}
}
cv.addEventListener('pointerdown',pointerDown);
function pointerMove(e){
  if(!ptr)return;const p=toWorld(e),d=Math.hypot(p.x-ptr.last.x,p.y-ptr.last.y);
  ptr.moved+=d*cam.s;ptr.last=p;const now=performance.now();ptr.hist.push({...p,t:now});while(ptr.hist.length>2&&now-ptr.hist[0].t>110)ptr.hist.shift();
  if(mode==='wand'){wand.x=Math.max(40,Math.min(GX1,p.x));wand.y=Math.max(250,Math.min(GY1,p.y+20));return;}
  if(mode==='treat'){treat.x=Math.max(60,Math.min(GX1-18,p.x));treat.y=Math.max(160,Math.min(GY1-20,p.y));return;}
  if(held){held.x=Math.max(GX0,Math.min(GX1,p.x));held.y=Math.max(244,Math.min(H-14,p.y+held.size*.45));return;}
  if(pet.on&&hitCat(p))strokePet(d);
}
cv.addEventListener('pointermove',pointerMove);
function endPtr(){
  if(!ptr)return;
  if(held){
    const h=ptr.hist,a=h[0],b=h[h.length-1],dt=Math.max(16,b.t-a.t)/1000;
    let vx=(b.x-a.x)/dt,vy=(b.y-a.y)/dt;const sp=Math.hypot(vx,vy),cap=750;if(sp>cap){vx*=cap/sp;vy*=cap/sp;}
    held.held=false;
    if(sp>90){held.vx=vx;held.vy=vy;held.vz=150+Math.min(sp,cap)*.35;held.spin=rand(-9,9);held.thrown=true;
      throwOrigin={x:ptr.start.x,y:ptr.start.y+20};
      if(cat.askKind==='play'){bump('play',8);}
      say(held.fav?'大象寶寶飛出去了！':`${held.name}飛出去了！`);}
    else held.vz=0;
    held=null;
  }else if(pet.on){pet.on=false;cat.timer=cat.pose==='belly'?Math.max(cat.timer,7):cat.pose==='toastsit'?Math.max(cat.timer,12):1.8;}
  else if(ptr.action==='tv'&&ptr.moved<10){startTVWatching();}
  else if(ptr.action==='toast'&&ptr.moved<10){act(()=>goToast());}
  else if(mode==='hand'&&ptr.moved<10&&cat.act!=='sleep'){
    const p=ptr.start,fp=freePoint(p.x,p.y);interrupt();popMeow('short');
    moveTo(fp.x,fp.y,95,()=>{doFor('sit','look',2.5,'坐下來看著你');},'聽到你叫牠，走過來了');
  }
  ptr=null;
}
cv.addEventListener('pointerup',endPtr);cv.addEventListener('pointercancel',endPtr);

// Visible body edges 25 world pixels above the paws; ignore sprite padding and tail tips.
function gatherFootprint(a){if(a.walkOnly&&NEW_COMPANION_ASSETS.gather[a.id])return NEW_COMPANION_ASSETS.gather[a.id];if(a.walkOnly){const half=a.animation.width*100/a.animation.height*.32;return {left:-half,right:half};}return a===cat?{left:-30.73,right:33.75}:a===ye?{left:-33.24,right:35.75}:{left:-42.38,right:24.78};}
const gather={active:false,order:[],lastOrder:''};
function stopGather(){if(!gather.active)return;gather.active=false;for(const a of [cat,ye,rabbit,...extraNPCs]){a.gatherSlot=null;a.path=[];a.state=a===cat?'idle':'wait';a.timer=2;a.act=null;a.pose='sit';}}
function startGather(){
 if(deferLitterExit(startGather))return;
 for(const a of [cat,ye,rabbit,...extraNPCs]){cancelTVVisit(a);clearActorTrafficPasses(a);}
 if(lift.actor)endLift();cancelLiftHold();
 stopGather();interrupt();if(mode!=='hand')setMode('hand',true);
 const actors=[cat,ye,rabbit,...extraNPCs],order=[...actors];
 for(let i=order.length-1;i>0;i--){const j=Math.floor(Math.random()*(i+1));[order[i],order[j]]=[order[j],order[i]];}
 let key=order.map(a=>actors.indexOf(a)).join(',');if(key===gather.lastOrder&&order.length>1){order.push(order.shift());key=order.map(a=>actors.indexOf(a)).join(',');}gather.lastOrder=key;gather.order=order;gather.active=true;
 const center=roomPlan?EX0+EW/2:TOAST_CENTER.x,y=roomPlan?roomPlan.floor+510:TOAST_CENTER.y-75;
 const positions=[0];for(let i=1;i<order.length;i++)positions.push(positions[i-1]+gatherFootprint(order[i-1]).right-gatherFootprint(order[i]).left-3);
 const left=positions[0]+gatherFootprint(order[0]).left,right=positions.at(-1)+gatherFootprint(order.at(-1)).right,offset=center-(left+right)/2;
 for(const toy of toys)if(Math.abs(toy.y-y)<65&&Math.abs(toy.x-center)<260){toy.y=GY1-25;toy.x=Math.max(GX0+30,Math.min(GX1-30,toy.x));}
 for(const [i,a] of order.entries()){releaseScratchBoard(a);if(a.facilityCare)cancelFacility(a);a.trafficYield=null;a.trafficWatch=null;a.path=[];a.inside=null;a.z=0;a.after=null;a.then=null;a.act=null;a.gatherSlot={x:offset+positions[i],y};a.goal=a.gatherSlot;a.walkGoal=a.gatherSlot;a.state='walk';a.pose='walk';a.gatherTime=0;a.gatherRepath=0;a.gatherBlocked=0;a.gatherSide=a.y<y?-1:1;a.gatherApproach=null;a.gatherApproached=false;a.gatherStageIndex=0;}
 say('集合囉！大家排一排坐好');
}
function updateGather(a,dt){
 if(!gather.active||!a.gatherSlot)return false;
 a.time+=dt;const goal=a.gatherSlot;a.gatherTime+=dt;a.gatherRepath-=dt;
 if(Math.hypot(a.x-goal.x,a.y-goal.y)<3){a.x=goal.x;a.y=goal.y;a.state='gatherSit';a.pose='sitfront';a.face=1;a.path=[];a.trafficYield=null;return true;}
 if(a.gatherApproach&&!a.gatherApproached&&Math.hypot(a.x-a.gatherApproach.x,a.y-a.gatherApproach.y)<4){a.gatherApproached=true;a.path=[];a.gatherRepath=0;}
 if(a.gatherRepath<=0&&(!a.path.length||(a.gatherBlocked||0)>.2)){
  a.gatherRepath=.5;
  if(!a.gatherApproach){
   const side=Math.abs(goal.x-a.x)>25?(goal.x>a.x?-1:1):(a.gatherSide||1),distances=roomPlan?[90,150,210]:[31,60,90,150,210];
   const candidates=[side,-side].flatMap(s=>distances.map(d=>({x:goal.x,y:goal.y+s*d})));
   if(!roomPlan)candidates.sort((p,q)=>Number(yeLineClear(a,q,a))-Number(yeLineClear(a,p,a)));
   let searches=0,index=a.gatherStageIndex||0;
   while(index<candidates.length&&searches<2){const p=candidates[index++];if(yeBlocked(p.x,p.y,false,a))continue;searches++;const path=yeFindPath(a.x,a.y,p.x,p.y,a);if(path.length&&Math.hypot(path.at(-1).x-p.x,path.at(-1).y-p.y)<4){a.gatherApproach=p;a.path=path;break;}}
   a.gatherStageIndex=index<candidates.length?index:0;
   if(!a.gatherApproach){a.path=[];return true;}
  }else{
   const target=a.gatherApproached?goal:a.gatherApproach;
   a.path=yeFindPath(a.x,a.y,target.x,target.y,a);
   if(!a.path.length||Math.hypot(a.path.at(-1).x-a.x,a.path.at(-1).y-a.y)<3)a.path=yeFindPath(a.x,a.y,goal.x,goal.y,a);
   if(!a.path.length){a.gatherApproach=null;a.gatherApproached=false;}
  }
 }
 const p=a.path[0];if(p){const dx=p.x-a.x,dy=p.y-a.y,d=Math.hypot(dx,dy),motion=companionWalkStep(a,dt,companionMoveSpeed(a,115,true),d),step=motion.step,next={x:a.x+dx/(d||1)*step,y:a.y+dy/(d||1)*step};if(step===0||yeCanStep(a,next,a)){a.x=next.x;a.y=next.y;a.face=dx>=0?1:-1;a.state='walk';a.pose='walk';a.gatherBlocked=0;if(a.id==='socks')a.walkTime=motion.time;else a.walkTime=(a.walkTime||0)+dt*1.5;if(d<=step+.01)a.path.shift();}else a.gatherBlocked=(a.gatherBlocked||0)+dt;}
 return true;
}
const yeGatherMeta={"w": 1199, "h": 1312, "anchor": 574.5, "ground": 1231, "scale": 0.12520868113522537, "left": -33.24, "right": 35.75};
const yeGatherPortrait=new Image();yeGatherPortrait.src="assets/ye-gather-front.png";
const gatherPortrait=new Image();gatherPortrait.src='assets/gather-front.png';
// Subtle independent breathing, anchored at the paws. Only rendering changes;
// formation slots, collision bounds and action priority remain unchanged.
function gatherIdleMotion(time,index){
 const phase=time*1.8+index*1.71;
 return {scaleY:1+Math.sin(phase)*.005,lean:0};
}
function drawGatherCat(c,a){
 const motion=gatherIdleMotion(a.time||0,gather.order.indexOf(a));
 c.save();c.translate(a.x,a.y);c.transform(1,0,motion.lean,motion.scaleY,0,0);c.translate(-a.x,-a.y);
 drawGatherCatStill(c,a);c.restore();
}
function drawGatherCatStill(c,a){
 if(a.walkOnly){drawWalkingNpc(c,a);return;}
 if(a===cat){c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(a.x,a.y,32,6,0,0,Math.PI*2);c.fill();c.restore();spr(c,'sitfront',a.x,a.y,{flip:false});return;}
 if(a===ye){const im=yeGatherPortrait,m=yeGatherMeta;if(!im.complete||!im.naturalWidth)return;c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(a.x,a.y,32,6,0,0,Math.PI*2);c.fill();c.drawImage(im,a.x-m.anchor*m.scale,a.y-m.ground*m.scale,m.w*m.scale,m.h*m.scale);c.restore();return;}
 if(!gatherPortrait.complete||!gatherPortrait.naturalWidth)return;
 const h=gatherPortrait.naturalHeight,height=a===ye?160:138,scale=height/h,frame=a===ye?{x:100,w:800,anchor:430}:{x:950,w:700,anchor:320};
 c.save();c.fillStyle='rgba(45,25,10,.18)';c.beginPath();c.ellipse(a.x,a.y,40,6,0,0,Math.PI*2);c.fill();c.drawImage(gatherPortrait,frame.x,0,frame.w,h,a.x-frame.anchor*scale,a.y-height*.935,frame.w*scale,height);c.restore();
}

/* ---------- toolbar ---------- */
const $=id=>document.getElementById(id);
function beginControlledMode(go,expected){const run=()=>{if(mode!==expected)return;if(deferLitterExit(()=>{if(mode===expected)go();}))return;if(cat.inside){const out=cat.inside==='box'?BOX_OUT:LIT_OUT;cat.inside=null;hopTo(out.x,out.y,()=>{if(mode===expected)go();});}else go();};if(cat.state==='hop')cat.then=run;else run();}
function setMode(m,quiet){const prev=mode;mode=m;$('bHand').setAttribute('aria-pressed',m==='hand');$('bWand').setAttribute('aria-pressed',m==='wand');$('bTreat').setAttribute('aria-pressed',m==='treat');
  if(prev==='treat'&&m!=='treat'){if(cat.state==='treat'){cat.state='idle';cat.timer=1;cat.act=null;cat.cs=null;cat.pose='sit';}if(!quiet&&treat.left>0)say('先把貓條收起來');}
  if(m==='treat'){
    interrupt();treat.left=1;const p=ownerSpot();treat.x=Math.max(60,Math.min(540,p.x+40));treat.y=Math.max(200,Math.min(700,p.y-MOUTH_UP-30));
    const go=()=>{cat.state='treat';cat.cs=null;cat.path=[];cat.eyes='open';};
    say('你拿出一條貓條，拖著它可以引牠過來');popMeow('mid');
    beginControlledMode(go,'treat');
    return;
  }
  if(m==='wand'){
    const go=()=>{cat.state='chase';cat.cs='approach';cat.path=[];cat.eyes='open';};
    interrupt();const p=freePoint(cat.x+cat.face*150,cat.y+20);wand.x=p.x;wand.y=p.y;say('看到逗貓棒，眼睛都亮了');popMeow('chirp');
    beginControlledMode(go,'wand');
  }else if(cat.state==='chase'||cat.cs){cat.cs=null;cat.state='idle';cat.timer=1;cat.z=0;cat.pose='sit';say('玩累了，休息一下');}}
$('bHand').onclick=()=>{setMode('hand');act(()=>{const p=ownerSpot();moveTo(p.x,p.y,95,()=>doFor('sit','sit',4,'等你摸摸'));});};
$('bWand').onclick=()=>setMode(mode==='wand'?'hand':'wand');
$('bTreat').onclick=()=>{initAudio();setMode(mode==='treat'?'hand':'treat');};
function act(fn){stopGather();initAudio();if(mode!=='hand')setMode('hand');interrupt();if(deferLitterExit(fn))return;if(cat.state==='hop'){const f=cat.then;cat.then=()=>{f&&f();fn();};return;}fn();}
$('bFood').onclick=()=>act(()=>{bowl.food=1;sfx.crunch();popMeow('mid');goEat('聽到飼料聲，跑過來了');});
$('bWater').onclick=()=>act(()=>goDrink('走去喝水'));
$('bLitter').onclick=()=>act(()=>goLitter('走去貓砂盆'));
$('bSun').onclick=()=>act(()=>goSun('走去窗邊曬太陽'));
function chooseSleep(destination){act(()=>{cat.sleepChoice=destination;if(destination==='box')goSleep('走回紙箱準備睡覺');else if(!goMatSleep(true)){cat.sleepChoice=null;say('先照顧一下肚子、喝水或廁所，再安心睡覺');chooseNext();}});toolbarSelection.requested='bSleep';activeToolId='';syncToolbar();}
const sleepMenu=window.GatherMenu?.create({trigger:$('bSleep'),panel:$('sleepChoices'),container:$('tools'),document,choices:[{button:$('bSleepBox'),onSelect:()=>chooseSleep('box')},{button:$('bSleepMat'),onSelect:()=>chooseSleep('mat')}]});
$('bBellyStroke').onclick=()=>{if(cat.pose!=='belly')return;startPet();bellyStroke(60);bump('love',3);puff('heart',cat.x,cat.y-65);pet.on=false;cat.timer=Math.max(cat.timer,9);};
$('bBelly').onclick=()=>act(()=>{const p=ownerSpot();moveTo(p.x,p.y,90,()=>{cat.state='belly';cat.pose='belly';cat.timer=14;cat.eyes='half';cat.wiggle=0;pet.belly=0;beginBellySession();popMeow('mew');
  say('翻過來露出粉紅肚肚，在肚子上輕輕滑動摸摸看');},'走到你面前');});
$('bWalk').onclick=()=>act(()=>{const points=cat.x>300?[[100,470],[500,610],[120,610]]:[[500,470],[100,610],[480,610]];function next(){const p=points.shift();if(!p){doFor('sit','sit',4,'散步完，坐下來休息');return;}moveTo(p[0],p[1],65,next,'黑屁屁在房間裡慢慢散步');}next();});
$('bRestTurn').onclick=()=>{if(cat.pose==='toastsit'){changeToastRest();cat.timer=Math.max(cat.timer,30);}};
$('bToast').onclick=()=>act(()=>goToast());
const gatherMenu=window.GatherMenu?.create({trigger:$('bGather'),panel:$('gatherChoices'),photo:$('bGatherPhoto'),television:$('bGatherTV'),container:$('tools'),document,
 onPhoto:()=>{initAudio();gatherWhistle();startGather();},onTV:()=>{initAudio();startTVWatching();}});
$('bEle').onclick=()=>act(()=>{const e=toys[0];if(!toyFree(e)){say('大象寶寶在你手上呢');return;}fetchToy(e,'wander');});

/* Highlight the running action, including travel to the selected destination. */
const toolButtons=Array.from(document.querySelectorAll('#tools .grid button'));
const toolbarSelection={requested:null,flash:null,until:0};
let activeToolId='';
function currentToolButton(){
  if(gather.active||tvCats?.isGroupMember(cat))return 'bGather';
  if(cat.sleepChoice)return 'bSleep';
  if(cat.state!=='walk'&&cat.state!=='hop')toolbarSelection.requested=null;
  if(mode==='wand')return 'bWand';
  if(mode==='treat')return 'bTreat';
  if(toolbarSelection.flash&&cat.time<toolbarSelection.until)return toolbarSelection.flash;
  if(pet.on)return cat.pose==='belly'?'bBellyStroke':'bHand';
  const actions={eat:'bFood',drink:'bWater',litter:'bLitter',scratch:'bLitter',sun:'bSun',window:'bSun',sleep:'bSleep',matSleep:'bSleep',toast:'bToast'};
  if(cat.pose==='belly')return 'bBelly';
  if(cat.pose==='toastsit')return 'bToast';
  if(cat.act&&actions[cat.act])return actions[cat.act];
  if(cat.state==='walk'||cat.state==='hop'){
    if(toolbarSelection.requested)return toolbarSelection.requested;
    if((cat.targetToy&&cat.targetToy.fav)||(cat.carry&&cat.carry.fav))return 'bEle';
    return 'bWalk';
  }
  toolbarSelection.requested=null;
  return 'bHand';
}
function syncToolbar(){
  const id=currentToolButton();
  if(id===activeToolId)return;
  activeToolId=id;
  for(const button of toolButtons)button.setAttribute('aria-pressed',button.id===id?'true':'false');
}
for(const button of toolButtons){
  const handler=button.onclick;
  button.onclick=function(e){
    if(handler)handler.call(this,e);
    if(['bSleep','bGather'].includes(button.id))return;
    toolbarSelection.requested=button.id;
    toolbarSelection.flash=['bBellyStroke','bRestTurn'].includes(button.id)?button.id:null;
    toolbarSelection.until=cat.time+.85;
    activeToolId='';syncToolbar();
  };
}
syncToolbar();

/* ---------- render ---------- */
function drawBubble(c){
  const asking=cat.state==='ask';if(cat.meowPop<=0&&(!asking||cat.askKind==='meow'))return;
  const head=({sleep:78,loaf:80,sun:96,belly:96,eat:70,crouch:70,lick:150}[cat.pose]||132);
  const showMeow=cat.meowPop>0,x=cat.x,cy=cat.y-cat.z-head-22;
  // Keep the label in the same world transform as the cat during pan and zoom.
  c.save();
  if(showMeow){c.fillStyle='#3b3228';c.font='700 32px "LXGW WenKai TC",serif';c.textAlign='center';c.textBaseline='middle';c.fillText('喵～',x,cy+1);}
  else if(cat.askKind==='food'){c.fillStyle='#e9e2d6';c.beginPath();c.moveTo(x-14,cy-2);c.lineTo(x+14,cy-2);c.lineTo(x+10,cy+9);c.lineTo(x-10,cy+9);c.fill();
    c.fillStyle='#8a5328';for(const [dx,dy] of [[-6,-5],[0,-7],[6,-5],[-2,-3],[4,-2]]){c.beginPath();c.arc(x+dx,cy+dy,2.3,0,7);c.fill();}}
  else if(cat.askKind==='love'){c.fillStyle='#f07b98';heart(c,x,cy+1,2.4);}
  else if(cat.askKind==='play'){const t=toys.find(t=>!t.carried&&Math.hypot(t.x-cat.x,t.y-cat.y)<90)||toys[0];drawToy(c,t,x,cy+15,.55,0,0);}
  else{c.fillStyle='#3b3228';c.font='700 32px "LXGW WenKai TC",serif';c.textAlign='center';c.textBaseline='middle';c.fillText('喵',x,cy+1);}
  c.restore();
}
function diningDepth(actor){if(lift.actor===actor)return H+100;const care=actor.facilityCare;if(actor===cat&&care?.phase==='use'&&['eat','drink'].includes(care.kind))return H+20;return care?.phase==='use'&&care.kind!=='litter'?Math.max(actor.y,FACILITIES[care.kind].y+2):actor.y;}
function render(){
  const c=ctx;c.setTransform(1,0,0,1,0,0);c.fillStyle='#e4dccf';c.fillRect(0,0,cv.width,cv.height);
  const s=cam.s*DPR;c.setTransform(s,0,0,s,-cam.x*s,-cam.y*s);
  c.imageSmoothingQuality='high';
  c.save();c.beginPath();const desktopRoom=document.documentElement.getAttribute('data-layout')==='desktop';c.rect(EX0,desktopRoom?EY0:0,EW,desktopRoom?EH:EH+EY0);c.clip();
  c.drawImage(bg,EX0,EY0,EW,EH);
  if(window.RoomOutdoors)RoomOutdoors.draw(c,roomPlan?{home:roomPlan.window,backdrop:homeBBackdrop}:desktopPanorama()?{left:-1000,width:2600,floor:FT,backdrop:homePanorama,panorama:true}:{left:HOME_SCENE_LEFT,width:HOME_SCENE_WIDTH,floor:FT,backdrop:homeBBackdrop});
  if(roomPlan)RoomLayout.drawFurniture(c,roomPlan,window.RoomDetail);
  else if(window.RoomDetail){if(desktopRoom)RoomDetail.drawDesktop(c,WindowScene,FT,homePlant);else RoomDetail.drawPhone(c,WindowScene,FT,HOME_SCENE_LEFT,HOME_SCENE_WIDTH,homeBBackdrop);}
  drawWallPhoto(c);
  if(roomTelevision&&(roomPlan||desktopRoom))RoomTV.drawFrame(c,roomTelevision.frame(),roomPlan?roomPlan.television.screen:desktopTVScreen);
  drawSun(c);
  if(window.RoomDetail)RoomDetail.drawMat(c,favouriteMatPhoto,FAVOURITE_MAT);
  drawToast(c);
  drawGroundRipples(c);drawPuddles(c);drawScratchBoards(c);
  const list=[
    
    {y:BOX.back,d:boxBack},{y:BOX.front+1,d:boxFront},
    {y:BOWL.y,d:drawBowl},{y:WATER.y,d:drawWater},
    {y:LIT.back,d:litterBack},{y:LIT.front+2,d:litterFront},
    {y:diningDepth(cat),d:c=>{drawCat(c);drawYeMoodIcon(c,cat);}},
    {y:diningDepth(ye),d:drawYe},
    {y:diningDepth(rabbit),d:drawRabbit},
    ...extraNPCs.map(actor=>({y:diningDepth(actor),d:c=>drawWalkingNpc(c,actor)})),
  ];
  if(!roomPlan&&!desktopRoom)list.push({y:Math.max(...phoneTV.footprint.map(p=>p[1]))+1,d:c=>{WindowScene.drawPhoneTelevision(c,FT);if(roomTelevision)RoomTV.drawFrame(c,roomTelevision.frame(),phoneTV.screen);}});
  for(const t of toys)if(!t.carried)list.push({y:t.y,d:c=>{
    c.fillStyle='rgba(60,30,8,.2)';c.beginPath();c.ellipse(t.x,t.y,t.size*.42*(1-Math.min(t.z,120)/240),5,0,0,7);c.fill();
    drawToy(c,t,t.x,t.y-t.z,1,t.rot);
  }});
  list.sort((a,b)=>a.y-b.y).forEach(o=>o.d(c));drawGatherMoodIcons(c);drawPuddleReactions(c);tvCats?.drawMoods(c);
  if(mode==='wand')drawWand(c);
  if(mode==='treat')drawTreat(c);
  if(cat.pose==='lick')drawTongue(c);
  drawParts(c);
  drawBubble(c);
  c.restore();
}
function reviewRoamProgress(actor,dt){
 // Track meaningful progress to the final destination, not a few animated steps.
 if(actor.state!=='walk'||actor.facilityCare||actor.gatherSlot||actor.trafficYield||lift.actor===actor){actor.progressWatch=null;return false;}
 const goal=(actor===cat?actor.walkGoal:actor.goal)||actor.path?.at(-1);if(!goal){actor.progressWatch=null;return false;}
 const distance=Math.hypot(actor.x-goal.x,actor.y-goal.y);if(distance<10){actor.progressWatch=null;return false;}
 let w=actor.progressWatch;
 if(!w||Math.hypot(goal.x-w.gx,goal.y-w.gy)>8){actor.progressWatch={gx:goal.x,gy:goal.y,best:distance,elapsed:0};return false;}
 if(w.best-distance>=18){w.best=distance;w.elapsed=0;return false;}
 w.elapsed+=dt;if(w.elapsed<6)return false;
 if(actor===cat){for(const other of [ye,rabbit,...extraNPCs])if(pairDistance(actor,other)<3)allowTrafficPass(actor,other);rerouteTraffic(actor);actor.progressWatch=null;return false;}
 actor.roamAvoid=(actor.roamAvoid||[]).filter(p=>p.until>facilityClock.time);actor.roamAvoid.push({x:goal.x,y:goal.y,until:facilityClock.time+20});if(actor.roamAvoid.length>4)actor.roamAvoid.shift();
 actor.roamRecoveries=(actor.roamRecoveries||0)+1;actor.progressWatch=null;
 releaseScratchBoard(actor);actor.path=[];actor.goal=null;actor.yieldResume=null;actor.after=null;actor.wait=0;
 if(actor===ye)yeChooseDestination();else if(actor===rabbit)rabbitChooseDestination();else chooseWalkingDestination(actor);
 return true;
}
function finishLocomotionTick(actor,before,dt){
 if(!assemblyGoal(actor)&&reviewRoamProgress(actor,dt))return;
 const moving=Math.hypot(actor.x-before.x,actor.y-before.y)>.01;
 actor.walkingStill=actor.state==='walk'&&!moving;
 if(moving||!trafficGoal(actor)){actor.stalledFor=0;return;}
 actor.stalledFor=(actor.stalledFor||0)+dt;
 if(actor.walkingStill){actor.walkTime=before.walkTime;if(actor===cat)actor.pose='sit';}
 if(assemblyGoal(actor))return; // Group controller retains the slot and owns blocked-route replanning.
 if(actor.stalledFor<1.2)return;
 actor.stalledFor=0;
 for(const other of [cat,ye,rabbit,...extraNPCs])if(other!==actor&&pairDistance(actor,other)<2.5)allowTrafficPass(actor,other);
 if(rerouteTraffic(actor))return;
 // NPCs abandon inaccessible roaming goals; player commands keep priority.
 if(actor!==cat&&!actor.facilityCare&&!actor.gatherSlot&&!actor.trafficYield){
  releaseScratchBoard(actor);actor.path=[];actor.state='wait';actor.timer=.1;actor.goal=null;
 }
}
function televisionGeometry(){const screen=roomPlan?roomPlan.television.screen:desktopPanorama()?desktopTVScreen:phoneTV.screen;return {screen,seats:roomPlan?.tvSeats,x:(screen[0][0]+screen[1][0])/2,bottom:Math.max(...screen.map(p=>p[1])),right:Math.min(GX1,EX0+EW-30)};}
function hitTelevision(p){const q=televisionGeometry().screen;let inside=false;for(let i=0,j=q.length-1;i<q.length;j=i++){const a=q[i],b=q[j];if((a[1]>p.y)!==(b[1]>p.y)&&p.x<(b[0]-a[0])*(p.y-a[1])/(b[1]-a[1])+a[0])inside=!inside;}return inside;}
function startTVWatching(){if(deferLitterExit(startTVWatching))return;stopGather();interrupt();if(mode!=='hand')setMode('hand',true);beginControlledMode(()=>{cat.state='idle';cat.timer=.5;},'hand');const count=tvCats?.startAll()||0;say(count?'一起靠近電視，看著熟悉的身影，心裡暖暖的':'等大家忙完，再一起看電視');}
if(typeof window!=='undefined'&&window.CatTV)tvCats=CatTV.create({
 actors:()=>[cat,ye,rabbit,...extraNPCs],geometry:televisionGeometry,clock:()=>facilityClock.time,
 walkStep:(a,dt,speed,distance)=>{const motion=companionWalkStep(a,dt,speed,distance);if(a.id!=='socks')motion.time=(a.walkTime||0)+dt*speed/(a===ye?62:a===rabbit?110:80);return motion;},
 blocked:(p,a)=>yeBlocked(p.x,p.y,false,a),path:(a,p)=>yeFindPath(a.x,a.y,p.x,p.y,a),canStep:(a,p)=>yeCanStep(a,p,a)&&yeLineClear(a,p,a),
 excluded:a=>lift.actor===a||a.state==='hop'||!!a.gatherSlot||!!a.facilityCare||!!a.inside,
 yieldTick:(a,dt)=>updateTrafficYield(a,dt),
 eligible:a=>mode==='hand'&&!gather.active&&!a.carry&&!a.inside&&!a.facilityCare&&!a.gatherSlot&&!a.trafficYield&&lift.actor!==a&&((a===cat&&(a.state==='idle'||a.state==='timed'&&a.act==='look'&&a.timer<.3))||a!==cat&&a.state==='wait'),
 urgent:a=>a===cat?(needs.potty<25||needs.thirst<28||needs.hunger<35||needs.energy<22):!tvCats?.isGroupMember(a)&&(a.id==='dongdong'&&a.toiletDue<=facilityClock.time||a===ye&&Object.values(a.facilityDue||{}).some(t=>t<=facilityClock.time)),
 onTick:(a,dt)=>{if(a===cat)for(const n in DECAY)bump(n,-DECAY[n]*dt);},
 prepare:a=>{clearActorTrafficPasses(a);releaseScratchBoard(a);a.after=null;a.then=null;a.randomAction=null;a.path=[];a.trafficWatch=null;},
 resume:a=>{a.act=null;a.pose='sit';a.state=a===cat?'idle':'wait';a.timer=.5;a.path=[];a.goal=null;}
});
let last=performance.now(),uiT=0;
function frame(now){
  const elapsed=Math.max(0,(now-last)/1000),dt=Math.min(.05,elapsed);last=now;
  const actors=[cat,ye,rabbit,...extraNPCs],before=actors.map(a=>({x:a.x,y:a.y,walkTime:a.walkTime}));facilityClock.time+=dt;updatePuddles(elapsed);resolveTraffic();tvCats?.tick(dt);updateCat(dt);updateYe(dt);updateRabbit(dt);for(const actor of extraNPCs)updateWalkingNpc(actor,dt);if(cat.pose==='walk')videoWalkTime=advanceVideoWalk(videoWalkTime,dt,cat.speed);actors.forEach((a,i)=>finishLocomotionTick(a,before[i],dt));updateToys(dt);updateParts(dt);updateGroundRipples(dt);updatePuddleReactions();updateNpcVoices();updateCam(dt);syncToolbar();render();
  uiT-=dt;if(uiT<=0){refreshNeeds();uiT=.4;}
  requestAnimationFrame(frame);
}
if(window.RoomOutdoors)RoomOutdoors.start();
requestAnimationFrame(frame);
window.__cat={watchTV:startTVWatching,tvCats,cat,ye,rabbit,treat,setMode:(m)=>setMode(m),facilities:FACILITIES,slots:facilitySlots,reservations:facilityReservations,beginFacility,advanceFacility,facilityClock,updateNpcFacilities,pairDistance,yeBlocked,yeCanStep,yeFindPath,extraNPCs,releaseFacility};
})();

from stevenspass.models import Run, CategoryVO

run_data = [
  {
    "id": "promenade",
    "title": "Promenade",
    "shape": "poly",
    "name": "0",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "green",
    "coords": [
      1160, 712, 1196, 733, 1182, 763, 1171, 789, 1154, 829, 1146, 861, 1141,
      886, 1129, 914, 1118, 945, 1110, 973, 1105, 1003, 1095, 1032, 1088, 1064,
      1082, 1098, 1076, 1128, 1067, 1147, 1035, 1143, 1040, 1081, 1054, 1032,
      1069, 984, 1086, 939, 1088, 884, 1120, 793
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1100",
      "top": "880"
    }
  },
  {
    "id": "easystreet",
    "title": "Easy Street",
    "shape": "poly",
    "name": "1",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "green",
    "coords": [
      1305, 884, 1286, 924, 1273, 975, 1252,
      1045, 1233, 1107, 1216, 1132, 1252,
      1153, 1300, 1104, 1336, 958
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1270",
      "top": "1050"
    }
  },
  {
    "id": "76Road",
    "title": "76 Road",
    "shape": "poly",
    "name": "2",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "green",
    "coords": [
      1201, 714, 1233, 691, 1258, 733, 1262, 806, 1228, 829, 1220, 774
    ],
    "popup_settings": {
      "position": "top center",
      "left": "1230",
      "top": "730"
    }
  },
  {
    "id": "tyecreek",
    "title": "Tye Creek",
    "shape": "poly",
    "name": "3",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "green",
    "coords": [
      1228, 824, 1262, 809, 1283, 818, 1256, 866, 1228, 907, 1228, 947, 1230,
      989, 1207, 1063, 1180, 1004, 1169, 949, 1167, 896
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1200",
      "top": "900"
    }
  },
  {
    "id": "brennanstrail",
    "title": "Brennan's Trail",
    "shape": "poly",
    "name": "4",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      2322, 643, 2346, 637, 2350, 683, 2350, 717, 2352, 753, 2350, 781, 2335,
      802, 2314, 821, 2288, 827, 2246, 849, 2212, 868, 2174, 893, 2129, 914,
      2106, 919, 2070, 929, 2034, 950, 2025, 978, 2000, 1005, 1968, 1029, 1932,
      1052, 1881, 1065, 1820, 1084, 1775, 1094, 1741, 1105, 1695, 1116, 1640,
      1139, 1604, 1160, 1567, 1167, 1408, 1228, 1404, 1215, 1576, 1139, 1637,
      1114, 1688, 1094, 1748, 1069, 1790, 1061, 1869, 1035, 1909, 1020, 1939,
      1005, 1968, 969, 1981, 948, 2011, 927, 2045, 904, 2131, 863, 2199, 821,
      2240, 791, 2286, 768, 2307, 732, 2327, 694
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1990",
      "top": "975"
    }
  },
  {
    "id": "showcase",
    "title": "Showcase",
    "shape": "poly",
    "name": "5",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      412, 721, 454, 766, 420, 789, 405, 812,
      403, 840, 420, 861, 444, 876, 467,
      882, 490, 887, 511, 893, 535, 899, 558,
      908, 573, 912, 598, 923, 619, 931,
      636, 940, 653, 952, 670, 957, 694, 974, 725, 995, 791, 1033, 821, 1044,
      848, 1063, 872, 1077, 897, 1094, 924, 1113, 952, 1130, 975, 1145, 1009,
      1164, 1026, 1175, 1022, 1192, 988, 1188, 950, 1177, 905, 1156, 878, 1143,
      842, 1122, 814, 1103, 772, 1077, 730, 1056, 685, 1039, 653, 1014, 622,
      993, 586, 971, 539, 961, 505, 950, 465,
      944, 437, 938, 408, 929,
      378, 921,
      357, 899, 344, 863, 342, 808, 342, 772, 374, 736
    ],
    "popup_settings": {
      "position": "top center",
      "left": "380",
      "top": "880"
    }
  },
  {
    "id": "onelight",
    "title": "One Light",
    "shape": "poly",
    "name": "6",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1934, 929, 1911, 940, 1905, 952, 1892, 961, 1879, 976, 1856, 995, 1837,
      1003, 1822, 1001, 1801, 1008, 1722, 1063, 1743, 1065, 1784, 1061, 1911,
      1014, 1955, 931
    ],
    "popup_settings": {
      "position": "bottom center",
      "left": "1780",
      "top": "1035"
    }
  },
  {
    "id": "waterfall",
    "title": "Waterfall",
    "shape": "poly",
    "name": "7",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      2316, 683, 2324, 694, 2284, 762, 2223, 796, 2172, 827, 2125, 851, 2064,
      887, 2019, 904, 1987, 919, 1960, 925, 1934, 925, 1907, 936, 1866, 963,
      1830, 982, 1828, 993, 1803, 1005, 1788, 1011, 1722, 1056, 1699, 1075,
      1665, 1094, 1631, 1111, 1587, 1126, 1548, 1140, 1498, 1155, 1459, 1164,
      1423, 1176, 1377, 1193, 1402, 1168, 1449, 1143, 1508, 1123, 1563, 1102,
      1625, 1083, 1663, 1068, 1718, 1039,
      1879, 937, 1960, 892, 2110, 814, 2259,
      736
    ],
    "popup_settings": {
      "position": "top center",
      "left": "2050",
      "top": "850"
    }
  },
  {
    "id": "broadway",
    "title": "Broadway",
    "shape": "poly",
    "name": "8",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      2318, 642, 2297, 659, 2269, 682, 2231, 707, 2189, 735, 2157, 754, 2108,
      756, 2061, 762, 2015, 777, 2013, 798, 2070, 784, 2108, 780, 2025, 816,
      1860, 899, 1869, 914, 2110, 806, 2189, 767, 2261, 727, 2314, 683
    ],
    "popup_settings": {
      "position": "right center",
      "left": "2150",
      "top": "760"
    }
  },
  {
    "id": "skyline",
    "title": "Skyline",
    "shape": "poly",
    "name": "9",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      2261, 449, 2273, 464, 2252, 480, 2214, 497, 2191, 508, 2167, 527, 2129,
      557, 2100, 595, 2091, 629, 2085, 654, 2078, 682, 2066, 718, 2057, 739,
      2042, 758, 2008, 775, 2008, 798, 1970, 815, 1945, 854, 1858, 894, 1824,
      928, 1780, 962, 1735, 987, 1684, 1015, 1650, 1027, 1616, 1046, 1591,
      1068,
      1546, 1082, 1502, 1097, 1472, 1110, 1425, 1138, 1400, 1161, 1375, 1182,
      1351, 1208, 1334, 1216, 1319, 1203, 1355, 1163, 1413, 1123, 1455, 1095,
      1523, 1061, 1597, 1036, 1678, 983, 1731, 949, 1777, 926, 1833, 896, 1871,
      868, 1915, 834, 1966, 801, 2013, 741, 2068, 654, 2057, 601, 2078, 570,
      2117, 529, 2180, 485
    ],
    "popup_settings": {
      "position": "top center",
      "left": "2150",
      "top": "520"
    }
  },
  {
    "id": "barrierridge",
    "title": "Barrier Ridge",
    "shape": "poly",
    "name": "10",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      2290, 459, 2280, 485, 2257, 506, 2218, 533, 2184, 559, 2146, 584, 2108,
      614, 2093, 625, 2089, 671, 2142, 635, 2210, 578, 2261, 540, 2303, 495,
      2314, 466
    ],
    "popup_settings": {
      "position": "left center",
      "left": "2150",
      "top": "585"
    }
  },
  {
    "id": "marmotmeadows",
    "title": "Marmot Meadows",
    "shape": "poly",
    "name": "11",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      2057, 650, 2066, 659, 2008, 743, 1955, 777, 1917, 781, 1896, 773, 1900,
      754, 1977, 722
    ],
    "popup_settings": {
      "position": "top center",
      "left": "2000",
      "top": "710"
    }
  },
  {
    "id": "hogheaven",
    "title": "Hog Heaven",
    "shape": "poly",
    "name": "12",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1697, 601, 1695, 582, 1712, 572, 1737, 570, 1761, 567, 1786, 576, 1814,
      584, 1850, 597, 1873, 614, 1892, 635, 1907, 669, 1917, 699, 1930, 737,
      1898, 750, 1879, 752, 1869, 735, 1860, 701, 1809, 608, 1752, 612
    ],
    "popup_settings": {
      "position": "top center",
      "left": "1760",
      "top": "580"
    }
  },
  {
    "id": "hogwild",
    "title": "Hog Wild",
    "shape": "poly",
    "name": "13",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1879, 756, 1894, 777, 1873, 798, 1849, 818, 1811, 834, 1765, 851, 1722,
      875, 1697, 898, 1669, 909, 1637, 945, 1618, 970, 1574, 1010, 1527, 1042,
      1481, 1076, 1330, 1174, 1302, 1144, 1351, 1110, 1485, 1019, 1551, 957,
      1612, 913, 1697, 843
    ],
    "popup_settings": {
      "position": "top center",
      "left": "1450",
      "top": "1065"
    }
  },
  {
    "id": "international",
    "title": "International",
    "shape": "poly",
    "name": "14",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1803, 613, 1773, 630, 1756, 663, 1743, 683, 1743, 725, 1697, 835, 1741,
      814, 1763, 778, 1780, 757, 1805, 712, 1837, 666
    ],
    "popup_settings": {
      "position": "bottom center",
      "left": "1710",
      "top": "810"
    }
  },
  {
    "id": "bluetrail",
    "title": "Blue Trail",
    "shape": "poly",
    "name": "15",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1614, 635, 1640, 635, 1589, 707, 1559, 731, 1548, 750, 1519, 805, 1502,
      824, 1485, 860, 1478, 915, 1472, 974, 1449, 1036, 1345, 1110, 1349, 1085,
      1430, 974, 1442, 917, 1464, 798
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1450",
      "top": "950"
    }
  },
  {
    "id": "rocknblue",
    "title": "Rock N Blue",
    "shape": "poly",
    "name": "16",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1341, 894, 1307, 877, 1336, 807, 1347, 784, 1394, 760, 1434, 731, 1523,
      661, 1612, 614, 1657, 606, 1654, 629, 1614, 627, 1487, 733
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1350",
      "top": "850"
    }
  },
  {
    "id": "wallst",
    "title": "Wall St",
    "shape": "poly",
    "name": "17",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1472, 664, 1491, 679, 1430, 732, 1396, 753, 1372, 762, 1345, 766, 1324,
      777, 1294, 787, 1277, 793, 1264, 783, 1307, 751, 1355, 730, 1398, 721
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1480",
      "top": "718"
    }
  },
  {
    "id": "hootnholler",
    "title": "Hoot N Holler",
    "shape": "poly",
    "name": "18",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1525, 622, 1567, 611, 1565, 626, 1542, 643, 1523, 651, 1474, 658, 1442,
      668, 1404, 685, 1375, 704, 1345, 724, 1324, 734, 1266, 777, 1262, 762,
      1328, 698, 1372, 668, 1415, 647, 1493, 635
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1270",
      "top": "760"
    }
  },
  {
    "id": "slowpoke",
    "title": "Slow Poke",
    "shape": "poly",
    "name": "19",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1495, 631, 1485, 618, 1392, 631, 1358, 637, 1317, 648, 1292, 656, 1256,
      663, 1241, 678, 1245, 690, 1315, 663, 1417, 644
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1430",
      "top": "630"
    }
  },
  {
    "id": "hagenhill",
    "title": "Hagen Hill",
    "shape": "poly",
    "name": "20",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1686, 596, 1684, 571, 1618, 582, 1591, 592, 1544, 592, 1517, 594, 1478,
      596, 1419, 605, 1381, 611, 1349, 613, 1296, 622, 1283, 628, 1266, 656,
      1324, 641, 1385, 628, 1485, 615, 1512, 618, 1578, 607, 1623, 609
    ],
    "popup_settings": {
      "position": "top center",
      "left": "1430",
      "top": "610"
    }
  },
  {
    "id": "skidroad",
    "title": "Skid Road",
    "shape": "poly",
    "name": "21",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      936, 382, 936, 358, 976, 354, 999, 356, 1023, 360, 1057, 369, 1090, 379,
      1127, 394, 1158, 413, 1203, 435, 1241, 471, 1262, 494, 1286, 519, 1298,
      547, 1305, 587, 1286, 617, 1277, 630, 1262, 657, 1235, 676, 1230, 689,
      1201, 708, 1199, 691, 1230, 659, 1256, 627, 1269, 594, 1260, 566, 1224,
      515, 1196, 479, 1156, 452, 1120, 435, 1099, 418, 1071, 401, 1020, 384,
      980, 392
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1175",
      "top": "450"
    }
  },
  {
    "id": "cresttrail",
    "title": "Crest Trail",
    "shape": "poly",
    "name": "22",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "blue",
    "coords": [
      1008, 390, 1029, 390, 1071, 405, 1101, 424, 1133, 447, 1158, 458, 1190,
      479, 1249, 560, 1249, 596, 1237, 625, 1228, 649, 1222, 661, 1196, 685,
      1192, 634, 1205, 606, 1205, 551, 1201, 530, 1135, 488, 1082, 442, 1052,
      420
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1200",
      "top": "520"
    }
  },
  {
    "id": "i5",
    "title": "I-5",
    "shape": "poly",
    "name": "23",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      484, 745, 510, 735, 531, 748, 535, 773, 537, 801,
      575, 826, 603, 843,
      641,
      871, 677, 885, 719, 902, 777, 926, 821, 945, 861, 962,
      910, 979, 951,
      1002, 989, 1029, 1029, 1072, 1048, 1142,
      1035, 1155, 991, 1102, 951, 1066,
      893, 1032, 836, 1001, 800, 974,
      770, 949, 741, 934, 675, 925, 635, 898,
      560, 847, 505, 807
    ],
    "popup_settings": {
      "position": "right center",
      "left": "800",
      "top": "950"
    }
  },
  {
    "id": "parachute2",
    "title": "Parachute 2",
    "shape": "poly",
    "name": "24",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      1637, 668, 1646, 689, 1635, 740, 1646, 797, 1652, 837, 1640, 863, 1618,
      890, 1601, 911, 1553, 926, 1504, 943, 1485, 950, 1483, 916, 1519, 890,
      1563, 873, 1606, 846, 1608, 801, 1599, 765, 1589, 738
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1610",
      "top": "725"
    }
  },
  {
    "id": "lowerdiamond",
    "title": "Lower Diamond",
    "shape": "poly",
    "name": "25",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      571, 753, 586, 742, 645, 776, 664, 801,
      692, 822, 732, 861, 749, 873, 789,
      926, 709, 890, 696, 867, 586, 778
    ],
    "popup_settings": {
      "position": "left center",
      "left": "605",
      "top": "770"
    }
  },
  {
    "id": "trapper",
    "title": "Trapper",
    "shape": "poly",
    "name": "26",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      789, 926, 842, 938, 806, 900, 789,
      877, 789, 834, 783, 807, 768, 788, 745,
      777, 711, 767, 673, 756, 630, 743, 596, 728, 592, 741, 652, 773, 753, 868
    ],
    "popup_settings": {
      "position": "right center",
      "left": "670",
      "top": "770"
    }
  },

  {
    "id": "rollercoaster",
    "title": "Roller Coaster",
    "shape": "poly",
    "name": "27",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      980, 399, 1004, 391, 1050, 425, 1127, 488, 1194, 529, 1201, 550, 1171,
      545, 1129, 533, 1084, 505
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1040",
      "top": "425"
    }
  },
  {
    "id": "exhibition",
    "title": "Exhibition",
    "shape": "poly",
    "name": "28",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      1871, 842, 1843, 842, 1794, 876, 1763, 904, 1737, 923, 1750, 938, 1826,
      897, 1869, 866
    ],
    "popup_settings": {
      "position": "bottom center",
      "left": "1835",
      "top": "860"
    }
  },
  {
    "id": "panorama",
    "title": "Panorama",
    "shape": "poly",
    "name": "29",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      1894, 844, 1972, 791, 1902, 785, 1864, 815, 1784, 846, 1745, 872, 1714,
      895, 1692, 916, 1682, 938, 1675, 982, 1711, 957, 1733, 912, 1765, 893,
      1854, 832
    ],
    "popup_settings": {
      "position": "top center",
      "left": "1840",
      "top": "830"
    }
  },
  {
    "id": "parachute1",
    "title": "Parachute 1",
    "shape": "poly",
    "name": "30",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      1667, 624, 1688, 628, 1680, 651, 1682, 673, 1690, 696, 1697, 721, 1712,
      749, 1714, 772, 1712, 793, 1688, 842, 1686, 779, 1671, 751, 1650, 707,
      1644, 660
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1660",
      "top": "650"
    }
  },
  {
    "id": "headwall",
    "title": "Headwall",
    "shape": "poly",
    "name": "31",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "black",
    "coords": [
      2278, 479, 2271, 466, 2223, 494, 2197, 509, 2176, 524, 2155, 541, 2136,
      555, 2127, 566, 2117, 583, 2106, 596, 2102, 617, 2165, 568, 2208, 536,
      2259, 502
    ],
    "popup_settings": {
      "position": "left center",
      "left": "2100",
      "top": "600"
    }
  },
  {
    "id": "rockgarden",
    "title": "Rock Garden",
    "shape": "poly",
    "name": "32",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      1968, 304, 1966, 285, 1896, 306, 1852, 325, 1809, 350, 1796, 365, 1828,
      393, 1845, 397, 1932, 327
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1850",
      "top": "340"
    }
  },
  {
    "id": "lowerrockgarden",
    "title": "Lower Rock Garden",
    "shape": "poly",
    "name": "33",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      1792, 366, 1811, 383, 1784, 411, 1754, 440, 1714, 474, 1697, 510, 1661,
      555, 1642, 572, 1599, 584, 1612, 555, 1650, 504, 1701, 449, 1750, 398
    ],
    "popup_settings": {
      "position": "left center",
      "left": "1775",
      "top": "397"
    }
  },
  {
    "id": "littletree",
    "title": "Little Tree",
    "shape": "poly",
    "name": "34",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      1828, 394, 1811, 386, 1784, 418, 1754, 445, 1722, 473, 1714, 494, 1690,
      526, 1652, 570, 1699, 553, 1752, 519, 1786, 492, 1811, 452
    ],
    "popup_settings": {
      "position": "bottom center",
      "left": "1700",
      "top": "530"
    }
  },
  {
    "id": "cloud9",
    "title": "Cloud 9",
    "shape": "poly",
    "name": "35",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      2047, 290, 2032, 258, 1989, 273, 1972, 288, 1975, 309, 1953, 319, 1928,
      332, 1907, 358, 1892, 381, 1871, 413, 1845, 451, 1822, 474, 1780, 508,
      1737, 533, 1716, 548, 1737, 565, 1769, 563, 1811, 525, 1845, 512, 1888,
      478, 1922, 434, 1941, 391, 1953, 349, 1970, 330
    ],
    "popup_settings": {
      "position": "right center",
      "left": "1900",
      "top": "375"
    }
  },
  {
    "id": "bobbychute",
    "title": "Bobby Chute",
    "shape": "poly",
    "name": "36",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      2083, 251, 2104, 242, 2119, 268, 2138, 308, 2134, 327, 2142, 344, 2144,
      367, 2157, 395, 2180, 410, 2206, 429, 2216, 435, 2216, 452, 2195, 459,
      2165, 446, 2142, 431, 2117, 408, 2106, 370, 2104, 329
    ],
    "popup_settings": {
      "position": "bottom center",
      "left": "2175",
      "top": "425"
    }
  },
  {
    "id": "nancychute",
    "title": "Nancy Chute",
    "shape": "poly",
    "name": "37",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      2106, 242, 2127, 240, 2159, 264, 2174, 302, 2197, 329, 2212, 357, 2233,
      393, 2248, 431, 2257, 446, 2242, 454, 2184, 389, 2174, 378, 2163, 344,
      2144, 304
    ],
    "popup_settings": {
      "position": "left center",
      "left": "2170",
      "top": "310"
    }
  },
  {
    "id": "solitude",
    "title": "Solitude",
    "shape": "poly",
    "name": "38",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      2176, 300, 2170, 269, 2229, 302, 2261, 349, 2286, 377, 2297, 417, 2290,
      453, 2261, 440, 2259, 402, 2246, 368, 2225, 332, 2201, 313
    ],
    "popup_settings": {
      "position": "top center",
      "left": "2175",
      "top": "285"
    }
  },
  {
    "id": "wildkatz",
    "title": "Wild Katz",
    "shape": "poly",
    "name": "39",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      469, 379, 531, 385, 543, 421, 580,
      440, 611, 476, 645, 506, 671, 548, 709,
      606, 758, 652, 813, 709, 889, 769, 948, 805, 1014, 843, 1095, 887, 1088,
      924, 1001, 881, 921, 828, 830, 760,
      743, 688, 618, 523, 531, 449, 497, 425
    ],
    "popup_settings": {
      "position": "right center",
      "left": "750",
      "top": "665"
    }
  },
  {
    "id": "lowerterminal",
    "title": "Lower Terminal",
    "shape": "poly",
    "name": "40",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      2314, 468, 2322, 457, 2337, 485, 2341, 510, 2339, 542, 2341, 574, 2337,
      608, 2324, 629, 2299, 637, 2282, 650, 2288, 606, 2303, 567, 2310, 523
    ],
    "popup_settings": {
      "position": "left center",
      "left": "2290",
      "top": "630"
    }
  },
  {
    "id": "doublediamond",
    "title": "Double Diamond",
    "shape": "poly",
    "name": "41",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "doubleblack",
    "coords": [
      382, 399, 423, 401, 454, 433, 476,
      463, 512, 514, 522, 558, 520, 609, 522,
      641, 548, 654, 569, 685, 584, 715,
      590, 724, 567, 751, 533, 724, 514, 711,
      482, 622, 437, 543, 399, 488
    ],
    "popup_settings": {
      "position": "right center",
      "left": "485",
      "top": "600"
    }
  },
  {
    "id": "kehrschair",
    "title": "Kehr's Chair",
    "shape": "poly",
    "name": "42",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [1046, 1184, 1059, 1174, 473, 735, 465, 748],
    "lift_data": {
      "vertical_rise": "798",
      "riders_per_hour": "1,300",
      "type": "Quad"
    },
    "popup_settings": {
      "position": "right center",
      "left": "750",
      "top": "950"
    }
  },
  {
    "id": "doublediamondlift",
    "title": "Double Diamond Lift",
    "shape": "poly",
    "name": "43",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [507, 738, 518, 733, 331, 382, 317, 390],
    "lift_data": {
      "vertical_rise": "682",
      "riders_per_hour": "1,200",
      "type": "Triple"
    },
    "popup_settings": {
      "position": "right center",
      "left": "355",
      "top": "450"
    }
  },
  {
    "id": "tyemilll",
    "title": "Tye Mill",
    "shape": "poly",
    "name": "44",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [904, 367, 919, 361, 1188, 702, 1173, 713],
    "lift_data": {
      "vertical_rise": "708",
      "riders_per_hour": "1,680",
      "type": "Triple"
    },
    "popup_settings": {
      "position": "left center",
      "left": "980",
      "top": "450"
    }
  },
  {
    "id": "daisy",
    "title": "Daisy",
    "shape": "poly",
    "name": "45",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [1196, 1145, 1211, 1149, 1315, 816, 1298, 812],
    "lift_data": {
      "vertical_rise": "309",
      "riders_per_hour": "1,520",
      "type": "Quad"
    },
    "popup_settings": {
      "position": "left center",
      "left": "1275",
      "top": "900"
    }
  },
  {
    "id": "hogsbackexpress",
    "title": "Hogsback Express",
    "shape": "poly",
    "name": "46",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [1241, 1202, 1252, 1210, 1701, 585, 1688, 581],
    "lift_data": {
      "vertical_rise": "789",
      "riders_per_hour": "2,400",
      "type": "Quad"
    },
    "popup_settings": {
      "position": "right center",
      "left": "1500",
      "top": "840"
    }
  },
  {
    "id": "skylineexpress",
    "title": "Skyline Express",
    "shape": "poly",
    "name": "47",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [1370, 1200, 1381, 1210, 2301, 458, 2290, 447],
    "lift_data": {
      "vertical_rise": "1,209",
      "riders_per_hour": "2,200",
      "type": "Quad"
    },
    "popup_settings": {
      "position": "left center",
      "left": "2050",
      "top": "645"
    }
  },
  {
    "id": "brooksexpress",
    "title": "Brooks Express",
    "shape": "poly",
    "name": "48",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [1396, 1227, 1411, 1240, 2327, 638, 2316, 623],
    "lift_data": {
      "vertical_rise": "793",
      "riders_per_hour": "1,200",
      "type": "Quad"
    },
    "popup_settings": {
      "position": "right center",
      "left": "2050",
      "top": "802"
    }
  },
  {
    "id": "7thheaven",
    "title": "7th Heaven",
    "shape": "poly",
    "name": "49",
    "fillColor": "#eab54d4d",
    "strokeColor": "black",
    "category": "chairlift",
    "coords": [2244, 471, 2259, 461, 2055, 259, 2038, 268],
    "lift_data": {
      "vertical_rise": "444",
      "riders_per_hour": "863",
      "type": "Double"
    },
    "popup_settings": {
      "position": "left center",
      "left": "2100",
      "top": "320"
    }
  }
]


def select_category(run_category):
    if run_category == "green":
        return CategoryVO.objects.get(category="green")
    elif run_category == "blue":
        return CategoryVO.objects.get(category="blue")
    elif run_category == "black":
        return CategoryVO.objects.get(category="black")
    elif run_category == "doubleblack":
        return CategoryVO.objects.get(category="double black")
    else:
        return CategoryVO.objects.get(category="chairlift")


def run():
    # loads cateogries
    CategoryVO.objects.create(category="green")
    CategoryVO.objects.create(category="blue")
    CategoryVO.objects.create(category="black")
    CategoryVO.objects.create(category="double black")
    CategoryVO.objects.create(category="chairlift")
    # loads run data
    for run in run_data:
        Run.objects.create(
            id=run['name'],
            title=run['title'],
            category=select_category(run['category'])
        )
    print("run_data successfully imported")

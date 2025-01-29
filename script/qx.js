function Quiz() {
return {"QCount": 6,"File": "D:\Pasca Sarjana Unsil\Tesis\Bahan Tesis\Bahan E-Modul\Kuis 1 (Published)\KuisXpress-1.qx"};
}
function SetAreasForQ(q) { switch(q) {
case 0:
$('#area0').attr("coords", "12, 175, 393, 326");
$('#area1').attr("coords", "406, 175, 787, 326");
$('#area2').attr("coords", "12, 339, 393, 490");
$('#area3').attr("coords", "406, 339, 787, 490");
break;

case 1:
$('#area0').attr("coords", "399, 144, 774, 232");
$('#area1').attr("coords", "399, 244, 774, 332");
$('#area2').attr("coords", "399, 345, 774, 433");
$('#area3').attr("coords", "399, 446, 774, 534");
break;

case 2:
$('#area0').attr("coords", "12, 175, 393, 326");
$('#area1').attr("coords", "406, 175, 787, 326");
$('#area2').attr("coords", "12, 339, 393, 490");
$('#area3').attr("coords", "406, 339, 787, 490");
break;

case 3:
$('#area0').attr("coords", "12, 175, 393, 326");
$('#area1').attr("coords", "406, 175, 787, 326");
$('#area2').attr("coords", "12, 339, 393, 490");
$('#area3').attr("coords", "406, 339, 787, 490");
break;

case 4:
$('#area0').attr("coords", "12, 175, 393, 326");
$('#area1').attr("coords", "406, 175, 787, 326");
$('#area2').attr("coords", "12, 339, 393, 490");
$('#area3').attr("coords", "406, 339, 787, 490");
break;

case 5:
$('#area0').attr("coords", "12, 175, 393, 326");
$('#area1').attr("coords", "406, 175, 787, 326");
$('#area2').attr("coords", "12, 339, 393, 490");
$('#area3').attr("coords", "406, 339, 787, 490");
break;
 } }
function Q(q) { switch(q) {
case 0: return {"Time": 30,"Points": 10,"PointsLow": 10,"Correct": "","Type": "audienceresponse"};
case 1: return {"Time": 30,"Points": 10,"PointsLow": 10,"Correct": "B","Type": "question"};
case 2: return {"Time": 30,"Points": 10,"PointsLow": 10,"Correct": "B","Type": "question"};
case 3: return {"Time": 30,"Points": 10,"PointsLow": 10,"Correct": "C","Type": "question"};
case 4: return {"Time": 30,"Points": 10,"PointsLow": 10,"Correct": "B","Type": "question"};
case 5: return {"Time": 30,"Points": 10,"PointsLow": 10,"Correct": "A","Type": "question"};
 } }

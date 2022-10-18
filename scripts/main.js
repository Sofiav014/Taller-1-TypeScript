import { dataSeries } from './dataSeries.js';
var seriesTbody = document.getElementById('series'); // Nodo tbody que tiene el id="series"
renderCoursesInTable(dataSeries);
getAverageSeasons(dataSeries);
function renderCoursesInTable(series) {
    series.forEach(function (s) {
        var trElement = document.createElement("tr");
        trElement.innerHTML = "<td>".concat(s.id, "</td>\n                           <td style=\"color: #0051ff;\">").concat(s.name, "</td>\n                           <td>").concat(s.channel, "</td>\n                           <td>").concat(s.season, "</td>");
        seriesTbody.appendChild(trElement);
    });
}
function getAverageSeasons(series) {
    var totalSeasons = 0;
    var averageSeasons = document.getElementById("season-average");
    series.forEach(function (s) { (totalSeasons += s.season); });
    averageSeasons.innerHTML = "".concat((totalSeasons / series.length));
}

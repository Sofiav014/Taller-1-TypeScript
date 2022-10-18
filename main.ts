import { Serie } from './serie.js';
import { dataSeries } from './dataSeries.js';

const seriesTbody: HTMLElement = document.getElementById('series')!; // Nodo tbody que tiene el id="series"

renderCoursesInTable(dataSeries);
getAverageSeasons(dataSeries);

function renderCoursesInTable(series: Serie[]): void {
  series.forEach(s => {
    let trElement = document.createElement("tr");
    trElement.innerHTML = `<td>${s.id}</td>
                           <td style="color: #0051ff;">${s.name}</td>
                           <td>${s.channel}</td>
                           <td>${s.season}</td>`;
    seriesTbody.appendChild(trElement);
  });
}


function getAverageSeasons(series: Serie[]): void {
  let totalSeasons: number = 0;
  let averageSeasons: HTMLElement = document.getElementById("season-average")!;
  series.forEach((s) => {(totalSeasons += s.season)});
  averageSeasons.innerHTML = `${(totalSeasons / series.length)}`;
}
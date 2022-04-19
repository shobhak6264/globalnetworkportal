import {array} from './data/data.js';
import {createTitle,createName,createDesc,createChart,createImage} from './functions/functions.js';
import {display} from './functions/functions.js';

let img_vis = "";

array.forEach((path) => {
  const titlee = createTitle(path.title);
  const namee = createName(path.name);
  const descc = createDesc(path.description);
  const chart = createChart(path.chart_content);
  const image = createImage(path.image_content);
  const chart_js_1 = path.Chart;
  const image_check = path.image;
  display(namee, titlee, descc, chart_js_1, chart, image_check, image);
});






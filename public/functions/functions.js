import {modal_display}from './modal.js';
export function createDiv() {
  const div_create = document.createElement("div");
  return div_create;
}

export function createTitle(titlee) {
  const title = document.createElement("h2");
  title.innerText = titlee;
  return title;
}

export function createName(namee) {
  const name = document.createElement("h4");
  name.innerText = namee;
  return name;
}

export function createDesc(descc) {
  const desc = document.createElement("p");
  desc.innerText = descc;
  return desc;
}


export function createFooter() {
  const footer = document.createElement("div");
  footer.setAttribute(
    "style",
    "display:flex;flex-direction: row-reverse;justify-content: flex-start;align-items: center;"
  );
  const viewmore = document.createElement("h5");
  const icon = document.createElement("i");
  icon.setAttribute("class", "fa fa-arrow-right");
  icon.setAttribute("style", "float:right");
  viewmore.setAttribute("style", "float:right");
  viewmore.innerText = "View More";
  footer.setAttribute("onclick", modal_display());
  footer.appendChild(icon);
  footer.appendChild(viewmore);
  return footer;
}

export function createLine() {
  const line = document.createElement("hr");
  return line;
}

export function createChart(chart_content) {
  const figure = document.createElement("figure");
  figure.setAttribute("class", "highcharts-figure");
  const div = document.createElement("div");
  div.setAttribute("id", chart_content);
  figure.appendChild(div);
  return figure;
}

export function createImage(image_content) {
  const img = document.createElement("img");
  img.setAttribute("src", image_content);
  img.style.width = "700px";
  return img;
}

export function submittest() {
  let f_title = document.getElementById("titleget").value;
  let f_name = document.getElementById("nameget").value;
  let f_des = document.getElementById("descget").value;
  let c_ck = document.getElementById("chart_check").value;
  let i_ck = document.getElementById("img_check").value;
  let f_imgurl = document.getElementById("imageurlget").value;
  let f_charturl = document.getElementById("charturlget").value;
  let push = {
    name: f_title,
    title: f_name,
    view_more_content: f_des,
    chart_check: c_ck,
    charturl: f_charturl,
    image_check: i_ck,
    imgurl: f_imgurl,
  };
  array.unshift(push);
  alert("Form Submitted");
  const titlee = createTitle(f_title);
  const namee = createName(f_name);
  const descc = createDesc(f_des);
  const chart = createChart(f_charturl);
  const image = createImage(f_imgurl);
  const chart_js_1 = c_ck;
  const image_check = i_ck;
  display(namee, titlee, descc, c_ck, chart, i_ck, image);
  console.log("Array Get Values", array);
  // document.getElementById("modal-content").reset();
}

export function display(
  name,
  title,
  desc,
  chart_js_1,
  chart,
  image_check,
  image
) {
  const card = document.getElementById("cards");
  const cr_div = createDiv();
  const cr_div1 = createDiv();
  const card_footer = createFooter();
  const line = createLine();
  cr_div1.appendChild(title);
  cr_div1.appendChild(name);
  if (image_check != true && chart_js_1 != true) {
    cr_div1.appendChild(desc);
  } else if (chart_js_1 == true) {
    cr_div1.appendChild(chart);
  } else if (image_check == true) {
    cr_div1.appendChild(image);
  }
  cr_div1.appendChild(line);
  cr_div1.appendChild(card_footer);
  cr_div.appendChild(cr_div1);
  card.appendChild(cr_div);
}


export function f_data() {
    if (f_img_check == true) {
      f_img_div.style.display = "block";
    } else if (f_chart_check == true) {
      f_chart_div.style.display = "block";
    }
  }
  
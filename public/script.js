let modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
let card_name = document.getElementsByClassName("card_name");
let card_title = document.getElementById("card_title");

// var span = document.getElementsByClassName("close")[0];
// span.onclick = function close() {
//   modal.style.display = "none";
// };
function modal_display() {
  modal.style.display = "block";
  // const div=document.createElement('div');
  // div.setAttribute('class','modal-content');
  // modal.appendChild(div);
  // const title = document.createElement('input');
  // title.setAttribute('type','text');
  // div.appendChild(title);
  // const button = document.createElement('button');
  // button.innerText="SUBMIT";
  // title.setAttribute('onclick','submittest()');
  // div.appendChild(button);
}

window.onclick = function (event) {
  if (event.target == modal) {
    modal.style.display = "none";
  }
};

document.getElementById("plus").addEventListener("click", () => {
  document.getElementById("myModal").style.display = "block";
});

let array = [
  {
    name: "MARVEL",
    title: "Datacenter Overview",
    description: "",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "container-1",
    image: false,
    image_content: "",
  },
  {
    name: "STUDIO PRODUCTION NETWORK",
    title: "Requests Overview",
    description: "",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "container-2",
    image: false,
    image_content: "",
  },
  {
    name: "MOTION PICTURE PRODUCTIONS",
    title: "",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    Chart: false,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "",
    image: false,
    image_content: "",
  },
  {
    name: "SEARCHLIGHT",
    title: "Datacenter Overview",
    description: "",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "container-3",
    image: false,
    image_content: "",
  },
  {
    name: "TCC TITLE",
    title: "",
    description: "",
    Chart: false,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "",
    image: true,
    image_content: "./assets/images/1.png",
  },
  {
    name: "LEARN MORE",
    title: "",
    description: "",
    Chart: false,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "",
    image: true,
    image_content: "./assets/images/2.png",
  },
];

let img_vis = "";
function createDiv() {
  const div_create = document.createElement("div");
  return div_create;
}
function createTitle(titlee) {
  const title = document.createElement('h2');
  title.innerText = titlee;
  return title;
}

function createName(namee) {
  const name = document.createElement("h4");
  name.innerText = namee;
  return name;
}

function createDesc(descc) {
  const desc = document.createElement("p");
  desc.innerText = descc;
  return desc;
}

function createFooter() {
  const footer = document.createElement("div");
  footer.setAttribute("style","display:flex;flex-direction: row-reverse;justify-content: flex-start;align-items: center;")
  const viewmore = document.createElement("h5");
  const icon = document.createElement('i');
  icon.setAttribute('class','fa fa-arrow-right');
  icon.setAttribute('style','float:right');
  viewmore.setAttribute("style","float:right");
  viewmore.innerText = "View More";
  footer.setAttribute("onclick", 'modal_display()');
  footer.appendChild(icon);
  footer.appendChild(viewmore);
  return footer;
}

function createLine()
{
  const line = document.createElement('hr');
  return line;
}

function createChart(chart_content) {
  const figure = document.createElement("figure");
  figure.setAttribute("class", "highcharts-figure");
  const div = document.createElement("div");
  div.setAttribute("id", chart_content);
  figure.appendChild(div);
  return figure;
}

function createImage(image_content) {
  const img = document.createElement("img");
  img.setAttribute("src", image_content);
  img.style.width = "700px";
  return img;
}

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


function submittest() {
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

function f_data() {
  if (f_img_check == true) {
    f_img_div.style.display = "block";
  } else if (f_chart_check == true) {
    f_chart_div.style.display = "block";
  }
}



function display(name, title, desc, chart_js_1, chart, image_check, image) {
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


let modal = document.getElementById("myModal");
var btn = document.getElementById("btn");
let card_name = document.getElementsByClassName("card_name");
let card_title = document.getElementById("card_title");

var span = document.getElementsByClassName("close")[0];
span.onclick = function close() {
  modal.style.display = "none";
};
function modal_display() {
  modal.style.display = "block";
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
    image:false,
    image_content:""
  },
  {
    name: "STUDIO PRODUCTION NETWORK",
    title: "Requests Overview",
    description:"",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "container-2",
    image:false,
    image_content:""

  },
  {
    name: "MOTION PICTURE PRODUCTIONS",
    title: "",
    description:"Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. ",
    Chart: false,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "",
    image:false,
    image_content:""
  },
  {
    name: "SEARCHLIGHT",
    title: "Datacenter Overview",
    description:"",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "container-3",
    image:false,
    image_content:""
  },
  {
    name: "TCC TITLE",
    title: "",
    description:"",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "",
    image:true,
    image_content:"./assets/images/1.png"
  },
  {
    name: "LEARN MORE",
    title: "",
    description:"",
    Chart: true,
    view_more: true,
    view_more_content: "lorel ipsum",
    chart_content: "",
    image:true,
    image_content:"./assets/images/2.png"
  },
];

let img_vis="";
function createDiv ()
{
  const div_create = document.createElement('div');
  return div_create;
}
function createTitle(titlee) {

  const title = document.createElement('h2');
  title.innerText = titlee;
  return title;
}

function createName(namee) {
  
  const name = document.createElement('h4');
  name.innerText = namee;
  return name;
  
}
let name_1 = "";
let title_1 = "";
let desc_1="";
let chart_js_1 = "";
let view_more_1 = "";
let chart_content = "";
let image_check = "";
let image_content = "";

// function reusable (title,name,description) {
//   const label = document.getElementById("cards");
//   const titlee = createTitle(title);
//   const namee = createName(name);
//   const descc = createDesc(description);
//   // const chart = createChart(path.chart_content);
//   name_1 = createTitle(name);
//   card.appendChild(titlee);
//   card.appendChild(namee);
//   card.appendChild(descc);
//   return card
// }
function createDesc(descc) {
  const desc = document.createElement('p');
  desc.innerText = descc;
  return desc;
}


function createFooter() {
  const footer = document.createElement('div');
  footer.style.display="flex";
  return footer;
}

function Viewmore() {
  const viewmore = document.createElement('h5');
  viewmore.style.float="right";
  viewmore.innerText = "View More";
  return viewmore;
}

function createChart(chart_content){
  const figure = document.createElement('figure');
  figure.setAttribute('class','highcharts-figure');
  const div = document.createElement('div');
  div.setAttribute('id',chart_content);
  figure.appendChild(div);
  return figure;
}

array.forEach((path) => {
  const card = document.getElementById("cards");
  const titlee = createTitle(path.title);
  const cr_div = createDiv();
  const cr_div1 = createDiv();
  const card_footer = createFooter();
  const view_more = Viewmore();
  const namee = createName(path.name);
  const descc = createDesc(path.description);
  const chart = createChart(path.chart_content);

  name_1 = createTitle(path.name);
  card.appendChild(cr_div);
  cr_div.appendChild(cr_div1);
  cr_div1.appendChild(titlee);
  cr_div1.appendChild(namee);
  cr_div1.appendChild(descc);
  cr_div1.appendChild(chart);
  cr_div1.appendChild(card_footer);
  card_footer.appendChild(view_more);




  // reusable(path.title,path.name,path.description)

  // card.appendChild(chart);

  // name_1 = path.name;
  // title_1 = path.title;
  // desc_1 = path.description;
  // chart_js_1 = path.Chart;
  // view_more_1 = path.view_more;
  // chart_content = path.chart_content;
  // image_check = path.image;
  // image_content = path.image_content;
  // console.log(image_content);
  // if(image_check != true && chart_js_1 != true){
  //   img_vis="none";
  //   display(name_1, title_1, desc_1 ,chart_content,img_vis,image_content);
  // }
  // else if(chart_js_1 == true )
  // { 
  //   img_vis="none";
  //   display(name_1, title_1,desc_1,chart_content,img_vis);
  // } 
  // else if(image_check == true)
  // {
  //   img_vis="block";
  //   display(name_1, title_1 , desc_1 , image_content, img_vis);
  // }
});

function displayy(name_1, title_1,desc,chart_content,image_content,img_vis) {
  let template = `<div>         
    <div>
      <h2 id="card_name">${name_1}</h2>
      <h4 id="card_title">${title_1}</h4>
      <p style="font-size:smaller">${desc}</p>
      <figure class="highcharts-figure">
        <div id="${chart_content}"></div>
      </figure>
      <img src="${image_content}" style="display:none;width:700px"/>
      <hr>
      <div class="card-footer" style="display:flex;flex-direction: row-reverse;justify-content: flex-start;align-items: center;">
      <i class="fa fa-arrow-right" style="float:right" onclick="modal_display()"></i>
       <h5 style="float:right">View More<h5>
      </div>
      
      
    </div>
</div>`;

  document.getElementById("cards").innerHTML += template;
  // document.getElementById("card_name").innerHTML += name_1;
  // document.getElementById("card_title").innerHTML +=title_1;
}
  let f_img_check = document.getElementById("img_check").value;
  let f_chart_check = document.getElementById("chart_check").value;
  let f_img_div = document.getElementById("f_img");
  let f_chart_div = document.getElementById("f_chart");
  
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
    chart_check:c_ck,
    charturl: f_charturl,
    image_check:i_ck,
    imgurl: f_imgurl
  };
  array.unshift(push);
  alert("Form Submitted");
  display(f_title, f_name,f_des,f_charturl,f_imgurl);
  console.log("Array Get Values", array);
  document.getElementById("modal-content").reset();
}

function f_data()
{
  if(f_img_check == true)
  {
    f_img_div.style.display="block";
  }
  else if(f_chart_check == true)
  {
    f_chart_div.style.display="block";
  }
}




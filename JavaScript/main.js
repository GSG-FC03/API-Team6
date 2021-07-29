const root = document.getElementById("root");
const logo = document.createElement("img");
logo.src = "./assets/NHTSA_500.jpg";
root.appendChild(logo);
const container = document.createElement("div");
container.setAttribute("class", "container");
root.appendChild(container);

fetch(
  "https://vpic.nhtsa.dot.gov/api/vehicles/GetWMIsForManufacturer/hon?format=json"
)
  .then((res) => res.json())
  .then((data) =>
    data.Results.forEach((veh) => {
      // console.log(veh.Name)
      // console.log(veh.Country)

      let box = document.createElement("rect");
      box.setAttribute("class", "box");
      container.appendChild(box);

      let boxTitle = document.createElement("div");
      boxTitle.setAttribute("class", "boxTitle");
      box.appendChild(boxTitle);
      boxTitle.textContent = veh.Name;

      let boxContent = document.createElement("div");
      boxContent.setAttribute("class", "boxContent");
      box.appendChild(boxContent);
      boxContent.textContent = `Country: ${veh.Country}`;
    })
  )
  .catch((err) => console.log(` Error source is ${err}`));

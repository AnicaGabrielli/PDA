const titulo = document.getElementById("titulo");
titulo.style.color = "blue";
titulo.style.textAlign = "center";
Object.assign(titulo.style,{
    backgroundColor: "brown",
    fontSize: "20px",
    margin: "10px",
});
titulo.style.cssText = "background-color:blue"
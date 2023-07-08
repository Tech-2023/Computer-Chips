var Points = 0;

function buttonClicked() {
    Points += 1;
    document.getElementById("ComputerChips").textContent = "Computer Chips: " + Points
    if (Points >= 1000) {
        Points += 5;
        document.getElementById("ComputerChips").textContent = "Computer Chips: " + Points
    }
    setInterval(function(){
        Points += 1;
        document.getElementById("ComputerChips").innerText = "Computer Chips: " + Points;
    }, 1);
    }



var ProComputerChips = 0;
function Prestige() {
    if(Points >= 50000) {
        Points -= 50000
        ProComputerChips += 1;
        document.getElementById("proComputerChips").textContent = "pro Computer Chips: " + ProComputerChips;
       }
       }


var MaxComputerChips = 0;
  function max() {
    if(ProComputerChips >= 10) {
    ProComputerChips -= 10;
    MaxComputerChips += 1;
    document.getElementById("MaxComputerChips").textContent = "Max Computer Chips: " + MaxComputerChips;
    }
  }
  var Universe = 0;
function Prestige2 () {
    if(MaxComputerChips>= 20) {
        MaxComputerChips -= 20
        Universe += 1;
        document.getElementById("universe2").textContent = "Universe Computer Chips: " + Universe;
       }
       }
window.onload = function() {
  var ctx = document.getElementById("myChart").getContext("2d");
  window.myBar = new Chart(ctx, {
    type: "bar",
    data: barChartData,
    options: chartOptions
  });

// document.getElementById("logout").addEventListener("click", function() {
//   console.log("log");
//   firebase.auth().signOut().then(function() {
//       window.location.href = "/index.html";
//   }, function(error) {
//       alert(err.message);
//   

    }
    //)});
;

// console.log("here");
// const yourData = await   
// let r2 = db.collection("users").get().then((doc) => {
//   const userIDs = [];
//   const response = data.forEach((doc) => {
//     userIDs.push(doc.data())
//  })
//  return userIDs;
// })

// // so here the yourData is iterable... here comes the part you just mentioned
// for (let doc of yourData) {
//   console.log(doc) // each element is here!
// }

var barChartData = {
  labels: [
    "Q1: Where will the character walk out of?",
    "Q2: How many people will talk in this scene?",
    "Q3: What will Luke accuse Jess of?",
    "Q4: What happens at the end?",
    "Q5: Why did the perp get away?",
    "Q6: How does Schmidt injure himself?",
    "Q7: What does Jenko say you have a right to?",
    "Q8: How many times will the phrase “Miranda rights” be said?"
  ],
  datasets: [
    {
      label: "Right",
      backgroundColor: "lightgreen",
      borderColor: "darkgreen",
      borderWidth: 1,
      data: [3, 5, 6, 7,3, 5, 6, 7]
    },
    {
      label: "Wrong",
      backgroundColor: "pink",
      borderColor: "maroon",
      borderWidth: 1,
      data: [4, 7, 3, 6, 10,7,4,6]
    },
  ]
};

var chartOptions = {
  responsive: true,
  legend: {
    position: "top"
  },
  title: {
    display: true,
    text: "Results"
  },
  scales: {
    yAxes: [{
      ticks: {
        beginAtZero: true
      }
    }]
  }
}  
let answers = [];
let radio1Check = false;
let radio2Check = false;
let radio3Check = false;
let radio4Check = false;
let radio5Check = false;
let radio6Check = false;
let radio7Check = false;
let radio8Check = false;
let radio9Check = false;
let radio10Check = false;
let radio11Check = false;
let radio12Check = false;
let radio13Check = false;
let radio14Check = false;
let radio15Check = false;
let radio16Check = false;


window.onload = function () {
    let forms = [
        { row: "r1", time: '5 seconds', question: 'Where will the character walk out of?',option1: "Supermarket", option2: "School", name: "first-choice", id1: "1", id2: "2", },
        { row: "r2", time: '5 seconds', question: 'How many people will talk in this scene?', option1: '2', option2: '3+', name: "second-choice", id1: "3", id2: "4" },
        { row: "r3", time: '5 seconds', question: 'What will Luke accuse Jess of? ', option1: 'Stealing money', option2: 'Stealing a car', name: "third-choice", id1: "5", id2: "6" },
        { row: "r4", time: '5 seconds', question: 'What happens at the end?', option1: 'Jess trips on a foot', option2: 'Any other result', name: "fourth-choice", id1: "7", id2: "8"},
        { row: "r5", time: '5 seconds', question: 'Why did the perp get away?', option1: "Forgot to bring handcuffs", option2: "Any other reason", name: "fifth-choice", id1: "9", id2: "10" },
        { row: "r6", time: '5 seconds', question: 'How does Schmidt injure himself?', option1: 'Sprained pinky', option2: 'Scraped elbow', name: "sixth-choice", id1: "11", id2: "12" },
        { row: "r7", time: '5 seconds', question: 'What does Jenko say you have a right to?', option1: 'Be whatever you want', option2: 'Any other result', name: "seventh-choice", id1: "13", id2: "14"},
        { row: "r8", time: '5 seconds', question: 'How many times will the phrase “Miranda rights” be said?', option1: '2', option2: '4', name: "eighth-choice", id1: "15", id2: "16" }
    ]

    let tablebody = document.getElementById("tablebody");

    forms.map((d, i) => {
        let row = document.createElement("tr");
        row.setAttribute("id", d.row);
        let rowID = document.createElement("th");
        let rowIDText = document.createTextNode("Question #" + (i + 1));
        rowID.append(rowIDText);

        let col1 = document.createElement("td");
        col1.setAttribute("id", d.name);
        let col1Span = document.createElement("SPAN");
        let col1Text = document.createTextNode(d.time);
        col1Span.append(col1Text);
        col1.append(col1Span);

        let col2 = document.createElement("td");
        let col2Text = document.createTextNode(d.question);
        col2.append(col2Text);
        let col3 = document.createElement("td");
        let col3Radio = document.createElement("input");
        col3Radio.setAttribute("type", "radio");
        col3Radio.setAttribute("name", d.name);
        col3Radio.setAttribute("id", d.id1);
        col3Radio.setAttribute("value", d.id1);
        // col3Radio.setAttribute("checked", "check")
        col3.append(col3Radio);
        let col3Option = document.createElement("label");
        col3Option.setAttribute("id", d.id1 + "label");
        col3Option.innerHTML = d.option1;
        col3.append(col3Option);
        
        let col4Area = document.createElement("div");
        let col4Radio = document.createElement("input");
        col4Radio.setAttribute("type", "radio");
        col4Radio.setAttribute("name", d.name);
        col4Radio.setAttribute("id", d.id2);
        col4Radio.setAttribute("value", d.id2);
        col4Area.append(col4Radio);
        col3.append(col4Radio);
        let col4Option = document.createElement("label");
        col4Option.setAttribute("id", d.id2 + "label");
        col4Option.innerHTML = d.option2;
        col3.append(col4Option);

        row.append(rowID);
        row.append(col1);
        row.append(col2);
        row.append(col3);

        tablebody.append(row);
    })

    let currentUser = firebase.auth().currentUser.uid;
    console.log(currentUser);

    db.collection("users")
    .doc(currentUser)
    .collection("quiz-answers")
    .doc("results")
    .set({
        question1: "0",
        question2: "0",
        question3: "0",
        question4: "0",
        question5: "0",
        question6: "0",
        question7: "0",
        question8: "0", 
        right: "0",
        wrong: "0"
    })
    .then(function() {
        console.log("Blank user answers were stored successfully");
    })
    .catch(function(error) {
        console.error("Error storing blank quiz answers: ", error);
    });

    db.collection("quiz-answers")
    .doc("results")
    .set({
        question1: "2",
        question2: "1",
        question3: "1",
        question4: "2",
        question5: "2",
        question6: "2",
        question7: "2",
        question8: "1"
    })
    .then(function() {
        console.log("Answers were stored successfully");
    })
    .catch(function(error) {
        console.error("Error storing quiz answers: ", error);
    });

    answers = ["2", "1", "1", "2", "2", "2", "2", "1"];

    document.getElementById("logout").addEventListener("click", function() {
        firebase.auth().signOut().then(function() {
            window.location.href = "/index.html";
        }, function(error) {
            alert(err.message);
        });
    });
}

window.addEventListener('load', function () {
    let currentUser = firebase.auth().currentUser.uid;
    console.log("current user: " + currentUser);

    let radioinput1 = document.getElementById("1");
    let radioinput2 = document.getElementById("2");
    let radioinput3 = document.getElementById("3");
    let radioinput4 = document.getElementById("4");
    let radioinput5 = document.getElementById("5");
    let radioinput6 = document.getElementById("6");
    let radioinput7 = document.getElementById("7");
    let radioinput8 = document.getElementById("8");
    let radioinput9 = document.getElementById("9");
    let radioinput10 = document.getElementById("10");
    let radioinput11 = document.getElementById("11");
    let radioinput12 = document.getElementById("12");
    let radioinput13 = document.getElementById("13");
    let radioinput14 = document.getElementById("14");
    let radioinput15 = document.getElementById("15");
    let radioinput16 = document.getElementById("16");
    radioinput1.addEventListener('change', startinputdisable);
    radioinput2.addEventListener('change', startinputdisable);
    radioinput3.addEventListener('change', startinputdisable);
    radioinput4.addEventListener('change', startinputdisable);
    radioinput5.addEventListener('change', startinputdisable);
    radioinput6.addEventListener('change', startinputdisable);
    radioinput7.addEventListener('change', startinputdisable);
    radioinput8.addEventListener('change', startinputdisable);
    radioinput9.addEventListener('change', startinputdisable);
    radioinput10.addEventListener('change', startinputdisable);
    radioinput11.addEventListener('change', startinputdisable);
    radioinput12.addEventListener('change', startinputdisable);
    radioinput13.addEventListener('change', startinputdisable);
    radioinput14.addEventListener('change', startinputdisable);
    radioinput15.addEventListener('change', startinputdisable);
    radioinput16.addEventListener('change', startinputdisable);
    
    let q1r1 = 0;
    let q2r1 = 0;
    let q3r1 = 0;
    let q4r1 = 0;
    let q5r1 = 0;
    let q6r1 = 0;
    let q7r1 = 0;
    let q8r1 = 0;

    function startinputdisable(event) {
        if ((radioinput1.checked || radioinput2.checked)) {
            if (radioinput1.checked) {
                q1r1 = 1;
                radio1Check = true;
                document.getElementById("1label").style.fontWeight = "bold";
                document.getElementById("2label").style.fontWeight = "normal";
            } else {
                q1r1 = 2;
                radio2Check = true;
                document.getElementById("1label").style.fontWeight = "normal";
                document.getElementById("2label").style.fontWeight = "bold";
            }

            if ((radio1Check === true && radio2Check === false) || (radio1Check === false && radio2Check === true)) {
                if (radio1Check === false) {
                    radio1Check = true;
                } else {
                    radio2Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput1.disabled = true;
                    radioinput2.disabled = true;
                    document.getElementById("first-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("first-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }
    
        if (radioinput3.checked || radioinput4.checked) {
            if (radioinput3.checked) {
                q2r1 = 1;
                radio3Check = true;
                document.getElementById("3label").style.fontWeight = "bold";
                document.getElementById("4label").style.fontWeight = "normal";
            } else {
                q2r1 = 2;
                radio4Check = true;
                document.getElementById("3label").style.fontWeight = "normal";
                document.getElementById("4label").style.fontWeight = "bold";
            }
            
            if ((radio3Check === true && radio4Check === false) || (radio3Check === false && radio4Check === true)) {
                if (radio3Check === false) {
                    radio3Check = true;
                } else {
                    radio4Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput3.disabled = true;
                    radioinput4.disabled = true;
                    document.getElementById("second-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("second-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }
        if (radioinput5.checked || radioinput6.checked) {
            if (radioinput5.checked) {
                q3r1 = 1;
                radio5Check = true;
                document.getElementById("5label").style.fontWeight = "bold";
                document.getElementById("6label").style.fontWeight = "normal";
            } else {
                q3r1 = 2;
                radio6Check = true;
                document.getElementById("5label").style.fontWeight = "normal";
                document.getElementById("6label").style.fontWeight = "bold";
            }
            
            if ((radio5Check === true && radio6Check === false) || (radio5Check === false && radio6Check === true)) {
                if (radio5Check === false) {
                    radio5Check = true;
                } else {
                    radio6Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput5.disabled = true;
                    radioinput6.disabled = true;
                    document.getElementById("third-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("third-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }

        if (radioinput7.checked || radioinput8.checked) {
            if (radioinput7.checked) {
                q4r1 = 1;
                radio7Check = true;
                document.getElementById("7label").style.fontWeight = "bold";
                document.getElementById("8label").style.fontWeight = "normal";
            } else {
                q4r1 = 2;
                radio8Check = true;
                document.getElementById("7label").style.fontWeight = "normal";
                document.getElementById("8label").style.fontWeight = "bold";
            }
            
            if ((radio7Check === true && radio8Check === false) || (radio7Check === false && radio8Check === true)) {
                if (radio7Check === false) {
                    radio7Check = true;
                } else {
                    radio8Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput7.disabled = true;
                    radioinput8.disabled = true;
                    document.getElementById("fourth-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("fourth-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }

        if ((radioinput9.checked || radioinput10.checked)) {
            if (radioinput9.checked) {
                q5r1 = 1;
                radio9Check = true;
                document.getElementById("9label").style.fontWeight = "bold";
                document.getElementById("10label").style.fontWeight = "normal";
            } else {
                q5r1 = 2;
                radio10Check = true;
                document.getElementById("9label").style.fontWeight = "normal";
                document.getElementById("10label").style.fontWeight = "bold";
            }

            if ((radio9Check === true && radio10Check === false) || (radio9Check === false && radio10Check === true)) {
                if (radio9Check === false) {
                    radio9Check = true;
                } else {
                    radio10Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput9.disabled = true;
                    radioinput10.disabled = true;
                    document.getElementById("fifth-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("fifth-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }
    
        if (radioinput11.checked || radioinput12.checked) {
            if (radioinput11.checked) {
                q6r1 = 1;
                radio11Check = true;
                document.getElementById("11label").style.fontWeight = "bold";
                document.getElementById("12label").style.fontWeight = "normal";
            } else {
                q6r1 = 2;
                radio12Check = true;
                document.getElementById("11label").style.fontWeight = "normal";
                document.getElementById("12label").style.fontWeight = "bold";
            }

            if ((radio11Check === true && radio12Check === false) || (radio11Check === false && radio12Check === true)) {
                if (radio11Check === false) {
                    radio11Check = true;
                } else {
                    radio12Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput11.disabled = true;
                    radioinput12.disabled = true;
                    document.getElementById("sixth-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("sixth-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }

        if (radioinput13.checked || radioinput14.checked) {
            if (radioinput13.checked) {
                q7r1 = 1;
                radio13Check = true;
                document.getElementById("13label").style.fontWeight = "bold";
                document.getElementById("14label").style.fontWeight = "normal";
            } else {
                q7r1 = 2;
                radio14Check = true;
                document.getElementById("13label").style.fontWeight = "normal";
                document.getElementById("14label").style.fontWeight = "bold";
            }
            
            if ((radio13Check === true && radio14Check === false) || (radio13Check === false && radio14Check === true)) {
                if (radio13Check === false) {
                    radio13Check = true;
                } else {
                    radio14Check = true;
                }

                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput13.disabled = true;
                    radioinput14.disabled = true;
                    document.getElementById("seventh-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("seventh-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }

        if (radioinput15.checked || radioinput16.checked) {
            if (radioinput15.checked) {
                q8r1 = 1;
                radio15Check = true;
                document.getElementById("15label").style.fontWeight = "bold";
                document.getElementById("16label").style.fontWeight = "normal";
            } else {
                q8r1 = 2;
                radio16Check = true;
                document.getElementById("15label").style.fontWeight = "normal";
                document.getElementById("16label").style.fontWeight = "bold";
            }
            
            if ((radio15Check === true && radio16Check === false) || (radio15Check === false && radio16Check === true)) {
                if (radio15Check === false) {
                    radio15Check = true;
                } else {
                    radio16Check = true;
                }
                let timeleft = 5;
                let downloadTimer = setInterval(function() {
                if(timeleft <= 0){
                    clearInterval(downloadTimer);
                    radioinput15.disabled = true;
                    radioinput16.disabled = true;
                    document.getElementById("eighth-choice").innerHTML = "Finished";
                } else {
                    document.getElementById("eighth-choice").innerHTML = timeleft + " seconds left";
                }
                timeleft--;
                }, 1000);
            }
        }

        document.getElementById("submit-videos").addEventListener("click", function() {
          let videos = document.getElementById("videos");
          videos.style.display = "block"; 
        });

        document.getElementById("submit").addEventListener("click", function() {
            let usersAnswers = [];
            radioinput1.disabled = true;
            radioinput2.disabled = true;
            radioinput3.disabled = true;
            radioinput4.disabled = true;
            radioinput5.disabled = true;
            radioinput6.disabled = true;
            radioinput7.disabled = true;
            radioinput8.disabled = true;
            radioinput9.disabled = true;
            radioinput10.disabled = true;
            radioinput11.disabled = true;
            radioinput12.disabled = true;
            radioinput13.disabled = true;
            radioinput14.disabled = true;
            radioinput15.disabled = true;
            radioinput16.disabled = true;

            if (q1r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question1: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q1r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question1: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q2r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question2: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q2r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question2: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q3r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question3: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q3r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question3: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q4r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question4: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q4r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question4: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q5r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question5: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q5r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question5: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q6r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question6: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q6r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question6: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q7r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question7: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q7r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question7: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            if (q8r1 === 1) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question8: "1"
                }, {merge:true});
                usersAnswers.push("1");
            } else if (q8r1 === 2) {
                db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    question8: "2"
                }, {merge:true});
                usersAnswers.push("2");
            } else {
                usersAnswers.push("0");
            }

            console.log(usersAnswers);
            console.log(answers);
            let right = 0;
            for (i = 0; i < 8; i++) {
                let row = "r" + (i+1).toString();
                if (usersAnswers[i] != answers[i]) {
                    console.log(row);
                    document.getElementById(row).style.backgroundColor = "red";
                } else {
                    right++;
                    console.log(row);
                    document.getElementById(row).style.backgroundColor = "green";
                }
            }

            let wrong = 8-right;
            // let totalWrong = db.collection("summary").doc("summary").get();
            // console.log(totalWrong);
            db.collection("users")
                .doc(currentUser)
                .collection("quiz-answers")
                .doc("results")
                .set({
                    wrong: wrong,
                    right: right
                }, {merge:true});
            // db.collection("quiz-answers").doc("quiz-answers").collection("results").doc("results").onSnapshot(function(doc) {
            //     // console.log(doc.get("question1").data());
            //     console.log("Current data: ", doc.data());
            //     doc.forEach((key) => {
            //         usersAnswers.push({
            //             key: doc.data().
            //         })
            //     })
                
            // });
        });




        // const userIds = async () => {
        //     let docRef = db.collection("users").doc(currentUser).get(question1)
        //     docRef.get(question1).then(function(doc) {
        //         console.log(doc.data());
        //     })
        //     // await db.collection("users").doc(currentUser).get(question1);
        //     // await db.collection("userIdentifiers").onSnapshot((docs) => {
        //     //   docs.forEach((doc) => {
        //     //     ids.push(doc.data());
        //     //     fetchData(ids);
        //     //   });
        //     // });
        //   };
        // }
        // userIds()
        // checkLock()

        // function checkLock() {
        //     if (radioinput1.disabled && radioinput2.disabled && radioinput3.disabled && radioinput4.disabled && radioinput5.disabled && radioinput6.disabled && radioinput7.disabled &&
        //         radioinput8.disabled && radioinput9.disabled && radioinput10.disabled && radioinput11.disabled && radioinput12.disabled && radioinput13.disabled && radioinput14.disabled &&
        //         radioinput15.disabled && radioinput16.disabled) {
        //             db.collection("users-answers")
        //             .doc("users-answers")
        //             .collection("users-answers")
        //             .doc(docId)
        //             .set({
        //                 question1: radioinput1.value,
        //                 question2: radioinput2.value,
        //                 question3: radioinput3.value,
        //                 question4: radio,
        //                 question5: "2",
        //                 question6: "2",
        //                 question7: "2",
        //                 question8: "1"
        //             })
    
        //         }
        // }
    }

    // function analyze(r1, r2) {
    //     let answer = answers[0];
    //     let firstChoiceResult = document.getElementById("first-choice-result");
    //     let secondChoiceResult = document.getElementById("second-choice-result");

    //     if (r1.checked) {
    //         firstChoiceResult.hidden = false;
    //         firstChoiceResult.innerHTML = (answer === "1") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
    //     } else {
    //         secondChoiceResult.hidden = false;
    //         secondChoiceResult.innerHTML = (answer === "2") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
    //     }
    // }
});






// let forms2 = [
//     { time: '10 seconds', question: 'Why did the perp get away?', option1: "Forgot to bring handcuffs", option2: "Any other reason" },
//     { time: '10 seconds', question: 'How does Schmidt injure himself?', option1: 'Sprained pinky', option2: 'Scraped elbow' },
//     { time: '10 seconds', question: 'What does Jenko say you have a right to?', option1: 'Be whatever you want', option2: 'Any other result' },
//     { time: '10 seconds', question: 'How many times will the phrase “Miranda rights” be said?', option1: '2', option2: '4'  }
//     ]


// window.addEventListener('load', function () {
//     let radioinput1 = document.getElementById("choice1");
//     let radioinput2 = document.getElementById("choice2");
//     let radioinput3 = document.getElementById("choice3");
//     let radioinput4 = document.getElementById("choice4");
//     let radioinput5 = document.getElementById("choice5");
//     let radioinput6 = document.getElementById("choice6");
//     let radioinput7 = document.getElementById("choice7");
//     let radioinput8 = document.getElementById("choice8");
//     let radioinput9 = document.getElementById("choice9");
//     let radioinput10 = document.getElementById("choice10");
//     radioinput1.addEventListener('change', startinputdisable);
//     radioinput2.addEventListener('change', startinputdisable);
//     radioinput3.addEventListener('change', startinputdisable);
//     radioinput4.addEventListener('change', startinputdisable);
//     radioinput5.addEventListener('change', startinputdisable);
//     radioinput6.addEventListener('change', startinputdisable);
//     radioinput7.addEventListener('change', startinputdisable);
//     radioinput8.addEventListener('change', startinputdisable);
//     radioinput9.addEventListener('change', startinputdisable);
//     radioinput10.addEventListener('change', startinputdisable);

//     let radiochosen = false;

//     function startinputdisable(event) {
//         console.log("chosen");
//         if (radiochosen === false) {

//             // disable selection
//             setTimeout(() => {
//                 radioinput1.disabled = true;
//                 radioinput2.disabled = true;
//                 radioinput3.disabled = true;
//                 radioinput4.disabled = true;
//                 radioinput5.disabled = true;
//                 radioinput6.disabled = true;
//                 radioinput7.disabled = true;
//                 radioinput8.disabled = true;
//                 radioinput9.disabled = true;
//                 radioinput10.disabled = true;
//             }, 10000); // 5
//             radiochosen = true;

//             // show answer
//             setTimeout(() => {
//                 analyze(radioinput1, radioinput2);
//             }, 10000); // 10 seconds. Change to longer when done testing
//         }
//     }

//     let finAnswers = [2, 1, 1, 2, 2, 2, 2, 1];
//     function analyze(r1, r2) {
//         let firstChoiceResult = document.getElementById("choice0");
//         let secChoiceResult = document.getElementById("choice1");
//         let thirdChoiceResult = document.getElementById("choice2");
//         let fourChoiceResult = document.getElementById("choice3");
//         let fiveChoiceResult = document.getElementById("choice4");
//         let sixChoiceResult = document.getElementById("choice5");
//         let sevenChoiceResult = document.getElementById("choice6");
//         let eightChoiceResult = document.getElementById("choice7");

//         // user picked first option
//         if (r1.checked) {
//             firstChoiceResult.hidden = false;
//             // first option, user is correct, else user is wrong
//             firstChoiceResult.innerHTML = (answer === "1") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
//         }
//         // user picked second option 
//         else {
//             secondChoiceResult.hidden = false;
//             // first option, user is correct, else user is wrong
//             secondChoiceResult.innerHTML = (answer === "2") ? "<span>&#9989;</span>" : "<span>&#x274C;</span>";
//         }

//         // dev only
//         if (answer === "1") {
//             console.log(r1.checked ? "correct" : "incorrect");
//         } else {
//             console.log(r2.checked ? "correct" : "incorrect");
//         }
//     }
// )};
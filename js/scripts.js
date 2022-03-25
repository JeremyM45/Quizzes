$(document).ready(function() {
  $("form#lang-quiz").submit(function(event) {
    event.preventDefault();
    console.log("test")
    const q1 = $("input:radio[name=question1]:checked").val();
    const q2 = $("input:radio[name=question2]:checked").val();
    const q3 = $("input:radio[name=question3]:checked").val();
    const q4 = $("input:radio[name=question4]:checked").val();
    const q5 = $("input:radio[name=question5]:checked").val();
    let result;
    console.log(q1, q2, q3, q4, q5)
    if (q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1") {
      result = "res1"
    } else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1")) {
      result = "res2"
    } else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1")) {
      result = "res3"
    }  else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1")) {
      result = "res4"
    } else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2")) {
      result = "res5"
    } else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1")) {
      result = "res6"
    }  else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2")) {
      result = "res7"
    }  else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2")) {
      result = "res8"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1")) {
      result = "res9"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1")) {
      result = "res10"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2")) {
      result = "res11"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1")) {
      result = "res12"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2")) {
      result = "res13"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2")) {
      result = "res14"
    } else if ((q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2")) {
      result = "res15"
    } else if ((q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2")) {
      result = "res16"
    }
    $("#output").text(result);
  });
});
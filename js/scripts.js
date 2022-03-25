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
      result = "Go"
    }
    $("#output").text(result);
  });
});
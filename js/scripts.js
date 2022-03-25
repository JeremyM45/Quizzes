$(document).ready(function() {
  $("#start-Quiz").click(function() {
    $("#lang-Quiz, #output").fadeIn();
    
  });

  $("form#lang-Quiz").submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=question1]:checked").val();
    const q2 = $("input:radio[name=question2]:checked").val();
    const q3 = $("input:radio[name=question3]:checked").val();
    const q4 = $("input:radio[name=question4]:checked").val();
    const q5 = $("input:radio[name=question5]:checked").val();
    let result = "";
    if (q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2") {
      result = "Go";
    } else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1") {
      result = "C#"; 
    }  else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2") {
      result = "JavaScript";
    }  else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2") {
      result = "Python";
    } else  {
      result = "Ruby";
    } 
    $("#output").text(result);
  });
});
$(document).ready(function() {
  let name="";
  $("form#startQuiz").submit(function(e) {
    e.preventDefault();
    $("#startQuiz").hide();
    $("#lang-Quiz").fadeIn();
    name = $("#name").val() + ", Program-O-Suggest-O says the language for you is:";
  });
  $("form#lang-Quiz").submit(function(event) {
    event.preventDefault();
    const q1 = $("input:radio[name=question1]:checked").val();
    const q2 = $("input:radio[name=question2]:checked").val();
    const q3 = $("input:radio[name=question3]:checked").val();
    const q4 = $("input:radio[name=question4]:checked").val();
    const q5 = $("input:radio[name=question5]:checked").val();
    let result = "";
    let description = "";
    if (q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2") {
      result = " Go";
      description = "Go is a statically typed, compiled programming language designed at Google by Robert Griesemer, Rob Pike, and Ken Thompson. Go is syntactically similar to C, but with memory safety, garbage collection, structural typing, and CSP-style concurrency. The language is often referred to as Golang because of its former domain name, golang.org, but the proper name is Go.";
      $("#output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $("#output").text(result).fadeIn(500);
      $("#outputName").text(name).fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1") {
      result = " C#";
      description = "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.";
      $("#output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $("#output").text(result).fadeIn(500);
      $("#outputName").text(name).fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    }  else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2") {
      result = " JavaScript";
      description = "JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.";
      $("#output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $("#output").text(result).fadeIn(500);
      $("#outputName").text(name).fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    }  else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2") {
      result = " Python";
      description = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects.";
      $("#output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $("#output").text(result).fadeIn(500);
      $("#outputName").text(name).fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else  {
      result = " Ruby";
      description = "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan.";
      $("#output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $("#output").text(result).fadeIn(500);
      $("#outputName").text(name).fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } 
  });
  $("button.dm-BTN").click(function() {
    $("body").toggleClass("darkMode")
    $(".btn").toggleClass("btn-DarkMode")
    $(".page-Header").toggleClass("header-DM")
    $(".dm-BTN").toggleClass("dm-BTN-DM");
  });
});
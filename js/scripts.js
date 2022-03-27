$(document).ready(function() {
  let name="";
  $("form#startQuiz").submit(function(e) {
    e.preventDefault();
    $("#startQuiz").hide();
    $("#lang-Quiz").fadeIn();
    $("#cheese-Quiz").fadeIn();
    $("#thrd-Quiz").fadeIn();
    name = $("#name").val();
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
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", Program-O-Suggest-O says the language for you is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1") {
      result = " C#";
      description = "C# is a general-purpose, multi-paradigm programming language. C# encompasses static typing, strong typing, lexically scoped, imperative, declarative, functional, generic, object-oriented (class-based), and component-oriented programming disciplines.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", Program-O-Suggest-O says the language for you is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    }  else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer2" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer1" && q4 === "answer2" && q5 === "answer1" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer1" && q3 === "answer2" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer1" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2") {
      result = " JavaScript";
      description = "JavaScript often abbreviated JS, is a programming language that is one of the core technologies of the World Wide Web, alongside HTML and CSS. Over 97% of websites use JavaScript on the client side for web page behavior, often incorporating third-party libraries. All major web browsers have a dedicated JavaScript engine to execute the code on users' devices.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", Program-O-Suggest-O says the language for you is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    }  else if (q1 === "answer1" && q2 === "answer2" && q3 === "answer1" && q4 === "answer2" && q5 === "answer2" || q1 === "answer1" && q2 === "answer1" && q3 === "answer2" && q4 === "answer2" && q5 === "answer2" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer1" || q1 === "answer2" && q2 === "answer2" && q3 === "answer1" && q4 === "answer1" && q5 === "answer2") {
      result = " Python";
      description = "Python is a high-level, general-purpose programming language. Its design philosophy emphasizes code readability with the use of significant indentation. Its language constructs and object-oriented approach aim to help programmers write clear, logical code for small- and large-scale projects.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", Program-O-Suggest-O says the language for you is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else  {
      result = " Ruby";
      description = "Ruby is an interpreted, high-level, general-purpose programming language which supports multiple programming paradigms. It was designed with an emphasis on programming productivity and simplicity. In Ruby, everything is an object, including primitive data types. It was developed in the mid-1990s by Yukihiro 'Matz' Matsumoto in Japan.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", Program-O-Suggest-O says the language for you is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    }
    $("#other-quiz").fadeIn(); 
  });
  $("button.dm-BTN").click(function() {
    $("body").toggleClass("darkMode");
    $(".btn").toggleClass("btn-DarkMode");
    $(".page-Header").toggleClass("header-DM");
    $(".dm-BTN").toggleClass("dm-BTN-DM");
    $(".output").toggleClass("outputDM");
  });
  $("form#cheese-Quiz").submit(function(e)  {
    e.preventDefault();
    const q1=parseInt($("input:radio[name=question1]:checked").val());
    const q2=parseInt($("input:radio[name=question2]:checked").val());
    const q3=parseInt($("input:radio[name=question3]:checked").val());
    const q4=parseInt($("input:radio[name=question4]:checked").val());
    const q5=parseInt($("input:radio[name=question5]:checked").val());
    const resultNum = q1 + q2 + q3 + q4 + q5;
    let result = "";
    let description = "";
    if (resultNum === 6 || resultNum === 8 || resultNum === 10 || resultNum === 12) {
      result = "Cheddar";
      description = "Cheddar cheese, the most widely purchased and eaten cheese in the world is always made from cow's milk. It is a hard and natural cheese that has a slightly crumbly texture if properly cured and if it is too young, the texture is smooth. It gets a sharper taste as it matures, over a period of time between 9 to 24 months. Shaped like a drum, 15 inches in diameter, Cheddar cheese is natural rind bound in cloth while its colour generally ranges from white to pale yellow. However, some Cheddars may have a manually added yellow-orange colour.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", The kind of cheese you are is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else if (resultNum === 5 || resultNum === 7 || resultNum === 9 || resultNum === 11) {
      result = "Provalone";
      description = "Provolone is an Italian cheese made from cow’s milk whose origins lie in Southern Italy. Today, the major production of Provolone takes place in the Po valley region, particularly Lombardy and Veneto. Both Provolone Valpadana and Provolone del Monaco are granted DOP designation by the European Union to ensure that cheese is produced under strict supervision using specific methods to guarantee supreme quality.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", The kind of cheese you are is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else if (resultNum === 14 || resultNum === 16 || resultNum === 18 || resultNum === 20)  {
      result = "Mozzarella";
      description = "Mozzarella cheese is a sliceable curd cheese originating in Italy. Traditional Mozzarella cheese is made from milk of water buffalos herded in very few countries such as Italy and Bulgaria. As a result, most of the Mozzarella cheeses available now are made from cow's milk.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", The kind of cheese you are is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    } else {
      result = "Smoked Gouda";
      description = "Gouda, or 'How-da' as the locals say, is a Dutch cheese named after the city of Gouda in the Netherlands. If truth be told, it is one of the most popular cheeses in the world, accounting for 50 to 60 percent of the world's cheese consumption. Smoked Gouda is a variant of this famous cheese wherein it is smoked in ancient brick ovens over flaming hickory chip embers. Sensational with beer, this hard cheese has an edible, brown rind and a creamy, yellow interior.";
      $(".output").hide();
      $("#outputName").hide();
      $("#outputDescription").hide();
      $(".output").text(result).fadeIn(500);
      $("#outputName").text(name + ", The kind of cheese you are is:").fadeIn(500);
      $("#outputDescription").text(description).fadeIn(1000);
    }
    $("#other-quiz").fadeIn();
  });
  $("form#thrd-Quiz").submit(function(e) {
    e.preventDefault();
    const q1 = $("#question1").val().length;
    const q2 = $("#question2").val().length;
    const q3 = $("#question3").val().length;
    const q4 = $("#question4").val().length;
    const q5 = $("#question5").val().length;
    const q6 = $("#question6").val().length;
    const resultNum = q1 + q2 + q3 + q4 + q5 + q6;
    let result = "";
    if (resultNum >= 24 && resultNum < 32) {
      result = "M4 Sherman";
      $(".output").hide();
      $("#outputC").hide();
      $("#outputT").hide();
      $("#outputB").hide();
      $("#outputIS").hide();
      $("#outputKT").hide();
      $("#outputBS").hide();
      $("#outputNameWWII").hide();
      $("#outputS").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    } else if (resultNum >= 32 && resultNum < 40) {
      result = "T-34";
      $(".output").hide();
      $("#outputC").hide();
      $("#outputS").hide();
      $("#outputB").hide();
      $("#outputIS").hide();
      $("#outputKT").hide();
      $("#outputBS").hide();
      $("#outputNameWWII").hide();
      $("#outputT").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    } else if (resultNum >= 40 && resultNum < 48) {
      result = "Tiger II";
      $(".output").hide();
      $("#outputS").hide();
      $("#outputT").hide();
      $("#outputB").hide();
      $("#outputIS").hide();
      $("#outputC").hide();
      $("#outputBS").hide();
      $("#outputNameWWII").hide();
      $("#outputKT").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    } else if (resultNum >= 48 && resultNum < 56) {
      result = "Churchill";
      $(".output").hide();
      $("#outputS").hide();
      $("#outputT").hide();
      $("#outputB").hide();
      $("#outputIS").hide();
      $("#outputKT").hide();
      $("#outputBS").hide();
      $("#outputNameWWII").hide();
      $("#outputC").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    } else if (resultNum >= 56 && resultNum < 64) {
      result = "B1";
      $(".output").hide();
      $("#outputS").hide();
      $("#outputT").hide();
      $("#outputC").hide();
      $("#outputIS").hide();
      $("#outputKT").hide();
      $("#outputBS").hide();
      $("#outputNameWWII").hide();
      $("#outputB").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    } else if (resultNum >= 64 && resultNum <72)  {
      result = "IS-2";
      $(".output").hide();
      $("#outputS").hide();
      $("#outputT").hide();
      $("#outputC").hide();
      $("#outputB").hide();
      $("#outputKT").hide();
      $("#outputBS").hide();
      $("#outputNameWWII").hide();
      $("#outputIS").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    } else  {
      result = "Bob Semple";
      $(".output").hide();
      $("#outputS").hide();
      $("#outputT").hide();
      $("#outputC").hide();
      $("#outputB").hide();
      $("#outputIS").hide();
      $("#outputKT").hide();
      $("#outputNameWWII").hide();
      $("#outputBS").show().fadeIn(500);
      $(".output").text(result).fadeIn(500);
      $("#outputNameWWII").text(name + ", The kind of WWII tank you are is:").fadeIn(500);
    }
    $("#other-quizWWII").fadeIn();
  });
});
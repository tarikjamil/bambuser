const sections = document.querySelectorAll(".article-section");

sections.forEach((section) => {
  let selector = section.querySelector(".selector");
  if (selector) {
    let selectorText = selector.innerText;
    let element = section.querySelector(".article-section-content");
    if (selectorText === "testimonial") {
      element.classList.add("section-article-testimonial");
    } else if (selectorText === "twocolumns-big-small") {
      element.classList.add("section-twocolumns-big-small");
    } else if (selectorText === "twocolumns-small-big") {
      element.classList.add("section-twocolumns-small-big");
    } else if (selectorText === "onecolumn") {
      element.classList.add("section-article-onecolumn");
    } else if (selectorText === "client-highlight") {
      element.classList.add("section-client-highlight");
    } else if (selectorText === "stats") {
      element.classList.add("section-stats");
    } else if (selectorText === "onecolumn-center-text") {
      element.classList.add("section-article-onecolumn-center-text");
    } else if (selectorText === "onecolumn-center") {
      element.classList.add("section-article-onecolumn-center");
    } else if (selectorText === "download-two-columns") {
      element.classList.add("section-article-download-two-columns");
    }
  }
});

if ($(".article-hero-category").text().trim() === "Client Highlights") {
  $(".section-new.is--article-content").addClass("is--highlight");
} else if ($(".article-hero-category").text().trim() === "Case Study") {
  $(".section-new.is--article-content").addClass("is--case-study");
} else if ($(".article-hero-category").text().trim() === "Bambuser Academy") {
  $(".section-new.is--article-content").addClass("is--highlight");
} else if ($(".article-hero-category").text().trim() === "Newsroom") {
  $(".section-new.is--article-content").addClass("is--highlight");
} else if ($(".article-hero-category").text().trim() === "Product News") {
  $(".section-new.is--article-content").addClass("is--highlight");
}

$(".article-richtext").each(function () {
  if ($(this).children().is("figure") && $(this).children().length === 1) {
    $(this).find("figure").addClass("is--alone-nomargin");
  }
});

$("blockquote + p").addClass("quote-name");

$(".section-stats h2").each(function () {
  $(this).nextUntil("h2").addBack().wrapAll("<div class='stat-el'></div>");
});

$(".article-richtext-one").each(function () {
  if ($(this).find("img").length) {
    $(this).addClass("is--article-img");
  }
});

let paragraphs = document.querySelectorAll("p");
paragraphs.forEach(function (paragraph) {
  if (
    paragraph.querySelectorAll("a").length === 1 &&
    paragraph.children.length === 1 &&
    paragraph.textContent.trim() ===
      paragraph.querySelector("a").textContent.trim()
  ) {
    paragraph.querySelector("a").classList.add("btn--14");
  }
});

$(".stat-el").each(function () {
  $(this).parent().addClass("article-stat-flex");
});

$(".section-client-highlight .article-richtext-two p:nth-child(1)").each(
  function () {
    $(this)
      .nextUntil("h2")
      .addBack()
      .wrapAll("<div class='client-logo-wrapper'></div>")
      .end();
    $(this)
      .parent(".client-logo-wrapper")
      .next("h2")
      // go back to the h2 element
      .nextAll() // select all elements after the h2
      .add($(this).parent(".client-logo-wrapper").next("h2")) // add the h2 element to the selection
      .wrapAll("<div></div>");
  }
);

$(document).ready(function () {
  $(".section-client-highlight").first().css("padding-top", "0px");
});

$("a")
  .filter(function () {
    return !$(this).attr("href");
  })
  .replaceWith(function () {
    return $("<div>").html($(this).html()).attr("class", $(this).attr("class"));
  });

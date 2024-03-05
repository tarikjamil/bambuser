$(".linktree-richtext a").each(function () {
    $(this)
      .nextUntil("a")
      .addBack()
      .wrapAll("<div class='btn--14 is--ghost-white'></div>");
  });
  
  $(document).ready(function () {
    var embedCode =
      '<svg class="tree-link-btn-icon" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg"><path d="M15.1689 17L20.2394 12L15.1689 7" stroke="currentColor" stroke-width="2"/><path d="M20.2394 12L3 12" stroke="currentColor" stroke-width="2"/></svg>';
    $(".btn--14").append(embedCode);
  });
  
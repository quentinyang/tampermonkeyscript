// ==UserScript==
// @name         拉勾网站过滤大专学历
// @namespace    http://tampermonkey.net/
// @version      1.1
// @description  try to take over the world!
// @author       You
// @match        https://www.tampermonkey.net/index.php?ext=dhdg&browser=chrome
// @grant        none
// ==/UserScript==

const cssStyles = `<style>
  .lagou-filter-btn{
    position: fixed;
    right: 10%;
    top: 20%;
    background: #c56395;
    width: 80px;
    height: 30px;
    display: block;
    text-align: center;
    line-height: 30px;
    color: #FFF;
  }
  </style>
`;
(function ($) {
  console.log('[lagou] start filter script')
  // 增加操作按钮

  $('head').append(cssStyles);

  $('body').append("<span class='lagou-filter-btn'>过滤</span>");

  $('.lagou-filter-btn').click(e => {
    filter();
  })

  function filter() {
    // 过滤大专学历
    let talents = $('.talent-item');

    for (let talent of talents) {
      let eduInfo = $('.item-info-edu', talent);

      let subnames = $('.sub-name', eduInfo);

      let isBelowUndergraduate = false;
      for (let i = 0; i < subnames.length; i++) {

        const content = subnames[i].innerHTML;
        if (/大专/.test(content)) {
          isBelowUndergraduate = true;
          break;
        }
      }

      if (isBelowUndergraduate) {
        console.log(talent)
        talent.innerHTML = ''
      }

    };
  }

  filter();

  console.log('[lagou] end lagou filter script')
})(window.$)


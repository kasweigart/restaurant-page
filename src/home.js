import aboutContent from './about';
import menuContent from './menu';
import contactContent from './contact';

const appendHomeContent = function () {
  const homeDiv = document.querySelector("#content");
  homeDiv.innerHTML = `
    <div class="navfull">
        <div class="navmain">
          <img src="./images/logo.png" class='logo'>
        </div>
      </div>

      <div class="cafe">
        <img src="./images/cafe.jpg" class="cafe" />
      </div>
      <div class="tabs"><div class="row">
        <div class="twelve columns">
          <ul class="tab-nav">
            <li>
              <a class="button active" href="#one">About</a>
            </li>
            <li>
              <a class="button" href="#two">Menu</a>
            </li>
            <li>
              <a class="button" href="#three">Contact</a>
            </li>
          </ul>
          <div class="tab-content">
            <div class="tab-pane active" id="one">
              <h5>An Experience Like No Other</h5>
              ${aboutContent()}
            </div>
            <div class="tab-pane" id="two">
              <h5>Choose From Our Fresh and Delicious Selection</h5>
                  ${menuContent()}      
              </div>
            <div class="tab-pane" id="three">
              <h5>Let Us Know What You Think</h5>
                ${contactContent()}
              </div>
          </div>
        </div>
      </div>
    `;
};

const skelTabs = function () {
  function main() {
    var tabButtons = [].slice.call(
      document.querySelectorAll("ul.tab-nav li a.button")
    );

    tabButtons.map(function (button) {
      button.addEventListener("click", function () {
        document.querySelector("li a.active.button").classList.remove("active");
        button.classList.add("active");

        document.querySelector(".tab-pane.active").classList.remove("active");
        document
          .querySelector(button.getAttribute("href"))
          .classList.add("active");
      });
    });
  }

  if (document.readyState !== "loading") {
    main();
  } else {
    document.addEventListener("DOMContentLoaded", main);
  }
};

export { skelTabs, appendHomeContent };


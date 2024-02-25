// Initialize MDB-UI-Kit components
import { Collapse, initMDB } from "mdb-ui-kit";
initMDB({ Collapse });

// Initialize MDB-UI-Kit components
import { Collapse, initMDB } from "mdb-ui-kit";
initMDB({ Collapse });

var tabLinks = document.querySelectorAll(".tab-links");
var tabContents = document.querySelectorAll(".tab-contents");

function openTab(event, tabName) {
  event.preventDefault(); // Prevent default link behavior

  console.log("Clicked tab:", event.currentTarget); // Log the clicked tab element

  // Remove active classes from all tabs
  tabLinks.forEach(function(tabLink) {
    tabLink.classList.remove("active-link");
  });
  tabContents.forEach(function(tabContent) {
    tabContent.classList.remove("active-tab");
  });

  console.log("Removed active classes from all tabs and contents.");

  // Add active classes to the clicked link and its corresponding content
  event.currentTarget.classList.add("active-link");
  document.getElementById(tabName).classList.add("active-tab");

  console.log("Added active classes to clicked tab and its content:", event.currentTarget, document.getElementById(tabName));
}

// Attach click events to tab links
tabLinks.forEach(function(tabLink) {
  tabLink.addEventListener("click", function(event) {
    openTab(event, tabLink.getAttribute("href").substring(1)); // Get tab name from href
  });
});

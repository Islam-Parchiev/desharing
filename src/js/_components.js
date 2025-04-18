if(window.location.pathname.split(".")[0].split("/").includes("profile")) {
  import('./components/chart.js');
  import('./components/selector.js')
  console.log('test');
}

console.log(window.location.pathname.split(".")[0].split("/").includes("profile"));
console.log('components');

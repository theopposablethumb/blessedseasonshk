const copyrightYear = () => {
    document.querySelector('footer span').innerHTML = new Date().getFullYear();
  }
  
  const makeItSo = () => {
    document.addEventListener("DOMContentLoaded", () => {
      copyrightYear();
      console.log("This website crafted by hand by Brendan Meachen");
   });
  };
  makeItSo();
// const adviceBlock = document.getElementById("advice");

// function fetchAdvice() {
//   fetch("https://api.adviceslip.com/advice")
//     .then((response) => {
//       if (!response.ok) {
//         throw new Error("Could not get resource");
//       }
//       return response.json();
//     })
//     .then((data) => {
//       
//       adviceBlock.innerHTML = `"${data.slip.advice}"`;
//     })
//     .catch((error) => {
//       console.error(error);
//       adviceBlock.innerHTML = "No advice was generated.";
//     }); 
// }



// ASYNC & AWAIT METHOD
const adviceBlock = document.getElementById('advice');
const adviceId = document.getElementById('advice-num');
async function fetchAdvice() {
  try {

    const response = await fetch(
      'https://api.adviceslip.com/advice',
       { cache: 'no-store' }
    );
    if (!response.ok){
      throw new Error('Could not get resource')
    }
    const data = await response.json();
    
    adviceId.innerHTML = `ADVICE #${data.slip.id}`;
    adviceBlock.innerHTML = `"${data.slip.advice}"`;

  }
  catch (error) {
    console.error(error);
    adviceId.innerHTML = ''
    adviceBlock.innerHTML = "No advice was generated.";
  }
}





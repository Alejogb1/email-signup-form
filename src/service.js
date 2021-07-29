


  async function postData (){
    await fetch('https://api.staging.fourthwall.com/api/mailing-list', {
      method: 'POST',
      headers: {
        'X-ShopId' : 'sh_9f57832f-456b-44f3-888f-8a370b155a18',
        'Accept': 'application/json',
        'Content-Type': 'application/json'
      },
      body: JSON.stringify({email : document.querySelector("#newsletter-email").textContent })
    });
     
  }  
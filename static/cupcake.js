const BASE_URL = "http://127.0.0.1:5000/api";



function generateCupcakeHTML(cupcake) {
    return `
      <div data-cupcake-id=${cupcake.id}>
        <li>
          ${cupcake.flavor} / ${cupcake.size} / ${cupcake.rating}
          <button class="delete-button">X</button>
        </li>
        <img class="Cupcake-img"
              src="${cupcake.image}"
              alt="(no image provided)">
      </div>
    `;
  }

async function getCupcakes(){
    const response = await axios.get(`${BASE_URL}/cupcakes`);

    for(let cupcake of response.data.cupcakes) {
        
        $('ul').append(generateCupcakeHTML(cupcake))
        }
}

getCupcakes();



$('#new-cupcake-form').on("submit", async function(evt){
    evt.preventDefault();

    let flavor = $("#form-flavor").val();
    let rating = $("#form-rating").val();
    let size = $("#form-size").val();
    let image = $("#form-image").val();

    const newCupcakeResponse = await axios.post(`${BASE_URL}/cupcakes`, {
        flavor,
        rating,
        size,
        image
    });


    let newCupcake = $(getCupcakes(newCupcakeResponse.data.cupcake));
    $("#cupcakes-list").append(newCupcake);
    $("#new-cupcake-form").trigger("reset");

})

    

    // getCupcakes();
    // let newCupcake = $(generateCupcakeHTML(newCupcakeResponse.data.cupcake));
    // $("#cupcakes-list").append(newCupcake);
    // $("#new-cupcake-form").trigger("reset");

//   };


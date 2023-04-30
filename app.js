const $submissions = $("#submissions");
const $searchValue = $("#gifQuery");

$("#gifForm").on("submit", async function(e){
    e.preventDefault();

    let userInput = $searchValue.val();
    $searchValue.val('');

    const res = await axios.get("http://api.giphy.com/v1/gifs/search", {
        params: {
          q: userInput,
          api_key: "MhAodEJIJxQMxW9XqxKjyXfNYdLoOIym"
        }
      });

    getGIF(res.data);
})

function getGIF(query){
    let allResults = query.data.length;

    if(allResults > 0){
        let randomI = Math.floor(Math.random() * allResults);
        let $gif = $("<img>", {src: query.data[randomI].images.original.url});
        $submissions.append($gif);
    }
}

$("#removeBtn").on("click", function() {
    $searchValue.val('');
    $submissions.empty();
})
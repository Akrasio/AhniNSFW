//const axios = require('axios')






$(window).load(function () {
    $('.hover_bkgr_fricc').click(function(){
        $('.hover_bkgr_fricc').hide();
    });
    $('.popupCloseButton').click(function(){
        $('.hover_bkgr_fricc').hide();
    })});
    $(window).load(function init(){
        $('#trigger_popup_fricc').html(`<div class="hover_bkgr_fricc" style="display: inline-block;">
        <span class="helper"></span>
        <div>
          <h1> The site contains sexually explicit material. </h1>
          <h3> Enter only if you are above the age of 18</h3>
          <td>
            <input type="text" id="ans01" class="answer" hidden/>
            <input type="button" id="y01" class="button button1" value="I am above the age of 18." />
            <a href="https://google.com" target="_blank"><input type="button" id="n01" class="button button1" value="I am not above the age of 18." /></a>
          </td>
          </div>
        </tr>  
        </div>
      </div>
    `).click(function(a){
        console.log(a.target.id)
        if (a.target.id == "y01") {
            $('#trigger_popup_fricc').html(``)
            return getUser();
        }
    })
})
async function getUser() {
    let __image, __detect;
    let __storage = [
        "ass", "assgif", "athighs", "bbw", "bdsm", "blow", "boobs", "feet", "furfuta", "furgif", "futa", "gifs", "hass", "hboobs", "hentai", "hfeet", "neko", "irlfemb", "jackopose", "milk", "pantsu", "sex", "slime", "thighs", "trap", "yuri", "latex"
    ]

    __storage = __storage.sort(() => Math.random() - 0.5);
    __starting_point = Math.floor(Math.random() * __storage.length);
    console.log(__storage.length)
    for (j = __starting_point; j < __storage.length; j++) {
        let __subreddit = __storage[j]
        try {
            const response = await axios.get('https://ahni.dev/v2/nsfw/img?end=' + __subreddit + '&apikey=OVXBX2AJ-WN9E-ZMR7-QA04-CYT104ZUEPEO');
            __detect = response.data.result
            console.log(__detect)
            __image = __detect
            var div = document.createElement('div');
            document.getElementById("div").appendChild(div);

            var img = document.createElement('img');
            img.src = __image
            img.className = "img-fluid img-thumbnail rounded"
            img.style = "width:100%"
            div.appendChild(img);
        } catch (error) {
            console.error(error);
        }
    }
    for (j = __starting_point - 1; j >= 0; j--) {
        let __subreddit = __storage[j]
        try {
            const response = await axios.get('https://ahni.dev/v2/nsfw/img?end=' + __subreddit + '&apikey=OVXBX2AJ-WN9E-ZMR7-QA04-CYT104ZUEPEO');
            __detect = response.data.result
            console.log(__detect)

            __image = response.data.result
            var div = document.createElement('div');
            document.getElementById("div").appendChild(div);

            var img = document.createElement('img');
            img.src = __image
            img.className = "img-fluid img-thumbnail rounded"
            img.style = "width:100%"
            div.appendChild(img);
        } catch (error) {
            console.error(error);
        }
    }

}

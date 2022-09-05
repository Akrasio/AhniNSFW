//const axios = require('axios')
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
};
export default getUser;

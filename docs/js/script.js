$(window).on("load", function () {
        $('#trigger_popup_fricc').html(`<div class="hover_bkgr_fricc" style="display: inline-block;">
        <span class="helper"></span>
        <div>
          <h2> The site contains sexually explicit material. </h2>
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
    `).on("click", (function(a){
        console.log(a.target.id)
        if (a.target.id == "y01") return $('#trigger_popup_fricc').html(``)
        }))
})

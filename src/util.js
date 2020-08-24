import M from 'materialize-css';
import "materialize-css/dist/css/materialize.min.css";

function toggle_visibility({ e, id }) {
    let form = document.getElementById(id);
    let password_field = form.querySelector('#password');
    let visibility_icon = e.target;
    if (visibility_icon.textContent === "visibility") {
        visibility_icon.textContent = "visibility_off";
        password_field.type = "password";
    } else {
        visibility_icon.textContent = "visibility";
        password_field.type = "text";
    }
}
function getOptions(type = "POST", data) {
    console.log("data..........", data);
    let headers = { "Content-Type": "application/json" }
    if (localStorage.getItem('token'))
        headers.Authorization = `Token ${localStorage.getItem('token')}`;
    return {
        method: type,
        mode: "cors",
        cache: "no-cache",
        headers,
        body: JSON.stringify(data)
    };
}

function handleResponse(res) {
    console.log(res);
    if (res.status >= 200 && res.status < 300) {
        return res.json()
    }
    throw new TypeError(res);
}

function loadPreview({ id }) {
    var file = document.getElementById(id).files[0];
    var preview = document.getElementById(`${id}_preview`);
    var reader = new FileReader();
    reader.readAsDataURL(file);
    reader.addEventListener("load", function () {
        preview.src = reader.result;
    });
}

function toast(msg) {
    M.toast({ html: `<span>${msg}</span><button class="btn-flat toast-action">Close</button>` });
}

export { toggle_visibility, getOptions, loadPreview, handleResponse, toast }
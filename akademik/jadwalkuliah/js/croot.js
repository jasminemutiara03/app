import { setInner } from "https://jscroot.github.io/element/croot.js";
import { get } from "https://jscroot.github.io/api/croot.js";
import { tabel } from "./view/tabel.js";
setInner("namadivisi","Dari croot.js");
get("https://jadwal-0fc5e0bbd0c5.herokuapp.com/mhs", isiTableMhs);

function isiTableMhs(result){
    console.log(result);
}
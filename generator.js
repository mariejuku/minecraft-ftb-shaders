export default function generator(block,modmacroforms,selectedmods) {
    //macro maker below
let outputgroups = [];
let namespace = "";
let macro1 = "";
let macro2 = "";

//generate
let macros = function (name1, name2) {
    let colors = ["white", "orange", "magenta", "light_blue", "yellow", "lime", "pink", "gray", "light_gray", "cyan", "purple", "blue", "brown", "green", "red", "black"];
    let macroout = "colors:\n";
    colors.forEach(element => {
        let s = macro1;
        if (s != "" && s.substring(s.length - 1) != ":") { s += "_"; }
        s += element;
        if (macro2 != "") {
            s += "_" + macro2;
        }
        s += " ";
        macroout += s;
    });
    document.getElementById('macro_out').value = macroout;
}

document.getElementById('macro1_entry').addEventListener("input", function (event) {
    macro1 = event.target.value;
    macros();
});
document.getElementById('macro2_entry').addEventListener("input", function (event) {
    macro2 = event.target.value;
    macros();
});

outputgroups = {};
for (const [key, value] of Object.entries(modmacroforms)) {
    if (selectedmods.includes(key)){
    namespace = key == "minecraft" ? "" : `${key}:`;
    //value is the macro forms
    
    for (const [k, v] of Object.entries(value)) {
        if (outputgroups[k] == undefined) {
            outputgroups[k] = [];
        }
        let strings = [];
        if (v.base != undefined && v.base) {
            strings.push(`${namespace}${block}`);
        }
        if (v.prefix != undefined) {
            v.prefix.forEach(element=>{
                strings.push(`${namespace}${element}_${block}`);
            });
        }
        if (v.suffix != undefined) {
            v.suffix.forEach(element=>{
                strings.push(`${namespace}${block}_${element}`);
            });
        }
        if (v.infix != undefined) {
            v.infix.forEach(element=>{
                strings.push(`${namespace}${element[0]}_${block}_${element[1]}`);
            });
        }
        strings.forEach(string => {
            outputgroups[k].push(string);
        });
    }
}
};

let output = "";
for (const [key, value] of Object.entries(outputgroups)) {
    if (value.length > 0) {
        output += `\n${key}\n`;
        output += `${value.join(" ")}\n`;
    }
}

return output;
}
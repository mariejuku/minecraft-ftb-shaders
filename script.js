import generator from "./generator.js";
import getShaderGroups from "./shadergroups.js";
import instances from "./instances.js";

//make page
let trymods = $("modstring").html().split(',');
let tryshaders = $("shaderstring").html().split(',');
let supportedmods = [];
let supportedshaders = [];
let selectedmods = [];

let modmapping = {};
let shadermapping = {};
let modmacroforms = {};

let shadergroups = {};
let currentshader = undefined;

function tryContinue() {if (openrequests == 0) {proceed();}}
let openrequests = 1;
trymods.forEach(modstring => {
    openrequests++;
    import(`./modmappings/${modstring}.js`).catch(() => {
        console.log(`mod "${modstring}" not supported at this time.`);
    }).then((mapping) => {
        if (mapping != undefined) {
            supportedmods.push(modstring);
            modmapping[modstring] = mapping.default['blocks'];
            if (mapping.default['forms'] != undefined) {
                modmacroforms[modstring] = mapping.default['forms'];
            }
        }
        openrequests--;
        tryContinue();
    })
});
tryshaders.forEach(shaderstring => {
    openrequests++;
    import(`./shadermappings/${shaderstring}.js`).catch(() => {
        console.log(`shader "${shaderstring}" not supported at this time.`);
    }).then((mapping) => {
        if (mapping != undefined) {
            supportedshaders.push(shaderstring);
            shadermapping[shaderstring] = mapping.default[Object.keys(mapping.default)[0]];
        }
        openrequests--;
        tryContinue();
    })
});
openrequests--;
tryContinue();

// modmapping = {

//     ad_astra: {}, advancedperipherals: {}, angelblockrenewed: {}, antiblocksrechiseled: {}, apotheosis: {}, ae2: {}, ars_creo: {}, ars_instrumentum: {}, ars_elemental: {}, ars_nouveau: {}, artifacts: {}, bambooeverything: {}, bno: {}, botania: {}, buildinggadgets: {}, bygonenether: {}, computercraft: {}, cobblefordays: {}, comforts: {}, compactmachines: {},

//     cookingforblockheads: {},
//     create: {},
//     createaddition: {}, cyclic: {}, darkutils: {}, deepresonance: {}, delightful: {}, domum_ornamentum: {}, elevatorid: {}, enderstorage: {}, engineersdecor: {}, entangled: {}, extrastorage: {}, extremereactors: {}, farmersdelight: {}, fluxnetworks: {}, forcecraft: {}, framedblocks: {}, functionalstorage: {}, glassential: {}, gobber2: {}, hexcasting: {}, hexerei: {}, immersiveengineering: {}, industrialforegoing: {}, integrateddynamics: {}, integratedterminals: {}, ironchest: {}, jaopca: {}, laserio: {}, littlecontraptions: {}, littlelogistics: {}, merequester: {}, lootr: {}, megacells: {}, mahoutsukai: {}, mekanism: {}, mekanismadditions: {}, mekanismgenerators: {}, mekanismtools: {}, minecolonies: {}, colony4cc: {}, mininggadgets: {}, mob_grinding_utils: {}, naturalist: {}, naturesaura: {}, occultism: {}, byg: {}, packingtape: {}, pipez: {}, playerplates: {}, pneumaticcraft: {}, powah: {},

//     rftoolsbase: {}, rftoolsbuilder: {}, rftoolsdim: {}, rftoolspower: {}, rftoolsutility: {}, rsrequestify: {}, rebornstorage: {}, redstonepen: {}, refinedcooking: {}, refinedstorage: {}, silentcompat: {}, silentgear: {}, simplylight: {}, sophisticatedbackpacks: {}, sophisticatedstorage: {}, spirit: {}, statues: {}, sfm: {}, supplementaries: {}, technobauble: {}, twilightforest: {}, thermal: {}, torchmaster: {}, trashcans: {}, travelanchors: {}, unusualend: {}, viescraftmachines: {}, vitalize: {}, waystones: {}, whisperwoods: {}, wirelesschargers: {}, xnet: {}, xycraft_override: {}, xycraft_world: {}, cfm: {}, pfm: {}, mcwfurnitures: {}, another_furniture: {},

//     mcwbridges: {}, mcwfences: {}, mcwpaths: {}, giacomos_bookshelf: {},

// }



//properties maker below
function mapmod(modname) {
    let selectedmap = modmapping[modname];
    console.log(selectedmap);
    for (const [key, value] of Object.entries(selectedmap)) {
        if (!(key in shadergroups)) {
            shadergroups[key] = [];
        }
        
            let blocks = selectedmap[key].split(" ");
            blocks.forEach(element => {
                if (modname != "minecraft") {
                    if (element.split(":")[0] != modname) {
                        element = `${modname}:${element}`;
                    }
                }
                shadergroups[key].push(element);
            });
    }
    console.log(shadergroups);
}
function mapshader(shadername) {
    if (shadername == undefined) return;
    let selectedshader = shadermapping[shadername];
    let blockproperties = {};
    for (const [key, value] of Object.entries(selectedshader)) {
        let groups = value.split(" ");
        blockproperties[key] = [];
        groups.forEach(element => {            
            shadergroups[element].forEach(e => {
                blockproperties[key].push(e);
            });
        });
    }
    

    let message = "";
    for (const [key, value] of Object.entries(blockproperties)) {
        message += `${key}=`;
        let i = 0;
        value.forEach(element => {
            if (i != 0) { message += " "; }
            message += `${element}`
            i++;
        });
        message += "\n";
    }

    document.getElementById('propertiesoutput').value = message;

    for (const [key, value] of Object.entries(shadergroups)) {
        if (value.length == 0) {
            //console.log(`group "${key}" is missing from the result.`);
        }
    }
}

function proceed() {
    supportedmods.forEach(element => {
        $("#modtoggles").append(
            `<div class="col-auto px-1"><label for="mod_toggle_${element}"><input type="checkbox" checked class="modtoggle" id="mod_toggle_${element}"/> ${element}</label></div>`
        );
    });

    supportedshaders.forEach(element => {
        $("#shadertoggles").append(
            `<div class="col-auto px-1"><label for="${element}"><input type="checkbox" class="shadertoggle" id="${element}"/> ${element}</label></div>`
        );
    });


    for (const [key, value] of Object.entries(instances)) {
        $("#instancetoggles").append(
            `<button class="btn btn-primary instancetoggle" id="${key}">${key}</button>`
        );
    }

    $(".instancetoggle").each(
        function () {
            $(this).on("click", function () {
                selectinstance($(this).attr("id"));
            });
        }
    );

    $("#button_refresh").on("click",function(){updateproperties();});
    $(".modtoggle").on("click",function(){selectmods();});
    $(".shadertoggle").on("click",function(){selectshader($(this).attr("id"));});

    $("#entry").on("input",function(event){updatemacros(event.target.value);});

    //initialise
    selectinstance("direwolf20");
    selectshader("complementaryreimagined");
}

function updateproperties() {
    shadergroups = getShaderGroups();

    selectedmods.forEach(mod => {
        if ($(`.modtoggle#mod_toggle_${mod}`).length > 0) {
            if ($(`.modtoggle#mod_toggle_${mod}`).prop("checked")) {
                mapmod(mod);
            }
        }
    });
    mapshader(currentshader);    

    updatemacros($("#entry").val());
}

function selectmods() {
    selectedmods = [];
    supportedmods.forEach(mod => {
        if ($(`.modtoggle#mod_toggle_${mod}`).length > 0) {
            if ($(`.modtoggle#mod_toggle_${mod}`).prop("checked")) {
                selectedmods.push(mod);
            }
        }
    });
    updateproperties();
}

function selectinstance(instance) {
    //uncheck all mod toggles
    $(".modtoggle").each(function () {
        $(this).prop('checked', false);
    });
    //check appropriate toggles
    let selectedinstance = instances[instance];
    let instancemods = selectedinstance.split(" ");
    instancemods.forEach((m) => {
        $(`.modtoggle#mod_toggle_${m}`).prop('checked', true);
    });
    selectmods();
}

function selectshader(shader) {
    //uncheck all shader toggles
    $(".shadertoggle").each(function () {
        $(this).prop('checked', false);
    });
    //check appropriate toggle
    $(`.shadertoggle#${shader}`).prop('checked', true);
    currentshader = shader;
    updateproperties();
}

function updatemacros(value){
    $("#out").val(value != "" ? generator(value,modmacroforms,selectedmods) : "");
}

$("#entry").focus();
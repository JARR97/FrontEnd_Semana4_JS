//forma en la que se hace una consulta o peticion a un api

const fetchPokemon = () => {
    const PokeName = document.getElementById("PokeName");
    let pokeInput = PokeName.value.toLowerCase();

    const url = `https://pokeapi.co/api/v2/pokemon/${pokeInput}`; 
    fetch(url).then((res) => {
        if (res.status != 200) {
            PokemonSad();
            pokeImage("./img/PokemonSad.png");
        }else{
            console.log(res);
            return res.json();//aqui esta la respuesta aun es una promesa
        }
    }).then((data) => {
        //console.log(data);
        let pokeImg = data.sprites.front_default;
        let pokeName1 = data.name;
        let pokeid = data.id;
        let pokeheight = data.height;
        let pokeweight = data.weight;
        let pokestatst = data;
        let pokesmoves = data;
        let pokestatst0 = pokestatst.stats[0].base_stat;
        let pokestatst1 = pokestatst.stats[1].base_stat;
        let pokestatst2 = pokestatst.stats[2].base_stat;
        let pokestatst3 = pokestatst.stats[3].base_stat;
        let pokestatst4 = pokestatst.stats[4].base_stat;
        let pokestatst5 = pokestatst.stats[5].base_stat;
        let pokesmoves1 = pokestatst.moves[0].move.name;
        let pokesmoves2 = pokestatst.moves[1].move.name;
        let pokesmoves3 = pokestatst.moves[2].move.name;
        let pokesmoves4 = pokestatst.moves[3].move.name;

        pokeImage(pokeImg)
        
        pokePeso=document.getElementById("pokeweight");
        pokePeso.value = pokeweight;

        pokeAltura=document.getElementById("pokeheight");
        pokeAltura.value = pokeheight;

        pokeNameR=document.getElementById("pokeName1");
        pokeNameR.value = pokeName1;

        pokeidR=document.getElementById("pokeid");
        pokeidR.value = pokeid;

        pokebase_stat=document.getElementById("pokestatst0");
        pokebase_stat.value = pokestatst0;

        pokebase_stat=document.getElementById("pokestatst1");
        pokebase_stat.value = pokestatst1;
        
        pokebase_stat=document.getElementById("pokestatst2");
        pokebase_stat.value = pokestatst2;
        
        pokebase_stat=document.getElementById("pokestatst3");
        pokebase_stat.value = pokestatst3;
        
        pokebase_stat=document.getElementById("pokestatst4");
        pokebase_stat.value = pokestatst4;
        
        pokebase_stat=document.getElementById("pokestatst5");
        pokebase_stat.value = pokestatst5;
        
        pokesmoves11=document.getElementById("pokesmoves1");
        pokesmoves11.value = pokesmoves1;

        pokesmoves22=document.getElementById("pokesmoves2");
        pokesmoves22.value = pokesmoves2;

        pokesmoves33=document.getElementById("pokesmoves3");
        pokesmoves33.value = pokesmoves3;

        pokesmoves44=document.getElementById("pokesmoves4");
        pokesmoves44.value = pokesmoves4;



        
    })
    //con el then recibimos una promesa
}
//fetchPokemon();
const PokemonSad = () =>{ //si no se encuentra el pokemon se regresara a 0 los valores
        pokePeso=document.getElementById("pokeweight");
        pokePeso.value = "";
        pokeAltura=document.getElementById("pokeheight");
        pokeAltura.value = "";
        pokeNameR=document.getElementById("pokeName1");
        pokeNameR.value = "Error";
        pokeidR=document.getElementById("pokeid");
        pokeidR.value = "Error";
        pokebase_stat=document.getElementById("pokestatst0");
        pokebase_stat.value = "";
        pokebase_stat=document.getElementById("pokestatst1");
        pokebase_stat.value = "";
        pokebase_stat=document.getElementById("pokestatst2");
        pokebase_stat.value = "";
        pokebase_stat=document.getElementById("pokestatst3");
        pokebase_stat.value = "";
        pokebase_stat=document.getElementById("pokestatst4");
        pokebase_stat.value = "";
        pokebase_stat=document.getElementById("pokestatst5");
        pokebase_stat.value ="";
        pokesmoves11=document.getElementById("pokesmoves1");
        pokesmoves11.value = "";
        pokesmoves22=document.getElementById("pokesmoves2");
        pokesmoves22.value = "";
        pokesmoves33=document.getElementById("pokesmoves3");
        pokesmoves33.value = "";
        pokesmoves44=document.getElementById("pokesmoves4");
        pokesmoves44.value = "";
        return;
}
const pokeImage = (url) => {
    const pokeImg = document.getElementById("pokeImg")
    pokeImg.src = url;
}


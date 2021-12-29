const autos = require('./autos');
const persona = require('./persona');

concesionaria ={
    autos: autos,  
    persona: persona,
    buscarAuto: function(patente){
        for(let i = 0; i< this.autos.length; i++){
            if (this.autos[i].patente == patente){
                console.log(this.autos[i])
                return this.autos[i]
        }
            else{
                return null
             }  
        }
    },
    venderAuto: function(patente){
        return this.buscarAuto(patente).vendido = true  
    },
    autosParaLaVenta: function(){
        return this.autos.filter(/* auto => auto.vendido == false) */
            function(auto){
            return auto.vendido == false;
      }) },
    autosNuevos: function(){
        return this.autosParaLaVenta().filter(auto => auto.km < 100)
    },
    listaDeVentas: function(){
        let a =[]
        for(let i =0; i< this.autos.length; i++){
            if(this.autos[i].vendido == true){
                a.push(this.autos[i].precio)
            }
        }return a; 
    },
    totalDeVentas: function(){
        let ventas= this.listaDeVentas().reduce(function(acum, precio){
            return acum + precio
        }, 0); 
        return(ventas);
        },
    puedeComprar: function(auto, persona){
        let cuota = auto.precio/ auto.cuotas;
        return((auto.precio < persona.capacidadDePagoTotal) && (cuota <= persona.capacidadDePagoEnCuotas))
    },

    autosQuePuedeComprar: function(persona){
        return this.autosParaLaVenta().filter(auto => this.puedeComprar(auto, persona));
     },
    autosQuePuedeComprar: function(persona){
        let autosEnVenta = this.autosParaLaVenta()
        autosEnVenta().filter(auto => this.puedeComprar(auto, persona));
         } 
}
    
    
   console.log(concesionaria.autosQuePuedeComprar(persona))
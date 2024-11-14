class VehiclePrototype {
    constructor({
      tipo,
      marca,
      modelo,
      año,
      placa,
      precio,
      negociable,
      recibeOtrosVehiculos,
      fotos,
      transmision,
      puertas,
      dimensiones,
      materialAsientos,
      motor,
      vidriosElectricos,
      espejosElectricos,
      sensoresProximidadTraseros,
      sensoresProximidadDelanteros,
      camaraRetroceso,
      camara360,
      sensoresProximidadLateral,
      tableroMando,
      tipoTransmision,
      tapizado,
      sistemaSonido,
      estado,
      leasing,
    }) {
      this.tipo = tipo;
      this.marca = marca;
      this.modelo = modelo;
      this.año = año;
      this.placa = placa;
      this.precio = precio;
      this.negociable = negociable;
      this.recibeOtrosVehiculos = recibeOtrosVehiculos;
      this.fotos = fotos;
      this.transmision = transmision;
      this.puertas = puertas;
      this.dimensiones = dimensiones;
      this.materialAsientos = materialAsientos;
      this.motor = motor;
      this.vidriosElectricos = vidriosElectricos;
      this.espejosElectricos = espejosElectricos;
      this.sensoresProximidadTraseros = sensoresProximidadTraseros;
      this.sensoresProximidadDelanteros = sensoresProximidadDelanteros;
      this.camaraRetroceso = camaraRetroceso;
      this.camara360 = camara360;
      this.sensoresProximidadLateral = sensoresProximidadLateral;
      this.tableroMando = tableroMando;
      this.tipoTransmision = tipoTransmision;
      this.tapizado = tapizado;
      this.sistemaSonido = sistemaSonido;
      this.estado = estado;
      this.leasing = leasing;
    }
  
    clone() {
      return new VehiclePrototype({ ...this });
    }
  }
  
  export default VehiclePrototype;
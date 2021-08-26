export interface ProductInterface {
    results:               Result[];
}

export interface Result {
    id:                    string;
    title:                 string;
    price:                 number;
    thumbnail:             string;
    thumbnail_id:          string;
    accepts_mercadopago:   boolean;
    address:               Address;
}

export interface Address {
    state_id:   StateID;
    state_name: StateName;
    city_id:    string;
    city_name:  string;
}

export enum StateID {
    CoAnt     = "CO-ANT",
    CoCun     = "CO-CUN",
    CoDc      = "CO-DC",
    CoNSA     = "CO-NSA",
    CoSAN     = "CO-SAN",
    CoVac     = "CO-VAC",
}

export enum StateName {
    Antioquia         = "Antioquia",
    BogotáDC          = "Bogotá D.C.",
    Cundinamarca      = "Cundinamarca",
    NorteDeSantander  = "Norte De Santander",
    Santander         = "Santander",
    ValleDelCauca     = "Valle Del Cauca",
}

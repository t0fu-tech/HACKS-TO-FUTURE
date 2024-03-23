interface supllyAgent {
    typeAgent: string,

    cnpj: string,
    name: string,
    address: address,
    legalAttorney: string,
    dateOpen: string,
    size: string,
    businessType: string,
    mei: boolean,
    simples: boolean,
    headQuarter: boolean,
    status: boolean,
}

interface address {
    cep: string,
    street: string,
    city: string,
    state: string,
    complement: string
}

interface supplyPerson {
    number: number,
    avatar: string,
    name: string,
    cpf: number,
    gender: string,
    birthDate: number,
    telefoneNumber: number,

    typePerson: string,

    ativity: string,
    company: string,
    certificate: boolean,

    community: string,
    group: string,
    cep: number,
    address: number,
    complement: string,
    municipality: string,
    city: string,
    state: string,
    country: string,
    planet: string,

    listAttendance: string,
    agroforestryCertificate: string,
    securityCertificate: string,
    cottonCertificate: string,
    vejaContract: string,
}

interface supplyWorkers {
    number: number,
    avatar: string,
    name: string,
    cpf: number,
    gender: string,
    birthDate: number,
    telefoneNumber: number,

    typePerson: string,

    ativity: string,
    company: string,
    certificate: boolean,

    community: string,
    group: string,
    cep: number,
    address: number,
    complement: string,
    municipality: string,
    city: string,
    state: string,
    country: string,
    planet: string,

    listAttendance: string,
    agroforestryCertificate: string,
    securityCertificate: string,
    cottonCertificate: string,
    vejaContract: string,

    license: boolean,
    licenseID: number,
}

interface supplySource {
    area: supplyArea,
    raw: supplyRaw,
}

interface supplyArea {
    logo: string,
    name: string,
    width: number,
    length: number,
    areaSize: number,
    areaUnityMeasure: string,
    interventionType: string,
    about: string,

    numberImplementedAreas: number,
    implementedArea: boolean,
}

interface supplyRaw {
    planted: boolean,
    year2021: number,
    year2022: number,
    year2023: number,
}

class Pessoa {
    constructor(pNome, pEndereco){
        this.nome = pNome
        this.endereco = pEndereco
    }

    get Nome() {return this.nome}
    set Nome(pNome) {this.nome = pNome}

    get Endereco() {return this.endereco}
    set Endereco(pEndereco) {this.endereco = pEndereco}
}

class Fisica extends Pessoa {
    constructor(pCpf, pDtNasc){
        super()
        this.cpf = pCpf
        this.dtNasc = pDtNasc
    }

    get Cpf() {return this.cpf}
    set Cpf(pCpf) {this.cpf = pCpf}

    get DtNasc() {return this.dtNasc}
    set DtNasc(pDtNasc) {this.dtNasc = pDtNasc}

}

class Juridica extends Pessoa {
    constructor (pCnpj, pRazao){
        super()
        this.cnpj = pCnpj
        this.razao = pRazao
    }

    get Cnpj() {return this.cnpj}
    set Cnpj(pCnpj) {this.cnpj = pCnpj}

    get Razao() {return this.razao}
    set Razao(pRazao) {this.razao = pRazao}
}
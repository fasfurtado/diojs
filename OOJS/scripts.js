class ContaBancaria { 
    constructor(agencia, numero, tipo) {
        this.agencia = agencia;
        this.numero = numero;
        this.tipo = tipo;
        this._saldo = 0;
    }

    get saldo() {
        return this._saldo;
    }

    set saldo(valor) {
        this._saldo = valor
    }

    sacar(valor) {
        if (valor > this._saldo) {
            return "operação negada";
        }
        this._saldo = this._saldo - valor;
    }

    depositar(valor) {
        this._saldo = this._saldo + valor;
        return this._saldo;
    }
}

class ContaCorrente extends ContaBancaria {
    constructor(agencia, numero, cartaocredito) {
        super(agencia, numero);
        this.tipo = 'corrente';
        this._cartaocredito = cartaocredito;    
    }

    get cartaocredito() {
        return this._cartaocredito;
    }
 
    set cartaocredito(valor) {
        this._cartaocredito = valor;
    }
}

class ContaPoupanca extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'poupança';
    }

}

class ContaUniversitaria extends ContaBancaria {
    constructor(agencia, numero) {
        super(agencia, numero);
        this.tipo = 'universitaria';  
    }

    sacar(valor) {
        if (valor>500) {
            return "Operação negada";
        }
        this._saldo = this._saldo - valor;
    }

}
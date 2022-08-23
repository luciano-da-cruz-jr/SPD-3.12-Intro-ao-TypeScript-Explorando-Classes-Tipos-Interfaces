//Códigos 3.12.1.12

interface Pessoa
{
    nome: string;
    idade: number;
    nacionalidade: string;
}

interface Brasileiro extends Omit<Pessoa, 'nacionalidade'>{}

const brasileiro: Brasileiro =
{
    idade: 19,
    nome: 'Luiz',
}

/*Códigos 3.12.1.11

import $ from 'jquery';

$.fn.extend
(
    {
        novaFuncao()
        {
            console.log('Chamou nova funcao');
        }
    }
);

$('input').novaFuncao();

interface Estudante
{
    nome: string;
    idade: number;
}

interface Estudante
{
    serie: string;
}

const estudante: Estudante =
{

}*/

/*Códigos 3.12.1.10

interface Cachorro
{
    nome: string;
    idade: number;
    parqueFavorito?: string; 
}

type CachorroSomenteLeitura =
{
    +readonly [K in keyof Cachorro]-?: Cachorro[K];
}

class MeuCachorro implements CachorroSomenteLeitura
{
    nome;
    idade;
    parqueFavorito;

    constructor(nome, idade)
    {
        this.nome = nome;
        this.idade = idade;
    }
}

const cao = new MeuCachorro('Apolo', 14); */

/*Códigos 3.12.1.9

interface IUsuario 
{
    id: string;
    email: string;
    cargo?: 'gerente' | 'coordenador' | 'supervisor' | 'funcionario';
}

function redirecione(usuario: IUsuario)
{
    if(usuario.cargo)
    {
        // redirecionar(usuario.cargo);
    }

    //redirecionar para area do usuário
}*/

/*Códgigos 3.12.1.8

interface IUsuario
{
    id: string;
    email: string;
}

interface IAdmin extends IUsuario
{
    cargo: 'gerente' | 'coordenador' | 'supervisor';
}

function redirecione(usuario: IUsuario | IAdmin)
{
    if('cargo' in usuario)
    {
         redirecionar para a área de administração
    }

     redirecionar para a área do usuário
} */

/*Códigos 3.12.1.7

function adicionarApendiceALista<T>(array: T[], valor: T)
{
    return array.map(() => valor);
}

adicionarApendiceALista([1, 2, 3], 1); */

/*Códigos 3.12.1.6

const input = document.getElementById('input') as HTMLInputElement;

input.addEventListener('input', (event) => {
    const i = event.currentTarget as HTMLInputElement;
    console.log(i.value);
}); */

/*Códigos 3.12.1.5

interface IAnimal
{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    domestico: boolean;
}

interface IFelino extends IAnimal
{
    visaoNoturna: boolean;
}

interface ICanino extends IAnimal
{
    porte: 'pequeno' | 'medio' | 'grande';
}

type IDomestico = IFelino | ICanino; Poderia usar &

const animal: IDomestico =
{
    domestico: true,
    nome: 'cachorro',
    porte: 'medio',
    tipo: 'terrestre',
} */

/*Códigos 3.12.1.4

interface IAnimal
{
    nome: string;
    tipo: 'terrestre' | 'aquatico';
    executarRugido(alturaEmDecibeis: number): void;
}

interface IFelino extends IAnimal
{
    visaoNoturna: boolean;
}

const animal: IAnimal =
{
    nome: 'Elefante',
    tipo: 'terrestre',
    executarRugido: (alturaEmDecibeis) => (`S{alturaEmDecibeis}db`)
}

animal.executarRugido('s') Não aceitará por ser uma string no parametro

const felino: IFelino =
{
    nome: 'Leão',
    tipo: 'terrestre',
    visaoNoturna: true,
} */

/* Códigos 3.12.1.3

function soma(a: number, b: number) {

    return a + b;
    
}

soma('a','b') Não funcionára pq espero apenas número nesta função! */

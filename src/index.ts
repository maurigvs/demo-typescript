// string, boolean, number, ...
let x: number = 10
x = 16
console.log(x)

// inferencia x annotation
let y = 12
let z: number = 12

// tipos basicos
let firstName: string = "mauri"
let age: number = 30
const isAdmin: boolean = true

console.log(typeof firstName)

// object
const myNumbers: number[] = [1,2,3]

console.log(myNumbers.length)
console.log(firstName.toUpperCase())

myNumbers.push(5)
console.log(myNumbers)

// object literals

const user: { name: string, age: number } = {
    name: "Pedro", age: 18
}

console.log(user)

// any

let a: any = 0
a = "teste"
a = true
a = 10

// union type

let id: string | number = "10"
console.log(id)
id = "mceliogo"
console.log(id)

// type alias

type myIdType = number | string

const userId: myIdType = 10
console.log(userId)

const productId: myIdType = "00001"
console.log(productId)

// enum

enum Size {
    P = "Pequeno",
    M = "Medio",
    G = "Grande"
}

const camisa = {
    name: "Camisa Gola V",
    size: Size.G
}

console.log(camisa)

// literal types

let teste: "algumvalor" | null
teste = "algumvalor"
// teste = "outrovalor"
console.log(teste)

// functions
function soma(a: number, b: number){
    return a + b
}
console.log(soma(10, 20))

// funcoes com retorno tipado
function sayHelloTo(name: string): string {
    // return true
    return `Hello ${name}`
}
console.log(sayHelloTo('Mauri'))

// funcoes sem retorno tipado
function logger(msg: string): void{
    console.log(msg)
}
logger("teste")

// funcoes com argumentos opcionais
function greeting(name: string, greet?: string): void{
    if(!greet){
        console.log(`Ola ${name}!`)
        return
    }
    console.log(`${greet} ${name}!`)
    
}

greeting('Mauri')
greeting('Ahmad','Hallo')

// interfaces
interface MathFunctionParams {
    n1: number;
    n2: number;
}

function sumNumbers(nums: MathFunctionParams){
    return nums.n1 + nums.n2;
}
console.log(sumNumbers({ n1: 1, n2: 2 }))

function multiplyNumbers(nums: MathFunctionParams){
    return nums.n1 * nums.n2;
}
console.log(multiplyNumbers({ n1: 5, n2: 10 }))

// narrowing

function doSomething(infos: number | boolean){
    if(typeof infos === "number"){
        console.log(`O numero eh ${infos}`)
        return
    }
    console.log(`Nao foi passado um numero`)
}
doSomething(true)
doSomething(100)

// generics

function showArraysItems<T>(arr: T[]){
    arr.forEach(item => {
        console.log(`Item: ${item}`)
    })
}
const a1 = [1,2,3]
showArraysItems(a1)

const a2 = ["a", "b", "c"]
showArraysItems(a2)

// classes

class User {
    name
    age
    role
    isApproved

    constructor(name: string, age: number, role: string, isApproved: boolean){
        this.name = name;
        this.age = age;
        this.role = role;
        this.isApproved = isApproved;
    }

    showUserName(){
        console.log(`O nome do usuario eh ${this.name}`)
    }

    showUserAge(canShow: boolean){
        if(!canShow){
            console.log(`Informacao restrita!`)    
            return
        }
        console.log(`O usuario tem ${this.age} anos`)
    }
}

const mauri = new User("Mauri", 36, "admin", true)
console.log(mauri)

mauri.showUserName()
mauri.showUserAge(true)

// interfaces em classes

interface IVeiculo {
    brand: string
    showBrand(): void
}

class Carro implements IVeiculo {
    
    brand: string

    constructor(brand: string){
        this.brand = brand
    }

    showBrand(): void {
        console.log(`A marca eh ${this.brand}`)
    }   
}

const fusca = new Carro("VW")
console.log(fusca)
fusca.showBrand()

// heranca

class SuperCarro extends Carro {
    engine

    constructor(brand: string, engine: number){
        super(brand)
        this.engine = engine
    }
}

const a4 = new SuperCarro("Audi", 2)
console.log(a4)
a4.showBrand()

// decorators

// constructor decorator
function BaseParameters(){
    return function <T extends {new (...args: any[]): {}}>(constructor: T){
        return class extends constructor {
            id = Math.random()
            createdAt = new Date()
        }
    }
}

@BaseParameters()
class Person {
    name

    constructor(name: string){
        this.name = name
    }
}

const sam = new Person("sam")
console.log(sam)


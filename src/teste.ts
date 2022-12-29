class Tons {
    constructor (
    readonly id: string,
    readonly tom: number,
    readonly nome: string,
    readonly marca: string
  ) {}

  
}



const maybeline = new Tons('1', 1, 'porcelana', 'Maybeline')

const tomIdeal = (tom: number): any => {
  if (tom === maybeline.tom) {
    return 'seu tom está disponível na marca maybeline'
  }
}
console.log(tomIdeal(1))

export default Tons
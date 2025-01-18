// Definindo o tipo do contexto
  interface AuthContextType {
    newBook:Array<PropCard>;
    onOpen:()=>void;
  }
  
  // Definindo o tipo de um livro
  // type PropCard = {
  //   item:number,
  //   title: string;
  //   description: string;
  //   year: number;
  //   act: string;    
  //   caption: PropFlags; 
  //   nota: PropStars;
  // }

  type PropCard = {
    "autor": string, 
    "flag": PropFlags, 
    "genero": string, 
    "id": string, 
    "lançamento": string, 
    "qtdPaginas": number, 
    "title": string
  }

  //quando vc adicionar no banco , depois vc coloca nas props aqui , se nao pode dar ruim.
  //era isso certo?
  


  // Definindo as situações possíveis para o livro
  type PropFlags = 'quero ler' | 'lendo' | 'lido' | 'esquecido';
  
  // Definindo as avaliações possíveis para o livro
  type PropStars = '1 estrela' | '2 estrelas' | '3 estrelas' | '4 estrelas' | '5 estrelas';
  
// Definindo o tipo do contexto
  interface AuthContextType {
    newBook:Array<PropCard>;
    onOpen:()=>void;
    excluir:Function,
    handleEdit:Function,
  }
  

  type PropCard = {
    "autor": string, 
    "flag": PropFlags, 
    "genero": string, 
    "id": string, 
    "lançamento": string, 
    "qtdPaginas": number, 
    "title": string
  }
  


  // Definindo as situações possíveis para o livro
  type PropFlags = 'quero ler' | 'lendo' | 'lido' | 'esquecido';
  
  // Definindo as avaliações possíveis para o livro
  type PropStars = '1 estrela' | '2 estrelas' | '3 estrelas' | '4 estrelas' | '5 estrelas';
  
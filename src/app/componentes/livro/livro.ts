export interface Livro {
  titulo: string;
  autoria: string;
  genero: GeneroLiterario;
  imagem: string;
  favorito: boolean;
}

export interface GeneroLiterario {
  id: string;
  value: string;
  livros: Livro[];
}

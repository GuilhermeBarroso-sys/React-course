import React from 'react';

export default function Header(/*props*/ {title, children} /*da pra utilizar desestruct */ ) { 
    // props => propriedades
    return (
       <header>
           <h1>{title}</h1> 
           {children} 
           
       </header>
    ); // Quando quiser retornar mais de 1 linha tem que colocar o () no return
    /***
     * Pra mostrar uma variavel no js é só colocar o {}. Parecido com o <% do ejs %>
     * Ex: {props.title}
     * se for utilizar desestruct seria:
     * header({title}) {
     * {title}
     * }
     * children é todo o conteudo q a tag recebeu ( é criado pelo react )
     * Utiliza o children toda vez que quiser mostrar o conteudo dentro do componente
     * ex => <Header title = "Exemplo propriedade 1">
     * 
        <ul> O children vai mostrar isso aqui
            <li>Teste</li>  O children vai mostrar isso aqui
            <li>Teste</li> O children vai mostrar isso aqui
        </ul> O children vai mostrar isso aqui
    </Header>
    
     */
}
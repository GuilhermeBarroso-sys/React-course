import React, { useState }from 'react';
import Header from './components/Header'
import Footer from './components/Footer';
function App() { // O App é o arquivo principal da componentização
    /***
     * 3 coisas essenciais pra construir qualquer aplicação no react
     * Componente
     * Propriedade => É uma informação que passa do componente pai para o componente filho
     * Estado & imutabilidade
     * 
     * Imutabilidade => Sempre evitar de editar uma variavel e sim recria-la. 
     * 
     */
    const [projects, setProjects] = useState(['Desenvolvimento de app', 'Front-end web']);
    // const [projects, setProjects] = desestruct
    // useState retorna um array com 2 posições
    // 1 pos => varaivel com seu valor inicial ('Desenvolvimento de app', 'Front-end web' )
    // 2 pos => Função para atualizarmos esse valor
    // toda vez que for lidar com alguma ação do usuario é bom a func começar com handle.
    function handleAddProject() {
        setProjects([...projects, `Novo projeto ${Date.now()}`]) 
        console.log(projects);
    }
    return (
    <>
    <Header title = "Projects">
        <ul>
            {projects.map(project => <li key={project}>{project}</li>)}
        </ul>

        <button type = "button" onClick={handleAddProject}>Adicionar projeto</button>
    </Header>
  
    
    <Footer author = "Guilherme">
        <ul>
            <li>oi</li>
        </ul>
    </Footer>
    </>
    /***
     * No React sempre que tiver 1 componente abaixo do outro tem que colocar uma div
     * Porem pode dificultar a estilização no css, entao utilizamos o fragment que é um <> vazio.
     * 
     * exemplo:
     *  <div>
     *  <Header />
     *  <Header />
     *  </div>
     */
    )
}


export default App;
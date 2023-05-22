    class Conhecimentos {
        constructor(nome, idade) {
        this.nome = nome;
        this.idade = idade;
        }
    
        frontend() {
        console.log(`${this.nome} frontend.`);
        }
    
        backend() {
        console.log(`${this.nome} backend.`);
        }
    
        designer() {
        console.log(`${this.nome} designer.`);
        }
    }
    
    class Funcionario1 extends Conhecimentos {
        constructor(nome, idade, frontend) {
        super(nome, idade);
        this.frontend = frontend;
        }
    
        uxui() {
        console.log(`${this.nome} uxui`);
        }
    }
    
    class Funcionario2 extends Conhecimentos {
        constructor(nome, idade) {
        super(nome, idade);
        }
    
        devops() {
        console.log(`${this.nome} devops.`);
        }
    }
    
    class Funcionario3 extends Conhecimentos {
        constructor(nome, idade, frontend) {
        super(nome, idade);
        this.frontend = frontend;
        }
    
        marketing() {
        console.log(`${this.nome} marketing`);
        }
    }
    
    // Instâncias de objetos
    const func1 = new Funcionario1('Thiago', 3, 'frontend');
    const func3 = new Funcionario3('Thaissa', 5, 'backend');
    const func2 = new Funcionario2('Julia', 2, 'marketing');

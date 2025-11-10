abstract class Pagina {
    constructor(public nome: string) {}
    public abstract descricao(): string;
}

class PaginaHabilidades extends Pagina {
    constructor() { super("Página de Habilidades"); }
    public descricao(): string { return this.nome; }
}

class PaginaEducacao extends Pagina {
    constructor() { super("Página de Educação"); }
    public descricao(): string { return this.nome; }
}

class PaginaExperiencia extends Pagina {
    constructor() { super("Página de Experiência"); }
    public descricao(): string { return this.nome; }
}

class PaginaIntroducao extends Pagina {
    constructor() { super("Página de Introdução"); }
    public descricao(): string { return this.nome; }
}

class PaginaResultados extends Pagina {
    constructor() { super("Página de Resultados"); }
    public descricao(): string { return this.nome; }
}

class PaginaConclusao extends Pagina {
    constructor() { super("Página de Conclusão"); }
    public descricao(): string { return this.nome; }
}

class PaginaResumo extends Pagina {
    constructor() { super("Página de Resumo"); }
    public descricao(): string { return this.nome; }
}

class PaginaBibliografia extends Pagina {
    constructor() { super("Página de Bibliografia"); }
    public descricao(): string { return this.nome; }
}

abstract class Documentos {
    protected paginas: Pagina[] = [];

    constructor() {
        this.paginas = this.criarPaginas();
    }

    protected abstract criarPaginas(): Pagina[];

    public getPaginas(): Pagina[] {
        return this.paginas;
    }

    public exibir(): void {
        console.log(`\n${this.constructor.name} -------`);
        this.paginas.forEach((pagina) => {
            console.log(pagina.descricao());
        });
    }
}

class Curriculo extends Documentos {
    protected criarPaginas(): Pagina[] {
        return [
            new PaginaHabilidades(),
            new PaginaEducacao(),
            new PaginaExperiencia(),
        ];
    }
}

class Relatorio extends Documentos {
    protected criarPaginas(): Pagina[] {
        return [
            new PaginaIntroducao(),
            new PaginaResultados(),
            new PaginaConclusao(),
            new PaginaResumo(),
            new PaginaBibliografia(),
        ];
    }
}

class Principal {
    public static main(): void {
        const curriculo: Documentos = new Curriculo();
        curriculo.exibir();

        const relatorio: Documentos = new Relatorio();
        relatorio.exibir();
    }
}

Principal.main();
// 1. Interface base para Página
interface Page {
  getTitle(): string;
}

// 2. Páginas concretas para Currículo
class SkillsPage implements Page {
  getTitle(): string {
    return "Página de Habilidades";
  }
}

class EducationPage implements Page {
  getTitle(): string {
    return "Página de Educação";
  }
}

class ExperiencePage implements Page {
  getTitle(): string {
    return "Página de Experiência";
  }
}

// 2. Páginas concretas para Relatório
class IntroductionPage implements Page {
  getTitle(): string {
    return "Página de Introdução";
  }
}

class ResultsPage implements Page {
  getTitle(): string {
    return "Página de Resultados";
  }
}

class ConclusionPage implements Page {
  getTitle(): string {
    return "Página de Conclusão";
  }
}

class SummaryPage implements Page {
  getTitle(): string {
    return "Página de Resumo";
  }
}

class BibliographyPage implements Page {
  getTitle(): string {
    return "Página de Bibliografia";
  }
}

// 3. Classe abstrata Documento
abstract class Document {
  protected pages: Page[] = [];

  constructor() {
    this.createPages();
  }

  protected abstract createPages(): void;

  getPages(): Page[] {
    return this.pages;
  }
}

// 4. Documentos concretos
class Curriculum extends Document {
  protected createPages(): void {
    this.pages.push(new SkillsPage(), new EducationPage(), new ExperiencePage());
  }
}

class Report extends Document {
  protected createPages(): void {
    this.pages.push(
      new IntroductionPage(),
      new ResultsPage(),
      new ConclusionPage(),
      new SummaryPage(),
      new BibliographyPage()
    );
  }
}

// Novo tipo de documento
class Portfolio extends Document {
  protected createPages(): void {
    this.pages.push(
      new IntroductionPage(),
      new SkillsPage(),
      new ExperiencePage(),
      new SummaryPage()
    );
  }
}

// 5. Classe Principal
class Main {
  static run() {
    const documents: Document[] = [
      new Curriculum(),
      new Report(),
      new Portfolio(),
    ];

    documents.forEach((doc) => {
      const className = doc.constructor.name;
      console.log(`${className} -------`);
      doc.getPages().forEach((page) => console.log(page.getTitle()));
      console.log();
    });
  }
}

Main.run();

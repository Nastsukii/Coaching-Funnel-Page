# 🏆 Coaching Funnel Page

Uma aplicação de funil de vendas para coaching esportivo de elite, desenvolvida com Next.js, React, TypeScript e Tailwind CSS, seguindo a arquitetura MVC.

## 📋 Sobre o Projeto

Página de funil otimizada para conversão de atletas que buscam alto desempenho. O programa oferece coaching de elite focado em três pilares fundamentais:

- **Mecânica** - Otimização da eficiência de movimento
- **Mentalidade** - Resiliência mental para performance sob pressão
- **Metabolismo** - Nutrição para resistência e recuperação máximas

## 🚀 Tecnologias Utilizadas

- **[Next.js 15](https://nextjs.org/)** - Framework React com App Router
- **[React 19](https://react.dev/)** - Biblioteca para interfaces de usuário
- **[TypeScript](https://www.typescriptlang.org/)** - Tipagem estática
- **[Tailwind CSS](https://tailwindcss.com/)** - Framework CSS utilitário
- **[Lucide React](https://lucide.dev/)** - Biblioteca de ícones

## 🏗️ Arquitetura MVC

O projeto segue uma arquitetura MVC (Model-View-Controller) adaptada para Next.js:

```
src/
├── types/              # Model - Definições TypeScript
├── data/               # Model - Dados e traduções
├── context/            # Model - Gerenciamento de estado (Language Context)
├── components/         # View - Componentes React
│   ├── ui/            # Componentes reutilizáveis
│   ├── layout/        # Layout (Navbar, Footer)
│   ├── landing/       # Página inicial
│   ├── scheduling/    # Página de agendamento
│   └── confirmation/  # Página de confirmação
└── app/               # Controller - Rotas e páginas Next.js
    ├── layout.tsx
    ├── page.tsx
    ├── scheduling/
    └── confirmation/
```

## 🌍 Funcionalidades

- ✅ **Multilíngue** - Suporte para Português e Inglês com troca instantânea
- ✅ **Design Responsivo** - Otimizado para desktop, tablet e mobile
- ✅ **Dark Mode** - Tema escuro com acentos em verde
- ✅ **Funil Completo** - Landing → Agendamento → Confirmação
- ✅ **SEO Otimizado** - Metadata configurada para melhor indexação
- ✅ **Performance** - Otimizações do Next.js (SSR, Code Splitting)

## 🔧 Instalação e Uso

### Pré-requisitos

- Node.js 18+ 
- npm, yarn, pnpm ou bun

### Instalação

```bash
# Clone o repositório
git clone https://github.com/seu-usuario/Coaching-Funnel-Page.git

# Entre na pasta do projeto
cd Coaching-Funnel-Page

# Instale as dependências
npm install
```

### Executar em Desenvolvimento

```bash
npm run dev
```

Abra [http://localhost:3000](http://localhost:3000) no navegador.

### Build para Produção

```bash
# Criar build otimizado
npm run build

# Executar build de produção
npm start
```

## 📱 Páginas

- **`/`** - Página inicial (Landing Page)
- **`/scheduling`** - Página de agendamento de sessão
- **`/confirmation`** - Página de confirmação e próximos passos

## 🎨 Personalização

### Alterar Idiomas

Edite o arquivo `src/data/translations.ts` para modificar ou adicionar traduções.

### Modificar Estilos

O projeto usa Tailwind CSS. Configure cores e temas em:
- `tailwind.config.ts` - Configuração do Tailwind
- `src/app/globals.css` - Estilos globais

## 📄 Licença

Este projeto está sob a licença MIT.

## 👤 Autor

**LACB** - Coaching de Elite para Atletas

---

Desenvolvido com ⚡ e Next.js

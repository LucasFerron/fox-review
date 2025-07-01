# 📚 Fox Review - Seu Gerenciador Pessoal de Leitura


Aplicativo mobile para entusiastas da leitura gerenciarem seus livros, avaliar obras e acompanhar metas de leitura. Desenvolvido com React Native e Firebase para a disciplina de Programação Orientada a Eventos.

---

## 📑 Sumário

1. [Funcionalidades](#-funcionalidades)  
2. [Tecnologias](#-tecnologias-utilizadas)  
3. [Instalação](#-instalação)
4. [Design](#-design-system)
5. [Links Úteis](#-links-úteis)

---

## ✨ Funcionalidades

### 📖 Gestão de Livros
- CRUD completo com Firebase
- Status personalizáveis (Lendo/Quero ler/Lido)
- Avaliação por estrelas (1-5)
- Busca por título/gênero

### 👤 Perfil
- Estatísticas de leitura
- Galeria de capas
- Paginômetro (contador de páginas)

### 🔐 Autenticação
- Login/Cadastro
- Recuperação de senha
- Edição de perfil

---

## 🛠 Tecnologias Utilizadas

| Camada         | Tecnologias                          |
|----------------|--------------------------------------|
| **Frontend**   | React Native, React Navigation       |
| **UI**         | React Native Paper, Vector Icons     |
| **Banco**      | Firebase Realtime Database           |
| **Gestos**     | react-native-gesture-handler         |
| **Utilitários**| DateTimePicker, Snackbar             |

---
## 🎨 Design System

### Paleta de Cores
```javascript
const colors = {
  primary: '#02C4D2',    // Azul claro (botões primários)
  secondary: '#FA4F00',  // Laranja (botões secundários)
  text: '#007A83',       // Azul escuro (textos)
  background: '#E9FEFF', // Fundo geral
  accent: '#FFC107',     // Amarelo (destaques)
  error: '#F44336'       // Vermelho (erros)
}
```
---
## ⚙ Instalação

Antes de executar o projeto, certifique-se de ter instalado:

- [Node.js](https://nodejs.org/) (versão 16 ou superior)
- [Expo CLI](https://docs.expo.dev/get-started/installation/) (globalmente)
- Conta no [Firebase](https://firebase.google.com/)
- Ambiente de desenvolvimento:
  - Android Studio (para emulador Android)
  - Xcode (para emulador iOS - apenas macOS)

**Verificação rápida**:
```bash
node --version  # Deve retornar v16+
expo --version  # Deve retornar a versão do CLI
firebase --version  # Opcional para configurações avançadas
```
``` bash
# 1. Clone o repositório
git clone https://github.com/seu-usuario/fox-review.git
cd fox-review

# 2. Instale as dependências
npm install

# 3. Configure o Firebase (substitua os valores em config/firebase.js)
# 4. Execute o app
npx expo start
```
---
## 📝 Links Úteis

- [Documentação Firebase](https://firebase.google.com/docs)
- [React Native Paper](https://reactnativepaper.com/)
- [React Navigation](https://reactnavigation.org/)

> Desenvolvido para a disciplina de Programação Orientada a Eventos - IFSC

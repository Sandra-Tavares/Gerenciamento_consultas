# Escopo Projeto: Atendimentos

## Parte 1:
### Rotinas a serem criadas

- Cadastrar usuário

- Fazer login do usuário

- inserir  os agendamento dos clientes;

- Gerar Recibo do atendimento ou atendimentos

### relatórios
- relatório dos atendimentos do próximo dia
- relatório mensal dos atendimentos;
- relatório por clientes e já encaminhar para o cliente


### Endpoints
Cadastrar usuário - post
Alterar dados do usuário - put
Detalhar usuário - get

Cadastrar Clientes - post;
Alterar dados do cliente - put
detalhar dados do cliente - get

Cadastrar agendamento - post
alterar agendamento - put
listar agendamento - get


### banco de dados
**usuários:**
id:
nome:
email:
senha:

**cliente:**
id cliente
nome;
telefone;
idade:
endereço:

**agendamento**
id do cliente
nome do cliente:
data agendamento
Hora agendamento: 


**atendidos:**
id do cliente:
data do atendimento:
descriçao do atendimento;
valor da avaliação:
valor da sessão:

 
###  Parte 2:
 
### Rotinas a serem criadas

- Encaminhar uma mensagem para o cliente um dia antes para confirmar o atendimento
  - Se o cliente não retornar dentro de uma hora;
- Encaminhar mensagem para o terapeuta entrar em contato com o cliente
  - Se cliente retornar confirmando;
- colocar um lembrete para o dia do agendamento para lembrar ao terapeuta 3 horas antes do atendimento do cliente;
- 2 horas após o atendimento caso terapeuta não tenha confirmado o atendimento;
- Encaminhar mensagem questionando se o cliente foi atendido;
- Se sim abrir tela para registro do atendimento;
- Se não abrir tela para registrar o motivo do não atendimento
- Encaminhar mensagem para o cliente  questionando como foi o atendimento após 24 horas;

- Gerar Recibo do atendimento ou atendimentos
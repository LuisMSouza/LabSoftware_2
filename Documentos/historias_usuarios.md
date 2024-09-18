# Histórias de Usuários

## 1. Cadastro de Cliente
**Como** um cliente,  
**Quero** me cadastrar no sistema de aluguel de automóveis,  
**Para** que eu possa realizar pedidos de assinatura de veículos.

### Critérios de Aceitação:
- O sistema deve permitir o registro de informações pessoais como RG, CPF, nome, endereço, profissão e rendimentos.
- O cliente deve receber uma confirmação de cadastro após a conclusão.

## 2. Introdução de Pedido de Assinatura
**Como** um cliente,  
**Quero** introduzir um pedido de assinatura de um veículo,  
**Para** que eu possa alugar um automóvel por um período determinado.

### Critérios de Aceitação:
- O cliente deve poder selecionar um veículo disponível, incluindo marca, modelo, ano e placa.
- O cliente deve poder escolher a duração do contrato (12, 24, 36 ou 48 meses).
- O cliente pode optar pela compra do veículo ao final do contrato.

## 3. Modificar Pedido de Assinatura
**Como** um cliente,  
**Quero** modificar um pedido de assinatura existente,  
**Para** ajustar minhas preferências ou corrigir informações.

### Critérios de Aceitação:
- O cliente deve poder modificar os detalhes do pedido antes da aprovação do agente.
- Após a modificação, o pedido deve ser submetido para nova avaliação financeira.

## 4. Consultar Pedido de Assinatura
**Como** um cliente,  
**Quero** consultar o status do meu pedido de assinatura,  
**Para** acompanhar o progresso e a avaliação do agente.

### Critérios de Aceitação:
- O sistema deve exibir o status atual do pedido: pendente, em avaliação, aprovado ou cancelado.

## 5. Cancelar Pedido de Assinatura
**Como** um cliente,  
**Quero** cancelar um pedido de assinatura,  
**Para** desistir da contratação antes da execução do contrato.

### Critérios de Aceitação:
- O cliente deve poder cancelar o pedido desde que ele ainda não tenha sido aprovado.

## 6. Avaliar Pedido Financeiramente
**Como** um agente (empresa ou banco),  
**Quero** avaliar financeiramente um pedido de assinatura,  
**Para** decidir se o contrato pode ser aprovado com base no perfil do cliente.

### Critérios de Aceitação:
- O sistema deve permitir ao agente acessar informações do cliente, incluindo renda e empregadores.
- O agente deve aprovar ou rejeitar o pedido após análise.

## 7. Modificar Pedido (Agente)
**Como** um agente (empresa ou banco),  
**Quero** modificar um pedido de assinatura,  
**Para** ajustar detalhes e realizar correções após a análise financeira.

### Critérios de Aceitação:
- O agente deve poder ajustar valores e condições do pedido após análise.
- O cliente deve ser notificado das modificações realizadas pelo agente.

## 8. Executar Contrato de Assinatura
**Como** um agente (empresa ou banco),  
**Quero** executar o contrato de assinatura após a aprovação financeira,  
**Para** formalizar a contratação do aluguel do automóvel.

### Critérios de Aceitação:
- O contrato deve ser gerado automaticamente após a aprovação.
- O veículo deve ser registrado como propriedade do cliente ou da empresa, dependendo do contrato.

## 9. Gerar Contrato de Crédito (Seguro)
**Como** um agente bancário,  
**Quero** gerar um contrato de crédito ou seguro associado ao pedido de assinatura,  
**Para** proteger a transação financeira com o cliente.

### Critérios de Aceitação:
- O sistema deve permitir a emissão de contratos de crédito junto ao pedido de assinatura.
- O contrato de crédito deve estar vinculado ao contrato de aluguel do veículo.

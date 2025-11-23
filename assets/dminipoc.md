
# Transformando a base de conhecimento  iffod em uma POC de agente GenAI (RAG)
 Este guia é  **opcional** e serve para quem deseja transformar o arquivo  
`base_conhecimento_ifood_genai.csv` em uma **prova de conceito (POC)** de um agente interno utilizado para decisões de **reembolsos e cancelamentos**, similar ao que times internos podem desenvolver no iFood.

A ideia não é  construir um sistema completo, mas criar algo demonstrável para **portfólio, currÃ­culo ou entrevista técnica**.

---

## Objetivo da POC

Criar um agente de IA capaz de:

1) **Consultar informaÃ§Ãµes oficiais** (base de conhecimento)  
2) **Responder perguntas operacionais** de forma consistente  
3) **Evitar respostas inventadas** (alucinação)  
4) Sugerir **fallback seguro** quando não há confiança

---

## O você vai precisar

Você pode escolher entre duas rotas:

## Tipo de POC |Ferramentas sugeridas 

**Sem código**  Flowise, Dify, ChatGPT Assistants, N8n, Zapier AI Actions 

**Com código** | Python + alguma lib de RAG (LangChain, LlamaIndex etc.) 


- [x] **Com código** | javascript + alguma lib de RAG (LangChain, LlamaIndex etc.) 

---

## 1. Importe a base de conhecimento

Faãa upload do arquivo CSV na ferramenta escolhida, dentro da sessão onde ela aceita:

- **Knowledge Base**
- **Documents**
- **Files / Upload**
- **Sources / Data Sources**

Verifique se o condo foi indexado (algumas plataformas mostram isso).

---

## 2 . Configure o propósito do agente (systemPrompt)

Use uma descriçãoo parecida com esta:

> Você é um agente interno que auxilia colaboradores a decidirem sobre reembolsos e cancelamentos.  
> Sempre consulte a base de conhecimento antes de responder.  
> Se não houver confianÃ§a suficiente, sugira validação manual ou abertura de ticket interno, em vez de gerar uma resposta incerta.


Ative e deixe as configurações padão.

---

## 4. Configure um comportamento de fallback

Susgestão de mensagem pdadão:

> Não encontrei informações suficientes na base para responder com segunça. Sugiro abrir um ticket interno ou consultar a política oficial.

---

## 5. Teste com cenários reais

Use perguntas como:

| Pergunta recomendada | O que observar |
|---|---|
|  cliente quer reembolso, mas o pedido já saiu para entrega. Ainda não permitido? | O agente deve identificar excessões e diferenciar motivos (erro do app/restaurante/entregador vs. desistência do cliente) |
|  restaurante cancelou por falta de ingrediente. O reembolso automático | Deve encontrar política de reembolso automático |
|  cliente foi cobrado  o cancelamento. O que fazer? | Deve mencionar validação do estorno e possivelmente ticket |

---

## 6. Motivo da POC: (por em prática meus estudos voltados para IA)

> Desenvolvi uma POC de agente interno para decisões de reembolso/cancelamento com RAG, usando uma base de conhecimento simulada.  
> Configurei fallback para baixa confiança e testei cenários críticos (pedido já saiu para entrega, cancelamento por falha do restaurante, cobranças reembolsos e cancelamento).  
> A POC foi criada com foco em consistência operacional e redução de respostas incorretas.

---

## 7. Ideias de evolução (opcional)

- logs de confiança da resposta
- categorias de decisão (financeiro / restaurante / entrega / fraude)
- integração com APIs ficiticias de pedido/estorno
- classificação automática do tipo de caso

---

## Arquivo utilizado

`base_conhecimento_ifood_genai.csv`  

OBS: ` Neste caso, extrai os dados da política em um TXT que será nosso LLMS`

*(Simulação para fins educacionais, não representa políticas oficiais do iFood.)*



---

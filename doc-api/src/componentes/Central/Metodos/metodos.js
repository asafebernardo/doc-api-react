import React, { useState } from "react";
import styled from "styled-components";

const TabContainer = styled.div`
  height: 86%;
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  grid-template-rows: auto 1fr;
  border-radius: 8px;
  margin-top: 50px;
  color: rgb(255, 255, 255);
  font-family: Calibri, sans-serif;
`;

const TabLabel = styled.div`
max-height: 300px;
overflow-y: auto;

  padding: 1em;
  text-align: center;
  cursor: pointer;
  background-color: ${({ color }) => color};
  color: ${({ textColor }) => textColor};
  border-right: 2px solid #1a1e23;
  transition: background 250ms, color 250ms;
  
  &:hover, ${({ active, color }) => active && `
    background-color: ${color};
    filter: brightness(0.8);
    color: white;
  `}
`;

const TabContent = styled.div`
  grid-column: 1 / -1;
  padding: 1em;
  display: ${({ active }) => (active ? "block" : "none")};

  @keyframes fadeIn {
  from { opacity: 0; }
  to { opacity: 1; }
}
animation: fadeIn 0.3s ease-in-out;
`;

const get = `
<code>
{
  "qtype": "cliente.id",
  "query": "1",
  "oper": ">=",
  "page": "1",
  "rp": "20",
  "sortname": "cliente.id",
  "sortorder": "desc"
}
</code>
`;

const post = `
<code>
{
  "ativo": "S",//Obrigatório
  "id_tipo_cliente": "",
  "tipo_cliente_scm": "",
  "tipo_pessoa": "F",//Obrigatório
  "razao": "Cliente 01",
  "fantasia": "",
  "cnpj_cpf": "175.181.720-20",//Obrigatório
  "ie_identidade": "",
  "contribuinte_icms": "I",//Obrigatório
  "rg_orgao_emissor": "",
  "nacionalidade": "",
  "cidade_naturalidade": "",
  "estado_nascimento": "",
  "data_nascimento": "",
  "profissao": "",
  "estado_civil": "",
  "inscricao_municipal": "",
  "isuf": "",
  "tipo_assinante": "1",//Obrigatório
  "filial_id": "",
  "filtra_filial": "",
  "idx": "",
  "ativo_serasa": "",
  "convert_cliente_forn": "",
  "atualizar_cadastro_galaxPay": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "83215-210",//Obrigatório
  "cif": "",
  "endereco": "Rua Teste",//Obrigatório
  "numero": "1200",//Obrigatório
  "complemento": "",
  "bairro": "Teste",//Obrigatório
  "cidade": "1",//Obrigatório
  "referencia": "",
  "uf": "",
  "tipo_localidade": "U",//Obrigatório
  "latitude": "",
  "longitude": "",
  "cep_cob": "",
  "endereco_cob": "",
  "numero_cob": "",
  "bairro_cob": "",
  "cidade_cob": "",
  "complemento_cob": "",
  "referencia_cob": "",
  "uf_cob": "",
  "fone": "",
  "telefone_comercial": "",
  "ramal": "",
  "id_operadora_celular": "",
  "telefone_celular": "",
  "whatsapp": "",
  "email": "",
  "contato": "",
  "website": "",
  "skype": "",
  "facebook": "",
  "hotsite_email": "",
  "senha": "",
  "acesso_automatico_central": "",
  "alterar_senha_primeiro_acesso": "",
  "senha_hotsite_md5": "",
  "hotsite_acesso": "",
  "crm": "",
  "id_candato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_perfil": "",
  "responsavel": "",
  "indicado_por": "",
  "cadastrado_via_viabilidade": "",
  "status_prospeccao": "",
  "crm_data_novo": "",
  "crm_data_sondagem": "",
  "crm_data_apresentando": "",
  "crm_data_negociando": "",
  "crm_data_vencemos": "",
  "crm_data_perdemos": "",
  "crm_data_abortamos": "",
  "crm_data_sem_porta_disponivel": "",
  "crm_data_sem_viabilidade": "",
  "foto_cartao": "",
  "participa_cobranca": "",
  "num_dias_cob": "",
  "participa_pre_cobranca": "",
  "cob_envia_email": "",
  "cob_envia_sms": "",
  "id_conta": "",
  "cond_pagamento": "",
  "id_vendedor": "",
  "tabela_preco": "",
  "deb_automatico": "",
  "deb_agencia": "",
  "deb_conta": "",
  "codigo_operacao": "",
  "tipo_pessoa_titular_conta": "",
  "cnpj_cpf_titular_conta": "",
  "nome_pai": "",
  "cpf_pai": "",
  "identidade_pai": "",
  "nascimento_pai": "",
  "nome_mae": "",
  "cpf_mae": "",
  "identidade_mae": "",
  "nascimento_mae": "",
  "quantidade_dependentes": "",
  "nome_conjuge": "",
  "fone_conjuge": "",
  "cpf_conjuge": "",
  "rg_conjuge": "",
  "data_nascimento_conjuge": "",
  "nome_contador": "",
  "telefone_contador": "",
  "orgao_publico": "",
  "im": "",
  "nome_representante_1": "",
  "cpf_representante_1": "",
  "identidade_representante_1": "",
  "nome_representante_2": "",
  "cpf_representante_2": "",
  "identidade_representante_2": "",
  "iss_classificacao_padrao": "00",//Obrigatório
  "desconto_irrf_valor_inferior": "",
  "ref_com_empresa1": "",
  "ref_com_fone1": "",
  "ref_com_empresa2": "",
  "ref_com_fone2": "",
  "ref_pes_nome1": "",
  "ref_pes_fone1": "",
  "ref_pes_nome2": "",
  "ref_pes_fone2": "",
  "obs": "",
  "alerta": ""
}
</code>
`;

const put = `
<code>
{
  "ativo": "S",
  "id_tipo_cliente": "",
  "tipo_cliente_scm": "",
  "tipo_pessoa": "F",
  "razao": "Cliente 02",//Alterado o nome
  "fantasia": "",
  "cnpj_cpf": "175.181.720-20",
  "ie_identidade": "",
  "contribuinte_icms": "I",
  "rg_orgao_emissor": "",
  "nacionalidade": "",
  "cidade_naturalidade": "",
  "estado_nascimento": "",
  "data_nascimento": "",
  "profissao": "",
  "estado_civil": "",
  "inscricao_municipal": "",
  "isuf": "",
  "tipo_assinante": "1",
  "filial_id": "",
  "filtra_filial": "",
  "idx": "",
  "ativo_serasa": "",
  "convert_cliente_forn": "",
  "atualizar_cadastro_galaxPay": "",
  "id_condominio": "",
  "bloco": "",
  "apartamento": "",
  "cep": "83215-210",
  "cif": "",
  "endereco": "Rua Teste",
  "numero": "1200",
  "complemento": "",
  "bairro": "Teste",
  "cidade": "1",
  "referencia": "",
  "uf": "",
  "tipo_localidade": "U",
  "latitude": "",
  "longitude": "",
  "cep_cob": "",
  "endereco_cob": "",
  "numero_cob": "",
  "bairro_cob": "",
  "cidade_cob": "",
  "complemento_cob": "",
  "referencia_cob": "",
  "uf_cob": "",
  "fone": "",
  "telefone_comercial": "",
  "ramal": "",
  "id_operadora_celular": "",
  "telefone_celular": "",
  "whatsapp": "",
  "email": "",
  "contato": "",
  "website": "",
  "skype": "",
  "facebook": "",
  "hotsite_email": "",
  "senha": "",
  "acesso_automatico_central": "",
  "alterar_senha_primeiro_acesso": "",
  "senha_hotsite_md5": "",
  "hotsite_acesso": "",
  "crm": "",
  "id_candato_tipo": "",
  "id_campanha": "",
  "id_concorrente": "",
  "id_perfil": "",
  "responsavel": "",
  "indicado_por": "",
  "cadastrado_via_viabilidade": "",
  "status_prospeccao": "",
  "crm_data_novo": "",
  "crm_data_sondagem": "",
  "crm_data_apresentando": "",
  "crm_data_negociando": "",
  "crm_data_vencemos": "",
  "crm_data_perdemos": "",
  "crm_data_abortamos": "",
  "crm_data_sem_porta_disponivel": "",
  "crm_data_sem_viabilidade": "",
  "foto_cartao": "",
  "participa_cobranca": "",
  "num_dias_cob": "",
  "participa_pre_cobranca": "",
  "cob_envia_email": "",
  "cob_envia_sms": "",
  "id_conta": "",
  "cond_pagamento": "",
  "id_vendedor": "",
  "tabela_preco": "",
  "deb_automatico": "",
  "deb_agencia": "",
  "deb_conta": "",
  "codigo_operacao": "",
  "tipo_pessoa_titular_conta": "",
  "cnpj_cpf_titular_conta": "",
  "nome_pai": "",
  "cpf_pai": "",
  "identidade_pai": "",
  "nascimento_pai": "",
  "nome_mae": "",
  "cpf_mae": "",
  "identidade_mae": "",
  "nascimento_mae": "",
  "quantidade_dependentes": "",
  "nome_conjuge": "",
  "fone_conjuge": "",
  "cpf_conjuge": "",
  "rg_conjuge": "",
  "data_nascimento_conjuge": "",
  "nome_contador": "",
  "telefone_contador": "",
  "orgao_publico": "",
  "im": "",
  "nome_representante_1": "",
  "cpf_representante_1": "",
  "identidade_representante_1": "",
  "nome_representante_2": "",
  "cpf_representante_2": "",
  "identidade_representante_2": "",
  "iss_classificacao_padrao": "00",
  "desconto_irrf_valor_inferior": "",
  "ref_com_empresa1": "",
  "ref_com_fone1": "",
  "ref_com_empresa2": "",
  "ref_com_fone2": "",
  "ref_pes_nome1": "",
  "ref_pes_fone1": "",
  "ref_pes_nome2": "",
  "ref_pes_fone2": "",
  "obs": "",
  "alerta": ""
}
</code>
`;

const del = `
<code>
    https://{{meudominio.com.br}}/webservice/v1/cliente/2253
</code>
`;


const tabs = [
  { id: 1, label: "GET", content: get, color: "#191c25", textColor: "#00c76a"},
  { id: 2, label: "POST", content: post, color: "#191c25", textColor: "#fe9719" },
  { id: 3, label: "PUT", content: put, color: "#191c25", textColor: "#137ce3" },
  { id: 4, label: "DELETE", content: del, color: "#191c25", textColor: "#f85f57" }
];

const Tabs = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <TabContainer>
      {tabs.map((tab) => (
        <TabLabel 
          key={tab.id} 
          active={activeTab === tab.id} 
          onClick={() => setActiveTab(tab.id)}
          color={tab.color}
          textColor={tab.textColor}
        >
          {tab.label}
        </TabLabel>
      ))}
      {tabs.map((tab) => (
        <TabContent key={tab.id} active={activeTab === tab.id}>
          
          <p>{tab.content}</p>
        </TabContent>
      ))}
    </TabContainer>
  );
};

export default Tabs;

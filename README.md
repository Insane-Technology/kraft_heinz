# Challenge Kraft Heinz FIAP 2023

Desenvolver requisitos de uma solução sistêmica para monitoramento da gestão ambiental da empresa por linha de produto (utilização de recursos sustentáveis, economia de energia e água, abastecimento responsável e apoio comunitário).

# Apresentação Pitch
### Assista o vídeo do Pitch em nossa página Web <https://kraftheinz.42g.com.br>

# Protótipo
### Acesse o link <https://prototype-kraftheinz.42g.com.br>

# Modelagem da API
### Documentação API <https://api-kraftheinz.42g.com.br/docs>

# Modelagem dos Dados
![modelo_logico](https://github.com/Insane-Technology/kraft_heinz/blob/main/01-ModelagemDados/ModeloLogico.png#gh-dark-mode-only)
![modelo_relacional](https://github.com/Insane-Technology/kraft_heinz/blob/main/01-ModelagemDados/ModeloRelacional.png#gh-dark-mode-only)

# Modelo Físico
```sql
CREATE TABLE tb_agua (
    id_agua           NUMBER(11) NOT NULL,
    tb_setor_id_setor NUMBER(3) NOT NULL,
    area_risco        CHAR(1) NOT NULL,
    dt_consumo        DATE NOT NULL,
    qtd_consumida     NUMBER(8) NOT NULL
);

ALTER TABLE tb_agua ADD CONSTRAINT tb_agua_pk PRIMARY KEY ( id_agua );

CREATE TABLE tb_cidade (
    id_cidade           NUMBER(7) NOT NULL,
    tb_estado_id_estado NUMBER(4) NOT NULL,
    nm_cidade           VARCHAR2(85) NOT NULL
);

ALTER TABLE tb_cidade ADD CONSTRAINT tb_cidade_pk PRIMARY KEY ( id_cidade );

CREATE TABLE tb_desperdicio (
    id_desperdicio        NUMBER(11) NOT NULL,
    tb_produto_id_produto NUMBER(5) NOT NULL,
    tb_setor_id_setor     NUMBER(3) NOT NULL,
    qtd_kg                NUMBER(8) NOT NULL
);

ALTER TABLE tb_desperdicio ADD CONSTRAINT tb_desperdicio_pk PRIMARY KEY ( id_desperdicio );

CREATE TABLE tb_energia (
    id_energia                   NUMBER(11) NOT NULL,
    tb_tipo_ener_id_tipo_energia NUMBER(3) NOT NULL,
    tb_setor_id_setor            NUMBER(3) NOT NULL,
    dt_consumo                   DATE NOT NULL,
    qtd_consumida                NUMBER(8) NOT NULL
);

ALTER TABLE tb_energia ADD CONSTRAINT tb_energia_pk PRIMARY KEY ( id_energia );

CREATE TABLE tb_estado (
    id_estado       NUMBER(4) NOT NULL,
    tb_pais_id_pais NUMBER(3) NOT NULL,
    nm_estado       VARCHAR2(60) NOT NULL,
    ds_abreviacao   VARCHAR2(3)
);

ALTER TABLE tb_estado ADD CONSTRAINT tb_estado_pk PRIMARY KEY ( id_estado );

CREATE TABLE tb_fabrica (
    id_fabrica          NUMBER(4) NOT NULL,
    tb_cidade_id_cidade NUMBER(7) NOT NULL,
    nm_fabrica          VARCHAR2(50) NOT NULL,
    ds_registro         VARCHAR2(20)
);

ALTER TABLE tb_fabrica ADD CONSTRAINT tb_fabrica_pk PRIMARY KEY ( id_fabrica );

CREATE TABLE tb_pais (
    id_pais       NUMBER(3) NOT NULL,
    nm_pais       VARCHAR2(60) NOT NULL,
    ds_iso_alpha2 VARCHAR2(2),
    ds_iso_alpha3 VARCHAR2(3),
    ddi_pais      VARCHAR2(3)
);

ALTER TABLE tb_pais ADD CONSTRAINT tb_pais_pk PRIMARY KEY ( id_pais );

CREATE TABLE tb_produto (
    id_produto NUMBER(5) NOT NULL,
    nm_produto VARCHAR2(50) NOT NULL,
    cd_produto VARCHAR2(30) NOT NULL
);

ALTER TABLE tb_produto ADD CONSTRAINT tb_produto_pk PRIMARY KEY ( id_produto );

CREATE TABLE tb_setor (
    id_setor              NUMBER(3) NOT NULL,
    tb_fabrica_id_fabrica NUMBER(4) NOT NULL,
    nm_setor              VARCHAR2(50) NOT NULL
);

ALTER TABLE tb_setor ADD CONSTRAINT tb_setor_pk PRIMARY KEY ( id_setor );

CREATE TABLE tb_tipo_energia (
    id_tipo_energia NUMBER(3) NOT NULL,
    nm_tipo_energia VARCHAR2(50) NOT NULL,
    renovavel       CHAR(1) NOT NULL
);

ALTER TABLE tb_tipo_energia ADD CONSTRAINT tb_tipo_ener_pk PRIMARY KEY ( id_tipo_energia );

ALTER TABLE tb_agua
    ADD CONSTRAINT tb_agua_tb_setor_fk FOREIGN KEY ( tb_setor_id_setor )
        REFERENCES tb_setor ( id_setor );

ALTER TABLE tb_cidade
    ADD CONSTRAINT tb_cidade_tb_estado_fk FOREIGN KEY ( tb_estado_id_estado )
        REFERENCES tb_estado ( id_estado )
            ON DELETE CASCADE;

ALTER TABLE tb_desperdicio
    ADD CONSTRAINT tb_desperdicio_tb_produto_fk FOREIGN KEY ( tb_produto_id_produto )
        REFERENCES tb_produto ( id_produto );

ALTER TABLE tb_desperdicio
    ADD CONSTRAINT tb_desperdicio_tb_setor_fk FOREIGN KEY ( tb_setor_id_setor )
        REFERENCES tb_setor ( id_setor );

ALTER TABLE tb_energia
    ADD CONSTRAINT tb_energia_tb_setor_fk FOREIGN KEY ( tb_setor_id_setor )
        REFERENCES tb_setor ( id_setor );

ALTER TABLE tb_energia
    ADD CONSTRAINT tb_energia_tb_tipo_energia_fk FOREIGN KEY ( tb_tipo_ener_id_tipo_energia )
        REFERENCES tb_tipo_energia ( id_tipo_energia );

ALTER TABLE tb_estado
    ADD CONSTRAINT tb_estado_tb_pais_fk FOREIGN KEY ( tb_pais_id_pais )
        REFERENCES tb_pais ( id_pais )
            ON DELETE CASCADE;

ALTER TABLE tb_fabrica
    ADD CONSTRAINT tb_fabrica_tb_cidade_fk FOREIGN KEY ( tb_cidade_id_cidade )
        REFERENCES tb_cidade ( id_cidade );

ALTER TABLE tb_setor
    ADD CONSTRAINT tb_setor_tb_fabrica_fk FOREIGN KEY ( tb_fabrica_id_fabrica )
        REFERENCES tb_fabrica ( id_fabrica );
```

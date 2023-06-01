CREATE TABLE tb_agua (
    id_agua           BIGINT NOT NULL,
    tb_setor_id_setor SMALLINT NOT NULL,
    area_risco        CHAR(1) NOT NULL,
    dt_consumo        DATETIME NOT NULL,
    qtd_consumida     INT NOT NULL
);

ALTER TABLE tb_agua ADD CONSTRAINT tb_agua_pk PRIMARY KEY ( id_agua );

CREATE TABLE tb_cidade (
    id_cidade           INT NOT NULL,
    tb_estado_id_estado SMALLINT NOT NULL,
    nm_cidade           VARCHAR(85) NOT NULL
);

ALTER TABLE tb_cidade ADD CONSTRAINT tb_cidade_pk PRIMARY KEY ( id_cidade );

CREATE TABLE tb_desperdicio (
    id_desperdicio        BIGINT NOT NULL,
    tb_produto_id_produto INT NOT NULL,
    tb_setor_id_setor     SMALLINT NOT NULL,
    qtd_kg                INT NOT NULL
);

ALTER TABLE tb_desperdicio ADD CONSTRAINT tb_desperdicio_pk PRIMARY KEY ( id_desperdicio );

CREATE TABLE tb_energia (
    id_energia                   BIGINT NOT NULL,
    tb_tipo_ener_id_tipo_energia SMALLINT NOT NULL,
    tb_setor_id_setor            SMALLINT NOT NULL,
    dt_consumo                   DATETIME NOT NULL,
    qtd_consumida                INT NOT NULL
);

ALTER TABLE tb_energia ADD CONSTRAINT tb_energia_pk PRIMARY KEY ( id_energia );

CREATE TABLE tb_estado (
    id_estado       SMALLINT NOT NULL,
    tb_pais_id_pais SMALLINT NOT NULL,
    nm_estado       VARCHAR(60) NOT NULL,
    ds_abreviacao   VARCHAR(3)
);

ALTER TABLE tb_estado ADD CONSTRAINT tb_estado_pk PRIMARY KEY ( id_estado );

CREATE TABLE tb_fabrica (
    id_fabrica          SMALLINT NOT NULL,
    tb_cidade_id_cidade INT NOT NULL,
    nm_fabrica          VARCHAR(50) NOT NULL,
    ds_registro         VARCHAR(20)
);

ALTER TABLE tb_fabrica ADD CONSTRAINT tb_fabrica_pk PRIMARY KEY ( id_fabrica );

CREATE TABLE tb_pais (
    id_pais       SMALLINT NOT NULL,
    nm_pais       VARCHAR(60) NOT NULL,
    ds_iso_alpha2 VARCHAR(2),
    ds_iso_alpha3 VARCHAR(3),
    ddi_pais      VARCHAR(3)
);

ALTER TABLE tb_pais ADD CONSTRAINT tb_pais_pk PRIMARY KEY ( id_pais );

CREATE TABLE tb_produto (
    id_produto INT NOT NULL,
    nm_produto VARCHAR(50) NOT NULL,
    cd_produto VARCHAR(30) NOT NULL
);

ALTER TABLE tb_produto ADD CONSTRAINT tb_produto_pk PRIMARY KEY ( id_produto );

CREATE TABLE tb_setor (
    id_setor              SMALLINT NOT NULL,
    tb_fabrica_id_fabrica SMALLINT NOT NULL,
    nm_setor              VARCHAR(50) NOT NULL
);

ALTER TABLE tb_setor ADD CONSTRAINT tb_setor_pk PRIMARY KEY ( id_setor );

CREATE TABLE tb_tipo_energia (
    id_tipo_energia SMALLINT NOT NULL,
    nm_tipo_energia VARCHAR(50) NOT NULL,
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

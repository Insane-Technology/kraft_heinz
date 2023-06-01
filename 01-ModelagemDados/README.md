```mermaid
erDiagram
    ENERGIA }o--|| TIPO_ENERGIA : contains
    
    ENERGIA }o--|| SETOR : contains
    SETOR ||--o{ AGUA : contain
    SETOR ||--o{ DESPERDICIO : contains
    SETOR }o--|| FABRICA : contains
    
    FABRICA }o--|| CIDADE : contains
    CIDADE }o--|| ESTADO : contains
    ESTADO }o--|| PAIS : contains
    
    DESPERDICIO ||--o{ PRODUTO : contains
    
    
```

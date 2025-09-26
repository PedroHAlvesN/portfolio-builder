-- Cria a tabela "portfolios" para armazenar os portfólios dos usuários.
CREATE TABLE public.portfolios (
    -- Coluna de identificação única para cada portfólio.
    -- Utiliza a extensão "uuid-ossp" para gerar UUIDs v4 como valor padrão.
    id uuid NOT NULL DEFAULT uuid_generate_v4() PRIMARY KEY,

    -- Chave estrangeira que referencia a tabela de usuários do Supabase.
    -- Garante que cada portfólio esteja associado a um usuário existente.
    -- A opção "ON DELETE CASCADE" remove o portfólio se o usuário for excluído.
    user_id uuid NOT NULL REFERENCES auth.users(id) ON DELETE CASCADE,

    -- Coluna para armazenar o conteúdo HTML do portfólio do usuário.
    portfolio_html text,

    -- Timestamp de quando o registro foi criado.
    -- "timestamptz" armazena o timestamp com fuso horário (sempre em UTC no Supabase).
    -- O valor padrão é o momento atual da inserção.
    created_at timestamp with time zone NOT NULL DEFAULT now(),

    -- Timestamp da última atualização do registro.
    -- O valor padrão é o momento atual da inserção.
    -- Esta coluna pode ser atualizada manualmente ou através de triggers.
    updated_at timestamp with time zone NOT NULL DEFAULT now()
);

-- Adiciona um comentário à tabela para documentação.
COMMENT ON TABLE public.portfolios IS 'Armazena os portfólios em HTML criados pelos usuários.';

-- Opcional: Habilita a Row Level Security (RLS) na tabela.
-- É uma boa prática de segurança no Supabase para controlar o acesso aos dados.
ALTER TABLE public.portfolios ENABLE ROW LEVEL SECURITY;